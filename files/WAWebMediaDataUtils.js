__d(
  "WAWebMediaDataUtils",
  [
    "WABase64",
    "WACustomError",
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
    "WAWebODS",
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
    "getErrorSafe",
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
      return D(async function (t) {
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
    function h(e) {
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
      return D(function (t) {
        t(e);
        var n = e.getBlob();
        if (n) return y(n);
        var a = r("nullthrows")(e.getBase64(), "b64 should be defined");
        return o("WABase64").decodeB64(a);
      });
    }
    async function b(e) {
      var t = await y(e);
      return r("WAWebDecodeWebpToRgba")(t);
    }
    async function v(e) {
      var t = await y(e);
      return o("WAWebWebpParseWebp").parseWebp(t);
    }
    function S(e, t) {
      return D(async function (n) {
        n(e);
        var a = await o("WAWebMediaLoad")
          .transcode(e.forceToBlob(), t)
          .then(function (e) {
            return r("WAWebMediaOpaqueData").createFromData(e, e.type);
          });
        return (n(a), a.autorelease(), a);
      });
    }
    async function R(e, t) {
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
        throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
      return { width: u, height: l, size: s.blob.size };
    }
    async function L(e, t, n) {
      var a = t.maxDimension,
        i = t.minDimension,
        l = t.transparency,
        s = e.forceToBlob(),
        u = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("image", s);
      try {
        var c,
          d = await o("WAWebImageUtils").rotateAndResize(
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
        var g = await o("WAWebImageUtils").rotateAndResize(
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
                .STATUS_TAB_GIF ||
            n ===
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .STATUS_POST_RESHARE,
          v = null,
          S = null;
        if (b && p.canvas != null) {
          var R = await o("WAWebImageUtils").rotateAndResize(
              p.canvas,
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
                (o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE * m) / _,
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
    }
    async function E(e) {
      var t = e.forceToBlob(),
        n = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("sticker", t);
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
          throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
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
    async function k(e) {
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
          L = new (o("WAWebVideoTranscoderWamEvent").VideoTranscoderWamEvent)({
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
          var x = await _.load(),
            $ = x.checkAndRepairAudio,
            P = x.transcodeToMp4AndMp4RepairMux,
            N = !1,
            M = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(
              k ? "video" : "audio",
              S,
            ),
            w;
          if (
            (k ? (w = await P(S, !!i, M)) : (w = await $(S, !!i, M)), w.success)
          ) {
            var A = w.value;
            ((D = A[0]),
              (N = A[1]),
              M.endSuccess(),
              (L.transcoderAlgorithm = N
                ? o("WAWebWamEnumVideoTranscoderAlgorithmType")
                    .VIDEO_TRANSCODER_ALGORITHM_TYPE.WASM_MP4_CHECK_AND_REPAIR
                : o("WAWebWamEnumVideoTranscoderAlgorithmType")
                    .VIDEO_TRANSCODER_ALGORITHM_TYPE.WEB_MEDIA_WORKER));
          } else M.endFailWithError(w.error.error, w.error.errorDetail);
        }
        if (T || (!D && E)) {
          L.transcoderAlgorithm = o(
            "WAWebWamEnumVideoTranscoderAlgorithmType",
          ).VIDEO_TRANSCODER_ALGORITHM_TYPE.HYBRID_BRIDGE;
          var F = await (n("cr:10296") == null
            ? void 0
            : n("cr:10296").transcodeVideo({
                file: S,
                onProgress: C,
                resetMediaPreview: g,
                setMediaPreview: h,
                setMimeType: y,
              }));
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
            new (o("WAWebMediaFileErrors").InvalidMediaCheckRepairFailedType)()
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
                  transcoderResult: o("WAWebWamEnumVideoTranscoderResultType")
                    .VIDEO_TRANSCODER_RESULT_TYPE.FAILED,
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
            var z = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
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
              Y = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
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
                  : await o("WAWebFileUtils").getAudioDuration(q),
              te =
                (Z = f == null ? void 0 : f.waveform) != null
                  ? Z
                  : await o("WAWebWaveformUtils").computeWaveform(q);
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
    }
    async function I(e, t) {
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
          i = await y(e.slice(0, a)),
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
          var c = o("WAWebMimeTypes").isAllowedDocumentMimetype(u.mime, t, !0);
          if (!r("isStringNullOrEmpty")(c)) return c;
        } else if (!r("isStringNullOrEmpty")(t)) {
          var d = o("WAWebFileUtils").getMimeTypeForFilepath(t);
          if (!r("isStringNullOrEmpty")(d)) return d;
        }
        throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
          "type: " + String(e.type) + " name: " + String(t),
        );
      }
    }
    async function T(e, t, n, a, i, l) {
      var s = e.forceToBlob(),
        u = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("document", s);
      try {
        var c,
          d,
          m = o("WAWebMediaCleanFileName").cleanFilename(
            s.name || (t != null ? t : ""),
          ),
          p = await I(s, m),
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
    function D(e) {
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
    async function x(e) {
      var t = await r("WAWebNetworkGetResponseIfOnline")({
        data: null,
        method: "GET",
        responseType: o("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
        url: e,
      });
      return t
        ? Promise.resolve({ result: t.response, status: t.status })
        : Promise.resolve(null);
    }
    function $() {
      return !!o("WAWebMediaLoad").canPlayOgg;
    }
    async function P(e, t) {
      t.retain();
      var n,
        a,
        i = !1;
      try {
        switch (e.type) {
          case o("WAWebMediaTypes").TYPE.VIDEO:
          case o("WAWebMediaTypes").TYPE.PTV: {
            N(e) &&
              (e.consolidate({ mediaBlob: t, renderableUrl: t.url() }),
              (i = !0));
            var l = t.forceToBlob(),
              s = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
                file: l,
                maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
                debugHint: "attachBlobAndGatherAndSetMetadata",
                logContext: {
                  callsite: "GATHER_AND_SET_METADATA",
                  mediaType:
                    e.type === o("WAWebMediaTypes").TYPE.PTV ? "PTV" : "VIDEO",
                },
              }),
              u = s.thumbs,
              c = u[0],
              d = s.duration,
              p = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                r("WAWebURLUtils").parseDataURL(c.url).data,
              );
            n = {
              mediaBlob: t,
              renderableUrl: t.url(),
              fullWidth: c.fullWidth,
              fullHeight: c.fullHeight,
              duration: d !== void 0 ? "" + Math.ceil(d) : void 0,
              fullPreviewData: p,
            };
            break;
          }
          case o("WAWebMediaTypes").TYPE.AUDIO: {
            var _ = await S(t);
            (_.retain(),
              (n = { mediaBlob: _, renderableUrl: _.url() }),
              (a = function () {
                return _.autorelease();
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
        else if (i) w(e, n);
        else throw n;
      } finally {
        (t.autorelease(), a != null && a());
      }
    }
    function N(e) {
      var t = e.associatedMsgs();
      return (
        e.type === o("WAWebMediaTypes").TYPE.VIDEO &&
        t.length > 0 &&
        t.every(M) &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_status_playable_before_thumbnail",
        )
      );
    }
    function M(e) {
      var t, n;
      return (
        e.id.remote.isStatus() &&
        ((t = e.mediaData) == null ? void 0 : t.preview) != null &&
        !r("isStringNullOrEmpty")(
          (n = e.mediaData) == null ? void 0 : n.duration,
        )
      );
    }
    function w(e, t) {
      if (!(t instanceof o("WACustomError").TimeoutError && N(e)))
        throw (e.clearBlob(), t);
      (o("WALogger").WARN(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[status-video] thumbnail timed out, keeping the downloaded blob: ",
            "",
          ])),
        r("getErrorSafe")(t),
      ),
        r("WAWebODS").incr("web.status_video.thumbnail_timeout_blob_kept"));
    }
    function A(e) {
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
    function F(e) {
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
    function O(e, t) {
      return new Promise(function (n) {
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
    function B(e) {
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
      (l.parseWebpNoOpaque = v),
      (l.getImageMetadata = R),
      (l.processRawImage = L),
      (l.processRawSticker = E),
      (l.processRawAudioVideo = k),
      (l.getRawDocumentMimetype = I),
      (l.processRawDocument = T),
      (l.fetchMedia = x),
      (l.canPlayOgg = $),
      (l.attachBlobAndGatherAndSetMetadata = P),
      (l.shouldUseMediaCache = A),
      (l.shouldUseLruMediaStore = F),
      (l.getResizedThumbData = O),
      (l.getHighestQualityThumbnailUrl = B));
  },
  98,
);
