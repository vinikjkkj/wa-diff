__d(
  "WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext;
    function p(e) {
      var t = e.adAccountID,
        n = e.audienceID,
        o = e.onNavigateToDeleteConfirmation,
        a = m(r("WAWebBizAdCreationLoggerContext")),
        i = d(
          function () {
            n != null &&
              (a != null &&
                r("WAWebBizAdLogger").log({
                  event: "delete_audience_click",
                  loggerContext: a,
                  adAccountID: t,
                  extra: { audience_id: n },
                }),
              o());
          },
          [t, n, a, o],
        );
      return u.jsx(r("WDSButton.react"), {
        label: s._(/*BTDS*/ "Delete audience"),
        variant: "outline",
        size: "medium",
        type: "destructive",
        onPress: i,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
