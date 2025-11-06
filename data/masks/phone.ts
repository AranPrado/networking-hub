export const maskPhone = (value: string) => {
  if (!value) return "";

  // Remove tudo que não for número
  const numericValue = value.replace(/\D/g, "");

  // Formata de acordo com o tamanho
  if (numericValue.length <= 2) return `(${numericValue}`;
  if (numericValue.length <= 7)
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
  if (numericValue.length <= 11)
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(
      2,
      7
    )}-${numericValue.slice(7)}`;

  // Se passar de 11 dígitos, corta o excesso
  return `(${numericValue.slice(0, 2)}) ${numericValue.slice(
    2,
    7
  )}-${numericValue.slice(7, 11)}`;
};
