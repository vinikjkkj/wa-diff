__d(
  "useWAWebAiThreadFTSSearch",
  [
    "WAWebFtsMsgsCollection",
    "WAWebThreadMsgUtils",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(19),
        a;
      n[0] !== e
        ? ((a = new (r("WAWebFtsMsgsCollection"))(e)), (n[0] = e), (n[1] = a))
        : (a = n[1]);
      var i = a,
        l = p(_),
        s = l[0],
        u = l[1],
        d = p(!1),
        g = d[0],
        h = d[1],
        y = m(null),
        C = p(t),
        b = C[0],
        v = C[1];
      t !== b && (v(t), r("isStringNullOrEmpty")(t) ? h(!1) : h(!0));
      var S;
      n[2] !== i
        ? ((S = function () {
            var e = i.toArray(),
              t = [];
            for (var n of e) {
              var r = o("WAWebThreadMsgUtils").getMsgAiThread(n);
              r != null && t.push({ msg: n, threadId: r });
            }
            u(t);
          }),
          (n[2] = i),
          (n[3] = S))
        : (S = n[3]);
      var R = S,
        L,
        E;
      (n[4] !== e || n[5] !== i || n[6] !== R || n[7] !== t
        ? ((L = function () {
            var n;
            if (r("isStringNullOrEmpty")(t)) {
              var o;
              ((o = y.current) == null || o.abort(),
                i.resetSearch(),
                i.delete());
              return;
            }
            (n = y.current) == null || n.abort();
            var a = new AbortController();
            y.current = a;
            var l = i.search({ chat: e, count: f, searchTerm: t.trim() });
            if (l == null) {
              (R(), h(!1));
              return;
            }
            return (
              l
                .then(function () {
                  a.signal.aborted || R();
                })
                .finally(function () {
                  a.signal.aborted || h(!1);
                }),
              function () {
                a.abort();
              }
            );
          }),
          (E = [t, e, i, R]),
          (n[4] = e),
          (n[5] = i),
          (n[6] = R),
          (n[7] = t),
          (n[8] = L),
          (n[9] = E))
        : ((L = n[8]), (E = n[9])),
        c(L, E),
        o("useWAWebListener").useListener(i, "bulk_remove", R));
      var k, I;
      (n[10] !== i
        ? ((k = function () {
            return function () {
              var e;
              ((e = y.current) == null || e.abort(), i.delete(!0));
            };
          }),
          (I = [i]),
          (n[10] = i),
          (n[11] = k),
          (n[12] = I))
        : ((k = n[11]), (I = n[12])),
        c(k, I));
      var T;
      n[13] !== s || n[14] !== t
        ? ((T = r("isStringNullOrEmpty")(t) ? _ : s),
          (n[13] = s),
          (n[14] = t),
          (n[15] = T))
        : (T = n[15]);
      var D;
      return (
        n[16] !== g || n[17] !== T
          ? ((D = { isSearching: g, results: T }),
            (n[16] = g),
            (n[17] = T),
            (n[18] = D))
          : (D = n[18]),
        D
      );
    }
    l.default = g;
  },
  98,
);
