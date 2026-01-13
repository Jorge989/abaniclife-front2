export default async function handler(req, res) {
  // Apenas retornar sucesso sem enviar email por enquanto
  // A inscrição já foi feita via Web3Forms

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
    // Placeholder: você pode configurar um serviço de email aqui
    // Por enquanto apenas retorna sucesso para evitar erros na UI
    console.log(`Confirmação solicitada para: ${nome} (${email})`);

    return res.status(200).json({
      success: true,
      message: "Email de confirmação será enviado em breve",
    });
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({
      success: false,
      message: "Erro ao processar confirmação",
    });
  }
}
