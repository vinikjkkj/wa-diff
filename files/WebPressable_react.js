__d(
  "WebPressable.react",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "WebPressability",
    "WebPressableGroupContext",
    "emptyHook",
    "joinClasses",
    "react",
    "stylex",
    "useWebPressableTouchStartHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "accessibilityLabel",
        "accessibilityRelationship",
        "accessibilityRole",
        "accessibilityState",
        "accessibilityValue",
        "allowClickEventPropagation",
        "children",
        "className_DEPRECATED",
        "disabled",
        "draggable",
        "forwardedRef",
        "link",
        "nativeID",
        "onBlur",
        "onContextMenu",
        "onFocus",
        "onFocusChange",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverEnd",
        "onHoverMove",
        "onHoverStart",
        "onKeyDown",
        "onPress",
        "onPressChange",
        "onPressEnd",
        "onPressMove",
        "onPressStart",
        "preventContextMenu",
        "preventDefault",
        "style",
        "suppressFocusRing",
        "tabbable",
        "testID",
        "testOnly_state",
        "xstyle",
      ],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useContext,
      f = m.useRef,
      g = m.useState,
      h = (s || (s = r("ExecutionEnvironment"))).canUseDOM
        ? o("WebPressability").usePressability
        : r("emptyHook").thatReturnsNull,
      y = ["menuitem", "tab", "none"],
      C = {
        article: "article",
        banner: "header",
        complementary: "aside",
        contentinfo: "footer",
        figure: "figure",
        form: "form",
        heading: "h1",
        label: "label",
        link: "a",
        list: "ul",
        listitem: "li",
        main: "main",
        navigation: "nav",
        none: "div",
        region: "section",
      };
    function b(e, t) {
      var n = "div";
      if (e != null && y.includes(e) && t != null && t.url != null) n = "a";
      else if (e != null) {
        var r = C[e];
        r != null && (n = r);
      }
      return n;
    }
    function v(e) {
      switch (e) {
        case "label":
          return;
        default:
          return e;
      }
    }
    var S = function (t) {
      var e = t.target,
        n = e.tagName,
        r =
          e.isContentEditable ||
          (n === "A" && e.href != null) ||
          n === "BUTTON" ||
          n === "INPUT" ||
          n === "SELECT" ||
          n === "TEXTAREA";
      if (e.tabIndex === 0 && !r) {
        var o = t.key;
        if (o === "Enter") return !0;
        var a = e.getAttribute("role");
        if (
          (o === " " || o === "Spacebar") &&
          (a === "button" ||
            a === "checkbox" ||
            a === "combobox" ||
            a === "menuitem" ||
            a === "menuitemcheckbox" ||
            a === "menuitemradio" ||
            a === "option" ||
            a === "radio" ||
            a === "switch" ||
            a === "tab")
        )
          return !0;
      }
      return !1;
    };
    function R(e) {
      return typeof document != "undefined" &&
        typeof document.contains == "function"
        ? document.contains(e)
        : !1;
    }
    function L(e) {
      for (var t = e; t != null; ) {
        if (t.tagName === "A" && t.href != null) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function E(e, t) {
      var n = e.altKey,
        r = e.ctrlKey,
        o = e.currentTarget,
        a = e.metaKey,
        i = e.shiftKey,
        l = e.target,
        s = l;
      s = R(l) ? l : o;
      var u = L(s),
        c = n || r || a || i;
      return t !== !1 && u && !c;
    }
    function k(t) {
      var n = f(null),
        o = g(!1),
        a = o[0],
        i = o[1],
        l = g(!1),
        s = l[0],
        c = l[1],
        m = g(!1),
        y = m[0],
        C = m[1],
        R = g(!1),
        L = R[0],
        k = R[1],
        D = _(r("WebPressableGroupContext")),
        x = t.accessibilityLabel,
        $ = t.accessibilityRelationship,
        P = t.accessibilityRole,
        N = t.accessibilityState,
        M = t.accessibilityValue,
        w = t.allowClickEventPropagation,
        A = w === void 0 ? !1 : w,
        F = t.children,
        O = t.className_DEPRECATED,
        B = t.disabled,
        W = t.draggable,
        q = t.forwardedRef,
        U = t.link,
        V = t.nativeID,
        H = t.onBlur,
        G = t.onContextMenu,
        z = t.onFocus,
        j = t.onFocusChange,
        K = t.onFocusVisibleChange,
        Q = t.onHoverChange,
        X = t.onHoverEnd,
        Y = t.onHoverMove,
        J = t.onHoverStart,
        Z = t.onKeyDown,
        ee = t.onPress,
        te = t.onPressChange,
        ne = t.onPressEnd,
        re = t.onPressMove,
        oe = t.onPressStart,
        ae = t.preventContextMenu,
        ie = t.preventDefault,
        le = t.style,
        se = t.suppressFocusRing,
        ue = se === void 0 ? !1 : se,
        ce = t.tabbable,
        de = t.testID,
        me = t.testOnly_state,
        pe = t.xstyle,
        _e = babelHelpers.objectWithoutPropertiesLoose(t, e),
        fe = b(P, U),
        ge = B === !0 || (N == null ? void 0 : N.disabled) === !0,
        he = N == null ? void 0 : N.hidden,
        ye = fe === "a" && ge !== !0,
        Ce = {
          disabled:
            ge === !0 || (me == null ? void 0 : me.disabled) === !0 || !1,
          focusVisible: s || (me == null ? void 0 : me.focusVisible) === !0,
          focused: a || (me == null ? void 0 : me.focused) === !0,
          hovered: y || (me == null ? void 0 : me.hovered) === !0,
          pressed: L || (me == null ? void 0 : me.pressed) === !0,
        },
        be = typeof F == "function" ? F(Ce) : F,
        ve = typeof O == "function" ? O(Ce) : O,
        Se = typeof le == "function" ? le(Ce) : le,
        Re = typeof pe == "function" ? pe(Ce) : pe;
      h(n, {
        disabled: ge,
        onBlur: H,
        onContextMenu: G,
        onFocus: z,
        onFocusChange: I(i, j),
        onFocusVisibleChange: I(c, K),
        onHoverChange: I(C, Q),
        onHoverEnd: X,
        onHoverMove: Y,
        onHoverStart: J,
        onPressChange: I(k, te),
        onPressEnd: ne,
        onPressMove: re,
        onPressStart: oe,
        preventContextMenu: ae,
        preventDefault: ie == null ? !0 : ie,
      });
      var Le = p(
          function (e) {
            (ee && ee(e),
              (ee || U != null) && A !== !0 && e.stopPropagation(),
              E(e, ie) && e.nativeEvent.preventDefault());
          },
          [A, U, ee, ie],
        ),
        Ee = p(
          function (e) {
            if ((Z && Z(e), S(e))) {
              var t = e.key;
              ((t === " " || t === "Spacebar") && e.preventDefault(),
                ee && (ee(e), e.stopPropagation()));
            }
          },
          [Z, ee],
        ),
        ke = p(
          function (e) {
            ((n.current = e),
              typeof q == "function" ? q(e) : q != null && (q.current = e));
          },
          [q],
        );
      r("useWebPressableTouchStartHandler")(n, D, Le);
      var Ie = -1;
      ge !== !0 && he !== !0 && ce !== !1 && (Ie = 0);
      var Te = U == null ? void 0 : U.download,
        De = (Te === !0 || typeof Te == "string") && ye;
      return d.jsx(
        fe,
        babelHelpers.extends({}, _e, {
          "aria-activedescendant": $ == null ? void 0 : $.activedescendant,
          "aria-busy": N == null ? void 0 : N.busy,
          "aria-checked": N == null ? void 0 : N.checked,
          "aria-controls": $ == null ? void 0 : $.controls,
          "aria-current": $ == null ? void 0 : $.current,
          "aria-describedby": $ == null ? void 0 : $.describedby,
          "aria-details": $ == null ? void 0 : $.details,
          "aria-disabled": ge === !0 && P !== "none" ? ge : void 0,
          "aria-errormessage": $ == null ? void 0 : $.errormessage,
          "aria-expanded": N == null ? void 0 : N.expanded,
          "aria-haspopup": $ == null ? void 0 : $.haspopup,
          "aria-hidden": he,
          "aria-invalid": N == null ? void 0 : N.invalid,
          "aria-label": x,
          "aria-labelledby": $ == null ? void 0 : $.labelledby,
          "aria-modal": N == null ? void 0 : N.modal,
          "aria-orientation": N == null ? void 0 : N.orientation,
          "aria-owns": $ == null ? void 0 : $.owns,
          "aria-pressed": N == null ? void 0 : N.pressed,
          "aria-readonly": N == null ? void 0 : N.readonly,
          "aria-required": N == null ? void 0 : N.required,
          "aria-selected": N == null ? void 0 : N.selected,
          "aria-valuemax": M == null ? void 0 : M.max,
          "aria-valuemin": M == null ? void 0 : M.min,
          "aria-valuenow": M == null ? void 0 : M.now,
          "aria-valuetext": M == null ? void 0 : M.text,
          attributionsrc: ye ? (U == null ? void 0 : U.attributionsrc) : void 0,
          children: be,
          className: r("joinClasses")(
            (u || (u = r("stylex")))(
              T.root,
              Ce.disabled && T.disabled,
              (!Ce.focusVisible || ue === !0) && T.focusNotVisible,
              Re,
              D && T.rootInGroup,
            ),
            ve,
          ),
          "data-testid": void 0,
          download: De ? Te : void 0,
          draggable: W,
          href: ye ? (U == null ? void 0 : U.url) : void 0,
          id: V,
          onClick: ge ? void 0 : Le,
          onKeyDown: ge ? void 0 : Ee,
          ref: ke,
          rel: ye ? (U == null ? void 0 : U.rel) : void 0,
          role: v(P),
          style: Se,
          tabIndex: Ie,
          target: ye ? (U == null ? void 0 : U.target) : void 0,
        }),
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e, t) {
      return p(
        function (n) {
          (e(n), t && t(n));
        },
        [t, e],
      );
    }
    var T = {
      disabled: { cursor: "x1h6gzvc", $$css: !0 },
      focusNotVisible: { outlineStyle: "x1t137rt", $$css: !0 },
      root: {
        WebkitTapHighlightColor: "x1i10hfl",
        alignItems: "x1qjc9v5",
        backgroundColor: "xjbqb8w",
        borderTopColor: "xjqpnuy",
        borderInlineEndColor: "xc5r6h4",
        borderBottomColor: "xqeqjp1",
        borderInlineStartColor: "x1phubyo",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopWidth: "x972fbf",
        borderInlineEndWidth: "x10w94by",
        borderBottomWidth: "x1qhh985",
        borderInlineStartWidth: "x14e42zd",
        boxSizing: "x9f619",
        cursor: "x1ypdohk",
        display: "x78zum5",
        flexBasis: "xdl72j9",
        flexDirection: "xdt5ytf",
        flexShrink: "x2lah0s",
        listStyleType: "x3ct3a4",
        listStylePosition: null,
        listStyleImage: null,
        marginTop: "xdj266r",
        marginInlineEnd: "x14z9mp",
        marginBottom: "xat24cr",
        marginInlineStart: "x1lziwak",
        minHeight: "x2lwn1j",
        minWidth: "xeuugli",
        paddingTop: "xexx8yu",
        paddingInlineEnd: "xyri2b",
        paddingBottom: "x18d9i69",
        paddingInlineStart: "x1c1uobl",
        position: "x1n2onr6",
        textAlign: "x16tdsg8",
        textDecoration: "x1hl2dhg",
        touchAction: "xggy1nq",
        zIndex: "x1ja2u2z",
        $$css: !0,
      },
      rootInGroup: { touchAction: "x5ve5x3", $$css: !0 },
    };
    l.default = k;
  },
  98,
);
