__d(
  "WAWebProductDetailsInfoVariants.react",
  [
    "fbt",
    "WAWebCatalogVariantHelper",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebProductDetailsInfoVariantsHelper",
    "WAWebSelectButton.react",
    "WAWebSelectMenuItem.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = 6,
      m = {
        filterRefreshed: {
          borderStartStartRadius: "xtf1z3e",
          borderStartEndRadius: "x18i4vdl",
          borderEndEndRadius: "x17ka9pb",
          borderEndStartRadius: "xaozknv",
          backgroundColor: "x1h3rtpe",
          boxShadow: "x1hdfv4t",
          $$css: !0,
        },
        filterHoverRefreshed: {
          ":hover_backgroundColor": "x1nsvvxn",
          $$css: !0,
        },
        selectedRefreshed: { backgroundColor: "x1j3esqa", $$css: !0 },
        optionsContainer: {
          marginTop: "x14vqqas",
          marginBottom: "xod5an3",
          $$css: !0,
        },
        variantsList: {
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
      };
    function p(e) {
      var t,
        n = e.disabled,
        a = e.onSelect,
        i = e.option,
        l = e.selected,
        s = [
          (t = o("WAWebUISpacing")).uiMargin.end8,
          t.uiPadding.vert4,
          t.uiMargin.top10,
          t.uiPadding.horiz12,
          m.filterRefreshed,
          l ? m.selectedRefreshed : m.filterHoverRefreshed,
        ],
        c = "wdsContentDefault";
      return (
        n ? (c = "wdsContentDisabled") : l && (c = "teal"),
        u.jsx(r("WAWebUnstyledButton.react"), {
          role: "option",
          tabIndex: l ? 0 : -1,
          "aria-label": i,
          "aria-selected": l,
          onClick: function () {
            return a(i);
          },
          xstyle: s,
          disabled: n,
          children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
            weight: l ? "medium" : "normal",
            color: c,
            children: i,
          }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.isOptionDisabled,
        n = e.onOptionSelect,
        a = e.options,
        i = e.selectedOption,
        l = u.createRef();
      return a.length >= d
        ? u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.top10,
            children: u.jsx(o("WAWebSelectButton.react").SelectButton, {
              ref: l,
              ariaRoleDescription: i != null ? i : "",
              label: i,
              width: 150,
              testid: void 0,
              children: u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                target: l,
                position: o("WAWebDropdownV2.react").PopoverPosition.Start,
                minWidth: 150,
                maxHeight: 268,
                xstyle: m.variantsList,
                alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
                children: u.jsx(
                  o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
                  {
                    multiselect: !1,
                    initialSelection: i,
                    onSelect: n,
                    children: a.map(function (e) {
                      var n = t(e);
                      return u.jsx(
                        o("WAWebSelectMenuItem.react").SelectMenuItem,
                        {
                          optionId: e,
                          disabled: n,
                          primary: u.jsx(r("WDSText.react"), {
                            type: "Body2",
                            colorName: n ? "contentDisabled" : "contentDefault",
                            children: e,
                          }),
                        },
                        e,
                      );
                    }),
                  },
                ),
              }),
            }),
          })
        : u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.top10,
            wrap: "wrap",
            children: a.map(function (e) {
              return u.jsx(
                p,
                { option: e, selected: i === e, disabled: t(e), onSelect: n },
                e,
              );
            }),
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n,
        r,
        a = e.product,
        i = e.productChanged,
        l = c(
          (t = a.variantInfo) == null || (t = t.variant_properties[0]) == null
            ? void 0
            : t.value,
        ),
        s = l[0],
        d = l[1],
        p = c(
          (n = a.variantInfo) == null || (n = n.variant_properties[1]) == null
            ? void 0
            : n.value,
        ),
        f = p[0],
        g = p[1];
      if (
        !(
          (r = a.variantInfo) != null &&
          (r = r.variant_properties) != null &&
          r.length
        )
      )
        return null;
      var h = o(
        "WAWebProductDetailsInfoVariantsHelper",
      ).catalogVariantOptionsList(a);
      if (h == null) return null;
      var y = h.firstType,
        C = h.firstTypeAvailableOptions,
        b = h.firstTypeExistingOptions,
        v = h.secondType,
        S = h.secondTypeAvailableOptions,
        R = h.secondTypeExistingOptions,
        L = function (t) {
          if ((d(t), R.length > 0)) {
            var e = o(
              "WAWebProductDetailsInfoVariantsHelper",
            ).getSecondTypeAvailableOptionsForSelectedFirstType(t, S);
            if (f != null && e.includes(f)) {
              var n = k(t, f);
              n != null && i(n);
            } else {
              var r = o(
                "WAWebProductDetailsInfoVariantsHelper",
              ).selectDefaultSecondOption(t, S);
              if (r != null) {
                g(r);
                var a = k(t, r);
                a != null && i(a);
              }
            }
          } else {
            var l = k(t);
            l != null && i(l);
          }
        },
        E = function (t) {
          g(t);
          var e = k(s, t);
          e != null && i(e);
        },
        k = function (t, n) {
          if (t == null) return null;
          if (n != null) {
            var e,
              r = (e = S.get(t)) == null ? void 0 : e.get(n);
            return r == null ? void 0 : r.product_id;
          }
          var o = C.get(t);
          return o == null ? void 0 : o.product_id;
        },
        I = function (t) {
          if (R.length > 0) {
            var e = o(
              "WAWebProductDetailsInfoVariantsHelper",
            ).getSecondTypeAvailableOptionsForSelectedFirstType(t, S);
            return e.length === 0;
          }
          return !C.has(t);
        },
        T = function (t) {
          var e = o(
            "WAWebProductDetailsInfoVariantsHelper",
          ).getSecondTypeAvailableOptionsForSelectedFirstType(s, S);
          return !e.includes(t);
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 16,
        xstyle: m.optionsContainer,
        children: [
          y != null &&
            b.length > 0 &&
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  color: "wdsContentDeemphasized",
                  children: o(
                    "WAWebCatalogVariantHelper",
                  ).getVariantTypeOptions(y),
                }),
                u.jsx(_, {
                  options: b,
                  selectedOption: s,
                  isOptionDisabled: I,
                  onOptionSelect: L,
                }),
              ],
            }),
          v != null &&
            R.length > 0 &&
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  color: "wdsContentDeemphasized",
                  children: o(
                    "WAWebCatalogVariantHelper",
                  ).getVariantTypeOptions(v),
                }),
                u.jsx(_, {
                  options: R,
                  selectedOption: f,
                  isOptionDisabled: T,
                  onOptionSelect: E,
                }),
              ],
            }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = function () {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Could not load catalog product for the selected option.",
          ),
        }),
      );
    };
    ((l.ProductCatalogDetailsInfoVariants = f),
      (l.showProductChangeErrorToast = g));
  },
  226,
);
