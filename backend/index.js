import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const chatIds = [
  process.env.TELEGRAM_CHAT_ID_1,
  process.env.TELEGRAM_CHAT_ID_2,
  // process.env.TELEGRAM_CHAT_ID_3
];

app.post("/api/contact", async (req, res) => {
  const { name, contact, additionalInfo } = req.body;

  if (!name || !contact) {
    return res.status(400).json({ error: "Необходимо указать имя и контактные данные" });
  }

  const message = `Новая заявка с сайта:\n\nИмя: ${name}\nКонтакт: ${contact}\nДополнительная информация: ${
    additionalInfo || "нет"
  }`;

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    for (let chatId of chatIds) {
      const telegramResponse = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!telegramResponse.ok) {
        throw new Error("Ошибка отправки сообщения в Telegram");
      }

      res.status(200).json({ message: "Сообщение успешно отправлено в Telegram" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ошибка отправки сообщения в Telegram" });
  }
});

const PORT = 3211;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
