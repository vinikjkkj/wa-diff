__d(
  "WAWebAssetLoader",
  [
    "invariant",
    "Promise",
    "WAAbortError",
    "WABackoffUtils",
    "WADeepEquals",
    "WALogger",
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
    "asyncToGeneratorRuntime",
    "cr:5624",
    "err",
    "getErrorSafe",
    "gkx",
    "nullthrows",
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
      h,
      y = {
        INITIAL_EMOJI_LOAD: 1,
        INITIAL_ASSET_LOAD: 2,
        THEME_ASSET_LOAD: 2,
        HELP_ANIMATED_DOODLE: 2,
        LAZY_LOAD_EMOJI: 2,
        NOTIFICATION_ICON: 2,
      },
      C = (function () {
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
                  .$11(Object.values(t.$2), y.INITIAL_EMOJI_LOAD, {
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
            this.$11(n, y.INITIAL_ASSET_LOAD, { estimateStorage: !0 })
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
          (a.loadEmoji = function (t, a) {
            if (this.$4 && this.$5) {
              var e = this.$4(this.$5),
                i = o("WAWebEmoji").EmojiUtil.getBucket(t),
                l = this.$12(),
                s = e.get(l + "b" + i),
                u = this.$6;
              return s
                ? this.loadAsset(s, a, !1).catch(
                    o("WAAbortError").catchAbort(function () {
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "AssetLoader: loadEmoji Cancelled by more recent request: ",
                            "-",
                            "",
                          ])),
                        s.id,
                        u,
                      );
                    }),
                  )
                : (h || (h = n("Promise"))).reject(
                    r("err")("The given emoji glyph id was not found"),
                  );
            }
            return (h || (h = n("Promise"))).reject(
              r("err")("emojiForPlatform or currentPlatform are not set"),
            );
          }),
          (a.loadEmojis = function () {
            var e = r("nullthrows")(this.$5);
            this.$4 != null || s(0, 56365);
            var t = Array.from(this.$4(e).values()),
              n = new (o("WAWebWebcAssetLoadWamEvent").WebcAssetLoadWamEvent)({
                webcAssetName: "emojis",
                webcAssetFromCache: !1,
                webcAssetCacheType: o("WAWebWamEnumWebcAssetCacheTypeCode")
                  .WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED,
              });
            this.$11(t, y.INITIAL_EMOJI_LOAD, { estimateStorage: !0 })
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
          (a.loadAsset = function (t, a, i) {
            var e = this;
            i === void 0 && (i = !0);
            var l = t.id,
              s = r("WAWebAssetLoaderDpiChangeDispatch").currentRes,
              u = this.$2[l];
            if (u && !o("WADeepEquals").deepEqual(t, u)) {
              var c = ["Attempted to load an asset using an already used ID"];
              return (h || (h = n("Promise"))).reject(r("err")(c.join("\n")));
            }
            ((this.$2[l] = t), (this.$3[l] = this.$3[l] || {}));
            var d = s === "high" ? "low" : "high";
            this.$13(l, d);
            var m = this.$3[l][s];
            if (m && !i) return m.promise;
            var _ = new (r("WAWebAssetToLoad"))(t, s, a),
              f = new AbortController(),
              g = f.signal,
              y = this.$14(_, f)
                .then(function (n) {
                  if (g.aborted) throw new (o("WAAbortError").AbortError)();
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
                    a = e.$3[l][s],
                    i = C !== a;
                  if (
                    (i || (e.$3[l][s] = null),
                    n.name === o("WAAbortError").ABORT_ERROR &&
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Asset load cancelled by more recent request: ",
                            "-",
                            "",
                          ])),
                        l,
                        s,
                      ),
                      i && a))
                  )
                    return a.promise;
                  throw t;
                });
            _.setConsumerPromise(y);
            var C = {
              promise: y,
              abort: function (n) {
                e.abortUrlPromise(_, n);
              },
            };
            return ((this.$3[l][s] = C), m && m.abort(!1), this.$15(), y);
          }),
          (a.$14 = function (t, o) {
            var e = this,
              a = new (h || (h = n("Promise")))(function (n) {
                (t.setConsumerPromiseResolve(n, o), e.$9.push(t));
              });
            return r("WAPromiseRaceAbort")(a, o.signal);
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
              var a = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t),
                i =
                  a === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
                    ? o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP
                    : o("WAWebEmojiConst").EMOJI_TYPE.APPLE,
                l =
                  i === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
                    ? "emoji-apple-"
                    : "emoji-wa-";
              if (
                (Object.keys(this.$2).forEach(function (t) {
                  t.startsWith(l) && (e.$13(t, "high"), e.$13(t, "low"));
                }),
                this.$4 != null)
              ) {
                var s = Array.from(this.$4(t).values());
                this.$11(s, y.INITIAL_EMOJI_LOAD, { forceCheck: !1 }).catch(
                  o("WAAbortError").catchAbort(r("WAWebNoop")),
                );
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
          (a.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                var o = this,
                  a = (r == null ? void 0 : r.forceCheck) !== !1,
                  i = (r == null ? void 0 : r.estimateStorage) === !0,
                  l = yield (h || (h = n("Promise"))).all(
                    e.map(function (e) {
                      return o.loadAsset(e, t, a);
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
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
    ((l.LOAD_PRIORITY = y), (l.AssetLoaderImpl = C));
  },
  98,
);
