__d(
  "WAWebBrAddPixKeyOfferReceipt",
  [
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebFutureproofProtoUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.fromMe,
        n = e.proto,
        r = e.senders;
      return !o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled() ||
        t ||
        !s(n).includes(
          o("WAWebBrAddPixKeyMessageOffer").OFFER_PAYMENT_ACCOUNT_BUTTON_NAME,
        )
        ? !1
        : !o("WAWebBrAddPixKeyPartnerDirectory").isAddPixKeyPartnerSender(r);
    }
    function s(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = u(e),
        s =
          (t = l.interactiveMessage) != null
            ? t
            : (n = l.templateMessage) == null
              ? void 0
              : n.interactiveMessageTemplate;
      return [].concat(
        ((r = (o = l.buttonsMessage) == null ? void 0 : o.buttons) != null
          ? r
          : []
        ).map(function (e) {
          var t;
          return (t = e.nativeFlowInfo) == null ? void 0 : t.name;
        }),
        c(s),
        ((a =
          s == null || (i = s.carouselMessage) == null ? void 0 : i.cards) !=
        null
          ? a
          : []
        ).flatMap(c),
      );
    }
    function u(e) {
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
    function c(e) {
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
    l.shouldDropAddPixKeyOffer = e;
  },
  98,
);
