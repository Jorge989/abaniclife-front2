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
    console.log("Enviando email para:", email);

    // Enviar email de confirmação via EmailJS REST API
    const emailJsUrl = "https://api.emailjs.com/api/v1.0/email/send";
    const payload = {
      service_id: "service_54g6ge8",
      template_id: "template_mgl3s8w",
      user_id: "GnALhYWo26CYtbitj",
      template_params: {
        to_email: email,
        to_name: nome,
        nome: nome,
      },
    };

    // Incluir accessToken se variável de ambiente estiver configurada
    if (process.env.EMAILJS_PRIVATE_KEY) {
      payload.accessToken = process.env.EMAILJS_PRIVATE_KEY;
    }

    console.log("Payload:", JSON.stringify(payload));

    const response = await fetch(emailJsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("EmailJS Response Status:", response.status);
    console.log("EmailJS Response Text:", responseText);

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "Erro ao enviar email via EmailJS",
        error: responseText,
      });
    }

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      result = responseText;
    }

    return res.status(200).json({
      success: true,
      message: "Email de confirmação enviado com sucesso",
      result,
    });
  } catch (error) {
    console.error("Erro geral:", error);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar email de confirmação",
      error: error.message,
    });
  }
}
