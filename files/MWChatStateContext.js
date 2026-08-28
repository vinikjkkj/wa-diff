__d(
  "MWChatStateContext",
  ["MWChatStateV2Types", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useContext,
      d = u(o("MWChatStateV2Types").emptyMWChatState),
      m = d.Provider;
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = c(d),
        r;
      return (
        t[0] !== e || t[1] !== n
          ? ((r = e(n)), (t[0] = e), (t[1] = n), (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    ((l.ChatStateContextProvider = m), (l.useChatState = p));
  },
  98,
);
