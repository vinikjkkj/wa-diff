__d(
  "WebBloksScreenWrapperPrimitive",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        u = l.embedded,
        d;
      t[0] !== n || t[1] !== a
        ? ((d = a(n.get("content"))), (t[0] = n), (t[1] = a), (t[2] = d))
        : (d = t[2]);
      var m = d,
        p = n.get("navbar"),
        _,
        f,
        g;
      if (t[3] !== m || t[4] !== n) {
        g = Symbol.for("react.early_return_sentinel");
        e: {
          var h = n.get("contribs");
          if (((f = null), (_ = !1), h !== void 0 && h.length > 0)) {
            for (var y of h)
              if (o("WebBloksBooleanUtils").isFalse(y.get("should_wrap"))) {
                g = m;
                break e;
              }
          }
        }
        ((t[3] = m), (t[4] = n), (t[5] = _), (t[6] = f), (t[7] = g));
      } else ((_ = t[5]), (f = t[6]), (g = t[7]));
      if (g !== Symbol.for("react.early_return_sentinel")) return g;
      p !== void 0 && ((f = a(p)), (_ = p.getValues().hide_navbar === !0));
      var C;
      t[8] !== i || t[9] !== n.styleId
        ? ((C = i(n.styleId)), (t[8] = i), (t[9] = n.styleId), (t[10] = C))
        : (C = t[10]);
      var b;
      t[11] !== _ || t[12] !== f
        ? ((b =
            f != null && !_
              ? s.jsx("div", { className: c.header, children: f }, "navbar")
              : null),
          (t[11] = _),
          (t[12] = f),
          (t[13] = b))
        : (b = t[13]);
      var v = u ? c.contentEmbedded : c.contentFullScreen,
        S;
      t[14] !== v
        ? ((S = o("WebBloksStyle").classNames(c.content, v)),
          (t[14] = v),
          (t[15] = S))
        : (S = t[15]);
      var R;
      t[16] !== m || t[17] !== S
        ? ((R = s.jsx("div", { className: S, children: m }, "content")),
          (t[16] = m),
          (t[17] = S),
          (t[18] = R))
        : (R = t[18]);
      var L;
      return (
        t[19] !== C || t[20] !== b || t[21] !== R
          ? ((L = s.jsxs(
              "div",
              babelHelpers.extends({}, C, {
                className: c.root,
                children: [b, R],
              }),
            )),
            (t[19] = C),
            (t[20] = b),
            (t[21] = R),
            (t[22] = L))
          : (L = t[22]),
        L
      );
    }
    var c = o("WebBloksStyle").createStyles({
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
    l.default = u;
  },
  98,
);
