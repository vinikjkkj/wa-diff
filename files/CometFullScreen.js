__d(
  "CometFullScreen",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      var r,
        o,
        a,
        i = t,
        l =
          (r =
            (o =
              (a = t.requestFullscreen) != null ? a : i.mozRequestFullScreen) !=
            null
              ? o
              : i.msRequestFullscreen) != null
            ? r
            : i.webkitRequestFullscreen;
      return typeof l == "function"
        ? l.call(t)
        : (e || (e = n("Promise"))).reject();
    }
    function s() {
      var t,
        r,
        o,
        a = document,
        i =
          (t =
            (r =
              (o = document.exitFullscreen) != null
                ? o
                : a.mozCancelFullScreen) != null
              ? r
              : a.msExitFullscreen) != null
            ? t
            : a.webkitExitFullscreen;
      return typeof i == "function"
        ? i.call(document)
        : (e || (e = n("Promise"))).reject();
    }
    function u() {
      var e = document;
      return (
        (e.webkitFullscreenEnabled === !0 ||
          e.mozFullScreenEnabled === !0 ||
          e.msFullscreenEnabled === !0 ||
          document.fullscreenEnabled === !0) &&
        (typeof e.webkitExitFullscreen == "function" ||
          typeof e.mozCancelFullScreen == "function" ||
          typeof e.msExitFullscreen == "function" ||
          typeof document.exitFullscreen == "function")
      );
    }
    function c() {
      var e,
        t,
        n,
        r,
        o = document;
      return (e =
        (t =
          (n =
            (r = document.fullscreenElement) != null
              ? r
              : o.webkitFullscreenElement) != null
            ? n
            : o.msFullscreenElement) != null
          ? t
          : o.mozFullScreenElement) != null
        ? e
        : null;
    }
    function d() {
      return c() != null;
    }
    function m() {
      return [
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "MSFullscreenChange",
        "fullscreenchange",
      ];
    }
    function p(e) {
      var t = window.document,
        n = !1,
        r = !0;
      return (
        m().forEach(function (o) {
          t.addEventListener(o, e, { capture: n, passive: r });
        }),
        function () {
          m().forEach(function (r) {
            t.removeEventListener(r, e, n);
          });
        }
      );
    }
    ((i.requestFullScreen = l),
      (i.exitFullScreen = s),
      (i.isSupported = u),
      (i.getFullScreenElement = c),
      (i.isFullScreen = d),
      (i.getFullScreenChangeEventNames = m),
      (i.subscribeToFullScreenChangeEvent = p));
  },
  66,
);
