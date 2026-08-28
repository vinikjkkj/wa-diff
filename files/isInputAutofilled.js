__d(
  "isInputAutofilled",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      try {
        return e.matches(":autofill");
      } catch (t) {
        try {
          return e.matches(":-webkit-autofill");
        } catch (e) {
          return !1;
        }
      }
    }
    i.default = e;
  },
  66,
);
