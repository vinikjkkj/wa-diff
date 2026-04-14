__d(
  "WAWebPipFloatingVideoPlayer.react",
  [
    "WAWebCmd",
    "WAWebMoveResizeComponent.react",
    "WAWebMoveResizeContext",
    "react",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        videoFloater: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          boxShadow: "xshw7n3",
          willChange: "x1so62im",
          $$css: !0,
        },
        redesign: {
          backgroundColor: "xf1jlys",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
      },
      h = 10,
      y = 10,
      C = 8,
      b = 8,
      v = 330,
      S = 145,
      R = 145,
      L = R / v,
      E = v / S;
    function k(e) {
      var t = e.aspectRatio,
        n = e.backgroundImage,
        r = e.originalAspectRatio;
      if (r == null || r === 0) return null;
      var o = (t === L && t > r) || (t === E && t < r);
      if (!o) return null;
      var a =
        n != null && n !== ""
          ? u.jsx("div", {
              className:
                "x10l6tqk x1toy1gi x4e0jua x9ys34d x65okc x1hedwgd xiy17q3 x1xsqp64 x18d0r48 xrxyp3c xv0oops x1isl5vh xn8zj9a x1iy03kw",
              style: { backgroundImage: n },
            })
          : null;
      return u.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15mixft",
        children: a,
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e, t) {
      if (e > 1) {
        var n = t != null ? t : v;
        return { initialWidth: n, initialHeight: n / e };
      }
      var r = t != null ? t / e : v;
      return { initialHeight: r, initialWidth: r * e };
    }
    function T() {
      var e;
      return (
        o("WAWebCmd").Cmd.getConversationHeaderOffset(function (t) {
          e = t;
        }),
        e != null ? e : { right: window.innerWidth, bottom: 0 }
      );
    }
    function D() {
      var e;
      return (
        o("WAWebCmd").Cmd.getChatListPanelOffset(function (t) {
          e = t;
        }),
        e != null ? e : { right: window.innerWidth, bottom: 0 }
      );
    }
    function x(e, t, n) {
      var r = I(e, t == null ? void 0 : t.width),
        o = r.initialHeight,
        a = r.initialWidth;
      if (n === !0) {
        var i = D(),
          l = t == null ? void 0 : t.left;
        if (l == null) {
          var s,
            u = (s = i.left) != null ? s : 0;
          l = u + C;
        }
        var c = a,
          d = o,
          m = i.width;
        m != null && ((c = m - 2 * C), (d = c / e));
        var p = t == null ? void 0 : t.bottom;
        return (
          p == null && (p = window.innerHeight - i.bottom - b - d),
          { width: c, left: l, bottom: p }
        );
      }
      var _ = T(),
        f = t == null ? void 0 : t.left;
      f == null &&
        (f =
          _.right < window.innerWidth
            ? _.right - a - h
            : window.innerWidth - a - h);
      var g = t == null ? void 0 : t.bottom;
      return (
        g == null && (g = window.innerHeight - y - o - _.bottom),
        { width: a, left: f, bottom: g }
      );
    }
    var $ = 3e3;
    function P(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = f(!1),
        c = s[0],
        v = s[1],
        L = f(!1),
        E = L[0],
        I = L[1],
        T = f(!1),
        D = T[0],
        P = T[1],
        M = f(!1),
        w = M[0],
        A = M[1],
        F = _(null);
      m(function () {
        return function () {
          return self.clearTimeout(F.current);
        };
      }, []);
      var O = r("useWAWebDebouncedCallback")(function () {
          (self.clearTimeout(F.current), v(!0));
        }, 50),
        B = r("useWAWebDebouncedCallback")(function () {
          E ||
            (F.current = self.setTimeout(function () {
              v(!1);
            }, $));
        }, 50),
        W = function () {
          (I(!0), O());
        },
        q = function () {
          I(!1);
        },
        U = l.bottomContent != null || l.topContent != null || l.enableDragBar,
        V = N(l.aspectRatio),
        H = x(V, l.initialPiPStyle, l.useChatListPanelPositioning),
        G = l.onInitialWidthCalculated,
        z = l.useChatListPanelPositioning;
      m(
        function () {
          z === !0 && G != null && G(H.width);
        },
        [H.width, G, z],
      );
      var j = S * V,
        K = R < j ? j : R,
        Q = (n = l.minWidthOverride) != null ? n : K,
        X = (a = l.minHeightOverride) != null ? a : S,
        Y =
          l.useChatListPanelPositioning === !0
            ? { x: C, y: b }
            : { x: h, y: y },
        J = p(
          function () {
            return { isResizing: D, isMoving: w };
          },
          [D, w],
        ),
        Z = l.onResizeEnd,
        ee = l.onResizeStart,
        te = d(
          function () {
            (P(!0), ee == null || ee());
          },
          [ee],
        ),
        ne = d(
          function () {
            (P(!1), Z == null || Z());
          },
          [Z],
        ),
        re = d(function () {
          A(!0);
        }, []),
        oe = l.onMoveEnd,
        ae = d(
          function () {
            (A(!1), oe == null || oe());
          },
          [oe],
        );
      return u.jsx(r("WAWebMoveResizeComponent.react"), {
        ref: i,
        moveResizeRef: l.moveResizeRef,
        aspectRatio: V,
        margin: Y,
        minWidth: Q,
        minHeight: X,
        xstyle: [g.videoFloater, U && g.redesign, l.moveResizeContainerXstyle],
        initialStyle: H,
        animationStartStyle: l.animationStartStyle,
        escapeConversationHeader: !0,
        independentResize: l.independentResize,
        disableResize: l.disableResize,
        topContent: l.topContent,
        bottomContent: l.bottomContent,
        onMouseEnter: U ? O : void 0,
        onMouseLeave: U ? B : void 0,
        onFocus: U ? W : void 0,
        onBlur: U ? q : void 0,
        extraContentVisible: c,
        enableDragBar: l.enableDragBar,
        dragCursor: l.dragCursor,
        onResize: l.onResize,
        onResizeStart: te,
        onResizeEnd: ne,
        onMoveStart: re,
        onMoveEnd: ae,
        externalResize: l.externalResize,
        children: u.jsxs(
          o("WAWebMoveResizeContext").MoveResizeContext.Provider,
          {
            value: J,
            children: [
              u.jsx(k, {
                aspectRatio: V,
                originalAspectRatio: l.aspectRatio,
                backgroundImage: l.previewUrl,
              }),
              l.children,
            ],
          },
        ),
      });
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      if (e == null) return 1;
      switch (!0) {
        case e < L:
          return L;
        case e > E:
          return E;
        default:
          return e;
      }
    }
    ((l.MIN_WIDTH = R), (l.FloatingVideoPlayer = P));
  },
  98,
);
