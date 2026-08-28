__d(
  "validateBaseInput",
  ["processBaseInputValidators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a = n != null && !e ? r("processBaseInputValidators")(t, n) : [];
      if (a.length === 0)
        return {
          allResults: a,
          topResultReason: null,
          topResultType: "CORRECT",
        };
      var i = a.some(function (e) {
          return e.type === "ERROR";
        }),
        l =
          (o = a.find(function (e) {
            return e.type === (i ? "ERROR" : "WARN");
          })) != null
            ? o
            : null;
      return {
        allResults: a,
        topResultReason: l != null && l.reason != null ? l.reason : null,
        topResultType: l != null ? l.type : "CORRECT",
      };
    }
    l.default = e;
  },
  98,
);
