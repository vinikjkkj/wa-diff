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
      _ = 10080 * 60,
      f = [
        "Failed to fetch",
        "Load failed",
        "NetworkError when attempting to fetch resource.",
        "The network connection was lost.",
      ],
      g = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
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
              this.$DiscoveryStickerPackCollection$p_2 === b(t, n)
            );
          }),
          (i.fetch = function (t, n) {
            var e,
              a = this,
              i = b(t, n);
            if (
              this.$DiscoveryStickerPackCollection$p_3 != null &&
              this.$DiscoveryStickerPackCollection$p_2 === i
            )
              return this.$DiscoveryStickerPackCollection$p_3;
            ((e = this.$DiscoveryStickerPackCollection$p_1) == null ||
              e.abort(),
              (this.fetchState = d.PENDING),
              this.trigger("change:fetchState"));
            var l = new AbortController();
            ((this.$DiscoveryStickerPackCollection$p_1 = l),
              (this.$DiscoveryStickerPackCollection$p_2 = i));
            var u = this.$DiscoveryStickerPackCollection$p_4(l, i, t, n)
              .catch(function (e) {
                if (a.$DiscoveryStickerPackCollection$p_1 !== l) {
                  var t = a.$DiscoveryStickerPackCollection$p_3;
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
                    u = v(n) ? i.tags("non-sad") : i;
                  (u.sendLogs("discovery-sticker-packs-fetch-failed"),
                    (a.fetchState = a.length > 0 ? d.SUCCESS : d.ERROR),
                    a.trigger("change:fetchState"));
                }
              })
              .finally(function () {
                a.$DiscoveryStickerPackCollection$p_1 === l &&
                  (a.$DiscoveryStickerPackCollection$p_3 = null);
              });
            return ((this.$DiscoveryStickerPackCollection$p_3 = u), u);
          }),
          (i.$DiscoveryStickerPackCollection$p_4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i;
                try {
                  (yield o(
                    "WAWebUserPrefsIndexedDBStorage",
                  ).userPrefsIdb.init(),
                    (i = y(
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
                  this.$DiscoveryStickerPackCollection$p_5(e, t) &&
                  !(
                    i != null &&
                    (this.$DiscoveryStickerPackCollection$p_6(i.stickerPacks),
                    C(i))
                  )
                ) {
                  var l = yield o(
                    "WAWebFetchFirstPartyStickerPacksAction",
                  ).fetchDiscoveryStickerPacks({
                    packCount: n,
                    signal: e.signal,
                    stickerCount: a,
                  });
                  if (this.$DiscoveryStickerPackCollection$p_5(e, t)) {
                    this.$DiscoveryStickerPackCollection$p_6(l);
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
          (i.$DiscoveryStickerPackCollection$p_5 = function (t, n) {
            return (
              !t.signal.aborted &&
              this.$DiscoveryStickerPackCollection$p_1 === t &&
              this.$DiscoveryStickerPackCollection$p_2 === n
            );
          }),
          (i.$DiscoveryStickerPackCollection$p_6 = function (n) {
            var t = this;
            (this.reset(),
              n.forEach(function (n) {
                var r,
                  a,
                  i,
                  l = n.stickerPack,
                  s = n.stickers,
                  u = new (o("WAWebStickerPackModelMd").StickerPackModel)(l),
                  c = new Map();
                ((r = u.stickers) == null || r.reset(),
                  (a = u.stickers) == null ||
                    a.add(
                      s.map(function (t) {
                        var n = t.emojis,
                          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                        return (n != null && !c.has(r.id) && c.set(r.id, n), r);
                      }),
                    ),
                  (i = u.stickers) == null ||
                    i.forEach(function (e) {
                      var t = c.get(e.id);
                      if (t != null) {
                        var n;
                        ((n = e.mediaObject) == null ||
                          n.consolidate({ emojis: t }),
                          e.mediaData.set({ emojis: t }));
                      }
                    }),
                  t.add(u));
              }),
              (this.fetchState = d.SUCCESS),
              this.trigger("change:fetchState"));
          }),
          (i.delete = function () {
            var e;
            ((e = this.$DiscoveryStickerPackCollection$p_1) == null ||
              e.abort(),
              (this.$DiscoveryStickerPackCollection$p_1 = null),
              (this.$DiscoveryStickerPackCollection$p_2 = null),
              (this.$DiscoveryStickerPackCollection$p_3 = null),
              (this.fetchState = d.INITIAL),
              this.reset());
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    g.model = o("WAWebStickerPackModelMd").StickerPackModel;
    var h = new g();
    function y(e, t) {
      return e == null || e.context !== t || !Array.isArray(e.stickerPacks)
        ? null
        : e;
    }
    function C(e) {
      var t = e.fetchedAt;
      return t != null && o("WATimeUtils").unixTime() - t < _;
    }
    function b(e, t) {
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
    function v(e) {
      return (
        e.name === "TypeError" &&
        f.some(function (t) {
          return e.message.includes(t);
        })
      );
    }
    ((l.DiscoveryFetchState = d), (l.DiscoveryStickerPackCollectionMd = h));
  },
  98,
);
