__d(
  "adsMAIBAFormatIGGoalSummary",
  ["isValidURL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return e === "NONE" ? null : e === "INSTAGRAM_HANDLE" ? u(n) : s(t);
    }
    function s(e) {
      if (e == null) return null;
      var t = e.trim();
      return t !== "" && r("isValidURL")(t.toLowerCase()) ? t : null;
    }
    function u(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : "@" + t;
    }
    l.default = e;
  },
  98,
);
