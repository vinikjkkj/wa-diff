__d(
  "WAWebMessageStaticSingleEmoji.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebEmoji",
    "WAWebMessageLargeEmoji.react",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = o("WAWebEmoji")
          .EmojiUtil.getHeartEmojis()
          .some(function (t) {
            return (
              o("WAWebEmoji").EmojiUtil.normalizeEmoji(t) ===
              o("WAWebEmoji").EmojiUtil.normalizeEmoji(e.emoji)
            );
          }),
        a = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
          selectable: !0,
          className:
            "x1n2onr6 x1omtkq1 x78zum5 xl56j7k x1yrsyyn xdj266r x1emmycd x1u7kmwd xx6jrq6 x1ed109x",
          children: s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
            animation: n,
            size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE_60,
            emoji: e.emoji,
            selectable: !0,
          }),
        });
      return s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
        displayAuthor: e.displayAuthor,
        msg: t,
        quotedMsg: e.quotedMsg,
        position: e.position,
        displayType: e.displayType,
        onDetailsPaneClosed: e.onDetailsPaneClosed,
        msgContent: a,
        ref: e.stickerLikeBubbleContainerRef,
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = u;
    l.default = c;
  },
  98,
);
