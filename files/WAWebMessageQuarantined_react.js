__d(
  "WAWebMessageQuarantined.react",
  [
    "cx",
    "fbt",
    "WAWebClickable.react",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageContentBox.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebQuarantinedAttachmentInterstitial.react",
    "WDSFontTokenStyles",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = {
        attachmentContainer: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xdx6fka",
          position: "x1n2onr6",
          $$css: !0,
        },
        attachmentContainerNoText: { marginBottom: "x1ua1l7f", $$css: !0 },
        iconContainer: {
          flexShrink: "x2lah0s",
          width: "x23j0i4",
          height: "x1gnnpzl",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        textContainer: {
          flexGrow: "x1iyjqo2",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getQuarantineExtractedText,
            o("WAWebFrontendMsgGetters").getSenderObj,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var s = o("useWAWebMsgValues").useMsgValues(i.id, l),
        m = s[0],
        p = s[1],
        _ = s[2],
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u._(/*BTDS*/ "Attachment blocked")), (t[1] = f))
        : (f = t[1]);
      var g = f,
        h = p != null && p.length > 0,
        y;
      t[2] !== i.id
        ? ((y = function () {
            o(
              "WAWebQuarantinedAttachmentInterstitial.react",
            ).openQuarantinedAttachmentInterstitial(i.id);
          }),
          (t[2] = i.id),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b = !h && d.attachmentContainerNoText,
        v;
      t[4] !== b
        ? ((v = [d.attachmentContainer, b]), (t[4] = b), (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: d.iconContainer,
            children: c.jsx(r("WAWebDocumentFileIcon"), {
              width: 26,
              mimeType: "",
              ext: "",
            }),
          })),
          (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              S,
              c.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.textContainer,
                justify: "center",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "contentDefault",
                  children: g,
                }),
              }),
            ],
          })),
          (t[7] = R))
        : (R = t[7]);
      var L;
      t[8] !== m || t[9] !== v
        ? ((L = c.jsx(r("WAWebMessageDeeperContainer.react"), {
            xstyle: v,
            outgoingMsg: m,
            children: R,
          })),
          (t[8] = m),
          (t[9] = v),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== C || t[12] !== L
        ? ((E = c.jsx(o("WAWebClickable.react").Clickable, {
            onClick: C,
            className: "_ahy5",
            children: L,
          })),
          (t[11] = C),
          (t[12] = L),
          (t[13] = E))
        : (E = t[13]);
      var k = E,
        I = i.isDynamicReplyButtonsMsg,
        T;
      t[14] !== i ? ((T = i.unsafe()), (t[14] = i), (t[15] = T)) : (T = t[15]);
      var D;
      t[16] !== i ? ((D = i.unsafe()), (t[16] = i), (t[17] = D)) : (D = t[17]);
      var x = h ? p : null,
        $;
      t[18] !== x
        ? (($ = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: x,
            xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
            direction: "auto",
            breakWord: !0,
          })),
          (t[18] = x),
          (t[19] = $))
        : ($ = t[19]);
      var P;
      t[20] !== h || t[21] !== D || t[22] !== $
        ? ((P = c.jsx(r("WAWebMessageSpacerText.react"), {
            msg: D,
            spacer: h,
            children: $,
          })),
          (t[20] = h),
          (t[21] = D),
          (t[22] = $),
          (t[23] = P))
        : (P = t[23]);
      var N;
      t[24] !== k || t[25] !== n || t[26] !== a || t[27] !== i || t[28] !== P
        ? ((N = c.jsxs(r("WAWebMessageContentBox.react"), {
            displayType: a,
            msg: i,
            showAuthor: n,
            trusted: !1,
            children: [k, P],
          })),
          (t[24] = k),
          (t[25] = n),
          (t[26] = a),
          (t[27] = i),
          (t[28] = P),
          (t[29] = N))
        : (N = t[29]);
      var M;
      t[30] !== _ || t[31] !== T || t[32] !== N
        ? ((M = c.jsx(r("WAWebMessageBubbleHiddenText.react"), {
            contact: _,
            msg: T,
            children: N,
          })),
          (t[30] = _),
          (t[31] = T),
          (t[32] = N),
          (t[33] = M))
        : (M = t[33]);
      var w;
      return (
        t[34] !== n || t[35] !== a || t[36] !== i || t[37] !== M
          ? ((w = c.jsx(r("WAWebMessageTextBubble.react"), {
              msg: i,
              displayType: a,
              displayAuthor: n,
              hideMeta: !1,
              theme: "landscape",
              useFixedWidth: I,
              children: M,
            })),
            (t[34] = n),
            (t[35] = a),
            (t[36] = i),
            (t[37] = M),
            (t[38] = w))
          : (w = t[38]),
        w
      );
    }
    l.default = m;
  },
  226,
);
