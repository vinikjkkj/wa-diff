__d(
  "WAWebProductImageModel",
  [
    "Promise",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WAWebBaseModel",
    "WAWebCryptoCalculateFilehash",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaDataUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebMiscErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "https://static.whatsapp.net",
      d = 1e3,
      m = 900 * 1e3,
      p = 10,
      _ = o("WAPromiseBackoffs").createTimer({
        algo: { type: "fibonacci", first: 0, second: 1 },
        jitter: 0.25,
        max: m,
      });
    function f(e) {
      var t = "_productimage_" + (e.includes(c) ? e : new URL(e).pathname);
      return t;
    }
    var g = (function (t) {
      function a() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.id = o("WAWebBaseModel").prop()),
          (e.type = o("WAWebBaseModel").prop()),
          (e.mediaUrl = o("WAWebBaseModel").prop()),
          (e.videoUrl = o("WAWebBaseModel").prop()),
          (e.blobUrl = o("WAWebBaseModel").session()),
          (e.mediaData = o("WAWebBaseModel").session()),
          (e.fetchedFromServer = o("WAWebBaseModel").prop()),
          (e.old = o("WAWebBaseModel").session(!1)),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.initialize = function () {
          var e = this;
          (t.prototype.initialize.call(this),
            this.listenTo(
              this,
              "change:mediaUrl change:fetchedFromServer",
              function () {
                return e.triggerImageUpdate();
              },
            ),
            this.triggerImageUpdate());
        }),
        (i._processAndUpdateMediaData = function (a) {
          var t = this,
            i = {},
            l = r("WAWebMediaOpaqueData").createFromData(a, "image/jpeg");
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "_processAndUpdateMediaData: before prepRawMedia",
              ])),
          );
          var s = o("WAWebMedia").prepRawMedia(l, {});
          s.waitForPrep()
            .then(function (e) {
              return (
                (i = babelHelpers.extends({}, i, {
                  mediaBlob: e.mediaBlob,
                  type: e.type,
                  mimetype: e.mimetype,
                  fullWidth: e.fullWidth,
                  fullHeight: e.fullHeight,
                })),
                (u || (u = n("Promise"))).all([
                  typeof e.preview == "string"
                    ? r("WAWebMediaOpaqueData").createFromBase64Jpeg(e.preview)
                    : (u || (u = n("Promise"))).resolve(null),
                  r("WAWebMediaOpaqueData").createFromData(e.mediaBlob),
                  o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
                    e.mediaBlob,
                  ),
                ])
              );
            })
            .then(function (e) {
              var n = e[0],
                r = e[1],
                a = e[2];
              ((i = babelHelpers.extends({}, i, {
                preview: n,
                mediaBlob: r,
                renderableUrl: r.url(),
                mediaStage: o("WAWebMediaTypes").MediaDataStage.RESOLVED,
                filehash: a,
              })),
                a !== t.mediaData.filehash && t.mediaData.set(i));
            });
        }),
        (i.triggerImageUpdate = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this;
            if (!(!this.fetchedFromServer || !this.mediaUrl)) {
              this.mediaData ||
                this.addChild(
                  "mediaData",
                  new (r("WAWebMediaData"))({
                    mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING,
                  }),
                );
              var t = f(this.mediaUrl),
                a = yield o("WAWebMediaStore").LruMediaStore.get(t);
              if (a) return this._processAndUpdateMediaData(a);
              var i = {
                delay: function (t) {
                  var e = t.taskDuration,
                    n = d * _();
                  return Math.max(n - e, 0);
                },
                signal: new AbortController().signal,
                retries: p,
              };
              try {
                var l = yield o("WABackoffDelay").backoff(
                    i,
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          var n = yield o("WAWebMediaDataUtils").fetchMedia(
                            e.mediaUrl,
                          );
                          return !n || !(n.status >= 200 && n.status < 300)
                            ? t(
                                new (o(
                                  "WAWebMiscErrors",
                                ).CatalogImageDownloadError)(),
                              )
                            : n;
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  ),
                  u = l.result;
                (o("WAWebMediaStore").LruMediaStore.put(t, u),
                  this._processAndUpdateMediaData(u));
              } catch (e) {
                (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to fetch ",
                      "",
                    ])),
                  this.mediaUrl,
                ),
                  this.mediaData.set({
                    mediaStage:
                      o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING,
                  }));
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.markOld = function () {
          this.old = !0;
        }),
        (i.evictFromCache = function () {
          if (this.mediaUrl) {
            var e = f(this.mediaUrl);
            o("WAWebMediaStore").LruMediaStore.del(e);
          }
        }),
        a
      );
    })(o("WAWebBaseModel").BaseModel);
    g.Proxy = "productImage";
    var h = o("WAWebBaseModel").defineModel(g);
    ((l.STATIC_WHATSAPP_IMAGE_URI = c), (l.ProductImage = h));
  },
  98,
);
