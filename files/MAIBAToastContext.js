__d(
  "MAIBAToastContext",
  ["$InternalEnum", "emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = n("$InternalEnum").Mirrored(["Error", "Info", "Success"]),
      p = c(r("emptyFunction"));
    function _(e) {
      var t = e.children,
        n = e.showToast;
      return s.jsx(p.Provider, { value: n, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d(p);
    }
    ((l.ToastStatus = m),
      (l.MAIBAToastContextProvider = _),
      (l.useMAIBAShowToast = f));
  },
  98,
);
