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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(7),
        a = t.response,
        i = c(r("WAWebSearchHighlightTermsContext.react")),
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex")))([d.container])), (n[0] = l))
        : (l = n[0]);
      var s;
      n[1] !== i || n[2] !== a
        ? ((s = function (t) {
            var e = t.textLimit,
              n = o("WAWebFormatConfiguration").Conversation({
                trusted: h(a),
                links: f(o("WAWebStateUtils").unproxy(a), m),
                phoneNumbers: g(o("WAWebStateUtils").unproxy(a), m),
                selectable: !0,
                parseInlineCode: !0,
                parseQuotes: !0,
                parseLists: !0,
                terms: i,
              });
            return u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: a.body,
              breakWord: !0,
              textLimit: e,
              formatters: n,
              selectable: !0,
              multiline: !0,
              displayBlock: !0,
              xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
            });
          }),
          (n[1] = i),
          (n[2] = a),
          (n[3] = s))
        : (s = n[3]);
      var _;
      return (
        n[4] !== a.body || n[5] !== s
          ? ((_ = u.jsx(r("WAWebFlexItem.react"), {
              className: l,
              style: p,
              children: u.jsx(o("WAWebExpandableText.react").ExpandableText, {
                text: a.body,
                textLimit: m,
                children: s,
              }),
            })),
            (n[4] = a.body),
            (n[5] = s),
            (n[6] = _))
          : (_ = n[6]),
        _
      );
    }
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
