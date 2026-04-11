__d(
  "useWAWebAiThreads",
  [
    "WAWebAiThreadCollection",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = c(!1),
        a = n[0],
        i = n[1],
        l;
      t[0] !== e.aiThreads
        ? ((l = function () {
            var t;
            return (t = e.aiThreads) != null
              ? t
              : new (o("WAWebAiThreadCollection").AiThreadCollection)();
          }),
          (t[0] = e.aiThreads),
          (t[1] = l))
        : (l = t[1]);
      var s = c(l),
        d = s[0],
        m = s[1],
        p;
      t[2] !== d ? ((p = d.toArray()), (t[2] = d), (t[3] = p)) : (p = t[3]);
      var _ = c(p),
        f = _[0],
        g = _[1],
        h;
      (t[4] !== e.aiThreads
        ? ((h = function () {
            if (e.aiThreads != null) {
              var t = e.aiThreads;
              m(function (e) {
                var n = e.toArray();
                return (n.length > 0 && t.add(n, { merge: !0 }), t);
              });
            }
          }),
          (t[4] = e.aiThreads),
          (t[5] = h))
        : (h = t[5]),
        o("useWAWebListener").useListener(e, "change:aiThreads", h));
      var y = c(d),
        C = y[0],
        b = y[1];
      d !== C && (b(d), d.sort(), g(d.toArray()));
      var v;
      t[6] !== e.id || t[7] !== d
        ? ((v = function () {
            d.initializeAiThreads(e.id)
              .then(function () {
                i(!0);
              })
              .finally(r("WAWebNoop"));
          }),
          (t[6] = e.id),
          (t[7] = d),
          (t[8] = v))
        : (v = t[8]);
      var S;
      (t[9] !== e || t[10] !== d
        ? ((S = [d, e]), (t[9] = e), (t[10] = d), (t[11] = S))
        : (S = t[11]),
        u(v, S));
      var R;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = ["add", "remove", "change", "reset"]), (t[12] = R))
        : (R = t[12]);
      var L;
      (t[13] !== d
        ? ((L = function () {
            (d.sort(), g(d.toArray()));
          }),
          (t[13] = d),
          (t[14] = L))
        : (L = t[14]),
        o("useWAWebListener").useListener(d, R, L));
      var E;
      return (
        t[15] !== f || t[16] !== a
          ? ((E = [f, a]), (t[15] = f), (t[16] = a), (t[17] = E))
          : (E = t[17]),
        E
      );
    }
    l.default = d;
  },
  98,
);
