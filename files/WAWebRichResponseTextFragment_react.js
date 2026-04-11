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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.fragment,
        a = e.msg,
        i = n.text,
        l;
      t[0] !== a
        ? ((l = o("WAWebMsgGetters").getInitialPageSize(a)),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== a || t[3] !== i
        ? ((u = function (t) {
            var e = t.textLimit,
              n = o("WAWebFormatConfiguration").RichResponse({
                selectable: !0,
                links: o("WAWebMsgLinks").getLinksFromMsg(a.unsafe(), e),
              });
            return s.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: i,
              lastBotEditBodyLength: a.lastBotEditBodyLength,
              dirMismatch:
                o("WAWebFrontendMsgGetters").getRtl(a) !==
                r("WAWebL10N").isRTL(),
              direction: o("WAWebFrontendMsgGetters").getDir(a),
              inferLinesDirection: !0,
              formatters: n,
              selectable: !0,
              textLimit: e,
            });
          }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = u))
        : (u = t[4]);
      var c;
      return (
        t[5] !== l || t[6] !== u || t[7] !== i
          ? ((c = s.jsx(o("WAWebExpandableText.react").ExpandableText, {
              text: i,
              textLimit: l,
              children: u,
            })),
            (t[5] = l),
            (t[6] = u),
            (t[7] = i),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    l.default = u;
  },
  98,
);
