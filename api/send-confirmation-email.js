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
    // Usar API REST do EmailJS
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_54g6ge8",
        template_id: "template_newsletter",
        user_id: "GnALhYWo26CYtbitj",
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: email,
          to_name: nome,
          nome: nome,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.statusText}`);
    }

    const result = await response.json();

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
