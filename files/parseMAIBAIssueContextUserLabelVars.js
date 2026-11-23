__d(
  "parseMAIBAIssueContextUserLabelVars",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return {};
      try {
        var t = JSON.parse(e);
        if (t == null || typeof t != "object" || Array.isArray(t)) return {};
        var n = {};
        for (var r of Object.keys(t)) {
          var o = t[r];
          typeof o == "string" && (n[r] = o);
        }
        return n;
      } catch (e) {
        return {};
      }
    }
    i.default = e;
  },
  66,
);
