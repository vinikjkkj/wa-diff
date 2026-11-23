__d(
  "WAGetMediaRoute",
  [
    "$InternalEnum",
    "WACreateGetVcaEnabledBucket",
    "WAExtractNcHotTimestamp",
    "WAGatherMediaInfo",
    "WAMediaRouteSelection",
    "WAPromiseManagement",
    "WAResultOrError",
    "WATagsLogger",
    "WATimeUtils",
    "WAWaitForComms",
    "WAWorkerGlobalScope",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = o("WATagsLogger").TAGS(["GetMediaRoute"]),
      g = 86400,
      h = n("$InternalEnum")({
        Fresh: "fresh",
        Cached: "cached",
        Stale: "stale",
      }),
      y = null,
      C = !1,
      b = null;
    async function v(t, n) {
      n == null || n.addPoint("get_cached_or_fresh_media_access_start");
      var r = await E();
      if (
        (n == null || n.addPoint("get_cached_or_fresh_media_access_end"),
        !r.success)
      )
        return (
          f.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to get mediaAccess: ",
                "",
              ])),
            r.error,
          ),
          n == null ||
            n.addPoint("get_media_access_failed", {
              string: { mediaAccessStatus: r.error },
            }),
          r
        );
      n == null ||
        n.addAnnotations({ string: { mediaAccessStatus: r.value.state } });
      var a = r.value.mediaAccess,
        i = a.authToken,
        l = a.hosts,
        u = a.maxBuckets,
        c =
          t.operation === "upload"
            ? o("WAMediaRouteSelection").mediaRouteSelection({
                operation: "upload",
                mediaType: t.serverMediaType,
                hosts: l,
              })
            : o("WAMediaRouteSelection").mediaRouteSelection({
                operation: "download",
                mediaType: t.serverMediaType,
                hosts: l,
                catHotTimespan: g,
                ncHot: o("WAExtractNcHotTimestamp").extractNcHotTimestamp(
                  t.directPath,
                ),
                getVcaEnabledBucket: o(
                  "WACreateGetVcaEnabledBucket",
                ).msgrCreateGetVcaEnabledBucket(t.directPath, u),
              }),
        d = c.bucket,
        m = c.fallbackHost,
        p = c.selectedHost;
      return p == null
        ? (f.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Error: no media host",
              ])),
          ),
          o("WAResultOrError").makeError("no-host"))
        : o("WAResultOrError").makeResult({
            authToken: i,
            selectedHost: p,
            fallbackHost: m,
            bucket: d,
          });
    }
    function S() {
      var e = b;
      e != null &&
        (o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(e),
        (b = null));
    }
    function R(e) {
      S();
      var t = Math.max(e.authTokenExpiryTs - o("WATimeUtils").unixTime(), 0);
      if (!(t <= 300)) {
        var n = o("WATimeUtils").pastUnixTime(300, e.authTokenExpiryTs),
          r = o("WATimeUtils").pastUnixTime(
            Math.floor(t * 0.2),
            e.authTokenExpiryTs,
          ),
          a = n < r ? n : r,
          i = o("WATimeUtils").cappedMillisecondsUntil(a),
          l = Math.floor(Math.random() * o("WATimeUtils").MINUTE_MILLISECONDS),
          s = o("WAWorkerGlobalScope").workerGlobalScope.setTimeout(
            function () {
              (f.LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "AuthTTL approaching expiry, refreshing MediaAccess routes",
                  ])),
              ),
                L().catch(function (e) {
                  f.ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Error occurred during authTTL automatic refresh: ",
                        "",
                      ])),
                    e,
                  );
                }));
            },
            i + l,
          );
        b = s;
      }
    }
    var L = o("WAPromiseManagement").cacheWhilePending(
        function () {
          return "all";
        },
        async function () {
          if (C)
            return (
              f.LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "mediaAccess has gone, but we are still locked by backoff",
                  ])),
              ),
              o("WAResultOrError").makeError("backoff")
            );
          (await o("WAWaitForComms").waitForComms(),
            f.LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "mediaAccess has gone, gather a new one",
                ])),
            ),
            S());
          var e = await o("WAGatherMediaInfo").gatherMediaInfo();
          if (e.success)
            return (
              (y = e.value),
              R(e.value),
              o("WAResultOrError").makeResult({
                mediaAccess: e.value,
                state: h.Fresh,
              })
            );
          var t = e.error,
            n = t === "disconnected" ? "disconnected" : t.type;
          return (
            f.WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Can not get mediaAccess: ",
                  "",
                ])),
              n,
            ),
            t === "disconnected" || t.type === "client-error"
              ? o("WAResultOrError").makeError("disconnected")
              : (t.type,
                (C = !0),
                o("WAWorkerGlobalScope").workerGlobalScope.setTimeout(
                  function () {
                    ((C = !1),
                      L().catch(function (e) {
                        f.ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "Error occurred on gather after backoff expiry: ",
                              "",
                            ])),
                          e,
                        );
                      }));
                  },
                  t.backoffMs,
                ),
                o("WAResultOrError").makeError("backoff"))
          );
        },
      ),
      E = function () {
        var e = y;
        if (e == null) return L();
        if (o("WATimeUtils").isInFuture(e.routesExpiryTs))
          return Promise.resolve(
            o("WAResultOrError").makeResult({
              mediaAccess: e,
              state: h.Cached,
            }),
          );
        var t = L();
        return o("WATimeUtils").isInFuture(e.authTokenExpiryTs)
          ? Promise.resolve(
              o("WAResultOrError").makeResult({
                mediaAccess: e,
                state: h.Stale,
              }),
            )
          : t;
      };
    function k() {
      ((y = null), (C = !1), S());
    }
    ((l.getMediaRoute = v),
      (l.getCachedOrFreshMediaAccess = E),
      (l.clearCachedMediaAccessForTest = k));
  },
  98,
);
