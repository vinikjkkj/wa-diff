__d(
  "WAWebCountrySelectField.react",
  [
    "fbt",
    "WAIsoToCc",
    "WAWebCaretDownIcon.react",
    "WAWebCheckmarkIcon.react",
    "WAWebClickable.react",
    "WAWebCountriesNativeCountryNames",
    "WAWebCountrySelect.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebSearchInput",
    "WAWebSimpleSearch",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = {
        tealColor: { color: "x1v5yvga", $$css: !0 },
        label: {
          width: "x1dmp6jm",
          fontSize: "x1lkfr7t",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
      };
    function f(e) {
      var t = e.countries,
        n = e.initialSelection,
        a = e.onChange,
        i = e.testid,
        l = p(),
        c = l[0],
        f = l[1],
        g = p(n),
        h = g[0],
        y = g[1],
        C = m(null),
        b = m(),
        v = d(
          function () {
            return o("WAWebCountrySelect.react").getCountryDropdownItems({
              countries: t,
            });
          },
          [t],
        ),
        S = d(
          function () {
            var e = v;
            return (
              c != null &&
                c.length &&
                (e = e.filter(function (e) {
                  return o("WAWebSimpleSearch").simpleSearch(c, [
                    e.menuItem.searchCriteria,
                  ]);
                })),
              e
            );
          },
          [v, c],
        ),
        R = function (t) {
          var e;
          (y(t), a == null || a(t), (e = b.current) == null || e.hidePopover());
        },
        L = function (t) {
          return u.jsx(
            o("WAWebMenuItems.react").ActionMenuItem,
            babelHelpers.extends({}, t.menuItem, {
              detailRight:
                t.itemKey === h
                  ? u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                      iconXstyle: _.tealColor,
                    })
                  : t.menuItem.detailRight,
            }),
          );
        },
        E = u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
          alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
          buffer: 4,
          controllerRef: b,
          initHandling: "click",
          material: !0,
          position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
          target: C,
          children: u.jsx(o("WAWebSearchInput").SearchInput, {
            colorScheme: "darker",
            onSearch: f,
            padding: [16, 16, 8, 16],
            children: u.jsx(
              o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
              {
                data: S,
                initialActiveOptionId: h,
                material: !0,
                maxHeight: 400,
                minWidth: 300,
                onSelect: R,
                renderItem: L,
                reorderAnimationsEnabled: !1,
              },
            ),
          }),
        }),
        k = function () {
          var e,
            t = r("WAIsoToCc")[h],
            n = h + " +" + t,
            o = (e = r("WAWebCountriesNativeCountryNames")[h]) != null ? e : h,
            a = o + " +" + t,
            i = s._(/*BTDS*/ "Country: {country label}", [
              s._param("country label", a),
            ]);
          return u.jsx("div", { "aria-label": i, children: n });
        },
        I = k();
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "start",
        className: "xlxy82 x1q0q8m5 x16pkwpw x1ypdohk",
        grow: 0,
        shrink: 0,
        children: [
          u.jsx("div", {
            className: "x1pg5gke x1d3mw78 xm7witj",
            children: s._(/*BTDS*/ "Country"),
          }),
          u.jsx(o("WAWebClickable.react").Clickable, {
            dataTestId: i,
            onClick: o("WAWebStopEvent").stopPropagation,
            ref: C,
            xstyle: [
              o("WAWebUISpacing").uiPadding.top8,
              o("WAWebUISpacing").uiPadding.bottom5,
            ],
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              grow: 1,
              justify: "all",
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  align: "center",
                  dir: "ltr",
                  justify: "start",
                  xstyle: _.label,
                  children: I,
                }),
                u.jsx(o("WAWebCaretDownIcon.react").CaretDownIcon, {
                  xstyle: o("WAWebUISpacing").uiPadding.start8,
                }),
              ],
            }),
          }),
          E,
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
