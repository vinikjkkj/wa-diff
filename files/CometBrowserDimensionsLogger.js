__d(
  "CometBrowserDimensionsLogger",
  [
    "CometDebounce",
    "Cookie",
    "ExecutionEnvironment",
    "SiteData",
    "WebBrowserDimensionsTypedLoggerLite",
    "getViewportDimensions",
    "isInIframe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = !1,
      c = { height: 0, width: 0 };
    function d() {
      return (s === null && (s = r("getViewportDimensions")()), s);
    }
    function m() {
      var e = r("getViewportDimensions")(),
        t = e.height,
        n = e.width;
      (c.width !== n || c.height !== t) &&
        ((c = { height: t, width: n }), r("Cookie").set("wd", n + "x" + t));
    }
    function p() {
      !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        r("isInIframe")() ||
        u ||
        ((u = !0),
        m(),
        window.addEventListener(
          "resize",
          r("CometDebounce")(m, { wait: 250 }),
          { passive: !0 },
        ),
        window.addEventListener("focus", m, { passive: !0 }));
    }
    function _(e) {
      var t,
        n = d();
      p();
      var o = {
        client_hint_width: e == null ? void 0 : e.clientHintWidth,
        pixel_ratio: (t = window.devicePixelRatio) != null ? t : 1,
        screen_x: window.screen.width,
        screen_y: window.screen.height,
        server_pixel_ratio: r("SiteData").pr,
        server_viewport_x: e == null ? void 0 : e.viewportWidth,
        server_viewport_y: e == null ? void 0 : e.viewportHeight,
        viewport_x: n.width,
        viewport_y: n.height,
      };
      if (
        (window.navigator &&
          window.navigator.hardwareConcurrency &&
          (o.cpu_cores_count = window.navigator.hardwareConcurrency),
        window.innerWidth > 0 && window.outerWidth > 0)
      ) {
        var a = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
        o.zoom_ratio = a;
      }
      if (window.getComputedStyle && document.documentElement != null) {
        var i = window.getComputedStyle(document.documentElement);
        i != null && (o.document_font_size = i.fontSize);
      }
      r("WebBrowserDimensionsTypedLoggerLite").log(o);
    }
    l.init = _;
  },
  98,
);
