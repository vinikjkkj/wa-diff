__d(
  "WAWebCategorySelectionList.react",
  ["WAWebCheckBox.react", "WAWebFlex.react", "WDSText.react", "react"],
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
      var t = e.isDisabled,
        n = e.isLoading,
        a = e.isSelected,
        i = e.results,
        l = e.toggleResultById;
      return n
        ? s.jsx("div", { children: "Loading..." })
        : s.jsx(o("WAWebFlex.react").FlexColumn, {
            children:
              i != null &&
              i.map(function (e) {
                var n = a(e.id),
                  i = t(e.id);
                return s.jsxs(
                  o("WAWebFlex.react").FlexRow,
                  {
                    gap: 12,
                    xstyle: u.categoryItem,
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexItem, {
                        xstyle: u.checkboxContainer,
                        children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
                          checked: n,
                          disabled: i,
                          onChange: function () {
                            return l(e.id);
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
              }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
