__d(
  "WAWebIncrementalZoomUtils",
  [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMediaIncrementalZoom",
    "WAWebUA",
    "cr:13920",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useEffect,
      m = {
        cursorGrab: { cursor: "x1jm3nie", $$css: !0 },
        cursorGrabbing: { cursor: "xi9pz9s", $$css: !0 },
        cursorMove: { cursor: "xv5twrn", $$css: !0 },
      };
    function p(e) {
      var t = e.defaultSizeScale,
        n = e.isDragging,
        a = c(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        i = a.currentImageScale,
        l = t != null && i > t,
        s = l,
        u = s && n,
        d = o("WAWebUA").UA.os.toLocaleLowerCase() === "windows",
        p = r("WAWebEnvironment").isWindows,
        _ = d || p,
        f = _ ? m.cursorMove : m.cursorGrab,
        g = _ ? m.cursorMove : m.cursorGrabbing;
      return [s && f, u && g];
    }
    var _ = 115;
    function f(e) {
      var t = e.getContainerAndImageDimensions,
        n = e.panOffset,
        r = c(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        a = u(
          function () {
            var e = t();
            if (!e) return !1;
            var o = r.getCaptionHeight(),
              a = e.containerH,
              i = e.imageH,
              l = i * r.currentImageScale,
              s = n.y + l;
            return s - a > _ + o;
          },
          [t, n.y, r],
        ),
        i = r.currentImageScale;
      d(
        function () {
          var e = a();
          r.hasOverflownThumbnailSection !== e &&
            r.setHasOverflownThumbnailSection(e);
        },
        [i],
      );
    }
    function g(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
          "hybrid_incremental_zooming_simple_enabled",
        ),
        r = u(
          function () {
            return e == null ? void 0 : e.current;
          },
          [e],
        ),
        a = u(
          function (e) {
            var t = e.key,
              n = r();
            !h(e) ||
              !o("WAWebMediaIncrementalZoom").ZOOM_KEYS.includes(t) ||
              !n ||
              e.preventDefault();
          },
          [r],
        ),
        i = u(
          function (e) {
            var t = r(),
              n = e.target;
            !t || !(n instanceof Node) || !t.contains(n) || e.preventDefault();
          },
          [r],
        );
      (d(
        function () {
          if (t)
            return (
              document.addEventListener("wheel", i, { passive: !1 }),
              function () {
                document.removeEventListener("wheel", i);
              }
            );
        },
        [t, i],
      ),
        d(
          function () {
            if (t) {
              var e = n("cr:13920");
              return (
                e == null || e.setIsHybridAppZoomingEnabled(!1),
                document.addEventListener("keydown", a),
                function () {
                  (document.removeEventListener("keydown", a),
                    e == null || e.setIsHybridAppZoomingEnabled(!0));
                }
              );
            }
          },
          [t, a],
        ));
    }
    var h = function (t) {
        return o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
          ? t.metaKey
          : t.ctrlKey;
      },
      y = function () {
        return o("WAWebABProps").getABPropConfigValue(
          "waweb_enable_legacy_image_zoom",
        );
      };
    ((l.useCursorStyles = p),
      (l.THUMBNAIL_SECTION_HEIGHT = _),
      (l.useThumbnailOverflow = f),
      (l.usePreventDefaultZoom = g),
      (l.isPrimaryZoomKey = h),
      (l.isLegacyImageZoomEnabled = y));
  },
  98,
);
