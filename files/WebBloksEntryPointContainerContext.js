__d(
  "WebBloksEntryPointContainerContext",
  ["WebBloksSSRUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        current: o("WebBloksSSRUtils").canUseDOM ? document.body : null,
      });
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.value,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx(u.Provider, { value: r, children: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    ((l.WebBloksEntryPointContainerContext = u),
      (l.WebBloksEntryPointContainerContextProvider = c));
  },
  98,
);
