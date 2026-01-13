// Template de email HTML para confirmação de newsletter
export const getConfirmationEmailTemplate = (nome: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #fc622b 0%, #ff8a4d 100%);
                padding: 40px 20px;
                text-align: center;
                color: white;
            }
            .header h1 {
                font-size: 28px;
                font-weight: 600;
                margin-bottom: 10px;
            }
            .header p {
                font-size: 14px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
                color: #444;
                line-height: 1.6;
            }
            .greeting {
                font-size: 18px;
                font-weight: 600;
                color: #444;
                margin-bottom: 20px;
            }
            .message {
                font-size: 15px;
                color: #6f6f6f;
                margin-bottom: 25px;
                line-height: 1.8;
            }
            .highlight {
                background-color: #fff5f0;
                padding: 20px;
                border-left: 4px solid #fc622b;
                margin: 25px 0;
                border-radius: 4px;
            }
            .highlight h3 {
                color: #fc622b;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            .highlight ul {
                list-style: none;
                padding-left: 0;
            }
            .highlight li {
                color: #6f6f6f;
                font-size: 13px;
                padding: 5px 0;
                padding-left: 20px;
                position: relative;
            }
            .highlight li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #fc622b;
                font-weight: bold;
            }
            .cta-button {
                display: inline-block;
                background-color: #fc622b;
                color: white;
                padding: 12px 30px;
                border-radius: 6px;
                text-decoration: none;
                font-weight: 600;
                font-size: 14px;
                margin: 25px 0;
                transition: background-color 0.3s ease;
            }
            .cta-button:hover {
                background-color: #e64a19;
            }
            .footer {
                background-color: #f9f9f9;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #eee;
                font-size: 12px;
                color: #999;
            }
            .social-links {
                margin-top: 20px;
            }
            .social-links a {
                color: #fc622b;
                text-decoration: none;
                margin: 0 10px;
                font-size: 13px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🌿 ABANIC Life</h1>
                <p>Bem-vindo à nossa newsletter exclusiva</p>
            </div>
            
            <div class="content">
                <div class="greeting">Olá, ${nome}! 👋</div>
                
                <div class="message">
                    Obrigado por se inscrever na newsletter ABANIC Life! Estamos felizes em ter você conosco.
                </div>
                
                <div class="highlight">
                    <h3>O que você vai receber:</h3>
                    <ul>
                        <li>Lançamentos exclusivos em primeira mão</li>
                        <li>Edições especiais e ofertas VIP</li>
                        <li>Dicas de bem-estar e estética</li>
                        <li>Eventos e promoções da marca</li>
                        <li>Conteúdos premium personalizados</li>
                    </ul>
                </div>
                
                <div class="message">
                    Fique por dentro de tudo que acontece na ABANIC Life. Nos vemos em breve! 💚
                </div>
                
                <a href="https://abaniclife.com" class="cta-button">Visitar nosso site</a>
            </div>
            
            <div class="footer">
                <p>© 2026 ABANIC Life. Todos os direitos reservados.</p>
                <p style="margin-top: 10px;">
                    Se você não deseja receber mais emails, poderá se desinscrever a qualquer momento.
                </p>
                <div class="social-links">
                    <a href="mailto:contato@abaniclife.com">Entre em contato</a> | 
                    <a href="https://abaniclife.com">Acesse o site</a>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};
