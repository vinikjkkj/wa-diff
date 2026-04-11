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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = e.disabled,
        a = e.onSelect,
        i = e.option,
        l = e.selected,
        s = l ? m.selectedRefreshed : m.filterHoverRefreshed,
        c;
      if (t[0] !== s) {
        var d;
        ((c = [
          (d = o("WAWebUISpacing")).uiMargin.end8,
          d.uiPadding.vert4,
          d.uiMargin.top10,
          d.uiPadding.horiz12,
          m.filterRefreshed,
          s,
        ]),
          (t[0] = s),
          (t[1] = c));
      } else c = t[1];
      var p = c,
        _ = "wdsContentDefault";
      n ? (_ = "wdsContentDisabled") : l && (_ = "teal");
      var f = l ? 0 : -1,
        g;
      t[2] !== a || t[3] !== i
        ? ((g = function () {
            return a(i);
          }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = g))
        : (g = t[4]);
      var h = l ? "medium" : "normal",
        y;
      t[5] !== i || t[6] !== h || t[7] !== _
        ? ((y = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            weight: h,
            color: _,
            children: i,
          })),
          (t[5] = i),
          (t[6] = h),
          (t[7] = _),
          (t[8] = y))
        : (y = t[8]);
      var C;
      return (
        t[9] !== p ||
        t[10] !== n ||
        t[11] !== i ||
        t[12] !== l ||
        t[13] !== f ||
        t[14] !== g ||
        t[15] !== y
          ? ((C = u.jsx(r("WAWebUnstyledButton.react"), {
              role: "option",
              tabIndex: f,
              "aria-label": i,
              "aria-selected": l,
              onClick: g,
              xstyle: p,
              disabled: n,
              children: y,
            })),
            (t[9] = p),
            (t[10] = n),
            (t[11] = i),
            (t[12] = l),
            (t[13] = f),
            (t[14] = g),
            (t[15] = y),
            (t[16] = C))
          : (C = t[16]),
        C
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.isOptionDisabled,
        a = e.onOptionSelect,
        i = e.options,
        l = e.selectedOption,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.createRef()), (t[0] = s))
        : (s = t[0]);
      var c = s;
      if (i.length >= d) {
        var _ = l != null ? l : "",
          f;
        if (t[1] !== n || t[2] !== i) {
          var g;
          (t[4] !== n
            ? ((g = function (t) {
                var e = n(t);
                return u.jsx(
                  o("WAWebSelectMenuItem.react").SelectMenuItem,
                  {
                    optionId: t,
                    disabled: e,
                    primary: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: e ? "contentDisabled" : "contentDefault",
                      children: t,
                    }),
                  },
                  t,
                );
              }),
              (t[4] = n),
              (t[5] = g))
            : (g = t[5]),
            (f = i.map(g)),
            (t[1] = n),
            (t[2] = i),
            (t[3] = f));
        } else f = t[3];
        var h;
        t[6] !== a || t[7] !== l || t[8] !== f
          ? ((h = u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
              target: c,
              position: o("WAWebDropdownV2.react").PopoverPosition.Start,
              minWidth: 150,
              maxHeight: 268,
              xstyle: m.variantsList,
              alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
              children: u.jsx(
                o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
                {
                  multiselect: !1,
                  initialSelection: l,
                  onSelect: a,
                  children: f,
                },
              ),
            })),
            (t[6] = a),
            (t[7] = l),
            (t[8] = f),
            (t[9] = h))
          : (h = t[9]);
        var y;
        return (
          t[10] !== l || t[11] !== _ || t[12] !== h
            ? ((y = u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: o("WAWebUISpacing").uiMargin.top10,
                children: u.jsx(o("WAWebSelectButton.react").SelectButton, {
                  ref: c,
                  ariaRoleDescription: _,
                  label: l,
                  width: 150,
                  testid: void 0,
                  children: h,
                }),
              })),
              (t[10] = l),
              (t[11] = _),
              (t[12] = h),
              (t[13] = y))
            : (y = t[13]),
          y
        );
      }
      var C;
      if (t[14] !== n || t[15] !== a || t[16] !== i || t[17] !== l) {
        var b;
        (t[19] !== n || t[20] !== a || t[21] !== l
          ? ((b = function (t) {
              return u.jsx(
                p,
                { option: t, selected: l === t, disabled: n(t), onSelect: a },
                t,
              );
            }),
            (t[19] = n),
            (t[20] = a),
            (t[21] = l),
            (t[22] = b))
          : (b = t[22]),
          (C = i.map(b)),
          (t[14] = n),
          (t[15] = a),
          (t[16] = i),
          (t[17] = l),
          (t[18] = C));
      } else C = t[18];
      var v;
      return (
        t[23] !== C
          ? ((v = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: o("WAWebUISpacing").uiMargin.top10,
              wrap: "wrap",
              children: C,
            })),
            (t[23] = C),
            (t[24] = v))
          : (v = t[24]),
        v
      );
    }
    function f(e) {
      var t,
        n,
        r,
        a = o("react-compiler-runtime").c(16),
        i = e.product,
        l = e.productChanged,
        s = c(
          (t = i.variantInfo) == null || (t = t.variant_properties[0]) == null
            ? void 0
            : t.value,
        ),
        d = s[0],
        p = s[1],
        f = c(
          (n = i.variantInfo) == null || (n = n.variant_properties[1]) == null
            ? void 0
            : n.value,
        ),
        g = f[0],
        h = f[1];
      if (
        !(
          (r = i.variantInfo) != null &&
          (r = r.variant_properties) != null &&
          r.length
        )
      )
        return null;
      var y, C, b, v, S, R;
      if (a[0] !== i || a[1] !== l || a[2] !== d || a[3] !== g) {
        R = Symbol.for("react.early_return_sentinel");
        e: {
          var L = o(
            "WAWebProductDetailsInfoVariantsHelper",
          ).catalogVariantOptionsList(i);
          if (L == null) {
            R = null;
            break e;
          }
          var E = L.firstType,
            k = L.firstTypeAvailableOptions,
            I = L.firstTypeExistingOptions,
            T = L.secondType,
            D = L.secondTypeAvailableOptions,
            x = L.secondTypeExistingOptions,
            $ = function (t) {
              if ((p(t), x.length > 0)) {
                var e = o(
                  "WAWebProductDetailsInfoVariantsHelper",
                ).getSecondTypeAvailableOptionsForSelectedFirstType(t, D);
                if (g != null && e.includes(g)) {
                  var n = N(t, g);
                  n != null && l(n);
                } else {
                  var r = o(
                    "WAWebProductDetailsInfoVariantsHelper",
                  ).selectDefaultSecondOption(t, D);
                  if (r != null) {
                    h(r);
                    var a = N(t, r);
                    a != null && l(a);
                  }
                }
              } else {
                var i = N(t);
                i != null && l(i);
              }
            },
            P = function (t) {
              h(t);
              var e = N(d, t);
              e != null && l(e);
            },
            N = function (t, n) {
              if (t == null) return null;
              if (n != null) {
                var e,
                  r = (e = D.get(t)) == null ? void 0 : e.get(n);
                return r == null ? void 0 : r.product_id;
              }
              var o = k.get(t);
              return o == null ? void 0 : o.product_id;
            },
            M = function (t) {
              if (x.length > 0) {
                var e = o(
                  "WAWebProductDetailsInfoVariantsHelper",
                ).getSecondTypeAvailableOptionsForSelectedFirstType(t, D);
                return e.length === 0;
              }
              return !k.has(t);
            },
            w = function (t) {
              var e = o(
                "WAWebProductDetailsInfoVariantsHelper",
              ).getSecondTypeAvailableOptionsForSelectedFirstType(d, D);
              return !e.includes(t);
            };
          ((y = o("WAWebFlex.react").FlexColumn),
            (C = 16),
            (b = m.optionsContainer),
            (v =
              E != null &&
              I.length > 0 &&
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    color: "wdsContentDeemphasized",
                    children: o(
                      "WAWebCatalogVariantHelper",
                    ).getVariantTypeOptions(E),
                  }),
                  u.jsx(_, {
                    options: I,
                    selectedOption: d,
                    isOptionDisabled: M,
                    onOptionSelect: $,
                  }),
                ],
              })),
            (S =
              T != null &&
              x.length > 0 &&
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    color: "wdsContentDeemphasized",
                    children: o(
                      "WAWebCatalogVariantHelper",
                    ).getVariantTypeOptions(T),
                  }),
                  u.jsx(_, {
                    options: x,
                    selectedOption: g,
                    isOptionDisabled: w,
                    onOptionSelect: P,
                  }),
                ],
              })));
        }
        ((a[0] = i),
          (a[1] = l),
          (a[2] = d),
          (a[3] = g),
          (a[4] = y),
          (a[5] = C),
          (a[6] = b),
          (a[7] = v),
          (a[8] = S),
          (a[9] = R));
      } else
        ((y = a[4]),
          (C = a[5]),
          (b = a[6]),
          (v = a[7]),
          (S = a[8]),
          (R = a[9]));
      if (R !== Symbol.for("react.early_return_sentinel")) return R;
      var A;
      return (
        a[10] !== y || a[11] !== C || a[12] !== b || a[13] !== v || a[14] !== S
          ? ((A = u.jsxs(y, { gap: C, xstyle: b, children: [v, S] })),
            (a[10] = y),
            (a[11] = C),
            (a[12] = b),
            (a[13] = v),
            (a[14] = S),
            (a[15] = A))
          : (A = a[15]),
        A
      );
    }
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
