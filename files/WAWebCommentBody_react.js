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
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = { container: { maxWidth: "x1j9u4d2", $$css: !0 } };
    function d(t) {
      var n = t.comment;
      return u.jsx(r("WAWebFlexItem.react"), {
        className: (e || (e = r("stylex")))([c.container]),
        children: u.jsx(o("WAWebExpandableText.react").ExpandableText, {
          text: n.body,
          textLimit: o("WAWebMsgGetters").INITIAL_PAGE_SIZE,
          children: function (t) {
            var e = t.textLimit,
              r = o("WAWebFormatConfiguration").Conversation({
                trusted: o("WAWebCommentFrontendUtils").isTrustedComment(n),
                links: o("WAWebCommentFrontendUtils").getLinksFromComment(
                  o("WAWebStateUtils").unproxy(n),
                  o("WAWebMsgGetters").INITIAL_PAGE_SIZE,
                ),
                phoneNumbers: o(
                  "WAWebCommentFrontendUtils",
                ).getPhoneNumbersFromComment(
                  o("WAWebStateUtils").unproxy(n),
                  o("WAWebMsgGetters").INITIAL_PAGE_SIZE,
                ),
                selectable: !0,
                parseInlineCode: !0,
                parseQuotes: !0,
                parseLists: !0,
              });
            return u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: n.body,
              textLimit: e,
              formatters: r,
              selectable: !0,
              multiline: !0,
            });
          },
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
