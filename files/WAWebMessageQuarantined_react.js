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
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getQuarantineExtractedText,
          o("WAWebFrontendMsgGetters").getSenderObj,
        ]),
        l = i[0],
        s = i[1],
        m = i[2],
        p = u._(/*BTDS*/ "Attachment blocked"),
        _ = s != null && s.length > 0,
        f = function () {
          o(
            "WAWebQuarantinedAttachmentInterstitial.react",
          ).openQuarantinedAttachmentInterstitial(a.id);
        },
        g = c.jsx(o("WAWebClickable.react").Clickable, {
          onClick: f,
          className: "_ahy5",
          children: c.jsx(r("WAWebMessageDeeperContainer.react"), {
            xstyle: [d.attachmentContainer, !_ && d.attachmentContainerNoText],
            outgoingMsg: l,
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: d.iconContainer,
                  children: c.jsx(r("WAWebDocumentFileIcon"), {
                    width: 26,
                    mimeType: "",
                    ext: "",
                  }),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: d.textContainer,
                  justify: "center",
                  children: c.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    colorName: "contentDefault",
                    children: p,
                  }),
                }),
              ],
            }),
          }),
        });
      return c.jsx(r("WAWebMessageTextBubble.react"), {
        msg: a,
        displayType: n,
        displayAuthor: t,
        hideMeta: !1,
        theme: "landscape",
        useFixedWidth: a.isDynamicReplyButtonsMsg,
        children: c.jsx(r("WAWebMessageBubbleHiddenText.react"), {
          contact: m,
          msg: a.unsafe(),
          children: c.jsxs(r("WAWebMessageContentBox.react"), {
            displayType: n,
            msg: a,
            showAuthor: t,
            trusted: !1,
            children: [
              g,
              c.jsx(r("WAWebMessageSpacerText.react"), {
                msg: a.unsafe(),
                spacer: _,
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: _ ? s : null,
                  xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                  direction: "auto",
                  breakWord: !0,
                }),
              }),
            ],
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
