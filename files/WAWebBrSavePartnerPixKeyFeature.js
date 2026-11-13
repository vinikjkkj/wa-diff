__d(
  "WAWebBrSavePartnerPixKeyFeature",
  [
    "WAWebABProps",
    "WAWebAddEditPixFeature",
    "WAWebBrAddPixKeyOfferDialogsLoadable",
    "WAWebBrAddPixKeyOfferLoggerLoadable",
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
      u = "+55",
      c = 1;
    function d() {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "br_payments_multiple_pix_keys_enabled",
        )
      )
        return { kind: "add" };
      var e = p();
      if (e == null) return { kind: "add" };
      var t = e.key;
      return typeof t == "string" &&
        t !== "" &&
        typeof e.credentialId == "string" &&
        e.credentialId !== ""
        ? { kind: "replace", replacedPixKey: t }
        : { kind: "declined" };
    }
    function m() {
      var e;
      return (e = p()) == null ? void 0 : e.key;
    }
    function p() {
      var e;
      return (e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS,
      )) == null
        ? void 0
        : e.pix;
    }
    function _(e, t) {
      var n = e === "chat";
      (n
        ? o("WAWebBrAddPixKeyOfferLoggerLoadable").logAddPixKeyMessageDiscarded(
            "cannot_add_another_key",
            "tap",
            t,
          )
        : o("WAWebBrAddPixKeyOfferLoggerLoadable").logAddPixKeyLinkDiscarded(
            "cannot_add_another_key",
            t,
          ),
        o(
          "WAWebBrAddPixKeyOfferDialogsLoadable",
        ).openAddPixKeyLimitDialogLazily(
          n ? "add_pix_key_message" : "add_pix_key_link",
          c,
          n ? g : null,
        ));
    }
    function f(e, t, n, r) {
      var o;
      h(
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
    function g() {
      o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
        "chat",
        "chat",
      );
    }
    function h(e, t, n, r, a, i) {
      var l,
        c,
        p = function (a, i, l) {
          o("WAWebAddEditPixFeature").openPixCredentialManagementModal(
            e,
            t,
            n,
            a,
            i,
            l,
          );
        },
        f = n == null ? void 0 : n.value;
      if (n == null || f == null || f === "") {
        p();
        return;
      }
      var g = d();
      if (g.kind === "declined") {
        _(e, a);
        return;
      }
      var h =
          (l = n.keyType) != null
            ? l
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        y =
          h === o("WAWebUserPrefsTypes").PixKeyType.PHONE && f.startsWith(u)
            ? f.slice(u.length)
            : f;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebBrSavePartnerPixKeyModalLoadable")
            .BrSavePartnerPixKeyModalLoadable,
          {
            bankId: n.bankId,
            displayName: (c = n.name) != null ? c : "",
            onClose: o("WAWebModalManager").closeModalManager,
            onOpenForm: function (n, r) {
              if ((o("WAWebModalManager").ModalManager.close(), m() != null)) {
                p(r, i);
                return;
              }
              p(
                r,
                function (e) {
                  (n(), i == null || i(e));
                },
                t === "chat" ? "message" : "link",
              );
            },
            onPixKeySaved: i,
            partnerCatalogId: a,
            pixKey: y,
            pixKeyType: h,
            referral: t,
            replacedPixKey: g.kind === "replace" ? g.replacedPixKey : null,
            resolvedAttribution: r,
          },
        ),
      );
    }
    ((l.storedPixKey = m),
      (l.openAddPixKeyMessageScreen = f),
      (l.openSavedPixKeyFromMessage = g),
      (l.openAddPixKeyDeepLinkScreen = h));
  },
  98,
);
