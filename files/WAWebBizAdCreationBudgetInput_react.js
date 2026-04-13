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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(56),
        n = e.displayBudget,
        a = e.hasError,
        i = e.setLocalBudget,
        l = e.adAccountID,
        c = e.currency,
        d = e.defaultBudget,
        b = e.selectedBudget,
        v = a === void 0 ? !1 : a,
        S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [r("waWebBizAdCreationBudgetReducer")]), (t[0] = S))
        : (S = t[0]);
      var R = r("useWAWebBizAdCreationSpecDispatcherContext")(S),
        L = f(!1),
        E = L[0],
        k = L[1],
        I = f(""),
        T = I[0],
        D = I[1],
        x = _(null),
        $ = m(r("WAWebBizAdCreationLoggerContext")),
        P = _(null),
        N;
      t[1] !== c
        ? ((N = r("WAWebBizAdCreationCurrencyUtils").getCurrencySymbol(c)),
          (t[1] = c),
          (t[2] = N))
        : (N = t[2]);
      var M = N,
        w = f(g),
        A = w[0],
        F = w[1],
        O,
        B;
      (t[3] !== T
        ? ((O = function () {
            var e = y(T || "0", x.current);
            F(Math.max(e + h, g));
          }),
          (B = [T]),
          (t[3] = T),
          (t[4] = O),
          (t[5] = B))
        : ((O = t[4]), (B = t[5])),
        p(O, B));
      var W;
      t[6] !== c || t[7] !== n
        ? ((W = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(n, c, {
            withDecimals: !1,
            withSymbol: !0,
            withNumberDelimiters: !0,
          })),
          (t[6] = c),
          (t[7] = n),
          (t[8] = W))
        : (W = t[8]);
      var q = W,
        U;
      t[9] !== R
        ? ((U = function (t) {
            R({
              budgetData: { budget: t },
              type: "budget_reducer.update_budget",
            });
          }),
          (t[9] = R),
          (t[10] = U))
        : (U = t[10]);
      var V = U,
        H;
      t[11] !== c || t[12] !== b
        ? ((H = function () {
            (D(
              r("WAWebBizAdCreationCurrencyUtils").formatCurrencyForInput(b, c),
            ),
              k(!0));
          }),
          (t[11] = c),
          (t[12] = b),
          (t[13] = H))
        : (H = t[13]);
      var G = H,
        z,
        j;
      (t[14] !== E
        ? ((j = function () {
            if (E && x.current != null) {
              var e = x.current;
              (e.focus(), e.select());
            }
          }),
          (z = [E]),
          (t[14] = E),
          (t[15] = z),
          (t[16] = j))
        : ((z = t[15]), (j = t[16])),
        p(j, z));
      var K;
      t[17] !== l ||
      t[18] !== c ||
      t[19] !== d ||
      t[20] !== T ||
      t[21] !== $ ||
      t[22] !== V ||
      t[23] !== b ||
      t[24] !== i
        ? ((K = function () {
            var e,
              t = r("WAWebBizAdCreationCurrencyUtils").parseCurrencyInput(T, c);
            if (t == null) {
              k(!1);
              return;
            }
            var n = t,
              o = (e = P.current) != null ? e : b;
            (n !== o &&
              $ != null &&
              r("WAWebBizAdLogger").log({
                event: "change_budget",
                loggerContext: $,
                adAccountID: l,
                budget: n,
                budgetType: "DAILY_BUDGET",
                currency: c,
                defaultBudget: d,
                extra: { old_budget: o, input_type: "manual_input" },
              }),
              (P.current = n),
              i(n),
              V(n),
              k(!1));
          }),
          (t[17] = l),
          (t[18] = c),
          (t[19] = d),
          (t[20] = T),
          (t[21] = $),
          (t[22] = V),
          (t[23] = b),
          (t[24] = i),
          (t[25] = K))
        : (K = t[25]);
      var Q = K,
        X;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function () {
            k(!1);
          }),
          (t[26] = X))
        : (X = t[26]);
      var Y = X,
        J;
      t[27] !== Q
        ? ((J = function () {
            Q();
          }),
          (t[27] = Q),
          (t[28] = J))
        : (J = t[28]);
      var Z = J,
        ee;
      t[29] !== Q
        ? ((ee = function (t) {
            t.key === "Enter" ? Q() : t.key === "Escape" && Y();
          }),
          (t[29] = Q),
          (t[30] = ee))
        : (ee = t[30]);
      var te = ee,
        ne;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = function (t) {
            D(t.target.value);
          }),
          (t[31] = ne))
        : (ne = t[31]);
      var re = ne;
      if (E) {
        var oe = v ? "secondaryNegative" : "contentDefault",
          ae;
        t[32] !== M || t[33] !== oe
          ? ((ae = u.jsx(r("WDSText.react"), {
              type: "LargeTitle1",
              colorName: oe,
              children: M,
            })),
            (t[32] = M),
            (t[33] = oe),
            (t[34] = ae))
          : (ae = t[34]);
        var ie;
        t[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((ie = s._(/*BTDS*/ "Budget amount")), (t[35] = ie))
          : (ie = t[35]);
        var le;
        t[36] !== A
          ? ((le = { width: A }), (t[36] = A), (t[37] = le))
          : (le = t[37]);
        var se;
        t[38] !== v
          ? ((se = {
              0: {
                className:
                  "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x14ug900 x579bpy x1fcty0u x2b8uid x1a2a7pz xnei2rj xexx8yu xyri2b x18d9i69 x1c1uobl",
              },
              1: {
                className:
                  "xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x579bpy x1fcty0u x2b8uid x1a2a7pz xnei2rj xexx8yu xyri2b x18d9i69 x1c1uobl x30a034",
              },
            }[!!v << 0]),
            (t[38] = v),
            (t[39] = se))
          : (se = t[39]);
        var ue;
        t[40] !== Z ||
        t[41] !== te ||
        t[42] !== T ||
        t[43] !== le ||
        t[44] !== se
          ? ((ue = u.jsx(
              "input",
              babelHelpers.extends(
                {
                  ref: x,
                  type: "text",
                  inputMode: "numeric",
                  value: T,
                  onChange: re,
                  onBlur: Z,
                  onKeyDown: te,
                  "aria-label": ie,
                  style: le,
                },
                se,
              ),
            )),
            (t[40] = Z),
            (t[41] = te),
            (t[42] = T),
            (t[43] = le),
            (t[44] = se),
            (t[45] = ue))
          : (ue = t[45]);
        var ce;
        return (
          t[46] !== ae || t[47] !== ue
            ? ((ce = u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                columnGap: 0,
                xstyle: C.editModeContainer,
                children: [ae, ue],
              })),
              (t[46] = ae),
              (t[47] = ue),
              (t[48] = ce))
            : (ce = t[48]),
          ce
        );
      }
      var de;
      t[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = s._(/*BTDS*/ "Edit budget amount")), (t[49] = de))
        : (de = t[49]);
      var me = v ? "secondaryNegative" : "contentDefault",
        pe;
      t[50] !== q || t[51] !== me
        ? ((pe = u.jsx(r("WDSText.react"), {
            type: "LargeTitle1",
            colorName: me,
            children: q,
          })),
          (t[50] = q),
          (t[51] = me),
          (t[52] = pe))
        : (pe = t[52]);
      var _e;
      return (
        t[53] !== G || t[54] !== pe
          ? ((_e = u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: G,
              xstyle: C.viewModeContainer,
              "aria-label": de,
              children: pe,
            })),
            (t[53] = G),
            (t[54] = pe),
            (t[55] = _e))
          : (_e = t[55]),
        _e
      );
    }
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
