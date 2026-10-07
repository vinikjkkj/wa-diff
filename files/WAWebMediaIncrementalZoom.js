__d(
  "WAWebMediaIncrementalZoom",
  [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebIncrementalZoomUtils",
    "WAWebMediaDataGetters",
    "WAWebMsgGetters",
    "WAWebNullFunc",
    "WDSIconIcZoomIn.react",
    "WDSIconIcZoomOut.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMediaDataValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useLayoutEffect,
      g = d.useMemo,
      h = d.useRef,
      y = d.useState,
      C = {
        top: "x13vifvy",
        left: "xu96u03",
        insetInlineStart: "",
        insetInlineEnd: "",
        position: "x10l6tqk",
        height: "x16ye13r",
        width: "x5lhr3w",
        willChange: "x1so62im",
        transformOrigin: "x1al4vs7",
        transform: "xsqj5wx",
        $$css: !0,
      },
      b = {
        position: "x10l6tqk",
        height: "x16ye13r",
        width: "x5lhr3w",
        willChange: "x1so62im",
        transformOrigin: "x1al4vs7",
        transform: "xsqj5wx",
        pointerEvents: "x47corl",
        $$css: !0,
      },
      v = {
        image: function (t) {
          return [
            C,
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t.height + "px"),
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t.width + "px"),
              "--x-transform":
                "translate(" +
                  t.x +
                  "px, " +
                  t.y +
                  "px) scale(" +
                  t.scale +
                  ")" !=
                null
                  ? "translate(" +
                    t.x +
                    "px, " +
                    t.y +
                    "px) scale(" +
                    t.scale +
                    ")"
                  : void 0,
            },
          ];
        },
        addonBubbleContainer: function (t, n, r, o) {
          return [
            b,
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n + "px"),
              "--x-transform":
                "translate(" + r + "px, " + o + "px)" != null
                  ? "translate(" + r + "px, " + o + "px)"
                  : void 0,
            },
          ];
        },
        zoomIconDisabled: { color: "x18cpw0e", $$css: !0 },
      },
      S = 0.07,
      R = 0.03,
      L = 1.5,
      E = ["=", "+"],
      k = ["-", "_"],
      I = [].concat(E, k),
      T = 1,
      D = 5,
      x = [1, 2, 3, 4, 5],
      $ = function (t) {
        return x.reduce(function (e, n) {
          return Math.abs(n - t) < Math.abs(e - t) ? n : e;
        });
      };
    function P(e, t) {
      var n = Math.log(e / t) / Math.log(L) + 1;
      return $(n);
    }
    var N = function (t, n) {
        var e = $(t),
          r = n * Math.pow(L, e - 1);
        return { scale: r, zoomLevel: e };
      },
      M = function (t) {
        var e = t.container,
          n = t.currentScale,
          r = t.getMinScaleToFit,
          o = t.zoomIn,
          a = r(),
          i = a,
          l = Math.log(n / i) / Math.log(L) + 1,
          s = $(l),
          u = o ? s + 1 : s - 1,
          c = N(u, i),
          d = c.scale,
          m = c.zoomLevel,
          p = e.getBoundingClientRect(),
          _ = p.left + p.width / 2,
          f = p.top + p.height / 2;
        return { scale: d, centerX: _, centerY: f, zoomLevel: m };
      };
    function w(e) {
      var t = o("react-compiler-runtime").c(19),
        n = h(0),
        r = y(!1),
        a = r[0],
        i = r[1],
        l = y(1),
        s = l[0],
        u = l[1],
        d = y(1),
        m = d[0],
        p = d[1],
        _ = y(!1),
        f = _[0],
        g = _[1],
        C = h(null),
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [o("WAWebMediaDataGetters").getType]), (t[0] = b))
        : (b = t[0]);
      var v = o("useWAWebMediaDataValues").useMediaDataValues(
          e.activeMsg.mediaData,
          b,
        ),
        S = v[0],
        R;
      t[1] !== S
        ? ((R =
            S === "image" &&
            o("WAWebABProps").getABPropConfigValue(
              "hybrid_incremental_zooming_simple_enabled",
            )),
          (t[1] = S),
          (t[2] = R))
        : (R = t[2]);
      var L = R,
        E;
      t[3] !== e.activeMsg
        ? ((E = o("WAWebMsgGetters").getId(e.activeMsg).toString()),
          (t[3] = e.activeMsg),
          (t[4] = E))
        : (E = t[4]);
      var k, I, T, D;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            return n.current;
          }),
          (I = function (t) {
            n.current = t;
          }),
          (T = function () {
            return C.current;
          }),
          (D = function (t) {
            C.current = t;
          }),
          (t[5] = k),
          (t[6] = I),
          (t[7] = T),
          (t[8] = D))
        : ((k = t[5]), (I = t[6]), (T = t[7]), (D = t[8]));
      var x;
      t[9] !== s ||
      t[10] !== m ||
      t[11] !== f ||
      t[12] !== L ||
      t[13] !== a ||
      t[14] !== E
        ? ((x = {
            msgId: E,
            isZoomedIn: a,
            setIsZoomedIn: i,
            isEnabled: L,
            currentImageScale: s,
            setCurrentImageScale: u,
            currentZoomLevel: m,
            setCurrentZoomLevel: p,
            hasOverflownThumbnailSection: f,
            setHasOverflownThumbnailSection: g,
            getCaptionHeight: k,
            setCaptionHeight: I,
            getHandler: T,
            setHandler: D,
          }),
          (t[9] = s),
          (t[10] = m),
          (t[11] = f),
          (t[12] = L),
          (t[13] = a),
          (t[14] = E),
          (t[15] = x))
        : (x = t[15]);
      var $ = x,
        P;
      return (
        t[16] !== e.children || t[17] !== $
          ? ((P = c.jsx(A.Provider, { value: $, children: e.children })),
            (t[16] = e.children),
            (t[17] = $),
            (t[18] = P))
          : (P = t[18]),
        P
      );
    }
    var A = c.createContext({
      msgId: "",
      isEnabled: !1,
      currentImageScale: 1,
      setCurrentImageScale: function () {},
      currentZoomLevel: 1,
      setCurrentZoomLevel: function () {},
      getHandler: o("WAWebNullFunc").returnNull,
      setHandler: function () {},
      getCaptionHeight: function () {
        return 0;
      },
      setCaptionHeight: function () {},
      isZoomedIn: !1,
      setIsZoomedIn: function () {},
      hasOverflownThumbnailSection: !1,
      setHasOverflownThumbnailSection: function () {},
    });
    function F(t) {
      var n = t.addonBubble,
        a = t.image,
        i = t.size,
        l = y(null),
        s = l[0],
        u = l[1],
        d = p(A),
        g = h(null),
        C = h(null),
        b = y({ x: 0, y: 0 }),
        L = b[0],
        k = b[1],
        T = y(!1),
        x = T[0],
        $ = T[1],
        w = y({ x: 0, y: 0 }),
        F = w[0],
        O = w[1],
        B = y({ x: 0, y: 0 }),
        W = B[0],
        q = B[1],
        U = y(0),
        V = U[0],
        H = U[1],
        G = m(function () {
          var e = g.current,
            t = C.current;
          if (!e || !t) return null;
          var n = e.offsetWidth,
            r = e.offsetHeight,
            o = t.offsetWidth,
            a = t.offsetHeight;
          return { containerW: n, containerH: r, imageW: o, imageH: a };
        }, []);
      o("WAWebIncrementalZoomUtils").useThumbnailOverflow({
        panOffset: L,
        getContainerAndImageDimensions: G,
      });
      var z = m(
        function () {
          var e = G();
          if (!e) return 1;
          var t = e.containerH,
            n = e.containerW,
            r = e.imageH,
            o = e.imageW,
            a = n / o,
            i = t / r;
          return Math.min(a, i);
        },
        [G],
      );
      _(function () {
        H(z());
      }, []);
      var j = m(
          function (e) {
            var t = G();
            if (!t) return null;
            var n = t.containerH,
              r = t.containerW,
              o = t.imageH,
              a = t.imageW,
              i = a * e,
              l = o * e;
            return { x: (r - i) / 2, y: (n - l) / 2 };
          },
          [G],
        ),
        K = function () {
          var e = G();
          if (e) {
            var t = z(),
              n = j(t);
            n && (d.setCurrentImageScale(t), k(n), d.setCurrentZoomLevel(1));
          }
        },
        Q = m(
          function (e, t, n) {
            n === void 0 && (n = d.currentImageScale);
            var r = G();
            if (!r) return { x: e, y: t };
            var a = r.containerH,
              i = r.containerW,
              l = r.imageH,
              s = r.imageW,
              u = s * n,
              c = l * n,
              m = function (t, n, r) {
                if (t <= n) return [(n - t) / 2, (n - t) / 2];
                var e = n - t;
                return (
                  d.hasOverflownThumbnailSection &&
                    r === "y" &&
                    (e +=
                      o("WAWebIncrementalZoomUtils").THUMBNAIL_SECTION_HEIGHT +
                      d.getCaptionHeight()),
                  [e, 0]
                );
              },
              p = function (t, n, r) {
                return Math.min(n, Math.max(t, r));
              },
              _ = m(u, i, "x"),
              f = _[0],
              g = _[1],
              h = m(c, a, "y"),
              y = h[0],
              C = h[1];
            return { x: p(f, g, e), y: p(y, C, t) };
          },
          [d, G],
        ),
        X = m(
          function (e) {
            d.currentImageScale !== V &&
              (e.preventDefault(),
              $(!0),
              O({ x: e.clientX, y: e.clientY }),
              q({ x: L.x, y: L.y }));
          },
          [V, L.x, L.y, d.currentImageScale],
        ),
        Y = m(function () {
          $(!1);
        }, []),
        J = m(
          function (e) {
            var t = z(),
              n = N(D, t),
              r = n.scale;
            return Math.min(r, Math.max(t, e));
          },
          [z],
        ),
        Z = m(
          function (e) {
            var t = e.scale,
              n = e.x,
              r = e.y,
              o = G();
            if (o) {
              var a = o.containerH,
                i = o.containerW,
                l = o.imageH,
                s = o.imageW,
                u = g.current;
              if (u) {
                var c = J(t),
                  m = s * c,
                  p = l * c,
                  _ = m <= i,
                  f = p <= a,
                  h = d.currentImageScale;
                if (n == null || r == null || (_ && f)) {
                  var y = (i - m) / 2,
                    C = (a - p) / 2;
                  (d.setCurrentImageScale(c), k({ x: y, y: C }));
                  return;
                }
                var b = u.getBoundingClientRect(),
                  v = n - b.left,
                  S = r - b.top,
                  R = (v - L.x) / h,
                  E = (S - L.y) / h,
                  I = v - R * c,
                  T = S - E * c;
                (_ && (I = (i - m) / 2), f && (T = (a - p) / 2));
                var D = Q(I, T, c);
                (k(D), d.setCurrentImageScale(c));
              }
            }
          },
          [d, L, Q, G, J],
        ),
        ee = m(
          function (e) {
            if (x) {
              var t = e.clientX - F.x,
                n = e.clientY - F.y,
                r = W.x + t,
                o = W.y + n,
                a = Q(r, o, d.currentImageScale);
              k(a);
            }
          },
          [x, F, W, Q, d.currentImageScale],
        ),
        te = m(
          function (e, t) {
            var n = e.deltaY || e.detail,
              r = Math.abs(n) < 10,
              o = function () {
                var e = r ? R : S;
                return 1 + (n > 0 ? -e : e);
              };
            return J(t * o());
          },
          [J],
        ),
        ne = m(
          function (e) {
            e.preventDefault();
            var t = te(e, d.currentImageScale);
            (Z({ scale: t, x: e.clientX, y: e.clientY }),
              d.setCurrentZoomLevel(P(t, z())));
          },
          [te, d, Z, z],
        ),
        re = m(
          function (e) {
            if (d.isEnabled) {
              var t = e.key;
              if (
                !(
                  !o("WAWebIncrementalZoomUtils").isPrimaryZoomKey(e) ||
                  !I.includes(t)
                )
              ) {
                e.preventDefault();
                var n = E.includes(e.key),
                  r = g.current;
                if (r) {
                  var a = M({
                      currentScale: d.currentImageScale,
                      zoomIn: n,
                      container: r,
                      getMinScaleToFit: z,
                    }),
                    i = a.centerX,
                    l = a.centerY,
                    s = a.scale,
                    u = a.zoomLevel;
                  (Z({ scale: s, x: i, y: l }), d.setCurrentZoomLevel(u));
                }
              }
            }
          },
          [d, z, Z],
        );
      (f(
        function () {
          if (d.isEnabled)
            return (
              document.addEventListener("keydown", re),
              function () {
                document.removeEventListener("keydown", re);
              }
            );
        },
        [re, d.isEnabled],
      ),
        f(function () {
          K();
        }, []),
        _(
          function () {
            var e = z();
            u(e);
          },
          [z, i],
        ));
      var oe = m(
        function () {
          Z({ scale: d.currentImageScale });
        },
        [Z, d.currentImageScale],
      );
      (_(
        function () {
          return (
            window.addEventListener("resize", oe),
            function () {
              window.removeEventListener("resize", oe);
            }
          );
        },
        [oe],
      ),
        _(
          function () {
            var e = {
              performZoom: function (t) {
                var e = z(),
                  n = N(t, e),
                  r = n.scale,
                  o = n.zoomLevel;
                (Z({ scale: r }), d.setCurrentZoomLevel(o));
              },
            };
            return (
              d.setHandler(e),
              function () {
                d.setHandler(null);
              }
            );
          },
          [z, Z, d],
        ));
      var ae = d.currentImageScale,
        ie = s != null && ae > s;
      _(
        function () {
          d.isZoomedIn !== ie && d.setIsZoomedIn(ie);
        },
        [ie, d],
      );
      var le = m(
          function (e) {
            var t = z(),
              n = 1,
              r = 2,
              o = J(1 / 0),
              a = 1e-4,
              i = [t];
            n > t + a && i.push(n);
            var l = Math.min(r, o);
            l > i[i.length - 1] + a && i.push(l);
            var s = d.currentImageScale,
              u = i[0];
            for (var c of i)
              if (c > s + a) {
                u = c;
                break;
              }
            (Z({ scale: u, x: e.clientX, y: e.clientY }),
              d.setCurrentZoomLevel(P(u, t)));
          },
          [z, d, Z, J],
        ),
        se = o("WAWebIncrementalZoomUtils").useCursorStyles({
          isDragging: x,
          defaultSizeScale: s,
        }),
        ue = {
          height: i.height,
          width: i.width,
          x: L.x,
          y: L.y,
          scale: d.currentImageScale,
        },
        ce = (e || (e = r("stylex"))).props(v.image(ue), se),
        de = d.currentImageScale,
        me = e.props(
          v.addonBubbleContainer(i.height * de, i.width * de, L.x, L.y),
        );
      return c.jsxs("div", {
        className: "x1n2onr6 xh8yej3 x5yr21d",
        ref: g,
        onWheel: ne,
        children: [
          c.jsx(
            "div",
            babelHelpers.extends({}, ce, {
              ref: C,
              onMouseDown: X,
              onMouseMove: ee,
              onMouseUp: Y,
              onMouseLeave: Y,
              onDoubleClick: le,
              role: "img",
              children: a,
            }),
          ),
          c.jsx(
            "div",
            babelHelpers.extends({}, me, {
              children: c.jsx("div", { className: "x67bb7w", children: n }),
            }),
          ),
        ],
      });
    }
    F.displayName = F.name + " [from " + i.id + "]";
    var O = n("$InternalEnum")({ IN: "in", OUT: "out" });
    function B(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.direction,
        a = p(A),
        i =
          (n === O.OUT && a.currentZoomLevel === T) ||
          (n === O.IN && a.currentZoomLevel === D),
        l;
      t[0] !== n || t[1] !== i
        ? ((l = W(n, i)), (t[0] = n), (t[1] = i), (t[2] = l))
        : (l = t[2]);
      var u = l,
        d;
      t[3] !== n
        ? ((d =
            n === O.IN ? s._(/*BTDS*/ "Zoom in") : s._(/*BTDS*/ "Zoom out")),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        _ = n === O.IN ? "media-zoom-in-button" : "media-zoom-out-button",
        f;
      t[5] !== n || t[6] !== a
        ? ((f = function () {
            var e = a.getHandler();
            if (e) {
              var t =
                n === O.IN ? a.currentZoomLevel + 1 : a.currentZoomLevel - 1;
              e.performZoom(t);
            }
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = f))
        : (f = t[7]);
      var g = f,
        h;
      return (
        t[8] !== u || t[9] !== i || t[10] !== g || t[11] !== _ || t[12] !== m
          ? ((h = c.jsx(r("WDSMenuBarItem.react"), {
              disabled: i,
              icon: u,
              title: m,
              onClick: g,
              testid: _,
            })),
            (t[8] = u),
            (t[9] = i),
            (t[10] = g),
            (t[11] = _),
            (t[12] = m),
            (t[13] = h))
          : (h = t[13]),
        h
      );
    }
    function W(e, t) {
      var n = { iconXstyle: [t ? v.zoomIconDisabled : null] },
        o =
          e === O.IN ? r("WDSIconIcZoomIn.react") : r("WDSIconIcZoomOut.react");
      return function () {
        return c.jsx(o, babelHelpers.extends({}, n));
      };
    }
    ((l.ZOOM_KEYS = I),
      (l.MediaIncrementalZoomCtxProvider = w),
      (l.MediaIncrementalZoomCtx = A),
      (l.IncrementalImageRenderer = F),
      (l.ZoomDirection = O),
      (l.ZoomButton = B));
  },
  226,
);
