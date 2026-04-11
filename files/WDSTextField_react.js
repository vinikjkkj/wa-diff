__d(
  "WDSTextField.react",
  [
    "BaseTextInputV2.react",
    "Locale",
    "UserAgent",
    "WDSTextFieldUtils",
    "WDSTextFieldUtils.iOS",
    "WDSTextFieldVariants",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useId,
      _ = c.useLayoutEffect,
      f = c.useRef,
      g = c.useState,
      h = { focusRingHideOutline: { outline: "x1ucz5p", $$css: !0 } },
      y = o("Locale").isRTL(),
      C = 8,
      b = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
    function v(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.EndIcon,
        c = l.StartIcon,
        v = l.bottomText,
        S = l.defaultValue,
        R = S === void 0 ? "" : S,
        L = l.error,
        E = L === void 0 ? !1 : L,
        k = l.errorText,
        I = l.success,
        T = I === void 0 ? !1 : I,
        D = l.successText,
        x = l.label,
        $ = l.floatingLabel,
        P = $ === void 0 ? !0 : $,
        N = l.maxCharacterCount,
        M = l.onEndIconClick,
        w = l.onValueChange,
        A = l.onChange,
        F = l.onFocus,
        O = l.onBlur,
        B = l.onEnter,
        W = l.value,
        q = l.prefix,
        U = l.suffix,
        V = l.disabled,
        H = l.loading,
        G = H === void 0 ? !1 : H,
        z = l.testid,
        j = l.labelTestId,
        K = l.loadingText,
        Q = l.readOnly,
        X = l.platform,
        Y = X === void 0 ? b : X,
        J = g(function () {
          return String(R);
        }),
        Z = J[0],
        ee = J[1],
        te = W != null ? W : Z,
        ne = g(0),
        re = ne[0],
        oe = ne[1],
        ae = g(0),
        ie = ae[0],
        le = ae[1],
        se = f(null),
        ue = p(),
        ce = "bottom-text-" + ue,
        de = Y === "iOS",
        me = N != null && te.length > N,
        pe = E || me,
        _e = V === !0 && !pe,
        fe = g(!1),
        ge = fe[0],
        he = fe[1];
      (_(
        function () {
          if (se.current) {
            var e = se.current,
              t = e.querySelector("label");
            if (t) {
              var n = t.getBoundingClientRect(),
                r = e.getBoundingClientRect();
              if (y === !0) {
                var o = r.right - n.right,
                  a = o - C;
                oe(a);
              } else {
                var i = n.left - r.left,
                  l = i - C;
                oe(-l);
              }
            }
          }
        },
        [c, q],
      ),
        _(function () {
          if (se.current) {
            var e = se.current;
            le(e.offsetWidth);
          }
        }, []));
      var ye = d(
          function (e) {
            (w == null || w(e), W == null && ee(e));
          },
          [W, w],
        ),
        Ce = function (t) {
          (t.preventDefault(), t.stopPropagation(), B == null || B());
        },
        be = d(
          function () {
            (w == null || w(""), W == null && ee(""));
          },
          [W, w],
        ),
        ve = d(
          function () {
            (he(!0), F == null || F());
          },
          [F],
        ),
        Se = d(
          function () {
            (he(!1), O == null || O());
          },
          [O],
        );
      m(
        function () {
          W != null && ee(W);
        },
        [W],
      );
      var Re = de
          ? (pe && k != null) || (G && K != null) || (T && D != null)
          : v != null || k != null || N != null,
        Le = null;
      Re &&
        (de
          ? (Le = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnBottom, {
              errorText: k,
              loading: G,
              loadingText: K,
              shouldShowError: pe,
              successText: D,
              shouldShowSuccess: T,
            }))
          : (Le = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnBottom, {
              bottomText: v,
              errorText: k,
              maxCharacterCount: N,
              value: te,
              platform: Y,
              shouldShowError: pe,
              bottomId: ce,
            })));
      var Ee = de
          ? E || N != null || G || T || te.length > 0
          : pe || s != null || U != null || G,
        ke = null;
      Ee &&
        (de
          ? (ke = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnEnd, {
              shouldShowError: E,
              maxCharacterCount: N,
              value: te,
              shouldShowSuccess: T,
              loading: G,
              onClearInput: be,
              isFocused: ge && Q !== !0,
            }))
          : (ke = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnEnd, {
              shouldShowError: pe,
              EndIcon: s,
              suffix: U,
              onEndIconClick: M,
              loading: G,
              platform: Y,
            })));
      var Ie = c != null || q != null,
        Te = null;
      Ie &&
        (de
          ? (Te = u.jsx(o("WDSTextFieldUtils.iOS").TextFieldAddOnStart, {
              prefix: q,
            }))
          : (Te = u.jsx(o("WDSTextFieldUtils").TextFieldAddOnStart, {
              prefix: q,
              StartIcon: c,
              platform: Y,
            })));
      var De = P === !1 && (ge || te !== "") ? "" : x,
        xe = u.jsx(r("BaseTextInputV2.react"), {
          readOnly: Q,
          disabled: _e,
          testid: void 0,
          labelTestId: j,
          ref: i,
          label: De,
          addOnStart: Te,
          addOnEnd: ke,
          addOnBottom: Le,
          onValueChange: ye,
          onChange: A,
          onFocus: ve,
          onBlur: Se,
          value: te,
          variant: o("WDSTextFieldVariants").WDSTextFieldLabelVariant(
            pe,
            _e,
            Ee,
            Y,
          ),
          variantColor: o("WDSTextFieldVariants").WDSTextFieldColorVariant(
            pe,
            Y,
          ),
          suppressFocusRing: !0,
          focusRingXStyle: h.focusRingHideOutline,
          "aria-invalid": pe,
          "aria-errormessage": pe && Le ? ce : void 0,
          "aria-describedby": Le ? ce : void 0,
        });
      if (B) {
        var $e, Pe;
        return u.jsx("form", {
          ref: se,
          style: babelHelpers.extends(
            (($e = {}),
            ($e[o("WDSTextFieldVariants").labelMoveDistanceVarname] =
              re + "px"),
            $e),
            de &&
              ((Pe = {}),
              (Pe[o("WDSTextFieldVariants").textFieldLabelWidth] =
                "calc(0.35 * (" +
                ie +
                "px - 2 * " +
                o("WDSTextFieldVariants").iOSTextInputContainerPaddingInline +
                "))"),
              Pe),
          ),
          onSubmit: Ce,
          children: xe,
        });
      }
      return u.jsx("div", {
        ref: se,
        style: babelHelpers.extends(
          ((n = {}),
          (n[o("WDSTextFieldVariants").labelMoveDistanceVarname] = re + "px"),
          n),
          de &&
            ((a = {}),
            (a[o("WDSTextFieldVariants").textFieldLabelWidth] =
              "calc(0.35 * (" +
              ie +
              "px - 2 * " +
              o("WDSTextFieldVariants").iOSTextInputContainerPaddingInline +
              "))"),
            a),
        ),
        children: xe,
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
