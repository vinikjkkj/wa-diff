__d(
  "WAWebResponseBody.react",
  [
    "WAWebChatCollection",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebSearchHighlightTermsContext.react",
    "WAWebStateUtils",
    "WDSFontTokenStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = {
        container: {
          width: "xh8yej3",
          minWidth: "xeuugli",
          maxWidth: "x193iq5w",
          flex: "x1cqoux5",
          overflowWrap: "x1mzt3pk",
          whiteSpace: "x126k92a",
          $$css: !0,
        },
      },
      m = 70,
      p = { "--highlight": "currentColor" };
    function _(t) {
      var n = t.response,
        a = c(r("WAWebSearchHighlightTermsContext.react"));
      return u.jsx(r("WAWebFlexItem.react"), {
        className: (e || (e = r("stylex")))([d.container]),
        style: p,
        children: u.jsx(o("WAWebExpandableText.react").ExpandableText, {
          text: n.body,
          textLimit: m,
          children: function (t) {
            var e = t.textLimit,
              r = o("WAWebFormatConfiguration").Conversation({
                trusted: h(n),
                links: f(o("WAWebStateUtils").unproxy(n), m),
                phoneNumbers: g(o("WAWebStateUtils").unproxy(n), m),
                selectable: !0,
                parseInlineCode: !0,
                parseQuotes: !0,
                parseLists: !0,
                terms: a,
              });
            return u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: n.body,
              breakWord: !0,
              textLimit: e,
              formatters: r,
              selectable: !0,
              multiline: !0,
              displayBlock: !0,
              xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
            });
          },
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      var n = e.body;
      if (n == null) return e.links;
      var r = o("WAWebMsgLinks").getLinksFromMsgImpl({
          content: n,
          sender: e.senderId,
          cachedValue: e.links,
          currentIndex: e.linksIndexParsed,
          endIndex: t,
        }),
        a = r[0],
        i = r[1];
      return ((e.linksIndexParsed = i), (e.links = a), a);
    }
    function g(e, t) {
      var n = e.body;
      if (n == null) return e.phoneNumbers;
      var r = o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsgImpl({
          content: n,
          cachedValue: e.phoneNumbers,
          currentIndex: e.phoneNumbersIndexParsed,
          endIndex: t,
        }),
        a = r[0],
        i = r[1];
      return ((e.phoneNumbersIndexParsed = i), (e.phoneNumbers = a), a);
    }
    function h(e) {
      if (e.isSentByMe || e.senderId) return !0;
      var t = o("WAWebChatCollection").ChatCollection.get(
        e.parentMsgKey.remote,
      );
      return t != null ? t.isTrusted() && t.notSpam : !1;
    }
    l.default = _;
  },
  98,
);
