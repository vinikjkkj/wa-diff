__d(
  "WAWebPaymentMessage.react",
  [
    "fbt",
    "WAWebMsgGetters",
    "WAWebPaymentInfo.react",
    "WAWebPaymentMessageInvite.react",
    "WAWebPaymentMessagePlaceholder.react",
    "WAWebSendOrRequestPaymentMessage.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = e.quotedMsg,
        c = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (t = o("WAWebMsgGetters")).getPaymentAmount1000,
          t.getPaymentCurrency,
          t.getId,
          t.getIsSentByMe,
          t.getPaymentNoteMsg,
          t.getPaymentStatus,
          t.getPaymentTxnStatus,
          t.getPaymentExpiryTimestamp,
          t.getPaymentInviteServiceType,
          t.getPaymentMessageReceiverJid,
          t.getSubtype,
        ]),
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = c[4],
        g = c[5],
        h = c[6],
        y = c[7],
        C = c[8],
        b = c[9],
        v = c[10],
        S = !!(f != null && f.body);
      if (v === "invite" && C != null)
        return u.jsx(r("WAWebPaymentMessageInvite.react"), {
          msg: i,
          displayAuthor: n,
          displayType: a,
          serviceType: C,
        });
      var R = d && m;
      if (!R)
        return u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
          msg: i,
          displayAuthor: n,
          displayType: a,
          quotedMsg: l,
        });
      var L = u.jsx(r("WAWebPaymentInfo.react"), {
        isSentByMe: _,
        currency: m,
        amount1000: d,
        receiverJid: b,
        paymentStatus: g,
        paymentTxnStatus: h,
        expiryTimestamp: y,
        subtype: v,
        hasCaption: S,
        msg: i,
      });
      switch (v) {
        case "ciphertext":
          return u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
            msg: i,
            displayAuthor: n,
            displayType: a,
            quotedMsg: l,
            paymentInfo: L,
            placeholderText: s._(
              /*BTDS*/ "Waiting for this payment message's note. This may take a while.",
            ),
          });
        case "futureproof":
          return u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
            msg: i,
            displayAuthor: n,
            displayType: a,
            quotedMsg: l,
            paymentInfo: L,
            placeholderText: s._(
              /*BTDS*/ "This payment message has a note, but your version of WhatsApp doesn't support viewing it.",
            ),
          });
        case "send":
          return u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
            msg: i,
            displayAuthor: n,
            displayType: a,
            quotedMsg: l,
            paymentInfo: L,
          });
        case "request":
          return u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
            msg: i,
            displayAuthor: n,
            displayType: a,
            quotedMsg: l,
            paymentInfo: L,
          });
        default:
          return u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
            msg: i,
            displayAuthor: n,
            displayType: a,
            quotedMsg: l,
          });
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
