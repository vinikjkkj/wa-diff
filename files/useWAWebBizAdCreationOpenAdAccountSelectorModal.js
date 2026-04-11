__d(
  "useWAWebBizAdCreationOpenAdAccountSelectorModal",
  [
    "CometRelay",
    "WAWebBizAdCreationIdentityContext",
    "WAWebBizAdCreationPaymentAdAccountSelectorModal.react",
    "WAWebBizAdCreationShowIdentityChangeConfirmation",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
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
      var i = o("react-compiler-runtime").c(5),
        l = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "useWAWebBizAdCreationOpenAdAccountSelectorModal_query.graphql",
              )),
          a,
        ),
        s = m(r("WAWebBizAdCreationIdentityContext")),
        c = r("useWAWebBizAdsCreationOpenModal")(),
        d;
      i[0] !== t || i[1] !== l || i[2] !== s || i[3] !== c
        ? ((d = function () {
            c(
              u.jsx(
                r("WAWebBizAdCreationPaymentAdAccountSelectorModal.react"),
                {
                  currentLegacyAccountID: t,
                  fragmentRef: l,
                  onClose: _,
                  onSubmit: function (t) {
                    r("WAWebBizAdCreationShowIdentityChangeConfirmation")(
                      function () {
                        s == null || s.setAdAccountId(t);
                      },
                    );
                  },
                },
              ),
            );
          }),
          (i[0] = t),
          (i[1] = l),
          (i[2] = s),
          (i[3] = c),
          (i[4] = d))
        : (d = i[4]);
      var p = d;
      return p;
    }
    function _() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = p;
  },
  98,
);
