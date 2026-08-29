__d(
  "WebBloksNavbar",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksNavbarBackButton",
    "WebBloksScreen",
    "WebBloksScreenHost",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = o("WebBloksStyle").createStyles({
        root: {
          height: 52,
          width: "100%",
          zIndex: 1,
          backgroundColor: o("WebBloksTheme").WebBloksThemeVars["navbar-bg"],
          padding: 8,
          borderBottomStyle: "solid",
          borderBottomColor: o("WebBloksTheme").WebBloksThemeVars.separator,
          borderBottomWidth: 1,
          justifyContent: "center",
        },
        backButton: {
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          flexGrow: 0,
          flexDirection: "row",
          justifyContent: "center",
        },
        titleContainer: {
          alignItems: "center",
          flexGrow: 1,
          fontWeight: 600,
          justifyContent: "center",
        },
        titleContainerMargin: { marginRight: 28 },
        title: {
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: "0 0px",
          textAlign: "center",
        },
        trailingButtons: {
          display: "flex",
          flexShrink: 0,
          alignItems: "center",
          flexDirection: "row-reverse",
          justifyContent: "center",
        },
      });
    function d(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.executeCatch,
        l = a.isLoadingNode,
        u = a.objectSet,
        d = a.ownerContext,
        p = a.renderNode,
        _ = o("WebBloksEnvironmentContext").useDataBloksName(),
        f = u.navigationManager,
        g;
      t[0] !== n
        ? ((g = n.get("contribs")), (t[0] = n), (t[1] = g))
        : (g = t[1]);
      var h = g,
        y = n.get("hide_navbar"),
        C;
      t[2] !== n ? ((C = n.get("title")), (t[2] = n), (t[3] = C)) : (C = t[3]);
      var b = C,
        v;
      if (
        t[4] !== h ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== n ||
        t[8] !== u ||
        t[9] !== d ||
        t[10] !== p
      ) {
        e: {
          var S = [],
            R = null;
          if (h == null) {
            v = { titleBloksNode: null, trailingButtons: S };
            break e;
          }
          for (var L of h) {
            var E = L.get("right_buttons"),
              k = L.get("trailing_buttons"),
              I = L.getExpression("custom_title_parseresult");
            if (I != null) {
              var T = void 0;
              l && d
                ? (T = d.executeCatch(I.getValue(), []))
                : (T = i(n, I, []));
              var D = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
                u,
                o("WebBloksUtils").cast(T),
                { isModal: !1, isEmbedded: !0 },
              );
              R = s.jsx(r("WebBloksScreenHost"), { screen: D });
            }
            if (k !== void 0)
              for (var x of k) S.push(s.jsx(m, { node: x }, x.clientId));
            if (E !== void 0) for (var $ of E) S.push(p($));
          }
          var P;
          (t[12] !== R || t[13] !== S
            ? ((P = { titleBloksNode: R, trailingButtons: S }),
              (t[12] = R),
              (t[13] = S),
              (t[14] = P))
            : (P = t[14]),
            (v = P));
        }
        ((t[4] = h),
          (t[5] = i),
          (t[6] = l),
          (t[7] = n),
          (t[8] = u),
          (t[9] = d),
          (t[10] = p),
          (t[11] = v));
      } else v = t[11];
      var N = v,
        M = N.titleBloksNode,
        w = N.trailingButtons;
      if (y === !0) return null;
      var A = f.getScreenCount() > 1,
        F = A && w.length === 0,
        O;
      t[15] !== _ || t[16] !== n.styleId
        ? ((O = _(n.styleId)), (t[15] = _), (t[16] = n.styleId), (t[17] = O))
        : (O = t[17]);
      var B;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.root,
          )),
          (t[18] = B))
        : (B = t[18]);
      var W = F ? c.titleContainerMargin : null,
        q;
      t[19] !== W
        ? ((q = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.titleContainer,
            W,
          )),
          (t[19] = W),
          (t[20] = q))
        : (q = t[20]);
      var U;
      t[21] !== f || t[22] !== A
        ? ((U = A
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return f.pop();
                },
              })
            : null),
          (t[21] = f),
          (t[22] = A),
          (t[23] = U))
        : (U = t[23]);
      var V = M != null ? M : b,
        H;
      t[24] !== V
        ? ((H = s.jsx("div", { className: c.title, children: V })),
          (t[24] = V),
          (t[25] = H))
        : (H = t[25]);
      var G;
      t[26] !== H || t[27] !== q || t[28] !== U
        ? ((G = s.jsxs("div", { className: q, children: [U, H] })),
          (t[26] = H),
          (t[27] = q),
          (t[28] = U),
          (t[29] = G))
        : (G = t[29]);
      var z;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.trailingButtons,
          )),
          (t[30] = z))
        : (z = t[30]);
      var j;
      t[31] !== w
        ? ((j = s.jsx("div", { className: z, children: w })),
          (t[31] = w),
          (t[32] = j))
        : (j = t[32]);
      var K;
      return (
        t[33] !== G || t[34] !== j || t[35] !== O
          ? ((K = s.jsxs(
              "div",
              babelHelpers.extends({}, O, { className: B, children: [G, j] }),
            )),
            (t[33] = G),
            (t[34] = j),
            (t[35] = O),
            (t[36] = K))
          : (K = t[36]),
        K
      );
    }
    function m(e) {
      var t = e.node,
        n = o("WebBloksEnvironmentContext").useDataBloksName(),
        a = t.getExpression("on_click"),
        i = t.get("icon"),
        l = t.get("title"),
        u = t.get("accessibility_label"),
        c = t.get("badge_count"),
        d = o("WebBloksComponentContext").useWebBloksContext(),
        m = d.objectSet,
        _ = r("useClickablePropsForWebBloks")(t, a);
      if (_.onClick === void 0 || (!i && (l == null || l === ""))) return null;
      var f = p(m, i);
      return s.jsx(
        r("WebBloksAbstractButton"),
        babelHelpers.extends(
          { trailing: !0 },
          n(t.styleId),
          { icon: f, title: l, accessibility_label: u, badge_count: c },
          _,
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      if (!t) return null;
      switch (t) {
        case "nav-app-messenger":
          return e.getAsset("appMessenger");
        case "nav-navicon":
          return e.getAsset("navIcon");
        case "nav-shopping-cart":
          return e.getAsset("navShoppingCart");
        case "nav-info-circle":
          return e.getAsset("navInfoCircle");
        case "nav-magnifying-glass":
          return e.getAsset("magnifyingGlass");
      }
    }
    l.default = d;
  },
  98,
);
