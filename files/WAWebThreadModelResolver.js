__d(
  "WAWebThreadModelResolver",
  ["WAWebThreadsGating"],
  function (t, n, r, o, a, i, l) {
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
    function s(t, n) {
      if (n != null && o("WAWebThreadsGating").isThreadLoadingInfraEnabled()) {
        var r;
        return (r = e(t, n)) != null ? r : t;
      }
      return t;
    }
    ((l.getThreadModel = e), (l.resolveThreadOrChat = s));
  },
  98,
);
