__d(
  "useWAWebAiThreads",
  ["WAWebAiThreadCollection", "WAWebNoop", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = c(!1),
        n = t[0],
        a = t[1],
        i = c(function () {
          var t;
          return (t = e.aiThreads) != null
            ? t
            : new (o("WAWebAiThreadCollection").AiThreadCollection)();
        }),
        l = i[0],
        s = i[1],
        d = c(l.toArray()),
        m = d[0],
        p = d[1];
      o("useWAWebListener").useListener(e, "change:aiThreads", function () {
        if (e.aiThreads != null) {
          var t = e.aiThreads;
          s(function (e) {
            var n = e.toArray();
            return (n.length > 0 && t.add(n, { merge: !0 }), t);
          });
        }
      });
      var _ = c(l),
        f = _[0],
        g = _[1];
      return (
        l !== f && (g(l), l.sort(), p(l.toArray())),
        u(
          function () {
            l.initializeAiThreads(e.id)
              .then(function () {
                a(!0);
              })
              .finally(r("WAWebNoop"));
          },
          [l, e],
        ),
        o("useWAWebListener").useListener(
          l,
          ["add", "remove", "change", "reset"],
          function () {
            (l.sort(), p(l.toArray()));
          },
        ),
        [m, n]
      );
    }
    l.default = d;
  },
  98,
);
