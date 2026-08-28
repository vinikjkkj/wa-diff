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
      c = "(",
      d = "#",
      m = "$",
      p = "\u3628",
      _ = "-",
      f = ")",
      g = "\u3F68",
      h = "(",
      y = "\u3642",
      C = "3",
      b = "+",
      v = "\u360F",
      S = "*",
      R = "\u3F46",
      L = ",",
      E = "&",
      k = "$",
      I = "(",
      T = ")",
      D = ",",
      x = "\u3F4D",
      $ = "&",
      P = "#",
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
      var t = o("react-compiler-runtime").c(37),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.executeCatch,
        l = a.isLoadingNode,
        u = a.objectSet,
        p = a.ownerContext,
        _ = a.renderNode,
        f = o("WebBloksEnvironmentContext").useDataBloksName(),
        g = u.navigationManager,
        h;
      t[0] !== n ? ((h = n.get(c)), (t[0] = n), (t[1] = h)) : (h = t[1]);
      var y = h,
        C = n.get(d),
        b;
      t[2] !== n ? ((b = n.get(m)), (t[2] = n), (t[3] = b)) : (b = t[3]);
      var v = b,
        S;
      if (
        t[4] !== y ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== n ||
        t[8] !== u ||
        t[9] !== p ||
        t[10] !== _
      ) {
        e: {
          var R = [],
            L = null;
          if (y == null) {
            S = { titleBloksNode: null, trailingButtons: R };
            break e;
          }
          for (var E of y) {
            var k = M(E),
              I = k.custom_title_parseresult,
              T = k.right_buttons,
              D = k.trailing_buttons;
            if (I != null) {
              var x = void 0;
              l && p
                ? (x = p.executeCatch(I.getValue(), []))
                : (x = i(n, I, []));
              var $ = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
                u,
                o("WebBloksUtils").cast(x),
                { isModal: !1, isEmbedded: !0 },
              );
              L = s.jsx(r("WebBloksScreenHost"), { screen: $ });
            }
            if (D !== void 0)
              for (var P of D) R.push(s.jsx(A, { node: P }, P.clientId));
            if (T !== void 0) for (var w of T) R.push(_(w));
          }
          var F;
          (t[12] !== L || t[13] !== R
            ? ((F = { titleBloksNode: L, trailingButtons: R }),
              (t[12] = L),
              (t[13] = R),
              (t[14] = F))
            : (F = t[14]),
            (S = F));
        }
        ((t[4] = y),
          (t[5] = i),
          (t[6] = l),
          (t[7] = n),
          (t[8] = u),
          (t[9] = p),
          (t[10] = _),
          (t[11] = S));
      } else S = t[11];
      var O = S,
        B = O.titleBloksNode,
        W = O.trailingButtons;
      if (C === !0) return null;
      var q = g.getScreenCount() > 1,
        U = q && W.length === 0,
        V;
      t[15] !== f || t[16] !== n.styleId
        ? ((V = f(n.styleId)), (t[15] = f), (t[16] = n.styleId), (t[17] = V))
        : (V = t[17]);
      var H;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            N.root,
          )),
          (t[18] = H))
        : (H = t[18]);
      var G = U ? N.titleContainerMargin : null,
        z;
      t[19] !== G
        ? ((z = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            N.titleContainer,
            G,
          )),
          (t[19] = G),
          (t[20] = z))
        : (z = t[20]);
      var j;
      t[21] !== g || t[22] !== q
        ? ((j = q
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return g.pop();
                },
              })
            : null),
          (t[21] = g),
          (t[22] = q),
          (t[23] = j))
        : (j = t[23]);
      var K = B != null ? B : v,
        Q;
      t[24] !== K
        ? ((Q = s.jsx("div", { className: N.title, children: K })),
          (t[24] = K),
          (t[25] = Q))
        : (Q = t[25]);
      var X;
      t[26] !== Q || t[27] !== z || t[28] !== j
        ? ((X = s.jsxs("div", { className: z, children: [j, Q] })),
          (t[26] = Q),
          (t[27] = z),
          (t[28] = j),
          (t[29] = X))
        : (X = t[29]);
      var Y;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            N.trailingButtons,
          )),
          (t[30] = Y))
        : (Y = t[30]);
      var J;
      t[31] !== W
        ? ((J = s.jsx("div", { className: Y, children: W })),
          (t[31] = W),
          (t[32] = J))
        : (J = t[32]);
      var Z;
      return (
        t[33] !== X || t[34] !== J || t[35] !== V
          ? ((Z = s.jsxs(
              "div",
              babelHelpers.extends({}, V, { className: H, children: [X, J] }),
            )),
            (t[33] = X),
            (t[34] = J),
            (t[35] = V),
            (t[36] = Z))
          : (Z = t[36]),
        Z
      );
    }
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
    l.default = w;
  },
  98,
);
