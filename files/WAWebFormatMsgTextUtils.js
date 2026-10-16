__d(
  "WAWebFormatMsgTextUtils",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebFormatPaymentMsg",
    "WAWebSpoilerNotificationMask",
    "WAWebUnformatMsg",
    "WAWebVcardGetNameFromParsed",
    "WAWebVcardUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = t.spoilerReplacement;
      if (n == null) return e;
      var r = o("WAWebSpoilerNotificationMask").maskSpoilersForPreview(e, n);
      return (
        t.onSpoilerReplacementHandled == null ||
          t.onSpoilerReplacementHandled(),
        r
      );
    }
    function u(e, t, n) {
      var o = r("WAWebUnformatMsg")(e, t, n.spoilerReplacement);
      return (
        n.spoilerReplacement != null &&
          (n.onSpoilerReplacementHandled == null ||
            n.onSpoilerReplacementHandled()),
        o
      );
    }
    function c(e, t) {
      if (e == null) return null;
      var n = t.isDynamicReplyButtonsMsg === !0;
      return t.footer != null && t.footer !== "" && n ? e + "\n" + t.footer : e;
    }
    function d(e) {
      switch (e.subtype) {
        case "ciphertext":
          return s._(
            /*BTDS*/ "Waiting for this payment message's note. This may take a while.",
          );
        case "futureproof":
          return s._(
            /*BTDS*/ "This payment message has a note, but your version of WhatsApp doesn't support viewing it.",
          );
        case "send": {
          var t,
            n =
              ((t = e.paymentNoteMsg) == null ? void 0 : t.body) != null
                ? " - " + e.paymentNoteMsg.body
                : "",
            r =
              e.paymentCurrency && e.paymentAmount1000
                ? o("WAWebCurrencyUtils").formatAmount1000({
                    amount: e.paymentAmount1000,
                    currency: e.paymentCurrency,
                  })
                : s._(/*BTDS*/ "Payment").toString();
          return r + n;
        }
        case "request": {
          var a,
            i =
              ((a = e.paymentNoteMsg) == null ? void 0 : a.body) != null
                ? " - " + e.paymentNoteMsg.body
                : "",
            l =
              e.paymentCurrency && e.paymentAmount1000
                ? o("WAWebCurrencyUtils").formatAmount1000({
                    amount: e.paymentAmount1000,
                    currency: e.paymentCurrency,
                  })
                : s._(/*BTDS*/ "Payment").toString();
          return l + i;
        }
        case "invite":
          return o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(
            e.id,
          );
        default:
          return s._(
            /*BTDS*/ "Payment message. Open WhatsApp on your phone to view.",
          );
      }
    }
    function m(e) {
      if (e.length > 1) {
        var t = r("compactMap")(e, function (e) {
          return o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(e);
        });
        return o("WAWebVcardUtils").getNameStringFromNames(t);
      }
      return (
        o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(e[0]) ||
        s._(/*BTDS*/ "Contact")
      );
    }
    ((l.maskSpoilersWithOptions = e),
      (l.unformatTextWithSpoilerReplacement = u),
      (l.maybeAddFooter = c),
      (l.formatPayment = d),
      (l.formatParsedVcardsDisplayText = m));
  },
  226,
);
