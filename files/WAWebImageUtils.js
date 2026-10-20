__d(
  "WAWebImageUtils",
  [
    "Promise",
    "WACustomError",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseProps",
    "WAWebAddWebpMetadata",
    "WAWebCanvasUtils",
    "WAWebFileUtils",
    "WAWebImageGeometry",
    "WAWebMediaCacheCollection",
    "WAWebMediaCacheModel",
    "WAWebMediaJpeg",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebNoop",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "WAWebThumbnailOutcomeLogger",
    "WAWebUA",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
    "nullthrows",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = (function (e) {
        function t() {
          var n;
          return (
            (n = e.call(this, t.message) || this),
            (n.name = "BlackVideoThumbnailError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    h.message = "Generated video thumbnail is black";
    var y = function (t) {
      var e = t.fullHeight,
        n = t.fullWidth,
        a = t.maxDimension,
        i = t.video,
        l = document.createElement("canvas"),
        s = o("WAWebImageGeometry").boundHeightWidth(e, n, a),
        u = s.height,
        c = s.width;
      ((l.width = c), (l.height = u));
      var d = r("nullthrows")(l.getContext("2d"));
      d.drawImage(i, 0, 0, c, u);
      var m = d.getImageData(0, 0, c, u),
        p = l.toDataURL("image/jpeg"),
        _ = { url: p, width: c, height: u, fullWidth: n, fullHeight: e };
      return { thumb: _, imageData: m };
    };
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUA").UA.isBuggyVideoLoad,
            n = R({ context: e.logContext, isBuggyVideoLoad: t });
          try {
            return yield v({ isBuggyVideoLoad: t, opts: e, reporter: n });
          } catch (e) {
            throw (n.reportError(), e);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.isBuggyVideoLoad,
            i = t.opts,
            l = t.reporter,
            m = i.debugHint,
            p = i.file,
            _ = i.maxDimensions,
            f = i.throwOnBlack,
            C = f === void 0 ? !1 : f,
            b = yield o("WAWebMediaLoad").loadVideo(p),
            v = b.fullHeight,
            S = b.fullWidth,
            R = b.video;
          if (a) {
            var L = 50,
              E = 5e3 / L;
            return o("WAExponentialBackoff").exponentialBackoff(
              {
                minTimeout: L,
                maxTimeout: L,
                retries: E,
                signal: new AbortController().signal,
                factor: 1,
              },
              function (t, a) {
                var i = [],
                  c,
                  d = 0;
                for (c of _) {
                  var p = y({
                      video: R,
                      fullHeight: v,
                      fullWidth: S,
                      maxDimension: c,
                    }),
                    f = p.imageData,
                    b = p.thumb;
                  if (B(f)) {
                    if (a < E)
                      return (
                        a === 0 &&
                          o("WALogger").LOG(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateVideoThumbsAndDuration] set currentTime=0",
                              ])),
                          ),
                        (R.currentTime = 0),
                        t(r("err")("retry"))
                      );
                    if ((d++, C))
                      throw (
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateVideoThumbsAndDuration] thumb gen failed (",
                                ")",
                              ])),
                            m,
                          )
                          .sendLogs("thumbnail-generation-failed-" + m, {
                            sampling: 0.001,
                          }),
                        l.reportChecked(d, a),
                        new h()
                      );
                  }
                  i.push(b);
                }
                d > 0 &&
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[generateVideoThumbsAndDuration] ",
                          " thumb(s) failed (",
                          ")",
                        ])),
                      d,
                      m,
                    )
                    .sendLogs("thumbnail-generation-failed-" + m, {
                      sampling: 0.001,
                    });
                var L = { duration: ~~R.seekable.end(0), thumbs: i };
                return (
                  o("WAWebMediaLoad").disposeVideo(R),
                  l.reportChecked(d, a),
                  (g || (g = n("Promise"))).resolve(L)
                );
              },
            );
          }
          try {
            var k = 0,
              I = _.map(function (e) {
                var t = y({
                    video: R,
                    fullHeight: v,
                    fullWidth: S,
                    maxDimension: e,
                  }),
                  n = t.imageData,
                  r = t.thumb;
                if (B(n) && (k++, C))
                  throw (
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] thumb gen failed (",
                            ")",
                          ])),
                        m,
                      )
                      .sendLogs("thumbnail-generation-failed-" + m, {
                        sampling: 0.001,
                      }),
                    l.reportChecked(k),
                    new h()
                  );
                return r;
              });
            k > 0 &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[generateVideoThumbsAndDuration] ",
                      " thumb(s) failed (",
                      ")",
                    ])),
                  k,
                  m,
                )
                .sendLogs("thumbnail-generation-failed-" + m, {
                  sampling: 0.001,
                });
            var T = ~~R.seekable.end(0);
            return (l.reportChecked(k), { duration: T, thumbs: I });
          } finally {
            o("WAWebMediaLoad").disposeVideo(R);
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = e.context,
        n = e.isBuggyVideoLoad,
        a = self.performance.now(),
        i = n ? "BUGGY_VIDEO_LOAD" : "NORMAL",
        l = r("once")(o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome);
      return {
        reportChecked: function (n, r) {
          l({
            branch: i,
            checkPerformed: !0,
            context: t,
            generationDurationMs: self.performance.now() - a,
            isBlack: n > 0,
            retryCount: r,
          });
        },
        reportError: function () {
          l({
            branch: i,
            checkPerformed: !1,
            context: t,
            generationDurationMs: self.performance.now() - a,
            outcome: "ERROR",
          });
        },
      };
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.dHeight,
            n = e.dWidth,
            a = e.outputType,
            i =
              a === void 0
                ? o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL
                : a,
            l = e.sHeight,
            s = e.src,
            u = e.sWidth,
            c = e.sX,
            d = e.sY,
            m = e.transparency,
            p = m === void 0 ? !1 : m,
            _ =
              s instanceof HTMLCanvasElement
                ? s
                : yield o("WAWebMediaLoad").loadImage(s),
            f = document.createElement("canvas"),
            g = r("nullthrows")(f.getContext("2d"));
          n == null || t == null
            ? ((f.height = l), (f.width = u), g.drawImage(_, c, d, u, l))
            : ((f.height = t),
              (f.width = n),
              g.drawImage(_, c, d, u, l, 0, 0, n, t));
          var h = {};
          A(h, f, i, p);
          var y = yield o("WAPromiseProps").promiseProps(h);
          return { images: y, width: u, height: l };
        })),
        E.apply(this, arguments)
      );
    }
    var k = new (o(
      "WAWebMediaCacheCollection",
    ).WAWebMediaResizeRotateCacheCollection)();
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l =
              e instanceof File
                ? { file: e, maxDimension: t, outputType: a, opts: i }
                : null;
            if (l != null) {
              var s = k.getModelsArray().find(function (e) {
                  return e.isKeyEqual(l);
                }),
                u = s == null ? void 0 : s.value;
              if (
                s &&
                u &&
                s.isKeyEqual(l) &&
                o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
              )
                return (g || (g = n("Promise"))).resolve(u);
            }
            var c = i != null ? i : {},
              d = c.fitToSquare,
              _ = d === void 0 ? !1 : d,
              f = c.minDimension,
              h = f === void 0 ? 0 : f,
              y = c.transparency,
              C = y === void 0 ? !1 : y,
              b = new ArrayBuffer(0),
              v,
              S,
              R;
            e instanceof HTMLCanvasElement
              ? ((S = (g || (g = n("Promise"))).resolve(e)), (R = g.resolve(b)))
              : ((v = window.URL.createObjectURL(e)),
                (S = o("WAWebMediaLoad").loadImage(v)),
                (R = o("WAWebFileUtils")
                  .blobToArrayBuffer(e)
                  .catch(function (e) {
                    return (
                      o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageUtils::rotateAndResize error: ",
                            "",
                          ])),
                        String(e),
                      ),
                      b
                    );
                  })));
            var L = o("WAPromiseProps")
                .promiseProps({ buffer: R, image: S })
                .then(function (e) {
                  var n = e.buffer,
                    i = e.image,
                    l = document.createElement("canvas"),
                    s =
                      i instanceof HTMLImageElement && i.naturalWidth !== 0
                        ? i.naturalWidth
                        : i.width,
                    u =
                      i instanceof HTMLImageElement && i.naturalHeight !== 0
                        ? i.naturalHeight
                        : i.height,
                    c = Math.max(s, u),
                    d = {},
                    m = o("WAWebImageGeometry").boundHeightWidth(u, s, t),
                    f,
                    g,
                    y = a & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
                  if (n && y && s === m.width && u === m.height)
                    try {
                      var b = o("WAWebMediaJpeg").cleanJPEG(n);
                      ((d.blob = b), (y = !1), (f = s), (g = u));
                    } catch (e) {
                      var v = r("getErrorSafe")(e);
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Could not parse JPEG: ",
                            "",
                          ])),
                        v.message,
                      );
                    }
                  if (
                    y ||
                    a & ~o("WAWebMediaCacheModel").ImageOutputTypes.BLOB
                  ) {
                    ((l.width = m.width),
                      (l.height = m.height),
                      C || o("WAWebCanvasUtils").fillBackgroundWithGray(l));
                    var S = r("nullthrows")(l.getContext("2d"));
                    (S.drawImage(i, 0, 0, l.width, l.height),
                      _ && (o("WAWebCanvasUtils").square(l), (d.blob = void 0)),
                      c < h &&
                        (o("WAWebCanvasUtils").scale(l, h), (d.blob = void 0)),
                      (f = l.width),
                      (g = l.height),
                      A(d, l, a, C));
                  }
                  return o("WAPromiseProps")
                    .promiseProps(d)
                    .then(function (e) {
                      return { width: f, height: g, images: e };
                    });
                })
                .finally(r("WAWebNoop")),
              E = yield L;
            if (
              l != null &&
              o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
            ) {
              var I = new (o("WAWebMediaCacheModel").ResizeRotateMediaCache)({
                id: o(
                  "WAWebMediaCacheModel",
                ).ResizeRotateMediaCacheImpl.getStringKey(l),
                key: l,
                value: E,
              });
              k.add(I);
            }
            return L;
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield e.arrayBuffer(),
              r = o("WAWebAddWebpMetadata").addWebpMetadata(n, t),
              a = new Uint8Array(r),
              i = new Blob([a], { type: "image/webp" });
            return i;
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "addMetadataToSticker: Unable to add metadata to Sticker",
                    ])),
                )
                .sendLogs("unable-to-add-sticker-metadata"),
              e
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = window.URL.createObjectURL(e),
              n = yield o("WAWebMediaLoad").loadImage(t);
            window.URL.revokeObjectURL(t);
            var a = o("WAWebStickerConstants").STICKER_DIMENSION,
              i = o("WAWebCanvasUtils").createCanvas(a, a),
              l = r("nullthrows")(i.getContext("2d")),
              s = o("WAWebImageGeometry").aspectRatioScaled(
                n.width / n.height,
                a,
              ),
              u = s.height,
              c = s.width,
              d = (a - c) / 2,
              m = (a - u) / 2;
            l.drawImage(n, d, m, c, u);
            var p = yield o("WAWebCanvasUtils").canvasToWebp(i),
              _ = yield D(p, {
                isFirstParty: !1,
                isFromStickerMaker: !0,
                emojis: [],
                stickerPackPublisher: "WhatsApp Sticker Maker",
                stickerMakerSourceType:
                  o("WAWebWebpMetadata").StickerMakerSourceType.WebStickerMaker,
              });
            return _;
          } catch (e) {
            var g = r("getErrorSafe")(e);
            throw (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Webp sticker file generation failed: ",
                  ])),
              ),
              g
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebMediaLoad").loadImage(e),
              n = document.createElement("canvas");
            ((n.width = t.naturalWidth), (n.height = t.naturalHeight));
            var a = r("nullthrows")(n.getContext("2d"));
            return (
              o("WAWebCanvasUtils").fillBackgroundWithGray(n),
              a.drawImage(t, 0, 0),
              o("WAWebCanvasUtils").canvasToBlob(n)
            );
          } catch (t) {
            throw new (o("WAWebMediaLoadErrors").MediaDragDropError)(
              "unable to render image",
              e,
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      if (!e) return !1;
      var t = new Image();
      return (
        r("justknobx")._("1449") && (t.crossOrigin = "anonymous"),
        (t.src = e),
        !!t.complete
      );
    }
    function A(e, t, r, a) {
      a === void 0 && (a = !1);
      var i = a ? "image/png" : "image/jpeg";
      (!e.blob &&
        r & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB &&
        (e.blob = o("WAWebCanvasUtils").canvasToBlob(t, i)),
        (e.dataUrl == null || e.dataUrl === "") &&
          r & o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL &&
          (e.dataUrl = (g || (g = n("Promise"))).resolve(t.toDataURL(i))),
        !e.canvas &&
          r & o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS &&
          (e.canvas = (g || (g = n("Promise"))).resolve(t)));
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMediaLoad").loadImage(e),
            n = o("WAWebCanvasUtils").createCanvas(t.width, t.height),
            a = r("nullthrows")(n.getContext("2d"));
          return (a.drawImage(t, 0, 0), n);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      for (var t = e.data, n = e.height, r = e.width, o = 0; o < n; o++) {
        var a = Math.round(o * (r / n)),
          i = o * r + a,
          l = i * 4,
          s = t[l];
        if (s !== 0) return !1;
        var u = t[l + 1];
        if (u !== 0) return !1;
        var c = e.data[l + 2];
        if (c !== 0) return !1;
        var d = e.data[l + 3];
        if (d !== 0 && d !== 255) return !1;
      }
      return !0;
    }
    ((l.DATA_URL = o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL),
      (l.BLOB = o("WAWebMediaCacheModel").ImageOutputTypes.BLOB),
      (l.CANVAS = o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS),
      (l.BlackVideoThumbnailError = h),
      (l.generateVideoThumbsAndDuration = C),
      (l.crop = L),
      (l.rotateAndResize = I),
      (l.toWebpSticker = $),
      (l.urlToFile = N),
      (l.isCached = w),
      (l.base64ImageToCanvas = F));
  },
  98,
);
