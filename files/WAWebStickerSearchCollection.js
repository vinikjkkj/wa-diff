__d(
  "WAWebStickerSearchCollection",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebInterlaceStickerSearchResults",
    "WAWebSearchFirstPartyStickersAction",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 6,
      d = r("JSResourceForInteraction")(
        "WAWebSearchGiphyStickersAction",
      ).__setRef("WAWebStickerSearchCollection"),
      m = {
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
      };
    function p(e, t) {
      var n,
        r = e.toUpperCase(),
        a = m[r],
        i =
          a != null
            ? o("WAWebEmoji").EmojiUtil.splitEmojis(a.join(""))
            : r === "HAHA" && t
              ? o("WAWebEmoji").EmojiUtil.splitEmojis(
                  "\uD83D\uDE02\uD83E\uDD23",
                )
              : null;
      return (n =
        i != null
          ? i
          : (function (e) {
              {
                var t = e;
                if (o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(t))
                  return o("WAWebEmoji").EmojiUtil.splitEmojis(t);
              }
              {
                var n = e;
                return o(
                  "WAWebEmojiKeywordToUnicode",
                ).emojiKeywordToUnicodeSearch(n);
              }
            })(r)) != null
        ? n
        : [];
    }
    function _(e) {
      (o("WAWebStickerGetters").clearStickerGetterCacheFor(e),
        e.externalUrl != null && e.delete());
    }
    var f = (function (t) {
      function a() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.$StickerSearchCollectionImpl$p_1 = new Map()),
          (e.$StickerSearchCollectionImpl$p_2 = []),
          (e.$StickerSearchCollectionImpl$p_3 = !1),
          (e.$StickerSearchCollectionImpl$p_4 = null),
          (e.$StickerSearchCollectionImpl$p_5 = !0),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.remove = function (n, r) {
          var e = t.prototype.remove.call(this, n, r);
          return (
            e.forEach(function (e) {
              e != null &&
                o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
            }),
            e
          );
        }),
        (i.reset = function () {
          var e;
          ((e = this.$StickerSearchCollectionImpl$p_4) == null || e.abort(),
            (this.$StickerSearchCollectionImpl$p_4 = null),
            this.$StickerSearchCollectionImpl$p_2.forEach(_),
            (this.$StickerSearchCollectionImpl$p_2 = []),
            this.forEach(function (e) {
              return o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
            }),
            t.prototype.reset.call(this));
        }),
        (i.isFetchingData = function () {
          return this.$StickerSearchCollectionImpl$p_5;
        }),
        (i.hasFetchedData = function () {
          return this.$StickerSearchCollectionImpl$p_3;
        }),
        (i.setStartFetching = function () {
          ((this.$StickerSearchCollectionImpl$p_5 = !0),
            this.trigger("start_fetching"));
        }),
        (i.setStopFetching = function () {
          ((this.$StickerSearchCollectionImpl$p_5 = !1),
            this.trigger("stop_fetching"));
        }),
        (i.search = (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            t.prototype.delete.call(this);
            var i = new AbortController();
            this.$StickerSearchCollectionImpl$p_4 = i;
            var l = i.signal,
              c = a.trim();
            if (c === "") {
              this.setStopFetching();
              return;
            }
            var m = o("WAWebABProps").getABPropConfigValue(
                "web_giphy_sticker_search_enabled",
              ),
              f = (m ? "giphy" : "1p") + ":" + c,
              g = this.$StickerSearchCollectionImpl$p_1.get(f);
            if (g != null) {
              (this.add(g),
                (this.$StickerSearchCollectionImpl$p_3 = !0),
                this.setStopFetching());
              return;
            }
            var h = p(c, m);
            if (!m && h.length === 0) {
              this.setStopFetching();
              return;
            }
            this.setStartFetching();
            var y = !1,
              C =
                h.length > 0
                  ? o("WAWebSearchFirstPartyStickersAction")
                      .searchFirstPartyStickers(h, { signal: l })
                      .catch(function (t) {
                        return (
                          (y = !0),
                          l.aborted ||
                            o("WALogger")
                              .WARN(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "First-party sticker search failed",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(t))
                              .sendLogs("sticker-search-request-failed"),
                          []
                        );
                      })
                  : (u || (u = n("Promise"))).resolve([]),
              b = yield (u || (u = n("Promise"))).all([
                C,
                m
                  ? d
                      .load()
                      .then(function (e) {
                        var t = e.searchGiphyStickers;
                        return t(c, l, function () {
                          y = !0;
                        });
                      })
                      .catch(function (e) {
                        return (
                          (y = !0),
                          l.aborted ||
                            o("WALogger")
                              .WARN(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "Giphy sticker search unavailable",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e))
                              .sendLogs("giphy-sticker-search-unavailable"),
                          []
                        );
                      })
                  : (u || (u = n("Promise"))).resolve([]),
              ]),
              v = b[0],
              S = b[1],
              R = r("WAWebInterlaceStickerSearchResults")(v, S);
            if (l.aborted) {
              R.forEach(_);
              return;
            }
            (this.$StickerSearchCollectionImpl$p_6(f, R, y),
              (this.$StickerSearchCollectionImpl$p_3 = !0),
              this.add(R),
              this.setStopFetching());
          });
          function i(e) {
            return a.apply(this, arguments);
          }
          return i;
        })()),
        (i.searchMood = function (t) {
          return this.search(t);
        }),
        (i.delete = function () {
          (this.$StickerSearchCollectionImpl$p_1.forEach(function (e) {
            e.forEach(_);
          }),
            t.prototype.delete.call(this),
            this.$StickerSearchCollectionImpl$p_1.clear(),
            (this.$StickerSearchCollectionImpl$p_3 = !1),
            (this.$StickerSearchCollectionImpl$p_5 = !1));
        }),
        (i.$StickerSearchCollectionImpl$p_6 = function (t, n, r) {
          if (r) this.$StickerSearchCollectionImpl$p_2 = n;
          else {
            if (this.$StickerSearchCollectionImpl$p_1.size >= c) {
              var e = this.$StickerSearchCollectionImpl$p_1.keys().next().value;
              if (e != null) {
                var o;
                ((o = this.$StickerSearchCollectionImpl$p_1.get(e)) == null ||
                  o.forEach(_),
                  this.$StickerSearchCollectionImpl$p_1.delete(e));
              }
            }
            this.$StickerSearchCollectionImpl$p_1.set(t, n);
          }
        }),
        a
      );
    })(o("WAWebBaseCollection").BaseCollection);
    f.model = o("WAWebStickerModel").StickerModel;
    var g = new f();
    l.StickerSearchCollection = g;
  },
  98,
);
