__d(
  "WAWebSendOrRequestPaymentMessage.react",
  [
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaBubble.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPhoneNumbers",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = t.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
          (n = o("WAWebMsgGetters")).getIsGroupMsg,
          n.getIsPSA,
          n.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getPaymentNoteMsg,
        ]),
        l = i[0],
        s = i[1],
        c = i[2],
        d = i[3],
        m = i[4],
        p = i[5],
        _ = i[6],
        f = _ == null ? void 0 : _.body,
        g = !f,
        h = null,
        y;
      if (f) {
        var C = o("WAWebFormatConfiguration").Conversation({
          mentions: a.mentionMap(),
          groupMentions: a.groupMentionMap(),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
            a.unsafe(),
          ),
          links: o("WAWebMsgLinks").getLinksFromMsg(a.unsafe()),
          trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
          fromMe: a.id.fromMe,
        });
        h = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              o("WAWebUISpacing").uiPadding.top7,
              o("WAWebUISpacing").uiPadding.end4,
              o("WAWebUISpacing").uiPadding.bottom6,
              o("WAWebUISpacing").uiPadding.start6,
            ]),
            {
              children: u.jsx(r("WAWebMessageSpacerText.react"), {
                msg: a.unsafe(),
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: f,
                  selectable: !0,
                  formatters: C,
                  dirMismatch: l !== r("WAWebL10N").isRTL(),
                  direction: s,
                }),
              }),
            },
          ),
        );
      } else
        y = u.jsx("div", {
          className: "x10l6tqk x11dcrhx xrb244j",
          children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
        });
      return u.jsxs(r("WAWebMediaBubble.react"), {
        displayAuthor: t.displayAuthor,
        displayType: t.displayType,
        hasCaption: !!h,
        msg: a,
        quotedMsg: t.quotedMsg,
        hideMeta: g,
        children: [t.paymentInfo, y, h],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
