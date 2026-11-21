__d(
  "WAWebVideoDashManifestCache",
  [
    "Promise",
    "WALRUMap",
    "WALogger",
    "WATimeUtils",
    "WAWebVideoDashManifestErrors",
    "WAWebVideoDashManifestFetcher",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10,
      c = 5e3,
      d = 3,
      m = 500,
      p = 200,
      _ = new Map(),
      f = new Map(),
      g = new (o("WALRUMap").LRUMap)({ max: p }),
      h = new Set(),
      y = u,
      C = null;
    function b(e) {
      var t;
      ((y = e.maxManifests), (C = (t = e.maxAgeMs) != null ? t : null));
    }
    function v(e) {
      var t = e.timeoutMs,
        r = e.url,
        o = k(r);
      if (o != null)
        return (s || (s = n("Promise"))).resolve({
          kind: "OK",
          manifestXml: o,
        });
      var a = _.get(r);
      if (a != null) return a;
      var i = R({ attempt: 1, timeoutMs: t, url: r }).then(
        function (e) {
          return (
            _.get(r) === i &&
              (_.delete(r),
              e.kind === "OK"
                ? M({ manifestXml: e.manifestXml, url: r })
                : w(r, "NOT_READY")),
            e
          );
        },
        function (e) {
          throw (_.get(r) === i && (_.delete(r), w(r, "FAILED")), e);
        },
      );
      return (_.set(r, i), i);
    }
    function S(e) {
      return e instanceof
        o("WAWebVideoDashManifestErrors").DashManifestHttpError
        ? e.reason === "HTTP_5XX"
        : e instanceof
            o("WAWebVideoDashManifestErrors").DashManifestNetworkError ||
            e instanceof
              o("WAWebVideoDashManifestErrors").DashManifestTimeoutError;
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.attempt,
            n = e.timeoutMs,
            r = e.url;
          try {
            return yield o(
              "WAWebVideoDashManifestFetcher",
            ).fetchVideoDashManifest({ timeoutMs: n, url: r });
          } catch (e) {
            if (t >= d || !S(e)) throw e;
            return (
              yield E(m * Math.pow(2, t - 1)),
              R({ attempt: t + 1, timeoutMs: n, url: r })
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return new (s || (s = n("Promise")))(function (t) {
        self.setTimeout(t, e);
      });
    }
    function k(e) {
      var t = f.get(e);
      return t != null && !D(t.fetchedAtMs) ? t.manifestXml : null;
    }
    function I(e) {
      var t;
      return (t = _.get(e)) != null ? t : null;
    }
    function T(e) {
      var t;
      if (_.has(e)) return "IN_FLIGHT";
      var n = f.get(e);
      return n != null && D(n.fetchedAtMs)
        ? "EXPIRED"
        : (t = g.get(e)) != null
          ? t
          : "NEVER_REQUESTED";
    }
    function D(e) {
      var t = C;
      return t != null && o("WATimeUtils").unixTimeMs() - e > t;
    }
    function x(e) {
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function $(e) {
      f.delete(e) && (g.set(e, "DROPPED"), A());
    }
    function P() {
      var e = !1;
      (f.forEach(function (t, n) {
        var r = t.fetchedAtMs;
        D(r) && (f.delete(n), g.set(n, "EXPIRED"), (e = !0));
      }),
        e && A());
    }
    function N() {
      var e = f.size > 0;
      (f.forEach(function (e, t) {
        return g.set(t, "CLEARED");
      }),
        _.forEach(function (e, t) {
          return g.set(t, "CLEARED");
        }),
        f.clear(),
        _.clear(),
        e && A());
    }
    function M(e) {
      var t = e.manifestXml,
        n = e.url;
      for (f.delete(n); f.size >= y; ) {
        var r = f.entries().next().value;
        if (r == null) break;
        var a = r[0],
          i = r[1].fetchedAtMs;
        (f.delete(a), g.set(a, D(i) ? "EXPIRED" : "EVICTED"));
      }
      (f.set(n, { fetchedAtMs: o("WATimeUtils").unixTimeMs(), manifestXml: t }),
        A());
    }
    function w(e, t) {
      (g.set(e, t), f.delete(e) && A());
    }
    function A() {
      Array.from(h).forEach(function (t) {
        if (h.has(t))
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
    ((l.MANIFEST_FETCH_TIMEOUT_MS = c),
      (l.configureVideoDashManifestCache = b),
      (l.loadVideoDashManifest = v),
      (l.peekVideoDashManifest = k),
      (l.peekVideoDashManifestRequest = I),
      (l.getVideoDashManifestMiss = T),
      (l.subscribeToVideoDashManifests = x),
      (l.invalidateVideoDashManifest = $),
      (l.pruneExpiredVideoDashManifests = P),
      (l.clearVideoDashManifestCache = N));
  },
  98,
);
