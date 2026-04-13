__d(
  "WAWebPipFloatingVideoPlayer.react",
  [
    "WAWebCmd",
    "WAWebMoveResizeComponent.react",
    "WAWebMoveResizeContext",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.aspectRatio,
        r = e.backgroundImage,
        a = e.originalAspectRatio;
      if (a == null || a === 0) return null;
      var i = (n === L && n > a) || (n === E && n < a);
      if (!i) return null;
      var l;
      t[0] !== r
        ? ((l =
            r != null && r !== ""
              ? u.jsx("div", {
                  className:
                    "x10l6tqk x1toy1gi x4e0jua x9ys34d x65okc x1hedwgd xiy17q3 x1xsqp64 x18d0r48 xrxyp3c xv0oops x1isl5vh xn8zj9a x1iy03kw",
                  style: { backgroundImage: r },
                })
              : null),
          (t[0] = r),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15mixft",
          }),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== s
          ? ((d = u.jsx("div", babelHelpers.extends({}, c, { children: s }))),
            (t[3] = s),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
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
        i = o("react-compiler-runtime").c(71),
        l,
        s;
      i[0] !== t
        ? ((s = t.ref),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = s))
        : ((l = i[1]), (s = i[2]));
      var c = f(!1),
        d = c[0],
        p = c[1],
        v = f(!1),
        L = v[0],
        E = v[1],
        I = f(!1),
        T = I[0],
        D = I[1],
        P = f(!1),
        M = P[0],
        w = P[1],
        A = _(null),
        F,
        O;
      (i[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            return function () {
              return self.clearTimeout(A.current);
            };
          }),
          (O = []),
          (i[3] = F),
          (i[4] = O))
        : ((F = i[3]), (O = i[4])),
        m(F, O));
      var B;
      i[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            (self.clearTimeout(A.current), p(!0));
          }),
          (i[5] = B))
        : (B = i[5]);
      var W = r("useWAWebDebouncedCallback")(B, 50),
        q;
      i[6] !== L
        ? ((q = function () {
            L ||
              (A.current = self.setTimeout(function () {
                p(!1);
              }, $));
          }),
          (i[6] = L),
          (i[7] = q))
        : (q = i[7]);
      var U = r("useWAWebDebouncedCallback")(q, 50),
        V;
      i[8] !== W
        ? ((V = function () {
            (E(!0), W());
          }),
          (i[8] = W),
          (i[9] = V))
        : (V = i[9]);
      var H = V,
        G;
      i[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function () {
            E(!1);
          }),
          (i[10] = G))
        : (G = i[10]);
      var z = G,
        j = l.bottomContent != null || l.topContent != null || l.enableDragBar,
        K,
        Q;
      i[11] !== l.aspectRatio ||
      i[12] !== l.initialPiPStyle ||
      i[13] !== l.useChatListPanelPositioning
        ? ((K = N(l.aspectRatio)),
          (Q = x(K, l.initialPiPStyle, l.useChatListPanelPositioning)),
          (i[11] = l.aspectRatio),
          (i[12] = l.initialPiPStyle),
          (i[13] = l.useChatListPanelPositioning),
          (i[14] = K),
          (i[15] = Q))
        : ((K = i[14]), (Q = i[15]));
      var X = Q,
        Y = l,
        J = Y.onInitialWidthCalculated,
        Z = Y.useChatListPanelPositioning,
        ee,
        te;
      (i[16] !== X.width || i[17] !== J || i[18] !== Z
        ? ((ee = function () {
            Z === !0 && J != null && J(X.width);
          }),
          (te = [X.width, J, Z]),
          (i[16] = X.width),
          (i[17] = J),
          (i[18] = Z),
          (i[19] = ee),
          (i[20] = te))
        : ((ee = i[19]), (te = i[20])),
        m(ee, te));
      var ne = S * K,
        re = R < ne ? ne : R,
        oe = (n = l.minWidthOverride) != null ? n : re,
        ae = (a = l.minHeightOverride) != null ? a : S,
        ie;
      i[21] !== l.useChatListPanelPositioning
        ? ((ie =
            l.useChatListPanelPositioning === !0
              ? { x: C, y: b }
              : { x: h, y: y }),
          (i[21] = l.useChatListPanelPositioning),
          (i[22] = ie))
        : (ie = i[22]);
      var le = ie,
        se;
      i[23] !== M || i[24] !== T
        ? ((se = { isResizing: T, isMoving: M }),
          (i[23] = M),
          (i[24] = T),
          (i[25] = se))
        : (se = i[25]);
      var ue = se,
        ce = l,
        de = ce.onResizeEnd,
        me = ce.onResizeStart,
        pe;
      i[26] !== me
        ? ((pe = function () {
            (D(!0), me == null || me());
          }),
          (i[26] = me),
          (i[27] = pe))
        : (pe = i[27]);
      var _e = pe,
        fe;
      i[28] !== de
        ? ((fe = function () {
            (D(!1), de == null || de());
          }),
          (i[28] = de),
          (i[29] = fe))
        : (fe = i[29]);
      var ge = fe,
        he;
      i[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = function () {
            w(!0);
          }),
          (i[30] = he))
        : (he = i[30]);
      var ye = he,
        Ce = l,
        be = Ce.onMoveEnd,
        ve;
      i[31] !== be
        ? ((ve = function () {
            (w(!1), be == null || be());
          }),
          (i[31] = be),
          (i[32] = ve))
        : (ve = i[32]);
      var Se = ve,
        Re = j && g.redesign,
        Le;
      i[33] !== l.moveResizeContainerXstyle || i[34] !== Re
        ? ((Le = [g.videoFloater, Re, l.moveResizeContainerXstyle]),
          (i[33] = l.moveResizeContainerXstyle),
          (i[34] = Re),
          (i[35] = Le))
        : (Le = i[35]);
      var Ee = j ? W : void 0,
        ke = j ? U : void 0,
        Ie = j ? H : void 0,
        Te = j ? z : void 0,
        De;
      i[36] !== K || i[37] !== l.aspectRatio || i[38] !== l.previewUrl
        ? ((De = u.jsx(k, {
            aspectRatio: K,
            originalAspectRatio: l.aspectRatio,
            backgroundImage: l.previewUrl,
          })),
          (i[36] = K),
          (i[37] = l.aspectRatio),
          (i[38] = l.previewUrl),
          (i[39] = De))
        : (De = i[39]);
      var xe;
      i[40] !== ue || i[41] !== l.children || i[42] !== De
        ? ((xe = u.jsxs(
            o("WAWebMoveResizeContext").MoveResizeContext.Provider,
            { value: ue, children: [De, l.children] },
          )),
          (i[40] = ue),
          (i[41] = l.children),
          (i[42] = De),
          (i[43] = xe))
        : (xe = i[43]);
      var $e;
      return (
        i[44] !== K ||
        i[45] !== d ||
        i[46] !== Se ||
        i[47] !== ge ||
        i[48] !== _e ||
        i[49] !== X ||
        i[50] !== le ||
        i[51] !== ae ||
        i[52] !== oe ||
        i[53] !== l.animationStartStyle ||
        i[54] !== l.bottomContent ||
        i[55] !== l.disableResize ||
        i[56] !== l.dragCursor ||
        i[57] !== l.enableDragBar ||
        i[58] !== l.externalResize ||
        i[59] !== l.independentResize ||
        i[60] !== l.moveResizeRef ||
        i[61] !== l.onResize ||
        i[62] !== l.topContent ||
        i[63] !== s ||
        i[64] !== Le ||
        i[65] !== Ee ||
        i[66] !== ke ||
        i[67] !== Ie ||
        i[68] !== Te ||
        i[69] !== xe
          ? (($e = u.jsx(r("WAWebMoveResizeComponent.react"), {
              ref: s,
              moveResizeRef: l.moveResizeRef,
              aspectRatio: K,
              margin: le,
              minWidth: oe,
              minHeight: ae,
              xstyle: Le,
              initialStyle: X,
              animationStartStyle: l.animationStartStyle,
              escapeConversationHeader: !0,
              independentResize: l.independentResize,
              disableResize: l.disableResize,
              topContent: l.topContent,
              bottomContent: l.bottomContent,
              onMouseEnter: Ee,
              onMouseLeave: ke,
              onFocus: Ie,
              onBlur: Te,
              extraContentVisible: d,
              enableDragBar: l.enableDragBar,
              dragCursor: l.dragCursor,
              onResize: l.onResize,
              onResizeStart: _e,
              onResizeEnd: ge,
              onMoveStart: ye,
              onMoveEnd: Se,
              externalResize: l.externalResize,
              children: xe,
            })),
            (i[44] = K),
            (i[45] = d),
            (i[46] = Se),
            (i[47] = ge),
            (i[48] = _e),
            (i[49] = X),
            (i[50] = le),
            (i[51] = ae),
            (i[52] = oe),
            (i[53] = l.animationStartStyle),
            (i[54] = l.bottomContent),
            (i[55] = l.disableResize),
            (i[56] = l.dragCursor),
            (i[57] = l.enableDragBar),
            (i[58] = l.externalResize),
            (i[59] = l.independentResize),
            (i[60] = l.moveResizeRef),
            (i[61] = l.onResize),
            (i[62] = l.topContent),
            (i[63] = s),
            (i[64] = Le),
            (i[65] = Ee),
            (i[66] = ke),
            (i[67] = Ie),
            (i[68] = Te),
            (i[69] = xe),
            (i[70] = $e))
          : ($e = i[70]),
        $e
      );
    }
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
