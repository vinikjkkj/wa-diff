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
        k = y === void 0 ? !1 : y,
        I = (r = t.MPD) == null ? void 0 : r[0];
      if (!I) throw u(e, t, "NoMPD", "Missing MPD root");
      var T = (a = I.Period) == null ? void 0 : a[0];
      if (!T) throw u(e, t, "NoPeriod", "Missing MPD>Period[1]");
      var D = T.AdaptationSet;
      if (!D || D.length <= 0)
        throw u(e, t, "NoAdaptationSet", "Missing MPD>Period[1]>AdaptationSet");
      if (
        D.some(function (e) {
          return e.Representation == null || e.Representation.length === 0;
        })
      )
        throw u(
          e,
          t,
          "SomeEmptyAdaptationSets",
          "Some AdaptationSets contain no Representations",
        );
      var x = function (r) {
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
            E,
            I,
            T,
            D,
            x,
            $ = r.adaptationSetId,
            P = r.adaptationSetMimeType,
            N = r.adaptationSetXml,
            M = r.representationIndex,
            w = r.representationXml,
            A = (n = w.$.id) != null ? n : $ + "-#" + M,
            F =
              (a = (i = w.$.mimeType) != null ? i : N.$.mimeType) != null
                ? a
                : "";
          if (F === "" || F !== P) {
            var O, B;
            throw u(
              e,
              t,
              "MimeTypeMismatch",
              'Representation id="%s" Representation>@mimeType="%s" and AdaptationSet>@mimeType="%s" mismatch',
              A,
              (O = w.$.mimeType) != null ? O : "",
              (B = N.$.mimeType) != null ? B : "",
            );
          }
          var W =
            (l = (s = w.$.codecs) != null ? s : N.$.codecs) != null ? l : "";
          if (W === "") {
            var q, U;
            e.logging.log(e, {
              error: u(
                e,
                t,
                "CodecsMissingOrEmpty",
                'Representation id="%s" Representation>@codecs="%s" and AdaptationSet>@codecs="%s" is missing or empty',
                A,
                (q = w.$.codecs) != null ? q : "",
                (U = N.$.codecs) != null ? U : "",
              ),
              type: "generic_error_as_warning",
            });
          }
          var V = o("VideoPlayerNextgendashMediaUtils").parseMimeCodecs(
            L(F, W),
          );
          if (
            V.contentType === "" ||
            V.contentType === "unknown" ||
            V.containerType === ""
          ) {
            var H, G, z, j;
            throw u(
              e,
              t,
              "MimeCodecsParsedUnexpected",
              'Representation id="%s" missing contentType or containerType: %s; AdaptationSet>@mimeType="%s", AdaptationSet>@codecs="%s", Representation>@mimeType="%s", Representation>@codecs="%s"',
              A,
              JSON.stringify(V),
              (H = N.$.mimeType) != null ? H : "",
              (G = N.$.codecs) != null ? G : "",
              (z = w.$.mimeType) != null ? z : "",
              (j = w.$.codecs) != null ? j : "",
            );
          }
          var K =
              N.$.FBVariantKey === "und"
                ? null
                : (c = N.$.FBVariantKey) != null
                  ? c
                  : null,
            Q = N.$.lang === "und" ? null : (d = N.$.lang) != null ? d : null,
            X =
              (m =
                (p = N.Role) == null || (p = p[0]) == null
                  ? void 0
                  : p.$.value) != null
                ? m
                : null,
            Y = Number(w.$.bandwidth);
          if (!Number.isFinite(Y) || Y <= 0)
            throw u(
              e,
              t,
              "RepresentationBandwidthInvalid",
              'Representation id="%s" Representation>@bandwidth is missing or invalid: %s',
              A,
              w.$.bandwidth,
            );
          var J = w.$.FBPlaybackResolutionMos,
            Z = w.$.FBPlaybackResolutionCsvqm,
            ee = e.config.cacheQualityScoreInRepresentation,
            te =
              ee && J != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(J)
                : null,
            ne =
              ee && Z != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(Z)
                : null,
            re = w.$.FBQualityLabel,
            oe = ((y = w.$.FBAbrPolicyTags) != null ? y : "")
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e !== "";
              }),
            ae =
              (E =
                (I = w.BaseURL) == null || (I = I[0]) == null ? void 0 : I._) !=
              null
                ? E
                : g;
          if (ae == null)
            throw u(
              e,
              t,
              "RepresentationBaseURLMissingAndNoFallback",
              'Representation id="%s" Representation>BaseURL is missing and no fallback was provided',
              A,
            );
          var ie,
            le = (T = w.SegmentBase) == null ? void 0 : T[0],
            se = (D = w.SegmentTemplate) == null ? void 0 : D[0];
          if (le != null) {
            var ue,
              ce = (ue = le.Initialization) == null ? void 0 : ue[0];
            if (ce == null)
              throw u(
                e,
                t,
                "SegmentBaseInitializationMissing",
                'Representation id="%s" SegmentBase>Initialization is missing',
                A,
              );
            var de = R(
                e,
                t,
                A,
                "SegmentBase>Initialization>@range",
                ce.$.range,
              ),
              me = R(e, t, A, "SegmentBase>@indexRange", le.$.indexRange);
            if (le.$.indexRangeExact === "false")
              throw u(
                e,
                t,
                "SegmentBaseIndexRangeExactFalseUnsupported",
                'Representation id="%s" SegmentBase>@indexRangeExact="false" is unsupported',
                A,
              );
            var pe = S(e, t, A, le);
            ie = babelHelpers.extends(
              {
                baseURL: ae,
                indexByteRange: o(
                  "VideoPlayerNextgendashMediaUtils",
                ).makeByteRangeFromStartEndByteIndex(e, me[0], me[1]),
                initByteRange: o(
                  "VideoPlayerNextgendashMediaUtils",
                ).makeByteRangeFromStartEndByteIndex(e, de[0], de[1]),
              },
              pe != null ? { presentationTimeOffsetSec: pe } : null,
              { type: "SegmentBase" },
            );
          } else if (se != null) {
            var _e,
              fe = se.$.media;
            if (fe == null)
              throw u(
                e,
                t,
                "SegmentTemplateMediaMissing",
                'Representation id="%s" SegmentTemplate>@media is missing',
                A,
              );
            var ge = se.$.initialization;
            if (ge == null)
              throw u(
                e,
                t,
                "SegmentTemplateInitializationMissing",
                'Representation id="%s" SegmentTemplate>@initialization is missing',
                A,
              );
            var he = v(
                e,
                t,
                A,
                "SegmentTemplate>@timescale",
                se.$.timescale,
                C,
              ),
              ye =
                se.$.startNumber != null
                  ? v(
                      e,
                      t,
                      A,
                      "SegmentTemplate>@startNumber",
                      se.$.startNumber,
                      b,
                    )
                  : null,
              Ce = (_e = se.SegmentTimeline) == null ? void 0 : _e[0];
            if (Ce == null)
              throw u(
                e,
                t,
                "SegmentTimelineMissing",
                'Representation id="%s" SegmentTemplate>SegmentTimeline is missing',
                A,
              );
            var be = _(e, t, A, Ce),
              ve = f(e, t, A, Ce);
            ie = babelHelpers.extends(
              { baseURL: ae, initURL: ge, segmentTimeline: be },
              ve != null ? { segmentTimelinePredictive: ve } : null,
              {
                segmentURLTemplate: fe,
                startNumber: ye,
                timescale: he,
                type: "SegmentTemplate",
              },
            );
          } else
            throw u(
              e,
              t,
              "SegmentsInfoInvalid",
              'Representation id="%s" SegmentBase and SegmentTemplate are missing',
              A,
            );
          return (
            k === !0 &&
              ((x = w.BaseURL) == null || (x = x[0]) == null ? void 0 : x._) ==
                null &&
              (h == null || h(ie)),
            {
              abrPolicyTags: oe,
              bandwidth: Y,
              lang: Q,
              mimeCodecsParsed: V,
              playbackResolutionCsvqmScoreCurve: Z,
              playbackResolutionCsvqmScoreCurveParsed: ne,
              playbackResolutionMosScoreCurve: J,
              playbackResolutionMosScoreCurveParsed: te,
              qualityLabel: re,
              representationId: A,
              role: X,
              segmentsInfo: ie,
              variantKey: K,
            }
          );
        },
        $ = function (t, n) {
          var e = Number.parseInt(t != null ? t : "", 10),
            r = Number.parseInt(n != null ? n : "", 10);
          return Number.isSafeInteger(e) &&
            Number.isSafeInteger(r) &&
            e > 0 &&
            r > 0
            ? { height: r, width: e }
            : null;
        },
        P =
          e.config.enableLive &&
          (I.$.type === "dynamic" || e.config.isLivePlayback),
        N = function (t) {
          var e,
            n = t.adaptationSetXml,
            r = t.representationXml;
          return (e = $(r.$.width, r.$.height)) != null
            ? e
            : $(n.$.width, n.$.height);
        },
        M = function (t) {
          var e,
            n = t.adaptationSetXml;
          return (e = N(t)) != null
            ? e
            : P
              ? $(n.$.maxWidth, n.$.maxHeight)
              : null;
        },
        w = function (r) {
          var n,
            o = x(r),
            a = r.adaptationSetXml,
            i = r.representationXml,
            l = M(r);
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
        A = function (t) {
          return babelHelpers.extends({}, x(t), { type: "audio" });
        },
        F = function (t) {
          return babelHelpers.extends({}, x(t), { type: "application" });
        },
        O = function (t) {
          if (t.$.mimeType != null) return t.$.mimeType;
          var e = t.Representation;
          return e && e.length > 0 && e[0].$.mimeType != null
            ? e[0].$.mimeType
            : null;
        },
        B = D.findLast(function (e) {
          return e.Representation != null && e.Representation.length > 0;
        }),
        W = D.map(function (e) {
          return e.$.id;
        }),
        q = new Set(W).size === W.length,
        U = D.reduce(function (n, r, o) {
          var a,
            i,
            l,
            s = (a = q ? r.$.id : void 0) != null ? a : "id-mpdas-" + o,
            c = r === B,
            d = (i = O(r)) != null ? i : "",
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
              if (P) {
                var h = m.filter(function (e) {
                  return N(e) != null;
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
                representations: g.map(w),
                type: "video",
              });
            }
          } else
            d.indexOf("audio") === 0
              ? (f = babelHelpers.extends({}, _, {
                  representations: m.map(A),
                  type: "audio",
                }))
              : d.indexOf("application") === 0
                ? (f = babelHelpers.extends({}, _, {
                    representations: m.map(F),
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
        V = U.map(function (e) {
          var t = e.representations;
          return t;
        }).flat();
      if (V.length === 0)
        throw u(
          e,
          t,
          "NoRepresentations",
          "Not found any Representations in any of %s AdaptationSets",
          String(U.length),
        );
      var H = U.map(function (e) {
        return e.adaptationSetId;
      });
      if (new Set(H).size < H.length)
        throw u(
          e,
          t,
          "NonUniqueAdaptationSetID",
          "AdaptationSet ids are required to be unique within the manifest: %s",
          H.join(","),
        );
      var G = V.map(function (e) {
        return e.representationId;
      });
      if (new Set(G).size < G.length)
        throw u(
          e,
          t,
          "NonUniqueRepresentationID",
          "Representation ids are required to be unique within the manifest: %s",
          G.join(","),
        );
      var z = p
          ? null
          : E(
              e,
              U.map(function (e) {
                return e.type === "video" ? e : null;
              }).filter(Boolean),
            ),
        j = E(
          e,
          U.map(function (e) {
            return e.type === "audio" ? e : null;
          }).filter(Boolean),
        ),
        K = U.map(function (e) {
          return e.type === "application" ? e.representations : null;
        })
          .filter(Boolean)
          .flat();
      if (z != null) {
        if (z.selected.length === 0)
          throw z.ignored.size > 0
            ? u(
                e,
                t,
                "AllVideoRepresentationsIgnored",
                "All video representations ignored: %s",
                Array.from(z.ignored.entries())
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
                V.map(function (e) {
                  return (
                    e.representationId +
                    ":" +
                    o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyMimeCodecs(e.mimeCodecsParsed)
                  );
                }).join("; "),
              );
        z.ignored.size > 0 &&
          e.logging.log(e, {
            error: u(
              e,
              t,
              "IgnoredVideoRepresentations",
              "Some video representations ignored: %s",
              Array.from(z.ignored.entries())
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
      function Q(e) {
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
      var X = Q((i = z == null ? void 0 : z.selected) != null ? i : []),
        Y = Q(j.selected);
      return {
        audioOnly: p,
        createdAt: e.host.clock(),
        debugXml: e.config.debugViz || e.config.debugLog ? I : void 0,
        manifestRepresentations: {
          application: K,
          audio: j.selected,
          video: (l = z == null ? void 0 : z.selected) != null ? l : [],
        },
        metadata: {
          manifestIdentifier: (s = I.$.FBManifestIdentifier) != null ? s : null,
          manifestIsLiveTemplated: I.$.FBIsLiveTemplated === "true",
          manifestIsMixedCodecAudio: Y,
          manifestIsMixedCodecVideo: X,
          manifestType: I.$.type === "dynamic" ? "dynamic" : "static",
          minBufferTimeSec: m(I.$.minBufferTime),
          minimumUpdatePeriodMs: c(I.$.minimumUpdatePeriod),
          suggestedPresentationDelaySec: m(I.$.suggestedPresentationDelay),
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
