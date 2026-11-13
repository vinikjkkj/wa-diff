__d(
  "VideoPlayerNextgendashManifestParser",
  [
    "QualityScoreUtils",
    "VideoPlayerNextgendashMediaUtils",
    "fb-error",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e) {
      return e;
    }
    function u(e, t, n, a) {
      for (
        var i = arguments.length, l = new Array(i > 4 ? i - 4 : 0), s = 4;
        s < i;
        s++
      )
        l[s - 4] = arguments[s];
      var u = o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [
          e,
          "VideoPlayerNextgendashManifestParser/" + n,
          a + " :: MPD=%s",
        ].concat(l, [JSON.stringify(t)]),
      );
      return (r("fb-error").TAAL.blameToPreviousFrame(u), u);
    }
    function c(e) {
      if (e == null || e === "") return null;
      var t = /\d+/.exec(e);
      if (t == null) return null;
      var n = Number.parseInt(t[0], 10);
      return Number.isNaN(n) ? null : n * 1e3;
    }
    function d(e) {
      if (e == null || e === "") return null;
      var t = e.split("/");
      if (
        t.length > 2 ||
        t.some(function (e) {
          return !/^\d+(?:\.\d+)?$/.test(e);
        })
      )
        return null;
      var n = Number(t[0]),
        r = t.length === 2 ? Number(t[1]) : 1;
      if (n <= 0 || r <= 0) return null;
      var o = n / r;
      return Number.isFinite(o) ? o : null;
    }
    function m(e) {
      if (e == null || e === "") return null;
      var t =
        /^PT(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?$/.exec(
          e,
        );
      if (t == null || (t[1] == null && t[2] == null && t[3] == null))
        return null;
      var n = t[1] != null ? Number.parseFloat(t[1]) : 0,
        r = t[2] != null ? Number.parseFloat(t[2]) : 0,
        o = t[3] != null ? Number.parseFloat(t[3]) : 0,
        a = n * 3600 + r * 60 + o;
      return Number.isFinite(a) && a >= 0 ? a : null;
    }
    function p(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        p = n.audioOnly,
        g = n.baseURLFallback,
        h = n.onBaseURLFallbackUsed,
        y = n.workerOptimizationsEnabled,
        E = y === void 0 ? !1 : y,
        k = (r = t.MPD) == null ? void 0 : r[0];
      if (!k) throw u(e, t, "NoMPD", "Missing MPD root");
      var I = (a = k.Period) == null ? void 0 : a[0];
      if (!I) throw u(e, t, "NoPeriod", "Missing MPD>Period[1]");
      var T = I.AdaptationSet;
      if (!T || T.length <= 0)
        throw u(e, t, "NoAdaptationSet", "Missing MPD>Period[1]>AdaptationSet");
      if (
        T.some(function (e) {
          return e.Representation == null || e.Representation.length === 0;
        })
      )
        throw u(
          e,
          t,
          "SomeEmptyAdaptationSets",
          "Some AdaptationSets contain no Representations",
        );
      var D = function (r) {
          var n,
            a,
            i,
            l,
            s,
            c,
            d,
            m,
            p,
            y,
            L,
            k,
            I,
            T,
            D,
            x = r.adaptationSetId,
            $ = r.adaptationSetMimeType,
            P = r.adaptationSetXml,
            N = r.representationIndex,
            M = r.representationXml,
            w = (n = M.$.id) != null ? n : x + "-#" + N,
            A =
              (a = (i = M.$.mimeType) != null ? i : P.$.mimeType) != null
                ? a
                : "";
          if (A === "" || A !== $) {
            var F, O;
            throw u(
              e,
              t,
              "MimeTypeMismatch",
              'Representation id="%s" Representation>@mimeType="%s" and AdaptationSet>@mimeType="%s" mismatch',
              w,
              (F = M.$.mimeType) != null ? F : "",
              (O = P.$.mimeType) != null ? O : "",
            );
          }
          var B =
            (l = (s = M.$.codecs) != null ? s : P.$.codecs) != null ? l : "";
          if (B === "") {
            var W, q;
            e.logging.log(e, {
              error: u(
                e,
                t,
                "CodecsMissingOrEmpty",
                'Representation id="%s" Representation>@codecs="%s" and AdaptationSet>@codecs="%s" is missing or empty',
                w,
                (W = M.$.codecs) != null ? W : "",
                (q = P.$.codecs) != null ? q : "",
              ),
              type: "generic_error_as_warning",
            });
          }
          var U = o("VideoPlayerNextgendashMediaUtils").parseMimeCodecs(
            R(A, B),
          );
          if (
            U.contentType === "" ||
            U.contentType === "unknown" ||
            U.containerType === ""
          ) {
            var V, H, G, z;
            throw u(
              e,
              t,
              "MimeCodecsParsedUnexpected",
              'Representation id="%s" missing contentType or containerType: %s; AdaptationSet>@mimeType="%s", AdaptationSet>@codecs="%s", Representation>@mimeType="%s", Representation>@codecs="%s"',
              w,
              JSON.stringify(U),
              (V = P.$.mimeType) != null ? V : "",
              (H = P.$.codecs) != null ? H : "",
              (G = M.$.mimeType) != null ? G : "",
              (z = M.$.codecs) != null ? z : "",
            );
          }
          var j =
              P.$.FBVariantKey === "und"
                ? null
                : (c = P.$.FBVariantKey) != null
                  ? c
                  : null,
            K = P.$.lang === "und" ? null : (d = P.$.lang) != null ? d : null,
            Q =
              (m =
                (p = P.Role) == null || (p = p[0]) == null
                  ? void 0
                  : p.$.value) != null
                ? m
                : null,
            X = Number(M.$.bandwidth);
          if (!Number.isFinite(X) || X <= 0)
            throw u(
              e,
              t,
              "RepresentationBandwidthInvalid",
              'Representation id="%s" Representation>@bandwidth is missing or invalid: %s',
              w,
              M.$.bandwidth,
            );
          var Y = M.$.FBPlaybackResolutionMos,
            J = M.$.FBPlaybackResolutionCsvqm,
            Z = e.config.cacheQualityScoreInRepresentation,
            ee =
              Z && Y != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(Y)
                : null,
            te =
              Z && J != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(J)
                : null,
            ne = M.$.FBQualityLabel,
            re = ((y = M.$.FBAbrPolicyTags) != null ? y : "")
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e !== "";
              }),
            oe =
              (L =
                (k = M.BaseURL) == null || (k = k[0]) == null ? void 0 : k._) !=
              null
                ? L
                : g;
          if (oe == null)
            throw u(
              e,
              t,
              "RepresentationBaseURLMissingAndNoFallback",
              'Representation id="%s" Representation>BaseURL is missing and no fallback was provided',
              w,
            );
          var ae,
            ie = (I = M.SegmentBase) == null ? void 0 : I[0],
            le = (T = M.SegmentTemplate) == null ? void 0 : T[0];
          if (ie != null) {
            var se,
              ue = (se = ie.Initialization) == null ? void 0 : se[0];
            if (ue == null)
              throw u(
                e,
                t,
                "SegmentBaseInitializationMissing",
                'Representation id="%s" SegmentBase>Initialization is missing',
                w,
              );
            var ce = S(
                e,
                t,
                w,
                "SegmentBase>Initialization>@range",
                ue.$.range,
              ),
              de = S(e, t, w, "SegmentBase>@indexRange", ie.$.indexRange);
            if (ie.$.indexRangeExact === "false")
              throw u(
                e,
                t,
                "SegmentBaseIndexRangeExactFalseUnsupported",
                'Representation id="%s" SegmentBase>@indexRangeExact="false" is unsupported',
                w,
              );
            ae = {
              baseURL: oe,
              indexByteRange: o(
                "VideoPlayerNextgendashMediaUtils",
              ).makeByteRangeFromStartEndByteIndex(e, de[0], de[1]),
              initByteRange: o(
                "VideoPlayerNextgendashMediaUtils",
              ).makeByteRangeFromStartEndByteIndex(e, ce[0], ce[1]),
              type: "SegmentBase",
            };
          } else if (le != null) {
            var me,
              pe = le.$.media;
            if (pe == null)
              throw u(
                e,
                t,
                "SegmentTemplateMediaMissing",
                'Representation id="%s" SegmentTemplate>@media is missing',
                w,
              );
            var _e = le.$.initialization;
            if (_e == null)
              throw u(
                e,
                t,
                "SegmentTemplateInitializationMissing",
                'Representation id="%s" SegmentTemplate>@initialization is missing',
                w,
              );
            var fe = v(
                e,
                t,
                w,
                "SegmentTemplate>@timescale",
                le.$.timescale,
                C,
              ),
              ge =
                le.$.startNumber != null
                  ? v(
                      e,
                      t,
                      w,
                      "SegmentTemplate>@startNumber",
                      le.$.startNumber,
                      b,
                    )
                  : null,
              he = (me = le.SegmentTimeline) == null ? void 0 : me[0];
            if (he == null)
              throw u(
                e,
                t,
                "SegmentTimelineMissing",
                'Representation id="%s" SegmentTemplate>SegmentTimeline is missing',
                w,
              );
            var ye = _(e, t, w, he),
              Ce = f(e, t, w, he);
            ae = babelHelpers.extends(
              { baseURL: oe, initURL: _e, segmentTimeline: ye },
              Ce != null ? { segmentTimelinePredictive: Ce } : null,
              {
                segmentURLTemplate: pe,
                startNumber: ge,
                timescale: fe,
                type: "SegmentTemplate",
              },
            );
          } else
            throw u(
              e,
              t,
              "SegmentsInfoInvalid",
              'Representation id="%s" SegmentBase and SegmentTemplate are missing',
              w,
            );
          return (
            E === !0 &&
              ((D = M.BaseURL) == null || (D = D[0]) == null ? void 0 : D._) ==
                null &&
              (h == null || h(ae)),
            {
              abrPolicyTags: re,
              bandwidth: X,
              lang: K,
              mimeCodecsParsed: U,
              playbackResolutionCsvqmScoreCurve: J,
              playbackResolutionCsvqmScoreCurveParsed: te,
              playbackResolutionMosScoreCurve: Y,
              playbackResolutionMosScoreCurveParsed: ee,
              qualityLabel: ne,
              representationId: w,
              role: Q,
              segmentsInfo: ae,
              variantKey: j,
            }
          );
        },
        x = function (t, n) {
          var e = Number.parseInt(t != null ? t : "", 10),
            r = Number.parseInt(n != null ? n : "", 10);
          return Number.isSafeInteger(e) &&
            Number.isSafeInteger(r) &&
            e > 0 &&
            r > 0
            ? { height: r, width: e }
            : null;
        },
        $ =
          e.config.enableLive &&
          (k.$.type === "dynamic" || e.config.isLivePlayback),
        P = function (t) {
          var e,
            n = t.adaptationSetXml,
            r = t.representationXml;
          return (e = x(r.$.width, r.$.height)) != null
            ? e
            : x(n.$.width, n.$.height);
        },
        N = function (t) {
          var e,
            n = t.adaptationSetXml;
          return (e = P(t)) != null
            ? e
            : $
              ? x(n.$.maxWidth, n.$.maxHeight)
              : null;
        },
        M = function (r) {
          var n,
            o = D(r),
            a = r.adaptationSetXml,
            i = r.representationXml,
            l = N(r);
          if (l == null)
            throw u(
              e,
              t,
              "InvalidWidthHeight",
              'Representation width and/or height attributes are invalid: Representation id="%s" width=%s height=%s, AdaptationSet id="%s" width=%s height=%s',
              o.representationId,
              String(i.$.width),
              String(i.$.height),
              String(a.$.id),
              String(a.$.width),
              String(a.$.height),
            );
          var s = (n = d(i.$.frameRate)) != null ? n : d(a.$.frameRate);
          return babelHelpers.extends({}, o, {
            frameRate: s,
            height: l.height,
            type: "video",
            width: l.width,
          });
        },
        w = function (t) {
          return babelHelpers.extends({}, D(t), { type: "audio" });
        },
        A = function (t) {
          return babelHelpers.extends({}, D(t), { type: "application" });
        },
        F = function (t) {
          if (t.$.mimeType != null) return t.$.mimeType;
          var e = t.Representation;
          return e && e.length > 0 && e[0].$.mimeType != null
            ? e[0].$.mimeType
            : null;
        },
        O = T.findLast(function (e) {
          return e.Representation != null && e.Representation.length > 0;
        }),
        B = T.map(function (e) {
          return e.$.id;
        }),
        W = new Set(B).size === B.length,
        q = T.reduce(function (n, r, o) {
          var a,
            i,
            l,
            s = (a = W ? r.$.id : void 0) != null ? a : "id-mpdas-" + o,
            c = r === O,
            d = (i = F(r)) != null ? i : "",
            m = ((l = r.Representation) != null ? l : []).map(function (e, t) {
              return {
                adaptationSetId: s,
                adaptationSetMimeType: d,
                adaptationSetXml: r,
                representationIndex: t,
                representationXml: e,
              };
            }),
            _ = {
              adaptationSetId: s,
              adaptationSetIsLastNonEmpty: c,
              adaptationSetMimeType: d,
            },
            f;
          if (d.indexOf("video") === 0) {
            if (!p) {
              var g = m;
              if ($) {
                var h = m.filter(function (e) {
                  return P(e) != null;
                });
                h.length > 0 &&
                  h.length < m.length &&
                  (e.config.isLivePlayback ||
                    e.logging.log(e, {
                      error: u(
                        e,
                        t,
                        "IgnoredVideoRepresentationsWithoutWidthHeight",
                        'Ignored video Representations without valid width/height in AdaptationSet id="%s": %s',
                        s,
                        m
                          .filter(function (e) {
                            return !h.includes(e);
                          })
                          .map(function (e) {
                            return (
                              String(e.representationXml.$.id) +
                              ":" +
                              String(e.representationXml.$.width) +
                              "x" +
                              String(e.representationXml.$.height)
                            );
                          })
                          .join(","),
                      ),
                      type: "generic_error_as_warning",
                    }),
                  (g = h));
              }
              f = babelHelpers.extends({}, _, {
                representations: g.map(M),
                type: "video",
              });
            }
          } else
            d.indexOf("audio") === 0
              ? (f = babelHelpers.extends({}, _, {
                  representations: m.map(w),
                  type: "audio",
                }))
              : d.indexOf("application") === 0
                ? (f = babelHelpers.extends({}, _, {
                    representations: m.map(A),
                    type: "application",
                  }))
                : e.logging.log(e, {
                    error: u(
                      e,
                      t,
                      "UnsupportedAdaptationSet",
                      'Unsupported mimeType="%s" resolved for AdaptationSet id="%s" at index %s',
                      s,
                      d,
                      String(o),
                    ),
                    type: "generic_error_as_warning",
                  });
          return (f && n.push(f), n);
        }, []),
        U = q
          .map(function (e) {
            var t = e.representations;
            return t;
          })
          .flat();
      if (U.length === 0)
        throw u(
          e,
          t,
          "NoRepresentations",
          "Not found any Representations in any of %s AdaptationSets",
          String(q.length),
        );
      var V = q.map(function (e) {
        return e.adaptationSetId;
      });
      if (new Set(V).size < V.length)
        throw u(
          e,
          t,
          "NonUniqueAdaptationSetID",
          "AdaptationSet ids are required to be unique within the manifest: %s",
          V.join(","),
        );
      var H = U.map(function (e) {
        return e.representationId;
      });
      if (new Set(H).size < H.length)
        throw u(
          e,
          t,
          "NonUniqueRepresentationID",
          "Representation ids are required to be unique within the manifest: %s",
          H.join(","),
        );
      var G = p
          ? null
          : L(
              e,
              q
                .map(function (e) {
                  return e.type === "video" ? e : null;
                })
                .filter(Boolean),
            ),
        z = L(
          e,
          q
            .map(function (e) {
              return e.type === "audio" ? e : null;
            })
            .filter(Boolean),
        ),
        j = q
          .map(function (e) {
            return e.type === "application" ? e.representations : null;
          })
          .filter(Boolean)
          .flat();
      if (G != null) {
        if (G.selected.length === 0)
          throw G.ignored.size > 0
            ? u(
                e,
                t,
                "AllVideoRepresentationsIgnored",
                "All video representations ignored: %s",
                Array.from(G.ignored.entries())
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return t.representationId + ":" + n;
                  })
                  .join("; "),
              )
            : u(
                e,
                t,
                "NoVideoRepresentations",
                "Not found any video representations, found: %s",
                U.map(function (e) {
                  return (
                    e.representationId +
                    ":" +
                    o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyMimeCodecs(e.mimeCodecsParsed)
                  );
                }).join("; "),
              );
        G.ignored.size > 0 &&
          e.logging.log(e, {
            error: u(
              e,
              t,
              "IgnoredVideoRepresentations",
              "Some video representations ignored: %s",
              Array.from(G.ignored.entries())
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return t.representationId + ":" + n;
                })
                .join("; "),
            ),
            type: "generic_error_as_warning",
          });
      }
      function K(e) {
        return (
          new Set(
            e.map(function (e) {
              return [
                e.mimeCodecsParsed.contentType,
                e.mimeCodecsParsed.containerType,
                e.mimeCodecsParsed.codecFamily,
              ].join("/");
            }),
          ).size > 1
        );
      }
      var Q = K((i = G == null ? void 0 : G.selected) != null ? i : []),
        X = K(z.selected);
      return {
        audioOnly: p,
        createdAt: e.host.clock(),
        debugXml: e.config.debugViz || e.config.debugLog ? k : void 0,
        manifestRepresentations: {
          application: j,
          audio: z.selected,
          video: (l = G == null ? void 0 : G.selected) != null ? l : [],
        },
        metadata: {
          manifestIdentifier: (s = k.$.FBManifestIdentifier) != null ? s : null,
          manifestIsLiveTemplated: k.$.FBIsLiveTemplated === "true",
          manifestIsMixedCodecAudio: X,
          manifestIsMixedCodecVideo: Q,
          manifestType: k.$.type === "dynamic" ? "dynamic" : "static",
          minBufferTimeSec: m(k.$.minBufferTime),
          minimumUpdatePeriodMs: c(k.$.minimumUpdatePeriod),
          suggestedPresentationDelaySec: m(k.$.suggestedPresentationDelay),
        },
      };
    }
    function _(e, t, n, r) {
      var o,
        a = ((o = r.S) != null ? o : []).map(function (r, o) {
          return {
            d: v(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@d", r.$.d, C),
            id:
              r.$.id == null
                ? void 0
                : v(
                    e,
                    t,
                    n,
                    "SegmentTimeline>S[" + (o + 1) + "]>@id",
                    r.$.id,
                    b,
                  ),
            r:
              r.$.r == null
                ? 0
                : v(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@r", r.$.r, b),
            t: v(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@t", r.$.t, b),
          };
        }),
        i = a.filter(function (e) {
          return e.id != null;
        });
      if (i.length > 0 && i.length < a.length)
        throw u(
          e,
          t,
          "SegmentTimelineMissingSomeIds",
          'Representation id="%s" SegmentTimeline should either have or not have @id on every S tag; found on %s out of %s tags',
          n,
          i.length,
          a.length,
        );
      return a;
    }
    function f(e, t, n, r) {
      var o,
        a = r.$.FBPredictedMedia;
      if (a == null || a === "") return null;
      var i =
          r.$.FBPredictedMediaStartNumber != null
            ? v(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBPredictedMediaStartNumber",
                r.$.FBPredictedMediaStartNumber,
                b,
              )
            : null,
        l =
          r.$.FBPredictedMediaEndNumber != null
            ? v(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBPredictedMediaEndNumber",
                r.$.FBPredictedMediaEndNumber,
                b,
              )
            : null,
        s =
          e.config.enableLive &&
          (((o = t.MPD) == null || (o = o[0]) == null ? void 0 : o.$.type) ===
            "dynamic" ||
            e.config.isLivePlayback),
        u = s
          ? g(r.$.FBAverageDuration)
          : r.$.FBAverageDuration != null
            ? v(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBAverageDuration",
                r.$.FBAverageDuration,
                C,
              )
            : null;
      return {
        endNumber: l,
        segmentAverageDuration: u,
        segmentURLTemplate: h(a),
        startNumber: i,
      };
    }
    function g(e) {
      var t = e != null && e.trim() !== "" ? Number(e) : NaN;
      return Number.isSafeInteger(t) && t > 0 ? t : null;
    }
    function h(e) {
      if (/[?&]_nc_sc=/.test(e)) return e;
      var t = e.includes("?") ? "&" : "?";
      return "" + e + t + "_nc_sc=1";
    }
    function y(e) {
      return Number.isFinite(e)
        ? null
        : 'not a finite integer, expected format: "123"';
    }
    function C(e) {
      return e > 0 ? null : "not a positive integer";
    }
    function b(e) {
      return e >= 0 ? null : "not a positive integer or zero";
    }
    function v(e, t, n, r, o, a) {
      var i = parseInt(String(o), 10),
        l = y(i);
      if ((l == null && a != null && (l = a(i)), l != null))
        throw u(
          e,
          t,
          "VideoPlayerNextgendashManifestParserInvalidNumberInteger[" + r + "]",
          'Representation id="%s" %s "%s" is missing or invalid (' + l + ")",
          n,
          r,
          o,
        );
      return i;
    }
    function S(e, t, n, r, o) {
      var a = o == null ? void 0 : o.split("-").map(Number);
      if (a == null || a.length !== 2)
        throw u(
          e,
          t,
          "InvalidRange[" + r + "]",
          'Representation id="%s" %s "%s" is missing or invalid (expected format: "start-end")',
          n,
          r,
          o,
        );
      return [a[0], a[1]];
    }
    function R(e, t) {
      return e + '; codecs="' + t + '"';
    }
    function L(e, t) {
      var n = [],
        r = new Map();
      return (
        t.forEach(function (t) {
          for (var a of t.representations) {
            if (
              a.abrPolicyTags.includes("avoid_on_abr") &&
              !t.adaptationSetIsLastNonEmpty
            ) {
              r.set(a, "avoid_on_abr");
              continue;
            }
            if (
              !e.host.mediaSourceIsTypeSupported(
                e,
                a.mimeCodecsParsed.mimeCodecs,
              )
            ) {
              r.set(a, "codec_not_supported");
              continue;
            }
            if (
              e.config.isTypeSupportedIncludeContentAttributes &&
              a.type === "video" &&
              !e.host.mediaSourceIsTypeSupported(
                e,
                o(
                  "VideoPlayerNextgendashMediaUtils",
                ).appendContentAttributesToMimeCodecs(
                  a.mimeCodecsParsed.mimeCodecs,
                  a.width,
                  a.height,
                ),
              )
            ) {
              r.set(a, "codec_not_supported");
              continue;
            }
            n.push(a);
          }
        }),
        { ignored: r, selected: n }
      );
    }
    function E(e) {
      var t = e.height,
        n = e.qualityLabel;
      return n == null || n === "" ? String(t) + "p" : n != null ? n : "";
    }
    function k(e) {
      var t = e.lang,
        n = e.role,
        r = t != null ? t : "Default";
      return n != null ? r + " - " + n : r;
    }
    ((l.makeVideoPlayerNextgendashOpaqueManifestRepresentationId = e),
      (l.unopaqueVideoPlayerNextgendashManifestRepresentationId = s),
      (l.internal_parseFrameRate = d),
      (l.internal_parseIso8601DurationSec = m),
      (l.parseMPD = p),
      (l.internal_parseFBAverageDuration = g),
      (l.getDisplayLabelFromVideoRepresentation = E),
      (l.getDisplayLabelFromAudioRepresentation = k));
  },
  98,
);
