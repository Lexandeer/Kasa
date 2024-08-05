export default function checkType(name, expectedType) {
  if (expectedType === 'array') {
    // Vérifie si la valeur est un tableau
    if (!Array.isArray(name)) {
      throw new Error(`Type error: Expected an array but got '${typeof name}'`);
    }
  } else if (expectedType === 'object') {
    // Vérifie si la valeur est un objet (et non un tableau ou null)
    //En JavaScript, l'opérateur typeof renvoie "object" pour les objets, mais aussi pour null et les tableaux.
    if (typeof name !== 'object' || Array.isArray(name) || name === null) {
      throw new Error(
        `Type error: Expected an object but got '${typeof name}'`
      );
    }
  } else {
    // Vérifie les types primitifs (string, number, etc.)
    if (typeof name !== expectedType) {
      throw new Error(
        `Type error: Expected type '${expectedType}' but got '${typeof name}'`
      );
    }
  }
}
