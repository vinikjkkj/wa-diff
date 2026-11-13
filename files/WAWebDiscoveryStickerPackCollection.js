__d(
  "WAWebDiscoveryStickerPackCollection",
  [
    "$InternalEnum",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebFetchFirstPartyStickerPacksAction",
    "WAWebL10N",
    "WAWebL10NCountryCodes",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerModel",
    "WAWebStickerPackModelMd",
    "WAWebStickerUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["emojis"],
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored([
        "INITIAL",
        "PENDING",
        "SUCCESS",
        "ERROR",
      ]),
      m = "WADiscoveryStickerPacks",
      p = 2,
      _ = 60 * 1e3,
      f = 10080 * 60,
      g = [
        "Failed to fetch",
        "Load failed",
        "NetworkError when attempting to fetch resource.",
        "The network connection was lost.",
      ],
      h = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$DiscoveryStickerPackCollection$p_5 = 0),
            (e.$DiscoveryStickerPackCollection$p_6 = new Map()),
            (e.$DiscoveryStickerPackCollection$p_7 = 0),
            (e.$DiscoveryStickerPackCollection$p_8 = []),
            (e.fetchState = d.INITIAL),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.isLoadedFor = function (t, n) {
            return (
              this.fetchState === d.SUCCESS &&
              this.$DiscoveryStickerPackCollection$p_3 === v(t, n)
            );
          }),
          (i.hasMoreStickerPacks = function () {
            return (
              this.$DiscoveryStickerPackCollection$p_5 <
              this.$DiscoveryStickerPackCollection$p_8.length
            );
          }),
          (i.getMaterializedPackCount = function () {
            return this.$DiscoveryStickerPackCollection$p_5;
          }),
          (i.materializeNextStickerPack = function () {
            var e =
              this.$DiscoveryStickerPackCollection$p_8[
                this.$DiscoveryStickerPackCollection$p_5
              ];
            e != null &&
              (this.$DiscoveryStickerPackCollection$p_5++,
              this.$DiscoveryStickerPackCollection$p_9(e),
              this.trigger("change:materializedPackCount"));
          }),
          (i.materializeAllStickerPacks = function () {
            for (; this.hasMoreStickerPacks(); )
              this.materializeNextStickerPack();
          }),
          (i.materializeStickerSuggestions = function (t) {
            var e = this;
            this.$DiscoveryStickerPackCollection$p_8.forEach(function (n) {
              var r = n.stickers;
              r.forEach(function (n) {
                var r;
                t((r = n.emojis) != null ? r : []) &&
                  e.$DiscoveryStickerPackCollection$p_10(n);
              });
            });
          }),
          (i.getMaterializedStickers = function () {
            return this.$DiscoveryStickerPackCollection$p_6.values();
          }),
          (i.retain = function () {
            (this.$DiscoveryStickerPackCollection$p_7++,
              this.$DiscoveryStickerPackCollection$p_11());
          }),
          (i.release = function () {
            var e = this;
            ((this.$DiscoveryStickerPackCollection$p_7 = Math.max(
              this.$DiscoveryStickerPackCollection$p_7 - 1,
              0,
            )),
              this.$DiscoveryStickerPackCollection$p_7 === 0 &&
                this.$DiscoveryStickerPackCollection$p_2 == null &&
                (this.$DiscoveryStickerPackCollection$p_2 = self.setTimeout(
                  function () {
                    ((e.$DiscoveryStickerPackCollection$p_2 = null),
                      e.$DiscoveryStickerPackCollection$p_7 === 0 &&
                        e.delete());
                  },
                  _,
                )));
          }),
          (i.fetch = function (t, n) {
            var e,
              a = this,
              i = v(t, n);
            if (
              this.$DiscoveryStickerPackCollection$p_4 != null &&
              this.$DiscoveryStickerPackCollection$p_3 === i
            )
              return this.$DiscoveryStickerPackCollection$p_4;
            ((e = this.$DiscoveryStickerPackCollection$p_1) == null ||
              e.abort(),
              (this.fetchState = d.PENDING),
              this.trigger("change:fetchState"));
            var l = new AbortController();
            ((this.$DiscoveryStickerPackCollection$p_1 = l),
              (this.$DiscoveryStickerPackCollection$p_3 = i));
            var u = this.$DiscoveryStickerPackCollection$p_12(l, i, t, n)
              .catch(function (e) {
                if (a.$DiscoveryStickerPackCollection$p_1 !== l) {
                  var t = a.$DiscoveryStickerPackCollection$p_4;
                  return t != null ? t : void 0;
                }
                var n = r("getErrorSafe")(e);
                if (n.name !== o("WAAbortError").ABORT_ERROR) {
                  var i = o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to fetch discovery sticker packs",
                          ])),
                      )
                      .catching(n),
                    u = S(n) ? i.tags("non-sad") : i;
                  (u.sendLogs("discovery-sticker-packs-fetch-failed"),
                    (a.fetchState = a.length > 0 ? d.SUCCESS : d.ERROR),
                    a.trigger("change:fetchState"));
                }
              })
              .finally(function () {
                a.$DiscoveryStickerPackCollection$p_1 === l &&
                  (a.$DiscoveryStickerPackCollection$p_4 = null);
              });
            return ((this.$DiscoveryStickerPackCollection$p_4 = u), u);
          }),
          (i.$DiscoveryStickerPackCollection$p_12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i;
                try {
                  (yield o(
                    "WAWebUserPrefsIndexedDBStorage",
                  ).userPrefsIdb.init(),
                    (i = C(
                      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(m),
                      t,
                    )));
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to read cached discovery sticker packs",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("discovery-sticker-packs-cache-read-failed");
                }
                if (
                  this.$DiscoveryStickerPackCollection$p_13(e, t) &&
                  !(
                    i != null &&
                    (this.$DiscoveryStickerPackCollection$p_14(i.stickerPacks),
                    b(i))
                  )
                ) {
                  var l = yield o(
                    "WAWebFetchFirstPartyStickerPacksAction",
                  ).fetchDiscoveryStickerPacks({
                    packCount: n,
                    signal: e.signal,
                    stickerCount: a,
                  });
                  if (this.$DiscoveryStickerPackCollection$p_13(e, t)) {
                    this.$DiscoveryStickerPackCollection$p_14(l);
                    try {
                      yield o(
                        "WAWebUserPrefsIndexedDBStorage",
                      ).userPrefsIdb.set(m, {
                        context: t,
                        fetchedAt: o("WATimeUtils").unixTime(),
                        stickerPacks: l,
                      });
                    } catch (e) {
                      o("WALogger")
                        .WARN(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to cache discovery sticker packs",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("discovery-sticker-packs-cache-write-failed");
                    }
                  }
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$DiscoveryStickerPackCollection$p_13 = function (t, n) {
            return (
              !t.signal.aborted &&
              this.$DiscoveryStickerPackCollection$p_1 === t &&
              this.$DiscoveryStickerPackCollection$p_3 === n
            );
          }),
          (i.$DiscoveryStickerPackCollection$p_14 = function (t) {
            (this.$DiscoveryStickerPackCollection$p_15(),
              (this.$DiscoveryStickerPackCollection$p_8 = t),
              (this.$DiscoveryStickerPackCollection$p_5 = 0),
              this.materializeNextStickerPack(),
              (this.fetchState = d.SUCCESS),
              this.trigger("change:fetchState"));
          }),
          (i.$DiscoveryStickerPackCollection$p_9 = function (t) {
            var e,
              n,
              r = this,
              a = t.stickerPack,
              i = t.stickers,
              l = new (o("WAWebStickerPackModelMd").StickerPackModel)(a);
            ((e = l.stickers) == null || e.reset(),
              (n = l.stickers) == null ||
                n.add(
                  i.map(function (e) {
                    return r.$DiscoveryStickerPackCollection$p_10(e);
                  }),
                ),
              this.add(l));
          }),
          (i.$DiscoveryStickerPackCollection$p_10 = function (n) {
            var t = this.$DiscoveryStickerPackCollection$p_6.get(n.id);
            if (t != null) return t;
            var r = n.emojis,
              a = babelHelpers.objectWithoutPropertiesLoose(n, e),
              i = new (o("WAWebStickerModel").StickerModel)(a);
            if (r != null) {
              var l;
              ((l = i.mediaObject) == null || l.consolidate({ emojis: r }),
                i.mediaData.set({ emojis: r }));
            }
            return (this.$DiscoveryStickerPackCollection$p_6.set(i.id, i), i);
          }),
          (i.$DiscoveryStickerPackCollection$p_15 = function () {
            (this.$DiscoveryStickerPackCollection$p_6.forEach(function (e) {
              return e.delete();
            }),
              this.$DiscoveryStickerPackCollection$p_6.clear(),
              this.forEach(function (e) {
                var t;
                ((t = e.stickers) == null || t.reset(), e.delete());
              }),
              this.reset());
          }),
          (i.$DiscoveryStickerPackCollection$p_11 = function () {
            this.$DiscoveryStickerPackCollection$p_2 != null &&
              (self.clearTimeout(this.$DiscoveryStickerPackCollection$p_2),
              (this.$DiscoveryStickerPackCollection$p_2 = null));
          }),
          (i.delete = function () {
            var e;
            (this.$DiscoveryStickerPackCollection$p_11(),
              (e = this.$DiscoveryStickerPackCollection$p_1) == null ||
                e.abort(),
              (this.$DiscoveryStickerPackCollection$p_1 = null),
              (this.$DiscoveryStickerPackCollection$p_3 = null),
              (this.$DiscoveryStickerPackCollection$p_4 = null),
              (this.$DiscoveryStickerPackCollection$p_5 = 0),
              (this.$DiscoveryStickerPackCollection$p_8 = []),
              (this.fetchState = d.INITIAL),
              this.$DiscoveryStickerPackCollection$p_15());
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    h.model = o("WAWebStickerPackModelMd").StickerPackModel;
    var y = new h();
    function C(e, t) {
      return e == null || e.context !== t || !Array.isArray(e.stickerPacks)
        ? null
        : e;
    }
    function b(e) {
      var t = e.fetchedAt;
      return t != null && o("WATimeUtils").unixTime() - t < f;
    }
    function v(e, t) {
      var n,
        a =
          o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
            (n = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
              ? void 0
              : n.user,
          ) || "default",
        i = new URLSearchParams(
          babelHelpers.extends(
            {},
            o("WAWebStickerUtils").getStickerFetchParamsFromABConfig(),
            o("WAWebStickerUtils").getPremiumParams(
              o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd
                .length,
            ),
          ),
        ).toString();
      return (
        p +
        ":" +
        r("WAWebL10N").getNormalizedLocale() +
        ":" +
        a +
        ":" +
        e +
        ":" +
        t +
        ":" +
        i
      );
    }
    function S(e) {
      return (
        e.name === "TypeError" &&
        g.some(function (t) {
          return e.message.includes(t);
        })
      );
    }
    ((l.DiscoveryFetchState = d), (l.DiscoveryStickerPackCollectionMd = y));
  },
  98,
);
