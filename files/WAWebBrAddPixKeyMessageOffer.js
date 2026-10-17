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
    function c(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : d({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            type: e.type,
          });
    }
    function d(t) {
      var n = t.interactivePayload,
        a = t.interactiveType,
        i = t.type;
      if (
        i !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        a !== r("WAWebInteractiveMessageType").NATIVE_FLOW
      )
        return null;
      var l = n == null ? void 0 : n.buttons;
      if (l == null) return null;
      for (var s of l)
        if ((s == null ? void 0 : s.name) === e && s.buttonParamsJson != null)
          return h(s.buttonParamsJson);
      return null;
    }
    function m(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? !1
        : p({ interactivePayload: e.interactivePayload, type: e.type });
    }
    function p(t) {
      var n = t.interactivePayload,
        r = t.type;
      if (r !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return !1;
      for (var a of (i = n == null ? void 0 : n.buttons) != null ? i : []) {
        var i;
        if ((a == null ? void 0 : a.name) === e && a.buttonParamsJson != null) {
          var l;
          return ((l = g(a.buttonParamsJson)) == null ? void 0 : l[u]) === !0;
        }
      }
      return !1;
    }
    function _(t, n) {
      var a,
        i = !1,
        l =
          t == null || (a = t.buttons) == null
            ? void 0
            : a.map(function (t) {
                var a, l;
                if (t.name !== e || t.buttonParamsJson == null) return t;
                var s = g(t.buttonParamsJson),
                  c = y(s == null ? void 0 : s.payment_account),
                  d = c == null ? null : C(c, "identifier_value");
                if (s == null || s[u] === !0 || d == null) return t;
                var m = o("WAWebUserPrefsTypes").PixKeyType.cast(
                  (a = C(r("nullthrows")(c), "identifier_type")) == null
                    ? void 0
                    : a.toUpperCase(),
                );
                return f(d, m) !== f(n, m)
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
    function f(e, t) {
      return t === o("WAWebUserPrefsTypes").PixKeyType.CPF ||
        t === o("WAWebUserPrefsTypes").PixKeyType.CNPJ ||
        t === o("WAWebUserPrefsTypes").PixKeyType.PHONE
        ? e.replace(/\D/g, "")
        : e.trim().toLowerCase();
    }
    function g(e) {
      try {
        return y(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function h(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var r = y((t = y(n)) == null ? void 0 : t.payment_account);
      if (r == null || C(r, "account_type") !== s) return null;
      var a = C(r, "identifier_type"),
        i =
          a == null
            ? null
            : o("WAWebUserPrefsTypes").PixKeyType.cast(a.toUpperCase()),
        l = C(r, "identifier_value");
      if (
        i == null ||
        l == null ||
        !o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptablePixKeyValue(l, i)
      )
        return null;
      var u = C(r, "holder_name"),
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
    function y(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function C(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    ((l.OFFER_PAYMENT_ACCOUNT_BUTTON_NAME = e),
      (l.getAddPixKeyMessageOffer = c),
      (l.getAddPixKeyMessageOfferFor = d),
      (l.isAddPixKeyMessageOfferSaved = m),
      (l.isAddPixKeyMessageOfferSavedFor = p),
      (l.withAddPixKeyOfferSaved = _));
  },
  98,
);
