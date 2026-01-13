const emailjs = require("@emailjs/nodejs");

emailjs.init({
  publicKey: "GnALhYWo26CYtbitj",
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ message: "Nome e email são obrigatórios" });
  }

  if (!process.env.EMAILJS_PRIVATE_KEY) {
    return res.status(500).json({
      success: false,
      message: "EMAILJS_PRIVATE_KEY não configurada",
    });
  }

  try {
    const result = await emailjs.send(
      "service_54g6ge8",
      "template_newsletter",
      {
        to_email: email,
        to_name: nome,
        nome: nome,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Email de confirmação enviado com sucesso",
      result,
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar email de confirmação",
      error: error.message,
    });
  }
};
