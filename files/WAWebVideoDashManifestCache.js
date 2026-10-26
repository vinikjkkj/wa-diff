__d(
  "WAWebVideoDashManifestCache",
  [
    "Promise",
    "WALogger",
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
      p = new Map(),
      _ = new Map(),
      f = new Set();
    function g(e) {
      var t = e.timeoutMs,
        r = e.url,
        o = v(r);
      if (o != null)
        return (s || (s = n("Promise"))).resolve({
          kind: "OK",
          manifestXml: o,
        });
      var a = p.get(r);
      if (a != null) return a;
      var i = y({ attempt: 1, timeoutMs: t, url: r }).then(
        function (e) {
          return (
            p.get(r) === i &&
              (p.delete(r),
              e.kind === "OK" && E({ manifestXml: e.manifestXml, url: r })),
            e
          );
        },
        function (e) {
          throw (p.get(r) === i && p.delete(r), e);
        },
      );
      return (p.set(r, i), i);
    }
    function h(e) {
      return e instanceof
        o("WAWebVideoDashManifestErrors").DashManifestHttpError
        ? e.reason === "HTTP_5XX"
        : e instanceof
            o("WAWebVideoDashManifestErrors").DashManifestNetworkError ||
            e instanceof
              o("WAWebVideoDashManifestErrors").DashManifestTimeoutError;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.attempt,
            n = e.timeoutMs,
            r = e.url;
          try {
            return yield o(
              "WAWebVideoDashManifestFetcher",
            ).fetchVideoDashManifest({ timeoutMs: n, url: r });
          } catch (e) {
            if (t >= d || !h(e)) throw e;
            return (
              yield b(m * Math.pow(2, t - 1)),
              y({ attempt: t + 1, timeoutMs: n, url: r })
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return new (s || (s = n("Promise")))(function (t) {
        self.setTimeout(t, e);
      });
    }
    function v(e) {
      var t;
      return (t = _.get(e)) != null ? t : null;
    }
    function S(e) {
      return (
        f.add(e),
        function () {
          f.delete(e);
        }
      );
    }
    function R(e) {
      _.delete(e) && k();
    }
    function L() {
      var e = _.size > 0;
      (_.clear(), p.clear(), e && k());
    }
    function E(e) {
      var t = e.manifestXml,
        n = e.url;
      if ((_.delete(n), _.size >= u)) {
        var r = _.keys().next().value;
        r != null && _.delete(r);
      }
      (_.set(n, t), k());
    }
    function k() {
      Array.from(f).forEach(function (t) {
        if (f.has(t))
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
      (l.loadVideoDashManifest = g),
      (l.peekVideoDashManifest = v),
      (l.subscribeToVideoDashManifests = S),
      (l.invalidateVideoDashManifest = R),
      (l.clearVideoDashManifestCache = L));
  },
  98,
);
