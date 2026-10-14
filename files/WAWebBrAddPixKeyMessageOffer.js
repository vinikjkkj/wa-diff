__d(
  "WAWebBrAddPixKeyMessageOffer",
  [
    "WAWebBrAddPixKeyDeepLinkPrefill",
    "WAWebInteractiveMessageType",
    "WAWebMsgType",
    "WAWebUserPrefsTypes",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "offer_payment_account",
      s = "PIX",
      u = "wa_add_pix_key_saved";
    function c(t) {
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
          return f(i.buttonParamsJson);
      return null;
    }
    function d(t) {
      if (t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return !1;
      for (var n of (r =
        (a = t.interactivePayload) == null ? void 0 : a.buttons) != null
        ? r
        : []) {
        var r, a;
        if ((n == null ? void 0 : n.name) === e && n.buttonParamsJson != null) {
          var i;
          return ((i = _(n.buttonParamsJson)) == null ? void 0 : i[u]) === !0;
        }
      }
      return !1;
    }
    function m(t, n) {
      var a,
        i = !1,
        l =
          t == null || (a = t.buttons) == null
            ? void 0
            : a.map(function (t) {
                var a, l;
                if (t.name !== e || t.buttonParamsJson == null) return t;
                var s = _(t.buttonParamsJson),
                  c = g(s == null ? void 0 : s.payment_account),
                  d = c == null ? null : h(c, "identifier_value");
                if (s == null || s[u] === !0 || d == null) return t;
                var m = o("WAWebUserPrefsTypes").PixKeyType.cast(
                  (a = h(r("nullthrows")(c), "identifier_type")) == null
                    ? void 0
                    : a.toUpperCase(),
                );
                return p(d, m) !== p(n, m)
                  ? t
                  : ((i = !0),
                    {
                      name: t.name,
                      buttonParamsJson: JSON.stringify(
                        babelHelpers.extends({}, s, ((l = {}), (l[u] = !0), l)),
                      ),
                    });
              });
      return i && t != null
        ? babelHelpers.extends({}, t, { buttons: l })
        : null;
    }
    function p(e, t) {
      return t === o("WAWebUserPrefsTypes").PixKeyType.CPF ||
        t === o("WAWebUserPrefsTypes").PixKeyType.CNPJ ||
        t === o("WAWebUserPrefsTypes").PixKeyType.PHONE
        ? e.replace(/\D/g, "")
        : e.trim().toLowerCase();
    }
    function _(e) {
      try {
        return g(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function f(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var r = g((t = g(n)) == null ? void 0 : t.payment_account);
      if (r == null || h(r, "account_type") !== s) return null;
      var a = h(r, "identifier_type"),
        i =
          a == null
            ? null
            : o("WAWebUserPrefsTypes").PixKeyType.cast(a.toUpperCase()),
        l = h(r, "identifier_value");
      if (
        i == null ||
        l == null ||
        !o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptablePixKeyValue(l, i)
      )
        return null;
      var u = h(r, "holder_name"),
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
    function g(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function h(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    ((l.OFFER_PAYMENT_ACCOUNT_BUTTON_NAME = e),
      (l.getAddPixKeyMessageOffer = c),
      (l.isAddPixKeyMessageOfferSaved = d),
      (l.withAddPixKeyOfferSaved = m));
  },
  98,
);
