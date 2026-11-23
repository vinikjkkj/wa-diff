__d(
  "WAWebStickerSearchCollection",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebInterlaceStickerSearchResults",
    "WAWebSearchFirstPartyStickersAction",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6,
      c = r("JSResourceForInteraction")(
        "WAWebSearchGiphyStickersAction",
      ).__setRef("WAWebStickerSearchCollection"),
      d = {
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
      };
    function m(e, t) {
      var n,
        r = e.toUpperCase(),
        a = d[r],
        i =
          a != null
            ? o("WAWebEmoji").EmojiUtil.splitEmojis(a.join(""))
            : r === "HAHA" && t
              ? o("WAWebEmoji").EmojiUtil.splitEmojis("\u{1F602}\u{1F923}")
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
    function p(e) {
      (o("WAWebStickerGetters").clearStickerGetterCacheFor(e),
        e.externalUrl != null && e.delete());
    }
    var _ = (function (t) {
      function n() {
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
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.remove = function (n, r) {
          var e = t.prototype.remove.call(this, n, r);
          return (
            e.forEach(function (e) {
              e != null &&
                o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
            }),
            e
          );
        }),
        (a.reset = function () {
          var e;
          ((e = this.$StickerSearchCollectionImpl$p_4) == null || e.abort(),
            (this.$StickerSearchCollectionImpl$p_4 = null),
            this.$StickerSearchCollectionImpl$p_2.forEach(p),
            (this.$StickerSearchCollectionImpl$p_2 = []),
            this.forEach(function (e) {
              return o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
            }),
            t.prototype.reset.call(this));
        }),
        (a.isFetchingData = function () {
          return this.$StickerSearchCollectionImpl$p_5;
        }),
        (a.hasFetchedData = function () {
          return this.$StickerSearchCollectionImpl$p_3;
        }),
        (a.setStartFetching = function () {
          ((this.$StickerSearchCollectionImpl$p_5 = !0),
            this.trigger("start_fetching"));
        }),
        (a.setStopFetching = function () {
          ((this.$StickerSearchCollectionImpl$p_5 = !1),
            this.trigger("stop_fetching"));
        }),
        (a.search = async function (a) {
          t.prototype.delete.call(this);
          var n = new AbortController();
          this.$StickerSearchCollectionImpl$p_4 = n;
          var i = n.signal,
            l = a.trim();
          if (l === "") {
            this.setStopFetching();
            return;
          }
          var u = o("WAWebABProps").getABPropConfigValue(
              "web_giphy_sticker_search_enabled",
            ),
            d = (u ? "giphy" : "1p") + ":" + l,
            _ = this.$StickerSearchCollectionImpl$p_1.get(d);
          if (_ != null) {
            (this.add(_),
              (this.$StickerSearchCollectionImpl$p_3 = !0),
              this.setStopFetching());
            return;
          }
          var f = m(l, u);
          if (!u && f.length === 0) {
            this.setStopFetching();
            return;
          }
          this.setStartFetching();
          var g = !1,
            h =
              f.length > 0
                ? o("WAWebSearchFirstPartyStickersAction")
                    .searchFirstPartyStickers(f, { signal: i })
                    .catch(function (t) {
                      return (
                        (g = !0),
                        i.aborted ||
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
                : Promise.resolve([]),
            y = await Promise.all([
              h,
              u
                ? c
                    .load()
                    .then(function (e) {
                      var t = e.searchGiphyStickers;
                      return t(l, i, function () {
                        g = !0;
                      });
                    })
                    .catch(function (e) {
                      return (
                        (g = !0),
                        i.aborted ||
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
                : Promise.resolve([]),
            ]),
            C = y[0],
            b = y[1],
            v = r("WAWebInterlaceStickerSearchResults")(C, b);
          if (i.aborted) {
            v.forEach(p);
            return;
          }
          (this.$StickerSearchCollectionImpl$p_6(d, v, g),
            (this.$StickerSearchCollectionImpl$p_3 = !0),
            this.add(v),
            this.setStopFetching());
        }),
        (a.searchMood = function (t) {
          return this.search(t);
        }),
        (a.delete = function () {
          (this.$StickerSearchCollectionImpl$p_1.forEach(function (e) {
            e.forEach(p);
          }),
            t.prototype.delete.call(this),
            this.$StickerSearchCollectionImpl$p_1.clear(),
            (this.$StickerSearchCollectionImpl$p_3 = !1),
            (this.$StickerSearchCollectionImpl$p_5 = !1));
        }),
        (a.$StickerSearchCollectionImpl$p_6 = function (t, n, r) {
          if (r) this.$StickerSearchCollectionImpl$p_2 = n;
          else {
            if (this.$StickerSearchCollectionImpl$p_1.size >= u) {
              var e = this.$StickerSearchCollectionImpl$p_1.keys().next().value;
              if (e != null) {
                var o;
                ((o = this.$StickerSearchCollectionImpl$p_1.get(e)) == null ||
                  o.forEach(p),
                  this.$StickerSearchCollectionImpl$p_1.delete(e));
              }
            }
            this.$StickerSearchCollectionImpl$p_1.set(t, n);
          }
        }),
        n
      );
    })(o("WAWebBaseCollection").BaseCollection);
    _.model = o("WAWebStickerModel").StickerModel;
    var f = new _();
    l.StickerSearchCollection = f;
  },
  98,
);
