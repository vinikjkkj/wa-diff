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
      var t = o("react-compiler-runtime").c(20),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        l = i.embedded,
        u;
      t[0] !== n || t[1] !== a
        ? ((u = a(n.get("content"))), (t[0] = n), (t[1] = a), (t[2] = u))
        : (u = t[2]);
      var d = u,
        m = n.get("navbar"),
        p,
        _,
        f;
      if (t[3] !== d || t[4] !== n) {
        f = Symbol.for("react.early_return_sentinel");
        e: {
          var g = n.get("contribs");
          if (((_ = null), (p = !1), g !== void 0 && g.length > 0)) {
            for (var h of g)
              if (o("WebBloksBooleanUtils").isFalse(h.get("should_wrap"))) {
                f = d;
                break e;
              }
          }
        }
        ((t[3] = d), (t[4] = n), (t[5] = p), (t[6] = _), (t[7] = f));
      } else ((p = t[5]), (_ = t[6]), (f = t[7]));
      if (f !== Symbol.for("react.early_return_sentinel")) return f;
      m !== void 0 && ((_ = a(m)), (p = m.getValues().hide_navbar === !0));
      var y = n.styleId,
        C;
      t[8] !== p || t[9] !== _
        ? ((C =
            _ != null && !p
              ? s.jsx("div", { className: c.header, children: _ }, "navbar")
              : null),
          (t[8] = p),
          (t[9] = _),
          (t[10] = C))
        : (C = t[10]);
      var b = l ? c.contentEmbedded : c.contentFullScreen,
        v;
      t[11] !== b
        ? ((v = o("WebBloksStyle").classNames(c.content, b)),
          (t[11] = b),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== d || t[14] !== v
        ? ((S = s.jsx("div", { className: v, children: d }, "content")),
          (t[13] = d),
          (t[14] = v),
          (t[15] = S))
        : (S = t[15]);
      var R;
      return (
        t[16] !== n.styleId || t[17] !== C || t[18] !== S
          ? ((R = s.jsxs("div", {
              "data-bloks-name": y,
              className: c.root,
              children: [C, S],
            })),
            (t[16] = n.styleId),
            (t[17] = C),
            (t[18] = S),
            (t[19] = R))
          : (R = t[19]),
        R
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
