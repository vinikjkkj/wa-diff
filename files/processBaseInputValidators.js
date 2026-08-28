__d(
  "processBaseInputValidators",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
      if (typeof n == "function") return [n(t)];
      var r = [];
      for (var o of n)
        Array.isArray(o)
          ? r.push.apply(r, e(t, o))
          : typeof o == "function" && r.push(o(t));
      return r.filter(function (e) {
        return e.type !== "CORRECT";
      });
    }
    i.default = e;
  },
  66,
);
