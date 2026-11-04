__d(
  "WAWebBrAddPixKeyOfferReceipt",
  [
    "WAPhoneFindCC",
    "WAWebABProps",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebFutureproofProtoUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "55";
    function s(e) {
      var t = e.fromMe,
        n = e.proto,
        r = e.senders;
      return !o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled() ||
        t ||
        !d(n).includes(
          o("WAWebBrAddPixKeyMessageOffer").OFFER_PAYMENT_ACCOUNT_BUTTON_NAME,
        )
        ? !1
        : !o("WAWebBrAddPixKeyPartnerDirectory").isAddPixKeyPartnerSender(r);
    }
    function u(t) {
      var n, r;
      return (
        p(c(t)).at(0) ===
          o("WAWebBrAddPixKeyMessageOffer").OFFER_PAYMENT_ACCOUNT_BUTTON_NAME &&
        o("WAPhoneFindCC").findCC(
          (n =
            (r = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
              ? void 0
              : r.user) != null
            ? n
            : "",
        ) === e &&
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web")
      );
    }
    function c(e) {
      var t,
        n,
        r = m(e);
      return (t = r.interactiveMessage) != null
        ? t
        : (n = r.templateMessage) == null
          ? void 0
          : n.interactiveMessageTemplate;
    }
    function d(e) {
      var t,
        n,
        r,
        o,
        a = m(e),
        i = c(a);
      return [].concat(
        ((t = (n = a.buttonsMessage) == null ? void 0 : n.buttons) != null
          ? t
          : []
        ).map(function (e) {
          var t;
          return (t = e.nativeFlowInfo) == null ? void 0 : t.name;
        }),
        p(i),
        ((r =
          i == null || (o = i.carouselMessage) == null ? void 0 : o.cards) !=
        null
          ? r
          : []
        ).flatMap(p),
      );
    }
    function m(e) {
      for (
        var t,
          n = e,
          r =
            (t = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(
              n,
            )) == null
              ? void 0
              : t.message;
        r != null;
      ) {
        var a;
        ((n = r),
          (r =
            (a = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(
              n,
            )) == null
              ? void 0
              : a.message));
      }
      return n;
    }
    function p(e) {
      var t, n;
      return (
        (t =
          e == null || (n = e.nativeFlowMessage) == null
            ? void 0
            : n.buttons) != null
          ? t
          : []
      ).map(function (e) {
        return e.name;
      });
    }
    ((l.shouldDropAddPixKeyOffer = s), (l.isAddPixKeyOfferForThisAccount = u));
  },
  98,
);
