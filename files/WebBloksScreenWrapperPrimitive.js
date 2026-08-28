__d(
  "WebBloksScreenWrapperPrimitive",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "#",
      c = "&",
      d = "$",
      m = "#",
      p = "\u3FD5",
      _ = "#";
    function f(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        f = l.embedded,
        h;
      t[0] !== n || t[1] !== a
        ? ((h = a(n.getSubNode(u))), (t[0] = n), (t[1] = a), (t[2] = h))
        : (h = t[2]);
      var y = h,
        C = n.getSubNode(d),
        b,
        v,
        S;
      if (t[3] !== y || t[4] !== n) {
        S = Symbol.for("react.early_return_sentinel");
        e: {
          var R = n.getSubNodes(c);
          if (((v = null), (b = !1), R != null && R.length > 0)) {
            for (var L of R)
              if (
                L.styleId === p &&
                o("WebBloksBooleanUtils").isFalse(
                  o("WebBloksUtils").cast(L).get(_),
                )
              ) {
                S = y;
                break e;
              }
          }
        }
        ((t[3] = y), (t[4] = n), (t[5] = b), (t[6] = v), (t[7] = S));
      } else ((b = t[5]), (v = t[6]), (S = t[7]));
      if (S !== Symbol.for("react.early_return_sentinel")) return S;
      C != null && ((v = a(C)), (b = C.get(m) === !0));
      var E;
      t[8] !== i || t[9] !== n.styleId
        ? ((E = i(n.styleId)), (t[8] = i), (t[9] = n.styleId), (t[10] = E))
        : (E = t[10]);
      var k;
      t[11] !== b || t[12] !== v
        ? ((k =
            v != null && !b
              ? s.jsx("div", { className: g.header, children: v }, "navbar")
              : null),
          (t[11] = b),
          (t[12] = v),
          (t[13] = k))
        : (k = t[13]);
      var I = f ? g.contentEmbedded : g.contentFullScreen,
        T;
      t[14] !== I
        ? ((T = o("WebBloksStyle").classNames(g.content, I)),
          (t[14] = I),
          (t[15] = T))
        : (T = t[15]);
      var D;
      t[16] !== y || t[17] !== T
        ? ((D = s.jsx("div", { className: T, children: y }, "content")),
          (t[16] = y),
          (t[17] = T),
          (t[18] = D))
        : (D = t[18]);
      var x;
      return (
        t[19] !== E || t[20] !== k || t[21] !== D
          ? ((x = s.jsxs(
              "div",
              babelHelpers.extends({}, E, {
                className: g.root,
                children: [k, D],
              }),
            )),
            (t[19] = E),
            (t[20] = k),
            (t[21] = D),
            (t[22] = x))
          : (x = t[22]),
        x
      );
    }
    var g = o("WebBloksStyle").createStyles({
      root: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
      header: { flex: "0 0 auto" },
      content: {
        flex: "1 1 0",
        width: "100%",
        overflow: "hidden",
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
      },
      contentEmbedded: { flexBasis: "auto" },
      contentFullScreen: { flexBasis: "0" },
    });
    l.default = f;
  },
  98,
);
