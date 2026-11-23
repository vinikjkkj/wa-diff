__d(
  "WebBloksNavbar",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksNavbarBackButton",
    "WebBloksScreen",
    "WebBloksScreenHost",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = o("WebBloksModel").defineWebBloksAttributeKey("("),
      d = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      p = "bk.data.contrib.screen.navbar.Fb",
      _ = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      f = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      g = "bk.data.contrib.screen.navbar.Fblite",
      h = o("WebBloksModel").defineWebBloksAttributeKey("("),
      y = "bk.data.contrib.screen.navbar.Ig",
      C = o("WebBloksModel").defineWebBloksAttributeKey("3"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      v = "bk.data.screen.navbar.contrib.Msg",
      S = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      R = "bk.data.screen.navbar.contrib.Phoenix",
      L = o("WebBloksModel").defineWebBloksAttributeKey(","),
      E = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      I = o("WebBloksModel").defineWebBloksAttributeKey("("),
      T = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      D = o("WebBloksModel").defineWebBloksAttributeKey(","),
      x = "bk.data.phoenix.screen.navbar.TrailingButton",
      $ = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      P = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      N = o("WebBloksStyle").createStyles({
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
    function M(e) {
      switch (e.styleId) {
        case p:
        case "bk.data.contrib.screen.navbar.Fb": {
          var t = o("WebBloksUtils").cast(e);
          return {
            custom_title_parseresult: t.getExpression(_),
            right_buttons: void 0,
            trailing_buttons: t.get(f),
          };
        }
        case g:
        case "bk.data.contrib.screen.navbar.Fblite": {
          var n = o("WebBloksUtils").cast(e);
          return {
            custom_title_parseresult: void 0,
            right_buttons: void 0,
            trailing_buttons: n.get(h),
          };
        }
        case y:
        case "bk.data.contrib.screen.navbar.Ig": {
          var r = o("WebBloksUtils").cast(e);
          return {
            custom_title_parseresult: r.getExpression(C),
            right_buttons: r.get(b),
            trailing_buttons: void 0,
          };
        }
        case v:
        case "bk.data.screen.navbar.contrib.Msg": {
          var a = o("WebBloksUtils").cast(e);
          return {
            custom_title_parseresult: void 0,
            right_buttons: a.get(S),
            trailing_buttons: void 0,
          };
        }
        case R:
        case "bk.data.screen.navbar.contrib.Phoenix": {
          var i = o("WebBloksUtils").cast(e);
          return {
            custom_title_parseresult: void 0,
            right_buttons: void 0,
            trailing_buttons: i.get(L),
          };
        }
        default:
          return {
            custom_title_parseresult: void 0,
            right_buttons: void 0,
            trailing_buttons: void 0,
          };
      }
    }
    function w(e) {
      var t = e.node,
        n = o("WebBloksComponentContext").useWebBloksContext(),
        a = n.executeCatch,
        i = n.isLoadingNode,
        l = n.objectSet,
        p = n.ownerContext,
        _ = n.renderNode,
        f = o("WebBloksEnvironmentContext").useDataBloksName(),
        g = l.navigationManager,
        h = t.get(c),
        y = t.get(d),
        C = t.get(m),
        b = u(
          function () {
            var e = [],
              n = null;
            if (h == null) return { titleBloksNode: n, trailingButtons: e };
            for (var u of h) {
              var c = M(u),
                d = c.custom_title_parseresult,
                m = c.right_buttons,
                f = c.trailing_buttons;
              if (d != null) {
                var g = void 0;
                i && p
                  ? (g = p.executeCatch(d.getValue(), []))
                  : (g = a(t, d, []));
                var y = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
                  l,
                  o("WebBloksUtils").cast(g),
                  { isModal: !1, isEmbedded: !0 },
                );
                n = s.jsx(r("WebBloksScreenHost"), { screen: y });
              }
              if (f !== void 0)
                for (var C of f) e.push(s.jsx(A, { node: C }, C.clientId));
              if (m !== void 0) for (var b of m) e.push(_(b));
            }
            return { titleBloksNode: n, trailingButtons: e };
          },
          [h, a, i, t, l, p, _],
        ),
        v = b.titleBloksNode,
        S = b.trailingButtons;
      if (y === !0) return null;
      var R = g.getScreenCount() > 1,
        L = R && S.length === 0;
      return s.jsxs(
        "div",
        babelHelpers.extends({}, f(t.styleId), {
          className: o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            N.root,
          ),
          children: [
            s.jsxs("div", {
              className: o("WebBloksStyle").classNames(
                o("WebBloksStyle").WebBloksStyles.container,
                N.titleContainer,
                L ? N.titleContainerMargin : null,
              ),
              children: [
                R
                  ? s.jsx(r("WebBloksNavbarBackButton"), {
                      onClick: function () {
                        return g.pop();
                      },
                    })
                  : null,
                s.jsx("div", {
                  className: N.title,
                  children: v != null ? v : C,
                }),
              ],
            }),
            s.jsx("div", {
              className: o("WebBloksStyle").classNames(
                o("WebBloksStyle").WebBloksStyles.container,
                N.trailingButtons,
              ),
              children: S,
            }),
          ],
        }),
      );
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      var t = e.node,
        n = o("WebBloksEnvironmentContext").useDataBloksName(),
        a = F(t),
        i = a.accessibility_label,
        l = a.badge_count,
        u = a.icon,
        c = a.on_click,
        d = a.title,
        m = o("WebBloksComponentContext").useWebBloksContext(),
        p = m.objectSet,
        _ = r("useClickablePropsForWebBloks")(t, c);
      if (_.onClick === void 0 || (!u && (d == null || d === ""))) return null;
      var f = O(p, u);
      return s.jsx(
        r("WebBloksAbstractButton"),
        babelHelpers.extends(
          { trailing: !0 },
          n(t.styleId),
          { icon: f, title: d, accessibility_label: i, badge_count: l },
          _,
        ),
      );
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      switch (e.styleId) {
        case x:
        case "bk.data.phoenix.screen.navbar.TrailingButton": {
          var t = o("WebBloksUtils").cast(e);
          return {
            accessibility_label: void 0,
            badge_count: void 0,
            icon: t.get(P),
            on_click: t.getExpression($),
            title: void 0,
          };
        }
        default: {
          var n = o("WebBloksUtils").cast(e);
          return {
            accessibility_label: n.get(T),
            badge_count: n.get(D),
            icon: n.get(k),
            on_click: n.getExpression(E),
            title: n.get(I),
          };
        }
      }
    }
    function O(e, t) {
      if (t == null || t === "") return null;
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
    l.default = w;
  },
  98,
);
