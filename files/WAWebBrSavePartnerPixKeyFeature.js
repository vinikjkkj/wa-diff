__d(
  "WAWebBrSavePartnerPixKeyFeature",
  [
    "WAWebAddEditPixFeature",
    "WAWebBrSavePartnerPixKeyModalLoadable",
    "WAWebModalManager",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "+55";
    function c() {
      var e;
      return (
        ((e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
          o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
        )) == null
          ? void 0
          : e.pix) != null
      );
    }
    function d(e, t, n) {
      var r,
        a,
        i = function () {
          o("WAWebAddEditPixFeature").openPixCredentialManagementModal(e, t, n);
        },
        l = n == null ? void 0 : n.value;
      if (n == null || l == null || l === "" || c()) {
        i();
        return;
      }
      var d =
          (r = n.keyType) != null
            ? r
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        m =
          d === o("WAWebUserPrefsTypes").PixKeyType.PHONE && l.startsWith(u)
            ? l.slice(u.length)
            : l;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebBrSavePartnerPixKeyModalLoadable")
            .BrSavePartnerPixKeyModalLoadable,
          {
            bankId: n.bankId,
            bankName: n.bankName,
            displayName: (a = n.name) != null ? a : "",
            onClose: function () {
              o("WAWebModalManager").ModalManager.close();
            },
            onOpenForm: function () {
              (o("WAWebModalManager").ModalManager.close(), i());
            },
            pixKey: m,
            pixKeyType: d,
            referral: t,
          },
        ),
      );
    }
    l.openAddPixKeyDeepLinkScreen = d;
  },
  98,
);
