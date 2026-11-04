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
        h = (r = t.MPD) == null ? void 0 : r[0];
      if (!h) throw u(e, t, "NoMPD", "Missing MPD root");
      var L = (a = h.Period) == null ? void 0 : a[0];
      if (!L) throw u(e, t, "NoPeriod", "Missing MPD>Period[1]");
      var E = L.AdaptationSet;
      if (!E || E.length <= 0)
        throw u(e, t, "NoAdaptationSet", "Missing MPD>Period[1]>AdaptationSet");
      if (
        E.some(function (e) {
          return e.Representation == null || e.Representation.length === 0;
        })
      )
        throw u(
          e,
          t,
          "SomeEmptyAdaptationSets",
          "Some AdaptationSets contain no Representations",
        );
      var k = function (r) {
          var n,
            a,
            i,
            l,
            s,
            c,
            d,
            m,
            p,
            h,
            R,
            L,
            E,
            k,
            I = r.adaptationSetId,
            T = r.adaptationSetMimeType,
            D = r.adaptationSetXml,
            x = r.representationIndex,
            $ = r.representationXml,
            P = (n = $.$.id) != null ? n : I + "-#" + x,
            N =
              (a = (i = $.$.mimeType) != null ? i : D.$.mimeType) != null
                ? a
                : "";
          if (N === "" || N !== T) {
            var M, w;
            throw u(
              e,
              t,
              "MimeTypeMismatch",
              'Representation id="%s" Representation>@mimeType="%s" and AdaptationSet>@mimeType="%s" mismatch',
              P,
              (M = $.$.mimeType) != null ? M : "",
              (w = D.$.mimeType) != null ? w : "",
            );
          }
          var A =
            (l = (s = $.$.codecs) != null ? s : D.$.codecs) != null ? l : "";
          if (A === "") {
            var F, O;
            e.logging.log(e, {
              error: u(
                e,
                t,
                "CodecsMissingOrEmpty",
                'Representation id="%s" Representation>@codecs="%s" and AdaptationSet>@codecs="%s" is missing or empty',
                P,
                (F = $.$.codecs) != null ? F : "",
                (O = D.$.codecs) != null ? O : "",
              ),
              type: "generic_error_as_warning",
            });
          }
          var B = o("VideoPlayerNextgendashMediaUtils").parseMimeCodecs(
            S(N, A),
          );
          if (
            B.contentType === "" ||
            B.contentType === "unknown" ||
            B.containerType === ""
          ) {
            var W, q, U, V;
            throw u(
              e,
              t,
              "MimeCodecsParsedUnexpected",
              'Representation id="%s" missing contentType or containerType: %s; AdaptationSet>@mimeType="%s", AdaptationSet>@codecs="%s", Representation>@mimeType="%s", Representation>@codecs="%s"',
              P,
              JSON.stringify(B),
              (W = D.$.mimeType) != null ? W : "",
              (q = D.$.codecs) != null ? q : "",
              (U = $.$.mimeType) != null ? U : "",
              (V = $.$.codecs) != null ? V : "",
            );
          }
          var H =
              D.$.FBVariantKey === "und"
                ? null
                : (c = D.$.FBVariantKey) != null
                  ? c
                  : null,
            G = D.$.lang === "und" ? null : (d = D.$.lang) != null ? d : null,
            z =
              (m =
                (p = D.Role) == null || (p = p[0]) == null
                  ? void 0
                  : p.$.value) != null
                ? m
                : null,
            j = Number($.$.bandwidth);
          if (!Number.isFinite(j) || j <= 0)
            throw u(
              e,
              t,
              "RepresentationBandwidthInvalid",
              'Representation id="%s" Representation>@bandwidth is missing or invalid: %s',
              P,
              $.$.bandwidth,
            );
          var K = $.$.FBPlaybackResolutionMos,
            Q = $.$.FBPlaybackResolutionCsvqm,
            X = e.config.cacheQualityScoreInRepresentation,
            Y =
              X && K != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(K)
                : null,
            J =
              X && Q != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(Q)
                : null,
            Z = $.$.FBQualityLabel,
            ee = ((h = $.$.FBAbrPolicyTags) != null ? h : "")
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e !== "";
              }),
            te =
              (R =
                (L = $.BaseURL) == null || (L = L[0]) == null ? void 0 : L._) !=
              null
                ? R
                : g;
          if (te == null)
            throw u(
              e,
              t,
              "RepresentationBaseURLMissingAndNoFallback",
              'Representation id="%s" Representation>BaseURL is missing and no fallback was provided',
              P,
            );
          var ne,
            re = (E = $.SegmentBase) == null ? void 0 : E[0],
            oe = (k = $.SegmentTemplate) == null ? void 0 : k[0];
          if (re != null) {
            var ae,
              ie = (ae = re.Initialization) == null ? void 0 : ae[0];
            if (ie == null)
              throw u(
                e,
                t,
                "SegmentBaseInitializationMissing",
                'Representation id="%s" SegmentBase>Initialization is missing',
                P,
              );
            var le = v(
                e,
                t,
                P,
                "SegmentBase>Initialization>@range",
                ie.$.range,
              ),
              se = v(e, t, P, "SegmentBase>@indexRange", re.$.indexRange);
            if (re.$.indexRangeExact === "false")
              throw u(
                e,
                t,
                "SegmentBaseIndexRangeExactFalseUnsupported",
                'Representation id="%s" SegmentBase>@indexRangeExact="false" is unsupported',
                P,
              );
            ne = {
              baseURL: te,
              indexByteRange: o(
                "VideoPlayerNextgendashMediaUtils",
              ).makeByteRangeFromStartEndByteIndex(e, se[0], se[1]),
              initByteRange: o(
                "VideoPlayerNextgendashMediaUtils",
              ).makeByteRangeFromStartEndByteIndex(e, le[0], le[1]),
              type: "SegmentBase",
            };
          } else if (oe != null) {
            var ue,
              ce = oe.$.media;
            if (ce == null)
              throw u(
                e,
                t,
                "SegmentTemplateMediaMissing",
                'Representation id="%s" SegmentTemplate>@media is missing',
                P,
              );
            var de = oe.$.initialization;
            if (de == null)
              throw u(
                e,
                t,
                "SegmentTemplateInitializationMissing",
                'Representation id="%s" SegmentTemplate>@initialization is missing',
                P,
              );
            var me = b(
                e,
                t,
                P,
                "SegmentTemplate>@timescale",
                oe.$.timescale,
                y,
              ),
              pe =
                oe.$.startNumber != null
                  ? b(
                      e,
                      t,
                      P,
                      "SegmentTemplate>@startNumber",
                      oe.$.startNumber,
                      C,
                    )
                  : null,
              _e = (ue = oe.SegmentTimeline) == null ? void 0 : ue[0];
            if (_e == null)
              throw u(
                e,
                t,
                "SegmentTimelineMissing",
                'Representation id="%s" SegmentTemplate>SegmentTimeline is missing',
                P,
              );
            var fe = _(e, t, P, _e),
              ge = f(e, t, P, _e);
            ne = babelHelpers.extends(
              { baseURL: te, initURL: de, segmentTimeline: fe },
              ge != null ? { segmentTimelinePredictive: ge } : null,
              {
                segmentURLTemplate: ce,
                startNumber: pe,
                timescale: me,
                type: "SegmentTemplate",
              },
            );
          } else
            throw u(
              e,
              t,
              "SegmentsInfoInvalid",
              'Representation id="%s" SegmentBase and SegmentTemplate are missing',
              P,
            );
          return {
            abrPolicyTags: ee,
            bandwidth: j,
            lang: G,
            mimeCodecsParsed: B,
            playbackResolutionCsvqmScoreCurve: Q,
            playbackResolutionCsvqmScoreCurveParsed: J,
            playbackResolutionMosScoreCurve: K,
            playbackResolutionMosScoreCurveParsed: Y,
            qualityLabel: Z,
            representationId: P,
            role: z,
            segmentsInfo: ne,
            variantKey: H,
          };
        },
        I = function (t, n) {
          var e = Number.parseInt(t != null ? t : "", 10),
            r = Number.parseInt(n != null ? n : "", 10);
          return Number.isSafeInteger(e) &&
            Number.isSafeInteger(r) &&
            e > 0 &&
            r > 0
            ? { height: r, width: e }
            : null;
        },
        T = function (r) {
          var n,
            o = k(r),
            a = r.adaptationSetXml,
            i = r.representationXml,
            l = I(i.$.width, i.$.height),
            s = I(a.$.width, a.$.height),
            c = l != null ? l : s;
          if (c == null)
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
          var m = (n = d(i.$.frameRate)) != null ? n : d(a.$.frameRate);
          return babelHelpers.extends({}, o, {
            frameRate: m,
            height: c.height,
            type: "video",
            width: c.width,
          });
        },
        D = function (t) {
          return babelHelpers.extends({}, k(t), { type: "audio" });
        },
        x = function (t) {
          return babelHelpers.extends({}, k(t), { type: "application" });
        },
        $ = function (t) {
          if (t.$.mimeType != null) return t.$.mimeType;
          var e = t.Representation;
          return e && e.length > 0 && e[0].$.mimeType != null
            ? e[0].$.mimeType
            : null;
        },
        P = E.findLast(function (e) {
          return e.Representation != null && e.Representation.length > 0;
        }),
        N = E.map(function (e) {
          return e.$.id;
        }),
        M = new Set(N).size === N.length,
        w = E.reduce(function (n, r, o) {
          var a,
            i,
            l,
            s = (a = M ? r.$.id : void 0) != null ? a : "id-mpdas-" + o,
            c = r === P,
            d = (i = $(r)) != null ? i : "",
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
          return (
            d.indexOf("video") === 0
              ? p ||
                (f = babelHelpers.extends({}, _, {
                  representations: m.map(T),
                  type: "video",
                }))
              : d.indexOf("audio") === 0
                ? (f = babelHelpers.extends({}, _, {
                    representations: m.map(D),
                    type: "audio",
                  }))
                : d.indexOf("application") === 0
                  ? (f = babelHelpers.extends({}, _, {
                      representations: m.map(x),
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
                    }),
            f && n.push(f),
            n
          );
        }, []),
        A = w
          .map(function (e) {
            var t = e.representations;
            return t;
          })
          .flat();
      if (A.length === 0)
        throw u(
          e,
          t,
          "NoRepresentations",
          "Not found any Representations in any of %s AdaptationSets",
          String(w.length),
        );
      var F = w.map(function (e) {
        return e.adaptationSetId;
      });
      if (new Set(F).size < F.length)
        throw u(
          e,
          t,
          "NonUniqueAdaptationSetID",
          "AdaptationSet ids are required to be unique within the manifest: %s",
          F.join(","),
        );
      var O = A.map(function (e) {
        return e.representationId;
      });
      if (new Set(O).size < O.length)
        throw u(
          e,
          t,
          "NonUniqueRepresentationID",
          "Representation ids are required to be unique within the manifest: %s",
          O.join(","),
        );
      var B = p
          ? null
          : R(
              e,
              w
                .map(function (e) {
                  return e.type === "video" ? e : null;
                })
                .filter(Boolean),
            ),
        W = R(
          e,
          w
            .map(function (e) {
              return e.type === "audio" ? e : null;
            })
            .filter(Boolean),
        ),
        q = w
          .map(function (e) {
            return e.type === "application" ? e.representations : null;
          })
          .filter(Boolean)
          .flat();
      if (B != null) {
        if (B.selected.length === 0)
          throw B.ignored.size > 0
            ? u(
                e,
                t,
                "AllVideoRepresentationsIgnored",
                "All video representations ignored: %s",
                Array.from(B.ignored.entries())
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
                A.map(function (e) {
                  return (
                    e.representationId +
                    ":" +
                    o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyMimeCodecs(e.mimeCodecsParsed)
                  );
                }).join("; "),
              );
        B.ignored.size > 0 &&
          e.logging.log(e, {
            error: u(
              e,
              t,
              "IgnoredVideoRepresentations",
              "Some video representations ignored: %s",
              Array.from(B.ignored.entries())
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
      function U(e) {
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
      var V = U((i = B == null ? void 0 : B.selected) != null ? i : []),
        H = U(W.selected);
      return {
        audioOnly: p,
        createdAt: e.host.clock(),
        debugXml: e.config.debugViz || e.config.debugLog ? h : void 0,
        manifestRepresentations: {
          application: q,
          audio: W.selected,
          video: (l = B == null ? void 0 : B.selected) != null ? l : [],
        },
        metadata: {
          manifestIdentifier: (s = h.$.FBManifestIdentifier) != null ? s : null,
          manifestIsLiveTemplated: h.$.FBIsLiveTemplated === "true",
          manifestIsMixedCodecAudio: H,
          manifestIsMixedCodecVideo: V,
          manifestType: h.$.type === "dynamic" ? "dynamic" : "static",
          minBufferTimeSec: m(h.$.minBufferTime),
          minimumUpdatePeriodMs: c(h.$.minimumUpdatePeriod),
          suggestedPresentationDelaySec: m(h.$.suggestedPresentationDelay),
        },
      };
    }
    function _(e, t, n, r) {
      var o,
        a = ((o = r.S) != null ? o : []).map(function (r, o) {
          return {
            d: b(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@d", r.$.d, y),
            id:
              r.$.id == null
                ? void 0
                : b(
                    e,
                    t,
                    n,
                    "SegmentTimeline>S[" + (o + 1) + "]>@id",
                    r.$.id,
                    C,
                  ),
            r:
              r.$.r == null
                ? 0
                : b(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@r", r.$.r, C),
            t: b(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@t", r.$.t, C),
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
      var o = r.$.FBPredictedMedia;
      if (o == null || o === "") return null;
      var a =
          r.$.FBPredictedMediaStartNumber != null
            ? b(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBPredictedMediaStartNumber",
                r.$.FBPredictedMediaStartNumber,
                C,
              )
            : null,
        i =
          r.$.FBPredictedMediaEndNumber != null
            ? b(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBPredictedMediaEndNumber",
                r.$.FBPredictedMediaEndNumber,
                C,
              )
            : null,
        l =
          r.$.FBAverageDuration != null
            ? b(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBAverageDuration",
                r.$.FBAverageDuration,
                y,
              )
            : null;
      return {
        endNumber: i,
        segmentAverageDuration: l,
        segmentURLTemplate: g(o),
        startNumber: a,
      };
    }
    function g(e) {
      if (/[?&]_nc_sc=/.test(e)) return e;
      var t = e.includes("?") ? "&" : "?";
      return "" + e + t + "_nc_sc=1";
    }
    function h(e) {
      return Number.isFinite(e)
        ? null
        : 'not a finite integer, expected format: "123"';
    }
    function y(e) {
      return e > 0 ? null : "not a positive integer";
    }
    function C(e) {
      return e >= 0 ? null : "not a positive integer or zero";
    }
    function b(e, t, n, r, o, a) {
      var i = parseInt(String(o), 10),
        l = h(i);
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
    function v(e, t, n, r, o) {
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
    function S(e, t) {
      return e + '; codecs="' + t + '"';
    }
    function R(e, t) {
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
    function L(e) {
      var t = e.height,
        n = e.qualityLabel;
      return n == null || n === "" ? String(t) + "p" : n != null ? n : "";
    }
    function E(e) {
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
      (l.getDisplayLabelFromVideoRepresentation = L),
      (l.getDisplayLabelFromAudioRepresentation = E));
  },
  98,
);
