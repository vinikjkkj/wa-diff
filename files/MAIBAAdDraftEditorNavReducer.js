__d(
  "MAIBAAdDraftEditorNavReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      switch (t.type) {
        case "PUSH":
          return e[e.length - 1] === t.viewId ? e : [].concat(e, [t.viewId]);
        case "POP":
          return e.length <= 1 ? e : e.slice(0, -1);
        case "GOTO": {
          var n = e.indexOf(t.viewId);
          return n < 0 ? e : e.slice(0, n + 1);
        }
        case "RESET":
          return [t.viewId];
        default:
          return e;
      }
    }
    function l(e) {
      return [e];
    }
    ((i.navReducer = e), (i.initialNavState = l));
  },
  66,
);
