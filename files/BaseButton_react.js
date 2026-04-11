__d(
  "BaseButton.react",
  [
    "BaseButtonPopoverContext",
    "Pressable.react",
    "PressableText.react",
    "react",
    "react-compiler-runtime",
    "useFeedPressEventHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(56),
        n = e.ref,
        a = e.allowClickEventPropagation,
        i = e["aria-activedescendant"],
        l = e["aria-checked"],
        c = e["aria-controls"],
        d = e["aria-current"],
        m = e["aria-describedby"],
        p = e["aria-expanded"],
        _ = e["aria-haspopup"],
        f = e["aria-hidden"],
        g = e["aria-invalid"],
        h = e["aria-label"],
        y = e["aria-labelledby"],
        C = e["aria-pressed"],
        b = e["aria-selected"],
        v = e.children,
        S = e.disabled,
        R = e.display,
        L = e.focusable,
        E = e.id,
        k = e.label,
        I = e.onBlur,
        T = e.onClick,
        D = e.onContextMenu,
        x = e.onFocus,
        $ = e.onFocusChange,
        P = e.onFocusVisibleChange,
        N = e.onHoverChange,
        M = e.onHoverEnd,
        w = e.onHoverMove,
        A = e.onHoverStart,
        F = e.onPressChange,
        O = e.onPressEnd,
        B = e.onPressStart,
        W = e.preventContextMenu,
        q = e.role,
        U = e.style,
        V = e.suppressFocusRing,
        H = e.suppressHydrationWarning,
        G = e.testid,
        z = e.testOnly_pressed,
        j = e.xstyle,
        K = S === void 0 ? !1 : S,
        Q = R === void 0 ? "inline" : R,
        X = z === void 0 ? !1 : z,
        Y = q,
        J = Y !== "none" ? (h != null ? h : k) : void 0,
        Z = n,
        ee,
        te,
        ne;
      ((ee = r("useFeedPressEventHandler")(T)),
        (te = r("useFeedPressEventHandler")(B)),
        (ne = r("useFeedPressEventHandler")(D)));
      var re = u(r("BaseButtonPopoverContext")),
        oe = re != null && _ == null ? re.haspopup : _,
        ae;
      t[0] !== i ||
      t[1] !== c ||
      t[2] !== d ||
      t[3] !== m ||
      t[4] !== y ||
      t[5] !== oe
        ? ((ae = {
            activedescendant: i,
            controls: c,
            current: d,
            describedby: m,
            haspopup: oe,
            labelledby: y,
          }),
          (t[0] = i),
          (t[1] = c),
          (t[2] = d),
          (t[3] = m),
          (t[4] = y),
          (t[5] = oe),
          (t[6] = ae))
        : (ae = t[6]);
      var ie = re != null && p == null ? re.expanded : p,
        le;
      t[7] !== l ||
      t[8] !== K ||
      t[9] !== f ||
      t[10] !== g ||
      t[11] !== C ||
      t[12] !== b ||
      t[13] !== ie
        ? ((le = {
            checked: l,
            disabled: K,
            expanded: ie,
            hidden: f,
            invalid: g,
            pressed: C,
            selected: b,
          }),
          (t[7] = l),
          (t[8] = K),
          (t[9] = f),
          (t[10] = g),
          (t[11] = C),
          (t[12] = b),
          (t[13] = ie),
          (t[14] = le))
        : (le = t[14]);
      var se;
      t[15] !== X
        ? ((se = {
            disabled: !1,
            focused: !1,
            focusVisible: !1,
            hovered: !1,
            pressed: X,
          }),
          (t[15] = X),
          (t[16] = se))
        : (se = t[16]);
      var ue;
      t[17] !== J ||
      t[18] !== K ||
      t[19] !== Z ||
      t[20] !== E ||
      t[21] !== I ||
      t[22] !== x ||
      t[23] !== $ ||
      t[24] !== P ||
      t[25] !== N ||
      t[26] !== M ||
      t[27] !== w ||
      t[28] !== A ||
      t[29] !== F ||
      t[30] !== O ||
      t[31] !== W ||
      t[32] !== U ||
      t[33] !== H ||
      t[34] !== ae ||
      t[35] !== le ||
      t[36] !== se ||
      t[37] !== G ||
      t[38] !== ne ||
      t[39] !== ee ||
      t[40] !== te ||
      t[41] !== j
        ? ((ue = {
            accessibilityLabel: J,
            accessibilityRelationship: ae,
            accessibilityState: le,
            disabled: K,
            forwardedRef: Z,
            nativeID: E,
            onBlur: I,
            onContextMenu: ne,
            onFocus: x,
            onFocusChange: $,
            onFocusVisibleChange: P,
            onHoverChange: N,
            onHoverEnd: M,
            onHoverMove: w,
            onHoverStart: A,
            onPress: ee,
            onPressChange: F,
            onPressEnd: O,
            onPressStart: te,
            preventContextMenu: W,
            style: U,
            suppressHydrationWarning: H,
            testID: G,
            testOnly_state: se,
            xstyle: j,
          }),
          (t[17] = J),
          (t[18] = K),
          (t[19] = Z),
          (t[20] = E),
          (t[21] = I),
          (t[22] = x),
          (t[23] = $),
          (t[24] = P),
          (t[25] = N),
          (t[26] = M),
          (t[27] = w),
          (t[28] = A),
          (t[29] = F),
          (t[30] = O),
          (t[31] = W),
          (t[32] = U),
          (t[33] = H),
          (t[34] = ae),
          (t[35] = le),
          (t[36] = se),
          (t[37] = G),
          (t[38] = ne),
          (t[39] = ee),
          (t[40] = te),
          (t[41] = j),
          (t[42] = ue))
        : (ue = t[42]);
      var ce = ue;
      if (Q === "block") {
        var de =
            Y === "menuitem" ||
            Y === "menuitemradio" ||
            Y === "none" ||
            Y === "gridcell" ||
            Y === "switch" ||
            Y === "combobox" ||
            Y === "checkbox" ||
            Y === "tab" ||
            Y === "radio" ||
            Y === "option"
              ? Y
              : "button",
          me;
        return (
          t[43] !== de ||
          t[44] !== a ||
          t[45] !== ce ||
          t[46] !== v ||
          t[47] !== L ||
          t[48] !== V
            ? ((me = s.jsx(
                r("Pressable.react"),
                babelHelpers.extends({}, ce, {
                  accessibilityRole: de,
                  allowClickEventPropagation: a,
                  suppressFocusRing: V,
                  tabbable: L,
                  children: v,
                }),
              )),
              (t[43] = de),
              (t[44] = a),
              (t[45] = ce),
              (t[46] = v),
              (t[47] = L),
              (t[48] = V),
              (t[49] = me))
            : (me = t[49]),
          me
        );
      } else {
        var pe =
            Y === "combobox" ||
            Y === "menuitem" ||
            Y === "menuitemcheckbox" ||
            Y === "menuitemradio" ||
            Y === "option" ||
            Y === "none" ||
            Y === "link" ||
            Y === "tab"
              ? Y
              : "button",
          _e;
        return (
          t[50] !== pe ||
          t[51] !== ce ||
          t[52] !== v ||
          t[53] !== L ||
          t[54] !== V
            ? ((_e = s.jsx(
                r("PressableText.react"),
                babelHelpers.extends({ focusable: L }, ce, {
                  accessibilityRole: pe,
                  direction: "none",
                  suppressFocusRing: V,
                  children: v,
                }),
              )),
              (t[50] = pe),
              (t[51] = ce),
              (t[52] = v),
              (t[53] = L),
              (t[54] = V),
              (t[55] = _e))
            : (_e = t[55]),
          _e
        );
      }
    }
    l.default = c;
  },
  98,
);
