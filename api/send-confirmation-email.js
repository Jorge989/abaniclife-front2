import emailjs from "@emailjs/nodejs";

// Inicializa EmailJS com chave pública e privada do ambiente
emailjs.init({
  publicKey: "GnALhYWo26CYtbitj",
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      success: false,
      message: "Nome e email são obrigatórios",
    });
  }

  try {
    console.log("Enviando email via EmailJS Node SDK para:", email);

    const result = await emailjs.send("service_54g6ge8", "template_mgl3s8w", {
      to_email: email,
      to_name: nome,
      nome: nome,
    });

    return res.status(200).json({
      success: true,
      message: "Email de confirmação enviado com sucesso",
      result,
    });
  } catch (error) {
    console.error("Erro ao enviar email via EmailJS Node SDK:", error);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar email de confirmação",
      error: error.message,
    });
  }
}
