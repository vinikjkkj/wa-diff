__d(
  "VideoPlayerNextgendashWorkerPrefetchCache",
  [
    "Promise",
    "QualityScoreUtils",
    "VideoPlayerNextgendashABR",
    "VideoPlayerNextgendashDecodeCapabilityMatcher",
    "VideoPlayerNextgendashManifestParser",
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashNetworkDiagnosticsUtils",
    "VideoPlayerNextgendashURLUtils",
    "VideoPlayerNextgendashWebCodecsDimensions",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = 200;
    function c(e) {
      if (!(!e.config.enablePrefetchBandwidthSampling || s.size === 0)) {
        var t = e.host.clock();
        s.forEach(function (n, r) {
          var a = o(
            "VideoPlayerNextgendashNetworkDiagnosticsUtils",
          ).computeNetworkDiagnosticsSampleFromResourceTiming(e, r, t, n);
          a.status !== "pending" &&
            (s.delete(r),
            a.status === "sampled" &&
              e.host.networkDiagnosticsUpdate(a.sample));
        });
      }
    }
    function d(e, t) {
      if (
        !(!e.config.enablePrefetchBandwidthSampling || typeof t != "string")
      ) {
        if (s.size >= u) {
          var n = s.keys().next().value;
          n != null && s.delete(n);
        }
        (s.delete(t), s.set(t, e.host.clock().perfMs));
      }
    }
    function m(e) {
      typeof e == "string" && s.delete(e);
    }
    var p = new Map(),
      _ = new Map();
    function f(e) {
      var t,
        n,
        r = p.get(e),
        o = h.get(e),
        a =
          ((t = r == null ? void 0 : r.size) != null ? t : 0) +
          ((n = o == null ? void 0 : o.size) != null ? n : 0),
        i = _.get(e);
      return i == null
        ? { cacheEntryCount: a, firstSegment: null, init: null, sidx: null }
        : {
            cacheEntryCount: a,
            firstSegment: i.firstSegment,
            init: i.init,
            sidx: i.sidx,
          };
    }
    function g(e, t, n) {
      if (!(!t.startsWith("video_") && !t.startsWith("combo_"))) {
        var r = _.get(e);
        if (r == null) {
          var o = { firstSegment: null, init: null, sidx: null };
          ((r = o), _.set(e, r));
        }
        var a = n ? "hit" : "miss";
        ((t.endsWith("_init") || t.endsWith("_init_sidx_combined")) &&
          r.init == null &&
          (r.init = a),
          (t.endsWith("_sidx") || t.endsWith("_init_sidx_combined")) &&
            r.sidx == null &&
            (r.sidx = a),
          (t.endsWith("_segment") || t.endsWith("_segment_group")) &&
            r.firstSegment == null &&
            (r.firstSegment = a));
      }
    }
    var h = new Map();
    function y(e, t) {
      var n = h.get(e);
      if (n == null) return null;
      var r = n.get(t);
      return r == null
        ? null
        : {
            abortController: new AbortController(),
            representationID: r.representationID,
            resultState: {
              response: new Response(r.body),
              resultState: "has_response",
            },
          };
    }
    function C(e) {
      var t = p.get(e);
      return (t || ((t = new Map()), p.set(e, t)), t);
    }
    function b(e, t) {}
    function v(e, t, n) {
      try {
        var r = k(e, t.prefetchKey);
        if (I(e, t.prefetchKey, r)) return;
        var a = e.host.networkDiagnosticsReadBandwidth(
          e.config.enableBandwidthDiagnosticsFallback,
          e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
        );
        (O(e, r, t.representations, n, a != null ? a : n.bandwidthDiagnostics),
          w(e, r, t.representations));
      } catch (t) {
        e.logging.log(e, {
          error: o("nextgendasherr").nextgendasherrFromCause(
            e,
            t,
            "VideoPlayerNextgendashInitiatePrefetchException",
          ),
          type: "generic_error_as_warning",
        });
      }
    }
    function S(e, t) {}
    var R = new Set(),
      L = new Map(),
      E = new WeakMap();
    function k(e, t) {
      var n = e.config.prefetchCacheMaxEntries;
      if (n > 0 && !L.has(t))
        for (; L.size >= n; ) {
          var r = L.keys().next().value;
          if (r == null) break;
          Q(r);
        }
      var o = C(t);
      return (n > 0 && L.set(t, o), o);
    }
    function I(e, t, n) {
      return e.config.blockDuplicatePrefetch
        ? R.has(t)
          ? !0
          : (R.add(t), !1)
        : n.size !== 0;
    }
    function T(e, t, n, r) {
      var o = {
        audio: n != null ? { audioRepresentation: n } : null,
        prefetchKey: e,
        video:
          t.length > 0
            ? {
                abrConfig: r.abrConfig,
                devicePixelRatio: r.devicePixelRatio,
                initialBandwidthDiagnostics: r.bandwidthDiagnostics,
                isDocumentHidden: r.isDocumentHidden,
                playerDimensions: r.playerDimensions,
                videoRepresentationsByBandwidthAsc: t,
              }
            : null,
      };
      return o.video == null && o.audio == null ? null : o;
    }
    function D(e, t, n) {
      try {
        var r = k(e, t.prefetchKey);
        if (I(e, t.prefetchKey, r)) return [];
        var a = A(e, t.representations, n),
          i = M(t.representations),
          l = T(t.prefetchKey, a, i, n);
        return (
          l != null && e.config.prefetchCacheMaxEntries > 0 && E.set(l, r),
          l != null ? [l] : []
        );
      } catch (t) {
        return (
          e.logging.log(e, {
            error: o("nextgendasherr").nextgendasherrFromCause(
              e,
              t,
              "VideoPlayerNextgendashGetPrefetchTasksException",
            ),
            type: "generic_error_as_warning",
          }),
          []
        );
      }
    }
    function x(e, t, n, r) {
      if (n == null) return null;
      var o = F(
        n.videoRepresentationsByBandwidthAsc,
        n.devicePixelRatio,
        n.isDocumentHidden,
        r != null ? r : n.initialBandwidthDiagnostics,
        n.abrConfig,
        e.config.cacheQualityScoreInRepresentation,
        e.config.useSimpleBandwidthEstimate,
        n.playerDimensions,
      );
      return o == null ? null : K(e, t, o);
    }
    function $(e, t, n) {
      return n == null ? null : K(e, t, n.audioRepresentation);
    }
    function P(t) {
      return {
        abort: function () {
          t.forEach(function (e) {
            e.abort();
          });
        },
        promise: (e || (e = n("Promise")))
          .all(
            t.map(function (e) {
              return e.promise;
            }),
          )
          .then(function (e) {
            return e.flat();
          }),
      };
    }
    function N(e) {
      var t = e.env,
        n = e.task;
      try {
        if (t.config.prefetchCacheMaxEntries > 0) {
          var r = E.get(n);
          if (r == null || p.get(n.prefetchKey) !== r) return null;
        }
        var a = C(n.prefetchKey),
          i = t.host.networkDiagnosticsReadBandwidth(
            t.config.enableBandwidthDiagnosticsFallback,
            t.config.bandwidthDiagnosticsFallbackDefaultEstimate,
          ),
          l = [],
          s = x(t, a, n.video, i);
        s != null && l.push(s);
        var u = $(t, a, n.audio);
        return (u != null && l.push(u), l.length === 0 ? null : P(l));
      } catch (e) {
        return (
          t.logging.log(t, {
            error: o("nextgendasherr").nextgendasherrFromCause(
              t,
              e,
              "VideoPlayerNextgendashProcessPrefetchTaskException",
            ),
            type: "generic_error_as_warning",
          }),
          null
        );
      }
    }
    function M(e) {
      var t = e.find(function (e) {
        return e.mimeType.indexOf("audio") > -1;
      });
      return t;
    }
    function w(e, t, n) {
      var r = M(n);
      r != null && K(e, t, r);
    }
    function A(e, t, n) {
      var r = t.filter(function (e) {
          return e.mimeType.indexOf("video") > -1;
        }),
        o = H(e, r, {
          devicePixelRatio: n.devicePixelRatio,
          enableSmartPlayerStaticCapabilityFiltering:
            n.enableSmartPlayerStaticCapabilityFiltering,
          prefetchResolutionThreshold: n.prefetchResolutionThreshold,
          smartPlayerVideoDecodeCapabilities:
            n.smartPlayerVideoDecodeCapabilities,
        });
      return (
        o.sort(function (e, t) {
          return e.bandwidth - t.bandwidth;
        }),
        o
      );
    }
    function F(e, t, n, r, o, a, i, l) {
      if (e.length === 0) return null;
      var s = e[0],
        u = q(e, t, n, r, o, a, i, l),
        c = u != null ? u : s;
      return c;
    }
    function O(e, t, n, r, o) {
      var a = A(e, n, r),
        i = F(
          a,
          r.devicePixelRatio,
          r.isDocumentHidden,
          o,
          r.abrConfig,
          e.config.cacheQualityScoreInRepresentation,
          e.config.useSimpleBandwidthEstimate,
          r.playerDimensions,
        );
      i != null && K(e, t, i);
    }
    var B = 500,
      W = 400;
    function q(e, t, n, r, a, i, l, s) {
      var u = e.map(function (e) {
          return V(e, i);
        }),
        c = s != null ? s : { height: B, width: W },
        d = o(
          "VideoPlayerNextgendashABR",
        ).evaluateVideoPlayerNextgendashABRForVideo(u, {
          abrConfig: a,
          bandwidthDiagnostics: r,
          cacheQualityScoreInRepresentation: i,
          devicePixelRatio: t,
          isDocumentHidden: n,
          mediaDurationSec: NaN,
          playerDimensions: c,
          playheadMediaTimeSec: 0,
          prefetchResult: null,
          sourceBufferBufferedRangesSec: [],
          useSimpleBandwidthEstimate: l,
        });
      if (d.bestRepresentation == null) return null;
      var m = o(
          "VideoPlayerNextgendashManifestParser",
        ).unopaqueVideoPlayerNextgendashManifestRepresentationId(
          d.bestRepresentation.representationId,
        ),
        p = e.find(function (e) {
          return e.representationID === m;
        });
      return p;
    }
    function U(e, t) {
      return !e || t == null
        ? null
        : o("QualityScoreUtils").parseQualityScoreCurve(t);
    }
    function V(e, t) {
      return {
        abrPolicyTags: [],
        bandwidth: e.bandwidth,
        contentProtections: void 0,
        height: e.height,
        lang: null,
        mimeCodecsParsed: o("VideoPlayerNextgendashMediaUtils").parseMimeCodecs(
          o("VideoPlayerNextgendashMediaUtils").combineMimeTypeAndCodecs(
            e.mimeType,
            e.codecs,
          ),
        ),
        playbackResolutionCsvqmScoreCurve: e.playbackResolutionCSVQM,
        playbackResolutionCsvqmScoreCurveParsed: U(
          t,
          e.playbackResolutionCSVQM,
        ),
        playbackResolutionMosScoreCurve: e.playbackResolutionMOS,
        playbackResolutionMosScoreCurveParsed: U(t, e.playbackResolutionMOS),
        qualityLabel: null,
        representationId: o(
          "VideoPlayerNextgendashManifestParser",
        ).makeVideoPlayerNextgendashOpaqueManifestRepresentationId(
          e.representationID,
        ),
        role: null,
        segmentsInfo: {
          baseURL: e.baseURL,
          indexByteRange: { byteLength: 1, byteOffset: 0 },
          initByteRange: { byteLength: 1, byteOffset: 1 },
          type: "SegmentBase",
        },
        type: "video",
        variantKey: null,
        width: e.width,
      };
    }
    function H(e, t, n) {
      var r = t.filter(function (t) {
          var n = o(
            "VideoPlayerNextgendashMediaUtils",
          ).combineMimeTypeAndCodecs(t.mimeType, t.codecs);
          return !(
            !e.host.mediaSourceIsTypeSupported(e, n) ||
            (e.config.isTypeSupportedIncludeContentAttributes &&
              !e.host.mediaSourceIsTypeSupported(
                e,
                o(
                  "VideoPlayerNextgendashMediaUtils",
                ).appendContentAttributesToMimeCodecs(n, t.width, t.height),
              ))
          );
        }),
        a = r;
      n.enableSmartPlayerStaticCapabilityFiltering === !0 &&
        (a = r.filter(function (e) {
          return o(
            "VideoPlayerNextgendashDecodeCapabilityMatcher",
          ).isVideoPlayerNextgendashRepresentationPlayable(
            n.smartPlayerVideoDecodeCapabilities,
            V(e, !1),
          );
        }));
      var i =
          e.config.mediaSinkType === "WEBCODECS"
            ? o(
                "VideoPlayerNextgendashWebCodecsDimensions",
              ).filterVideoPlayerNextgendashWebCodecsRepresentations(a)
            : a,
        l = i.filter(function (e) {
          var t = Math.min(e.width, e.height);
          return t / n.devicePixelRatio <= n.prefetchResolutionThreshold;
        });
      return l.length > 0 ? l : i.length > 0 ? [i[0]] : [];
    }
    function G(e, t, n) {
      var r = e.get(t);
      r && e.set(t, babelHelpers.extends({}, r, { resultState: n }));
    }
    function z(e, t, n) {
      if (!e) return n;
      try {
        var r = new URL(n);
        return (
          r.searchParams.delete("_nc_gid"),
          r.searchParams.delete("oh"),
          r.searchParams.delete("efg"),
          t && r.searchParams.delete("_nc_sid"),
          r.toString()
        );
      } catch (e) {
        return n;
      }
    }
    function j(t, r, a, i) {
      var l = z(
        t.config.enablePrefetchCacheKeyNormalization,
        t.config.enableFBPrefetchCacheKeyNormalization,
        a,
      );
      (c(t), d(t, a));
      var s = new AbortController(),
        u = new (e || (e = n("Promise")))(function (e) {
          t.host
            .fetch(t, a, { signal: s.signal })
            .then(function (n) {
              var o = { response: n, resultState: "has_response" };
              (G(r, l, o), e(o), c(t));
            })
            .catch(function (n) {
              var i = {
                error: o("nextgendasherr").nextgendasherrFromFetchRejection(
                  t,
                  n,
                  "VideoPlayerNextgendashPrefetchRejection",
                ),
                resultState: "errored",
              };
              (G(r, l, i), e(i), m(a), c(t));
            });
        }),
        p = {
          abortController: s,
          representationID: i,
          resultState: { resultPromise: u, resultState: "pending" },
        };
      return (r.set(l, p), p);
    }
    function K(t, r, a) {
      var i = [].concat(a.segments),
        l = [],
        s = [];
      if (t.config.enableCombinedInitSidxFetch && i.length >= 2) {
        var u = i[0],
          c = i[1];
        if (u != null && c != null && c.start === u.end + 1) {
          var d = o("VideoPlayerNextgendashURLUtils").addTlbweParamToURLMaybe(
              t,
              o("VideoPlayerNextgendashURLUtils").addByteRangeParamsToURL(
                t,
                a.baseURL,
                o(
                  "VideoPlayerNextgendashMediaUtils",
                ).makeByteRangeFromStartEndByteIndex(t, u.start, c.end),
              ),
            ),
            m = j(t, r, d, a.representationID);
          (l.push(m.resultState.resultPromise),
            s.push(m.abortController),
            i.shift(),
            i.shift());
        } else
          t.logging.log(t, {
            error: o("nextgendasherr").nextgendasherr(
              t,
              "VideoPlayerNextgendashPrefetchUnableToCombineInitAndSidx",
              "Byte ranges: %s",
              JSON.stringify(i),
            ),
            type: "generic_error_as_warning",
          });
      }
      return (
        i.forEach(function (e) {
          var n = o("VideoPlayerNextgendashURLUtils").addTlbweParamToURLMaybe(
              t,
              o("VideoPlayerNextgendashURLUtils").addByteRangeParamsToURL(
                t,
                a.baseURL,
                o(
                  "VideoPlayerNextgendashMediaUtils",
                ).makeByteRangeFromStartEndByteIndex(t, e.start, e.end),
              ),
            ),
            i = j(t, r, n, a.representationID);
          (l.push(i.resultState.resultPromise), s.push(i.abortController));
        }),
        {
          abort: function () {
            s.forEach(function (e) {
              e.abort();
            });
          },
          promise: (e || (e = n("Promise"))).allSettled(l),
        }
      );
    }
    function Q(e) {
      L.delete(e);
      var t = p.get(e);
      (t != null &&
        (t.forEach(function (e) {
          e.abortController.abort();
        }),
        t.clear(),
        p.delete(e)),
        h.delete(e),
        R.delete(e),
        _.delete(e));
    }
    function X(e, t) {
      var n = p.get(t),
        r = new Set();
      if (
        (n == null ||
          n.forEach(function (t) {
            (!e.config.enableFilterFailedPrefetchBootstrap ||
              t.resultState.resultState !== "errored") &&
              r.add(t.representationID);
          }),
        e.config.prefetchCacheReplaySize > 0)
      ) {
        var o = h.get(t);
        o == null ||
          o.forEach(function (e) {
            r.add(e.representationID);
          });
      }
      return r.size > 0
        ? {
            prefetchedRepresentationIds: Array.from(r),
            prefetchStartedAt: e.host.clock(),
          }
        : null;
    }
    function Y(e, t) {
      t.size === 0 && p.delete(e);
    }
    function J(e, t) {
      t != null
        ? e.logging.log(e, {
            odsCall: {
              entity: "comet_video_player",
              key: "NextgendashPrefetchCache.hit",
              sampleRate: 1,
            },
            type: "ods_call",
          })
        : e.logging.log(e, {
            odsCall: {
              entity: "comet_video_player",
              key: "NextgendashPrefetchCache.miss",
              sampleRate: 1,
            },
            type: "ods_call",
          });
    }
    function Z(e, t, n) {
      var r = p.get(t),
        a = z(
          e.config.enablePrefetchCacheKeyNormalization,
          e.config.enableFBPrefetchCacheKeyNormalization,
          n,
        ),
        i = null,
        l =
          e.config.prefetchCacheReplaySize > 0 &&
          e.config.preferReplayCacheOverInflightPrefetch;
      if (
        (l && (i = y(t, a)),
        i == null && r != null && ((i = r.get(a)), i != null))
      ) {
        var s = i.resultState;
        if (
          e.config.prefetchCacheReplaySize > 0 &&
          s.resultState === "has_response"
        ) {
          var u = e.config.prefetchCacheReplaySize,
            d = i.representationID;
          if (!h.has(t)) {
            if (h.size >= u) {
              var m = h.keys().next().value;
              m != null && h.delete(m);
            }
            h.set(t, new Map());
          }
          s.response
            .clone()
            .arrayBuffer()
            .then(
              function (e) {
                var n = h.get(t);
                n != null && n.set(a, { body: e, representationID: d });
              },
              function (t) {
                e.logging.log(e, {
                  error: o("nextgendasherr").nextgendasherrFromCause(
                    e,
                    t,
                    "VideoPlayerNextgendashReplayCacheCloneRejection",
                  ),
                  type: "generic_error_as_warning",
                });
              },
            );
        }
        (s.resultState === "errored" && (i = null), r.delete(a), Y(t, r));
      }
      if (i == null && e.config.prefetchCacheReplaySize > 0 && !l) {
        var _ = y(t, a);
        _ != null
          ? ((i = _),
            e.logging.log(e, {
              odsCall: {
                entity: "comet_video_player",
                key: "NextgendashPrefetchReplayCache.hit",
                sampleRate: 1,
              },
              type: "ods_call",
            }))
          : e.logging.log(e, {
              odsCall: {
                entity: "comet_video_player",
                key: "NextgendashPrefetchReplayCache.miss",
                sampleRate: 1,
              },
              type: "ods_call",
            });
      }
      return (c(e), J(e, i), i);
    }
    ((l.getPrefetchCacheStatsForKey = f),
      (l.trackPrefetchCacheResourceResult = g),
      (l.internal_getOrAddPrefetchCacheEntry = C),
      (l.initiatePrefetch = v),
      (l.getPrefetchTasks = D),
      (l.processPrefetchTask = N),
      (l.internal_filterVideoRepresentations = H),
      (l.internal_startFetchForPrefetch = j),
      (l.releasePrefetchKey = Q),
      (l.getCachedRepresentationsForPrefetchKey = X),
      (l.getCachedValueForPrefetchKeyAndURL = Z));
  },
  98,
);
