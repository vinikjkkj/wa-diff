__d(
  "useWAWebBizBudgetValidation",
  [
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationValidateSpecContext",
    "react",
    "react-compiler-runtime",
    "validateWAWebBizBudget",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useRef;
    function p(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(11),
        l = u(r("WAWebBizAdCreationSpecContext")),
        s = l.currentValue,
        d = u(r("WAWebBizAdCreationValidateSpecContext")),
        p =
          (t = (n = s.budgetData) == null ? void 0 : n.budget) != null ? t : 0,
        _ = (a = s.adAccountData) == null ? void 0 : a.currency,
        f = e.maxDailyBudget,
        g = e.minDailyBudget,
        h;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (i[0] = h))
        : (h = i[0]);
      var y = m(h),
        C;
      e: {
        if (g == null || g === 0 || f == null || f === 0 || _ == null) {
          var b;
          (i[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = []), (i[1] = b))
            : (b = i[1]),
            (C = b));
          break e;
        }
        var v;
        (i[2] !== p || i[3] !== _ || i[4] !== f || i[5] !== g
          ? ((v = r("validateWAWebBizBudget")({
              budgetValue: p,
              currency: _,
              minDailyBudget: g,
              maxDailyBudget: f,
            })),
            (i[2] = p),
            (i[3] = _),
            (i[4] = f),
            (i[5] = g),
            (i[6] = v))
          : (v = i[6]),
          (C = v));
      }
      var S = C,
        R,
        L;
      (i[7] !== d || i[8] !== S
        ? ((R = function () {
            if (d != null) {
              var e = y.current,
                t =
                  S.length !== e.length ||
                  S.some(function (t, n) {
                    var r, o;
                    return (
                      t.title !== ((r = e[n]) == null ? void 0 : r.title) ||
                      t.severity !== ((o = e[n]) == null ? void 0 : o.severity)
                    );
                  });
              t &&
                ((y.current = S),
                d.setSpecElementInlineValidationNotices("BUDGET", S));
            }
          }),
          (L = [d, S]),
          (i[7] = d),
          (i[8] = S),
          (i[9] = R),
          (i[10] = L))
        : ((R = i[9]), (L = i[10])),
        c(R, L));
    }
    l.default = p;
  },
  98,
);
