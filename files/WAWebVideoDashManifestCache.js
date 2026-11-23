__d(
  "WAWebVideoDashManifestCache",
  [
    "WALRUMap",
    "WALogger",
    "WATimeUtils",
    "WAWebVideoDashManifestErrors",
    "WAWebVideoDashManifestFetcher",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 10,
      u = 5e3,
      c = 3,
      d = 500,
      m = 200,
      p = new Map(),
      _ = new Map(),
      f = new (o("WALRUMap").LRUMap)({ max: m }),
      g = new Set(),
      h = s,
      y = null;
    function C(e) {
      var t;
      ((h = e.maxManifests), (y = (t = e.maxAgeMs) != null ? t : null));
    }
    function b(e) {
      var t = e.timeoutMs,
        n = e.url,
        r = L(n);
      if (r != null) return Promise.resolve({ kind: "OK", manifestXml: r });
      var o = p.get(n);
      if (o != null) return o;
      var a = S({ attempt: 1, timeoutMs: t, url: n }).then(
        function (e) {
          return (
            p.get(n) === a &&
              (p.delete(n),
              e.kind === "OK"
                ? P({ manifestXml: e.manifestXml, url: n })
                : N(n, "NOT_READY")),
            e
          );
        },
        function (e) {
          throw (p.get(n) === a && (p.delete(n), N(n, "FAILED")), e);
        },
      );
      return (p.set(n, a), a);
    }
    function v(e) {
      return e instanceof
        o("WAWebVideoDashManifestErrors").DashManifestHttpError
        ? e.reason === "HTTP_5XX"
        : e instanceof
            o("WAWebVideoDashManifestErrors").DashManifestNetworkError ||
            e instanceof
              o("WAWebVideoDashManifestErrors").DashManifestTimeoutError;
    }
    async function S(e) {
      var t = e.attempt,
        n = e.timeoutMs,
        r = e.url;
      try {
        return await o("WAWebVideoDashManifestFetcher").fetchVideoDashManifest({
          timeoutMs: n,
          url: r,
        });
      } catch (e) {
        if (t >= c || !v(e)) throw e;
        return (
          await R(d * Math.pow(2, t - 1)),
          S({ attempt: t + 1, timeoutMs: n, url: r })
        );
      }
    }
    function R(e) {
      return new Promise(function (t) {
        self.setTimeout(t, e);
      });
    }
    function L(e) {
      var t = _.get(e);
      return t != null && !I(t.fetchedAtMs) ? t.manifestXml : null;
    }
    function E(e) {
      var t;
      return (t = p.get(e)) != null ? t : null;
    }
    function k(e) {
      var t;
      if (p.has(e)) return "IN_FLIGHT";
      var n = _.get(e);
      return n != null && I(n.fetchedAtMs)
        ? "EXPIRED"
        : (t = f.get(e)) != null
          ? t
          : "NEVER_REQUESTED";
    }
    function I(e) {
      var t = y;
      return t != null && o("WATimeUtils").unixTimeMs() - e > t;
    }
    function T(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function D(e) {
      _.delete(e) && (f.set(e, "DROPPED"), M());
    }
    function x() {
      var e = !1;
      (_.forEach(function (t, n) {
        var r = t.fetchedAtMs;
        I(r) && (_.delete(n), f.set(n, "EXPIRED"), (e = !0));
      }),
        e && M());
    }
    function $() {
      var e = _.size > 0;
      (_.forEach(function (e, t) {
        return f.set(t, "CLEARED");
      }),
        p.forEach(function (e, t) {
          return f.set(t, "CLEARED");
        }),
        _.clear(),
        p.clear(),
        e && M());
    }
    function P(e) {
      var t = e.manifestXml,
        n = e.url;
      for (_.delete(n); _.size >= h; ) {
        var r = _.entries().next().value;
        if (r == null) break;
        var a = r[0],
          i = r[1].fetchedAtMs;
        (_.delete(a), f.set(a, I(i) ? "EXPIRED" : "EVICTED"));
      }
      (_.set(n, { fetchedAtMs: o("WATimeUtils").unixTimeMs(), manifestXml: t }),
        M());
    }
    function N(e, t) {
      (f.set(e, t), _.delete(e) && M());
    }
    function M() {
      Array.from(g).forEach(function (t) {
        if (g.has(t))
          try {
            t();
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[video-dash] manifest cache listener failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("video-dash-manifest-listener-failed");
          }
      });
    }
    ((l.MANIFEST_FETCH_TIMEOUT_MS = u),
      (l.configureVideoDashManifestCache = C),
      (l.loadVideoDashManifest = b),
      (l.peekVideoDashManifest = L),
      (l.peekVideoDashManifestRequest = E),
      (l.getVideoDashManifestMiss = k),
      (l.subscribeToVideoDashManifests = T),
      (l.invalidateVideoDashManifest = D),
      (l.pruneExpiredVideoDashManifests = x),
      (l.clearVideoDashManifestCache = $));
  },
  98,
);
