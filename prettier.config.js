/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // point-virgules obligatoires
  singleQuote: true, // utiliser des 'quotes' simples
  tabWidth: 2, // indentation 2 espaces
  trailingComma: "es5", // virgule finale dans les objets/arrays
  printWidth: 100, // largeur max avant retour à la ligne
  bracketSpacing: true, // { foo: bar } au lieu de {foo:bar}
  plugins: [require("prettier-plugin-tailwindcss")], // trie automatiquement les classes Tailwind
};
