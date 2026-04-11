__d(
  "useWAWebBizAdCreationMaybeOpenCertificationDialog",
  [
    "CometRelay",
    "WAWebBizAdCertificationDialog.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(8),
        l = o("CometRelay").useLazyLoadQuery(
          p,
          {},
          { fetchPolicy: "store-and-network" },
        ),
        s = o("CometRelay").useRelayEnvironment(),
        c = m(r("WAWebBizAdCreationLoggerContext")),
        d = m(r("WAWebBizAdCreationSpecContext")),
        _ =
          d == null ||
          (t = d.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        f =
          (n =
            l == null || (a = l.viewer) == null
              ? void 0
              : a.ad_integrity_certification) != null
            ? n
            : !1,
        g;
      i[0] !== _ || i[1] !== s || i[2] !== f || i[3] !== c || i[4] !== e
        ? ((g = function () {
            if (f) {
              e.onComplete();
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizAdCertificationDialog.react"), {
                adAccountID: _,
                environment: s,
                loggerContext: c,
                onAccept: function () {
                  e.onComplete();
                },
                onClose: function () {
                  e.onDialogClose == null || e.onDialogClose();
                },
              }),
            );
          }),
          (i[0] = _),
          (i[1] = s),
          (i[2] = f),
          (i[3] = c),
          (i[4] = e),
          (i[5] = g))
        : (g = i[5]);
      var h = g,
        y;
      return (
        i[6] !== h
          ? ((y = { isLoading: !1, maybeLaunchCertificationDialog: h }),
            (i[6] = h),
            (i[7] = y))
          : (y = i[7]),
        y
      );
    }
    l.default = _;
  },
  98,
);
