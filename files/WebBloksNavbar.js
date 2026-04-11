__d(
  "WebBloksNavbar",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
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
      var t = o("react-compiler-runtime").c(32),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.executeCatch,
        l = a.isLoadingNode,
        u = a.objectSet,
        d = a.ownerContext,
        p = a.renderNode,
        _ = u.navigationManager,
        f;
      t[0] !== n ? ((f = n.getValues()), (t[0] = n), (t[1] = f)) : (f = t[1]);
      var g = f,
        h = g.contribs,
        y = g.hide_navbar,
        C = g.title,
        b;
      if (
        t[2] !== h ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== n ||
        t[6] !== u ||
        t[7] !== d ||
        t[8] !== p
      ) {
        e: {
          var v = [],
            S = null;
          if (h == null) {
            b = { titleBloksNode: null, trailingButtons: v };
            break e;
          }
          for (var R of h) {
            var L = R.getValues(),
              E = R.getExpression("custom_title_parseresult");
            if (E != null) {
              var k = void 0;
              l && d
                ? (k = d.executeCatch(E.getValue(), []))
                : (k = i(n, E, []));
              var I = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
                u,
                o("WebBloksUtils").cast(k),
                { isModal: !1, isEmbedded: !0 },
              );
              S = s.jsx(r("WebBloksScreenHost"), { screen: I });
            }
            if (L.trailing_buttons !== void 0)
              for (var T of L.trailing_buttons)
                v.push(s.jsx(m, { node: T }, T.clientId));
            if (L.right_buttons !== void 0)
              for (var D of L.right_buttons) v.push(p(D));
          }
          var x;
          (t[10] !== S || t[11] !== v
            ? ((x = { titleBloksNode: S, trailingButtons: v }),
              (t[10] = S),
              (t[11] = v),
              (t[12] = x))
            : (x = t[12]),
            (b = x));
        }
        ((t[2] = h),
          (t[3] = i),
          (t[4] = l),
          (t[5] = n),
          (t[6] = u),
          (t[7] = d),
          (t[8] = p),
          (t[9] = b));
      } else b = t[9];
      var $ = b,
        P = $.titleBloksNode,
        N = $.trailingButtons;
      if (y === !0) return null;
      var M = _.getScreenCount() > 1,
        w = M && N.length === 0,
        A = n.styleId,
        F;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.root,
          )),
          (t[13] = F))
        : (F = t[13]);
      var O = w ? c.titleContainerMargin : null,
        B;
      t[14] !== O
        ? ((B = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.titleContainer,
            O,
          )),
          (t[14] = O),
          (t[15] = B))
        : (B = t[15]);
      var W;
      t[16] !== _ || t[17] !== M
        ? ((W = M
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return _.pop();
                },
              })
            : null),
          (t[16] = _),
          (t[17] = M),
          (t[18] = W))
        : (W = t[18]);
      var q = P != null ? P : C,
        U;
      t[19] !== q
        ? ((U = s.jsx("div", { className: c.title, children: q })),
          (t[19] = q),
          (t[20] = U))
        : (U = t[20]);
      var V;
      t[21] !== B || t[22] !== W || t[23] !== U
        ? ((V = s.jsxs("div", { className: B, children: [W, U] })),
          (t[21] = B),
          (t[22] = W),
          (t[23] = U),
          (t[24] = V))
        : (V = t[24]);
      var H;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.trailingButtons,
          )),
          (t[25] = H))
        : (H = t[25]);
      var G;
      t[26] !== N
        ? ((G = s.jsx("div", { className: H, children: N })),
          (t[26] = N),
          (t[27] = G))
        : (G = t[27]);
      var z;
      return (
        t[28] !== n.styleId || t[29] !== V || t[30] !== G
          ? ((z = s.jsxs("div", {
              "data-bloks-name": A,
              className: F,
              children: [V, G],
            })),
            (t[28] = n.styleId),
            (t[29] = V),
            (t[30] = G),
            (t[31] = z))
          : (z = t[31]),
        z
      );
    }
    function m(e) {
      var t = e.node,
        n = t.getExpression("on_click"),
        a = t.get("icon"),
        i = t.get("title"),
        l = t.get("accessibility_label"),
        u = t.get("badge_count"),
        c = o("WebBloksComponentContext").useWebBloksContext(),
        d = c.objectSet,
        m = r("useClickablePropsForWebBloks")(t, n);
      if (m.onClick === void 0 || (!a && (i == null || i === ""))) return null;
      var _ = p(d, a);
      return s.jsx(
        r("WebBloksAbstractButton"),
        babelHelpers.extends(
          {
            trailing: !0,
            "data-bloks-name": t.styleId,
            icon: _,
            title: i,
            accessibility_label: l,
            badge_count: u,
          },
          m,
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
      }
    }
    l.default = d;
  },
  98,
);
