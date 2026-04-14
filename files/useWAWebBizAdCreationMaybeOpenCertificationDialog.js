__d(
  "useWAWebBizAdCreationMaybeOpenCertificationDialog",
  [
    "CometRelay",
    "WAWebBizAdCertificationDialog.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebModalManager",
    "react",
    "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery.graphql",
            ));
    function _(e) {
      var t,
        n,
        a,
        i = o("CometRelay").useLazyLoadQuery(
          p,
          {},
          { fetchPolicy: "store-and-network" },
        ),
        l = o("CometRelay").useRelayEnvironment(),
        s = m(r("WAWebBizAdCreationLoggerContext")),
        c = m(r("WAWebBizAdCreationSpecContext")),
        _ =
          c == null ||
          (t = c.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        f =
          (n =
            i == null || (a = i.viewer) == null
              ? void 0
              : a.ad_integrity_certification) != null
            ? n
            : !1,
        g = d(
          function () {
            if (f) {
              e.onComplete();
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizAdCertificationDialog.react"), {
                adAccountID: _,
                environment: l,
                loggerContext: s,
                onAccept: function () {
                  e.onComplete();
                },
                onClose: function () {
                  e.onDialogClose == null || e.onDialogClose();
                },
              }),
            );
          },
          [f, e, l, s, _],
        );
      return { isLoading: !1, maybeLaunchCertificationDialog: g };
    }
    l.default = _;
  },
  98,
);
