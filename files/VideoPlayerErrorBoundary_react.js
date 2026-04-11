__d(
  "VideoPlayerErrorBoundary.react",
  ["FBLogger", "getErrorSafe", "oz-player/utils/OzErrorUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.state = { error: null }),
            (t.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix =
              !0),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.getDerivedStateFromError = function (t) {
            return { error: r("getErrorSafe")(t) };
          }));
        var n = t.prototype;
        return (
          (n.componentDidCatch = function (t, n) {
            var e = n.componentStack,
              a = r("getErrorSafe")(t);
            a.componentStack = e;
            var i = this.props,
              l = i.description,
              s = i.onError,
              u = i.project,
              c = o("oz-player/utils/OzErrorUtils").isOzError(t)
                ? t.getType()
                : t != null && typeof t.name == "string"
                  ? t.name
                  : a.name;
            try {
              a.name = c;
            } catch (e) {}
            var d = "VideoPlayerErrorBoundary caught an " + c;
            l != null && (d = d + " (" + l + ")");
            var m = [
                "OZ_NETWORK",
                "MEDIA_ERR_DECODE",
                "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR",
              ],
              p = [
                "Network failure:",
                "Network failure.",
                "HTTP error.",
                "Bad URL timestamp",
                "URL signature expired",
                "No license for com.widevine.alpha",
                "OZ_DRM_MANAGER: Endpoint returned error: DEVICE_CERTIFICATE_REVOKED",
              ],
              _ =
                m.every(function (e) {
                  return a.name !== e;
                }) &&
                p.every(function (e) {
                  return !a.message.startsWith(e);
                }),
              f = r("FBLogger")(u == null ? "comet_video_player" : u).catching(
                a,
              );
            ([
              "OZ_DRM_MANAGER",
              "OZ_JAVASCRIPT_NATIVE",
              "OZ_INITIALIZATION",
            ].includes(a.name) && (f = f.addToCategoryKey(a.message)),
              _ ? f.fatal(d) : f.warn(d),
              s != null && s(a));
          }),
          (n.render = function () {
            var e = this.props,
              t = e.children,
              n = e.fallback,
              r = this.state.error;
            return r ? (typeof n == "function" ? n(r) : n) : t;
          }),
          t
        );
      })(s.PureComponent);
    l.default = u;
  },
  98,
);
