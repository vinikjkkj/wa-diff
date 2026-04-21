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
    "WAWebMiscErrors",
    "WAWebModernizr",
    "WAWebNoop",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "WAWebUA",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "exif-component",
    "getErrorSafe",
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
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.debugHint,
            i = t.file,
            l = t.maxDimensions,
            m = t.throwOnBlack,
            p = m === void 0 ? !1 : m,
            _ = yield o("WAWebMediaLoad").loadVideo(i),
            f = _.fullHeight,
            C = _.fullWidth,
            b = _.video;
          if (o("WAWebUA").UA.isBuggyVideoLoad) {
            var v = 50,
              S = 5e3 / v;
            return o("WAExponentialBackoff").exponentialBackoff(
              {
                minTimeout: v,
                maxTimeout: v,
                retries: S,
                signal: new AbortController().signal,
                factor: 1,
              },
              function (t, i) {
                var c = [],
                  d,
                  m = 0;
                for (d of l) {
                  var _ = y({
                      video: b,
                      fullHeight: f,
                      fullWidth: C,
                      maxDimension: d,
                    }),
                    v = _.imageData,
                    R = _.thumb;
                  if (A(v)) {
                    if (i < S)
                      return (
                        i === 0 &&
                          o("WALogger").LOG(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateVideoThumbsAndDuration] set currentTime=0",
                              ])),
                          ),
                        (b.currentTime = 0),
                        t(r("err")("retry"))
                      );
                    if ((m++, p))
                      throw (
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateVideoThumbsAndDuration] thumb gen failed (",
                                ")",
                              ])),
                            a,
                          )
                          .sendLogs("thumbnail-generation-failed-" + a, {
                            sampling: 0.001,
                          }),
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
                      a,
                    )
                    .sendLogs("thumbnail-generation-failed-" + a, {
                      sampling: 0.001,
                    });
                var L = { duration: ~~b.seekable.end(0), thumbs: c };
                return (
                  o("WAWebMediaLoad").disposeVideo(b),
                  (g || (g = n("Promise"))).resolve(L)
                );
              },
            );
          }
          try {
            var R = 0,
              L = l.map(function (e) {
                var t = y({
                    video: b,
                    fullHeight: f,
                    fullWidth: C,
                    maxDimension: e,
                  }),
                  n = t.imageData,
                  r = t.thumb;
                if (A(n) && (R++, p))
                  throw (
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] thumb gen failed (",
                            ")",
                          ])),
                        a,
                      )
                      .sendLogs("thumbnail-generation-failed-" + a, {
                        sampling: 0.001,
                      }),
                    new h()
                  );
                return r;
              });
            return (
              R > 0 &&
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[generateVideoThumbsAndDuration] ",
                        " thumb(s) failed (",
                        ")",
                      ])),
                    R,
                    a,
                  )
                  .sendLogs("thumbnail-generation-failed-" + a, {
                    sampling: 0.001,
                  }),
              { duration: ~~b.seekable.end(0), thumbs: L }
            );
          } finally {
            o("WAWebMediaLoad").disposeVideo(b);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i, l) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            s === void 0 &&
              (s = o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL);
            var u =
                e instanceof HTMLCanvasElement
                  ? e
                  : yield o("WAWebMediaLoad").loadImage(e),
              c = document.createElement("canvas"),
              d = c.getContext("2d");
            i == null || l == null
              ? ((c.height = a), (c.width = r), d.drawImage(u, t, n, r, a))
              : ((c.height = l),
                (c.width = i),
                d.drawImage(u, t, n, r, a, 0, 0, i, l));
            var m = {};
            N(m, c, s);
            var p = yield o("WAPromiseProps").promiseProps(m);
            return { images: p, width: r, height: a };
          },
        )),
        S.apply(this, arguments)
      );
    }
    var R = new (o(
      "WAWebMediaCacheCollection",
    ).WAWebMediaResizeRotateCacheCollection)();
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l =
              e instanceof File
                ? { file: e, maxDimension: t, outputType: a, opts: i }
                : null;
            if (l != null) {
              var s = R.getModelsArray().find(function (e) {
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
              L;
            e instanceof HTMLCanvasElement
              ? ((S = (g || (g = n("Promise"))).resolve(e)), (L = g.resolve(b)))
              : ((v = window.URL.createObjectURL(e)),
                (S = o("WAWebMediaLoad").loadImage(v)),
                (L = o("WAWebFileUtils")
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
            var E = o("WAPromiseProps")
                .promiseProps({ buffer: L, image: S })
                .then(function (e) {
                  var n,
                    i = e.buffer,
                    l = e.image,
                    s = {};
                  try {
                    s = r("exif-component")(i);
                  } catch (e) {}
                  var u = 0;
                  if (
                    !(
                      (n = o("WAWebModernizr").getModernizr()) != null &&
                      n.exiforientation
                    )
                  )
                    e: {
                      var c = s.orientation || "UNKNOWN";
                      if (c === "right-top") {
                        u = 1;
                        break e;
                      }
                      if (c === "left-bottom") {
                        u = -1;
                        break e;
                      }
                      if (c === "bottom-right") {
                        u = 2;
                        break e;
                      }
                      break e;
                    }
                  var d = document.createElement("canvas"),
                    m = l.naturalWidth || l.width,
                    f = l.naturalHeight || l.height,
                    g = Math.max(m, f),
                    y = d.getContext("2d"),
                    b = {};
                  if (u)
                    switch (u) {
                      case 1:
                      case -1: {
                        var v = Math.max(m, f),
                          S = v / 2;
                        ((d.width = d.height = v),
                          C || o("WAWebCanvasUtils").fillBackgroundWithGray(d),
                          o("WAWebCanvasUtils").rotate(y, {
                            x: S,
                            y: S,
                            degrees: u * 90,
                          }),
                          u === 1
                            ? y.drawImage(l, 0, v - f)
                            : y.drawImage(l, v - m, 0),
                          o("WAWebCanvasUtils").rotate(y, {
                            x: S,
                            y: S,
                            degrees: u * -90,
                          }),
                          o("WAWebCanvasUtils").resize(d, f, m),
                          _ && o("WAWebCanvasUtils").square(d),
                          g < h && o("WAWebCanvasUtils").scale(d, h));
                        var R = o("WAWebCanvasUtils").contain(d, t);
                        return (
                          N(b, R, a, C),
                          o("WAPromiseProps")
                            .promiseProps(b)
                            .then(function (e) {
                              return {
                                width: R.width,
                                height: R.height,
                                images: e,
                              };
                            })
                        );
                      }
                      case 2: {
                        var L = o("WAWebImageGeometry").boundHeightWidth(
                            f,
                            m,
                            t,
                          ),
                          E = (d.width = L.width),
                          k = (d.height = L.height);
                        return (
                          C || o("WAWebCanvasUtils").fillBackgroundWithGray(d),
                          o("WAWebCanvasUtils").rotate(y, {
                            x: E / 2,
                            y: k / 2,
                            degrees: u * 90,
                          }),
                          y.drawImage(l, 0, 0, E, k),
                          o("WAWebCanvasUtils").rotate(y, {
                            x: E / 2,
                            y: k / 2,
                            degrees: u * -90,
                          }),
                          _ && o("WAWebCanvasUtils").square(d),
                          g < h && o("WAWebCanvasUtils").scale(d, h),
                          N(b, d, a, C),
                          o("WAPromiseProps")
                            .promiseProps(b)
                            .then(function (e) {
                              return {
                                width: d.width,
                                height: d.height,
                                images: e,
                              };
                            })
                        );
                      }
                    }
                  else {
                    var I = o("WAWebImageGeometry").boundHeightWidth(f, m, t),
                      T,
                      D,
                      x = a & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
                    if (i && x && m === I.width && f === I.height)
                      try {
                        var $ = o("WAWebMediaJpeg").cleanJPEG(i);
                        ((b.blob = $), (x = !1), (T = m), (D = f));
                      } catch (e) {
                        var P = r("getErrorSafe")(e);
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "Could not parse JPEG: ",
                              "",
                            ])),
                          P.message,
                        );
                      }
                    return (
                      (x ||
                        a & ~o("WAWebMediaCacheModel").ImageOutputTypes.BLOB) &&
                        ((d.width = I.width),
                        (d.height = I.height),
                        C || o("WAWebCanvasUtils").fillBackgroundWithGray(d),
                        y.drawImage(l, 0, 0, d.width, d.height),
                        _ &&
                          (o("WAWebCanvasUtils").square(d), (b.blob = void 0)),
                        g < h &&
                          (o("WAWebCanvasUtils").scale(d, h),
                          (b.blob = void 0)),
                        (T = d.width),
                        (D = d.height),
                        N(b, d, a, C)),
                      o("WAPromiseProps")
                        .promiseProps(b)
                        .then(function (e) {
                          return { width: T, height: D, images: e };
                        })
                    );
                  }
                })
                .finally(r("WAWebNoop")),
              k = yield E;
            if (
              l != null &&
              o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
            ) {
              var I = new (o("WAWebMediaCacheModel").ResizeRotateMediaCache)({
                id: o(
                  "WAWebMediaCacheModel",
                ).ResizeRotateMediaCacheImpl.getStringKey(l),
                key: l,
                value: k,
              });
              R.add(I);
            }
            return E;
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              _ = yield k(p, {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            throw new (o("WAWebMiscErrors").MediaDragDropError)(
              "unable to render image",
              e,
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      if (!e) return !1;
      var t = new Image();
      return ((t.src = e), !!t.complete);
    }
    function N(e, t, r, a) {
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
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMediaLoad").loadImage(e),
            n = o("WAWebCanvasUtils").createCanvas(t.width, t.height),
            r = n.getContext("2d");
          return (r.drawImage(t, 0, 0), n);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
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
      (l.crop = v),
      (l.rotateAndResize = L),
      (l.toWebpSticker = T),
      (l.urlToFile = x),
      (l.isCached = P),
      (l.base64ImageToCanvas = M));
  },
  98,
);
