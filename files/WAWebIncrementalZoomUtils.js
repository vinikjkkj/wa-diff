__d(
  "WAWebIncrementalZoomUtils",
  [
    "WAWebEnvironment",
    "WAWebMediaIncrementalZoom",
    "WAWebUA",
    "cr:13920",
    "react",
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
        a = c(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        i = r("useWAWebStableCallback")(function (e) {
          var r = t(),
            o = !1;
          if (r) {
            var i = a.getCaptionHeight(),
              l = r.containerH,
              s = r.imageH,
              u = n.y + s * e;
            o = u - l > _ + i;
          }
          a.hasOverflownThumbnailSection !== o &&
            a.setHasOverflownThumbnailSection(o);
        }),
        l = a.currentImageScale;
      d(
        function () {
          i(l);
        },
        [l, i],
      );
    }
    function g(e, t) {
      var r = u(
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
            var n = r(),
              o = e.target,
              a = t == null ? void 0 : t.current;
            !n ||
              !(o instanceof Node) ||
              !n.contains(o) ||
              (!e.ctrlKey &&
                !e.metaKey &&
                (a == null ? void 0 : a.contains(o)) === !0) ||
              e.preventDefault();
          },
          [t, r],
        );
      (d(
        function () {
          return (
            document.addEventListener("wheel", i, { passive: !1 }),
            function () {
              document.removeEventListener("wheel", i);
            }
          );
        },
        [i],
      ),
        d(
          function () {
            var e = n("cr:13920");
            return (
              e == null || e.setIsHybridAppZoomingEnabled(!1),
              document.addEventListener("keydown", a),
              function () {
                (document.removeEventListener("keydown", a),
                  e == null || e.setIsHybridAppZoomingEnabled(!0));
              }
            );
          },
          [a],
        ));
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
