export const ternary = (bool, truthy, falsy) => (bool ? truthy : falsy);

export const equal = (obj1, obj2) => obj1 === obj2;

export const entries = (obj) => ternary(obj, Object.entries(obj), []);

export const upperCase = (str) => ternary(str, str?.toUpperCase(), "");
