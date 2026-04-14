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
      var t = e.dynamicOptions,
        n = e.fieldName,
        a = n === void 0 ? "priceTier" : n,
        i = e.label,
        l = e.onChange,
        s = e.onOpen,
        c = e.value,
        f = p(null),
        y = _(!1),
        C = y[0],
        b = y[1],
        v = m(
          function () {
            return t != null && t.length > 0
              ? [h[0]].concat(
                  t.map(function (e) {
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
                  }),
                )
              : h;
          },
          [t],
        ),
        S = v.find(function (e) {
          return e.value === c;
        }),
        R = S != null ? S.subtitle : null,
        L;
      S == null
        ? (L = v[0].label())
        : R != null
          ? (L = String(S.label()) + " (" + R() + ")")
          : (L = S.label());
      var E = d(function () {
        b(!1);
      }, []);
      o("useWAWebOnOutsideClick").useOnOutsideClick(f, E);
      var k = d(
          function (e) {
            (l != null && l(a, e), b(!1));
          },
          [a, l],
        ),
        I = d(
          function () {
            b(function (e) {
              return (e || s == null || s(), !e);
            });
          },
          [s],
        ),
        T = d(
          function (e) {
            (e.key === "Enter" || e.key === " ") && (e.preventDefault(), I());
          },
          [I],
        );
      return u.jsxs("div", {
        className: "x1ypdohk x1n2onr6 xh8yej3",
        onClick: I,
        onKeyDown: T,
        ref: f,
        role: "button",
        tabIndex: 0,
        children: [
          u.jsx(r("WAWebBusinessProfileTextField.react"), {
            EndIcon: r("WDSIconIcArrowDropDown.react"),
            editable: !0,
            fieldName: a,
            icon: u.jsx(r("WDSIconIcSell.react"), {}),
            label: i,
            readOnly: !0,
            value: String(L),
          }),
          C &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: g.menuContainer,
              children: u.jsx(r("WDSMenu.react"), {
                useMaxWidth: !1,
                children: v.map(function (e) {
                  return u.jsx(
                    r("WDSMenuItem.react"),
                    {
                      isToggleable: !0,
                      onPress: function () {
                        return k(e.value);
                      },
                      subtitle: e.subtitle != null ? e.subtitle() : void 0,
                      title: e.label(),
                      toggled: e.value === c,
                    },
                    e.value,
                  );
                }),
              }),
            }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
