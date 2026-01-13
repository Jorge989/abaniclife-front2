import { Resend } from "resend";
import { getConfirmationEmailTemplate } from "../utils/emailService";

export async function sendNewsletterConfirmation(nome, email) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY não configurada");
  }

  const resend = new Resend(apiKey);

  try {
    // Enviar confirmação para o usuário
    const result = await resend.emails.send({
      from: "ABANIC Life <onboarding@resend.dev>",
      to: email,
      subject: "Confirmação de inscrição - ABANIC Life Newsletter 🌿",
      html: getConfirmationEmailTemplate(nome),
    });

    return result;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
}
