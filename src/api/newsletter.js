import { Resend } from "resend";
import { getConfirmationEmailTemplate } from "../utils/emailService";

const resend = new Resend("re_MR7easHv_FX6CjatayeNa1YBKJbDZT9zd");

export async function sendNewsletterConfirmation(nome: string, email: string) {
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
