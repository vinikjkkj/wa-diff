__d(
  "BaseMAIBARenderer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return typeof e == "string" ? e : null;
    }
    function l(e) {
      return typeof e == "number" && Number.isInteger(e) ? e : null;
    }
    function s(e) {
      return typeof e == "boolean" ? e : null;
    }
    ((i.getString = e), (i.getInt = l), (i.getBool = s));
  },
  66,
);
