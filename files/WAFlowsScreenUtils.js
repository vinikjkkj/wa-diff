__d(
  "WAFlowsScreenUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      e !== t &&
        (r === "web_tooling"
          ? n.push(s(e), { fromScreen: t })
          : n.push(s(e + n.location.search), { fromScreen: t }));
    }
    function l(e) {
      e.goBack();
    }
    function s(e) {
      return "/" + e.toLowerCase();
    }
    function u(e) {
      if (e == null) return 0;
      var t = e.match(/^(\d*\.?\d+)(ms|s)$/);
      if (!t) return 0;
      var n = parseFloat(t[1]),
        r = t[2];
      return r === "s" ? n * 1e3 : n;
    }
    ((i.pushScreenToHistory = e),
      (i.popScreenFromHistory = l),
      (i.getPathFromScreen = s),
      (i.getMilliseconds = u));
  },
  66,
);
