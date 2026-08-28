__d(
  "MAIBAChatSendTickContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useState,
      f = c({ bumpSendTick: function () {}, sendTick: 0 });
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = _(0),
        a = r[0],
        i = r[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i(h);
          }),
          (t[0] = l))
        : (l = t[0]);
      var u = l,
        c;
      t[1] !== a
        ? ((c = { bumpSendTick: u, sendTick: a }), (t[1] = a), (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      return (
        t[3] !== n || t[4] !== d
          ? ((m = s.jsx(f.Provider, { value: d, children: n })),
            (t[3] = n),
            (t[4] = d),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function h(e) {
      return e + 1;
    }
    function y() {
      return m(f).sendTick;
    }
    function C() {
      return m(f).bumpSendTick;
    }
    ((l.MAIBAChatSendTickContextProvider = g),
      (l.useMAIBAChatSendTick = y),
      (l.useMAIBABumpChatSendTick = C));
  },
  98,
);
