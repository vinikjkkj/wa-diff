__d(
  "WAWebAssetLoader",
  [
    "invariant",
    "WAAbortError",
    "WABackoffUtils",
    "WADeepEquals",
    "WALogger",
    "WANullthrows",
    "WAPriorityQueue",
    "WAPromiseRaceAbort",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebAssetLoaderDynamicStyle",
    "WAWebAssetToLoad",
    "WAWebEmoji",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiConst",
    "WAWebLoadAssetUrl",
    "WAWebNoop",
    "WAWebWamEnumWebcAssetCacheTypeCode",
    "WAWebWebcAssetLoadWamEvent",
    "cr:5624",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = {
        INITIAL_EMOJI_LOAD: 1,
        INITIAL_ASSET_LOAD: 2,
        THEME_ASSET_LOAD: 2,
        HELP_ANIMATED_DOODLE: 2,
        LAZY_LOAD_EMOJI: 2,
        NOTIFICATION_ICON: 2,
      },
      y = (function () {
        function t(e) {
          var t = this;
          (e === void 0 && (e = 90),
            (this.$1 = new (r("WAWebAssetLoaderDynamicStyle"))("asset-style")),
            (this.$2 = {}),
            (this.$3 = {}),
            (this.$4 = null),
            (this.$6 = r("WAWebAssetLoaderDpiChangeDispatch").currentRes),
            (this.$7 = 0),
            (this.$9 = new (r("WAPriorityQueue"))(function (e) {
              return -e.priority;
            })),
            (this.$10 = !1),
            (this.loadAssetsForCurrentDpi = function () {
              var e = r("WAWebAssetLoaderDpiChangeDispatch").currentRes,
                n = t.$6;
              e !== n &&
                ((t.$6 = e),
                Object.keys(t.$2).forEach(function (e) {
                  t.$13(e, n);
                }),
                t
                  .$11(Object.values(t.$2), h.INITIAL_EMOJI_LOAD, {
                    forceCheck: !1,
                  })
                  .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))));
            }),
            (this.$8 = e));
        }
        var a = t.prototype;
        return (
          (a.initEmojiAsset = function (t) {
            this.$4 = t;
          }),
          (a.loadInitialAssets = function (n) {
            var t = new (o("WAWebWebcAssetLoadWamEvent").WebcAssetLoadWamEvent)(
              {
                webcAssetName: "initial-assets",
                webcAssetFromCache: !1,
                webcAssetCacheType: o("WAWebWamEnumWebcAssetCacheTypeCode")
                  .WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED,
              },
            );
            this.$11(n, h.INITIAL_ASSET_LOAD, { estimateStorage: !0 })
              .then(function () {
                (t.markWebcAssetLoadT(), t.commit());
                var n = t.webcAssetLoadT;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "AssetLoader:loadInitialAssets complete in ",
                      "ms",
                    ])),
                  n,
                );
              })
              .catch(
                o("WAAbortError").catchAbort(function () {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "AssetLoader:loadInitialAssets cancelled by more recent request.",
                      ])),
                  );
                }),
              );
          }),
          (a.loadEmoji = function (t, n) {
            if (this.$4 && this.$5) {
              var e = this.$4(this.$5),
                a = o("WAWebEmoji").EmojiUtil.getBucket(t),
                i = this.$12(),
                l = e.get(i + "b" + a),
                s = this.$6;
              return l
                ? this.loadAsset(l, n, !1).catch(
                    o("WAAbortError").catchAbort(function () {
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "AssetLoader: loadEmoji Cancelled by more recent request: ",
                            "-",
                            "",
                          ])),
                        l.id,
                        s,
                      );
                    }),
                  )
                : Promise.reject(
                    r("err")("The given emoji glyph id was not found"),
                  );
            }
            return Promise.reject(
              r("err")("emojiForPlatform or currentPlatform are not set"),
            );
          }),
          (a.loadEmojis = function () {
            var e = r("WANullthrows")(this.$5);
            this.$4 != null || s(0, 56365);
            var t = Array.from(this.$4(e).values()),
              n = new (o("WAWebWebcAssetLoadWamEvent").WebcAssetLoadWamEvent)({
                webcAssetName: "emojis",
                webcAssetFromCache: !1,
                webcAssetCacheType: o("WAWebWamEnumWebcAssetCacheTypeCode")
                  .WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED,
              });
            this.$11(t, h.INITIAL_EMOJI_LOAD, { estimateStorage: !0 })
              .then(function () {
                (n.markWebcAssetLoadT(), n.commit());
                var e = n.webcAssetLoadT;
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "AssetLoader:loadEmojis complete in ",
                      "ms",
                    ])),
                  e,
                );
              })
              .catch(
                o("WAAbortError").catchAbort(function () {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "AssetLoader:loadEmojis cancelled by more recent request.",
                      ])),
                  );
                }),
              );
          }),
          (a.loadAsset = function (t, n, a) {
            var e = this;
            a === void 0 && (a = !0);
            var i = t.id,
              l = r("WAWebAssetLoaderDpiChangeDispatch").currentRes,
              s = this.$2[i];
            if (s && !o("WADeepEquals").deepEqual(t, s)) {
              var u = ["Attempted to load an asset using an already used ID"];
              return Promise.reject(
                r("err")(
                  u.join(`
`),
                ),
              );
            }
            ((this.$2[i] = t), (this.$3[i] = this.$3[i] || {}));
            var c = l === "high" ? "low" : "high";
            this.$13(i, c);
            var d = this.$3[i][l];
            if (d && !a) return d.promise;
            var m = new (r("WAWebAssetToLoad"))(t, l, n),
              _ = new AbortController(),
              f = _.signal,
              g = this.$14(m, _)
                .then(function (n) {
                  if (f.aborted) throw new (o("WAAbortError").AbortError)();
                  var r = t.selectors;
                  return (
                    r &&
                      e.$1.setRule("" + r.join(", "), {
                        "background-image": "url('" + n + "')",
                      }),
                    n
                  );
                })
                .catch(function (t) {
                  var n = r("getErrorSafe")(t),
                    a = e.$3[i][l],
                    s = h !== a;
                  if (
                    (s || (e.$3[i][l] = null),
                    n.name === o("WAAbortError").ABORT_ERROR &&
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Asset load cancelled by more recent request: ",
                            "-",
                            "",
                          ])),
                        i,
                        l,
                      ),
                      s && a))
                  )
                    return a.promise;
                  throw t;
                });
            m.setConsumerPromise(g);
            var h = {
              promise: g,
              abort: function (n) {
                e.abortUrlPromise(m, n);
              },
            };
            return ((this.$3[i][l] = h), d && d.abort(!1), this.$15(), g);
          }),
          (a.$14 = function (t, n) {
            var e = this,
              o = new Promise(function (r) {
                (t.setConsumerPromiseResolve(r, n), e.$9.push(t));
              });
            return r("WAPromiseRaceAbort")(o, n.signal);
          }),
          (a.$15 = function () {
            var e = this;
            if (!(this.$7 >= this.$8)) {
              for (
                var t = function () {
                    var t = e.$9.pull();
                    if (!t) return { v: void 0 };
                    ((e.$7 += 1),
                      o("WAWebLoadAssetUrl")
                        .loadUrl(t)
                        .then(function () {
                          (e.decrementCurrentlyLoadingCount(), e.$15());
                        })
                        .catch(
                          o("WAAbortError").catchAbort(function () {
                            (e.decrementCurrentlyLoadingCount(), e.$15());
                          }),
                        )
                        .catch(function (n) {
                          if (
                            (e.decrementCurrentlyLoadingCount(),
                            !r("gkx")("26258") &&
                              n instanceof
                                o("WAWebLoadAssetUrl").LoadUrlError &&
                              (n.statusCode === 404 || n.statusCode === 429))
                          ) {
                            o("WALogger").WARN(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "Dev-only: Failed to load asset ",
                                  " with status ",
                                  ". This might cause emojis to not show, this likely happens because emoji hashes changed. Rebuilding should fix the issue",
                                ])),
                              n.url,
                              n.statusCode,
                            );
                            return;
                          }
                          t.retryCount += 1;
                          var a = o("WABackoffUtils").expBackoff(
                            t.retryCount,
                            12e4,
                            1e3,
                            0.1,
                          );
                          (self.setTimeout(function () {
                            (e.$9.push(t), e.$15());
                          }, a),
                            e.$15(),
                            o("WAWebLoadAssetUrl")
                              .getSupportedImageFormatUrl(t)
                              .then(function (e) {
                                var t = e.split("/");
                                o("WALogger").WARN(
                                  f ||
                                    (f =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Asset: ",
                                        " failed. Retrying... ",
                                        "",
                                      ])),
                                  t[t.length - 1],
                                  String(n),
                                );
                              }));
                        }));
                  },
                  n,
                  a = 0;
                a < this.$8 - this.$7;
                a++
              )
                if (((n = t()), n)) return n.v;
            }
          }),
          (a.abortUrlPromise = function (t, n) {
            n === void 0 && (n = !0);
            var e = t.getLoadUrlPromise();
            if (e) {
              t.abortLoadUrlPromise();
              var r = t.getConsumerPromise();
              n && r && t.abortConsumerPromise();
            }
            this.$15();
          }),
          (a.$13 = function (t, n) {
            var e,
              r = (e = this.$3[t]) == null ? void 0 : e[n];
            r && ((this.$3[t][n] = null), r.abort(!0));
          }),
          (a.setPlatform = function (t) {
            var e = this,
              n = this.$5;
            if (t !== n) {
              this.$5 = t;
              var r = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t),
                a =
                  r === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
                    ? o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP
                    : o("WAWebEmojiConst").EMOJI_TYPE.APPLE,
                i =
                  a === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
                    ? "emoji-apple-"
                    : "emoji-wa-";
              if (
                (Object.keys(this.$2).forEach(function (t) {
                  t.startsWith(i) && (e.$13(t, "high"), e.$13(t, "low"));
                }),
                this.$4 != null)
              ) {
                var l = Array.from(this.$4(t).values());
                this.$11(l, h.INITIAL_EMOJI_LOAD, { forceCheck: !1 });
              }
            }
          }),
          (a.isAssetLoaded = function (t) {
            return this.$2[t] != null;
          }),
          (a.$12 = function () {
            var e = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(
              this.$5,
            );
            return e === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
              ? "emoji-apple-"
              : "emoji-wa-";
          }),
          (a.$11 = async function (t, r, o) {
            var e = this,
              a = (o == null ? void 0 : o.forceCheck) !== !1,
              i = (o == null ? void 0 : o.estimateStorage) === !0,
              l = await Promise.all(
                t.map(function (t) {
                  return e.loadAsset(t, r, a);
                }),
              );
            return (
              n("cr:5624") &&
                n("cr:5624")({
                  keep: Object.values(this.$2),
                  estimateStorage: i,
                }),
              l
            );
          }),
          (a.decrementCurrentlyLoadingCount = function () {
            (this.$7 <= 0 &&
              !this.$10 &&
              ((this.$10 = !0),
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ])),
                )
                .sendLogs(
                  "Tried to decrease _loadingCount below zero, would have been negative.",
                )),
              (this.$7 = Math.max(0, this.$7 - 1)));
          }),
          t
        );
      })();
    ((l.LOAD_PRIORITY = h), (l.AssetLoaderImpl = y));
  },
  98,
);
