__d(
  "WAWebMediaIncrementalZoom",
  [
    "fbt",
    "$InternalEnum",
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
    };
    function M(e, t) {
      return !e || !t
        ? null
        : {
            containerW: e.offsetWidth,
            containerH: e.offsetHeight,
            imageW: t.offsetWidth,
            imageH: t.offsetHeight,
          };
    }
    function w(e) {
      if (!e) return 1;
      var t = e.containerH,
        n = e.containerW,
        r = e.imageH,
        o = e.imageW;
      return Math.min(n / o, t / r);
    }
    function A(e, t) {
      var n = e.containerH,
        r = e.containerW,
        o = e.imageH,
        a = e.imageW;
      return { x: (r - a * t) / 2, y: (n - o * t) / 2 };
    }
    var F = function (t) {
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
    function O(e) {
      var t = o("react-compiler-runtime").c(17),
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
        R = S === "image",
        L;
      t[1] !== e.activeMsg
        ? ((L = o("WAWebMsgGetters").getId(e.activeMsg).toString()),
          (t[1] = e.activeMsg),
          (t[2] = L))
        : (L = t[2]);
      var E, k, I, T;
      t[3] === Symbol.for("react.memo_cache_sentinel")
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
          (t[3] = E),
          (t[4] = k),
          (t[5] = I),
          (t[6] = T))
        : ((E = t[3]), (k = t[4]), (I = t[5]), (T = t[6]));
      var D;
      t[7] !== s ||
      t[8] !== m ||
      t[9] !== f ||
      t[10] !== R ||
      t[11] !== a ||
      t[12] !== L
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
          (t[7] = s),
          (t[8] = m),
          (t[9] = f),
          (t[10] = R),
          (t[11] = a),
          (t[12] = L),
          (t[13] = D))
        : (D = t[13]);
      var x = D,
        $;
      return (
        t[14] !== e.children || t[15] !== x
          ? (($ = c.jsx(B.Provider, { value: x, children: e.children })),
            (t[14] = e.children),
            (t[15] = x),
            (t[16] = $))
          : ($ = t[16]),
        $
      );
    }
    var B = c.createContext({
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
    function W(t) {
      var n = t.addonBubble,
        a = t.image,
        i = t.size,
        l = y(null),
        s = l[0],
        u = l[1],
        d = p(B),
        g = h(null),
        C = h(null),
        b = y({ x: 0, y: 0 }),
        L = b[0],
        k = b[1],
        T = y(!1),
        x = T[0],
        $ = T[1],
        O = y({ x: 0, y: 0 }),
        W = O[0],
        q = O[1],
        U = y({ x: 0, y: 0 }),
        V = U[0],
        H = U[1],
        G = y(0),
        z = G[0],
        j = G[1],
        K = m(function () {
          return M(g.current, C.current);
        }, []);
      o("WAWebIncrementalZoomUtils").useThumbnailOverflow({
        panOffset: L,
        getContainerAndImageDimensions: K,
      });
      var Q = m(
        function () {
          return w(K());
        },
        [K],
      );
      _(function () {
        var e = M(g.current, C.current);
        j(w(e));
      }, []);
      var X = function () {
          var e = M(g.current, C.current);
          if (e) {
            var t = w(e);
            (d.setCurrentImageScale(t), k(A(e, t)), d.setCurrentZoomLevel(1));
          }
        },
        Y = m(
          function (e, t, n) {
            n === void 0 && (n = d.currentImageScale);
            var r = K();
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
          [d, K],
        ),
        J = m(
          function (e) {
            d.currentImageScale !== z &&
              (e.preventDefault(),
              $(!0),
              q({ x: e.clientX, y: e.clientY }),
              H({ x: L.x, y: L.y }));
          },
          [z, L.x, L.y, d.currentImageScale],
        ),
        Z = m(function () {
          $(!1);
        }, []),
        ee = m(
          function (e) {
            var t = Q(),
              n = N(D, t),
              r = n.scale;
            return Math.min(r, Math.max(t, e));
          },
          [Q],
        ),
        te = m(
          function (e) {
            var t = e.scale,
              n = e.x,
              r = e.y,
              o = K();
            if (o) {
              var a = o.containerH,
                i = o.containerW,
                l = o.imageH,
                s = o.imageW,
                u = g.current;
              if (u) {
                var c = ee(t),
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
                var D = Y(I, T, c);
                (k(D), d.setCurrentImageScale(c));
              }
            }
          },
          [d, L, Y, K, ee],
        ),
        ne = m(
          function (e) {
            if (x) {
              var t = e.clientX - W.x,
                n = e.clientY - W.y,
                r = V.x + t,
                o = V.y + n,
                a = Y(r, o, d.currentImageScale);
              k(a);
            }
          },
          [x, W, V, Y, d.currentImageScale],
        ),
        re = m(
          function (e, t) {
            var n = e.deltaY || e.detail,
              r = Math.abs(n) < 10,
              o = function () {
                var e = r ? R : S;
                return 1 + (n > 0 ? -e : e);
              };
            return ee(t * o());
          },
          [ee],
        ),
        oe = m(
          function (e) {
            e.preventDefault();
            var t = re(e, d.currentImageScale);
            (te({ scale: t, x: e.clientX, y: e.clientY }),
              d.setCurrentZoomLevel(P(t, Q())));
          },
          [re, d, te, Q],
        ),
        ae = m(
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
                  var a = F({
                      currentScale: d.currentImageScale,
                      zoomIn: n,
                      container: r,
                      getMinScaleToFit: Q,
                    }),
                    i = a.centerX,
                    l = a.centerY,
                    s = a.scale,
                    u = a.zoomLevel;
                  (te({ scale: s, x: i, y: l }), d.setCurrentZoomLevel(u));
                }
              }
            }
          },
          [d, Q, te],
        );
      (f(
        function () {
          if (d.isEnabled)
            return (
              document.addEventListener("keydown", ae),
              function () {
                document.removeEventListener("keydown", ae);
              }
            );
        },
        [ae, d.isEnabled],
      ),
        f(function () {
          X();
        }, []),
        _(
          function () {
            var e = M(g.current, C.current);
            u(w(e));
          },
          [i],
        ));
      var ie = m(
        function () {
          te({ scale: d.currentImageScale });
        },
        [te, d.currentImageScale],
      );
      (_(
        function () {
          return (
            window.addEventListener("resize", ie),
            function () {
              window.removeEventListener("resize", ie);
            }
          );
        },
        [ie],
      ),
        _(
          function () {
            var e = {
              performZoom: function (t) {
                var e = Q(),
                  n = N(t, e),
                  r = n.scale,
                  o = n.zoomLevel;
                (te({ scale: r }), d.setCurrentZoomLevel(o));
              },
            };
            return (
              d.setHandler(e),
              function () {
                d.setHandler(null);
              }
            );
          },
          [Q, te, d],
        ));
      var le = d.currentImageScale,
        se = s != null && le > s;
      _(
        function () {
          d.isZoomedIn !== se && d.setIsZoomedIn(se);
        },
        [se, d],
      );
      var ue = m(
          function (e) {
            var t = Q(),
              n = 1,
              r = 2,
              o = ee(1 / 0),
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
            (te({ scale: u, x: e.clientX, y: e.clientY }),
              d.setCurrentZoomLevel(P(u, t)));
          },
          [Q, d, te, ee],
        ),
        ce = o("WAWebIncrementalZoomUtils").useCursorStyles({
          isDragging: x,
          defaultSizeScale: s,
        }),
        de = {
          height: i.height,
          width: i.width,
          x: L.x,
          y: L.y,
          scale: d.currentImageScale,
        },
        me = (e || (e = r("stylex"))).props(v.image(de), ce),
        pe = d.currentImageScale,
        _e = e.props(
          v.addonBubbleContainer(i.height * pe, i.width * pe, L.x, L.y),
        );
      return c.jsxs("div", {
        className: "x1n2onr6 xh8yej3 x5yr21d",
        ref: g,
        onWheel: oe,
        children: [
          c.jsx(
            "div",
            babelHelpers.extends({}, me, {
              ref: C,
              onMouseDown: J,
              onMouseMove: ne,
              onMouseUp: Z,
              onMouseLeave: Z,
              onDoubleClick: ue,
              role: "img",
              children: a,
            }),
          ),
          c.jsx(
            "div",
            babelHelpers.extends({}, _e, {
              children: c.jsx("div", { className: "x67bb7w", children: n }),
            }),
          ),
        ],
      });
    }
    W.displayName = W.name + " [from " + i.id + "]";
    var q = n("$InternalEnum")({ IN: "in", OUT: "out" });
    function U(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.direction,
        a = p(B),
        i =
          (n === q.OUT && a.currentZoomLevel === T) ||
          (n === q.IN && a.currentZoomLevel === D),
        l;
      t[0] !== n || t[1] !== i
        ? ((l = V(n, i)), (t[0] = n), (t[1] = i), (t[2] = l))
        : (l = t[2]);
      var u = l,
        d;
      t[3] !== n
        ? ((d =
            n === q.IN ? s._(/*BTDS*/ "Zoom in") : s._(/*BTDS*/ "Zoom out")),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        _ = n === q.IN ? "media-zoom-in-button" : "media-zoom-out-button",
        f;
      t[5] !== n || t[6] !== a
        ? ((f = function () {
            var e = a.getHandler();
            if (e) {
              var t =
                n === q.IN ? a.currentZoomLevel + 1 : a.currentZoomLevel - 1;
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
    function V(e, t) {
      var n = { iconXstyle: [t ? v.zoomIconDisabled : null] },
        o =
          e === q.IN ? r("WDSIconIcZoomIn.react") : r("WDSIconIcZoomOut.react");
      return function () {
        return c.jsx(o, babelHelpers.extends({}, n));
      };
    }
    ((l.ZOOM_KEYS = I),
      (l.MediaIncrementalZoomCtxProvider = O),
      (l.MediaIncrementalZoomCtx = B),
      (l.IncrementalImageRenderer = W),
      (l.ZoomDirection = q),
      (l.ZoomButton = U));
  },
  226,
);
