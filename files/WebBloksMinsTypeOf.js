__d(
  "WebBloksMinsTypeOf",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (t == null) return 0;
      if (Array.isArray(t)) return 6;
      switch (typeof t) {
        case "boolean":
          return 1;
        case "string":
          return 2;
        case "number":
          return 4;
        case "function":
          return 8;
        case "object":
          return 7;
      }
      return -1;
    }
    i.default = e;
  },
  66,
);
