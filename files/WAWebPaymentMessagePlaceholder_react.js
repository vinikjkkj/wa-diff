__d(
  "WAWebPaymentMessagePlaceholder.react",
  [
    "fbt",
    "WAWebCiphertextIcon.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPhoneNumbers",
    "WAWebMsgSelectors",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        quote: {
          marginTop: "x1198e8h",
          marginInlineEnd: "xv9t0rm",
          marginBottom: "xyorhqc",
          marginInlineStart: "xw01apr",
          $$css: !0,
        },
        hasText: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = t.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
          (n = o("WAWebMsgGetters")).getIsSentByMe,
          n.getIsGroupMsg,
          n.getIsPSA,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getPaymentNoteMsg,
        ]),
        l = i[0],
        u = i[1],
        m = i[2],
        p = i[3],
        _ = i[4],
        f = i[5],
        g = i[6],
        h,
        y = g == null ? void 0 : g.body;
      if (y) {
        var C = o("WAWebFormatConfiguration").Conversation({
          mentions: a.mentionMap(),
          groupMentions: a.groupMentionMap(),
          links: o("WAWebMsgLinks").getLinksFromMsg(a.unsafe()),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
            a.unsafe(),
          ),
          trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
          fromMe: a.id.fromMe,
        });
        h = c.jsx(r("WAWebMessageSpacerText.react"), {
          msg: a.unsafe(),
          children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: y,
            selectable: !0,
            formatters: C,
            dirMismatch: l !== r("WAWebL10N").isRTL(),
            direction: u,
          }),
        });
      }
      var b;
      if (t.quotedMsg) {
        var v = (e || (e = r("stylex")))(
          d.quote,
          t.displayAuthor ||
            (o("WAWebMsgSelectors").showForwarded(a) &&
              o("WAWebUISpacing").uiMargin.top5),
        );
        b = c.jsx("div", { className: v, children: t.quotedMsg });
      }
      var S,
        R = s._(/*BTDS*/ "Payment message \u2022 Amount unavailable");
      t.placeholderText &&
        ((S = c.jsx(o("WAWebCiphertextIcon.react").CiphertextIcon, {})),
        (R = t.placeholderText));
      var L = (e || (e = r("stylex")))(
        h
          ? [
              d.hasText,
              o("WAWebUISpacing").uiMargin.bottom10,
              o("WAWebUISpacing").uiPadding.top5,
              o("WAWebUISpacing").uiPadding.end3,
              o("WAWebUISpacing").uiPadding.bottom10,
              o("WAWebUISpacing").uiPadding.start0,
            ]
          : [
              o("WAWebUISpacing").uiMargin.top4,
              o("WAWebUISpacing").uiMargin.bottom14,
            ],
      );
      return c.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: a,
        displayAuthor: t.displayAuthor,
        children: [
          b,
          t.paymentInfo,
          c.jsx("div", {
            className: L,
            children: c.jsx(r("WAWebMessagePlaceholder.react"), {
              hasCaption: !!h,
              Icon: S,
              msg: a.unsafe(),
              children: R,
            }),
          }),
          h,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
