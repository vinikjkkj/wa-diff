__d(
  "WAWebRichResponseTextFragment.react",
  [
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.fragment,
        n = e.msg,
        a = !0,
        i = t.text;
      return s.jsx(o("WAWebExpandableText.react").ExpandableText, {
        text: i,
        textLimit: o("WAWebMsgGetters").getInitialPageSize(n),
        children: function (t) {
          var e = t.textLimit,
            l = o("WAWebFormatConfiguration").RichResponse({
              selectable: a,
              links: o("WAWebMsgLinks").getLinksFromMsg(n.unsafe(), e),
            });
          return s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: i,
            lastBotEditBodyLength: n.lastBotEditBodyLength,
            dirMismatch:
              o("WAWebFrontendMsgGetters").getRtl(n) !== r("WAWebL10N").isRTL(),
            direction: o("WAWebFrontendMsgGetters").getDir(n),
            inferLinesDirection: !0,
            formatters: l,
            selectable: a,
            textLimit: e,
          });
        },
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
