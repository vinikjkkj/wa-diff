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
      var y = (a = h.Period) == null ? void 0 : a[0];
      if (!y) throw u(e, t, "NoPeriod", "Missing MPD>Period[1]");
      var k = y.AdaptationSet;
      if (!k || k.length <= 0)
        throw u(e, t, "NoAdaptationSet", "Missing MPD>Period[1]>AdaptationSet");
      if (
        k.some(function (e) {
          return e.Representation == null || e.Representation.length === 0;
        })
      )
        throw u(
          e,
          t,
          "SomeEmptyAdaptationSets",
          "Some AdaptationSets contain no Representations",
        );
      var I = function (r) {
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
            y,
            E,
            k,
            I,
            T = r.adaptationSetId,
            D = r.adaptationSetMimeType,
            x = r.adaptationSetXml,
            $ = r.representationIndex,
            P = r.representationXml,
            N = (n = P.$.id) != null ? n : T + "-#" + $,
            M =
              (a = (i = P.$.mimeType) != null ? i : x.$.mimeType) != null
                ? a
                : "";
          if (M === "" || M !== D) {
            var w, A;
            throw u(
              e,
              t,
              "MimeTypeMismatch",
              'Representation id="%s" Representation>@mimeType="%s" and AdaptationSet>@mimeType="%s" mismatch',
              N,
              (w = P.$.mimeType) != null ? w : "",
              (A = x.$.mimeType) != null ? A : "",
            );
          }
          var F =
            (l = (s = P.$.codecs) != null ? s : x.$.codecs) != null ? l : "";
          if (F === "") {
            var O, B;
            e.logging.log(e, {
              error: u(
                e,
                t,
                "CodecsMissingOrEmpty",
                'Representation id="%s" Representation>@codecs="%s" and AdaptationSet>@codecs="%s" is missing or empty',
                N,
                (O = P.$.codecs) != null ? O : "",
                (B = x.$.codecs) != null ? B : "",
              ),
              type: "generic_error_as_warning",
            });
          }
          var W = o("VideoPlayerNextgendashMediaUtils").parseMimeCodecs(
            L(M, F),
          );
          if (
            W.contentType === "" ||
            W.contentType === "unknown" ||
            W.containerType === ""
          ) {
            var q, U, V, H;
            throw u(
              e,
              t,
              "MimeCodecsParsedUnexpected",
              'Representation id="%s" missing contentType or containerType: %s; AdaptationSet>@mimeType="%s", AdaptationSet>@codecs="%s", Representation>@mimeType="%s", Representation>@codecs="%s"',
              N,
              JSON.stringify(W),
              (q = x.$.mimeType) != null ? q : "",
              (U = x.$.codecs) != null ? U : "",
              (V = P.$.mimeType) != null ? V : "",
              (H = P.$.codecs) != null ? H : "",
            );
          }
          var G =
              x.$.FBVariantKey === "und"
                ? null
                : (c = x.$.FBVariantKey) != null
                  ? c
                  : null,
            z = x.$.lang === "und" ? null : (d = x.$.lang) != null ? d : null,
            j =
              (m =
                (p = x.Role) == null || (p = p[0]) == null
                  ? void 0
                  : p.$.value) != null
                ? m
                : null,
            K = Number(P.$.bandwidth);
          if (!Number.isFinite(K) || K <= 0)
            throw u(
              e,
              t,
              "RepresentationBandwidthInvalid",
              'Representation id="%s" Representation>@bandwidth is missing or invalid: %s',
              N,
              P.$.bandwidth,
            );
          var Q = P.$.FBPlaybackResolutionMos,
            X = P.$.FBPlaybackResolutionCsvqm,
            Y = e.config.cacheQualityScoreInRepresentation,
            J =
              Y && Q != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(Q)
                : null,
            Z =
              Y && X != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(X)
                : null,
            ee = P.$.FBQualityLabel,
            te = ((h = P.$.FBAbrPolicyTags) != null ? h : "")
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e !== "";
              }),
            ne =
              (y =
                (E = P.BaseURL) == null || (E = E[0]) == null ? void 0 : E._) !=
              null
                ? y
                : g;
          if (ne == null)
            throw u(
              e,
              t,
              "RepresentationBaseURLMissingAndNoFallback",
              'Representation id="%s" Representation>BaseURL is missing and no fallback was provided',
              N,
            );
          var re,
            oe = (k = P.SegmentBase) == null ? void 0 : k[0],
            ae = (I = P.SegmentTemplate) == null ? void 0 : I[0];
          if (oe != null) {
            var ie,
              le = (ie = oe.Initialization) == null ? void 0 : ie[0];
            if (le == null)
              throw u(
                e,
                t,
                "SegmentBaseInitializationMissing",
                'Representation id="%s" SegmentBase>Initialization is missing',
                N,
              );
            var se = R(
                e,
                t,
                N,
                "SegmentBase>Initialization>@range",
                le.$.range,
              ),
              ue = R(e, t, N, "SegmentBase>@indexRange", oe.$.indexRange);
            if (oe.$.indexRangeExact === "false")
              throw u(
                e,
                t,
                "SegmentBaseIndexRangeExactFalseUnsupported",
                'Representation id="%s" SegmentBase>@indexRangeExact="false" is unsupported',
                N,
              );
            var ce = S(e, t, N, oe);
            re = babelHelpers.extends(
              {
                baseURL: ne,
                indexByteRange: o(
                  "VideoPlayerNextgendashMediaUtils",
                ).makeByteRangeFromStartEndByteIndex(e, ue[0], ue[1]),
                initByteRange: o(
                  "VideoPlayerNextgendashMediaUtils",
                ).makeByteRangeFromStartEndByteIndex(e, se[0], se[1]),
              },
              ce != null ? { presentationTimeOffsetSec: ce } : null,
              { type: "SegmentBase" },
            );
          } else if (ae != null) {
            var de,
              me = ae.$.media;
            if (me == null)
              throw u(
                e,
                t,
                "SegmentTemplateMediaMissing",
                'Representation id="%s" SegmentTemplate>@media is missing',
                N,
              );
            var pe = ae.$.initialization;
            if (pe == null)
              throw u(
                e,
                t,
                "SegmentTemplateInitializationMissing",
                'Representation id="%s" SegmentTemplate>@initialization is missing',
                N,
              );
            var _e = v(
                e,
                t,
                N,
                "SegmentTemplate>@timescale",
                ae.$.timescale,
                C,
              ),
              fe =
                ae.$.startNumber != null
                  ? v(
                      e,
                      t,
                      N,
                      "SegmentTemplate>@startNumber",
                      ae.$.startNumber,
                      b,
                    )
                  : null,
              ge = (de = ae.SegmentTimeline) == null ? void 0 : de[0];
            if (ge == null)
              throw u(
                e,
                t,
                "SegmentTimelineMissing",
                'Representation id="%s" SegmentTemplate>SegmentTimeline is missing',
                N,
              );
            var he = _(e, t, N, ge),
              ye = f(e, t, N, ge);
            re = babelHelpers.extends(
              { baseURL: ne, initURL: pe, segmentTimeline: he },
              ye != null ? { segmentTimelinePredictive: ye } : null,
              {
                segmentURLTemplate: me,
                startNumber: fe,
                timescale: _e,
                type: "SegmentTemplate",
              },
            );
          } else
            throw u(
              e,
              t,
              "SegmentsInfoInvalid",
              'Representation id="%s" SegmentBase and SegmentTemplate are missing',
              N,
            );
          return {
            abrPolicyTags: te,
            bandwidth: K,
            lang: z,
            mimeCodecsParsed: W,
            playbackResolutionCsvqmScoreCurve: X,
            playbackResolutionCsvqmScoreCurveParsed: Z,
            playbackResolutionMosScoreCurve: Q,
            playbackResolutionMosScoreCurveParsed: J,
            qualityLabel: ee,
            representationId: N,
            role: j,
            segmentsInfo: re,
            variantKey: G,
          };
        },
        T = function (t, n) {
          var e = Number.parseInt(t != null ? t : "", 10),
            r = Number.parseInt(n != null ? n : "", 10);
          return Number.isSafeInteger(e) &&
            Number.isSafeInteger(r) &&
            e > 0 &&
            r > 0
            ? { height: r, width: e }
            : null;
        },
        D =
          e.config.enableLive &&
          (h.$.type === "dynamic" || e.config.isLivePlayback),
        x = function (t) {
          var e,
            n = t.adaptationSetXml,
            r = t.representationXml;
          return (e = T(r.$.width, r.$.height)) != null
            ? e
            : T(n.$.width, n.$.height);
        },
        $ = function (t) {
          var e,
            n = t.adaptationSetXml;
          return (e = x(t)) != null
            ? e
            : D
              ? T(n.$.maxWidth, n.$.maxHeight)
              : null;
        },
        P = function (r) {
          var n,
            o = I(r),
            a = r.adaptationSetXml,
            i = r.representationXml,
            l = $(r);
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
        N = function (t) {
          return babelHelpers.extends({}, I(t), { type: "audio" });
        },
        M = function (t) {
          return babelHelpers.extends({}, I(t), { type: "application" });
        },
        w = function (t) {
          if (t.$.mimeType != null) return t.$.mimeType;
          var e = t.Representation;
          return e && e.length > 0 && e[0].$.mimeType != null
            ? e[0].$.mimeType
            : null;
        },
        A = k.findLast(function (e) {
          return e.Representation != null && e.Representation.length > 0;
        }),
        F = k.map(function (e) {
          return e.$.id;
        }),
        O = new Set(F).size === F.length,
        B = k.reduce(function (n, r, o) {
          var a,
            i,
            l,
            s = (a = O ? r.$.id : void 0) != null ? a : "id-mpdas-" + o,
            c = r === A,
            d = (i = w(r)) != null ? i : "",
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
              if (D) {
                var h = m.filter(function (e) {
                  return x(e) != null;
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
                representations: g.map(P),
                type: "video",
              });
            }
          } else
            d.indexOf("audio") === 0
              ? (f = babelHelpers.extends({}, _, {
                  representations: m.map(N),
                  type: "audio",
                }))
              : d.indexOf("application") === 0
                ? (f = babelHelpers.extends({}, _, {
                    representations: m.map(M),
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
        W = B.map(function (e) {
          var t = e.representations;
          return t;
        }).flat();
      if (W.length === 0)
        throw u(
          e,
          t,
          "NoRepresentations",
          "Not found any Representations in any of %s AdaptationSets",
          String(B.length),
        );
      var q = B.map(function (e) {
        return e.adaptationSetId;
      });
      if (new Set(q).size < q.length)
        throw u(
          e,
          t,
          "NonUniqueAdaptationSetID",
          "AdaptationSet ids are required to be unique within the manifest: %s",
          q.join(","),
        );
      var U = W.map(function (e) {
        return e.representationId;
      });
      if (new Set(U).size < U.length)
        throw u(
          e,
          t,
          "NonUniqueRepresentationID",
          "Representation ids are required to be unique within the manifest: %s",
          U.join(","),
        );
      var V = p
          ? null
          : E(
              e,
              B.map(function (e) {
                return e.type === "video" ? e : null;
              }).filter(Boolean),
            ),
        H = E(
          e,
          B.map(function (e) {
            return e.type === "audio" ? e : null;
          }).filter(Boolean),
        ),
        G = B.map(function (e) {
          return e.type === "application" ? e.representations : null;
        })
          .filter(Boolean)
          .flat();
      if (V != null) {
        if (V.selected.length === 0)
          throw V.ignored.size > 0
            ? u(
                e,
                t,
                "AllVideoRepresentationsIgnored",
                "All video representations ignored: %s",
                Array.from(V.ignored.entries())
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
                W.map(function (e) {
                  return (
                    e.representationId +
                    ":" +
                    o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyMimeCodecs(e.mimeCodecsParsed)
                  );
                }).join("; "),
              );
        V.ignored.size > 0 &&
          e.logging.log(e, {
            error: u(
              e,
              t,
              "IgnoredVideoRepresentations",
              "Some video representations ignored: %s",
              Array.from(V.ignored.entries())
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
      function z(e) {
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
      var j = z((i = V == null ? void 0 : V.selected) != null ? i : []),
        K = z(H.selected);
      return {
        audioOnly: p,
        createdAt: e.host.clock(),
        debugXml: e.config.debugViz || e.config.debugLog ? h : void 0,
        manifestRepresentations: {
          application: G,
          audio: H.selected,
          video: (l = V == null ? void 0 : V.selected) != null ? l : [],
        },
        metadata: {
          manifestIdentifier: (s = h.$.FBManifestIdentifier) != null ? s : null,
          manifestIsLiveTemplated: h.$.FBIsLiveTemplated === "true",
          manifestIsMixedCodecAudio: K,
          manifestIsMixedCodecVideo: j,
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
    function S(e, t, n, r) {
      if (!e.config.applyManifestPresentationTimeOffset) return null;
      var o = r.$,
        a = o.presentationTimeOffset,
        i = o.timescale;
      return a == null
        ? null
        : i == null ||
            !/^\d+$/.test(a) ||
            !/^[1-9]\d*$/.test(i) ||
            !Number.isSafeInteger(Number(a)) ||
            !Number.isSafeInteger(Number(i))
          ? (e.logging.log(e, {
              error: u(
                e,
                t,
                "InvalidSegmentBasePresentationTimeOffset",
                'Representation id="%s" SegmentBase@presentationTimeOffset="%s" with @timescale="%s" is ignored',
                n,
                a,
                String(i),
              ),
              type: "generic_error_as_warning",
            }),
            null)
          : Number(a) / Number(i);
    }
    function R(e, t, n, r, o) {
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
    function L(e, t) {
      return e + '; codecs="' + t + '"';
    }
    function E(e, t) {
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
    function k(e) {
      var t = e.height,
        n = e.qualityLabel;
      return n == null || n === "" ? String(t) + "p" : n != null ? n : "";
    }
    function I(e) {
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
      (l.getDisplayLabelFromVideoRepresentation = k),
      (l.getDisplayLabelFromAudioRepresentation = I));
  },
  98,
);
