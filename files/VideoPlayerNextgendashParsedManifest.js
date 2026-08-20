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
          a = t(o);
        n != null ? n.push(a) : a !== o && ((n = e.slice(0, r)), n.push(a));
      }
      return n != null ? n : e;
    }
    var s = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
        null,
        function (e) {
          var t = e.args;
          return {
            dashManifestXmlString: null,
            expiredVideoUrlRefreshHandlerState:
              t.initialExpiredVideoUrlRefreshHandlerState,
            parseRequestedAt: null,
            state: "not_parsed",
          };
        },
        function (t) {
          var n = t.args.audioOnly,
            r = t.env,
            a = t.event,
            i = t.eventClock,
            l = t.sendToSelf,
            s = t.state;
          if (s.state !== "__disposed__")
            switch (a.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "parse_dash_manifest_xml": {
                var u = a.baseURLFallback,
                  d = a.dashManifestXmlString;
                if (d == null)
                  return {
                    dashManifestXmlString: null,
                    expiredVideoUrlRefreshHandlerState:
                      s.expiredVideoUrlRefreshHandlerState,
                    parseRequestedAt: i,
                    state: "not_parsed",
                  };
                if (s.state === "not_parsed" || s.dashManifestXmlString !== d) {
                  try {
                    var m = r.host.parseXML(r, d),
                      p,
                      _;
                    try {
                      p = o("VideoPlayerNextgendashManifestParser").parseMPD(
                        r,
                        m,
                        { audioOnly: n, baseURLFallback: u },
                      );
                    } catch (e) {
                      _ = e;
                    }
                    p != null
                      ? l({ data: p, type: "_parse_succeeded" })
                      : l({
                          dashManifestXml: m,
                          error: o("nextgendasherr").nextgendasherrFromCause(
                            r,
                            _,
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
                  return babelHelpers.extends({}, s, {
                    dashManifestXmlString: d,
                    parseRequestedAt: i,
                  });
                } else
                  return babelHelpers.extends({}, s, {
                    parseCompletedAt: r.host.clock(),
                    parseRequestedAt: i,
                  });
              }
              case "_parse_succeeded":
                return {
                  dashManifestXmlString: s.dashManifestXmlString,
                  data: a.data,
                  expiredVideoUrlRefreshHandlerState:
                    s.expiredVideoUrlRefreshHandlerState,
                  parseCompletedAt: i,
                  parseRequestedAt: s.parseRequestedAt,
                  state: "parsed",
                };
              case "_parse_failed":
                return {
                  dashManifestXml: a.dashManifestXml,
                  dashManifestXmlString: s.dashManifestXmlString,
                  error: a.error,
                  expiredVideoUrlRefreshHandlerState:
                    s.expiredVideoUrlRefreshHandlerState,
                  parseCompletedAt: i,
                  parseRequestedAt: s.parseRequestedAt,
                  state: "failed_to_parse",
                };
              case "handle_worker_url_refresh_request": {
                var f, g;
                if (s.state !== "parsed") {
                  r.logging.log(r, {
                    error: o("nextgendasherr").nextgendasherr(
                      r,
                      "VideoPlayerNextgendashParsedManifestUrlRefreshWhenNotParsed",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                var h =
                  (f = s.expiredVideoUrlRefreshHandlerState) == null
                    ? void 0
                    : f.handler;
                if (h == null) return;
                var y =
                  (g = s.manifestUrlRefreshPromises) != null ? g : new Map();
                return (
                  c({
                    env: r,
                    expiredVideoUrlRefreshHandler: h,
                    refreshUrlInfos: new Set(a.urls),
                    sendToSelf: l,
                    urlToPromiseMap: y,
                  }),
                  babelHelpers.extends({}, s, { manifestUrlRefreshPromises: y })
                );
              }
              case "_manifest_url_refresh_failed": {
                if (s.state !== "parsed") {
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
                  s.manifestUrlRefreshPromises &&
                    s.manifestUrlRefreshPromises.delete(a.expiredURL),
                  s
                );
              }
              case "_manifest_url_refreshed": {
                var C = function (t) {
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
                if (s.state !== "parsed") {
                  r.logging.log(r, {
                    error: o("nextgendasherr").nextgendasherr(
                      r,
                      "VideoPlayerNextgendashParsedManifestUrlRefreshWhenNotParsed",
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
                var b = s.data,
                  v = e(b.manifestRepresentations.application, function (e) {
                    var t = C(e.segmentsInfo);
                    return t === e.segmentsInfo
                      ? e
                      : babelHelpers.extends({}, e, { segmentsInfo: t });
                  }),
                  S = e(b.manifestRepresentations.audio, function (e) {
                    var t = C(e.segmentsInfo);
                    return t === e.segmentsInfo
                      ? e
                      : babelHelpers.extends({}, e, { segmentsInfo: t });
                  }),
                  R = e(b.manifestRepresentations.video, function (e) {
                    var t = C(e.segmentsInfo);
                    return t === e.segmentsInfo
                      ? e
                      : babelHelpers.extends({}, e, { segmentsInfo: t });
                  });
                return (
                  s.manifestUrlRefreshPromises &&
                    s.manifestUrlRefreshPromises.delete(a.expiredURL),
                  v === b.manifestRepresentations.application &&
                  S === b.manifestRepresentations.audio &&
                  R === b.manifestRepresentations.video
                    ? s
                    : babelHelpers.extends({}, s, {
                        data: babelHelpers.extends({}, b, {
                          createdAt: r.host.clock(),
                          manifestRepresentations: {
                            application: v,
                            audio: S,
                            video: R,
                          },
                        }),
                      })
                );
              }
              case "update_expired_video_url_refresh_handler":
                return babelHelpers.extends({}, s, {
                  expiredVideoUrlRefreshHandlerState:
                    a.expiredVideoUrlRefreshHandlerState,
                });
              default:
                a.type;
                return;
            }
        },
      ),
      u = 30 * 6e4;
    function c(e) {
      var t = e.env,
        n = e.expiredVideoUrlRefreshHandler,
        r = e.refreshUrlInfos,
        a = e.sendToSelf,
        i = e.urlToPromiseMap,
        l = t.host.clock(),
        s = new Set();
      for (var c of r) {
        var d = o("videoUrlUtils").parseCdnUrlParams(c.url).expirationDate;
        if (d) {
          var m = d.getTime();
          m - l.unixMs <= u && s.add(c.url);
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
    ((l.VideoPlayerNextgendashParsedManifestSM = s),
      (l.URL_REFRESH_THRESHOLD_MS = u),
      (l.startRefreshIfApplicable = c));
  },
  98,
);
