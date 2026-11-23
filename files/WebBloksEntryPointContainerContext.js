__d(
  "WebBloksEntryPointContainerContext",
  ["WebBloksSSRUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        current: o("WebBloksSSRUtils").canUseDOM ? document.body : null,
      });
    function c(e) {
      var t = e.children,
        n = e.value;
      return s.jsx(u.Provider, { value: n, children: t });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WebBloksEntryPointContainerContext = u),
      (l.WebBloksEntryPointContainerContextProvider = c));
  },
  98,
);
