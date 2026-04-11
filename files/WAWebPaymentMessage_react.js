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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(53),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = e.quotedMsg,
        c;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var d;
        ((c = [
          (d = o("WAWebMsgGetters")).getPaymentAmount1000,
          d.getPaymentCurrency,
          d.getId,
          d.getIsSentByMe,
          d.getPaymentNoteMsg,
          d.getPaymentStatus,
          d.getPaymentTxnStatus,
          d.getPaymentExpiryTimestamp,
          d.getPaymentInviteServiceType,
          d.getPaymentMessageReceiverJid,
          d.getSubtype,
        ]),
          (t[0] = c));
      } else c = t[0];
      var m = o("useWAWebMsgValues").useMsgValues(e.msg.id, c),
        p = m[0],
        _ = m[1],
        f = m[3],
        g = m[4],
        h = m[5],
        y = m[6],
        C = m[7],
        b = m[8],
        v = m[9],
        S = m[10],
        R = !!(g != null && g.body);
      if (S === "invite" && b != null) {
        var L;
        return (
          t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== b
            ? ((L = u.jsx(r("WAWebPaymentMessageInvite.react"), {
                msg: i,
                displayAuthor: n,
                displayType: a,
                serviceType: b,
              })),
              (t[1] = n),
              (t[2] = a),
              (t[3] = i),
              (t[4] = b),
              (t[5] = L))
            : (L = t[5]),
          L
        );
      }
      var E = p && _;
      if (!E) {
        var k;
        return (
          t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== l
            ? ((k = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                msg: i,
                displayAuthor: n,
                displayType: a,
                quotedMsg: l,
              })),
              (t[6] = n),
              (t[7] = a),
              (t[8] = i),
              (t[9] = l),
              (t[10] = k))
            : (k = t[10]),
          k
        );
      }
      var I;
      t[11] !== R ||
      t[12] !== f ||
      t[13] !== i ||
      t[14] !== p ||
      t[15] !== _ ||
      t[16] !== C ||
      t[17] !== v ||
      t[18] !== h ||
      t[19] !== y ||
      t[20] !== S
        ? ((I = u.jsx(r("WAWebPaymentInfo.react"), {
            isSentByMe: f,
            currency: _,
            amount1000: p,
            receiverJid: v,
            paymentStatus: h,
            paymentTxnStatus: y,
            expiryTimestamp: C,
            subtype: S,
            hasCaption: R,
            msg: i,
          })),
          (t[11] = R),
          (t[12] = f),
          (t[13] = i),
          (t[14] = p),
          (t[15] = _),
          (t[16] = C),
          (t[17] = v),
          (t[18] = h),
          (t[19] = y),
          (t[20] = S),
          (t[21] = I))
        : (I = t[21]);
      var T = I;
      switch (S) {
        case "ciphertext": {
          var D;
          t[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = s._(
                /*BTDS*/ "Waiting for this payment message's note. This may take a while.",
              )),
              (t[22] = D))
            : (D = t[22]);
          var x;
          return (
            t[23] !== n ||
            t[24] !== a ||
            t[25] !== i ||
            t[26] !== T ||
            t[27] !== l
              ? ((x = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                  msg: i,
                  displayAuthor: n,
                  displayType: a,
                  quotedMsg: l,
                  paymentInfo: T,
                  placeholderText: D,
                })),
                (t[23] = n),
                (t[24] = a),
                (t[25] = i),
                (t[26] = T),
                (t[27] = l),
                (t[28] = x))
              : (x = t[28]),
            x
          );
        }
        case "futureproof": {
          var $;
          t[29] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = s._(
                /*BTDS*/ "This payment message has a note, but your version of WhatsApp doesn't support viewing it.",
              )),
              (t[29] = $))
            : ($ = t[29]);
          var P;
          return (
            t[30] !== n ||
            t[31] !== a ||
            t[32] !== i ||
            t[33] !== T ||
            t[34] !== l
              ? ((P = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                  msg: i,
                  displayAuthor: n,
                  displayType: a,
                  quotedMsg: l,
                  paymentInfo: T,
                  placeholderText: $,
                })),
                (t[30] = n),
                (t[31] = a),
                (t[32] = i),
                (t[33] = T),
                (t[34] = l),
                (t[35] = P))
              : (P = t[35]),
            P
          );
        }
        case "send": {
          var N;
          return (
            t[36] !== n ||
            t[37] !== a ||
            t[38] !== i ||
            t[39] !== T ||
            t[40] !== l
              ? ((N = u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
                  msg: i,
                  displayAuthor: n,
                  displayType: a,
                  quotedMsg: l,
                  paymentInfo: T,
                })),
                (t[36] = n),
                (t[37] = a),
                (t[38] = i),
                (t[39] = T),
                (t[40] = l),
                (t[41] = N))
              : (N = t[41]),
            N
          );
        }
        case "request": {
          var M;
          return (
            t[42] !== n ||
            t[43] !== a ||
            t[44] !== i ||
            t[45] !== T ||
            t[46] !== l
              ? ((M = u.jsx(r("WAWebSendOrRequestPaymentMessage.react"), {
                  msg: i,
                  displayAuthor: n,
                  displayType: a,
                  quotedMsg: l,
                  paymentInfo: T,
                })),
                (t[42] = n),
                (t[43] = a),
                (t[44] = i),
                (t[45] = T),
                (t[46] = l),
                (t[47] = M))
              : (M = t[47]),
            M
          );
        }
        default: {
          var w;
          return (
            t[48] !== n || t[49] !== a || t[50] !== i || t[51] !== l
              ? ((w = u.jsx(r("WAWebPaymentMessagePlaceholder.react"), {
                  msg: i,
                  displayAuthor: n,
                  displayType: a,
                  quotedMsg: l,
                })),
                (t[48] = n),
                (t[49] = a),
                (t[50] = i),
                (t[51] = l),
                (t[52] = w))
              : (w = t[52]),
            w
          );
        }
      }
    }
    l.default = c;
  },
  226,
);
