__d(
  "MAIBAChatSendTickContext",
  ["react"],
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
      var t = e.children,
        n = _(0),
        r = n[0],
        o = n[1],
        a = d(function () {
          o(function (e) {
            return e + 1;
          });
        }, []),
        i = p(
          function () {
            return { bumpSendTick: a, sendTick: r };
          },
          [a, r],
        );
      return s.jsx(f.Provider, { value: i, children: t });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return m(f).sendTick;
    }
    function y() {
      return m(f).bumpSendTick;
    }
    ((l.MAIBAChatSendTickContextProvider = g),
      (l.useMAIBAChatSendTick = h),
      (l.useMAIBABumpChatSendTick = y));
  },
  98,
);
