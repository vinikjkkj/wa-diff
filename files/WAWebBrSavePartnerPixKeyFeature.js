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
    function d(e, t, n, r) {
      var o;
      p(
        "chat",
        "chat",
        {
          keyType: e.keyType,
          name: (o = e.holderName) != null ? o : void 0,
          value: e.keyValue,
        },
        t,
        n,
        r,
      );
    }
    function m() {
      o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
        "chat",
        "chat",
      );
    }
    function p(e, t, n, r, a, i) {
      var l,
        d,
        m = function (a, i) {
          o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
            e,
            t,
            n,
            a,
            i,
          );
        },
        p = n == null ? void 0 : n.value;
      if (n == null || p == null || p === "" || c()) {
        m();
        return;
      }
      var _ =
          (l = n.keyType) != null
            ? l
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        f =
          _ === o("WAWebUserPrefsTypes").PixKeyType.PHONE && p.startsWith(u)
            ? p.slice(u.length)
            : p;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebBrSavePartnerPixKeyModalLoadable")
            .BrSavePartnerPixKeyModalLoadable,
          {
            bankId: n.bankId,
            displayName: (d = n.name) != null ? d : "",
            onClose: o("WAWebModalManager").closeModalManager,
            onOpenForm: function (t) {
              (o("WAWebModalManager").ModalManager.close(), m(t, i));
            },
            onPixKeySaved: i,
            partnerCatalogId: a,
            pixKey: f,
            pixKeyType: _,
            referral: t,
            resolvedAttribution: r,
          },
        ),
      );
    }
    ((l.openAddPixKeyMessageScreen = d),
      (l.openSavedPixKeyFromMessage = m),
      (l.openAddPixKeyDeepLinkScreen = p));
  },
  98,
);
