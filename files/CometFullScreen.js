__d(
  "CometFullScreen",
  ["ExecutionEnvironment", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e;
      return typeof e.requestFullscreen == "function"
        ? e.requestFullscreen()
        : typeof t.mozRequestFullScreen == "function"
          ? t.mozRequestFullScreen()
          : typeof t.msRequestFullscreen == "function"
            ? t.msRequestFullscreen()
            : typeof t.webkitRequestFullscreen == "function"
              ? t.webkitRequestFullscreen()
              : (s || (s = n("Promise"))).reject();
    }
    function c() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document;
        return typeof document.exitFullscreen == "function"
          ? document.exitFullscreen()
          : typeof t.mozCancelFullScreen == "function"
            ? t.mozCancelFullScreen()
            : typeof t.msExitFullscreen == "function"
              ? t.msExitFullscreen()
              : typeof t.webkitExitFullscreen == "function"
                ? t.webkitExitFullscreen()
                : (s || (s = n("Promise"))).reject();
      }
      return (s || (s = n("Promise"))).reject();
    }
    function d() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document;
        return (
          (t.webkitFullscreenEnabled === !0 ||
            t.mozFullScreenEnabled === !0 ||
            t.msFullscreenEnabled === !0 ||
            document.fullscreenEnabled === !0) &&
          (typeof t.webkitExitFullscreen == "function" ||
            typeof t.mozCancelFullScreen == "function" ||
            typeof t.msExitFullscreen == "function" ||
            typeof document.exitFullscreen == "function")
        );
      }
      return !1;
    }
    function m() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t,
          n,
          o,
          a,
          i = document;
        return (t =
          (n =
            (o =
              (a = document.fullscreenElement) != null
                ? a
                : i.webkitFullscreenElement) != null
              ? o
              : i.msFullscreenElement) != null
            ? n
            : i.mozFullScreenElement) != null
          ? t
          : null;
      }
      return null;
    }
    function p() {
      return m() != null;
    }
    function _() {
      return [
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "MSFullscreenChange",
        "fullscreenchange",
      ];
    }
    function f(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = window.document,
          o = !1,
          a = !0;
        return (
          _().forEach(function (e) {
            n.addEventListener(e, t, { capture: o, passive: a });
          }),
          function () {
            _().forEach(function (e) {
              n.removeEventListener(e, t, o);
            });
          }
        );
      }
      return function () {};
    }
    ((l.requestFullScreen = u),
      (l.exitFullScreen = c),
      (l.isSupported = d),
      (l.getFullScreenElement = m),
      (l.isFullScreen = p),
      (l.subscribeToFullScreenChangeEvent = f));
  },
  98,
);
