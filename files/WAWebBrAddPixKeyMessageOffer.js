__d(
  "WAWebBrAddPixKeyMessageOffer",
  [
    "WAWebBrAddPixKeyDeepLinkPrefill",
    "WAWebInteractiveMessageType",
    "WAWebMsgType",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "offer_payment_account",
      s = "PIX";
    function u(t) {
      var n;
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW
      )
        return null;
      var a = (n = t.interactivePayload) == null ? void 0 : n.buttons;
      if (a == null) return null;
      for (var i of a)
        if ((i == null ? void 0 : i.name) === e && i.buttonParamsJson != null)
          return c(i.buttonParamsJson);
      return null;
    }
    function c(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var r = d((t = d(n)) == null ? void 0 : t.payment_account);
      if (r == null || m(r, "account_type") !== s) return null;
      var a = m(r, "identifier_type"),
        i =
          a == null
            ? null
            : o("WAWebUserPrefsTypes").PixKeyType.cast(a.toUpperCase()),
        l = m(r, "identifier_value");
      if (
        i == null ||
        l == null ||
        !o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptablePixKeyValue(l, i)
      )
        return null;
      var u = m(r, "holder_name"),
        c =
          u != null &&
          o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptableCappedText(
            u,
            o("WAWebBrAddPixKeyDeepLinkPrefill").MAX_NAME_LENGTH,
          )
            ? u
            : null;
      return { holderName: c, keyType: i, keyValue: l };
    }
    function d(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function m(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    ((l.OFFER_PAYMENT_ACCOUNT_BUTTON_NAME = e),
      (l.getAddPixKeyMessageOffer = u));
  },
  98,
);
