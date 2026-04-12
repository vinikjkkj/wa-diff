__d(
  "WAWebBizAdCreationBudgetInput.react",
  [
    "fbt",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationBudgetReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState,
      g = 24,
      h = 8;
    function y(e, t) {
      if (t == null) return g;
      var n = document.createElement("canvas"),
        r = n.getContext("2d");
      if (r == null) return g;
      var o = window.getComputedStyle(t),
        a = o.fontWeight,
        i = o.fontSize,
        l = o.fontFamily,
        s = a + " " + i + " " + l;
      r.font = s;
      var u = r.measureText(e);
      return Math.ceil(u.width);
    }
    var C = {
      viewModeContainer: {
        borderTopWidth: "x178xt8z",
        borderInlineEndWidth: "x1lun4ml",
        borderBottomWidth: "xso031l",
        borderInlineStartWidth: "xpilrb4",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopColor: "x1v8p93f",
        borderInlineEndColor: "x1o3jo1z",
        borderBottomColor: "x16stqrj",
        borderInlineStartColor: "xv5lvn5",
        borderStartStartRadius: "xyi3aci",
        borderStartEndRadius: "xwf5gio",
        borderEndEndRadius: "x1p453bz",
        borderEndStartRadius: "x1suzm8a",
        cursor: "x1ed109x",
        paddingTop: "x1tiyuxx",
        paddingInlineEnd: "x1uc92m",
        paddingBottom: "x1nbhmlj",
        paddingInlineStart: "x181vq82",
        transition: "x9v64kc",
        ":hover_borderTopColor": "x1j88qlk",
        ":hover_borderInlineEndColor": "xmly02p",
        ":hover_borderBottomColor": "x36lclb",
        ":hover_borderInlineStartColor": "xzyl2ln",
        ":hover_backgroundColor": "x1ubxc9n",
        $$css: !0,
      },
      editModeContainer: {
        borderTopWidth: "xamhcws",
        borderInlineEndWidth: "x1alpsbp",
        borderBottomWidth: "xlxy82",
        borderInlineStartWidth: "xyumdvf",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopColor: "xlze6vy",
        borderInlineEndColor: "x47fsot",
        borderBottomColor: "x1rrvw3c",
        borderInlineStartColor: "x18djku1",
        borderStartStartRadius: "xyi3aci",
        borderStartEndRadius: "xwf5gio",
        borderEndEndRadius: "x1p453bz",
        borderEndStartRadius: "x1suzm8a",
        backgroundColor: "x1280gxy",
        paddingTop: "x1tiyuxx",
        paddingInlineEnd: "x1uc92m",
        paddingBottom: "x1nbhmlj",
        paddingInlineStart: "x181vq82",
        $$css: !0,
      },
    };
    function b(e) {
      var t = e.displayBudget,
        n = e.hasError,
        a = n === void 0 ? !1 : n,
        i = e.setLocalBudget,
        l = e.adAccountID,
        c = e.currency,
        b = e.defaultBudget,
        v = e.selectedBudget,
        S = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationBudgetReducer"),
        ]),
        R = f(!1),
        L = R[0],
        E = R[1],
        k = f(""),
        I = k[0],
        T = k[1],
        D = _(null),
        x = m(r("WAWebBizAdCreationLoggerContext")),
        $ = _(null),
        P = r("WAWebBizAdCreationCurrencyUtils").getCurrencySymbol(c),
        N = f(g),
        M = N[0],
        w = N[1];
      p(
        function () {
          var e = y(I || "0", D.current);
          w(Math.max(e + h, g));
        },
        [I],
      );
      var A = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(t, c, {
          withDecimals: !1,
          withSymbol: !0,
          withNumberDelimiters: !0,
        }),
        F = d(
          function (e) {
            S({
              budgetData: { budget: e },
              type: "budget_reducer.update_budget",
            });
          },
          [S],
        ),
        O = d(
          function () {
            (T(
              r("WAWebBizAdCreationCurrencyUtils").formatCurrencyForInput(v, c),
            ),
              E(!0));
          },
          [v, c],
        );
      p(
        function () {
          if (L && D.current != null) {
            var e = D.current;
            (e.focus(), e.select());
          }
        },
        [L],
      );
      var B = d(
          function () {
            var e,
              t = r("WAWebBizAdCreationCurrencyUtils").parseCurrencyInput(I, c);
            if (t == null) {
              E(!1);
              return;
            }
            var n = t,
              o = (e = $.current) != null ? e : v;
            (n !== o &&
              x != null &&
              r("WAWebBizAdLogger").log({
                event: "change_budget",
                loggerContext: x,
                adAccountID: l,
                budget: n,
                budgetType: "DAILY_BUDGET",
                currency: c,
                defaultBudget: b,
                extra: { old_budget: o, input_type: "manual_input" },
              }),
              ($.current = n),
              i(n),
              F(n),
              E(!1));
          },
          [I, c, v, x, i, F, l, b],
        ),
        W = d(function () {
          E(!1);
        }, []),
        q = d(
          function () {
            B();
          },
          [B],
        ),
        U = d(
          function (e) {
            e.key === "Enter" ? B() : e.key === "Escape" && W();
          },
          [B, W],
        ),
        V = d(function (e) {
          T(e.target.value);
        }, []);
      return L
        ? u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            columnGap: 0,
            xstyle: C.editModeContainer,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "LargeTitle1",
                colorName: a ? "secondaryNegative" : "contentDefault",
                children: P,
              }),
              u.jsx(
                "input",
                babelHelpers.extends(
                  {
                    ref: D,
                    type: "text",
                    inputMode: "numeric",
                    value: I,
                    onChange: V,
                    onBlur: q,
                    onKeyDown: U,
                    "aria-label": s._(/*BTDS*/ "Budget amount"),
                    style: { width: M },
                  },
                  {
                    0: {
                      className:
                        "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x14ug900 x579bpy x1fcty0u x2b8uid x1a2a7pz xnei2rj xexx8yu xyri2b x18d9i69 x1c1uobl",
                    },
                    1: {
                      className:
                        "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x579bpy x1fcty0u x2b8uid x1a2a7pz xnei2rj xexx8yu xyri2b x18d9i69 x1c1uobl x30a034",
                    },
                  }[!!a << 0],
                ),
              ),
            ],
          })
        : u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: O,
            xstyle: C.viewModeContainer,
            "aria-label": s._(/*BTDS*/ "Edit budget amount"),
            children: u.jsx(r("WDSText.react"), {
              type: "LargeTitle1",
              colorName: a ? "secondaryNegative" : "contentDefault",
              children: A,
            }),
          });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = r("withWAWebBizAdCreationSpecContext")(b, function (e) {
      var t;
      return {
        adAccountID: (t = e.adAccountData) == null ? void 0 : t.legacyAccountID,
        currency: e.adAccountData.currency,
        defaultBudget: e.budgetData.defaultBudget,
        selectedBudget: e.budgetData.budget,
      };
    });
    l.default = v;
  },
  226,
);
