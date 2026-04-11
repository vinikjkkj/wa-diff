__d(
  "WAWebBuyerEventAttributes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "cta",
      "paymentMethodChoice",
      "acceptedPaymentMethod",
      "p2mFlow",
      "p2pFlow",
      "flow",
      "p2mType",
      "status",
      "currency",
      "isTosAccepted",
      "flowExperience",
      "isCtwaOriginated",
      "referral",
      "error",
      "orderContentVariant",
      "messageType",
      "hasProductVariants",
      "hasAttachment",
      "hasAttachmentDownload",
      "p2mOfferingType",
      "numInstallments",
      "isTemplate",
      "isCtaAvailable",
      "chatType",
    ];
    function l(e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "_" + e.toLowerCase();
      });
    }
    function s(t) {
      var n = {};
      for (var r of e) {
        var o = t[r];
        o != null && (n[l(r)] = o);
      }
      return n;
    }
    i.buyerEventAttributesToObject = s;
  },
  66,
);
