__d(
  "WAWebVideoDashManifestFetcher",
  [
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebMediaUrlAllowlist",
    "WAWebPonyfillsFetch",
    "WAWebVideoDashManifestErrors",
    "WAWebVideoDashManifestODS",
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
    async function f(t) {
      var n = t.timeoutMs,
        a = t.url;
      if (!o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(a)) {
        var i = new (o(
          "WAWebVideoDashManifestErrors",
        ).DashManifestUrlNotAllowedError)();
        throw (
          o("WAWebVideoDashManifestODS").bumpDashManifestFailure(i),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[video-dash] manifest url host is not on the media CDN allow-list",
                ])),
            )
            .sendLogs(m),
          i
        );
      }
      var l = new AbortController(),
        s = self.setTimeout(function () {
          return l.abort();
        }, n);
      o("WAWebVideoDashManifestODS").bumpDashManifestAttempt();
      var u = o("WATimeUtils").monotonicTime();
      try {
        var c = await r("WAWebPonyfillsFetch")(a, { signal: l.signal });
        y(c.status);
        var d = C(await c.text());
        return (
          o("WAWebVideoDashManifestODS").bumpDashManifestResult(
            d,
            o("WATimeUtils").monotonicTimeSince(u),
          ),
          d
        );
      } catch (e) {
        throw h(g(e));
      } finally {
        self.clearTimeout(s);
      }
    }
    function g(e) {
      return e instanceof o("WAWebVideoDashManifestErrors").DashManifestError
        ? e
        : r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
          ? new (o("WAWebVideoDashManifestErrors").DashManifestTimeoutError)()
          : new (o("WAWebVideoDashManifestErrors").DashManifestNetworkError)();
    }
    function h(e) {
      o("WAWebVideoDashManifestODS").bumpDashManifestFailure(e);
      var t =
        e instanceof o("WAWebVideoDashManifestErrors").DashManifestHttpError
          ? e.reason + " " + e.status
          : e.reason;
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[video-dash] manifest fetch gave ",
                "",
              ])),
            t,
          )
          .sendLogs(d),
        e
      );
    }
    function y(e) {
      if (!(e >= u && e < c))
        throw new (o("WAWebVideoDashManifestErrors").DashManifestHttpError)(e);
    }
    function C(e) {
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
    ((l.fetchVideoDashManifest = f), (l.readManifestBody = C));
  },
  98,
);
