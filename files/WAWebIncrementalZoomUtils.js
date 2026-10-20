__d(
  "WAWebIncrementalZoomUtils",
  [
    "WAWebEnvironment",
    "WAWebMediaIncrementalZoom",
    "WAWebUA",
    "cr:13920",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
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
      var t = o("react-compiler-runtime").c(8),
        n = e.getContainerAndImageDimensions,
        a = e.panOffset,
        i = c(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        l;
      t[0] !== n || t[1] !== a || t[2] !== i
        ? ((l = function (t) {
            var e = n(),
              r = !1;
            if (e) {
              var o = i.getCaptionHeight(),
                l = e.containerH,
                s = e.imageH,
                u = a.y + s * t;
              r = u - l > _ + o;
            }
            i.hasOverflownThumbnailSection !== r &&
              i.setHasOverflownThumbnailSection(r);
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var s = r("useWAWebStableCallback")(l),
        u = i.currentImageScale,
        m,
        p;
      (t[4] !== u || t[5] !== s
        ? ((m = function () {
            s(u);
          }),
          (p = [u, s]),
          (t[4] = u),
          (t[5] = s),
          (t[6] = m),
          (t[7] = p))
        : ((m = t[6]), (p = t[7])),
        d(m, p));
    }
    function g(e, t) {
      var r = o("react-compiler-runtime").c(13),
        a;
      r[0] !== e
        ? ((a = function () {
            return e == null ? void 0 : e.current;
          }),
          (r[0] = e),
          (r[1] = a))
        : (a = r[1]);
      var i = a,
        l;
      r[2] !== i
        ? ((l = function (t) {
            var e = t.key,
              n = i();
            !h(t) ||
              !o("WAWebMediaIncrementalZoom").ZOOM_KEYS.includes(e) ||
              !n ||
              t.preventDefault();
          }),
          (r[2] = i),
          (r[3] = l))
        : (l = r[3]);
      var s = l,
        u;
      r[4] !== t || r[5] !== i
        ? ((u = function (n) {
            var e = i(),
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
          (r[4] = t),
          (r[5] = i),
          (r[6] = u))
        : (u = r[6]);
      var c = u,
        m,
        p;
      (r[7] !== c
        ? ((m = function () {
            return (
              document.addEventListener("wheel", c, { passive: !1 }),
              function () {
                document.removeEventListener("wheel", c);
              }
            );
          }),
          (p = [c]),
          (r[7] = c),
          (r[8] = m),
          (r[9] = p))
        : ((m = r[8]), (p = r[9])),
        d(m, p));
      var _, f;
      (r[10] !== s
        ? ((_ = function () {
            return (
              n("cr:13920") == null ||
                n("cr:13920").setIsHybridAppZoomingEnabled(!1),
              document.addEventListener("keydown", s),
              function () {
                (document.removeEventListener("keydown", s),
                  n("cr:13920") == null ||
                    n("cr:13920").setIsHybridAppZoomingEnabled(!0));
              }
            );
          }),
          (f = [s]),
          (r[10] = s),
          (r[11] = _),
          (r[12] = f))
        : ((_ = r[11]), (f = r[12])),
        d(_, f));
    }
    function h(e) {
      return o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
        ? e.metaKey
        : e.ctrlKey;
    }
    ((l.useCursorStyles = p),
      (l.THUMBNAIL_SECTION_HEIGHT = _),
      (l.useThumbnailOverflow = f),
      (l.usePreventDefaultZoom = g),
      (l.isPrimaryZoomKey = h));
  },
  98,
);
