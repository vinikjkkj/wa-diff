__d(
  "useWAWebViewRepliesThreads",
  ["WAWebLoadViewRepliesThreadsAction", "WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.viewRepliesThreads;
      s(
        function () {
          t != null &&
            o("WAWebLoadViewRepliesThreadsAction")
              .loadViewRepliesThreads(e)
              .finally(r("WAWebNoop"));
        },
        [t, e],
      );
    }
    l.default = u;
  },
  98,
);
