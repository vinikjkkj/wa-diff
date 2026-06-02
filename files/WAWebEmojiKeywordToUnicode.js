__d(
  "WAWebEmojiKeywordToUnicode",
  [
    "WAArraysShallowEqual",
    "WALogger",
    "WAWebEmojiDownloadSuggestions",
    "WAWebEmojiSearch",
    "WAWebEventsWaitForBbEvent",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebStreamModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    function c(t) {
      return u != null
        ? o("WAWebEmojiSearch").emojiSearch(t, u)
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Emoji Trie is not loaded.",
                ])),
            )
            .sendLogs("Emoji Trie is not loaded"),
          []);
    }
    var d = null,
      m = [];
    function p() {
      f();
      var e = ["en"],
        t = r("WAWebL10N").getNormalizedLocale();
      if ((t !== "en" && e.push(t), !r("WAArraysShallowEqual")(m, e))) {
        m = e;
        var n = o("WAWebEmojiDownloadSuggestions")
          .downloadEmojiSuggestions()
          .then(async function (e) {
            d === n &&
              (u = await o("WAWebEmojiSearch").emojiLocaleDictsToTrie(e));
          })
          .catch(r("WAWebNoop"))
          .finally(function () {
            d === n && (d = null);
          });
        d = n;
      }
    }
    var _ = !1;
    function f() {
      if (!_) {
        try {
          r("WAWebL10N").on("locale_change", function () {
            p();
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[emoji-trie] subscription to locale_change failed: ",
                  ", stack: ",
                  "",
                ])),
              e,
              e.stack,
            )
            .sendLogs(
              "[emoji-trie] subscription to locale_change failed: " + e.message,
            );
        }
        (r("WAWebEventsWaitForBbEvent")(
          o("WAWebStreamModel").Stream,
          "change:mode",
          function () {
            return (
              o("WAWebStreamModel").Stream.mode ===
              o("WAWebStreamModel").StreamMode.MAIN
            );
          },
        ).then(function () {
          p();
        }),
          (_ = !0));
      }
    }
    ((l.emojiKeywordToUnicodeSearch = c), (l.updateEmojiTrie = p));
  },
  98,
);
