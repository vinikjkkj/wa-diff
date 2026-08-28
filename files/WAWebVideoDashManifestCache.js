__d(
  "WAWebVideoDashManifestCache",
  [
    "Promise",
    "WATimeUtils",
    "WAWebVideoDashManifestErrors",
    "WAWebVideoDashManifestFetcher",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 10,
      u = 3,
      c = 500,
      d = 300,
      m = new Map(),
      p = new Map();
    function _(t) {
      var r = t.timeoutMs,
        o = t.url,
        a = C(o);
      if (a != null)
        return (e || (e = n("Promise"))).resolve({
          kind: "OK",
          manifestXml: a,
        });
      var i = m.get(o);
      if (i != null) return i;
      var l = g({ attempt: 1, timeoutMs: r, url: o }).then(
        function (e) {
          return (
            m.delete(o),
            e.kind === "OK" && b({ manifestXml: e.manifestXml, url: o }),
            e
          );
        },
        function (e) {
          throw (m.delete(o), e);
        },
      );
      return (m.set(o, l), l);
    }
    function f(e) {
      return e instanceof
        o("WAWebVideoDashManifestErrors").DashManifestHttpError
        ? e.reason === "HTTP_5XX"
        : e instanceof
            o("WAWebVideoDashManifestErrors").DashManifestNetworkError ||
            e instanceof
              o("WAWebVideoDashManifestErrors").DashManifestTimeoutError;
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.attempt,
            n = e.timeoutMs,
            r = e.url;
          try {
            return yield o(
              "WAWebVideoDashManifestFetcher",
            ).fetchVideoDashManifest({ timeoutMs: n, url: r });
          } catch (e) {
            if (t >= u || !f(e)) throw e;
            return (
              yield y(c * Math.pow(2, t - 1)),
              g({ attempt: t + 1, timeoutMs: n, url: r })
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(t) {
      return new (e || (e = n("Promise")))(function (e) {
        self.setTimeout(e, t);
      });
    }
    function C(e) {
      var t = p.get(e);
      return t == null || t.expiresAtSeconds <= o("WATimeUtils").unixTime()
        ? null
        : t.manifestXml;
    }
    function b(e) {
      var t = e.manifestXml,
        n = e.url;
      if ((p.delete(n), p.size >= s)) {
        var r = p.keys().next().value;
        r != null && p.delete(r);
      }
      p.set(n, {
        expiresAtSeconds: o("WATimeUtils").unixTime() + d,
        manifestXml: t,
      });
    }
    ((l.loadVideoDashManifest = _), (l.peekVideoDashManifest = C));
  },
  98,
);
