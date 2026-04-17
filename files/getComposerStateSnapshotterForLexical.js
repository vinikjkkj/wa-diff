__d(
  "getComposerStateSnapshotterForLexical",
  ["CometLruCache", "memoizeWithArgsWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("CometLruCache").create(20);
    function s(e, t) {
      return JSON.stringify({ commentID: t != null ? t : "", feedbackID: e });
    }
    function u(t, n) {
      var r = s(t, n);
      return {
        clear: function () {
          e.delete(r);
        },
        get: function () {
          return e.get(r);
        },
        set: function (n) {
          e.set(r, n);
        },
      };
    }
    var c = r("memoizeWithArgsWeak")(u);
    l.default = c;
  },
  98,
);
