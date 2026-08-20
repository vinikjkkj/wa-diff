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
    function m(e, t, n) {
      var r,
        a,
        i,
        l,
        s = n.audioOnly,
        m = n.baseURLFallback,
        f = (r = t.MPD) == null ? void 0 : r[0];
      if (!f) throw u(e, t, "NoMPD", "Missing MPD root");
      var g = (a = f.Period) == null ? void 0 : a[0];
      if (!g) throw u(e, t, "NoPeriod", "Missing MPD>Period[1]");
      var R = g.AdaptationSet;
      if (!R || R.length <= 0)
        throw u(e, t, "NoAdaptationSet", "Missing MPD>Period[1]>AdaptationSet");
      if (
        R.some(function (e) {
          return e.Representation == null || e.Representation.length === 0;
        })
      )
        throw u(
          e,
          t,
          "SomeEmptyAdaptationSets",
          "Some AdaptationSets contain no Representations",
        );
      var L = function (r) {
          var n,
            a,
            i,
            l,
            s,
            c,
            d,
            f,
            g,
            S,
            R,
            L,
            E,
            k,
            I,
            T,
            D = r.adaptationSetId,
            x = r.adaptationSetMimeType,
            $ = r.adaptationSetXml,
            P = r.representationIndex,
            N = r.representationXml,
            M = (n = N.$.id) != null ? n : D + "-#" + P,
            w =
              (a = (i = N.$.mimeType) != null ? i : $.$.mimeType) != null
                ? a
                : "";
          if (w === "" || w !== x) {
            var A, F;
            throw u(
              e,
              t,
              "MimeTypeMismatch",
              'Representation id="%s" Representation>@mimeType="%s" and AdaptationSet>@mimeType="%s" mismatch',
              M,
              (A = N.$.mimeType) != null ? A : "",
              (F = $.$.mimeType) != null ? F : "",
            );
          }
          var O =
            (l = (s = N.$.codecs) != null ? s : $.$.codecs) != null ? l : "";
          if (O === "") {
            var B, W;
            e.logging.log(e, {
              error: u(
                e,
                t,
                "CodecsMissingOrEmpty",
                'Representation id="%s" Representation>@codecs="%s" and AdaptationSet>@codecs="%s" is missing or empty',
                M,
                (B = N.$.codecs) != null ? B : "",
                (W = $.$.codecs) != null ? W : "",
              ),
              type: "generic_error_as_warning",
            });
          }
          var q = o("VideoPlayerNextgendashMediaUtils").parseMimeCodecs(
            v(w, O),
          );
          if (
            q.contentType === "" ||
            q.contentType === "unknown" ||
            q.containerType === ""
          ) {
            var U, V, H, G;
            throw u(
              e,
              t,
              "MimeCodecsParsedUnexpected",
              'Representation id="%s" missing contentType or containerType: %s; AdaptationSet>@mimeType="%s", AdaptationSet>@codecs="%s", Representation>@mimeType="%s", Representation>@codecs="%s"',
              M,
              JSON.stringify(q),
              (U = $.$.mimeType) != null ? U : "",
              (V = $.$.codecs) != null ? V : "",
              (H = N.$.mimeType) != null ? H : "",
              (G = N.$.codecs) != null ? G : "",
            );
          }
          var z =
              $.$.FBVariantKey === "und"
                ? null
                : (c = $.$.FBVariantKey) != null
                  ? c
                  : null,
            j = $.$.lang === "und" ? null : (d = $.$.lang) != null ? d : null,
            K =
              (f =
                (g = $.Role) == null || (g = g[0]) == null
                  ? void 0
                  : g.$.value) != null
                ? f
                : null,
            Q = Number(N.$.bandwidth);
          if (!Number.isFinite(Q) || Q <= 0)
            throw u(
              e,
              t,
              "RepresentationBandwidthInvalid",
              'Representation id="%s" Representation>@bandwidth is missing or invalid: %s',
              M,
              N.$.bandwidth,
            );
          var X = N.$.FBPlaybackResolutionMos,
            Y = N.$.FBPlaybackResolutionCsvqm,
            J = e.config.cacheQualityScoreInRepresentation,
            Z =
              J && X != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(X)
                : null,
            ee =
              J && Y != null
                ? o("QualityScoreUtils").parseQualityScoreCurve(Y)
                : null,
            te = N.$.FBQualityLabel,
            ne = ((S = N.$.FBAbrPolicyTags) != null ? S : "")
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e !== "";
              }),
            re = (R = N.ContentProtection) != null ? R : $.ContentProtection,
            oe =
              re == null ||
              (L = re.map(function (e) {
                var t,
                  n = e.$.schemeIdUri;
                return n == null
                  ? null
                  : {
                      cencPsshBase64:
                        (t = e["cenc:pssh"]) == null ||
                        (t = t[0]) == null ||
                        (t = t._) == null
                          ? void 0
                          : t.replace(/-/g, "+").replace(/_/g, "/"),
                      schemeIdUri: n,
                    };
              })) == null
                ? void 0
                : L.filter(Boolean),
            ae =
              (E =
                (k = N.BaseURL) == null || (k = k[0]) == null ? void 0 : k._) !=
              null
                ? E
                : m;
          if (ae == null)
            throw u(
              e,
              t,
              "RepresentationBaseURLMissingAndNoFallback",
              'Representation id="%s" Representation>BaseURL is missing and no fallback was provided',
              M,
            );
          var ie,
            le = (I = N.SegmentBase) == null ? void 0 : I[0],
            se = (T = N.SegmentTemplate) == null ? void 0 : T[0];
          if (le != null) {
            var ue,
              ce = (ue = le.Initialization) == null ? void 0 : ue[0];
            if (ce == null)
              throw u(
                e,
                t,
                "SegmentBaseInitializationMissing",
                'Representation id="%s" SegmentBase>Initialization is missing',
                M,
              );
            var de = b(
                e,
                t,
                M,
                "SegmentBase>Initialization>@range",
                ce.$.range,
              ),
              me = b(e, t, M, "SegmentBase>@indexRange", le.$.indexRange);
            if (le.$.indexRangeExact === "false")
              throw u(
                e,
                t,
                "SegmentBaseIndexRangeExactFalseUnsupported",
                'Representation id="%s" SegmentBase>@indexRangeExact="false" is unsupported',
                M,
              );
            ie = {
              baseURL: ae,
              indexByteRange: o(
                "VideoPlayerNextgendashMediaUtils",
              ).makeByteRangeFromStartEndByteIndex(e, me[0], me[1]),
              initByteRange: o(
                "VideoPlayerNextgendashMediaUtils",
              ).makeByteRangeFromStartEndByteIndex(e, de[0], de[1]),
              type: "SegmentBase",
            };
          } else if (se != null) {
            var pe,
              _e = se.$.media;
            if (_e == null)
              throw u(
                e,
                t,
                "SegmentTemplateMediaMissing",
                'Representation id="%s" SegmentTemplate>@media is missing',
                M,
              );
            var fe = se.$.initialization;
            if (fe == null)
              throw u(
                e,
                t,
                "SegmentTemplateInitializationMissing",
                'Representation id="%s" SegmentTemplate>@initialization is missing',
                M,
              );
            var ge = C(
                e,
                t,
                M,
                "SegmentTemplate>@timescale",
                se.$.timescale,
                h,
              ),
              he =
                se.$.startNumber != null
                  ? C(
                      e,
                      t,
                      M,
                      "SegmentTemplate>@startNumber",
                      se.$.startNumber,
                      y,
                    )
                  : null,
              ye = (pe = se.SegmentTimeline) == null ? void 0 : pe[0];
            if (ye == null)
              throw u(
                e,
                t,
                "SegmentTimelineMissing",
                'Representation id="%s" SegmentTemplate>SegmentTimeline is missing',
                M,
              );
            var Ce = p(e, t, M, ye),
              be = _(e, t, M, ye);
            ie = babelHelpers.extends(
              { baseURL: ae, initURL: fe, segmentTimeline: Ce },
              be != null ? { segmentTimelinePredictive: be } : null,
              {
                segmentURLTemplate: _e,
                startNumber: he,
                timescale: ge,
                type: "SegmentTemplate",
              },
            );
          } else
            throw u(
              e,
              t,
              "SegmentsInfoInvalid",
              'Representation id="%s" SegmentBase and SegmentTemplate are missing',
              M,
            );
          return {
            abrPolicyTags: ne,
            bandwidth: Q,
            contentProtections: oe,
            lang: j,
            mimeCodecsParsed: q,
            playbackResolutionCsvqmScoreCurve: Y,
            playbackResolutionCsvqmScoreCurveParsed: ee,
            playbackResolutionMosScoreCurve: X,
            playbackResolutionMosScoreCurveParsed: Z,
            qualityLabel: te,
            representationId: M,
            role: K,
            segmentsInfo: ie,
            variantKey: z,
          };
        },
        E = function (t, n) {
          var e = Number.parseInt(t != null ? t : "", 10),
            r = Number.parseInt(n != null ? n : "", 10);
          return Number.isSafeInteger(e) &&
            Number.isSafeInteger(r) &&
            e > 0 &&
            r > 0
            ? { height: r, width: e }
            : null;
        },
        k = function (r) {
          var n = L(r),
            o = r.adaptationSetXml,
            a = r.representationXml,
            i = E(a.$.width, a.$.height),
            l = E(o.$.width, o.$.height),
            s = i != null ? i : l;
          if (s == null)
            throw u(
              e,
              t,
              "InvalidWidthHeight",
              'Representation width and/or height attributes are invalid: Representation id="%s" width=%s height=%s, AdaptationSet id="%s" width=%s height=%s',
              n.representationId,
              String(a.$.width),
              String(a.$.height),
              String(o.$.id),
              String(o.$.width),
              String(o.$.height),
            );
          return babelHelpers.extends({}, n, {
            height: s.height,
            type: "video",
            width: s.width,
          });
        },
        I = function (t) {
          return babelHelpers.extends({}, L(t), { type: "audio" });
        },
        T = function (t) {
          return babelHelpers.extends({}, L(t), { type: "application" });
        },
        D = function (t) {
          if (t.$.mimeType != null) return t.$.mimeType;
          var e = t.Representation;
          return e && e.length > 0 && e[0].$.mimeType != null
            ? e[0].$.mimeType
            : null;
        },
        x = R.findLast(function (e) {
          return e.Representation != null && e.Representation.length > 0;
        }),
        $ = R.map(function (e) {
          return e.$.id;
        }),
        P = new Set($).size === $.length,
        N = R.reduce(function (n, r, o) {
          var a,
            i,
            l,
            c = (a = P ? r.$.id : void 0) != null ? a : "id-mpdas-" + o,
            d = r === x,
            m = (i = D(r)) != null ? i : "",
            p = ((l = r.Representation) != null ? l : []).map(function (e, t) {
              return {
                adaptationSetId: c,
                adaptationSetMimeType: m,
                adaptationSetXml: r,
                representationIndex: t,
                representationXml: e,
              };
            }),
            _ = {
              adaptationSetId: c,
              adaptationSetIsLastNonEmpty: d,
              adaptationSetMimeType: m,
            },
            f;
          return (
            m.indexOf("video") === 0
              ? s ||
                (f = babelHelpers.extends({}, _, {
                  representations: p.map(k),
                  type: "video",
                }))
              : m.indexOf("audio") === 0
                ? (f = babelHelpers.extends({}, _, {
                    representations: p.map(I),
                    type: "audio",
                  }))
                : m.indexOf("application") === 0
                  ? (f = babelHelpers.extends({}, _, {
                      representations: p.map(T),
                      type: "application",
                    }))
                  : e.logging.log(e, {
                      error: u(
                        e,
                        t,
                        "UnsupportedAdaptationSet",
                        'Unsupported mimeType="%s" resolved for AdaptationSet id="%s" at index %s',
                        c,
                        m,
                        String(o),
                      ),
                      type: "generic_error_as_warning",
                    }),
            f && n.push(f),
            n
          );
        }, []),
        M = N.map(function (e) {
          var t = e.representations;
          return t;
        }).flat();
      if (M.length === 0)
        throw u(
          e,
          t,
          "NoRepresentations",
          "Not found any Representations in any of %s AdaptationSets",
          String(N.length),
        );
      var w = N.map(function (e) {
        return e.adaptationSetId;
      });
      if (new Set(w).size < w.length)
        throw u(
          e,
          t,
          "NonUniqueAdaptationSetID",
          "AdaptationSet ids are required to be unique within the manifest: %s",
          w.join(","),
        );
      var A = M.map(function (e) {
        return e.representationId;
      });
      if (new Set(A).size < A.length)
        throw u(
          e,
          t,
          "NonUniqueRepresentationID",
          "Representation ids are required to be unique within the manifest: %s",
          A.join(","),
        );
      var F = s
          ? null
          : S(
              e,
              N.map(function (e) {
                return e.type === "video" ? e : null;
              }).filter(Boolean),
            ),
        O = S(
          e,
          N.map(function (e) {
            return e.type === "audio" ? e : null;
          }).filter(Boolean),
        ),
        B = N.map(function (e) {
          return e.type === "application" ? e.representations : null;
        })
          .filter(Boolean)
          .flat();
      if (F != null) {
        if (F.selected.length === 0)
          throw F.ignored.size > 0
            ? u(
                e,
                t,
                "AllVideoRepresentationsIgnored",
                "All video representations ignored: %s",
                Array.from(F.ignored.entries())
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
                M.map(function (e) {
                  return (
                    e.representationId +
                    ":" +
                    o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyMimeCodecs(e.mimeCodecsParsed)
                  );
                }).join("; "),
              );
        F.ignored.size > 0 &&
          e.logging.log(e, {
            error: u(
              e,
              t,
              "IgnoredVideoRepresentations",
              "Some video representations ignored: %s",
              Array.from(F.ignored.entries())
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
      function W(e) {
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
      var q = W((i = F == null ? void 0 : F.selected) != null ? i : []),
        U = W(O.selected);
      return {
        audioOnly: s,
        createdAt: e.host.clock(),
        debugXml: e.config.debugViz || e.config.debugLog ? f : void 0,
        manifestRepresentations: {
          application: B,
          audio: O.selected,
          video: (l = F == null ? void 0 : F.selected) != null ? l : [],
        },
        metadata: {
          manifestIsLiveTemplated: f.$.FBIsLiveTemplated === "true",
          manifestIsMixedCodecAudio: U,
          manifestIsMixedCodecVideo: q,
          manifestType: f.$.type === "dynamic" ? "dynamic" : "static",
          minBufferTimeSec: d(f.$.minBufferTime),
          minimumUpdatePeriodMs: c(f.$.minimumUpdatePeriod),
          suggestedPresentationDelaySec: d(f.$.suggestedPresentationDelay),
        },
      };
    }
    function p(e, t, n, r) {
      var o,
        a = ((o = r.S) != null ? o : []).map(function (r, o) {
          return {
            d: C(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@d", r.$.d, h),
            id:
              r.$.id == null
                ? void 0
                : C(
                    e,
                    t,
                    n,
                    "SegmentTimeline>S[" + (o + 1) + "]>@id",
                    r.$.id,
                    y,
                  ),
            r:
              r.$.r == null
                ? 0
                : C(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@r", r.$.r, y),
            t: C(e, t, n, "SegmentTimeline>S[" + (o + 1) + "]>@t", r.$.t, y),
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
    function _(e, t, n, r) {
      var o = r.$.FBPredictedMedia;
      if (o == null || o === "") return null;
      var a =
          r.$.FBPredictedMediaStartNumber != null
            ? C(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBPredictedMediaStartNumber",
                r.$.FBPredictedMediaStartNumber,
                y,
              )
            : null,
        i =
          r.$.FBPredictedMediaEndNumber != null
            ? C(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBPredictedMediaEndNumber",
                r.$.FBPredictedMediaEndNumber,
                y,
              )
            : null,
        l =
          r.$.FBAverageDuration != null
            ? C(
                e,
                t,
                n,
                "SegmentTemplate>SegmentTimeline>@FBAverageDuration",
                r.$.FBAverageDuration,
                h,
              )
            : null;
      return {
        endNumber: i,
        segmentAverageDuration: l,
        segmentURLTemplate: f(o),
        startNumber: a,
      };
    }
    function f(e) {
      if (/[?&]_nc_sc=/.test(e)) return e;
      var t = e.includes("?") ? "&" : "?";
      return "" + e + t + "_nc_sc=1";
    }
    function g(e) {
      return Number.isFinite(e)
        ? null
        : 'not a finite integer, expected format: "123"';
    }
    function h(e) {
      return e > 0 ? null : "not a positive integer";
    }
    function y(e) {
      return e >= 0 ? null : "not a positive integer or zero";
    }
    function C(e, t, n, r, o, a) {
      var i = parseInt(o, 10),
        l = g(i);
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
    function b(e, t, n, r, o) {
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
    function v(e, t) {
      return e + '; codecs="' + t + '"';
    }
    function S(e, t) {
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
    function R(e) {
      var t = e.height,
        n = e.qualityLabel;
      return n == null || n === "" ? String(t) + "p" : n != null ? n : "";
    }
    function L(e) {
      var t = e.lang,
        n = e.role,
        r = t != null ? t : "Default";
      return n != null ? r + " - " + n : r;
    }
    ((l.makeVideoPlayerNextgendashOpaqueManifestRepresentationId = e),
      (l.unopaqueVideoPlayerNextgendashManifestRepresentationId = s),
      (l.internal_parseIso8601DurationSec = d),
      (l.parseMPD = m),
      (l.getDisplayLabelFromVideoRepresentation = R),
      (l.getDisplayLabelFromAudioRepresentation = L));
  },
  98,
);
