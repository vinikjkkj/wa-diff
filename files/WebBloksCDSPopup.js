__d(
  "WebBloksCDSPopup",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksLegacyTraverser",
    "WebBloksPortal",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = "#",
      p = "$",
      _ = "&";
    function f(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.node,
        a;
      t[0] !== n ? ((a = n.get(p)), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== n ? ((l = n.get(_)), (t[2] = n), (t[3] = l)) : (l = t[3]);
      var u = l,
        f = n.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        h = n.get(m),
        y = o("WebBloksComponentContext").useWebBloksContext(),
        C = y.objectSet,
        b = y.renderChildren,
        v = y.treeManager,
        S = d(),
        R = o("WebBloksLegacyTraverser").findComponentByServerId(
          v,
          h,
          C.environment.traversalKeys,
        ),
        L = C.environment.isRtl,
        E,
        k;
      (t[4] !== R || t[5] !== L || t[6] !== i || t[7] !== u
        ? ((E = function () {
            var e;
            if (R != null) {
              var t =
                  (e = R.uiMutableContainer.domNode) == null
                    ? void 0
                    : e.current,
                n = S.current;
              if (!(t == null || n == null)) {
                var r = t.getBoundingClientRect(),
                  o = r.bottom + (u != null ? u : 0);
                ((n.style.width = r.width + "px"),
                  (n.style.top = o + "px"),
                  L
                    ? (n.style.right = r.right + (i != null ? i : 0) + "px")
                    : (n.style.left = r.left + (i != null ? i : 0) + "px"));
                var a = o - n.getBoundingClientRect().top;
                a > 0 && (n.style.top = o + a + "px");
              }
            }
          }),
          (k = [R, L, i, u]),
          (t[4] = R),
          (t[5] = L),
          (t[6] = i),
          (t[7] = u),
          (t[8] = E),
          (t[9] = k))
        : ((E = t[8]), (k = t[9])),
        c(E, k));
      var I = r("WebBloksPortal"),
        T = g,
        D = b(f),
        x;
      t[10] !== T.root || t[11] !== D
        ? ((x = s.jsx("div", { ref: S, className: T.root, children: D })),
          (t[10] = T.root),
          (t[11] = D),
          (t[12] = x))
        : (x = t[12]);
      var $;
      return (
        t[13] !== I || t[14] !== x
          ? (($ = s.jsx(I, { children: x })),
            (t[13] = I),
            (t[14] = x),
            (t[15] = $))
          : ($ = t[15]),
        $
      );
    }
    var g = o("WebBloksStyle").createStyles({ root: { position: "fixed" } });
    l.default = f;
  },
  98,
);
