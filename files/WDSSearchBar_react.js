__d(
  "WDSSearchBar.react",
  [
    "BaseTextInputV2.react",
    "Locale",
    "MagnifyingglassIOS.svg.react",
    "UserAgent",
    "WAWebKeyboardShortcuts",
    "WDSFlex.stylex",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
    "WDSIconIcSearch.react",
    "WDSSearchBarConfig",
    "WDSSearchBarUtils",
    "WDSShortcut.react",
    "XmarkCircleFillIOS.svg.react",
    "react",
    "react-strict-dom",
    "stylex",
    "useMergeRefs",
    "wdsHeight",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = { focusRingHideOutline: { outline: "x1ucz5p", $$css: !0 } },
      h = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb",
      y = o("Locale").isRTL() ? "rtl" : "ltr";
    function C(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.EndIcon,
        l = a.hintText,
        u = a.onEndIconClick,
        d = a.onValueChange,
        C = a.onChange,
        b = a.onFocus,
        v = a.onBlur,
        S = a.onKeyDown,
        R = a.onEnter,
        L = a.onClear,
        E = a.value,
        k = a.testid,
        I = a.platform,
        T = I === void 0 ? h : I,
        D = a.shortcut,
        x = a.defaultValue,
        $ = x === void 0 ? "" : x,
        P = a.tabOrder,
        N = a.autoComplete,
        M = N === void 0 ? "off" : N,
        w = a.autoFocus,
        A = w === void 0 ? !1 : w,
        F = a.xstyle,
        O = _(null),
        B = _(null),
        W = f(function () {
          return String($);
        }),
        q = W[0],
        U = W[1],
        V = E != null ? E : q,
        H = m(
          function (e) {
            (d == null || d(e), E == null && U(e));
          },
          [E, d],
        ),
        G = m(
          function () {
            (L == null || L(), d == null || d(""), E == null && U(""));
          },
          [E, L, d],
        ),
        z = f(!1),
        j = z[0],
        K = z[1],
        Q = m(
          function (e) {
            (e.key === "Escape" && (G(), B.current != null && B.current.blur()),
              S == null || S(e));
          },
          [G, S],
        );
      p(
        function () {
          var e = B.current;
          return (
            e == null || e.addEventListener("keydown", Q),
            function () {
              e == null || e.removeEventListener("keydown", Q);
            }
          );
        },
        [Q],
      );
      var X = r("useMergeRefs")(B, n),
        Y = T === "macWeb" || T === "windowsWeb",
        J = Y
          ? o("WDSSearchBarConfig").SearchBarDensity.POINTER
          : o("WDSSearchBarConfig").SearchBarDensity.TOUCH,
        Z = o("WDSSearchBarConfig").getSearchBarVariant(J, T),
        ee = o("WDSSearchBarConfig").getSearchIconSize(J),
        te = function (t) {
          (t.preventDefault(), t.stopPropagation(), R == null || R(V));
        };
      (p(
        function () {
          E != null && U(E);
        },
        [E],
      ),
        p(
          function () {
            B.current != null &&
              P != null &&
              B.current.setAttribute("data-tab", String(P));
          },
          [P],
        ));
      var ne;
      D != null &&
        (typeof D == "object"
          ? (ne = D)
          : (ne = o("WAWebKeyboardShortcuts").getWDSShortcuts(D)));
      var re = i != null || ne != null || V !== "",
        oe =
          V !== ""
            ? c.jsx(o("WDSSearchBarUtils").SearchBarAddOnEnd, {
                platform: T,
                EndIcon: r(
                  T === "iOS"
                    ? "XmarkCircleFillIOS.svg.react"
                    : "WDSIconIcClose.react",
                ),
                onEndIconClick: G,
                density: J,
              })
            : c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    o("WDSFlex.stylex").wdsFlex.flex,
                    o("WDSFlex.stylex").wdsFlex.alignCenter,
                    o("WDSFlex.stylex").wdsFlex.columnGapHalf,
                    o("wdsHeight").wdsHeight.fullHeight,
                  ),
                  {
                    children: [
                      Y &&
                        ne != null &&
                        c.jsx(
                          r("WDSShortcut.react"),
                          babelHelpers.extends({}, ne),
                        ),
                      c.jsx(o("WDSSearchBarUtils").SearchBarAddOnEnd, {
                        EndIcon: i,
                        platform: T,
                        onEndIconClick: u,
                        density: J,
                      }),
                    ],
                  },
                ),
              ),
        ae = m(
          function (e) {
            (K(!0), b == null || b(e));
          },
          [b],
        ),
        ie = m(
          function (e) {
            (K(!1), v == null || v(e));
          },
          [v],
        ),
        le;
      T === "android" && j
        ? (le = c.jsx(r("WDSIconIcArrowBack.react"), { width: ee, height: ee }))
        : T === "iOS"
          ? (le = c.jsx(r("MagnifyingglassIOS.svg.react"), {
              width: ee,
              height: ee,
            }))
          : (le = c.jsx(r("WDSIconIcSearch.react"), { width: ee, height: ee }));
      var se = c.jsx(r("BaseTextInputV2.react"), {
          placeholder: l,
          testid: void 0,
          ref: X,
          "aria-label": l,
          addOnStart: le,
          autoComplete: M,
          autoFocus: A,
          onValueChange: H,
          onChange: C,
          onFocus: ae,
          onBlur: ie,
          value: V,
          variant: Z,
          addOnEnd: re ? oe : void 0,
          suppressFocusRing: !0,
          focusRingXStyle: g.focusRingHideOutline,
        }),
        ue =
          T === "iOS"
            ? c.jsx(o("WDSSearchBarUtils").SearchBarWrapperIOS, {
                isFocused: j,
                onCancel: G,
                textInput: se,
              })
            : se;
      return R
        ? c.jsx(
            "form",
            babelHelpers.extends(
              { ref: O, onSubmit: te, dir: y },
              (s || (s = r("stylex"))).props(F),
              { children: ue },
            ),
          )
        : c.jsx(o("react-strict-dom").html.div, {
            dir: y,
            ref: O,
            style: F,
            children: ue,
          });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
