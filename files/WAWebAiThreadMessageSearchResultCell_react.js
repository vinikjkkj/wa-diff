__d(
  "WAWebAiThreadMessageSearchResultCell.react",
  [
    "WAWebAiThreadGetters",
    "WAWebCellV2.react",
    "WAWebChatMessageSearch",
    "WAWebClock",
    "WAWebCmd",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebGetPlainTextFromBotMsg",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t,
        n = e.chat,
        a = e.msg,
        i = e.onThreadClick,
        l = e.searchText,
        c = e.thread,
        d = e.threadId,
        m = u(
          function () {
            return o("WAWebFormatConfiguration").SearchName({ terms: [l] });
          },
          [l],
        ),
        p =
          c != null
            ? c.title || o("WAWebAiThreadGetters").getDisplayTitle(c)
            : null,
        _ =
          p != null
            ? s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: p,
                  direction: "auto",
                }),
              })
            : null,
        f =
          (t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(a)) !=
          null
            ? t
            : "",
        g =
          f != null && f !== ""
            ? s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                maxLines: 1,
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: f,
                  formatters: m,
                  direction: "auto",
                }),
              })
            : null,
        h = a.t != null ? o("WAWebClock").Clock.relativeStr(a.t) : null,
        y =
          h != null
            ? s.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: h,
              })
            : null,
        C = function () {
          var e = o("WAWebChatMessageSearch").getSearchContext({
            chat: n,
            msgKey: a.id,
            threadId: d,
          });
          ((e.highlightTerms = [l]),
            o("WAWebCmd").Cmd.openChatAt({
              chat: n,
              msgContext: e,
              threadId: d,
            }),
            i(d));
        };
      return s.jsx(r("WAWebCellV2.react"), {
        onClick: C,
        colorScheme: "default",
        size: "large",
        border: "bottom-partial",
        primary: _,
        secondary: g,
        detailRight: y,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
