__d(
  "WAWebProductImageModel",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "https://static.whatsapp.net",
      c = 1e3,
      d = 900 * 1e3,
      m = 10,
      p = o("WAPromiseBackoffs").createTimer({
        algo: { type: "fibonacci", first: 0, second: 1 },
        jitter: 0.25,
        max: d,
      });
    function _(e) {
      var t = "_productimage_" + (e.includes(u) ? e : new URL(e).pathname);
      return t;
    }
    var f = (function (t) {
      function n() {
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
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.initialize = function () {
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
        (a._processAndUpdateMediaData = function (n) {
          var t = this,
            a = {},
            i = r("WAWebMediaOpaqueData").createFromData(n, "image/jpeg");
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "_processAndUpdateMediaData: before prepRawMedia",
              ])),
          );
          var l = o("WAWebMedia").prepRawMedia(i, {});
          l.waitForPrep()
            .then(function (e) {
              return (
                (a = babelHelpers.extends({}, a, {
                  mediaBlob: e.mediaBlob,
                  type: e.type,
                  mimetype: e.mimetype,
                  fullWidth: e.fullWidth,
                  fullHeight: e.fullHeight,
                })),
                Promise.all([
                  typeof e.preview == "string"
                    ? r("WAWebMediaOpaqueData").createFromBase64Jpeg(e.preview)
                    : Promise.resolve(null),
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
                i = e[2];
              ((a = babelHelpers.extends({}, a, {
                preview: n,
                mediaBlob: r,
                renderableUrl: r.url(),
                mediaStage: o("WAWebMediaTypes").MediaDataStage.RESOLVED,
                filehash: i,
              })),
                i !== t.mediaData.filehash && t.mediaData.set(a));
            });
        }),
        (a.triggerImageUpdate = async function () {
          var e = this;
          if (!(!this.fetchedFromServer || !this.mediaUrl)) {
            this.mediaData ||
              this.addChild(
                "mediaData",
                new (r("WAWebMediaData"))({
                  mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING,
                }),
              );
            var t = _(this.mediaUrl),
              n = await o("WAWebMediaStore").LruMediaStore.get(t);
            if (n) return this._processAndUpdateMediaData(n);
            var a = {
              delay: function (t) {
                var e = t.taskDuration,
                  n = c * p();
                return Math.max(n - e, 0);
              },
              signal: new AbortController().signal,
              retries: m,
            };
            try {
              var i = await o("WABackoffDelay").backoff(a, async function (t) {
                  var n = await o("WAWebMediaDataUtils").fetchMedia(e.mediaUrl);
                  return !n || !(n.status >= 200 && n.status < 300)
                    ? t(new (o("WAWebMiscErrors").CatalogImageDownloadError)())
                    : n;
                }),
                l = i.result;
              (o("WAWebMediaStore").LruMediaStore.put(t, l),
                this._processAndUpdateMediaData(l));
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
                  mediaStage: o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING,
                }));
            }
          }
        }),
        (a.markOld = function () {
          this.old = !0;
        }),
        (a.evictFromCache = function () {
          if (this.mediaUrl) {
            var e = _(this.mediaUrl);
            o("WAWebMediaStore").LruMediaStore.del(e);
          }
        }),
        n
      );
    })(o("WAWebBaseModel").BaseModel);
    f.Proxy = "productImage";
    var g = o("WAWebBaseModel").defineModel(f);
    ((l.STATIC_WHATSAPP_IMAGE_URI = u), (l.ProductImage = g));
  },
  98,
);
