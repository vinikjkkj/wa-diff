__d(
  "WAWebThreadModelResolver",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n, r, o, a;
      return (n =
        (r = (o = e.aiThreads) == null ? void 0 : o.get(t)) != null
          ? r
          : (a = e.viewRepliesThreads) == null
            ? void 0
            : a.get(t)) != null
        ? n
        : null;
    }
    function l(t, n) {
      if (n != null) {
        var r;
        return (r = e(t, n)) != null ? r : t;
      }
      return t;
    }
    ((i.getThreadModel = e), (i.resolveThreadOrChat = l));
  },
  66,
);
