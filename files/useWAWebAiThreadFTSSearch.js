__d(
  "useWAWebAiThreadFTSSearch",
  [
    "WAWebFtsMsgsCollection",
    "WAWebThreadMsgUtils",
    "isStringNullOrEmpty",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useRef,
      p = s.useState,
      _ = [],
      f = 20;
    function g(e, t) {
      var n = d(
          function () {
            return new (r("WAWebFtsMsgsCollection"))(e);
          },
          [e],
        ),
        a = p(_),
        i = a[0],
        l = a[1],
        s = p(!1),
        g = s[0],
        h = s[1],
        y = m(null),
        C = p(t),
        b = C[0],
        v = C[1];
      t !== b && (v(t), r("isStringNullOrEmpty")(t) ? h(!1) : h(!0));
      var S = u(
        function () {
          var e = n.toArray(),
            t = [];
          for (var r of e) {
            var a = o("WAWebThreadMsgUtils").getMsgAiThread(r);
            a != null && t.push({ msg: r, threadId: a });
          }
          l(t);
        },
        [n],
      );
      return (
        c(
          function () {
            var o;
            if (r("isStringNullOrEmpty")(t)) {
              var a;
              ((a = y.current) == null || a.abort(),
                n.resetSearch(),
                n.delete());
              return;
            }
            (o = y.current) == null || o.abort();
            var i = new AbortController();
            y.current = i;
            var l = n.search({ chat: e, count: f, searchTerm: t.trim() });
            if (l == null) {
              (S(), h(!1));
              return;
            }
            return (
              l
                .then(function () {
                  i.signal.aborted || S();
                })
                .finally(function () {
                  i.signal.aborted || h(!1);
                }),
              function () {
                i.abort();
              }
            );
          },
          [t, e, n, S],
        ),
        o("useWAWebListener").useListener(n, "bulk_remove", S),
        c(
          function () {
            return function () {
              var e;
              ((e = y.current) == null || e.abort(), n.delete(!0));
            };
          },
          [n],
        ),
        { isSearching: g, results: r("isStringNullOrEmpty")(t) ? _ : i }
      );
    }
    l.default = g;
  },
  98,
);
