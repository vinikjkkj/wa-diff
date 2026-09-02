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
    function g(e, t) {
      var r = o("react-compiler-runtime").c(14),
        a;
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebABProps").getABPropConfigValue(
            "hybrid_incremental_zooming_simple_enabled",
          )),
          (r[0] = a))
        : (a = r[0]);
      var i = a,
        l;
      r[1] !== e
        ? ((l = function () {
            return e == null ? void 0 : e.current;
          }),
          (r[1] = e),
          (r[2] = l))
        : (l = r[2]);
      var s = l,
        u;
      r[3] !== s
        ? ((u = function (t) {
            var e = t.key,
              n = s();
            !h(t) ||
              !o("WAWebMediaIncrementalZoom").ZOOM_KEYS.includes(e) ||
              !n ||
              t.preventDefault();
          }),
          (r[3] = s),
          (r[4] = u))
        : (u = r[4]);
      var c = u,
        m;
      r[5] !== t || r[6] !== s
        ? ((m = function (n) {
            var e = s(),
              r = n.target,
              o = t == null ? void 0 : t.current;
            !e ||
              !(r instanceof Node) ||
              !e.contains(r) ||
              (!n.ctrlKey &&
                !n.metaKey &&
                (o == null ? void 0 : o.contains(r)) === !0) ||
              n.preventDefault();
          }),
          (r[5] = t),
          (r[6] = s),
          (r[7] = m))
        : (m = r[7]);
      var p = m,
        _,
        f;
      (r[8] !== p
        ? ((_ = function () {
            if (i)
              return (
                document.addEventListener("wheel", p, { passive: !1 }),
                function () {
                  document.removeEventListener("wheel", p);
                }
              );
          }),
          (f = [i, p]),
          (r[8] = p),
          (r[9] = _),
          (r[10] = f))
        : ((_ = r[9]), (f = r[10])),
        d(_, f));
      var g, y;
      (r[11] !== c
        ? ((g = function () {
            if (i)
              return (
                n("cr:13920") == null ||
                  n("cr:13920").setIsHybridAppZoomingEnabled(!1),
                document.addEventListener("keydown", c),
                function () {
                  (document.removeEventListener("keydown", c),
                    n("cr:13920") == null ||
                      n("cr:13920").setIsHybridAppZoomingEnabled(!0));
                }
              );
          }),
          (y = [i, c]),
          (r[11] = c),
          (r[12] = g),
          (r[13] = y))
        : ((g = r[12]), (y = r[13])),
        d(g, y));
    }
    function h(e) {
      return o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
        ? e.metaKey
        : e.ctrlKey;
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_enable_legacy_image_zoom",
      );
    }
    ((l.useCursorStyles = p),
      (l.THUMBNAIL_SECTION_HEIGHT = _),
      (l.useThumbnailOverflow = f),
      (l.usePreventDefaultZoom = g),
      (l.isPrimaryZoomKey = h),
      (l.isLegacyImageZoomEnabled = y));
  },
  98,
);
