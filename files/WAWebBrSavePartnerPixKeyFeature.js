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
    function d(e, t) {
      var n;
      m(
        "chat",
        "chat",
        {
          keyType: e.keyType,
          name: (n = e.holderName) != null ? n : void 0,
          value: e.keyValue,
        },
        t,
      );
    }
    function m(e, t, n, r) {
      var a,
        i,
        l = function () {
          o("WAWebAddEditPixFeature").openPixCredentialManagementModal(e, t, n);
        },
        d = n == null ? void 0 : n.value;
      if (n == null || d == null || d === "" || c()) {
        l();
        return;
      }
      var m =
          (a = n.keyType) != null
            ? a
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        p =
          m === o("WAWebUserPrefsTypes").PixKeyType.PHONE && d.startsWith(u)
            ? d.slice(u.length)
            : d;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebBrSavePartnerPixKeyModalLoadable")
            .BrSavePartnerPixKeyModalLoadable,
          {
            bankId: n.bankId,
            bankName: n.bankName,
            displayName: (i = n.name) != null ? i : "",
            onClose: o("WAWebModalManager").closeModalManager,
            onOpenForm: function () {
              (o("WAWebModalManager").ModalManager.close(), l());
            },
            pixKey: p,
            pixKeyType: m,
            referral: t,
            resolvedAttribution: r,
          },
        ),
      );
    }
    ((l.openAddPixKeyMessageScreen = d), (l.openAddPixKeyDeepLinkScreen = m));
  },
  98,
);
