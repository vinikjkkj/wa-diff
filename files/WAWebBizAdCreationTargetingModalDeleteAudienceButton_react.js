__d(
  "WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext;
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.adAccountID,
        a = e.audienceID,
        i = e.onNavigateToDeleteConfirmation,
        l = m(r("WAWebBizAdCreationLoggerContext")),
        c;
      t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== i
        ? ((c = function () {
            a != null &&
              (l != null &&
                r("WAWebBizAdLogger").log({
                  event: "delete_audience_click",
                  loggerContext: l,
                  adAccountID: n,
                  extra: { audience_id: a },
                }),
              i());
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l),
          (t[3] = i),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Delete audience")), (t[5] = p))
        : (p = t[5]);
      var _;
      return (
        t[6] !== d
          ? ((_ = u.jsx(r("WDSButton.react"), {
              label: p,
              variant: "outline",
              size: "medium",
              type: "destructive",
              onPress: d,
            })),
            (t[6] = d),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    l.default = p;
  },
  226,
);
