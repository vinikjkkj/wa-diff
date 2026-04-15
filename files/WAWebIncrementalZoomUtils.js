__d(
  "WAWebIncrementalZoomUtils",
  [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMediaIncrementalZoom",
    "WAWebUA",
    "cr:13920",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.defaultSizeScale,
        a = e.isDragging,
        i = c(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        l = i.currentImageScale,
        s = n != null && l > n,
        u = s,
        d = u && a,
        p = o("WAWebUA").UA.os.toLocaleLowerCase() === "windows",
        _ = r("WAWebEnvironment").isWindows,
        f = p || _,
        g = f ? m.cursorMove : m.cursorGrab,
        h = f ? m.cursorMove : m.cursorGrabbing,
        y = u && g,
        C = d && h,
        b;
      return (
        t[0] !== y || t[1] !== C
          ? ((b = [y, C]), (t[0] = y), (t[1] = C), (t[2] = b))
          : (b = t[2]),
        b
      );
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
      var t = o("react-compiler-runtime").c(13),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = o("WAWebABProps").getABPropConfigValue(
            "hybrid_incremental_zooming_simple_enabled",
          )),
          (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] !== e
        ? ((i = function () {
            return e == null ? void 0 : e.current;
          }),
          (t[1] = e),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] !== l
        ? ((s = function (t) {
            var e = t.key,
              n = l();
            !h(t) ||
              !o("WAWebMediaIncrementalZoom").ZOOM_KEYS.includes(e) ||
              !n ||
              t.preventDefault();
          }),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var u = s,
        c;
      t[5] !== l
        ? ((c = function (t) {
            var e = l(),
              n = t.target;
            !e || !(n instanceof Node) || !e.contains(n) || t.preventDefault();
          }),
          (t[5] = l),
          (t[6] = c))
        : (c = t[6]);
      var m = c,
        p,
        _;
      (t[7] !== m
        ? ((p = function () {
            if (a)
              return (
                document.addEventListener("wheel", m, { passive: !1 }),
                function () {
                  document.removeEventListener("wheel", m);
                }
              );
          }),
          (_ = [a, m]),
          (t[7] = m),
          (t[8] = p),
          (t[9] = _))
        : ((p = t[8]), (_ = t[9])),
        d(p, _));
      var f, g;
      (t[10] !== u
        ? ((f = function () {
            if (a)
              return (
                n("cr:13920") == null ||
                  n("cr:13920").setIsHybridAppZoomingEnabled(!1),
                document.addEventListener("keydown", u),
                function () {
                  (document.removeEventListener("keydown", u),
                    n("cr:13920") == null ||
                      n("cr:13920").setIsHybridAppZoomingEnabled(!0));
                }
              );
          }),
          (g = [a, u]),
          (t[10] = u),
          (t[11] = f),
          (t[12] = g))
        : ((f = t[11]), (g = t[12])),
        d(f, g));
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
