__d(
  "useWAWebViewRepliesThreads",
  [
    "WAWebLoadViewRepliesThreadsAction",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.viewRepliesThreads,
        a,
        i;
      (t[0] !== e || t[1] !== n
        ? ((a = function () {
            n != null &&
              o("WAWebLoadViewRepliesThreadsAction")
                .loadViewRepliesThreads(e)
                .finally(r("WAWebNoop"));
          }),
          (i = [n, e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((a = t[2]), (i = t[3])),
        s(a, i));
    }
    l.default = u;
  },
  98,
);
