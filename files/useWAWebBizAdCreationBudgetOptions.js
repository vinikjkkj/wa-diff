__d(
  "useWAWebBizAdCreationBudgetOptions",
  ["WAWebBizAdCreationSpecContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d() {
      var e,
        t = o("react-compiler-runtime").c(7),
        n = u(r("WAWebBizAdCreationSpecContext")),
        a = n.currentValue,
        i = a.budgetData;
      i == null || i.budgetOptions;
      var l;
      if (t[0] !== (i == null ? void 0 : i.budgetOptions)) {
        var s;
        ((l = (s = i == null ? void 0 : i.budgetOptions) != null ? s : []),
          (t[0] = i == null ? void 0 : i.budgetOptions),
          (t[1] = l));
      } else l = t[1];
      var c = l,
        d = i == null ? void 0 : i.defaultBudget,
        p = (e = i == null ? void 0 : i.budget) != null ? e : 0,
        _,
        f;
      (t[2] !== d || t[3] !== p || t[4] !== c
        ? ((_ = [].concat(c)),
          d != null && (_ = _.concat(d)),
          (_ = _.concat(p)),
          (f = Array.from(new Set(_)).sort(m)),
          (t[2] = d),
          (t[3] = p),
          (t[4] = c),
          (t[5] = _),
          (t[6] = f))
        : ((_ = t[5]), (f = t[6])),
        (_ = f));
      var g = _;
      return g;
    }
    function m(e, t) {
      return e - t;
    }
    l.default = d;
  },
  98,
);
