__d(
  "WAWebCategorySelectionList.react",
  [
    "WAWebCheckBox.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        categoryItem: {
          alignItems: "x6s0dn4",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        checkboxContainer: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "xsdox4t",
          justifyContent: "xl56j7k",
          width: "x100vrsf",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.isDisabled,
        a = e.isLoading,
        i = e.isSelected,
        l = e.results,
        c = e.toggleResultById;
      if (a) {
        var d;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s.jsx("div", { children: "Loading..." })), (t[0] = d))
            : (d = t[0]),
          d
        );
      }
      var m;
      t[1] !== n || t[2] !== i || t[3] !== l || t[4] !== c
        ? ((m =
            l != null &&
            l.map(function (e) {
              var t = i(e.id),
                a = n(e.id);
              return s.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  gap: 12,
                  xstyle: u.categoryItem,
                  children: [
                    s.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: u.checkboxContainer,
                      children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
                        checked: t,
                        disabled: a,
                        onChange: function () {
                          return c(e.id);
                        },
                      }),
                    }),
                    s.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body1",
                      children: e.localized_display_name,
                    }),
                  ],
                },
                e.id,
              );
            })),
          (t[1] = n),
          (t[2] = i),
          (t[3] = l),
          (t[4] = c),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== m
          ? ((p = s.jsx(o("WAWebFlex.react").FlexColumn, { children: m })),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  98,
);
