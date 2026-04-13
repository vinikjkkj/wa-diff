__d(
  "WAWebMessageCaption.react",
  [
    "WAWebBizSuspiciousLabel.react",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "react",
    "react-compiler-runtime",
    "useWAWebMessageHighlightTerms",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.highlightText,
        a = e.msg,
        i = e.overflowVisible,
        l = e.shouldFormatLinks,
        u = e.spacer,
        c = e.testId,
        d = e.trusted,
        m = r("useWAWebMessageHighlightTerms")(a.id),
        p;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var _;
        ((p = [
          (_ = o("WAWebMsgGetters")).getT,
          _.getId,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getText,
          _.getInitialPageSize,
          _.getFooter,
          _.getCtwaContext,
        ]),
          (t[0] = p));
      } else p = t[0];
      var f = o("useWAWebMsgValues").useMsgValues(e.msg.id, p),
        g = f[1],
        h = f[2],
        y = f[3],
        C = f[4],
        b = f[5],
        v = f[7];
      if (C == null || C === "") return null;
      var S;
      t[1] !== h || t[2] !== y
        ? ((S = h && y !== r("WAWebL10N").isRTL()),
          (t[1] = h),
          (t[2] = y),
          (t[3] = S))
        : (S = t[3]);
      var R = !!S,
        L;
      t[4] !== v || t[5] !== a
        ? ((L =
            !v &&
            s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
              msg: a,
            })),
          (t[4] = v),
          (t[5] = a),
          (t[6] = L))
        : (L = t[6]);
      var E;
      t[7] !== h ||
      t[8] !== R ||
      t[9] !== m ||
      t[10] !== n ||
      t[11] !== g.fromMe ||
      t[12] !== g.remote ||
      t[13] !== a ||
      t[14] !== l ||
      t[15] !== c ||
      t[16] !== C ||
      t[17] !== d
        ? ((E = function (t) {
            var e = t.textLimit,
              r = n != null ? n.toLowerCase().split(" ") : m,
              i = o("WAWebFormatConfiguration").Conversation({
                mentions: a.mentionMap(),
                groupMentions: a.groupMentionMap(),
                hasMentionAll: o("WAWebMsgGetters").getHasMentionAll(a),
                links:
                  l === !1 ? void 0 : o("WAWebMsgLinks").getLinksFromMsg(a, e),
                phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
                  a,
                ),
                selectable: !0,
                trusted: d === !0,
                fromMe: g.fromMe,
                fromChatWid: g.remote,
                parseLists: !0,
                parseQuotes: !0,
                parseInlineCode: !0,
                terms: r != null ? r : null,
              });
            return s.jsx(o("WAWebEmojiText.react").EmojiText, {
              testid: void 0,
              direction: h,
              dirMismatch: R,
              formatters: i,
              inferLinesDirection: !0,
              selectable: !0,
              text: C,
              textLimit: e,
            });
          }),
          (t[7] = h),
          (t[8] = R),
          (t[9] = m),
          (t[10] = n),
          (t[11] = g.fromMe),
          (t[12] = g.remote),
          (t[13] = a),
          (t[14] = l),
          (t[15] = c),
          (t[16] = C),
          (t[17] = d),
          (t[18] = E))
        : (E = t[18]);
      var k;
      t[19] !== b || t[20] !== E || t[21] !== C
        ? ((k = s.jsx(o("WAWebExpandableText.react").ExpandableText, {
            text: C,
            textLimit: b,
            children: E,
          })),
          (t[19] = b),
          (t[20] = E),
          (t[21] = C),
          (t[22] = k))
        : (k = t[22]);
      var I;
      t[23] !== g || t[24] !== a || t[25] !== i || t[26] !== u || t[27] !== k
        ? ((I = s.jsx(r("WAWebMessageSpacerText.react"), {
            overflowVisible: i,
            msg: a,
            "data-id": g,
            spacer: u,
            children: k,
          })),
          (t[23] = g),
          (t[24] = a),
          (t[25] = i),
          (t[26] = u),
          (t[27] = k),
          (t[28] = I))
        : (I = t[28]);
      var T;
      return (
        t[29] !== L || t[30] !== I
          ? ((T = s.jsxs(s.Fragment, { children: [L, I] })),
            (t[29] = L),
            (t[30] = I),
            (t[31] = T))
          : (T = t[31]),
        T
      );
    }
    l.default = u;
  },
  98,
);
