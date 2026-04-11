__d(
  "WAWebPaymentInfo.react",
  [
    "WAWebPaymentAmount.react",
    "WAWebPaymentBackground.react",
    "WAWebPaymentIcon.react",
    "WAWebPaymentNoteMessage.react",
    "WAWebPaymentStatus.react",
    "WAWebPaymentType.react",
    "WAWebProtobufsWeb.pb",
    "WAWebSpacerText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = 20,
      m = {
        bubbleOutBody: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleInBody: { backgroundColor: "x1bu39yj", $$css: !0 },
        body: {
          display: "x78zum5",
          textDecoration: "x1hl2dhg",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          $$css: !0,
        },
        bodyIconMultiline: { alignSelf: "xamitd3", $$css: !0 },
        bodyIcon: { flex: "x1okw0bk", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(62),
        a = t.expiryTimestamp,
        i = t.paymentStatus,
        l = t.paymentTxnStatus,
        s = c(!1),
        p = s[0],
        _ = s[1],
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (t) {
            t && _(t.getBoundingClientRect().height > d);
          }),
          (n[0] = f))
        : (f = n[0]);
      var g = f,
        h =
          (l != null &&
            l !== o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN) ||
          (i != null &&
            i !== o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS),
        y;
      if (t.hasCaption === !0) {
        var C;
        n[1] !== t.receiverJid || n[2] !== t.subtype
          ? ((C = u.jsx("div", {
              children: u.jsx(r("WAWebPaymentType.react"), {
                subtype: t.subtype,
                receiverJid: t.receiverJid,
              }),
            })),
            (n[1] = t.receiverJid),
            (n[2] = t.subtype),
            (n[3] = C))
          : (C = n[3]);
        var b;
        n[4] !== a || n[5] !== i || n[6] !== l
          ? ((b = u.jsx(r("WAWebPaymentStatus.react"), {
              paymentStatus: i,
              paymentTxnStatus: l,
              expiryTimestamp: a,
            })),
            (n[4] = a),
            (n[5] = i),
            (n[6] = l),
            (n[7] = b))
          : (b = n[7]);
        var v;
        (n[8] !== C || n[9] !== b
          ? ((v = u.jsxs("div", { ref: g, children: [C, b] })),
            (n[8] = C),
            (n[9] = b),
            (n[10] = v))
          : (v = n[10]),
          (y = v));
      } else if (h) {
        var S;
        n[11] !== t.receiverJid || n[12] !== t.subtype
          ? ((S = u.jsx("div", {
              children: u.jsx(r("WAWebPaymentType.react"), {
                subtype: t.subtype,
                receiverJid: t.receiverJid,
              }),
            })),
            (n[11] = t.receiverJid),
            (n[12] = t.subtype),
            (n[13] = S))
          : (S = n[13]);
        var R;
        if (n[14] !== t.msg) {
          var L;
          ((R = (L = t.msg) == null ? void 0 : L.unsafe()),
            (n[14] = t.msg),
            (n[15] = R));
        } else R = n[15];
        var E;
        n[16] !== a || n[17] !== i || n[18] !== l
          ? ((E = u.jsx(r("WAWebPaymentStatus.react"), {
              paymentStatus: i,
              paymentTxnStatus: l,
              expiryTimestamp: a,
            })),
            (n[16] = a),
            (n[17] = i),
            (n[18] = l),
            (n[19] = E))
          : (E = n[19]);
        var k;
        n[20] !== R || n[21] !== E
          ? ((k = u.jsx(r("WAWebSpacerText.react"), { msg: R, children: E })),
            (n[20] = R),
            (n[21] = E),
            (n[22] = k))
          : (k = n[22]);
        var I;
        (n[23] !== S || n[24] !== k
          ? ((I = u.jsxs("div", { ref: g, children: [S, k] })),
            (n[23] = S),
            (n[24] = k),
            (n[25] = I))
          : (I = n[25]),
          (y = I));
      } else {
        var T;
        if (n[26] !== t.msg) {
          var D;
          ((T = (D = t.msg) == null ? void 0 : D.unsafe()),
            (n[26] = t.msg),
            (n[27] = T));
        } else T = n[27];
        var x;
        n[28] !== t.receiverJid || n[29] !== t.subtype
          ? ((x = u.jsx("span", {
              ref: g,
              children: u.jsx(r("WAWebPaymentType.react"), {
                subtype: t.subtype,
                receiverJid: t.receiverJid,
              }),
            })),
            (n[28] = t.receiverJid),
            (n[29] = t.subtype),
            (n[30] = x))
          : (x = n[30]);
        var $;
        (n[31] !== T || n[32] !== x
          ? (($ = u.jsx(r("WAWebSpacerText.react"), { msg: T, children: x })),
            (n[31] = T),
            (n[32] = x),
            (n[33] = $))
          : ($ = n[33]),
          (y = $));
      }
      var P;
      n[34] !== t.amount1000 || n[35] !== t.currency
        ? ((P = u.jsx(r("WAWebPaymentBackground.react"), {
            children: u.jsx(r("WAWebPaymentAmount.react"), {
              currency: t.currency,
              amount1000: t.amount1000,
            }),
          })),
          (n[34] = t.amount1000),
          (n[35] = t.currency),
          (n[36] = P))
        : (P = n[36]);
      var N;
      n[37] !== t.isSentByMe
        ? ((N = (e || (e = r("stylex"))).props(
            m.body,
            o("WAWebUISpacing").uiPadding.vert8,
            o("WAWebUISpacing").uiPadding.end6,
            o("WAWebUISpacing").uiPadding.start8,
            t.isSentByMe === !0 ? m.bubbleOutBody : m.bubbleInBody,
          )),
          (n[37] = t.isSentByMe),
          (n[38] = N))
        : (N = n[38]);
      var M;
      n[39] !== p
        ? ((M = (e || (e = r("stylex"))).props(
            p && m.bodyIconMultiline,
            m.bodyIcon,
            o("WAWebUISpacing").uiMargin.end8,
          )),
          (n[39] = p),
          (n[40] = M))
        : (M = n[40]);
      var w;
      n[41] !== i || n[42] !== l || n[43] !== t.currency || n[44] !== t.subtype
        ? ((w = u.jsx(r("WAWebPaymentIcon.react"), {
            currency: t.currency,
            subtype: t.subtype,
            paymentStatus: i,
            paymentTxnStatus: l,
          })),
          (n[41] = i),
          (n[42] = l),
          (n[43] = t.currency),
          (n[44] = t.subtype),
          (n[45] = w))
        : (w = n[45]);
      var A;
      n[46] !== M || n[47] !== w
        ? ((A = u.jsx("div", babelHelpers.extends({}, M, { children: w }))),
          (n[46] = M),
          (n[47] = w),
          (n[48] = A))
        : (A = n[48]);
      var F;
      n[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = {
            className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs",
          }),
          (n[49] = F))
        : (F = n[49]);
      var O;
      n[50] !== y
        ? ((O = u.jsx("div", babelHelpers.extends({}, F, { children: y }))),
          (n[50] = y),
          (n[51] = O))
        : (O = n[51]);
      var B;
      n[52] !== N || n[53] !== A || n[54] !== O
        ? ((B = u.jsxs(
            "div",
            babelHelpers.extends({}, N, { children: [A, O] }),
          )),
          (n[52] = N),
          (n[53] = A),
          (n[54] = O),
          (n[55] = B))
        : (B = n[55]);
      var W;
      if (n[56] !== t.msg) {
        var q;
        ((W =
          (q = t.msg) != null && q.paymentNoteMsg
            ? u.jsx(r("WAWebPaymentNoteMessage.react"), { msg: t.msg })
            : null),
          (n[56] = t.msg),
          (n[57] = W));
      } else W = n[57];
      var U;
      return (
        n[58] !== P || n[59] !== B || n[60] !== W
          ? ((U = u.jsxs("div", { children: [P, B, W] })),
            (n[58] = P),
            (n[59] = B),
            (n[60] = W),
            (n[61] = U))
          : (U = n[61]),
        U
      );
    }
    l.default = p;
  },
  98,
);
