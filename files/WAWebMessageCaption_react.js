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
    "useWAWebMessageHighlightTerms",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.highlightText,
        a = e.msg,
        i = e.overflowVisible,
        l = e.shouldFormatLinks,
        u = e.spacer,
        c = e.testId,
        d = e.trusted,
        m = r("useWAWebMessageHighlightTerms")(a.id),
        p = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (t = o("WAWebMsgGetters")).getT,
          t.getId,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getText,
          t.getInitialPageSize,
          t.getFooter,
          t.getCtwaContext,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C = p[5],
        b = p[6],
        v = p[7],
        S = !0;
      if (y == null || y === "") return null;
      var R = !!(g && h !== r("WAWebL10N").isRTL());
      return s.jsxs(s.Fragment, {
        children: [
          !v &&
            s.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
              msg: a,
            }),
          s.jsx(r("WAWebMessageSpacerText.react"), {
            overflowVisible: i,
            msg: a,
            "data-id": f,
            spacer: u,
            children: s.jsx(o("WAWebExpandableText.react").ExpandableText, {
              text: y,
              textLimit: C,
              children: function (t) {
                var e = t.textLimit,
                  r = n != null ? n.toLowerCase().split(" ") : m,
                  i = o("WAWebFormatConfiguration").Conversation({
                    mentions: a.mentionMap(),
                    groupMentions: a.groupMentionMap(),
                    hasMentionAll: o("WAWebMsgGetters").getHasMentionAll(a),
                    links:
                      l === !1
                        ? void 0
                        : o("WAWebMsgLinks").getLinksFromMsg(a, e),
                    phoneNumbers: o(
                      "WAWebMsgPhoneNumbers",
                    ).getPhoneNumbersFromMsg(a),
                    selectable: S,
                    trusted: d === !0,
                    fromMe: f.fromMe,
                    fromChatWid: f.remote,
                    parseLists: !0,
                    parseQuotes: !0,
                    parseInlineCode: !0,
                    terms: r != null ? r : null,
                  });
                return s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  testid: void 0,
                  direction: g,
                  dirMismatch: R,
                  formatters: i,
                  inferLinesDirection: !0,
                  selectable: S,
                  text: y,
                  textLimit: e,
                });
              },
            }),
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
