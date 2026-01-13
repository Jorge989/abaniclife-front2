# Configuração do Sistema de Newsletter

## Como Funcionar

O sistema está configurado para enviar os dados do formulário (nome e email) para **Newsletter@abaniclife.com**.

## Opções de Configuração (escolha uma):

### **OPÇÃO 1: Formspree (Recomendado - Mais Simples)**

1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Configure o email de destino como: **Newsletter@abaniclife.com**
5. Copie o Form ID (algo como: `xpznxxxx`)
6. No arquivo `src/components/NewsletterSection.jsx`, substitua:
   ```javascript
   "https://formspree.io/f/YOUR_FORM_ID";
   ```
   por:
   ```javascript
   "https://formspree.io/f/xpznxxxx"; // Seu ID aqui
   ```

**Pronto!** Cada inscrição chegará no email Newsletter@abaniclife.com

---

### **OPÇÃO 2: Web3Forms (Alternativa)**

1. Acesse: https://web3forms.com/
2. Insira o email: **Newsletter@abaniclife.com**
3. Copie a Access Key gerada
4. Substitua o código em `NewsletterSection.jsx` por:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!email || !nome) return;

  setIsLoading(true);
  setErrorMessage("");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "SUA_ACCESS_KEY_AQUI",
        subject: `Nova inscrição na Newsletter - ${nome}`,
        from_name: "Abanic Life Website",
        name: nome,
        email: email,
        message: `Nova inscrição:\n\nNome: ${nome}\nEmail: ${email}\nData: ${new Date().toLocaleString(
          "pt-BR"
        )}`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setIsSubscribed(true);
      setEmail("");
      setNome("");
    } else {
      throw new Error("Erro ao enviar");
    }
  } catch (error) {
    console.error("Erro:", error);
    setErrorMessage("Erro ao processar inscrição. Tente novamente.");
  } finally {
    setIsLoading(false);
  }
};
```

---

### **OPÇÃO 3: EmailJS (Mais Controle)**

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Configure um Email Service (Gmail, Outlook, etc.)
4. Crie um Email Template
5. Instale o pacote:
   ```bash
   npm install @emailjs/browser
   ```
6. Use o código fornecido no dashboard

---

## Formato do Email Recebido

Você receberá emails assim:

```
Assunto: Nova inscrição na Newsletter - João Silva

Nova inscrição na Newsletter:

Nome: João Silva
Email: joao.silva@example.com
Data: 13/01/2026, 10:30:15
```

---

## Testando

1. Configure um dos serviços acima
2. Abra o site
3. Preencha nome e email na newsletter
4. Clique em "Assinar"
5. Verifique a caixa de entrada de **Newsletter@abaniclife.com**

---

## Recomendação Final

Use o **Formspree** - é o mais simples e direto. O plano gratuito permite 50 submissões/mês, que é mais que suficiente para começar.
