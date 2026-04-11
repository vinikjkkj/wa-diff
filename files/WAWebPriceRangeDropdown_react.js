__d(
  "WAWebPriceRangeDropdown.react",
  [
    "fbt",
    "WAWebBusinessProfileTextField.react",
    "WAWebFlex.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcSell.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebOnOutsideClick",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f =
        "calc(" +
        o("WDSVars.stylex").WDSVars.spacingTriple +
        " + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        " * 2 + 12px + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        ")",
      g = {
        menuContainer: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          boxShadow: "x1sr759z",
          color: "x14ug900",
          insetInlineStart: "xxb5yu8",
          left: null,
          right: null,
          marginTop: "x1wgys3m",
          maxHeight: "xuyqlj2",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          position: "x10l6tqk",
          top: "xdsb8wn",
          width: "x116kdbm",
          zIndex: "xfo81ep",
          $$css: !0,
        },
      },
      h = [
        {
          label: function () {
            return s._(/*BTDS*/ "No price range displayed");
          },
          value: "0",
        },
        {
          label: function () {
            return "$";
          },
          value: "1",
        },
        {
          label: function () {
            return "$$";
          },
          value: "2",
        },
        {
          label: function () {
            return "$$$";
          },
          value: "3",
        },
        {
          label: function () {
            return "$$$$";
          },
          value: "4",
        },
      ];
    function y(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.dynamicOptions,
        a = e.fieldName,
        i = e.label,
        l = e.onChange,
        s = e.onOpen,
        c = e.value,
        d = a === void 0 ? "priceTier" : a,
        m = p(null),
        f = _(!1),
        y = f[0],
        b = f[1],
        v;
      e: {
        if (n != null && n.length > 0) {
          var S;
          (t[0] !== n
            ? ((S = [h[0]].concat(n.map(C))), (t[0] = n), (t[1] = S))
            : (S = t[1]),
            (v = S));
          break e;
        }
        v = h;
      }
      var R = v,
        L;
      if (t[2] !== R || t[3] !== c) {
        var E;
        t[5] !== c
          ? ((E = function (t) {
              return t.value === c;
            }),
            (t[5] = c),
            (t[6] = E))
          : (E = t[6]);
        var k = R.find(E),
          I = k != null ? k.subtitle : null;
        if (k == null) {
          var T;
          (t[7] !== R[0]
            ? ((T = R[0].label()), (t[7] = R[0]), (t[8] = T))
            : (T = t[8]),
            (L = T));
        } else
          I != null
            ? (L = String(k.label()) + " (" + I() + ")")
            : (L = k.label());
        ((t[2] = R), (t[3] = c), (t[4] = L));
      } else L = t[4];
      var D;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            b(!1);
          }),
          (t[9] = D))
        : (D = t[9]);
      var x = D;
      o("useWAWebOnOutsideClick").useOnOutsideClick(m, x);
      var $;
      t[10] !== d || t[11] !== l
        ? (($ = function (t) {
            (l != null && l(d, t), b(!1));
          }),
          (t[10] = d),
          (t[11] = l),
          (t[12] = $))
        : ($ = t[12]);
      var P = $,
        N;
      t[13] !== s
        ? ((N = function () {
            b(function (e) {
              return (e || s == null || s(), !e);
            });
          }),
          (t[13] = s),
          (t[14] = N))
        : (N = t[14]);
      var M = N,
        w;
      t[15] !== M
        ? ((w = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), M());
          }),
          (t[15] = M),
          (t[16] = w))
        : (w = t[16]);
      var A = w,
        F;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { className: "x1ypdohk x1n2onr6 xh8yej3" }), (t[17] = F))
        : (F = t[17]);
      var O;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = u.jsx(r("WDSIconIcSell.react"), {})), (t[18] = O))
        : (O = t[18]);
      var B = String(L),
        W;
      t[19] !== d || t[20] !== i || t[21] !== B
        ? ((W = u.jsx(r("WAWebBusinessProfileTextField.react"), {
            EndIcon: r("WDSIconIcArrowDropDown.react"),
            editable: !0,
            fieldName: d,
            icon: O,
            label: i,
            readOnly: !0,
            value: B,
          })),
          (t[19] = d),
          (t[20] = i),
          (t[21] = B),
          (t[22] = W))
        : (W = t[22]);
      var q;
      t[23] !== P || t[24] !== y || t[25] !== R || t[26] !== c
        ? ((q =
            y &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: g.menuContainer,
              children: u.jsx(r("WDSMenu.react"), {
                useMaxWidth: !1,
                children: R.map(function (e) {
                  return u.jsx(
                    r("WDSMenuItem.react"),
                    {
                      isToggleable: !0,
                      onPress: function () {
                        return P(e.value);
                      },
                      subtitle: e.subtitle != null ? e.subtitle() : void 0,
                      title: e.label(),
                      toggled: e.value === c,
                    },
                    e.value,
                  );
                }),
              }),
            })),
          (t[23] = P),
          (t[24] = y),
          (t[25] = R),
          (t[26] = c),
          (t[27] = q))
        : (q = t[27]);
      var U;
      return (
        t[28] !== M || t[29] !== A || t[30] !== W || t[31] !== q
          ? ((U = u.jsxs(
              "div",
              babelHelpers.extends({}, F, {
                onClick: M,
                onKeyDown: A,
                ref: m,
                role: "button",
                tabIndex: 0,
                children: [W, q],
              }),
            )),
            (t[28] = M),
            (t[29] = A),
            (t[30] = W),
            (t[31] = q),
            (t[32] = U))
          : (U = t[32]),
        U
      );
    }
    function C(e) {
      return {
        label: function () {
          return e.description !== "" ? e.description : e.symbol;
        },
        subtitle:
          e.description !== ""
            ? function () {
                return e.symbol;
              }
            : void 0,
        value: e.id,
      };
    }
    l.default = y;
  },
  226,
);
