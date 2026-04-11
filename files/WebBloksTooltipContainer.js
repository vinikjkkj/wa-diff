__d(
  "WebBloksTooltipContainer",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksSSRUtils",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useLayoutEffect,
      m = o("WebBloksStyle").createStyles({
        root: {
          alignSelf: "stretch",
          position: "relative",
          display: "flex",
          zIndex: 99,
        },
      });
    function p(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.node,
        r = o("WebBloksStyle").useStyle(n),
        a = r.wrapper,
        i = r.wrapperProps,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        u = l.bloksContext,
        c = l.executeCatch,
        p = l.renderNode,
        _ = !!n.get("tooltip_visibility"),
        f;
      t[0] !== n
        ? ((f = n.getExpression("on_visibility_update")),
          (t[0] = n),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] !== n
        ? ((h = n.getExpression("on_touch_outside")), (t[2] = n), (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      t[4] !== n || t[5] !== p
        ? ((C = p(n.getSubNode("tooltip"))), (t[4] = n), (t[5] = p), (t[6] = C))
        : (C = t[6]);
      var b = C,
        v;
      t[7] !== n || t[8] !== p
        ? ((v = p(n.getSubNode("child"))), (t[7] = n), (t[8] = p), (t[9] = v))
        : (v = t[9]);
      var S = v;
      u.initAssociatedObject_INTERNAL(
        n,
        o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
        { visible: _ },
      );
      var R;
      t[10] !== u || t[11] !== c || t[12] !== n || t[13] !== y || t[14] !== g
        ? ((R = function () {
            (g != null && c(n, g, [n, !1]),
              y != null && c(n, y, [n, !1]),
              u.updateAssociatedObject_INTERNAL(
                n,
                o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
                { visible: !1 },
              ));
          }),
          (t[10] = u),
          (t[11] = c),
          (t[12] = n),
          (t[13] = y),
          (t[14] = g),
          (t[15] = R))
        : (R = t[15]);
      var L = R,
        E;
      t[16] !== u || t[17] !== n
        ? ((E = u.getAssociatedObject_INTERNAL(
            n,
            o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
          )),
          (t[16] = u),
          (t[17] = n),
          (t[18] = E))
        : (E = t[18]);
      var k = E,
        I,
        T;
      (t[19] !== L || t[20] !== k
        ? ((I = function () {
            if (!(!o("WebBloksSSRUtils").canUseDOM || !k)) {
              var e = document.documentElement;
              return (
                e.addEventListener("click", L, { passive: !0, once: !0 }),
                function () {
                  e.removeEventListener("click", L);
                }
              );
            }
          }),
          (T = [k, L]),
          (t[19] = L),
          (t[20] = k),
          (t[21] = I),
          (t[22] = T))
        : ((I = t[21]), (T = t[22])),
        d(I, T));
      var D, x;
      (t[23] !== L || t[24] !== k
        ? ((x = function () {
            if (!(!o("WebBloksSSRUtils").canUseDOM || !k)) {
              var e = document.documentElement;
              return (
                e.addEventListener("scroll", L, { passive: !0, once: !0 }),
                function () {
                  e.removeEventListener("scroll", L);
                }
              );
            }
          }),
          (D = [k, L]),
          (t[23] = L),
          (t[24] = k),
          (t[25] = D),
          (t[26] = x))
        : ((D = t[25]), (x = t[26])),
        d(x, D));
      var $;
      t[27] !== L
        ? (($ = function (t) {
            t.key === "Escape" && (t.stopPropagation(), L());
          }),
          (t[27] = L),
          (t[28] = $))
        : ($ = t[28]);
      var P = $,
        N = k != null && k.visible ? b : null,
        M;
      t[29] !== S || t[30] !== P || t[31] !== N || t[32] !== i
        ? ((M = s.jsxs(
            "div",
            babelHelpers.extends({}, i, {
              className: m.root,
              onKeyPress: P,
              children: [N, S],
            }),
          )),
          (t[29] = S),
          (t[30] = P),
          (t[31] = N),
          (t[32] = i),
          (t[33] = M))
        : (M = t[33]);
      var w;
      return (
        t[34] !== M || t[35] !== a
          ? ((w = a(M)), (t[34] = M), (t[35] = a), (t[36] = w))
          : (w = t[36]),
        w
      );
    }
    l.default = p;
  },
  98,
);
