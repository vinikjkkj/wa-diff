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
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashURLUtils",
    "VideoPlayerNextgendashWebCodecsDimensions",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return t === "HYBRID" && !e.startsWith("native:") ? "native:" + e : e;
    }
    var u = new Map(),
      c = 200;
    function d(e) {
      if (!(!e.config.enablePrefetchBandwidthSampling || u.size === 0)) {
        var t = e.host.clock();
        u.forEach(function (n, r) {
          var a = o(
            "VideoPlayerNextgendashNetworkDiagnosticsUtils",
          ).computeNetworkDiagnosticsSampleFromResourceTiming(e, r, t, n);
          a.status !== "pending" &&
            (u.delete(r),
            a.status === "sampled" &&
              e.host.networkDiagnosticsUpdate(a.sample));
        });
      }
    }
    function m(e, t) {
      if (
        !(!e.config.enablePrefetchBandwidthSampling || typeof t != "string")
      ) {
        if (u.size >= c) {
          var n = u.keys().next().value;
          n != null && u.delete(n);
        }
        (u.delete(t), u.set(t, e.host.clock().perfMs));
      }
    }
    function p(e) {
      typeof e == "string" && u.delete(e);
    }
    var _ = new Map(),
      f = 16 * 1024 * 1024,
      g = 0,
      h = new Map();
    function y(e) {
      var t,
        n,
        r = _.get(e),
        o = b.get(e),
        a =
          ((t = r == null ? void 0 : r.size) != null ? t : 0) +
          ((n = o == null ? void 0 : o.size) != null ? n : 0),
        i = h.get(e);
      return i == null
        ? { cacheEntryCount: a, firstSegment: null, init: null, sidx: null }
        : {
            cacheEntryCount: a,
            firstSegment: i.firstSegment,
            init: i.init,
            sidx: i.sidx,
          };
    }
    function C(e, t, n) {
      if (!(!t.startsWith("video_") && !t.startsWith("combo_"))) {
        var r = h.get(e);
        if (r == null) {
          var o = { firstSegment: null, init: null, sidx: null };
          ((r = o), h.set(e, r));
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
    var b = new Map();
    function v(e, t) {
      var n = b.get(e);
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
    function S(e) {
      var t = _.get(e);
      return (t || ((t = new Map()), _.set(e, t)), t);
    }
    function R(e, t) {}
    function L(e, t, n) {
      try {
        var r = D(e, t.prefetchKey);
        if (x(e, t.prefetchKey, r)) return;
        var a = e.host.networkDiagnosticsReadBandwidth(
          e.config.enableBandwidthDiagnosticsFallback,
          e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
        );
        (q(e, r, t.representations, n, a != null ? a : n.bandwidthDiagnostics),
          O(e, r, t.representations));
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
    function E(e, t) {}
    var k = new Set(),
      I = new Map(),
      T = new WeakMap();
    function D(e, t) {
      var n = e.config.prefetchCacheMaxEntries;
      if (n > 0 && !I.has(t))
        for (; I.size >= n; ) {
          var r = I.keys().next().value;
          if (r == null) break;
          te(r);
        }
      var o = S(t);
      return (n > 0 && I.set(t, o), o);
    }
    function x(e, t, n) {
      return e.config.blockDuplicatePrefetch
        ? k.has(t)
          ? !0
          : (k.add(t), !1)
        : n.size !== 0;
    }
    function $(e, t, n, r) {
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
    function P(e, t, n) {
      try {
        var r = D(e, t.prefetchKey);
        if (x(e, t.prefetchKey, r)) return [];
        var a = B(e, t.representations, n),
          i = F(t.representations),
          l = $(t.prefetchKey, a, i, n);
        return (
          l != null && e.config.prefetchCacheMaxEntries > 0 && T.set(l, r),
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
    function N(e, t, n, r) {
      if (n == null) return null;
      var o = W(
        n.videoRepresentationsByBandwidthAsc,
        n.devicePixelRatio,
        n.isDocumentHidden,
        r != null ? r : n.initialBandwidthDiagnostics,
        n.abrConfig,
        e.config.cacheQualityScoreInRepresentation,
        e.config.useSimpleBandwidthEstimate,
        n.playerDimensions,
      );
      return o == null ? null : ee(e, t, o);
    }
    function M(e, t, n) {
      return n == null ? null : ee(e, t, n.audioRepresentation);
    }
    function w(t) {
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
    function A(e) {
      var t = e.env,
        n = e.task;
      try {
        if (t.config.prefetchCacheMaxEntries > 0) {
          var r = T.get(n);
          if (r == null || _.get(n.prefetchKey) !== r) return null;
        }
        var a = S(n.prefetchKey),
          i = t.host.networkDiagnosticsReadBandwidth(
            t.config.enableBandwidthDiagnosticsFallback,
            t.config.bandwidthDiagnosticsFallbackDefaultEstimate,
          ),
          l = [],
          s = N(t, a, n.video, i);
        s != null && l.push(s);
        var u = M(t, a, n.audio);
        return (u != null && l.push(u), l.length === 0 ? null : w(l));
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
    function F(e) {
      var t = e.find(function (e) {
        return e.mimeType.indexOf("audio") > -1;
      });
      return t;
    }
    function O(e, t, n) {
      var r = F(n);
      r != null && ee(e, t, r);
    }
    function B(e, t, n) {
      var r = t.filter(function (e) {
          return e.mimeType.indexOf("video") > -1;
        }),
        o = j(e, r, {
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
    function W(e, t, n, r, o, a, i, l) {
      if (e.length === 0) return null;
      var s = e[0],
        u = H(e, t, n, r, o, a, i, l),
        c = u != null ? u : s;
      return c;
    }
    function q(e, t, n, r, o) {
      var a = B(e, n, r),
        i = W(
          a,
          r.devicePixelRatio,
          r.isDocumentHidden,
          o,
          r.abrConfig,
          e.config.cacheQualityScoreInRepresentation,
          e.config.useSimpleBandwidthEstimate,
          r.playerDimensions,
        );
      i != null && ee(e, t, i);
    }
    var U = 500,
      V = 400;
    function H(e, t, n, r, a, i, l, s) {
      var u = e.map(function (e) {
          return z(e, i);
        }),
        c = s != null ? s : { height: U, width: V },
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
    function G(e, t) {
      return !e || t == null
        ? null
        : o("QualityScoreUtils").parseQualityScoreCurve(t);
    }
    function z(e, t) {
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
        playbackResolutionCsvqmScoreCurveParsed: G(
          t,
          e.playbackResolutionCSVQM,
        ),
        playbackResolutionMosScoreCurve: e.playbackResolutionMOS,
        playbackResolutionMosScoreCurveParsed: G(t, e.playbackResolutionMOS),
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
    function j(e, t, n) {
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
            z(e, !1),
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
    function K(e, t, n) {
      var r = e.get(t);
      r && e.set(t, babelHelpers.extends({}, r, { resultState: n }));
    }
    function Q(e, t, n) {
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
    function X(e, t) {
      var n = e.timing,
        r = n.bodyDurationMs,
        o = n.requestToHeadersMs,
        a = e.byteLength;
      return !Number.isFinite(r) ||
        !Number.isFinite(o) ||
        r < 0 ||
        o < 0 ||
        a <= 0
        ? null
        : {
            bandwidthSample:
              a >= 2e5 && r >= 10 && (a * 8e3) / r <= 1e8
                ? { bytes: a, timeInMs: r }
                : void 0,
            clock: t,
            navigationTimingSample: {
              bytes: a,
              timeToFirstByteMs: o,
              timeToLastByteMs: o + r,
            },
          };
    }
    function Y(e) {
      if (!e.abortController.signal.aborted) {
        e.abortController.abort();
        var t = e.nativeTransfer;
        t != null &&
          (e.resultState.resultState === "pending" && t.cancel(), t.release());
      }
    }
    function J(e) {
      if (!(e == null || !Number.isSafeInteger(e) || e <= 0)) {
        var t = 0,
          n = [];
        _.forEach(function (e) {
          e.forEach(function (r, o) {
            if (
              r.nativeTransfer != null &&
              r.nativeExpectedBodyBytes != null &&
              !r.abortController.signal.aborted
            ) {
              var a;
              ((t += r.nativeExpectedBodyBytes),
                n.push({
                  cacheEntry: e,
                  cacheKey: o,
                  index: (a = r.nativePrefetchIndex) != null ? a : 0,
                  value: r,
                }));
            }
          });
        });
        var r = Math.max(0, f - e);
        if (!(t <= r)) {
          n.sort(function (e, t) {
            return e.index - t.index;
          });
          for (var o of n) {
            var a,
              i = o.cacheEntry,
              l = o.cacheKey,
              s = o.value;
            if (t <= r) break;
            (i.delete(l),
              (t -= (a = s.nativeExpectedBodyBytes) != null ? a : 0),
              Y(s));
          }
        }
      }
    }
    function Z(t, r, a, i, l) {
      var s = Q(
          t.config.enablePrefetchCacheKeyNormalization,
          t.config.enableFBPrefetchCacheKeyNormalization,
          a,
        ),
        u = t.host.nativeMedia;
      if (u != null) {
        var c,
          _ = r.get(s);
        if (
          (_ == null ? void 0 : _.nativeTransfer) != null &&
          !_.abortController.signal.aborted &&
          _.resultState.resultState !== "errored"
        ) {
          var h = _.resultState;
          return babelHelpers.extends({}, _, {
            resultState:
              h.resultState === "pending"
                ? h
                : {
                    resultPromise: (e || (e = n("Promise"))).resolve(h),
                    resultState: "pending",
                  },
          });
        }
        _ != null && (r.delete(s), Y(_));
        var y = new AbortController();
        if (
          l == null ||
          !Number.isSafeInteger(l) ||
          l <= 0 ||
          l >
            Math.min(
              f,
              (c = u.getMaxBodyBytes == null ? void 0 : u.getMaxBodyBytes()) !=
                null
                ? c
                : f,
            )
        ) {
          var C = {
            error: o("nextgendasherr").nextgendasherr(
              t,
              "VideoPlayerNextgendashNativePrefetchOutsideCacheBudget",
            ),
            resultState: "errored",
          };
          return {
            abortController: y,
            representationID: i,
            resultState: {
              resultPromise: (e || (e = n("Promise"))).resolve(C),
              resultState: "pending",
            },
          };
        }
        J(l);
        var b = o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            u.start({ expectedBodyBytes: l, url: a }),
          ),
          v = (e || (e = n("Promise"))).all([b.headers, b.body]).then(
            function (e) {
              var n,
                o = e[0],
                a = e[1],
                i = { resultState: "has_native_body" };
              if (
                (((n = r.get(s)) == null ? void 0 : n.nativeTransfer) === b &&
                  K(r, s, i),
                t.config.enablePrefetchBandwidthSampling &&
                  o.status >= 200 &&
                  o.status < 300)
              ) {
                var l = X(a, t.host.clock());
                l != null && t.host.networkDiagnosticsUpdate(l);
              }
              return i;
            },
            function (e) {
              var n,
                a = {
                  error: o("nextgendasherr").nextgendasherrFromFetchRejection(
                    t,
                    e,
                    "VideoPlayerNextgendashNativePrefetchRejection",
                  ),
                  resultState: "errored",
                };
              if (((n = r.get(s)) == null ? void 0 : n.nativeTransfer) === b) {
                var i = r.get(s);
                (i != null && Y(i), K(r, s, a));
              }
              return a;
            },
          ),
          S = {
            abortController: y,
            nativeExpectedBodyBytes: l,
            nativePrefetchIndex: g++,
            nativeTransfer: b,
            representationID: i,
            resultState: { resultPromise: v, resultState: "pending" },
          };
        return (r.set(s, S), S);
      }
      (d(t), m(t, a));
      var R = new AbortController(),
        L = new (e || (e = n("Promise")))(function (e) {
          t.host
            .fetch(t, a, { signal: R.signal })
            .then(function (n) {
              var o = { response: n, resultState: "has_response" };
              (K(r, s, o), e(o), d(t));
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
              (K(r, s, i), e(i), p(a), d(t));
            });
        }),
        E = {
          abortController: R,
          representationID: i,
          resultState: { resultPromise: L, resultState: "pending" },
        };
      return (r.set(s, E), E);
    }
    function ee(t, r, a) {
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
            m = Z(t, r, d, a.representationID, c.end - u.start + 1);
          (l.push(m.resultState.resultPromise),
            s.push({ url: d, value: m }),
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
            i = Z(t, r, n, a.representationID, e.end - e.start + 1);
          (l.push(i.resultState.resultPromise), s.push({ url: n, value: i }));
        }),
        {
          abort: function () {
            s.forEach(function (e) {
              var n = e.url,
                o = e.value,
                a = Q(
                  t.config.enablePrefetchCacheKeyNormalization,
                  t.config.enableFBPrefetchCacheKeyNormalization,
                  n,
                ),
                i = r.get(a);
              Y(
                o.nativeTransfer != null &&
                  i != null &&
                  i.nativeTransfer === o.nativeTransfer
                  ? i
                  : o,
              );
            });
          },
          promise: (e || (e = n("Promise"))).allSettled(l),
        }
      );
    }
    function te(e) {
      I.delete(e);
      var t = _.get(e);
      (t != null &&
        (t.forEach(function (e) {
          Y(e);
        }),
        t.clear(),
        _.delete(e)),
        b.delete(e),
        k.delete(e),
        h.delete(e));
    }
    function ne(e, t) {
      var n = _.get(t),
        r = new Set();
      if (
        (n == null ||
          n.forEach(function (t) {
            (!e.config.enableFilterFailedPrefetchBootstrap ||
              t.resultState.resultState !== "errored") &&
              r.add(t.representationID);
          }),
        e.config.prefetchCacheReplaySize > 0 && e.host.nativeMedia == null)
      ) {
        var o = b.get(t);
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
    function re(e, t) {
      t.size === 0 && _.delete(e);
    }
    function oe(e, t) {
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
    function ae(e, t, n, r) {
      if ((r === void 0 && (r = e.host.nativeMedia != null), r)) {
        var a = _.get(t),
          i = Q(
            e.config.enablePrefetchCacheKeyNormalization,
            e.config.enableFBPrefetchCacheKeyNormalization,
            n,
          ),
          l = a == null ? void 0 : a.get(i),
          s = null;
        if (a != null && l != null) {
          (a.delete(i), re(t, a));
          var u = l.nativeTransfer;
          u != null &&
          !l.abortController.signal.aborted &&
          l.resultState.resultState !== "errored"
            ? (s = babelHelpers.extends({}, l, {
                abortController: new AbortController(),
                nativeTransfer: o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(u.adopt()),
              }))
            : Y(l);
        }
        return (oe(e, s), s);
      }
      var c = _.get(t),
        m = Q(
          e.config.enablePrefetchCacheKeyNormalization,
          e.config.enableFBPrefetchCacheKeyNormalization,
          n,
        ),
        p = null,
        f =
          e.config.prefetchCacheReplaySize > 0 &&
          e.config.preferReplayCacheOverInflightPrefetch;
      if (
        (f && (p = v(t, m)),
        p == null &&
          c != null &&
          ((p = c.get(m)),
          p != null &&
            p.nativeTransfer != null &&
            (Y(p), c.delete(m), re(t, c), (p = null)),
          p != null))
      ) {
        var g = p.resultState;
        if (
          e.config.prefetchCacheReplaySize > 0 &&
          g.resultState === "has_response"
        ) {
          var h = e.config.prefetchCacheReplaySize,
            y = p.representationID;
          if (!b.has(t)) {
            if (b.size >= h) {
              var C = b.keys().next().value;
              C != null && b.delete(C);
            }
            b.set(t, new Map());
          }
          g.response
            .clone()
            .arrayBuffer()
            .then(
              function (e) {
                var n = b.get(t);
                n != null && n.set(m, { body: e, representationID: y });
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
        (g.resultState === "errored" && (p = null), c.delete(m), re(t, c));
      }
      if (p == null && e.config.prefetchCacheReplaySize > 0 && !f) {
        var S = v(t, m);
        S != null
          ? ((p = S),
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
      return (d(e), oe(e, p), p);
    }
    ((l.getVideoPlayerNextgendashPrefetchKeyForSink = s),
      (l.getPrefetchCacheStatsForKey = y),
      (l.trackPrefetchCacheResourceResult = C),
      (l.internal_getOrAddPrefetchCacheEntry = S),
      (l.initiatePrefetch = L),
      (l.getPrefetchTasks = P),
      (l.processPrefetchTask = A),
      (l.internal_filterVideoRepresentations = j),
      (l.computeVideoPlayerNextgendashNativeNetworkDiagnosticsSample = X),
      (l.evictVideoPlayerNextgendashNativePrefetchesForRequest = J),
      (l.internal_startFetchForPrefetch = Z),
      (l.releasePrefetchKey = te),
      (l.getCachedRepresentationsForPrefetchKey = ne),
      (l.getCachedValueForPrefetchKeyAndURL = ae));
  },
  98,
);
