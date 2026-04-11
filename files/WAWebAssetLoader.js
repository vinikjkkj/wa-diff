__d(
  "WAWebAssetLoader",
  [
    "invariant",
    "Promise",
    "WAAbortError",
    "WABackoffUtils",
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
    "asyncToGeneratorRuntime",
    "cr:5624",
    "err",
    "gkx",
    "lodash",
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
            (this._assetStyle = new (r("WAWebAssetLoaderDynamicStyle"))(
              "asset-style",
            )),
            (this._requestedAssets = {}),
            (this._loadingDataMap = {}),
            (this._getEmojiForPlatform = null),
            (this._currentResolution = r(
              "WAWebAssetLoaderDpiChangeDispatch",
            ).currentRes),
            (this._currentlyLoadingCount = 0),
            (this._queue = new (r("WAPriorityQueue"))(function (e) {
              return -e.priority;
            })),
            (this._hasLoggedDecrementBelowZero = !1),
            (this.loadAssetsForCurrentDpi = function () {
              var e = r("WAWebAssetLoaderDpiChangeDispatch").currentRes,
                n = t._currentResolution;
              e !== n &&
                ((t._currentResolution = e),
                Object.keys(t._requestedAssets).forEach(function (e) {
                  t._cancelLoad(e, n);
                }),
                t
                  ._loadAssets(
                    r("lodash").values(t._requestedAssets),
                    y.INITIAL_EMOJI_LOAD,
                    { forceCheck: !1 },
                  )
                  .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))));
            }),
            (this._maxConcurrentRequests = e));
        }
        var a = t.prototype;
        return (
          (a.initEmojiAsset = function (t) {
            this._getEmojiForPlatform = t;
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
            this._loadAssets(n, y.INITIAL_ASSET_LOAD, { estimateStorage: !0 })
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
            if (this._getEmojiForPlatform && this._currentPlatform) {
              var e = this._getEmojiForPlatform(this._currentPlatform),
                i = o("WAWebEmoji").EmojiUtil.getBucket(t),
                l = this._getEmojiPrefix(),
                s = e.get(l + "b" + i),
                u = this._currentResolution;
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
            var e = r("WANullthrows")(this._currentPlatform);
            this._getEmojiForPlatform != null || s(0, 56365);
            var t = Array.from(this._getEmojiForPlatform(e).values()),
              n = new (o("WAWebWebcAssetLoadWamEvent").WebcAssetLoadWamEvent)({
                webcAssetName: "emojis",
                webcAssetFromCache: !1,
                webcAssetCacheType: o("WAWebWamEnumWebcAssetCacheTypeCode")
                  .WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED,
              });
            this._loadAssets(t, y.INITIAL_EMOJI_LOAD, { estimateStorage: !0 })
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
              u = this._requestedAssets[l];
            if (u && !r("lodash").isEqual(t, u)) {
              var c = ["Attempted to load an asset using an already used ID"];
              return (h || (h = n("Promise"))).reject(r("err")(c.join("\n")));
            }
            ((this._requestedAssets[l] = t),
              (this._loadingDataMap[l] = this._loadingDataMap[l] || {}));
            var d = s === "high" ? "low" : "high";
            this._cancelLoad(l, d);
            var m = this._loadingDataMap[l][s];
            if (m && !i) return m.promise;
            var _ = new (r("WAWebAssetToLoad"))(t, s, a),
              f = new AbortController(),
              g = f.signal,
              y = this._buildPromise(_, f)
                .then(function (n) {
                  if (g.aborted) throw new (o("WAAbortError").AbortError)();
                  var r = t.selectors;
                  return (
                    r &&
                      e._assetStyle.setRule("" + r.join(", "), {
                        "background-image": "url('" + n + "')",
                      }),
                    n
                  );
                })
                .catch(function (t) {
                  var n = e._loadingDataMap[l][s],
                    r = C !== n;
                  if (
                    (r || (e._loadingDataMap[l][s] = null),
                    t.name === o("WAAbortError").ABORT_ERROR &&
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
                      r && n))
                  )
                    return n.promise;
                  throw t;
                });
            _.setConsumerPromise(y);
            var C = {
              promise: y,
              abort: function (n) {
                e._abortUrlPromise(_, n);
              },
            };
            return (
              (this._loadingDataMap[l][s] = C),
              m && m.abort(!1),
              this._startLoad(),
              y
            );
          }),
          (a._buildPromise = function (t, o) {
            var e = this,
              a = new (h || (h = n("Promise")))(function (n) {
                (t.setConsumerPromiseResolve(n, o), e._queue.push(t));
              });
            return r("WAPromiseRaceAbort")(a, o.signal);
          }),
          (a._startLoad = function () {
            var e = this;
            if (!(this._currentlyLoadingCount >= this._maxConcurrentRequests)) {
              for (
                var t = function () {
                    var t = e._queue.pull();
                    if (!t) return { v: void 0 };
                    ((e._currentlyLoadingCount += 1),
                      o("WAWebLoadAssetUrl")
                        .loadUrl(t)
                        .then(function () {
                          (e._decrementCurrentlyLoadingCount(), e._startLoad());
                        })
                        .catch(
                          o("WAAbortError").catchAbort(function () {
                            (e._decrementCurrentlyLoadingCount(),
                              e._startLoad());
                          }),
                        )
                        .catch(function (n) {
                          if (
                            (e._decrementCurrentlyLoadingCount(),
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
                            (e._queue.push(t), e._startLoad());
                          }, a),
                            e._startLoad(),
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
                                  n.toString(),
                                );
                              }));
                        }));
                  },
                  n,
                  a = 0;
                a < this._maxConcurrentRequests - this._currentlyLoadingCount;
                a++
              )
                if (((n = t()), n)) return n.v;
            }
          }),
          (a._abortUrlPromise = function (t, n) {
            n === void 0 && (n = !0);
            var e = t.getLoadUrlPromise();
            if (e) {
              t.abortLoadUrlPromise();
              var r = t.getConsumerPromise();
              n && r && t.abortConsumerPromise();
            }
            this._startLoad();
          }),
          (a._cancelLoad = function (t, n) {
            var e,
              r = (e = this._loadingDataMap[t]) == null ? void 0 : e[n];
            r && ((this._loadingDataMap[t][n] = null), r.abort(!0));
          }),
          (a.setPlatform = function (t) {
            var e = this,
              n = this._currentPlatform;
            if (t !== n) {
              this._currentPlatform = t;
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
                (Object.keys(this._requestedAssets).forEach(function (t) {
                  t.startsWith(i) &&
                    (e._cancelLoad(t, "high"), e._cancelLoad(t, "low"));
                }),
                this._getEmojiForPlatform != null)
              ) {
                var l = Array.from(this._getEmojiForPlatform(t).values());
                this._loadAssets(l, y.INITIAL_EMOJI_LOAD, { forceCheck: !1 });
              }
            }
          }),
          (a.isAssetLoaded = function (t) {
            return this._requestedAssets[t] != null;
          }),
          (a._getEmojiPrefix = function () {
            var e = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(
              this._currentPlatform,
            );
            return e === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
              ? "emoji-apple-"
              : "emoji-wa-";
          }),
          (a._loadAssets = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, o) {
                var a = this,
                  i = (o == null ? void 0 : o.forceCheck) !== !1,
                  l = (o == null ? void 0 : o.estimateStorage) === !0,
                  s = yield (h || (h = n("Promise"))).all(
                    e.map(function (e) {
                      return a.loadAsset(e, t, i);
                    }),
                  );
                return (
                  n("cr:5624") &&
                    n("cr:5624")({
                      keep: r("lodash").values(this._requestedAssets),
                      estimateStorage: l,
                    }),
                  s
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a._decrementCurrentlyLoadingCount = function () {
            (this._currentlyLoadingCount <= 0 &&
              !this._hasLoggedDecrementBelowZero &&
              ((this._hasLoggedDecrementBelowZero = !0),
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
              (this._currentlyLoadingCount = Math.max(
                0,
                this._currentlyLoadingCount - 1,
              )));
          }),
          t
        );
      })();
    ((l.LOAD_PRIORITY = y), (l.AssetLoaderImpl = C));
  },
  98,
);
