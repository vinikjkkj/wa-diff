__d(
  "WAWebVideoDashManifestErrors",
  [],
  function (t, n, r, o, a, i) {
    var e = 404,
      l = 500,
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n) || this),
            (r.name = "DashManifestError"),
            (r.reason = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, _(t), "manifest fetch returned HTTP " + t) || this),
            (n.name = "DashManifestHttpError"),
            (n.status = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      c = (function (e) {
        function t() {
          var t;
          return (
            (t =
              e.call(
                this,
                "NETWORK_ERROR",
                "manifest fetch failed before a response arrived",
              ) || this),
            (t.name = "DashManifestNetworkError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      d = (function (e) {
        function t() {
          var t;
          return (
            (t =
              e.call(
                this,
                "TIMEOUT",
                "manifest fetch exceeded the caller-supplied timeout",
              ) || this),
            (t.name = "DashManifestTimeoutError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      m = (function (e) {
        function t() {
          var t;
          return (
            (t =
              e.call(
                this,
                "PARSE_ERROR",
                "manifest response body is not an MPD document",
              ) || this),
            (t.name = "DashManifestParseError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      p = (function (e) {
        function t() {
          var t;
          return (
            (t =
              e.call(
                this,
                "URL_NOT_ALLOWED",
                "manifest url host is not on the media CDN allow-list",
              ) || this),
            (t.name = "DashManifestUrlNotAllowedError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s);
    function _(t) {
      return t === e ? "HTTP_404" : t >= l ? "HTTP_5XX" : "HTTP_OTHER";
    }
    ((i.DashManifestError = s),
      (i.DashManifestHttpError = u),
      (i.DashManifestNetworkError = c),
      (i.DashManifestTimeoutError = d),
      (i.DashManifestParseError = m),
      (i.DashManifestUrlNotAllowedError = p));
  },
  66,
);
