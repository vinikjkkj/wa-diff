__d(
  "WAWebMediaViewerCaption.react",
  ["WAWebFormatConfiguration", "WAWebMsgLinks", "WAWebMsgPhoneNumbers"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.id,
        n = e.msg;
      return o("WAWebFormatConfiguration").Conversation({
        mentions: n.mentionMap(),
        groupMentions: n.groupMentionMap(),
        phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(n),
        links: o("WAWebMsgLinks").getLinksFromMsg(n),
        trusted: !0,
        fromMe: t.fromMe,
        fromChatWid: t.remote,
        parseLists: !0,
        parseQuotes: !0,
        parseInlineCode: !0,
      });
    }
    l.getCaptionFormatters = e;
  },
  98,
);
