__d(
  "WAWebMediaDataUtils",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAPromiseCallSync",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebDecodeWebpToRgba",
    "WAWebDocumentUploadEnrichment",
    "WAWebFileTypeFromBytes",
    "WAWebFileUtils",
    "WAWebImageUtils",
    "WAWebMediaCleanFileName",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMediaPreProcessQpl",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMmsMediaTypes",
    "WAWebNetworkGetResponseIfOnline",
    "WAWebURLUtils",
    "WAWebVcardParsingUtils",
    "WAWebVideoTranscoderWamEvent",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumVideoTranscoderAlgorithmType",
    "WAWebWamEnumVideoTranscoderResultType",
    "WAWebWamEnumVideoTranscoderSourceFormatType",
    "WAWebWamEnumVideoTranscoderTargetFormatType",
    "WAWebWaveformUtils",
    "WAWebWebpParseWebp",
    "WAWebXHR",
    "asyncToGeneratorRuntime",
    "cr:10296",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebMediaAnalyzer").__setRef(
        "WAWebMediaDataUtils",
      ),
      f = 2e4;
    function g(e) {
      return F(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            t(e);
            var o = new Image();
            return (
              yield new (p || (p = n("Promise")))(function (t, n) {
                ((o.onload = t),
                  (o.onabort = function () {
                    n(r("err")("getImageWidthHeight onabort"));
                  }),
                  (o.onerror = function () {
                    n(r("err")("getImageWidthHeight onerror"));
                  }),
                  (o.src = e.url()));
              }),
              { width: o.naturalWidth, height: o.naturalHeight }
            );
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    function h(e) {
      return new (p || (p = n("Promise")))(function (t, n) {
        var o = new Image(),
          a = window.URL.createObjectURL(e);
        ((o.onload = function () {
          var e = { width: o.naturalWidth, height: o.naturalHeight };
          (window.URL.revokeObjectURL(a), t(e));
        }),
          (o.onabort = function () {
            (window.URL.revokeObjectURL(a),
              n(r("err")("getImageWidthHeight onabort")));
          }),
          (o.onerror = function () {
            (window.URL.revokeObjectURL(a),
              n(r("err")("getImageWidthHeight onerror")));
          }),
          (o.src = a));
      });
    }
    function y(t) {
      return o("WAWebFileUtils")
        .blobToArrayBuffer(t)
        .catch(function (t) {
          throw (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MediaUtils error: ",
                  "",
                ])),
              t,
            ),
            t
          );
        });
    }
    function C(e) {
      return F(function (t) {
        t(e);
        var n = e.getBlob();
        if (n) return y(n);
        var a = r("nullthrows")(e.getBase64(), "b64 should be defined");
        return o("WABase64").decodeB64(a);
      });
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y(e);
          return r("WAWebDecodeWebpToRgba")(t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y(e);
          return o("WAWebWebpParseWebp").parseWebp(t);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return F(
        (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            n(e);
            var a = yield o("WAWebMediaLoad")
              .transcode(e.forceToBlob(), t)
              .then(function (e) {
                return r("WAWebMediaOpaqueData").createFromData(e, e.type);
              });
            return (n(a), a.autorelease(), a);
          });
          return function (e) {
            return a.apply(this, arguments);
          };
        })(),
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.maxDimension,
            r = t.minDimension,
            a = t.transparency,
            i = yield o("WAWebImageUtils").rotateAndResize(
              e,
              n,
              o("WAWebImageUtils").BLOB,
              { transparency: a, minDimension: r },
            ),
            l = i.height,
            s = i.images,
            u = i.width;
          if (s == null || s.blob == null)
            throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
          return { width: u, height: l, size: s.blob.size };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = t.maxDimension,
            i = t.minDimension,
            l = t.transparency,
            s = e.forceToBlob(),
            u = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(
              "image",
              s,
            );
          try {
            var c,
              d = yield o("WAWebImageUtils").rotateAndResize(
                s,
                a,
                o("WAWebImageUtils").BLOB | o("WAWebImageUtils").CANVAS,
                { transparency: l, minDimension: i },
              ),
              m = d.height,
              p = d.images,
              _ = d.width;
            if (p == null || p.canvas == null)
              throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
            var g = yield o("WAWebImageUtils").rotateAndResize(
                p.canvas,
                o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE,
                o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS,
              ),
              h = g.images;
            if (h == null || h.canvas == null)
              throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
            var y = o("WAWebCanvasUtils").getResizedDataUrl(
                h.canvas,
                "image/jpeg",
                f,
              ),
              C =
                y != null && y !== ""
                  ? r("WAWebURLUtils").parseDataURL(y).data
                  : null,
              b =
                n ===
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY ||
                n ===
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_CAPTURE ||
                n ===
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_MEDIA_STRIP ||
                n ===
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_GIF,
              v = null,
              S = null;
            if (b && p.canvas != null) {
              var R = yield o("WAWebImageUtils").rotateAndResize(
                  p.canvas,
                  o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE,
                  o("WAWebImageUtils").DATA_URL,
                ),
                L = R.images,
                E = L == null ? void 0 : L.dataUrl;
              E != null &&
                E !== "" &&
                ((v = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                  r("WAWebURLUtils").parseDataURL(E).data,
                )),
                (S = {
                  width: o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE,
                  height: Math.round(
                    (o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE * m) /
                      _,
                  ),
                }));
            }
            return (
              u.endSuccess(),
              {
                type: o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE,
                mediaBlob: p.blob,
                mimetype: (c = p.blob) == null ? void 0 : c.type,
                fullWidth: _,
                fullHeight: m,
                preview: C,
                fullPreviewData: v,
                fullPreviewSize: S,
              }
            );
          } catch (e) {
            throw (
              u.endFailWithError(
                e instanceof Error ? e.name : "processRawImageError",
                e instanceof Error ? e.message : String(e),
              ),
              e
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forceToBlob(),
            n = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(
              "sticker",
              t,
            );
          try {
            var a = yield o("WAWebImageUtils").rotateAndResize(
                t,
                o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
                o("WAWebImageUtils").BLOB,
                { transparency: !0 },
              ),
              i = a.height,
              l = a.images,
              s = a.width;
            if (l == null || l.blob == null)
              throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
            var u = yield o("WAWebImageUtils").toWebpSticker(l.blob),
              c = yield r("WAWebMediaOpaqueData").createFromData(u, u.type);
            return (
              n.endSuccess(),
              {
                type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                mediaBlob: c,
                mimetype: u.type,
                fullWidth: s,
                fullHeight: i,
              }
            );
          } catch (e) {
            throw (
              n.endFailWithError(
                e instanceof Error ? e.name : "processRawStickerError",
                e instanceof Error ? e.message : String(e),
              ),
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
          var t = e._mimetype,
            a = e.accessibilityLabel,
            i = e.asGif,
            l = e.asPtt,
            m = e.gifAttribution,
            p = e.opaqueData,
            f = e.precomputedFields,
            g = e.resetMediaPreview,
            h = e.setMediaPreview,
            y = e.setMimeType,
            C = e.setProgressPercentage,
            b = !1;
          try {
            var v,
              S = p.forceToBlob(),
              R = S instanceof File ? S.name : "",
              L = new (o(
                "WAWebVideoTranscoderWamEvent",
              ).VideoTranscoderWamEvent)({
                sourceHeight: f == null ? void 0 : f.fullHeight,
                sourceWidth: f == null ? void 0 : f.fullWidth,
                sourceDuration: f == null ? void 0 : f.duration,
                sourceFileSize: p.size(),
                sourceFormat:
                  i === !0
                    ? o("WAWebWamEnumVideoTranscoderSourceFormatType")
                        .VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.GIF
                    : o("WAWebWamEnumVideoTranscoderSourceFormatType")
                        .VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.VIDEO,
                sourceMimeType: S.type,
                sourceFileExtension: R.split(".").pop(),
              }),
              E =
                (v =
                  n("cr:10296") == null
                    ? void 0
                    : n("cr:10296").isWindowsHybridTranscoderEnabled()) != null
                  ? v
                  : !1,
              k = S.type.startsWith("video/"),
              I = S.type === "video/mp4",
              T = E && k && !I;
            L.startTranscoderT();
            var D = null;
            if (!T) {
              var x = yield _.load(),
                $ = x.checkAndRepairAudio,
                P = x.transcodeToMp4AndMp4RepairMux,
                N = !1,
                M = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(
                  k ? "video" : "audio",
                  S,
                ),
                w;
              if (
                (k ? (w = yield P(S, !!i, M)) : (w = yield $(S, !!i, M)),
                w.success)
              ) {
                var A = w.value;
                ((D = A[0]),
                  (N = A[1]),
                  M.endSuccess(),
                  (L.transcoderAlgorithm = N
                    ? o("WAWebWamEnumVideoTranscoderAlgorithmType")
                        .VIDEO_TRANSCODER_ALGORITHM_TYPE
                        .WASM_MP4_CHECK_AND_REPAIR
                    : o("WAWebWamEnumVideoTranscoderAlgorithmType")
                        .VIDEO_TRANSCODER_ALGORITHM_TYPE.WEB_MEDIA_WORKER));
              } else M.endFailWithError(w.error.error, w.error.errorDetail);
            }
            if (T || (!D && E)) {
              L.transcoderAlgorithm = o(
                "WAWebWamEnumVideoTranscoderAlgorithmType",
              ).VIDEO_TRANSCODER_ALGORITHM_TYPE.HYBRID_BRIDGE;
              var F = yield n("cr:10296") == null
                ? void 0
                : n("cr:10296").transcodeVideo({
                    file: S,
                    onProgress: C,
                    resetMediaPreview: g,
                    setMediaPreview: h,
                    setMimeType: y,
                  });
              if (F != null) {
                var O = F[0],
                  B = F[1];
                ((S = O), (b = B), (D = { type: S.type, file: S, isGif: !1 }));
              }
            }
            if ((L.markTranscoderT(), !D))
              throw (
                L.set({
                  transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                    .VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
                }),
                L.commit(),
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "processRawAudioVideo bad video file ",
                      "",
                    ])),
                  S.type,
                ),
                new (o(
                  "WAWebMediaFileErrors",
                ).InvalidMediaCheckRepairFailedType)()
              );
            var W = D.type,
              q = D.file;
            L.set({ targetFileSize: q.size });
            var U = i === !0 || D.isGif === !0;
            e: {
              var V = o("WAWebFileUtils").typeFromMimetype(W);
              if (V === o("WAWebFileUtils").FILETYPE.VIDEO) {
                if (l)
                  throw (
                    L.set({
                      transcoderResult: o(
                        "WAWebWamEnumVideoTranscoderResultType",
                      ).VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
                    }),
                    L.commit(),
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!",
                          ])),
                      )
                      .sendLogs("media-fault: ptt became video"),
                    new (o("WAWebMediaFileErrors").InvalidMediaFileType)()
                  );
                L.set({
                  targetFormat: o("WAWebWamEnumVideoTranscoderTargetFormatType")
                    .VIDEO_TRANSCODER_TARGET_FORMAT_TYPE.VIDEO,
                  transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                    .VIDEO_TRANSCODER_RESULT_TYPE.SUCCEEDED,
                });
                var H = {
                  type: o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO,
                  mediaBlob: q,
                  mimetype: W,
                  isGif: U,
                  gifAttribution: U ? m || 0 : void 0,
                  accessibilityLabel: a,
                  size: q.size,
                };
                if (
                  f &&
                  f.duration != null &&
                  f.fullHeight != null &&
                  f.fullHeight !== 0 &&
                  f.fullWidth != null &&
                  f.fullWidth !== 0 &&
                  !r("isStringNullOrEmpty")(f.preview)
                ) {
                  var G = f.duration;
                  return (
                    L.set({
                      sourceHeight: f.fullHeight,
                      sourceWidth: f.fullWidth,
                      sourceDuration: G,
                    }),
                    L.commit(),
                    babelHelpers.extends({}, H, {
                      fullWidth: f.fullWidth,
                      fullHeight: f.fullHeight,
                      preview: f.preview,
                      duration: G == null ? void 0 : G.toString(),
                    })
                  );
                }
                var z = yield o(
                    "WAWebImageUtils",
                  ).generateVideoThumbsAndDuration({
                    file: q,
                    maxDimensions: [
                      o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE,
                      o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE,
                    ],
                    debugHint: "processRawAudioVideo",
                    logContext: {
                      callsite: "PROCESS_RAW_AUDIO_VIDEO",
                      mediaType: U ? "GIF" : "VIDEO",
                    },
                  }),
                  j = z.duration,
                  K = z.thumbs,
                  Q = K[0],
                  X = K[1],
                  Y = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                    r("WAWebURLUtils").parseDataURL(X.url).data,
                  );
                return (
                  L.set({
                    sourceHeight: Q.fullHeight,
                    sourceWidth: Q.fullWidth,
                    sourceDuration: j,
                  }),
                  L.commit(),
                  babelHelpers.extends({}, H, {
                    fullWidth: Q.fullWidth,
                    fullHeight: Q.fullHeight,
                    preview: r("WAWebURLUtils").parseDataURL(Q.url).data,
                    fullPreviewData: Y,
                    duration: j.toString(),
                  })
                );
                break e;
              }
              if (V === o("WAWebFileUtils").FILETYPE.AUDIO) {
                var J,
                  Z,
                  ee =
                    (J = f == null ? void 0 : f.duration) != null
                      ? J
                      : yield o("WAWebFileUtils").getAudioDuration(q),
                  te =
                    (Z = f == null ? void 0 : f.waveform) != null
                      ? Z
                      : yield o("WAWebWaveformUtils").computeWaveform(q);
                return {
                  type: l
                    ? o("WAWebMediaTypes").OUTWARD_TYPES.PTT
                    : o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO,
                  mediaBlob: q,
                  mimetype: W,
                  duration: ee.toString(),
                  waveform: te,
                };
              }
              if (
                V === o("WAWebFileUtils").FILETYPE.IMAGE ||
                V === o("WAWebFileUtils").FILETYPE.DOCUMENT ||
                V === o("WAWebFileUtils").FILETYPE.STICKER ||
                V === o("WAWebFileUtils").FILETYPE.STICKER_PACK
              ) {
                throw (
                  L.set({
                    transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                      .VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
                  }),
                  L.commit(),
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("media-fault: audio/video became other"),
                  r("err")("audio/video became " + W)
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  V,
              );
            }
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "processRawAudioVideo error: ",
                    "",
                  ])),
                e,
              ),
              b && g != null && g(),
              e
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.type;
          if (n) {
            if (n === "image/svg+xml")
              throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
                "disallowed mimetype " + n,
              );
            if (
              o("WAWebMimeTypes").DOC_MIMES === "*" ||
              o("WAWebMimeTypes").DOC_MIMES.includes(n)
            )
              return n;
            throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
              "disallowed mimetype " + n,
            );
          } else {
            var a = Math.min(
                o("WAWebMimeTypes").MIMETYPE_DETERMINING_LENGTH,
                e.size,
              ),
              i = yield y(e.slice(0, a)),
              l = new Uint8Array(i);
            if (
              o("WAWebMimeTypes").isMsCompoundFileBinaryFormat(l.subarray(0, 8))
            ) {
              var s;
              return t != null &&
                (s = o("WAWebFileUtils").getMimeTypeForFilepath(t)) != null
                ? s
                : o("WAWebMimeTypes").MSCFB_MIME;
            }
            var u = o("WAWebFileTypeFromBytes").fileTypeFromBytes(l);
            if (u != null && u.mime) {
              var c = o("WAWebMimeTypes").isAllowedDocumentMimetype(
                u.mime,
                t,
                !0,
              );
              if (!r("isStringNullOrEmpty")(c)) return c;
            } else if (!r("isStringNullOrEmpty")(t)) {
              var d = o("WAWebFileUtils").getMimeTypeForFilepath(t);
              if (!r("isStringNullOrEmpty")(d)) return d;
            }
            throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
              "type: " + String(e.type) + " name: " + String(t),
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r, o, a) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = e.forceToBlob(),
              c = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(
                "document",
                u,
              );
            try {
              var d,
                m,
                _ = o("WAWebMediaCleanFileName").cleanFilename(
                  u.name || (t != null ? t : ""),
                ),
                f = yield N(u, _),
                g = a ? o("WAWebFileUtils").blobToText(u) : null,
                h = yield (p || (p = n("Promise"))).all([
                  o("WAWebDocumentUploadEnrichment").enrich(u, f, s),
                  g,
                ]),
                y = h[0],
                C = h[1],
                b = y.pdfImg,
                v =
                  (d =
                    b == null || (m = b.microThumbnail) == null
                      ? void 0
                      : m.dataUrl) != null
                    ? d
                    : b == null
                      ? void 0
                      : b.thumbUrl,
                S = r("isStringNullOrEmpty")(v)
                  ? null
                  : r("WAWebURLUtils").parseDataURL(v).data,
                R = yield r("WAWebMediaOpaqueData").createFromData(u, f);
              return (
                c.endSuccess(),
                {
                  type: l,
                  mediaBlob: R,
                  mimetype: f,
                  filename: _ || void 0,
                  documentPreview: b,
                  preview: S,
                  fullPreviewData: b == null ? void 0 : b.fullPreviewData,
                  fullPreviewSize: b
                    ? { width: b.width, height: b.height }
                    : null,
                  pageCount: i != null ? i : b == null ? void 0 : b.pdfPages,
                  isPasswordProtected: y.isPasswordProtected,
                  isVcardOverMmsDocument: a,
                  parsedVcards: C
                    ? o("WAWebVcardParsingUtils").parseMultiVcard(C)
                    : null,
                }
              );
            } catch (e) {
              throw (
                c.endFailWithError(
                  e instanceof Error ? e.name : "processRawDocumentError",
                  e instanceof Error ? e.message : String(e),
                ),
                e
              );
            }
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = [];
      function n(e) {
        (e.retain(), t.push(e));
      }
      return o("WAPromiseCallSync")
        .promiseCallSync(e, null, n)
        .finally(function () {
          for (var e = 0; e < t.length; e++) t[e].autorelease();
        });
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebNetworkGetResponseIfOnline")({
            data: null,
            method: "GET",
            responseType: o("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
            url: e,
          });
          return t
            ? (p || (p = n("Promise"))).resolve({
                result: t.response,
                status: t.status,
              })
            : (p || (p = n("Promise"))).resolve(null);
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return !!o("WAWebMediaLoad").canPlayOgg;
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.retain();
          var n, a;
          try {
            switch (e.type) {
              case o("WAWebMediaTypes").TYPE.VIDEO:
              case o("WAWebMediaTypes").TYPE.PTV: {
                var i = t.forceToBlob(),
                  l = yield o("WAWebImageUtils").generateVideoThumbsAndDuration(
                    {
                      file: i,
                      maxDimensions: [
                        o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE,
                      ],
                      debugHint: "attachBlobAndGatherAndSetMetadata",
                      logContext: {
                        callsite: "GATHER_AND_SET_METADATA",
                        mediaType:
                          e.type === o("WAWebMediaTypes").TYPE.PTV
                            ? "PTV"
                            : "VIDEO",
                      },
                    },
                  ),
                  s = l.thumbs,
                  u = s[0],
                  c = l.duration,
                  d = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                    r("WAWebURLUtils").parseDataURL(u.url).data,
                  );
                n = {
                  mediaBlob: t,
                  renderableUrl: t.url(),
                  fullWidth: u.fullWidth,
                  fullHeight: u.fullHeight,
                  duration: c !== void 0 ? "" + Math.ceil(c) : void 0,
                  fullPreviewData: d,
                };
                break;
              }
              case o("WAWebMediaTypes").TYPE.AUDIO: {
                var p = yield L(t);
                (p.retain(),
                  (n = { mediaBlob: p, renderableUrl: p.url() }),
                  (a = function () {
                    return p.autorelease();
                  }));
                break;
              }
              default:
                ((e.type === o("WAWebMediaTypes").TYPE.IMAGE ||
                  e.type === o("WAWebMediaTypes").TYPE.STICKER) &&
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "object type: ",
                          "",
                        ])),
                      e.type || "",
                    )
                    .sendLogs(
                      "Entering gatherAndSetMetadata (with OpaqueData) unexpectedly",
                    ),
                  (n = { mediaBlob: t, renderableUrl: t.url() }));
            }
            e.consolidate(n);
          } catch (n) {
            if (n instanceof o("WAWebMediaLoadErrors").MediaUnsupportedError)
              e.consolidate({ mediaBlob: t, renderableUrl: t.url() });
            else throw n;
          } finally {
            (t.autorelease(), a != null && a());
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
      );
    }
    function H(e) {
      var t =
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER,
        n =
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_GIF ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTV ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.TEMPLATE ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO;
      return t || n;
    }
    function G(e, t) {
      return new (p || (p = n("Promise")))(function (n) {
        var o = new Image();
        (o.setAttribute("crossorigin", "anonymous"),
          (o.onload = function () {
            var e = t.map(function (e) {
              var t = e.height,
                n = e.imageFormat,
                a = e.imageFormatOptions,
                i = e.keepAspectRatio,
                l = e.minHeight,
                s = e.minWidth,
                u = e.width;
              if ((s != null && o.width < s) || (l != null && o.height < l))
                return null;
              var c = document.createElement("canvas"),
                d = r("nullthrows")(c.getContext("2d")),
                m = 0,
                p = 0,
                _,
                f;
              if (o.height > o.width) {
                var g = o.height / o.width;
                ((_ = u), (f = g * u), (p = -(f - t) / 2));
              } else {
                var h = o.width / o.height;
                ((f = t), (_ = h * t), (m = -(_ - u) / 2));
              }
              return (
                i === !0
                  ? ((c.width = _), (c.height = f))
                  : ((c.width = u), (c.height = t)),
                d.drawImage(o, m, p, _, f),
                {
                  dataUrl: c
                    .toDataURL(n, a)
                    .replace("data:image/jpeg;base64,", ""),
                  width: c.width,
                  height: c.height,
                }
              );
            });
            n(e);
          }),
          (o.src = e));
      });
    }
    function z(e) {
      return e
        ? e.fullPreviewData
          ? e.fullPreviewData.url()
          : e.preview instanceof r("WAWebMediaOpaqueData")
            ? e.preview.url()
            : null
        : null;
    }
    ((l.getImageWidthHeight = g),
      (l.getImageWidthHeightNoOpaque = h),
      (l.opaqueDataToArrayBuffer = C),
      (l.decodeWebpToRGBANoOpaque = b),
      (l.parseWebpNoOpaque = S),
      (l.getImageMetadata = E),
      (l.processRawImage = I),
      (l.processRawSticker = D),
      (l.processRawAudioVideo = $),
      (l.getRawDocumentMimetype = N),
      (l.processRawDocument = w),
      (l.fetchMedia = O),
      (l.canPlayOgg = W),
      (l.attachBlobAndGatherAndSetMetadata = q),
      (l.shouldUseMediaCache = V),
      (l.shouldUseLruMediaStore = H),
      (l.getResizedThumbData = G),
      (l.getHighestQualityThumbnailUrl = z));
  },
  98,
);
