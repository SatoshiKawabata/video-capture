export const define = component => {
  customElements.define(component.tagName, component);
};

export const merge = (origin, diff) => {
  for (let k in diff) {
      if (!diff[k] || isPrimitive(diff[k])) {
          origin[k] = diff[k];
      } else if (diff[k].constructor === Object) {
          if (!origin[k]) {
              origin[k] = {};
          }
          merge(origin[k], diff[k]);
      } else if (diff[k].constructor === Array) {
          if (!origin[k]) {
              origin[k] = [];
          }
          merge(origin[k], diff[k]);
      }
  }
};

const typeEquals = (type, target) => {
  const clas = Object.prototype.toString.call(target).slice(8, -1);
  return clas === type;
};

const isPrimitive = a => {
  return typeEquals("Number", a) || typeEquals("Boolean", a) || typeEquals("String", a);
};