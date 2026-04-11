__d(
  "BaseDialogLabelIDProvider",
  ["HiddenSubtreeContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useId,
      m = s.createContext(void 0);
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.disable,
        a = r === void 0 ? !1 : r,
        i = d(),
        l = a ? void 0 : i,
        u;
      return (
        t[0] !== n || t[1] !== l
          ? ((u = s.jsx(m.Provider, { value: l, children: n })),
            (t[0] = n),
            (t[1] = l),
            (t[2] = u))
          : (u = t[2]),
        u
      );
    }
    function _() {
      var e = c(m),
        t = c(r("HiddenSubtreeContext")),
        n = t.hidden;
      return n ? void 0 : e;
    }
    function f() {
      return c(m);
    }
    ((l.BaseDialogLabelIDContext = m),
      (l.BaseDialogLabelIDProvider = p),
      (l.useDialogHeaderID = _),
      (l.useDialogLabelID = f));
  },
  98,
);
