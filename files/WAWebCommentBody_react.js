__d(
  "WAWebCommentBody.react",
  [
    "WAWebCommentFrontendUtils",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = { container: { maxWidth: "x1j9u4d2", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.comment,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e || (e = r("stylex")))([c.container])), (n[0] = i))
        : (i = n[0]);
      var l;
      n[1] !== a
        ? ((l = function (t) {
            var e = t.textLimit,
              n = o("WAWebFormatConfiguration").Conversation({
                trusted: o("WAWebCommentFrontendUtils").isTrustedComment(a),
                links: o("WAWebCommentFrontendUtils").getLinksFromComment(
                  o("WAWebStateUtils").unproxy(a),
                  o("WAWebMsgGetters").INITIAL_PAGE_SIZE,
                ),
                phoneNumbers: o(
                  "WAWebCommentFrontendUtils",
                ).getPhoneNumbersFromComment(
                  o("WAWebStateUtils").unproxy(a),
                  o("WAWebMsgGetters").INITIAL_PAGE_SIZE,
                ),
                selectable: !0,
                parseInlineCode: !0,
                parseQuotes: !0,
                parseLists: !0,
              });
            return u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: a.body,
              textLimit: e,
              formatters: n,
              selectable: !0,
              multiline: !0,
            });
          }),
          (n[1] = a),
          (n[2] = l))
        : (l = n[2]);
      var s;
      return (
        n[3] !== a.body || n[4] !== l
          ? ((s = u.jsx(r("WAWebFlexItem.react"), {
              className: i,
              children: u.jsx(o("WAWebExpandableText.react").ExpandableText, {
                text: a.body,
                textLimit: o("WAWebMsgGetters").INITIAL_PAGE_SIZE,
                children: l,
              }),
            })),
            (n[3] = a.body),
            (n[4] = l),
            (n[5] = s))
          : (s = n[5]),
        s
      );
    }
    l.default = d;
  },
  98,
);
