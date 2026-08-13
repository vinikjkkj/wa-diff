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
        r = t.maxDimension,
        a = t.video,
        i = document.createElement("canvas"),
        l = o("WAWebImageGeometry").boundHeightWidth(e, n, r),
        s = l.height,
        u = l.width;
      ((i.width = u), (i.height = s));
      var c = i.getContext("2d");
      c.drawImage(a, 0, 0, u, s);
      var d = c.getImageData(0, 0, u, s),
        m = i.toDataURL("image/jpeg"),
        p = { url: m, width: u, height: s, fullWidth: n, fullHeight: e };
      return { thumb: p, imageData: d };
    };
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUA").UA.isBuggyVideoLoad,
            n = R(e.logContext, t);
          try {
            return yield v(e, t, n);
          } catch (e) {
            throw (n.reportError(), e);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = t.debugHint,
            m = t.file,
            p = t.maxDimensions,
            _ = t.throwOnBlack,
            f = _ === void 0 ? !1 : _,
            C = yield o("WAWebMediaLoad").loadVideo(m),
            b = C.fullHeight,
            v = C.fullWidth,
            S = C.video;
          if (a) {
            var R = 50,
              L = 5e3 / R;
            return o("WAExponentialBackoff").exponentialBackoff(
              {
                minTimeout: R,
                maxTimeout: R,
                retries: L,
                signal: new AbortController().signal,
                factor: 1,
              },
              function (t, a) {
                var c = [],
                  d,
                  m = 0;
                for (d of p) {
                  var _ = y({
                      video: S,
                      fullHeight: b,
                      fullWidth: v,
                      maxDimension: d,
                    }),
                    C = _.imageData,
                    R = _.thumb;
                  if (B(C)) {
                    if (a < L)
                      return (
                        a === 0 &&
                          o("WALogger").LOG(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateVideoThumbsAndDuration] set currentTime=0",
                              ])),
                          ),
                        (S.currentTime = 0),
                        t(r("err")("retry"))
                      );
                    if ((m++, f))
                      throw (
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateVideoThumbsAndDuration] thumb gen failed (",
                                ")",
                              ])),
                            l,
                          )
                          .sendLogs("thumbnail-generation-failed-" + l, {
                            sampling: 0.001,
                          }),
                        i.reportChecked(m, a),
                        new h()
                      );
                  }
                  c.push(R);
                }
                m > 0 &&
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[generateVideoThumbsAndDuration] ",
                          " thumb(s) failed (",
                          ")",
                        ])),
                      m,
                      l,
                    )
                    .sendLogs("thumbnail-generation-failed-" + l, {
                      sampling: 0.001,
                    });
                var E = { duration: ~~S.seekable.end(0), thumbs: c };
                return (
                  o("WAWebMediaLoad").disposeVideo(S),
                  i.reportChecked(m, a),
                  (g || (g = n("Promise"))).resolve(E)
                );
              },
            );
          }
          try {
            var E = 0,
              k = p.map(function (e) {
                var t = y({
                    video: S,
                    fullHeight: b,
                    fullWidth: v,
                    maxDimension: e,
                  }),
                  n = t.imageData,
                  r = t.thumb;
                if (B(n) && (E++, f))
                  throw (
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] thumb gen failed (",
                            ")",
                          ])),
                        l,
                      )
                      .sendLogs("thumbnail-generation-failed-" + l, {
                        sampling: 0.001,
                      }),
                    i.reportChecked(E),
                    new h()
                  );
                return r;
              });
            E > 0 &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[generateVideoThumbsAndDuration] ",
                      " thumb(s) failed (",
                      ")",
                    ])),
                  E,
                  l,
                )
                .sendLogs("thumbnail-generation-failed-" + l, {
                  sampling: 0.001,
                });
            var I = ~~S.seekable.end(0);
            return (i.reportChecked(E), { duration: I, thumbs: k });
          } finally {
            o("WAWebMediaLoad").disposeVideo(S);
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var n = self.performance.now(),
        a = t ? "BUGGY_VIDEO_LOAD" : "NORMAL",
        i = r("once")(o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome);
      return {
        reportChecked: function (r, o) {
          i({
            branch: a,
            checkPerformed: !0,
            context: e,
            generationDurationMs: self.performance.now() - n,
            isBlack: r > 0,
            retryCount: o,
          });
        },
        reportError: function () {
          i({
            branch: a,
            checkPerformed: !1,
            context: e,
            generationDurationMs: self.performance.now() - n,
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
            r = e.outputType,
            a =
              r === void 0
                ? o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL
                : r,
            i = e.sHeight,
            l = e.src,
            s = e.sWidth,
            u = e.sX,
            c = e.sY,
            d =
              l instanceof HTMLCanvasElement
                ? l
                : yield o("WAWebMediaLoad").loadImage(l),
            m = document.createElement("canvas"),
            p = m.getContext("2d");
          n == null || t == null
            ? ((m.height = i), (m.width = s), p.drawImage(d, u, c, s, i))
            : ((m.height = t),
              (m.width = n),
              p.drawImage(d, u, c, s, i, 0, 0, n, t));
          var _ = {};
          A(_, m, a);
          var f = yield o("WAPromiseProps").promiseProps(_);
          return { images: f, width: s, height: i };
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
                    s = i.naturalWidth || i.width,
                    u = i.naturalHeight || i.height,
                    c = Math.max(s, u),
                    d = l.getContext("2d"),
                    m = {},
                    f = o("WAWebImageGeometry").boundHeightWidth(u, s, t),
                    g,
                    y,
                    b = a & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
                  if (n && b && s === f.width && u === f.height)
                    try {
                      var v = o("WAWebMediaJpeg").cleanJPEG(n);
                      ((m.blob = v), (b = !1), (g = s), (y = u));
                    } catch (e) {
                      var S = r("getErrorSafe")(e);
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Could not parse JPEG: ",
                            "",
                          ])),
                        S.message,
                      );
                    }
                  return (
                    (b ||
                      a & ~o("WAWebMediaCacheModel").ImageOutputTypes.BLOB) &&
                      ((l.width = f.width),
                      (l.height = f.height),
                      C || o("WAWebCanvasUtils").fillBackgroundWithGray(l),
                      d.drawImage(i, 0, 0, l.width, l.height),
                      _ && (o("WAWebCanvasUtils").square(l), (m.blob = void 0)),
                      c < h &&
                        (o("WAWebCanvasUtils").scale(l, h), (m.blob = void 0)),
                      (g = l.width),
                      (y = l.height),
                      A(m, l, a, C)),
                    o("WAPromiseProps")
                      .promiseProps(m)
                      .then(function (e) {
                        return { width: g, height: y, images: e };
                      })
                  );
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
              l = i.getContext("2d"),
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
            var r = n.getContext("2d");
            return (
              o("WAWebCanvasUtils").fillBackgroundWithGray(n),
              r.drawImage(t, 0, 0),
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
        !e.dataUrl &&
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
            r = n.getContext("2d");
          return (r.drawImage(t, 0, 0), n);
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
