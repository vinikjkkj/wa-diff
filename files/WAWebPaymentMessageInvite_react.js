__d(
  "WAWebPaymentMessageInvite.react",
  [
    "WAWebClassnames",
    "WAWebEmojiText.react",
    "WAWebFormatPaymentMsg",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaBubble.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = function (t) {
        if (t == null) return "";
        switch (t) {
          case o("WAWebProtobufsE2E.pb")
            .Message$PaymentInviteMessage$ServiceType.UPI:
            return "payments-invite-upi";
          default:
            return "";
        }
      },
      d = {
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        body: {
          display: "x78zum5",
          textDecoration: "x1hl2dhg",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(36),
        a = t.displayAuthor,
        i = t.displayType,
        l = t.msg,
        s;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((s = [
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
          (m = o("WAWebMsgGetters")).getIsSentByMe,
          m.getPaymentInviteServiceType,
          m.getIsGroupMsg,
          m.getIsPSA,
          o("WAWebFrontendMsgGetters").getSenderObj,
          m.getPaymentNoteMsg,
          m.getId,
          m.getTo,
          m.getFrom,
        ]),
          (n[0] = s));
      } else s = n[0];
      var p = o("useWAWebMsgValues").useMsgValues(l.id, s),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[8],
        C;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.top7,
            o("WAWebUISpacing").uiPadding.end4,
            o("WAWebUISpacing").uiPadding.bottom6,
            o("WAWebUISpacing").uiPadding.start6,
          )),
          (n[1] = C))
        : (C = n[1]);
      var b;
      n[2] !== l ? ((b = l.unsafe()), (n[2] = l), (n[3] = b)) : (b = n[3]);
      var v;
      n[4] !== y
        ? ((v = o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(y)),
          (n[4] = y),
          (n[5] = v))
        : (v = n[5]);
      var S;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = r("WAWebL10N").isRTL()), (n[6] = S))
        : (S = n[6]);
      var R = _ !== S,
        L;
      n[7] !== f || n[8] !== v || n[9] !== R
        ? ((L = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: v,
            selectable: !0,
            dirMismatch: R,
            direction: f,
          })),
          (n[7] = f),
          (n[8] = v),
          (n[9] = R),
          (n[10] = L))
        : (L = n[10]);
      var E;
      n[11] !== b || n[12] !== L
        ? ((E = u.jsx(
            "div",
            babelHelpers.extends({}, C, {
              children: u.jsx(r("WAWebMessageSpacerText.react"), {
                msg: b,
                children: L,
              }),
            }),
          )),
          (n[11] = b),
          (n[12] = L),
          (n[13] = E))
        : (E = n[13]);
      var k = E,
        I = !!k,
        T;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x78zum5 xdt5ytf xl56j7k xwzfr38 xztyhrg x18d0r48",
            "bg-payments",
          )),
          (n[14] = T))
        : (T = n[14]);
      var D;
      n[15] !== h
        ? ((D = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x10wjd1d xiy17q3 x158usst x1tbiz1a",
            c(h),
          )),
          (n[15] = h),
          (n[16] = D))
        : (D = n[16]);
      var x;
      n[17] !== D
        ? ((x = u.jsx("div", {
            className: T,
            children: u.jsx("div", { className: D }),
          })),
          (n[17] = D),
          (n[18] = x))
        : (x = n[18]);
      var $;
      n[19] !== g
        ? (($ = (e || (e = r("stylex"))).props(
            d.body,
            g ? d.bubbleOut : d.bubbleIn,
            o("WAWebUISpacing").uiPadding.top8,
            o("WAWebUISpacing").uiPadding.end6,
            o("WAWebUISpacing").uiPadding.bottom8,
            o("WAWebUISpacing").uiPadding.start8,
          )),
          (n[19] = g),
          (n[20] = $))
        : ($ = n[20]);
      var P;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = {
            className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs",
          }),
          (n[21] = P))
        : (P = n[21]);
      var N;
      n[22] !== k
        ? ((N = u.jsx("div", babelHelpers.extends({}, P, { children: k }))),
          (n[22] = k),
          (n[23] = N))
        : (N = n[23]);
      var M;
      n[24] !== $ || n[25] !== N
        ? ((M = u.jsx("div", babelHelpers.extends({}, $, { children: N }))),
          (n[24] = $),
          (n[25] = N),
          (n[26] = M))
        : (M = n[26]);
      var w;
      n[27] !== x || n[28] !== M
        ? ((w = u.jsxs("div", { children: [x, M] })),
          (n[27] = x),
          (n[28] = M),
          (n[29] = w))
        : (w = n[29]);
      var A;
      return (
        n[30] !== a || n[31] !== i || n[32] !== l || n[33] !== w || n[34] !== I
          ? ((A = u.jsx(r("WAWebMediaBubble.react"), {
              displayAuthor: a,
              displayType: i,
              hasCaption: I,
              msg: l,
              children: w,
            })),
            (n[30] = a),
            (n[31] = i),
            (n[32] = l),
            (n[33] = w),
            (n[34] = I),
            (n[35] = A))
          : (A = n[35]),
        A
      );
    }
    l.default = m;
  },
  98,
);
