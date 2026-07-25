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
      var t = o("react-compiler-runtime").c(35),
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
      t[0] !== n ? ((g = n.getValues()), (t[0] = n), (t[1] = g)) : (g = t[1]);
      var h = g,
        y = h.contribs,
        C = h.hide_navbar,
        b = h.title,
        v;
      if (
        t[2] !== y ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== n ||
        t[6] !== u ||
        t[7] !== d ||
        t[8] !== p
      ) {
        e: {
          var S = [],
            R = null;
          if (y == null) {
            v = { titleBloksNode: null, trailingButtons: S };
            break e;
          }
          for (var L of y) {
            var E = L.getValues(),
              k = L.getExpression("custom_title_parseresult");
            if (k != null) {
              var I = void 0;
              l && d
                ? (I = d.executeCatch(k.getValue(), []))
                : (I = i(n, k, []));
              var T = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
                u,
                o("WebBloksUtils").cast(I),
                { isModal: !1, isEmbedded: !0 },
              );
              R = s.jsx(r("WebBloksScreenHost"), { screen: T });
            }
            if (E.trailing_buttons !== void 0)
              for (var D of E.trailing_buttons)
                S.push(s.jsx(m, { node: D }, D.clientId));
            if (E.right_buttons !== void 0)
              for (var x of E.right_buttons) S.push(p(x));
          }
          var $;
          (t[10] !== R || t[11] !== S
            ? (($ = { titleBloksNode: R, trailingButtons: S }),
              (t[10] = R),
              (t[11] = S),
              (t[12] = $))
            : ($ = t[12]),
            (v = $));
        }
        ((t[2] = y),
          (t[3] = i),
          (t[4] = l),
          (t[5] = n),
          (t[6] = u),
          (t[7] = d),
          (t[8] = p),
          (t[9] = v));
      } else v = t[9];
      var P = v,
        N = P.titleBloksNode,
        M = P.trailingButtons;
      if (C === !0) return null;
      var w = f.getScreenCount() > 1,
        A = w && M.length === 0,
        F;
      t[13] !== _ || t[14] !== n.styleId
        ? ((F = _(n.styleId)), (t[13] = _), (t[14] = n.styleId), (t[15] = F))
        : (F = t[15]);
      var O;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.root,
          )),
          (t[16] = O))
        : (O = t[16]);
      var B = A ? c.titleContainerMargin : null,
        W;
      t[17] !== B
        ? ((W = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.titleContainer,
            B,
          )),
          (t[17] = B),
          (t[18] = W))
        : (W = t[18]);
      var q;
      t[19] !== f || t[20] !== w
        ? ((q = w
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return f.pop();
                },
              })
            : null),
          (t[19] = f),
          (t[20] = w),
          (t[21] = q))
        : (q = t[21]);
      var U = N != null ? N : b,
        V;
      t[22] !== U
        ? ((V = s.jsx("div", { className: c.title, children: U })),
          (t[22] = U),
          (t[23] = V))
        : (V = t[23]);
      var H;
      t[24] !== W || t[25] !== q || t[26] !== V
        ? ((H = s.jsxs("div", { className: W, children: [q, V] })),
          (t[24] = W),
          (t[25] = q),
          (t[26] = V),
          (t[27] = H))
        : (H = t[27]);
      var G;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            c.trailingButtons,
          )),
          (t[28] = G))
        : (G = t[28]);
      var z;
      t[29] !== M
        ? ((z = s.jsx("div", { className: G, children: M })),
          (t[29] = M),
          (t[30] = z))
        : (z = t[30]);
      var j;
      return (
        t[31] !== H || t[32] !== z || t[33] !== F
          ? ((j = s.jsxs(
              "div",
              babelHelpers.extends({}, F, { className: O, children: [H, z] }),
            )),
            (t[31] = H),
            (t[32] = z),
            (t[33] = F),
            (t[34] = j))
          : (j = t[34]),
        j
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
      }
    }
    l.default = d;
  },
  98,
);
