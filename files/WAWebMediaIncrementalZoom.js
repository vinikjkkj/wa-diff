__d(
  "WAWebMediaIncrementalZoom",
  [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebIncrementalZoomUtils",
    "WAWebMsgGetters",
    "WAWebNullFunc",
    "WDSIconIcZoomIn.react",
    "WDSIconIcZoomOut.react",
    "WDSMenuBarItem.react",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebLegacyZoom",
    "useWAWebModelValues",
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
      C = n("$InternalEnum")({ INCREMENTAL: "incremental", LEGACY: "legacy" }),
      b = {
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
      v = {
        position: "x10l6tqk",
        height: "x16ye13r",
        width: "x5lhr3w",
        willChange: "x1so62im",
        transformOrigin: "x1al4vs7",
        transform: "xsqj5wx",
        pointerEvents: "x47corl",
        $$css: !0,
      },
      S = {
        image: function (t) {
          return [
            b,
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
        imageTransition: { transition: "xqr1bgo", $$css: !0 },
        cursorZoomIn: { cursor: "x1huxd7x", $$css: !0 },
        cursorZoomOut: { cursor: "xzuqxi3", $$css: !0 },
        addonBubbleContainer: function (t, n, r, o) {
          return [
            v,
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
      R = 0.07,
      L = 0.03,
      E = 1.5,
      k = ["=", "+"],
      I = ["-", "_"],
      T = [].concat(k, I),
      D = 1,
      x = 5,
      $ = [1, 2, 3, 4, 5],
      P = function (t) {
        return $.reduce(function (e, n) {
          return Math.abs(n - t) < Math.abs(e - t) ? n : e;
        });
      },
      N = function (t, n) {
        var e = Math.log(t / n) / Math.log(E) + 1;
        return P(e);
      },
      M = function (t, n) {
        var e = P(t),
          r = n * Math.pow(E, e - 1);
        return { scale: r, zoomLevel: e };
      },
      w = function (t) {
        var e = t.container,
          n = t.currentScale,
          r = t.getMinScaleToFit,
          o = t.zoomIn,
          a = r(),
          i = a,
          l = Math.log(n / i) / Math.log(E) + 1,
          s = P(l),
          u = o ? s + 1 : s - 1,
          c = M(u, i),
          d = c.scale,
          m = c.zoomLevel,
          p = e.getBoundingClientRect(),
          _ = p.left + p.width / 2,
          f = p.top + p.height / 2;
        return { scale: d, centerX: _, centerY: f, zoomLevel: m };
      };
    function A(e) {
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
        ? ((b = ["type"]), (t[0] = b))
        : (b = t[0]);
      var v = o("useWAWebModelValues").useModelValues(e.activeMsg.mediaData, b),
        S;
      t[1] !== v.type
        ? ((S =
            v.type === "image" &&
            o("WAWebABProps").getABPropConfigValue(
              "hybrid_incremental_zooming_simple_enabled",
            )),
          (t[1] = v.type),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] !== e.activeMsg
        ? ((L = o("WAWebMsgGetters").getId(e.activeMsg).toString()),
          (t[3] = e.activeMsg),
          (t[4] = L))
        : (L = t[4]);
      var E, k, I, T;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            return n.current;
          }),
          (k = function (t) {
            n.current = t;
          }),
          (I = function () {
            return C.current;
          }),
          (T = function (t) {
            C.current = t;
          }),
          (t[5] = E),
          (t[6] = k),
          (t[7] = I),
          (t[8] = T))
        : ((E = t[5]), (k = t[6]), (I = t[7]), (T = t[8]));
      var D;
      t[9] !== s ||
      t[10] !== m ||
      t[11] !== f ||
      t[12] !== R ||
      t[13] !== a ||
      t[14] !== L
        ? ((D = {
            msgId: L,
            isZoomedIn: a,
            setIsZoomedIn: i,
            isEnabled: R,
            currentImageScale: s,
            setCurrentImageScale: u,
            currentZoomLevel: m,
            setCurrentZoomLevel: p,
            hasOverflownThumbnailSection: f,
            setHasOverflownThumbnailSection: g,
            getCaptionHeight: E,
            setCaptionHeight: k,
            getHandler: I,
            setHandler: T,
          }),
          (t[9] = s),
          (t[10] = m),
          (t[11] = f),
          (t[12] = R),
          (t[13] = a),
          (t[14] = L),
          (t[15] = D))
        : (D = t[15]);
      var x = D,
        $;
      return (
        t[16] !== e.children || t[17] !== x
          ? (($ = c.jsx(F.Provider, { value: x, children: e.children })),
            (t[16] = e.children),
            (t[17] = x),
            (t[18] = $))
          : ($ = t[18]),
        $
      );
    }
    var F = c.createContext({
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
    function O(t) {
      var n = t.addonBubble,
        a = t.image,
        i = t.size,
        l = y(null),
        s = l[0],
        u = l[1],
        d = p(F),
        g = h(null),
        b = h(null),
        v = y({ x: 0, y: 0 }),
        E = v[0],
        I = v[1],
        D = y(!1),
        $ = D[0],
        P = D[1],
        A = y({ x: 0, y: 0 }),
        O = A[0],
        B = A[1],
        W = y({ x: 0, y: 0 }),
        q = W[0],
        U = W[1],
        V = y(0),
        H = V[0],
        G = V[1],
        z = o("WAWebIncrementalZoomUtils").isLegacyImageZoomEnabled(),
        j = y(z ? C.LEGACY : C.INCREMENTAL),
        K = j[0],
        Q = j[1],
        X = z && K === C.LEGACY,
        Y = y(!1),
        J = Y[0],
        Z = Y[1];
      _(function () {
        var e = window.requestAnimationFrame(function () {
          Z(!0);
        });
        return function () {
          return window.cancelAnimationFrame(e);
        };
      }, []);
      var ee = X && J;
      _(function () {
        G(ne());
      }, []);
      var te = m(function () {
        var e = g.current,
          t = b.current;
        if (!e || !t) return null;
        var n = e.offsetWidth,
          r = e.offsetHeight,
          o = t.offsetWidth,
          a = t.offsetHeight;
        return { containerW: n, containerH: r, imageW: o, imageH: a };
      }, []);
      o("WAWebIncrementalZoomUtils").useThumbnailOverflow({
        panOffset: E,
        getContainerAndImageDimensions: te,
      });
      var ne = m(
          function () {
            var e = te();
            if (!e) return 1;
            var t = e.containerH,
              n = e.containerW,
              r = e.imageH,
              o = e.imageW,
              a = n / o,
              i = t / r;
            return Math.min(a, i);
          },
          [te],
        ),
        re = m(
          function (e) {
            var t = te();
            if (!t) return null;
            var n = t.containerH,
              r = t.containerW,
              o = t.imageH,
              a = t.imageW,
              i = a * e,
              l = o * e;
            return { x: (r - i) / 2, y: (n - l) / 2 };
          },
          [te],
        ),
        oe = function () {
          var e = te();
          if (e) {
            var t = ne(),
              n = re(t);
            n && (d.setCurrentImageScale(t), I(n), d.setCurrentZoomLevel(1));
          }
        },
        ae = m(
          function (e, t, n) {
            n === void 0 && (n = d.currentImageScale);
            var r = te();
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
          [d, te],
        ),
        ie = m(
          function (e) {
            X ||
              (d.currentImageScale !== H &&
                (e.preventDefault(),
                P(!0),
                B({ x: e.clientX, y: e.clientY }),
                U({ x: E.x, y: E.y })));
          },
          [X, H, E.x, E.y, d.currentImageScale],
        ),
        le = m(function () {
          P(!1);
        }, []),
        se = m(
          function (e) {
            var t = ne(),
              n = M(x, t),
              r = n.scale;
            return Math.min(r, Math.max(t, e));
          },
          [ne],
        ),
        ue = m(
          function (e) {
            var t = e.scale,
              n = e.x,
              r = e.y,
              o = te();
            if (o) {
              var a = o.containerH,
                i = o.containerW,
                l = o.imageH,
                s = o.imageW,
                u = g.current;
              if (u) {
                var c = se(t),
                  m = s * c,
                  p = l * c,
                  _ = m <= i,
                  f = p <= a,
                  h = d.currentImageScale;
                if (n == null || r == null || (_ && f)) {
                  var y = (i - m) / 2,
                    C = (a - p) / 2;
                  (d.setCurrentImageScale(c), I({ x: y, y: C }));
                  return;
                }
                var b = u.getBoundingClientRect(),
                  v = n - b.left,
                  S = r - b.top,
                  R = (v - E.x) / h,
                  L = (S - E.y) / h,
                  k = v - R * c,
                  T = S - L * c;
                (_ && (k = (i - m) / 2), f && (T = (a - p) / 2));
                var D = ae(k, T, c);
                (I(D), d.setCurrentImageScale(c));
              }
            }
          },
          [d, E, ae, te, se],
        ),
        ce = o("useWAWebLegacyZoom").useWAWebLegacyZoom({
          containerRef: g,
          getContainerAndImageDimensions: te,
          zoomCtx: d,
          minScaleToFit: H,
          zoomAtPoint: ue,
          calculatePanToCenter: re,
          clampPan: ae,
          applyPanOffset: I,
          zoomMode: K,
          setZoomMode: Q,
        }),
        de = m(
          function (e) {
            if (X) {
              ce.handleLegacyMouseMove(e);
              return;
            }
            if ($) {
              var t = e.clientX - O.x,
                n = e.clientY - O.y,
                r = q.x + t,
                o = q.y + n,
                a = ae(r, o, d.currentImageScale);
              I(a);
            }
          },
          [X, ce, $, O, q, ae, d.currentImageScale],
        ),
        me = m(
          function (e, t) {
            var n = e.deltaY || e.detail,
              r = Math.abs(n) < 10,
              o = function () {
                var e = r ? L : R;
                return 1 + (n > 0 ? -e : e);
              };
            return se(t * o());
          },
          [se],
        ),
        pe = m(
          function (e) {
            e.preventDefault();
            var t = me(e, d.currentImageScale);
            (ce.resetToIncremental(),
              ue({ scale: t, x: e.clientX, y: e.clientY }),
              d.setCurrentZoomLevel(N(t, ne())));
          },
          [me, d, ce, ue, ne],
        ),
        _e = m(
          function (e) {
            if (d.isEnabled) {
              var t = e.key;
              if (
                !(
                  !o("WAWebIncrementalZoomUtils").isPrimaryZoomKey(e) ||
                  !T.includes(t)
                )
              ) {
                (e.preventDefault(), ce.resetToIncremental());
                var n = k.includes(e.key),
                  r = g.current;
                if (r) {
                  var a = w({
                      currentScale: d.currentImageScale,
                      zoomIn: n,
                      container: r,
                      getMinScaleToFit: ne,
                    }),
                    i = a.centerX,
                    l = a.centerY,
                    s = a.scale,
                    u = a.zoomLevel;
                  (ue({ scale: s, x: i, y: l }), d.setCurrentZoomLevel(u));
                }
              }
            }
          },
          [d, ce, ne, ue],
        );
      (f(
        function () {
          if (d.isEnabled)
            return (
              document.addEventListener("keydown", _e),
              function () {
                document.removeEventListener("keydown", _e);
              }
            );
        },
        [_e, d.isEnabled],
      ),
        f(function () {
          oe();
        }, []),
        _(
          function () {
            var e = ne();
            u(e);
          },
          [ne, i],
        ));
      var fe = m(
        function () {
          ue({ scale: d.currentImageScale });
        },
        [ue, d.currentImageScale],
      );
      (_(
        function () {
          return (
            window.addEventListener("resize", fe),
            function () {
              window.removeEventListener("resize", fe);
            }
          );
        },
        [fe],
      ),
        _(
          function () {
            var e = {
              performZoom: function (t) {
                var e = ne(),
                  n = M(t, e),
                  r = n.scale,
                  o = n.zoomLevel;
                (ue({ scale: r }), d.setCurrentZoomLevel(o));
              },
              handleClick: function (t, n) {
                z && ce.handleClick(t, n);
              },
            };
            return (
              d.setHandler(e),
              function () {
                d.setHandler(null);
              }
            );
          },
          [ne, ue, d, ce, z],
        ));
      var ge = d.currentImageScale,
        he = s != null && ge > s;
      (_(
        function () {
          d.isZoomedIn !== he && d.setIsZoomedIn(he);
        },
        [he, d],
      ),
        _(
          function () {
            z && !he && K !== C.LEGACY && Q(C.LEGACY);
          },
          [z, he, K, Q],
        ));
      var ye = m(
          function (e) {
            if (r("justknobx")._("2169")) {
              var t = ne(),
                n = 1,
                o = 2,
                a = se(1 / 0),
                i = 1e-4,
                l = [t];
              n > t + i && l.push(n);
              var s = Math.min(o, a);
              s > l[l.length - 1] + i && l.push(s);
              var u = d.currentImageScale,
                c = l[0];
              for (var m of l)
                if (m > u + i) {
                  c = m;
                  break;
                }
              (ue({ scale: c, x: e.clientX, y: e.clientY }),
                d.setCurrentZoomLevel(N(c, t)));
            }
          },
          [ne, d, ue, se],
        ),
        Ce = o("WAWebIncrementalZoomUtils").useCursorStyles({
          isDragging: $,
          defaultSizeScale: s,
        }),
        be = he ? S.cursorZoomOut : S.cursorZoomIn,
        ve = {
          height: i.height,
          width: i.width,
          x: E.x,
          y: E.y,
          scale: d.currentImageScale,
        },
        Se = (e || (e = r("stylex"))).props(
          S.image(ve),
          ee && S.imageTransition,
          X ? be : Ce,
        ),
        Re = d.currentImageScale,
        Le = e.props(
          S.addonBubbleContainer(i.height * Re, i.width * Re, E.x, E.y),
        );
      return c.jsxs("div", {
        className: "x1n2onr6 xh8yej3 x5yr21d",
        ref: g,
        onWheel: pe,
        children: [
          c.jsx(
            "div",
            babelHelpers.extends({}, Se, {
              ref: b,
              onMouseDown: ie,
              onMouseMove: de,
              onMouseUp: le,
              onMouseLeave: le,
              onDoubleClick: ye,
              role: "img",
              children: a,
            }),
          ),
          c.jsx(
            "div",
            babelHelpers.extends({}, Le, {
              children: c.jsx("div", { className: "x67bb7w", children: n }),
            }),
          ),
        ],
      });
    }
    O.displayName = O.name + " [from " + i.id + "]";
    var B = n("$InternalEnum")({ IN: "in", OUT: "out" });
    function W(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.direction,
        a = p(F),
        i =
          (n === B.OUT && a.currentZoomLevel === D) ||
          (n === B.IN && a.currentZoomLevel === x),
        l;
      t[0] !== n || t[1] !== i
        ? ((l = q(n, i)), (t[0] = n), (t[1] = i), (t[2] = l))
        : (l = t[2]);
      var u = l,
        d;
      t[3] !== n
        ? ((d =
            n === B.IN ? s._(/*BTDS*/ "Zoom in") : s._(/*BTDS*/ "Zoom out")),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        _ = n === B.IN ? "media-zoom-in-button" : "media-zoom-out-button",
        f;
      t[5] !== n || t[6] !== a
        ? ((f = function () {
            var e = a.getHandler();
            if (e) {
              var t =
                n === B.IN ? a.currentZoomLevel + 1 : a.currentZoomLevel - 1;
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
              testid: void 0,
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
    function q(e, t) {
      var n = { iconXstyle: [t ? S.zoomIconDisabled : null] },
        o =
          e === B.IN ? r("WDSIconIcZoomIn.react") : r("WDSIconIcZoomOut.react");
      return function () {
        return c.jsx(o, babelHelpers.extends({}, n));
      };
    }
    ((l.ZoomMode = C),
      (l.ZOOM_KEYS = T),
      (l.snapToZoomLevel = P),
      (l.approximateZoomLevel = N),
      (l.MediaIncrementalZoomCtxProvider = A),
      (l.MediaIncrementalZoomCtx = F),
      (l.IncrementalImageRenderer = O),
      (l.ZoomDirection = B),
      (l.ZoomButton = W));
  },
  226,
);
