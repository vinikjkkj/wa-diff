__d(
  "VideoPlayerNextgendashParsedManifest",
  [
    "VideoPlayerNextgendashManifestParser",
    "VideoPlayerNextgendashStateMachine",
    "nextgendasherr",
    "videoUrlUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      for (var n = null, r = 0; r < e.length; r++) {
        var o = e[r],
          a = t(o, r);
        n != null ? n.push(a) : a !== o && ((n = e.slice(0, r)), n.push(a));
      }
      return n != null ? n : e;
    }
    function s(e, t, n) {
      var r = function (t) {
        return t.flatMap(function (e, t) {
          return n.has(e.segmentsInfo) ? [t] : [];
        });
      };
      return {
        application: r(e.manifestRepresentations.application),
        audio: r(e.manifestRepresentations.audio),
        dashManifestXmlString: t,
        usesFallback: n.size > 0,
        video: r(e.manifestRepresentations.video),
      };
    }
    function u(t, n, r, o) {
      var a = function (t, n, r) {
          return n.includes(r) && t.baseURL !== o
            ? babelHelpers.extends({}, t, { baseURL: o })
            : t;
        },
        i = e(n.manifestRepresentations.application, function (e, t) {
          var n = a(e.segmentsInfo, r.application, t);
          return n === e.segmentsInfo
            ? e
            : babelHelpers.extends({}, e, { segmentsInfo: n });
        }),
        l = e(n.manifestRepresentations.audio, function (e, t) {
          var n = a(e.segmentsInfo, r.audio, t);
          return n === e.segmentsInfo
            ? e
            : babelHelpers.extends({}, e, { segmentsInfo: n });
        }),
        s = e(n.manifestRepresentations.video, function (e, t) {
          var n = a(e.segmentsInfo, r.video, t);
          return n === e.segmentsInfo
            ? e
            : babelHelpers.extends({}, e, { segmentsInfo: n });
        });
      return i === n.manifestRepresentations.application &&
        l === n.manifestRepresentations.audio &&
        s === n.manifestRepresentations.video
        ? n
        : babelHelpers.extends({}, n, {
            createdAt: t.host.clock(),
            manifestRepresentations: { application: i, audio: l, video: s },
          });
    }
    var c = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
        null,
        function (e) {
          var t = e.args,
            n = e.env;
          return {
            baseURLFallback: null,
            dashManifestXmlString: null,
            expiredVideoUrlRefreshHandlerState:
              t.initialExpiredVideoUrlRefreshHandlerState,
            fallbackDependencies: null,
            parseRequestedAt: null,
            state: "not_parsed",
            workerOptimizationsEnabled:
              n.config.enableWorkerOptimizations === !0,
          };
        },
        function (t) {
          var n = t.args.audioOnly,
            r = t.env,
            a = t.event,
            i = t.eventClock,
            l = t.sendToSelf,
            c = t.state;
          if (c.state !== "__disposed__")
            switch (a.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "parse_dash_manifest_xml": {
                var d,
                  p = a.dashManifestXmlString,
                  _ = (d = a.baseURLFallback) != null ? d : null,
                  f = c.fallbackDependencies;
                if (p == null)
                  return {
                    baseURLFallback: null,
                    dashManifestXmlString: null,
                    expiredVideoUrlRefreshHandlerState:
                      c.expiredVideoUrlRefreshHandlerState,
                    fallbackDependencies: null,
                    parseRequestedAt: i,
                    state: "not_parsed",
                    workerOptimizationsEnabled: c.workerOptimizationsEnabled,
                  };
                if (
                  c.workerOptimizationsEnabled &&
                  c.state === "parsed" &&
                  c.dashManifestXmlString === p &&
                  f != null &&
                  f.dashManifestXmlString === p &&
                  (!f.usesFallback || _ != null)
                ) {
                  var g =
                    c.baseURLFallback === _ || _ == null
                      ? c.data
                      : u(r, c.data, f, _);
                  return babelHelpers.extends({}, c, {
                    baseURLFallback: _,
                    data: g,
                    parseCompletedAt: r.host.clock(),
                    parseRequestedAt: i,
                  });
                } else if (
                  c.state === "not_parsed" ||
                  (c.workerOptimizationsEnabled && c.baseURLFallback !== _) ||
                  c.dashManifestXmlString !== p
                ) {
                  try {
                    var h = r.host.parseXML(r, p),
                      y = c.workerOptimizationsEnabled ? new Set() : null,
                      C,
                      b;
                    try {
                      C = o("VideoPlayerNextgendashManifestParser").parseMPD(
                        r,
                        h,
                        babelHelpers.extends(
                          { audioOnly: n, baseURLFallback: _ },
                          y == null
                            ? null
                            : {
                                onBaseURLFallbackUsed: function (t) {
                                  y.add(t);
                                },
                              },
                          {
                            workerOptimizationsEnabled:
                              c.workerOptimizationsEnabled,
                          },
                        ),
                      );
                    } catch (e) {
                      b = e;
                    }
                    C != null
                      ? l({
                          dashManifestXml: r.config.releaseParsedManifestXML
                            ? null
                            : h,
                          data: C,
                          fallbackDependencies: y == null ? null : s(C, p, y),
                          type: "_parse_succeeded",
                        })
                      : l({
                          dashManifestXml: h,
                          error: o("nextgendasherr").nextgendasherrFromCause(
                            r,
                            b,
                            "VideoPlayerNextgendashParsedManifestMPDParseError",
                          ),
                          type: "_parse_failed",
                        });
                  } catch (e) {
                    l({
                      dashManifestXml: null,
                      error: o("nextgendasherr").nextgendasherrFromCause(
                        r,
                        e,
                        "VideoPlayerNextgendashParsedManifestXMLParseError",
                      ),
                      type: "_parse_failed",
                    });
                  }
                  return babelHelpers.extends({}, c, {
                    baseURLFallback: _,
                    dashManifestXmlString: p,
                    parseRequestedAt: i,
                  });
                } else
                  return babelHelpers.extends({}, c, {
                    parseCompletedAt: r.host.clock(),
                    parseRequestedAt: i,
                  });
              }
              case "_parse_succeeded":
                return {
                  baseURLFallback: c.baseURLFallback,
                  dashManifestXml: a.dashManifestXml,
                  dashManifestXmlString: c.dashManifestXmlString,
                  data: a.data,
                  expiredVideoUrlRefreshHandlerState:
                    c.expiredVideoUrlRefreshHandlerState,
                  fallbackDependencies: a.fallbackDependencies,
                  parseCompletedAt: i,
                  parseRequestedAt: c.parseRequestedAt,
                  state: "parsed",
                  workerOptimizationsEnabled: c.workerOptimizationsEnabled,
                };
              case "_parse_failed":
                return c.state === "parsed" && r.config.isLivePlayback
                  ? (r.logging.log(r, {
                      error: a.error,
                      format:
                        "live manifest refresh failed to parse, keeping the last parsed manifest",
                      type: "generic_error_as_warning",
                    }),
                    babelHelpers.extends({}, c, { parseCompletedAt: i }))
                  : {
                      baseURLFallback: c.baseURLFallback,
                      dashManifestXml: a.dashManifestXml,
                      dashManifestXmlString: c.dashManifestXmlString,
                      error: a.error,
                      expiredVideoUrlRefreshHandlerState:
                        c.expiredVideoUrlRefreshHandlerState,
                      fallbackDependencies: null,
                      parseCompletedAt: i,
                      parseRequestedAt: c.parseRequestedAt,
                      state: "failed_to_parse",
                      workerOptimizationsEnabled: c.workerOptimizationsEnabled,
                    };
              case "handle_worker_url_refresh_request": {
                var v, S;
                if (c.state !== "parsed") {
                  r.logging.log(r, {
                    error: o("nextgendasherr").nextgendasherr(
                      r,
                      "VideoPlayerNextgendashParsedManifestUrlRefreshWhenNotParsed",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                var R =
                  (v = c.expiredVideoUrlRefreshHandlerState) == null
                    ? void 0
                    : v.handler;
                if (R == null) return;
                var L =
                  (S = c.manifestUrlRefreshPromises) != null ? S : new Map();
                return (
                  m({
                    env: r,
                    expiredVideoUrlRefreshHandler: R,
                    refreshUrlInfos: new Set(a.urls),
                    sendToSelf: l,
                    urlToPromiseMap: L,
                  }),
                  babelHelpers.extends({}, c, { manifestUrlRefreshPromises: L })
                );
              }
              case "_manifest_url_refresh_failed": {
                if (c.state !== "parsed") {
                  r.logging.log(r, {
                    error: o("nextgendasherr").nextgendasherr(
                      r,
                      "VideoPlayerNextgendashParsedManifestUrlRefreshWhenNotParsed",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                return (
                  c.manifestUrlRefreshPromises &&
                    c.manifestUrlRefreshPromises.delete(a.expiredURL),
                  c
                );
              }
              case "_manifest_url_refreshed": {
                var E = function (t) {
                  var e =
                    a.expiredURL === t.baseURL ? a.refreshedURL : t.baseURL;
                  if (t.type === "SegmentTemplate") {
                    var n =
                      a.expiredURL === t.initURL ? a.refreshedURL : t.initURL;
                    return e === t.baseURL && n === t.initURL
                      ? t
                      : babelHelpers.extends({}, t, { baseURL: e, initURL: n });
                  }
                  return e === t.baseURL
                    ? t
                    : babelHelpers.extends({}, t, { baseURL: e });
                };
                if (c.state !== "parsed") {
                  r.logging.log(r, {
                    error: o("nextgendasherr").nextgendasherr(
                      r,
                      "VideoPlayerNextgendashParsedManifestUrlRefreshWhenNotParsed",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                var k = c.data,
                  I = e(k.manifestRepresentations.application, function (e) {
                    var t = E(e.segmentsInfo);
                    return t === e.segmentsInfo
                      ? e
                      : babelHelpers.extends({}, e, { segmentsInfo: t });
                  }),
                  T = e(k.manifestRepresentations.audio, function (e) {
                    var t = E(e.segmentsInfo);
                    return t === e.segmentsInfo
                      ? e
                      : babelHelpers.extends({}, e, { segmentsInfo: t });
                  }),
                  D = e(k.manifestRepresentations.video, function (e) {
                    var t = E(e.segmentsInfo);
                    return t === e.segmentsInfo
                      ? e
                      : babelHelpers.extends({}, e, { segmentsInfo: t });
                  });
                return (
                  c.manifestUrlRefreshPromises &&
                    c.manifestUrlRefreshPromises.delete(a.expiredURL),
                  I === k.manifestRepresentations.application &&
                  T === k.manifestRepresentations.audio &&
                  D === k.manifestRepresentations.video
                    ? c
                    : babelHelpers.extends({}, c, {
                        data: babelHelpers.extends({}, k, {
                          createdAt: r.host.clock(),
                          manifestRepresentations: {
                            application: I,
                            audio: T,
                            video: D,
                          },
                        }),
                      })
                );
              }
              case "update_expired_video_url_refresh_handler":
                return babelHelpers.extends({}, c, {
                  expiredVideoUrlRefreshHandlerState:
                    a.expiredVideoUrlRefreshHandlerState,
                });
              default:
                a.type;
                return;
            }
        },
      ),
      d = 30 * 6e4;
    function m(e) {
      var t = e.env,
        n = e.expiredVideoUrlRefreshHandler,
        r = e.refreshUrlInfos,
        a = e.sendToSelf,
        i = e.urlToPromiseMap,
        l = t.host.clock(),
        s = new Set();
      for (var u of r) {
        var c = o("videoUrlUtils").parseCdnUrlParams(u.url).expirationDate;
        if (c) {
          var m = c.getTime();
          m - l.unixMs <= d && s.add(u.url);
        }
      }
      if (s.size !== 0) {
        var p = function (r) {
          if (i.has(r)) return 1;
          var e = n({ url: r });
          (i.set(r, e),
            e
              .then(function (e) {
                e.ok
                  ? a({
                      expiredURL: r,
                      refreshedURL: e.refreshedUrl,
                      type: "_manifest_url_refreshed",
                    })
                  : (a({ expiredURL: r, type: "_manifest_url_refresh_failed" }),
                    t.logging.log(t, {
                      error: o("nextgendasherr").nextgendasherr(
                        t,
                        "VideoPlayerNextgendashParsedManifestUrlRefreshReturnedNotOk",
                        "expiredURL: %s, reason: %s",
                        r,
                        e.failureReason,
                      ),
                      type: "generic_error",
                    }));
              })
              .catch(function (e) {
                (a({ expiredURL: r, type: "_manifest_url_refresh_failed" }),
                  t.logging.log(t, {
                    error: o("nextgendasherr").nextgendasherrFromCause(
                      t,
                      e,
                      "VideoPlayerNextgendashParsedManifestUrlRefreshFailed",
                      "expiredURL: %s",
                      r,
                    ),
                    type: "generic_error",
                  }));
              }));
        };
        for (var _ of s) p(_);
      }
    }
    ((l.VideoPlayerNextgendashParsedManifestSM = c),
      (l.URL_REFRESH_THRESHOLD_MS = d),
      (l.startRefreshIfApplicable = m));
  },
  98,
);
