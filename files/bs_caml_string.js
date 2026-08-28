__d(
  "bs_caml_string",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t >= e.length || t < 0)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      return e.charCodeAt(t);
    }
    function l(e, t) {
      return String.fromCharCode(t).repeat(e);
    }
    ((i.get = e), (i.make = l));
  },
  null,
);
