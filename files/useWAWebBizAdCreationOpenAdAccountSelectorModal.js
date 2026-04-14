__d(
  "useWAWebBizAdCreationOpenAdAccountSelectorModal",
  [
    "CometRelay",
    "WAWebBizAdCreationIdentityContext",
    "WAWebBizAdCreationPaymentAdAccountSelectorModal.react",
    "WAWebBizAdCreationShowIdentityChangeConfirmation",
    "WAWebModalManager",
    "react",
    "useWAWebBizAdCreationOpenAdAccountSelectorModal_query.graphql",
    "useWAWebBizAdsCreationOpenModal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext;
    function p(t, a) {
      var i = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "useWAWebBizAdCreationOpenAdAccountSelectorModal_query.graphql",
              )),
          a,
        ),
        l = m(r("WAWebBizAdCreationIdentityContext")),
        s = r("useWAWebBizAdsCreationOpenModal")(),
        c = d(
          function () {
            s(
              u.jsx(
                r("WAWebBizAdCreationPaymentAdAccountSelectorModal.react"),
                {
                  currentLegacyAccountID: t,
                  fragmentRef: i,
                  onClose: function () {
                    return o("WAWebModalManager").ModalManager.close();
                  },
                  onSubmit: function (t) {
                    r("WAWebBizAdCreationShowIdentityChangeConfirmation")(
                      function () {
                        l == null || l.setAdAccountId(t);
                      },
                    );
                  },
                },
              ),
            );
          },
          [s, t, i, l],
        );
      return c;
    }
    l.default = p;
  },
  98,
);
