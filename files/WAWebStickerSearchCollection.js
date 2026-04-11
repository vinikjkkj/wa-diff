__d(
  "WAWebStickerSearchCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebSearchFirstPartyStickersAction",
    "WAWebStickerModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        HAPPY: [
          "\uD83D\uDE02",
          "\uD83E\uDD23",
          "\uD83D\uDE00",
          "\uD83D\uDE01",
          "\uD83D\uDE06",
          "\uD83D\uDE42",
          "\uD83D\uDE07",
          "\u263A\uFE0F",
          "\uD83D\uDE04",
          "\uD83D\uDE03",
        ],
        LOVE: [
          "\uD83D\uDE0D",
          "\uD83D\uDE18",
          "\u2764\uFE0F",
          "\uD83D\uDC95",
          "\uD83E\uDD70",
          "\uD83D\uDE17",
          "\uD83D\uDE19",
          "\uD83D\uDE3B",
          "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69",
          "\uD83D\uDC90",
          "\uD83D\uDC8C",
          "\uD83D\uDC9B",
          "\uD83D\uDC9A",
          "\uD83D\uDC99",
          "\uD83D\uDC9C",
          "\uD83D\uDC93",
          "\uD83D\uDC98",
          "\uD83D\uDC8F",
          "\uD83D\uDC91",
          "\uD83C\uDF39",
          "\uD83E\uDD1F",
          "\uD83C\uDFE9",
        ],
        GREETINGS: [
          "\uD83D\uDC4B",
          "\uD83D\uDE02",
          "\uD83E\uDD23",
          "\uD83D\uDE4F",
          "\u270B",
          "\uD83E\uDDD5",
          "\uD83D\uDEB6\u200D\u2640\uFE0F",
          "\uD83D\uDEB6",
          "\uD83D\uDC60",
          "\uD83E\uDD7E",
          "\uD83D\uDE48",
          "\uD83E\uDD9B",
          "\uD83C\uDF3A",
          "\u26A1",
          "\uD83C\uDFAF",
          "\uD83D\uDE84",
          "\uD83D\uDE85",
          "\uD83D\uDC92",
          "\uD83D\uDED5",
          "\uD83D\uDEE3\uFE0F",
          "\uD83D\uDD49\uFE0F",
          "\uD83D\uDD0A",
        ],
        SAD: [
          "\uD83D\uDE2D",
          "\uD83D\uDE14",
          "\uD83D\uDE22",
          "\uD83D\uDE1E",
          "\uD83D\uDE1F",
          "\uD83D\uDE15",
          "\uD83D\uDE41",
          "\u2639\uFE0F",
          "\uD83D\uDE16",
          "\uD83D\uDE2B",
          "\uD83D\uDE29",
          "\uD83E\uDD7A",
          "\uD83D\uDE25",
          "\uD83D\uDE13",
          "\uD83D\uDE2A",
          "\uD83D\uDE3F",
          "\uD83D\uDCA7",
          "\uD83D\uDC94",
        ],
        ANGRY: [
          "\uD83D\uDE20",
          "\uD83D\uDE21",
          "\uD83D\uDE24",
          "\uD83D\uDC7A",
          "\uD83D\uDCA2",
          "\uD83D\uDDEF\uFE0F",
          "\uD83D\uDC7F",
        ],
        CELEBRATE: [
          "\uD83E\uDD73",
          "\uD83E\uDD42",
          "\uD83C\uDF88",
          "\uD83C\uDF8A",
          "\uD83C\uDF89",
        ],
      },
      c = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$StickerSearchCollectionImpl$p_1 = new Map()),
            (e.$StickerSearchCollectionImpl$p_2 = !1),
            (e.$StickerSearchCollectionImpl$p_4 = !0),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.isFetchingData = function () {
            return this.$StickerSearchCollectionImpl$p_4;
          }),
          (a.hasFetchedData = function () {
            return this.$StickerSearchCollectionImpl$p_2;
          }),
          (a.setStartFetching = function () {
            ((this.$StickerSearchCollectionImpl$p_4 = !0),
              this.trigger("start_fetching"));
          }),
          (a.setStopFetching = function () {
            ((this.$StickerSearchCollectionImpl$p_4 = !1),
              this.trigger("stop_fetching"));
          }),
          (a.search = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                this.$StickerSearchCollectionImpl$p_3 !== n &&
                  this.$StickerSearchCollectionImpl$p_2 &&
                  t.prototype.delete.call(this);
                var r = n.trim().toUpperCase();
                if (this.$StickerSearchCollectionImpl$p_1.has(n)) {
                  var a = this.$StickerSearchCollectionImpl$p_1.get(n);
                  if (a != null) {
                    (this.add(a), (this.$StickerSearchCollectionImpl$p_3 = n));
                    return;
                  }
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "StickerMoodCollection cache was invalid, re-searching.",
                      ])),
                  );
                }
                var i = [];
                if (Object.prototype.hasOwnProperty.call(u, r))
                  i.push.apply(i, u[r]);
                else {
                  var l = o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(r)
                    ? o("WAWebEmoji").EmojiUtil.splitEmojis(r)
                    : o(
                        "WAWebEmojiKeywordToUnicode",
                      ).emojiKeywordToUnicodeSearch(r);
                  if (l == null || l.length === 0) {
                    ((this.$StickerSearchCollectionImpl$p_3 = n),
                      this.setStopFetching(),
                      t.prototype.delete.call(this));
                    return;
                  }
                  i.push.apply(i, l);
                }
                this.setStartFetching();
                var c = [];
                try {
                  c = yield o(
                    "WAWebSearchFirstPartyStickersAction",
                  ).searchFirstPartyStickers(i);
                } catch (e) {
                  (o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker search request failed: error: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("sticker-search-request-failed"),
                    this.setStopFetching());
                  return;
                }
                (this.$StickerSearchCollectionImpl$p_1.set(n, c),
                  (this.$StickerSearchCollectionImpl$p_2 = !0),
                  (this.$StickerSearchCollectionImpl$p_3 = n),
                  this.add(c),
                  this.setStopFetching());
              },
            );
            function a(e) {
              return r.apply(this, arguments);
            }
            return a;
          })()),
          (a.searchMood = function (t) {
            return this.search(t);
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              (this.$StickerSearchCollectionImpl$p_1 = new Map()),
              (this.$StickerSearchCollectionImpl$p_2 = !1),
              (this.$StickerSearchCollectionImpl$p_4 = !1));
          }),
          r
        );
      })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebStickerModel").StickerModel;
    var d = new c();
    l.StickerSearchCollection = d;
  },
  98,
);
