__d(
  "WATypedArraysCast",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t instanceof e
        ? t
        : typeof t == "string"
          ? new e(o("WABase64").decodeB64(t))
          : new e(t);
    }
    l.castTypedArrays = e;
  },
  98,
);
