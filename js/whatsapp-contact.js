const contactForm = document.querySelector('.contato__formulario');

if (contactForm) {
  const treatmentNames = [
    'REIKE',
    'Drenagem Linfática',
    'Massagem Relaxante',
    'Massagem Desportiva',
    'Massagem Modeladora',
    'Massagem com Pedras Quentes',
    'Massagem Relaxante com Vela nos Pés',
    'SPA dos Pés',
    'Reflexologia',
    'Hidratação com Argila e Parafina',
  ];
  const requestedTreatment = new URLSearchParams(window.location.search).get('tratamento');
  const messageField = contactForm.elements.mensagem;

  if (requestedTreatment && treatmentNames.includes(requestedTreatment)) {
    messageField.value = `Olá! Gostaria de agendar uma sessão de ${requestedTreatment}. Poderiam me informar os horários disponíveis?`;
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
      'Olá! Gostaria de falar com a equipe e solicitar um agendamento.',
      '',
      `Nome: ${formData.get('nome')}`,
      `E-mail: ${formData.get('email')}`,
      `Telefone: ${formData.get('telefone') || 'Não informado'}`,
      '',
      `Mensagem: ${formData.get('mensagem')}`,
    ].join('\n');

    window.location.assign(`https://wa.me/351910526079?text=${encodeURIComponent(message)}`);
  });
}
