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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(33),
        n = e.countries,
        a = e.initialSelection,
        i = e.onChange,
        l = e.testid,
        c = p(),
        d = c[0],
        f = c[1],
        g = p(a),
        h = g[0],
        y = g[1],
        C = m(null),
        b = m(),
        v;
      t[0] !== n
        ? ((v = o("WAWebCountrySelect.react").getCountryDropdownItems({
            countries: n,
          })),
          (t[0] = n),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R = S;
      if (d != null && d.length) {
        var L;
        if (t[2] !== R || t[3] !== d) {
          var E;
          (t[5] !== d
            ? ((E = function (t) {
                return o("WAWebSimpleSearch").simpleSearch(d, [
                  t.menuItem.searchCriteria,
                ]);
              }),
              (t[5] = d),
              (t[6] = E))
            : (E = t[6]),
            (L = R.filter(E)),
            (t[2] = R),
            (t[3] = d),
            (t[4] = L));
        } else L = t[4];
        R = L;
      }
      var k = R,
        I;
      t[7] !== i
        ? ((I = function (t) {
            var e;
            (y(t),
              i == null || i(t),
              (e = b.current) == null || e.hidePopover());
          }),
          (t[7] = i),
          (t[8] = I))
        : (I = t[8]);
      var T = I,
        D;
      t[9] !== h
        ? ((D = function (t) {
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
          }),
          (t[9] = h),
          (t[10] = D))
        : (D = t[10]);
      var x = D,
        $;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = [16, 16, 8, 16]), (t[11] = $))
        : ($ = t[11]);
      var P;
      t[12] !== k || t[13] !== x || t[14] !== T || t[15] !== h
        ? ((P = u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
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
              padding: $,
              children: u.jsx(
                o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
                {
                  data: k,
                  initialActiveOptionId: h,
                  material: !0,
                  maxHeight: 400,
                  minWidth: 300,
                  onSelect: T,
                  renderItem: x,
                  reorderAnimationsEnabled: !1,
                },
              ),
            }),
          })),
          (t[12] = k),
          (t[13] = x),
          (t[14] = T),
          (t[15] = h),
          (t[16] = P))
        : (P = t[16]);
      var N = P,
        M;
      if (t[17] !== h) {
        var w = function () {
          var e,
            t = r("WAIsoToCc")[h],
            n = h + " +" + t,
            o = (e = r("WAWebCountriesNativeCountryNames")[h]) != null ? e : h,
            a = o + " +" + t,
            i = s._(/*BTDS*/ "Country: {country label}", [
              s._param("country label", a),
            ]);
          return u.jsx("div", { "aria-label": i, children: n });
        };
        ((M = w()), (t[17] = h), (t[18] = M));
      } else M = t[18];
      var A = M,
        F;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = "xlxy82 x1q0q8m5 x16pkwpw x1ypdohk"), (t[19] = F))
        : (F = t[19]);
      var O;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = u.jsx("div", {
            className: "x1pg5gke x1d3mw78 xm7witj",
            children: s._(/*BTDS*/ "Country"),
          })),
          (t[20] = O))
        : (O = t[20]);
      var B;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = [
            o("WAWebUISpacing").uiPadding.top8,
            o("WAWebUISpacing").uiPadding.bottom5,
          ]),
          (t[21] = B))
        : (B = t[21]);
      var W;
      t[22] !== A
        ? ((W = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            dir: "ltr",
            justify: "start",
            xstyle: _.label,
            children: A,
          })),
          (t[22] = A),
          (t[23] = W))
        : (W = t[23]);
      var q;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = u.jsx(o("WAWebCaretDownIcon.react").CaretDownIcon, {
            xstyle: o("WAWebUISpacing").uiPadding.start8,
          })),
          (t[24] = q))
        : (q = t[24]);
      var U;
      t[25] !== W
        ? ((U = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 1,
            justify: "all",
            children: [W, q],
          })),
          (t[25] = W),
          (t[26] = U))
        : (U = t[26]);
      var V;
      t[27] !== U || t[28] !== l
        ? ((V = u.jsx(o("WAWebClickable.react").Clickable, {
            dataTestId: l,
            onClick: o("WAWebStopEvent").stopPropagation,
            ref: C,
            xstyle: B,
            children: U,
          })),
          (t[27] = U),
          (t[28] = l),
          (t[29] = V))
        : (V = t[29]);
      var H;
      return (
        t[30] !== N || t[31] !== V
          ? ((H = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              className: F,
              grow: 0,
              shrink: 0,
              children: [O, V, N],
            })),
            (t[30] = N),
            (t[31] = V),
            (t[32] = H))
          : (H = t[32]),
        H
      );
    }
    l.default = f;
  },
  226,
);
