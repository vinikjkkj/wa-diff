__d(
  "WAWebImageUtils",
  [
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
    "err",
    "exif-component",
    "getErrorSafe",
    "justknobx",
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
      g = (function (e) {
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
    g.message = "Generated video thumbnail is black";
    var h = function (t) {
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
    async function y(t) {
      var n = t.debugHint,
        a = t.file,
        i = t.maxDimensions,
        l = t.throwOnBlack,
        m = l === void 0 ? !1 : l,
        p = await o("WAWebMediaLoad").loadVideo(a),
        _ = p.fullHeight,
        f = p.fullWidth,
        y = p.video;
      if (o("WAWebUA").UA.isBuggyVideoLoad) {
        var C = 50,
          b = 5e3 / C;
        return o("WAExponentialBackoff").exponentialBackoff(
          {
            minTimeout: C,
            maxTimeout: C,
            retries: b,
            signal: new AbortController().signal,
            factor: 1,
          },
          function (t, a) {
            var l = [],
              c,
              d = 0;
            for (c of i) {
              var p = h({
                  video: y,
                  fullHeight: _,
                  fullWidth: f,
                  maxDimension: c,
                }),
                C = p.imageData,
                v = p.thumb;
              if (T(C)) {
                if (a < b)
                  return (
                    a === 0 &&
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] set currentTime=0",
                          ])),
                      ),
                    (y.currentTime = 0),
                    t(r("err")("retry"))
                  );
                if ((d++, m))
                  throw (
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] thumb gen failed (",
                            ")",
                          ])),
                        n,
                      )
                      .sendLogs("thumbnail-generation-failed-" + n, {
                        sampling: 0.001,
                      }),
                    new g()
                  );
              }
              l.push(v);
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
                  n,
                )
                .sendLogs("thumbnail-generation-failed-" + n, {
                  sampling: 0.001,
                });
            var S = { duration: ~~y.seekable.end(0), thumbs: l };
            return (o("WAWebMediaLoad").disposeVideo(y), Promise.resolve(S));
          },
        );
      }
      try {
        var v = 0,
          S = i.map(function (e) {
            var t = h({
                video: y,
                fullHeight: _,
                fullWidth: f,
                maxDimension: e,
              }),
              r = t.imageData,
              a = t.thumb;
            if (T(r) && (v++, m))
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[generateVideoThumbsAndDuration] thumb gen failed (",
                        ")",
                      ])),
                    n,
                  )
                  .sendLogs("thumbnail-generation-failed-" + n, {
                    sampling: 0.001,
                  }),
                new g()
              );
            return a;
          });
        return (
          v > 0 &&
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateVideoThumbsAndDuration] ",
                    " thumb(s) failed (",
                    ")",
                  ])),
                v,
                n,
              )
              .sendLogs("thumbnail-generation-failed-" + n, {
                sampling: 0.001,
              }),
          { duration: ~~y.seekable.end(0), thumbs: S }
        );
      } finally {
        o("WAWebMediaLoad").disposeVideo(y);
      }
    }
    async function C(e, t, n, r, a, i, l, s) {
      s === void 0 && (s = o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL);
      var u =
          e instanceof HTMLCanvasElement
            ? e
            : await o("WAWebMediaLoad").loadImage(e),
        c = document.createElement("canvas"),
        d = c.getContext("2d");
      i == null || l == null
        ? ((c.height = a), (c.width = r), d.drawImage(u, t, n, r, a))
        : ((c.height = l),
          (c.width = i),
          d.drawImage(u, t, n, r, a, 0, 0, i, l));
      var m = {};
      k(m, c, s);
      var p = await o("WAPromiseProps").promiseProps(m);
      return { images: p, width: r, height: a };
    }
    var b = new (o(
      "WAWebMediaCacheCollection",
    ).WAWebMediaResizeRotateCacheCollection)();
    async function v(e, t, n, a) {
      var i =
        e instanceof File
          ? { file: e, maxDimension: t, outputType: n, opts: a }
          : null;
      if (i != null) {
        var l = b.getModelsArray().find(function (e) {
            return e.isKeyEqual(i);
          }),
          s = l == null ? void 0 : l.value;
        if (
          l &&
          s &&
          l.isKeyEqual(i) &&
          o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
        )
          return Promise.resolve(s);
      }
      var u = a != null ? a : {},
        c = u.fitToSquare,
        d = c === void 0 ? !1 : c,
        _ = u.minDimension,
        f = _ === void 0 ? 0 : _,
        g = u.transparency,
        h = g === void 0 ? !1 : g,
        y = new ArrayBuffer(0),
        C,
        v,
        S;
      e instanceof HTMLCanvasElement
        ? ((v = Promise.resolve(e)), (S = Promise.resolve(y)))
        : ((C = window.URL.createObjectURL(e)),
          (v = o("WAWebMediaLoad").loadImage(C)),
          (S = o("WAWebFileUtils")
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
                y
              );
            })));
      var R = o("WAPromiseProps")
          .promiseProps({ buffer: S, image: v })
          .then(function (e) {
            var a,
              i = e.buffer,
              l = e.image,
              s = {};
            try {
              s = r("exif-component")(i);
            } catch (e) {}
            var u = 0;
            if (
              !(
                (a = o("WAWebModernizr").getModernizr()) != null &&
                a.exiforientation
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
            var m = document.createElement("canvas"),
              _ = l.naturalWidth || l.width,
              g = l.naturalHeight || l.height,
              y = Math.max(_, g),
              C = m.getContext("2d"),
              b = {};
            if (u)
              switch (u) {
                case 1:
                case -1: {
                  var v = Math.max(_, g),
                    S = v / 2;
                  ((m.width = m.height = v),
                    h || o("WAWebCanvasUtils").fillBackgroundWithGray(m),
                    o("WAWebCanvasUtils").rotate(C, {
                      x: S,
                      y: S,
                      degrees: u * 90,
                    }),
                    u === 1
                      ? C.drawImage(l, 0, v - g)
                      : C.drawImage(l, v - _, 0),
                    o("WAWebCanvasUtils").rotate(C, {
                      x: S,
                      y: S,
                      degrees: u * -90,
                    }),
                    o("WAWebCanvasUtils").resize(m, g, _),
                    d && o("WAWebCanvasUtils").square(m),
                    y < f && o("WAWebCanvasUtils").scale(m, f));
                  var R = o("WAWebCanvasUtils").contain(m, t);
                  return (
                    k(b, R, n, h),
                    o("WAPromiseProps")
                      .promiseProps(b)
                      .then(function (e) {
                        return { width: R.width, height: R.height, images: e };
                      })
                  );
                }
                case 2: {
                  var L = o("WAWebImageGeometry").boundHeightWidth(g, _, t),
                    E = (m.width = L.width),
                    I = (m.height = L.height);
                  return (
                    h || o("WAWebCanvasUtils").fillBackgroundWithGray(m),
                    o("WAWebCanvasUtils").rotate(C, {
                      x: E / 2,
                      y: I / 2,
                      degrees: u * 90,
                    }),
                    C.drawImage(l, 0, 0, E, I),
                    o("WAWebCanvasUtils").rotate(C, {
                      x: E / 2,
                      y: I / 2,
                      degrees: u * -90,
                    }),
                    d && o("WAWebCanvasUtils").square(m),
                    y < f && o("WAWebCanvasUtils").scale(m, f),
                    k(b, m, n, h),
                    o("WAPromiseProps")
                      .promiseProps(b)
                      .then(function (e) {
                        return { width: m.width, height: m.height, images: e };
                      })
                  );
                }
              }
            else {
              var T = o("WAWebImageGeometry").boundHeightWidth(g, _, t),
                D,
                x,
                $ = n & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
              if (i && $ && _ === T.width && g === T.height)
                try {
                  var P = o("WAWebMediaJpeg").cleanJPEG(i);
                  ((b.blob = P), ($ = !1), (D = _), (x = g));
                } catch (e) {
                  var N = r("getErrorSafe")(e);
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Could not parse JPEG: ",
                        "",
                      ])),
                    N.message,
                  );
                }
              return (
                ($ || n & ~o("WAWebMediaCacheModel").ImageOutputTypes.BLOB) &&
                  ((m.width = T.width),
                  (m.height = T.height),
                  h || o("WAWebCanvasUtils").fillBackgroundWithGray(m),
                  C.drawImage(l, 0, 0, m.width, m.height),
                  d && (o("WAWebCanvasUtils").square(m), (b.blob = void 0)),
                  y < f &&
                    (o("WAWebCanvasUtils").scale(m, f), (b.blob = void 0)),
                  (D = m.width),
                  (x = m.height),
                  k(b, m, n, h)),
                o("WAPromiseProps")
                  .promiseProps(b)
                  .then(function (e) {
                    return { width: D, height: x, images: e };
                  })
              );
            }
          })
          .finally(r("WAWebNoop")),
        L = await R;
      if (
        i != null &&
        o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
      ) {
        var E = new (o("WAWebMediaCacheModel").ResizeRotateMediaCache)({
          id: o("WAWebMediaCacheModel").ResizeRotateMediaCacheImpl.getStringKey(
            i,
          ),
          key: i,
          value: L,
        });
        b.add(E);
      }
      return R;
    }
    async function S(e, t) {
      try {
        var n = await e.arrayBuffer(),
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
    }
    async function R(e) {
      try {
        var t = window.URL.createObjectURL(e),
          n = await o("WAWebMediaLoad").loadImage(t);
        window.URL.revokeObjectURL(t);
        var a = o("WAWebStickerConstants").STICKER_DIMENSION,
          i = o("WAWebCanvasUtils").createCanvas(a, a),
          l = i.getContext("2d"),
          s = o("WAWebImageGeometry").aspectRatioScaled(n.width / n.height, a),
          u = s.height,
          c = s.width,
          d = (a - c) / 2,
          m = (a - u) / 2;
        l.drawImage(n, d, m, c, u);
        var p = await o("WAWebCanvasUtils").canvasToWebp(i),
          _ = await S(p, {
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
    }
    async function L(e) {
      try {
        var t = await o("WAWebMediaLoad").loadImage(e),
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
    }
    function E(e) {
      if (!e) return !1;
      var t = new Image();
      return (
        r("justknobx")._("1449") && (t.crossOrigin = "anonymous"),
        (t.src = e),
        !!t.complete
      );
    }
    function k(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = r ? "image/png" : "image/jpeg";
      (!e.blob &&
        n & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB &&
        (e.blob = o("WAWebCanvasUtils").canvasToBlob(t, a)),
        !e.dataUrl &&
          n & o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL &&
          (e.dataUrl = Promise.resolve(t.toDataURL(a))),
        !e.canvas &&
          n & o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS &&
          (e.canvas = Promise.resolve(t)));
    }
    async function I(e) {
      var t = await o("WAWebMediaLoad").loadImage(e),
        n = o("WAWebCanvasUtils").createCanvas(t.width, t.height),
        r = n.getContext("2d");
      return (r.drawImage(t, 0, 0), n);
    }
    function T(e) {
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
      (l.BlackVideoThumbnailError = g),
      (l.generateVideoThumbsAndDuration = y),
      (l.crop = C),
      (l.rotateAndResize = v),
      (l.toWebpSticker = R),
      (l.urlToFile = L),
      (l.isCached = E),
      (l.base64ImageToCanvas = I));
  },
  98,
);
