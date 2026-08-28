__d(
  "VideoUploadMetadataParser",
  [
    "Bootloader",
    "ErrorNormalizeUtils",
    "ISOVideoBoxConstants",
    "Promise",
    "VideoSphericalMetadataUtil",
    "VideoUploadFeatureDetector",
    "VideoUploadMetadataParserErrorCode",
    "asyncToGeneratorRuntime",
    "checkForSphericalTag",
    "err",
    "fileSlice",
    "getErrorSafe",
    "getVideo64BitAtomLength",
    "justknobx",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 4,
      u = 4,
      c = 5242880,
      d = 24,
      m = 32,
      p = 88,
      _ = 20,
      f = 28,
      g = 8,
      h = 16,
      y = 4,
      C = 84,
      b = 20,
      v = 62,
      S = 4,
      R = 12,
      L = 12,
      E = 16,
      k = 16,
      I = { 0: 36, 1: 52, 2: 72 },
      T = 1,
      D = 1,
      x = 4,
      $ = 1,
      P = 1,
      N = 4,
      M = 4,
      w = 16,
      A = 32,
      F = 34,
      O = (function () {
        function t(e, t, n, r) {
          ((this.$1 = e),
            (this.$2 = t == null ? function () {} : t),
            (this.$4 = n),
            (this.$5 = !0),
            (this.$3 = r),
            (this.$6 = c));
        }
        var a = t.prototype;
        return (
          (a.setChunkSize = function (t) {
            return ((this.$6 = t), this);
          }),
          (a.getHandler = function () {
            return this.$2;
          }),
          (a.$7 = function (t) {
            (this.$2(t),
              this.$3 != null && this.$3({ success: !0, metadata: t }));
          }),
          (a.$8 = function (t, n) {
            if ((this.$2(null), this.$3 != null)) {
              var e =
                n == null
                  ? void 0
                  : r("ErrorNormalizeUtils").normalizeError(
                      r("getErrorSafe")(n),
                    );
              this.$3({ success: !1, errorCode: t, errorObject: e });
            }
          }),
          (a.parse = function () {
            if (!o("VideoUploadFeatureDetector").supportsFileReading())
              return (
                this.$8(
                  r("VideoUploadMetadataParserErrorCode")
                    .FILE_READING_NOT_SUPPORTED,
                ),
                null
              );
            switch (this.$1.getExtension()) {
              case "mp4":
              case "mov":
              case "m4v":
              case "3gp":
              case "3g2":
                break;
              default:
                return (
                  this.$8(
                    r("VideoUploadMetadataParserErrorCode")
                      .UNKNOWN_FILE_EXTENSION,
                  ),
                  null
                );
            }
            return this.$9();
          }),
          (a.$9 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this,
                o = this.$10(),
                a = this.$11(this.$1.getFile(), 1e4);
              return new (e || (e = n("Promise")))(function (i, l) {
                try {
                  r("promiseDone")(
                    (e || (e = n("Promise"))).all([o, a]).then(
                      function (e) {
                        var n = e[0];
                        if (n.completed === !0) {
                          var r = e[1];
                          ((n.videoPlayerData = r), t.$7(n));
                        }
                        i(n);
                      },
                      function (e) {
                        (t.$8(
                          r("VideoUploadMetadataParserErrorCode")
                            .INTERNAL_FAILURE,
                          e,
                        ),
                          l(e));
                      },
                    ),
                  );
                } catch (e) {
                  (t.$8(
                    r("VideoUploadMetadataParserErrorCode").INTERNAL_FAILURE,
                    e,
                  ),
                    l(e));
                }
              });
            });
            function o() {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.$10 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this,
                o;
              switch (this.$1.getExtension()) {
                case "mp4":
                case "mov":
                case "m4v":
                case "3gp":
                case "3g2":
                  o = this.$12(
                    0,
                    Math.min(this.$6, this.$1.getSize() || 0),
                    null,
                  );
                  break;
                case "mkv":
                  yield new (e || (e = n("Promise")))(function (e, n) {
                    r("Bootloader").loadModules(
                      ["VideoUploadMetadataMKVParser"],
                      function (n) {
                        var r = new n(t.$1);
                        ((o = r.parse()), e());
                      },
                      "VideoUploadMetadataParser",
                    );
                  });
                  break;
                default: {
                  var a = new Error(
                    "Unrecognized file extension in _parseImpl",
                  );
                  throw (a.stack, a);
                }
              }
              return r("nullthrows")(o);
            });
            function o() {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.$12 = function (o, a, i) {
            var t = this,
              l = new FileReader();
            return new (e || (e = n("Promise")))(function (e, s) {
              l.onload = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    try {
                      if (!(l.result instanceof ArrayBuffer)) {
                        var r = new Error(
                          "reader.result is something other than ArrayBuffer",
                        );
                        throw (r.stack, r);
                      }
                      var u = t.$13(new DataView(l.result), 0, a - o, o, i);
                      if (u.completed) {
                        var c = t.$14(u);
                        ((c.completed = !0), e(c));
                      } else {
                        var d = yield t.$12(
                          o + u.nextOffset,
                          Math.min(
                            t.$1.getSize() || 0,
                            o + u.nextOffset + t.$6,
                          ),
                          u,
                        );
                        e(d);
                      }
                    } catch (e) {
                      s(e);
                    }
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })();
              var u = t.$1.getFile();
              l.readAsArrayBuffer(r("fileSlice").call(u, o, a));
            });
          }),
          (a.$11 = function (r, o) {
            return !this.$4 || !window.URL || !window.URL.createObjectURL || !r
              ? null
              : new (e || (e = n("Promise")))(function (e, t) {
                  if (!r.type.startsWith("video/")) {
                    t("Incorrect file type, expected video");
                    return;
                  }
                  var n = document.createElement("video"),
                    a = window.setTimeout(function () {
                      (i(), t("Video onloadedmetadata timed out"));
                    }, o);
                  function i() {
                    (URL.revokeObjectURL(n.src),
                      window.clearTimeout(a),
                      n.remove());
                  }
                  ((n.onloadedmetadata = function () {
                    if (n.videoWidth === 0 || n.videoHeight === 0) {
                      (i(), t("Video onloadedmetadata corrupt metadata"));
                      return;
                    }
                    var r = { width: n.videoWidth, height: n.videoHeight };
                    (i(), e(r));
                  }),
                    (n.onerror = function () {
                      var e, r;
                      (i(),
                        t(
                          "Video error: " +
                            ((e = (r = n.error) == null ? void 0 : r.message) !=
                            null
                              ? e
                              : "Unknown error"),
                        ));
                    }),
                    (n.src = URL.createObjectURL(r)));
                });
          }),
          (a.$15 = function (t, n, r) {
            for (var e = [], o = 0; o < r; o++)
              e.push(String.fromCharCode(t.getUint8(n + o)));
            return e.join("");
          }),
          (a.$16 = function (t, n, r) {
            var e = {
                version: null,
                ambisonic_type: null,
                ambisonic_order: null,
                ambisonic_channel_ordering: null,
                ambisonic_normalization: null,
                num_channels: null,
                channel_map: [],
              },
              o = T + D + x + $ + P + N;
            if (r < o || n + o > t.byteLength) return null;
            var a = 0;
            ((e.version = t.getUint8(n + a)),
              (a = T),
              (e.ambisonic_type = t.getUint8(n + a)),
              (a += D),
              (e.ambisonic_order = t.getUint32(n + a)),
              (a += x),
              (e.ambisonic_channel_ordering = t.getUint8(n + a)),
              (a += $),
              (e.ambisonic_normalization = t.getUint8(n + a)),
              (a += P),
              (e.num_channels = t.getUint32(n + a)),
              (a += N));
            var i = o + e.num_channels * M;
            if (r < i || n + i > t.byteLength) return null;
            for (var l = 0; l < e.num_channels; l++)
              (e.channel_map.push(t.getUint32(n + a)), (a += M));
            return JSON.stringify(e);
          }),
          (a.$17 = function (t, n, a, i) {
            try {
              var e = u + s,
                l = o("ISOVideoBoxConstants").GSPHERICAL_UUID.length;
              if (e + l < a) {
                for (var c = [], d = 0; d < l; d++)
                  c.push(t.getUint8(n + e + d));
                var m = o("VideoSphericalMetadataUtil").uuidArrayEquals(
                    c,
                    o("ISOVideoBoxConstants").GSPHERICAL_UUID,
                  ),
                  p = o("VideoSphericalMetadataUtil").uuidArrayEquals(
                    c,
                    o("ISOVideoBoxConstants").FBSPHERICAL_UUID,
                  );
                if (((e += l), m || p)) {
                  var _ = this.$15(t, n + e, a - e);
                  r("checkForSphericalTag")(_) &&
                    ((i.sphericalMetadata.spherical = !0),
                    p
                      ? (i.sphericalMetadata.FBSphericalMetadataXML = _)
                      : (i.sphericalMetadata.sphericalMetadataXml = _));
                }
              }
            } catch (e) {}
          }),
          (a.$13 = function (t, n, o, a, i) {
            for (
              var e = n,
                l = i || {
                  widths: [],
                  heights: [],
                  streamTypes: [],
                  streamDurations: [],
                  spherical: !1,
                  sphericalMetadata: {
                    sphericalMetadataXml: null,
                    FBSphericalMetadataXML: null,
                    fbSpatialAudioMetadataXml: null,
                    ytSa3dMetadataJson: null,
                  },
                  isParsingInMediaInformationAtom: !1,
                  endOfMediaInformationAtomOffset: null,
                  streamSampleCounts: [],
                  samples: [],
                },
                c = null;
              e < o;
            ) {
              var T = t.getUint32(e),
                D = this.$15(t, e + s, u);
              if (
                (T === 1 && (T = r("getVideo64BitAtomLength")(t, e, u, s)),
                e + T > o)
              )
                return (
                  (l.completed = !1),
                  (l.nextOffset = e),
                  T > o && (l.nextOffset += T),
                  l
                );
              if (
                (l.isParsingInMediaInformationAtom &&
                  e >= Number(l.endOfMediaInformationAtomOffset) &&
                  ((l.isParsingInMediaInformationAtom = !1),
                  (l.endOfMediaInformationAtomOffset = null)),
                e + a === 0 && D !== "ftyp")
              ) {
                var x = new Error("No ftyp atom");
                throw (x.stack, x);
              }
              if (T === 0) {
                var $ = new Error("len is 0");
                throw ($.stack, $);
              }
              var P = function () {
                var n = t.getUint8(e + g),
                  o = n === 1 && r("justknobx")._("534"),
                  a = o ? f : _,
                  i = o ? m : d,
                  l = t.getUint32(e + a);
                if (l === 0) throw r("err")("mvhd timescale is 0");
                var s = o ? Number(t.getBigUint64(e + i)) : t.getUint32(e + i);
                return s / l;
              };
              switch (D) {
                case "moov":
                case "trak":
                case "mdia":
                case "stbl":
                  e += s + u;
                  break;
                case "mvhd":
                  ((l.duration = P()), (e += T));
                  break;
                case "tkhd":
                  var N = t.getUint16(e + C),
                    M = t.getUint16(e + p);
                  (l.widths.push(N),
                    l.heights.push(M),
                    l.samples.push({ descriptions: [] }),
                    (c = t.getUint32(e + b)),
                    (e += T));
                  break;
                case "hdlr":
                  if (!l.isParsingInMediaInformationAtom) {
                    var O = this.$15(t, e + h, y);
                    switch (O) {
                      case "vide":
                        O = "video";
                        break;
                      case "soun":
                        O = "audio";
                        break;
                      case "subt":
                        O = "subtitle";
                        break;
                      default:
                        O = "data";
                    }
                    l.streamTypes.push(O);
                  }
                  e += T;
                  break;
                case "mdhd":
                  (l.streamDurations.push(P()), (e += T));
                  break;
                case "uuid":
                  (this.$17(t, e, T, l), (e += T));
                  break;
                case "meta":
                  var B = L + R + S,
                    W = this.$15(t, e + B, 4);
                  if (W !== "face") {
                    e += T;
                    break;
                  }
                  var q = s + u + v,
                    U = this.$15(t, e + q, T - q);
                  (U !== null &&
                    (l.sphericalMetadata.fbSpatialAudioMetadataXml == null &&
                      (l.sphericalMetadata.fbSpatialAudioMetadataXml =
                        "<fb360_spatial_audio>"),
                    c
                      ? (l.sphericalMetadata.fbSpatialAudioMetadataXml +=
                          '\n                <track id="' +
                          c.toString() +
                          '">\n                  ' +
                          U +
                          "\n                </track>\n              ")
                      : (l.sphericalMetadata.fbSpatialAudioMetadataXml +=
                          "\n                <spatial_audio_formatting>\n                  " +
                          U +
                          "\n                </spatial_audio_formatting>\n              ")),
                    (e += T));
                  break;
                case "minf":
                  var V = this.$15(t, e + 2 * s + u, u);
                  V === "smhd" || V === "vmhd"
                    ? ((e += s + u),
                      (l.isParsingInMediaInformationAtom = !0),
                      (l.endOfMediaInformationAtomOffset = e + T))
                    : (l.streamSampleCounts.push(null), (e += T));
                  break;
                case "stsd":
                  e += E;
                  break;
                case "avc1":
                  if (this.$5 && l.samples.length > 0) {
                    var H = l.samples[l.samples.length - 1];
                    H.descriptions.push({
                      width: t.getUint16(e + A),
                      height: t.getUint16(e + F),
                    });
                  }
                  e += T;
                  break;
                case "mp4a":
                case "sowt":
                case "raw ":
                case "twos":
                case "fl32":
                case "fl64":
                case "in24":
                case "in32":
                case "ulaw":
                case "alaw":
                case "lpcm":
                case "Opus":
                  var G = t.getUint16(e + k).toString();
                  Object.prototype.hasOwnProperty.call(I, G)
                    ? (e += I[G])
                    : (e += T);
                  break;
                case "SA3D":
                  var z = this.$16(t, e + s + u, T);
                  (z !== null &&
                    l.sphericalMetadata.ytSa3dMetadataJson === null &&
                    (l.sphericalMetadata.ytSa3dMetadataJson = z),
                    (e += T));
                  break;
                case "stsz":
                case "stz2":
                  (l.streamSampleCounts.push(t.getUint32(e + w)), (e += T));
                  break;
                default:
                  e += T;
              }
            }
            return (
              (l.completed = !0),
              l.sphericalMetadata.fbSpatialAudioMetadataXml != null &&
                (l.sphericalMetadata.fbSpatialAudioMetadataXml +=
                  "</fb360_spatial_audio>"),
              l
            );
          }),
          (a.$14 = function (t) {
            var e = {
                streams: { numAudioTracks: 0 },
                format: {},
                metadata: {},
              },
              n = t.widths.length,
              r = t.heights.length,
              o = t.streamTypes.length,
              a = t.streamDurations.length,
              i = t.streamSampleCounts.length,
              l = t.samples.length;
            if (n !== r || n !== o || n !== a || n !== i || n !== l) {
              var s = new Error(
                "Number of parsed widths, heights, durations or sample counts for video file are mismatched.",
              );
              throw (s.stack, s);
            }
            for (var u = 0; u < n; u++) {
              var c = {
                width: t.widths[u],
                height: t.heights[u],
                duration: t.streamDurations[u],
                type: t.streamTypes[u],
                sampleCount: t.streamSampleCounts[u],
              };
              if (c.type === "video") {
                this.$5 &&
                  t.samples[u].descriptions.forEach(function (e) {
                    e.width > c.width &&
                      e.height > c.height &&
                      ((c.width = e.width), (c.height = e.height));
                  });
                var d = c.width * c.height,
                  m = e.streams.primaryVideo;
                (!m || m.width * m.height > d) && (e.streams.primaryVideo = c);
              } else if (c.type === "audio") {
                var p = e.streams.primaryAudio;
                ((!p || p.duration < c.duration) &&
                  (e.streams.primaryAudio = c),
                  e.streams.numAudioTracks++);
              }
            }
            return (
              (e.format.duration = t.duration),
              (e.format.isSpherical = t.sphericalMetadata.spherical),
              t.sphericalMetadata.spherical &&
                ((e.metadata.sphericalMetadataXml =
                  t.sphericalMetadata.sphericalMetadataXml),
                (e.metadata.FBSphericalMetadataXML =
                  t.sphericalMetadata.FBSphericalMetadataXML),
                (e.metadata.fbSpatialAudioMetadataXml =
                  t.sphericalMetadata.fbSpatialAudioMetadataXml),
                (e.metadata.ytSa3dMetadataJson =
                  t.sphericalMetadata.ytSa3dMetadataJson)),
              e
            );
          }),
          t
        );
      })();
    l.default = O;
  },
  98,
);
