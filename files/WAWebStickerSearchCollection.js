__d(
  "WAWebStickerSearchCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebSearchFirstPartyStickersAction",
    "WAWebStickerModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        HAPPY: [
          "\u{1F602}",
          "\u{1F923}",
          "\u{1F600}",
          "\u{1F601}",
          "\u{1F606}",
          "\u{1F642}",
          "\u{1F607}",
          "\u263A\uFE0F",
          "\u{1F604}",
          "\u{1F603}",
        ],
        LOVE: [
          "\u{1F60D}",
          "\u{1F618}",
          "\u2764\uFE0F",
          "\u{1F495}",
          "\u{1F970}",
          "\u{1F617}",
          "\u{1F619}",
          "\u{1F63B}",
          "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
          "\u{1F490}",
          "\u{1F48C}",
          "\u{1F49B}",
          "\u{1F49A}",
          "\u{1F499}",
          "\u{1F49C}",
          "\u{1F493}",
          "\u{1F498}",
          "\u{1F48F}",
          "\u{1F491}",
          "\u{1F339}",
          "\u{1F91F}",
          "\u{1F3E9}",
        ],
        GREETINGS: [
          "\u{1F44B}",
          "\u{1F602}",
          "\u{1F923}",
          "\u{1F64F}",
          "\u270B",
          "\u{1F9D5}",
          "\u{1F6B6}\u200D\u2640\uFE0F",
          "\u{1F6B6}",
          "\u{1F460}",
          "\u{1F97E}",
          "\u{1F648}",
          "\u{1F99B}",
          "\u{1F33A}",
          "\u26A1",
          "\u{1F3AF}",
          "\u{1F684}",
          "\u{1F685}",
          "\u{1F492}",
          "\u{1F6D5}",
          "\u{1F6E3}\uFE0F",
          "\u{1F549}\uFE0F",
          "\u{1F50A}",
        ],
        SAD: [
          "\u{1F62D}",
          "\u{1F614}",
          "\u{1F622}",
          "\u{1F61E}",
          "\u{1F61F}",
          "\u{1F615}",
          "\u{1F641}",
          "\u2639\uFE0F",
          "\u{1F616}",
          "\u{1F62B}",
          "\u{1F629}",
          "\u{1F97A}",
          "\u{1F625}",
          "\u{1F613}",
          "\u{1F62A}",
          "\u{1F63F}",
          "\u{1F4A7}",
          "\u{1F494}",
        ],
        ANGRY: [
          "\u{1F620}",
          "\u{1F621}",
          "\u{1F624}",
          "\u{1F47A}",
          "\u{1F4A2}",
          "\u{1F5EF}\uFE0F",
          "\u{1F47F}",
        ],
        CELEBRATE: [
          "\u{1F973}",
          "\u{1F942}",
          "\u{1F388}",
          "\u{1F38A}",
          "\u{1F389}",
        ],
      },
      c = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.isFetchingData = function () {
            return this.$StickerSearchCollectionImpl$p_4;
          }),
          (r.hasFetchedData = function () {
            return this.$StickerSearchCollectionImpl$p_2;
          }),
          (r.setStartFetching = function () {
            ((this.$StickerSearchCollectionImpl$p_4 = !0),
              this.trigger("start_fetching"));
          }),
          (r.setStopFetching = function () {
            ((this.$StickerSearchCollectionImpl$p_4 = !1),
              this.trigger("stop_fetching"));
          }),
          (r.search = async function (r) {
            this.$StickerSearchCollectionImpl$p_3 !== r &&
              this.$StickerSearchCollectionImpl$p_2 &&
              t.prototype.delete.call(this);
            var n = r.trim().toUpperCase();
            if (this.$StickerSearchCollectionImpl$p_1.has(r)) {
              var a = this.$StickerSearchCollectionImpl$p_1.get(r);
              if (a != null) {
                (this.add(a), (this.$StickerSearchCollectionImpl$p_3 = r));
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
            if (Object.prototype.hasOwnProperty.call(u, n))
              i.push.apply(i, u[n]);
            else {
              var l = o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(n)
                ? o("WAWebEmoji").EmojiUtil.splitEmojis(n)
                : o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(
                    n,
                  );
              if (l == null || l.length === 0) {
                ((this.$StickerSearchCollectionImpl$p_3 = r),
                  this.setStopFetching(),
                  t.prototype.delete.call(this));
                return;
              }
              i.push.apply(i, l);
            }
            this.setStartFetching();
            var c = [];
            try {
              c = await o(
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
            (this.$StickerSearchCollectionImpl$p_1.set(r, c),
              (this.$StickerSearchCollectionImpl$p_2 = !0),
              (this.$StickerSearchCollectionImpl$p_3 = r),
              this.add(c),
              this.setStopFetching());
          }),
          (r.searchMood = function (t) {
            return this.search(t);
          }),
          (r.delete = function () {
            (t.prototype.delete.call(this),
              (this.$StickerSearchCollectionImpl$p_1 = new Map()),
              (this.$StickerSearchCollectionImpl$p_2 = !1),
              (this.$StickerSearchCollectionImpl$p_4 = !1));
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebStickerModel").StickerModel;
    var d = new c();
    l.StickerSearchCollection = d;
  },
  98,
);
