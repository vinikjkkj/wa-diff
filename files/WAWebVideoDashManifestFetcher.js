__d(
  "WAWebVideoDashManifestFetcher",
  [
    "WAAbortError",
    "WALogger",
    "WAWebMediaUrlAllowlist",
    "WAWebPonyfillsFetch",
    "WAWebVideoDashManifestErrors",
    "WAWebVideoDashManifestODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 200,
      c = 300,
      d = "video-dash-manifest-fetch-failed",
      m = "video-dash-manifest-url-not-allowlisted",
      p = /^(?:\s|<\?[\s\S]*?\?>|<!--[\s\S]*?-->|<!DOCTYPE[^>]*>)*/,
      _ = /^<(?:[A-Za-z_][\w.-]*:)?MPD[\s/>]/;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.timeoutMs,
            n = e.url;
          if (!o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(n)) {
            var a = new (o(
              "WAWebVideoDashManifestErrors",
            ).DashManifestUrlNotAllowedError)();
            throw (
              o("WAWebVideoDashManifestODS").bumpDashManifestFailure(a),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[video-dash] manifest url host is not on the media CDN allow-list",
                    ])),
                )
                .sendLogs(m),
              a
            );
          }
          var i = new AbortController(),
            l = self.setTimeout(function () {
              return i.abort();
            }, t);
          o("WAWebVideoDashManifestODS").bumpDashManifestAttempt();
          try {
            var u = yield r("WAWebPonyfillsFetch")(n, { signal: i.signal });
            C(u.status);
            var c = b(yield u.text());
            return (
              o("WAWebVideoDashManifestODS").bumpDashManifestResult(c),
              c
            );
          } catch (e) {
            throw y(h(e));
          } finally {
            self.clearTimeout(l);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return e instanceof o("WAWebVideoDashManifestErrors").DashManifestError
        ? e
        : r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
          ? new (o("WAWebVideoDashManifestErrors").DashManifestTimeoutError)()
          : new (o("WAWebVideoDashManifestErrors").DashManifestNetworkError)();
    }
    function y(t) {
      o("WAWebVideoDashManifestODS").bumpDashManifestFailure(t);
      var n =
        t instanceof o("WAWebVideoDashManifestErrors").DashManifestHttpError
          ? t.reason + " " + t.status
          : t.reason;
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[video-dash] manifest fetch gave ",
                "",
              ])),
            n,
          )
          .sendLogs(d),
        t
      );
    }
    function C(e) {
      if (!(e >= u && e < c))
        throw new (o("WAWebVideoDashManifestErrors").DashManifestHttpError)(e);
    }
    function b(e) {
      var t = e.trim();
      if (t === "") return { kind: "NOT_READY" };
      if (t.startsWith("<")) {
        if (!_.test(t.replace(p, "")))
          throw new (o(
            "WAWebVideoDashManifestErrors",
          ).DashManifestParseError)();
        return { kind: "OK", manifestXml: t };
      }
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        throw new (o("WAWebVideoDashManifestErrors").DashManifestParseError)();
      }
      var r = Array.isArray(n);
      if (n == null || typeof n != "object" || r)
        throw new (o("WAWebVideoDashManifestErrors").DashManifestParseError)();
      if (Object.keys(n).length !== 0)
        throw new (o("WAWebVideoDashManifestErrors").DashManifestParseError)();
      return { kind: "NOT_READY" };
    }
    ((l.fetchVideoDashManifest = f), (l.readManifestBody = b));
  },
  98,
);
