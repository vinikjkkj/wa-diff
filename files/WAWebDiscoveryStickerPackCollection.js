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
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored([
        "INITIAL",
        "PENDING",
        "SUCCESS",
        "ERROR",
      ]),
      d = "WADiscoveryStickerPacks",
      m = 10080 * 60,
      p = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.fetchState = c.INITIAL),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.fetch = function (n, a) {
            var t,
              i = this,
              l = h(n, a);
            if (
              this.$DiscoveryStickerPackCollection$p_3 != null &&
              this.$DiscoveryStickerPackCollection$p_2 === l
            )
              return this.$DiscoveryStickerPackCollection$p_3;
            ((t = this.$DiscoveryStickerPackCollection$p_1) == null ||
              t.abort(),
              (this.fetchState = c.PENDING),
              this.trigger("change:fetchState"));
            var s = new AbortController();
            ((this.$DiscoveryStickerPackCollection$p_1 = s),
              (this.$DiscoveryStickerPackCollection$p_2 = l));
            var u = this.$DiscoveryStickerPackCollection$p_4(s, l, n, a)
              .catch(function (t) {
                if (i.$DiscoveryStickerPackCollection$p_1 === s) {
                  var n = r("getErrorSafe")(t);
                  n.name !== o("WAAbortError").ABORT_ERROR &&
                    (o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to fetch discovery sticker packs",
                          ])),
                      )
                      .catching(n)
                      .sendLogs("discovery-sticker-packs-fetch-failed"),
                    (i.fetchState = i.length > 0 ? c.SUCCESS : c.ERROR),
                    i.trigger("change:fetchState"));
                }
              })
              .finally(function () {
                i.$DiscoveryStickerPackCollection$p_1 === s &&
                  (i.$DiscoveryStickerPackCollection$p_3 = null);
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
                    (i = f(
                      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(d),
                      t,
                    )));
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
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
                    g(i))
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
                      ).userPrefsIdb.set(d, {
                        context: t,
                        fetchedAt: o("WATimeUtils").unixTime(),
                        stickerPacks: l,
                      });
                    } catch (e) {
                      o("WALogger")
                        .WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.$DiscoveryStickerPackCollection$p_6 = function (t) {
            var e = this;
            (this.reset(),
              t.forEach(function (t) {
                var n,
                  r,
                  a = t.stickerPack,
                  i = t.stickers,
                  l = new (o("WAWebStickerPackModelMd").StickerPackModel)(a);
                ((n = l.stickers) == null || n.reset(),
                  (r = l.stickers) == null || r.add(i),
                  e.add(l));
              }),
              (this.fetchState = c.SUCCESS),
              this.trigger("change:fetchState"));
          }),
          (i.delete = function () {
            var e;
            ((e = this.$DiscoveryStickerPackCollection$p_1) == null ||
              e.abort(),
              (this.$DiscoveryStickerPackCollection$p_1 = null),
              (this.$DiscoveryStickerPackCollection$p_2 = null),
              (this.$DiscoveryStickerPackCollection$p_3 = null),
              (this.fetchState = c.INITIAL),
              this.reset());
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    p.model = o("WAWebStickerPackModelMd").StickerPackModel;
    var _ = new p();
    function f(e, t) {
      return e == null || e.context !== t || !Array.isArray(e.stickerPacks)
        ? null
        : e;
    }
    function g(e) {
      var t = e.fetchedAt;
      return t != null && o("WATimeUtils").unixTime() - t < m;
    }
    function h(e, t) {
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
    ((l.DiscoveryFetchState = c), (l.DiscoveryStickerPackCollectionMd = _));
  },
  98,
);
