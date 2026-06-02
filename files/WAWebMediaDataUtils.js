__d(
  "WAWebMediaDataUtils",
  [
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WAMediaPreProcessQpl",
    "WANullthrows",
    "WAPromiseCallSync",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebDecodeWebpToRgba",
    "WAWebDocumentUploadEnrichment",
    "WAWebFileUtils",
    "WAWebImageUtils",
    "WAWebMediaAnalyzer",
    "WAWebMediaCleanFileName",
    "WAWebMediaConstants",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMiscGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebNetworkGetResponseIfOnline",
    "WAWebStickerUtils",
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
    "cr:10296",
    "err",
    "file-type",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 2e4;
    function _(e) {
      return T(async function (t) {
        t(e);
        var n = new Image();
        return (
          await new Promise(function (t, o) {
            ((n.onload = t),
              (n.onabort = function () {
                o(r("err")("getImageWidthHeight onabort"));
              }),
              (n.onerror = function () {
                o(r("err")("getImageWidthHeight onerror"));
              }),
              (n.src = e.url()));
          }),
          { width: n.naturalWidth, height: n.naturalHeight }
        );
      });
    }
    function f(e) {
      return new Promise(function (t, n) {
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
    function g(t) {
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
    function h(e) {
      return T(function (t) {
        t(e);
        var n = e.getBlob();
        if (n) return g(n);
        var a = r("WANullthrows")(e.getBase64(), "b64 should be defined");
        return o("WABase64").decodeB64(a);
      });
    }
    async function y(e) {
      var t = await g(e);
      return r("WAWebDecodeWebpToRgba")(t);
    }
    async function C(e) {
      var t = await g(e);
      return o("WAWebWebpParseWebp").parseWebp(t);
    }
    function b(e) {
      return o("WAWebMediaLoad").videoWidthHeightDuration(e);
    }
    function v(e, t) {
      return T(async function (n) {
        n(e);
        var a = await o("WAWebMediaLoad")
          .transcode(e.forceToBlob(), t)
          .then(function (e) {
            return r("WAWebMediaOpaqueData").createFromData(e, e.type);
          });
        return (n(a), a.autorelease(), a);
      });
    }
    async function S(e, t) {
      var n = t.maxDimension,
        r = t.minDimension,
        a = t.transparency,
        i = await o("WAWebImageUtils").rotateAndResize(
          e,
          n,
          o("WAWebImageUtils").BLOB,
          { transparency: a, minDimension: r },
        ),
        l = i.height,
        s = i.images,
        u = i.width;
      if (s == null || s.blob == null)
        throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
      return { width: u, height: l, size: s.blob.size };
    }
    async function R(e, t, n) {
      var a = t.maxDimension,
        i = t.minDimension,
        l = t.transparency,
        s = e.forceToBlob(),
        u = o("WAMediaPreProcessQpl").startMediaPreProcessQpl("image", s);
      try {
        var c,
          d = await o("WAWebImageUtils").rotateAndResize(
            s,
            a,
            o("WAWebImageUtils").BLOB | o("WAWebImageUtils").CANVAS,
            { transparency: l, minDimension: i },
          ),
          m = d.height,
          _ = d.images,
          f = d.width;
        if (_ == null || _.canvas == null)
          throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
        var g = await o("WAWebImageUtils").rotateAndResize(
            _.canvas,
            o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE,
            o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS,
          ),
          h = g.images;
        if (h == null || h.canvas == null)
          throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
        var y = o("WAWebCanvasUtils").getResizedDataUrl(
            h.canvas,
            "image/jpeg",
            p,
          ),
          C =
            y != null && y !== ""
              ? r("WAWebURLUtils").parseDataURL(y).data
              : null,
          b =
            n ===
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .STATUS_TAB_CAMERA_PHOTO_LIBRARY ||
            n ===
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .STATUS_TAB_CAMERA_CAPTURE ||
            n ===
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .STATUS_TAB_CAMERA_MEDIA_STRIP ||
            n ===
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .STATUS_TAB_GIF,
          v = null,
          S = null;
        if (b && _.canvas != null) {
          var R = await o("WAWebImageUtils").rotateAndResize(
              _.canvas,
              o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE,
              o("WAWebImageUtils").DATA_URL,
            ),
            L = R.images,
            E = L == null ? void 0 : L.dataUrl;
          E != null &&
            E !== "" &&
            ((v = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
              r("WAWebURLUtils").parseDataURL(E).data,
            )),
            (S = {
              width: o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE,
              height: Math.round(
                (o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE * m) / f,
              ),
            }));
        }
        return (
          u.endSuccess(),
          {
            type: o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE,
            mediaBlob: _.blob,
            mimetype: (c = _.blob) == null ? void 0 : c.type,
            fullWidth: f,
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
    }
    async function L(e) {
      var t = e.forceToBlob(),
        n = o("WAMediaPreProcessQpl").startMediaPreProcessQpl("sticker", t);
      try {
        var a = await o("WAWebImageUtils").rotateAndResize(
            t,
            o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
            o("WAWebImageUtils").BLOB,
            { transparency: !0 },
          ),
          i = a.height,
          l = a.images,
          s = a.width;
        if (l == null || l.blob == null)
          throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
        var u = await o("WAWebImageUtils").toWebpSticker(l.blob),
          c = await r("WAWebMediaOpaqueData").createFromData(u, u.type);
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
    }
    async function E(e, t, a, i, l, m, p, _, f, g, h) {
      var y = !1;
      try {
        var C,
          b,
          v = e.forceToBlob(),
          S = v instanceof File ? v.name : "",
          R = new (o("WAWebVideoTranscoderWamEvent").VideoTranscoderWamEvent)({
            sourceHeight: a == null ? void 0 : a.fullHeight,
            sourceWidth: a == null ? void 0 : a.fullWidth,
            sourceDuration: a == null ? void 0 : a.duration,
            sourceFileSize: e.size(),
            sourceFormat:
              i === !0
                ? o("WAWebWamEnumVideoTranscoderSourceFormatType")
                    .VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.GIF
                : o("WAWebWamEnumVideoTranscoderSourceFormatType")
                    .VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.VIDEO,
            sourceMimeType: v.type,
            sourceFileExtension: S.split(".").pop(),
          }),
          L =
            (C =
              n("cr:10296") == null
                ? void 0
                : n("cr:10296").isWindowsHybridTranscoderEnabled()) != null
              ? C
              : !1,
          E = v.type.startsWith("video/"),
          k = v.type === "video/mp4",
          I = k
            ? (b =
                n("cr:10296") == null
                  ? void 0
                  : n("cr:10296").isWindowsHybridTranscoderEnabledForMp4()) !=
              null
              ? b
              : !1
            : !0,
          T = L && E && I;
        R.startTranscoderT();
        var D = null;
        if (!T) {
          var x = !1,
            $ = o("WAMediaPreProcessQpl").startMediaPreProcessQpl(
              E ? "video" : "audio",
              v,
            ),
            P = o("WAWebABProps").getABPropConfigValue(
              "transcode_and_repair_videos",
            ),
            N;
          if (
            (E
              ? P === !0
                ? (N = await o(
                    "WAWebMediaAnalyzer",
                  ).transcodeToMp4AndMp4RepairMux(v, !!i, $))
                : (N = await o("WAWebMediaAnalyzer").checkAndRepair(v, !!i, $))
              : (N = await o("WAWebMediaAnalyzer").checkAndRepairAudio(
                  v,
                  !!i,
                  $,
                )),
            N.success)
          ) {
            var M = N.value;
            ((D = M[0]),
              (x = M[1]),
              $.endSuccess(),
              (R.transcoderAlgorithm = x
                ? o("WAWebWamEnumVideoTranscoderAlgorithmType")
                    .VIDEO_TRANSCODER_ALGORITHM_TYPE.WASM_MP4_CHECK_AND_REPAIR
                : o("WAWebWamEnumVideoTranscoderAlgorithmType")
                    .VIDEO_TRANSCODER_ALGORITHM_TYPE.WEB_MEDIA_WORKER));
          } else $.endFailWithError(N.error.error, N.error.errorDetail);
        }
        if (T || (!D && L)) {
          R.transcoderAlgorithm = o(
            "WAWebWamEnumVideoTranscoderAlgorithmType",
          ).VIDEO_TRANSCODER_ALGORITHM_TYPE.HYBRID_BRIDGE;
          var w = await (n("cr:10296") == null
            ? void 0
            : n("cr:10296").transcodeVideo(v, _, f, g, h));
          if (w != null) {
            var A = w[0],
              F = w[1];
            ((v = A), (y = F), (D = { type: v.type, file: v, isGif: !1 }));
          }
        }
        if ((R.markTranscoderT(), !D))
          throw (
            R.set({
              transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                .VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
            }),
            R.commit(),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processRawAudioVideo bad video file ",
                  "",
                ])),
              v.type,
            ),
            new (o("WAWebMiscErrors").InvalidMediaCheckRepairFailedType)()
          );
        var O = D.type,
          B = D.file;
        R.set({ targetFileSize: B.size });
        var W = i === !0 || D.isGif === !0;
        e: {
          var q = o("WAWebFileUtils").typeFromMimetype(O);
          if (q === o("WAWebFileUtils").FILETYPE.VIDEO) {
            if (t)
              throw (
                R.set({
                  transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                    .VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
                }),
                R.commit(),
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .sendLogs("media-fault: ptt became video"),
                new (o("WAWebMiscErrors").InvalidMediaFileType)()
              );
            R.set({
              targetFormat: o("WAWebWamEnumVideoTranscoderTargetFormatType")
                .VIDEO_TRANSCODER_TARGET_FORMAT_TYPE.VIDEO,
              transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                .VIDEO_TRANSCODER_RESULT_TYPE.SUCCEEDED,
            });
            var U = {
              type: o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO,
              mediaBlob: B,
              mimetype: O,
              isGif: W,
              gifAttribution: W ? l || 0 : void 0,
              accessibilityLabel: p,
              size: B.size,
            };
            if (
              a &&
              a.duration != null &&
              a.fullHeight != null &&
              a.fullHeight !== 0 &&
              a.fullWidth != null &&
              a.fullWidth !== 0 &&
              !r("isStringNullOrEmpty")(a.preview)
            ) {
              var V = a.duration;
              return (
                R.set({
                  sourceHeight: a.fullHeight,
                  sourceWidth: a.fullWidth,
                  sourceDuration: V,
                }),
                R.commit(),
                babelHelpers.extends({}, U, {
                  fullWidth: a.fullWidth,
                  fullHeight: a.fullHeight,
                  preview: a.preview,
                  duration: V == null ? void 0 : V.toString(),
                })
              );
            }
            var H = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
                file: B,
                maxDimensions: [
                  o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE,
                  o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE,
                ],
                debugHint: "processRawAudioVideo",
              }),
              G = H.duration,
              z = H.thumbs,
              j = z[0],
              K = z[1],
              Q = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                r("WAWebURLUtils").parseDataURL(K.url).data,
              );
            return (
              R.set({
                sourceHeight: j.fullHeight,
                sourceWidth: j.fullWidth,
                sourceDuration: G,
              }),
              R.commit(),
              babelHelpers.extends({}, U, {
                fullWidth: j.fullWidth,
                fullHeight: j.fullHeight,
                preview: r("WAWebURLUtils").parseDataURL(j.url).data,
                fullPreviewData: Q,
                duration: G.toString(),
              })
            );
            break e;
          }
          if (q === o("WAWebFileUtils").FILETYPE.AUDIO) {
            var X,
              Y,
              J =
                (X = a == null ? void 0 : a.duration) != null
                  ? X
                  : await o("WAWebFileUtils").getAudioDuration(B),
              Z =
                (Y = a == null ? void 0 : a.waveform) != null
                  ? Y
                  : await o("WAWebWaveformUtils").computeWaveform(B);
            return {
              type: t
                ? o("WAWebMediaTypes").OUTWARD_TYPES.PTT
                : o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO,
              mediaBlob: B,
              mimetype: O,
              duration: J.toString(),
              waveform: Z,
            };
          }
          if (
            q === o("WAWebFileUtils").FILETYPE.IMAGE ||
            q === o("WAWebFileUtils").FILETYPE.DOCUMENT ||
            q === o("WAWebFileUtils").FILETYPE.STICKER ||
            q === o("WAWebFileUtils").FILETYPE.STICKER_PACK
          ) {
            throw (
              R.set({
                transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                  .VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
              }),
              R.commit(),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ])),
                )
                .sendLogs("media-fault: audio/video became other"),
              r("err")("audio/video became " + O)
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              q,
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
          y && g != null && g(),
          e
        );
      }
    }
    async function k(e, t) {
      var n = e.type;
      if (n) {
        if (n === "image/svg+xml")
          throw new (o("WAWebMiscErrors").InvalidMediaFileType)(
            "disallowed mimetype " + n,
          );
        if (
          o("WAWebMimeTypes").DOC_MIMES === "*" ||
          o("WAWebMimeTypes").DOC_MIMES.includes(n)
        )
          return n;
        throw new (o("WAWebMiscErrors").InvalidMediaFileType)(
          "disallowed mimetype " + n,
        );
      } else {
        var a = Math.min(
            o("WAWebMimeTypes").MIMETYPE_DETERMINING_LENGTH,
            e.size,
          ),
          i = await g(e.slice(0, a)),
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
        var u = r("file-type")(l);
        if (u != null && u.mime) {
          var c = o("WAWebMimeTypes").isAllowedDocumentMimetype(u.mime, t, !0);
          if (!r("isStringNullOrEmpty")(c)) return c;
        } else if (!r("isStringNullOrEmpty")(t)) {
          var d = o("WAWebFileUtils").getMimeTypeForFilepath(t);
          if (!r("isStringNullOrEmpty")(d)) return d;
        }
        throw new (o("WAWebMiscErrors").InvalidMediaFileType)(
          "type: " + String(e.type) + " name: " + String(t),
        );
      }
    }
    async function I(e, t, n, a, i, l) {
      var s = e.forceToBlob(),
        u = o("WAMediaPreProcessQpl").startMediaPreProcessQpl("document", s);
      try {
        var c,
          d,
          m = o("WAWebMediaCleanFileName").cleanFilename(
            s.name || (t != null ? t : ""),
          ),
          p = await k(s, m),
          _ = n ? o("WAWebFileUtils").blobToText(s) : null,
          f = await Promise.all([
            o("WAWebDocumentUploadEnrichment").enrich(s, p, l),
            _,
          ]),
          g = f[0],
          h = f[1],
          y = g.pdfImg,
          C =
            (c =
              y == null || (d = y.microThumbnail) == null
                ? void 0
                : d.dataUrl) != null
              ? c
              : y == null
                ? void 0
                : y.thumbUrl,
          b = r("isStringNullOrEmpty")(C)
            ? null
            : r("WAWebURLUtils").parseDataURL(C).data,
          v = await r("WAWebMediaOpaqueData").createFromData(s, p);
        return (
          u.endSuccess(),
          {
            type: i,
            mediaBlob: v,
            mimetype: p,
            filename: m || void 0,
            documentPreview: y,
            preview: b,
            fullPreviewData: y == null ? void 0 : y.fullPreviewData,
            fullPreviewSize: y ? { width: y.width, height: y.height } : null,
            pageCount: a != null ? a : y == null ? void 0 : y.pdfPages,
            isPasswordProtected: g.isPasswordProtected,
            isVcardOverMmsDocument: n,
            parsedVcards: h
              ? o("WAWebVcardParsingUtils").parseMultiVcard(h)
              : null,
          }
        );
      } catch (e) {
        throw (
          u.endFailWithError(
            e instanceof Error ? e.name : "processRawDocumentError",
            e instanceof Error ? e.message : String(e),
          ),
          e
        );
      }
    }
    function T(e) {
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
    async function D(e) {
      var t = await r("WAWebNetworkGetResponseIfOnline")(
        e,
        "GET",
        null,
        r("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
      );
      return t
        ? Promise.resolve({ result: t.response, status: t.status })
        : Promise.resolve(null);
    }
    function x() {
      return !!o("WAWebMediaLoad").canPlayOgg;
    }
    async function $(e, t) {
      t.retain();
      var n, a;
      try {
        switch (e.type) {
          case o("WAWebMediaTypes").TYPE.VIDEO:
          case o("WAWebMediaTypes").TYPE.PTV: {
            var i = t.forceToBlob(),
              l = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
                file: i,
                maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
                debugHint: "gatherAndSetMetadata",
              }),
              s = l.thumbs,
              u = s[0],
              c = l.duration,
              d;
            (o("WAWebMiscGatingUtils").isHighQualityVideoThumbnailsEnabled() &&
              (d = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                r("WAWebURLUtils").parseDataURL(u.url).data,
              )),
              (n = {
                mediaBlob: t,
                renderableUrl: t.url(),
                fullWidth: u.fullWidth,
                fullHeight: u.fullHeight,
                duration: c !== void 0 ? "" + Math.ceil(c) : void 0,
                fullPreviewData: d,
              }));
            break;
          }
          case o("WAWebMediaTypes").TYPE.AUDIO: {
            var p = await v(t);
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
        if (n instanceof o("WAWebMiscErrors").MediaUnsupportedError)
          e.consolidate({ mediaBlob: t, renderableUrl: t.url() });
        else throw n;
      } finally {
        (t.autorelease(), a != null && a());
      }
    }
    async function P(e, t) {
      var n = await Promise.resolve()
        .then(function () {
          switch (e.type) {
            case o("WAWebMediaTypes").TYPE.VIDEO:
            case o("WAWebMediaTypes").TYPE.PTV:
              return b(t).then(function (e) {
                return {
                  fullWidth: e.width,
                  fullHeight: e.height,
                  duration:
                    e.duration !== void 0 ? "" + Math.ceil(e.duration) : void 0,
                };
              });
            case o("WAWebMediaTypes").TYPE.IMAGE:
              return e.contentInfo.fullHeight != null &&
                e.contentInfo.fullWidth != null &&
                e.size === t.size
                ? null
                : f(t).then(function (e) {
                    return {
                      fullWidth: e.width,
                      fullHeight: e.height,
                      size: t.size,
                    };
                  });
            case o("WAWebMediaTypes").TYPE.STICKER:
              return o("WAWebStickerUtils").parseStickerMetadata(t, e);
            case o("WAWebMediaTypes").TYPE.AUDIO:
              return {};
            default:
              return {};
          }
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebMiscErrors").MediaUnsupportedError,
            function (t) {
              throw (e.consolidate({}), t);
            },
          ),
        );
      n != null && e.consolidate(n);
    }
    function N(e) {
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
    function M(e) {
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
    function w(e, t) {
      return new Promise(function (n) {
        var r = new Image();
        (r.setAttribute("crossorigin", "anonymous"),
          (r.onload = function () {
            var e = t.map(function (e) {
              var t = e.height,
                n = e.imageFormat,
                o = e.imageFormatOptions,
                a = e.keepAspectRatio,
                i = e.minHeight,
                l = e.minWidth,
                s = e.width;
              if ((l != null && r.width < l) || (i != null && r.height < i))
                return null;
              var u = document.createElement("canvas"),
                c = u.getContext("2d"),
                d = 0,
                m = 0,
                p,
                _;
              if (r.height > r.width) {
                var f = r.height / r.width;
                ((p = s), (_ = f * s), (m = -(_ - t) / 2));
              } else {
                var g = r.width / r.height;
                ((_ = t), (p = g * t), (d = -(p - s) / 2));
              }
              return (
                a === !0
                  ? ((u.width = p), (u.height = _))
                  : ((u.width = s), (u.height = t)),
                c.drawImage(r, d, m, p, _),
                {
                  dataUrl: u
                    .toDataURL(n, o)
                    .replace("data:image/jpeg;base64,", ""),
                  width: u.width,
                  height: u.height,
                }
              );
            });
            n(e);
          }),
          (r.src = e));
      });
    }
    function A(e) {
      return e
        ? e.fullPreviewData
          ? e.fullPreviewData.url()
          : e.preview instanceof r("WAWebMediaOpaqueData")
            ? e.preview.url()
            : null
        : null;
    }
    ((l.getImageWidthHeight = _),
      (l.getImageWidthHeightNoOpaque = f),
      (l.opaqueDataToArrayBuffer = h),
      (l.decodeWebpToRGBANoOpaque = y),
      (l.parseWebpNoOpaque = C),
      (l.getImageMetadata = S),
      (l.processRawImage = R),
      (l.processRawSticker = L),
      (l.processRawAudioVideo = E),
      (l.getRawDocumentMimetype = k),
      (l.processRawDocument = I),
      (l.fetchMedia = D),
      (l.canPlayOgg = x),
      (l.gatherAndSetMetadata = $),
      (l.gatherAndSetMetadataNoOpaque = P),
      (l.shouldUseMediaCache = N),
      (l.shouldUseLruMediaStore = M),
      (l.getResizedThumbData = w),
      (l.getHighestQualityThumbnailUrl = A));
  },
  98,
);
