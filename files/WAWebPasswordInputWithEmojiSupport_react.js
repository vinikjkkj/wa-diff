__d(
  "WAWebPasswordInputWithEmojiSupport.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButton.react",
    "WDSIconIcMood.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime",
    "react-gui-use-focus",
    "stylex",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = {
        inputField: {
          fontSize: "x1jchvi3",
          color: "x14ug900",
          flexGrow: "x1iyjqo2",
          borderTopWidth: "xsl91qr",
          borderInlineEndWidth: "x1aq9cx1",
          borderBottomWidth: "xe0m388",
          borderInlineStartWidth: "xhe8bae",
          borderTopStyle: "xe73qa2",
          borderInlineEndStyle: "xsgwwv8",
          borderBottomStyle: "xuhg6hn",
          borderInlineStartStyle: "xli3dgm",
          borderTopColor: "x1isl193",
          borderInlineEndColor: "x1e225iy",
          borderBottomColor: "x1bnlyaz",
          borderInlineStartColor: "x12ws5rt",
          outline: "x1a2a7pz",
          backgroundColor: "xk7ee7b",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        emojiButton: { color: "x1v5yvga", alignSelf: "xamitd3", $$css: !0 },
        accentIconColor: { color: "x1v5yvga", $$css: !0 },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.iconXstyle
        ? ((n = [e.iconXstyle, g.accentIconColor]),
          (t[0] = e.iconXstyle),
          (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = d.jsx(
              r("WDSIconIcVisibility.react"),
              babelHelpers.extends({}, e, { iconXstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.iconXstyle
        ? ((n = [e.iconXstyle, g.accentIconColor]),
          (t[0] = e.iconXstyle),
          (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = d.jsx(
              r("WDSIconIcVisibilityOff.react"),
              babelHelpers.extends({}, e, { iconXstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function C(t) {
      var n = o("react-compiler-runtime").c(46),
        a = t.enableShowPassword,
        i = t.focusOnMount,
        l = t.onEmojiInserted,
        s = t.showByDefault,
        c = a === void 0 ? !1 : a,
        m = i === void 0 ? !1 : i,
        C = s === void 0 ? !1 : s,
        v = r("useWAWebToggle")(C),
        S = v[0],
        R = v[1],
        L = _(null),
        E = f(!1),
        k = E[0],
        I = E[1],
        T;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { onFocusChange: I }), (n[0] = T))
        : (T = n[0]);
      var D = o("react-gui-use-focus").useFocus(T),
        x = r("useMergeRefs")(L, D),
        $ = r("useWAWebIsKeyboardUser")(),
        P = $.isKeyboardUser,
        N;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            var e;
            (e = L.current) == null || e.focus();
          }),
          (n[1] = N))
        : (N = n[1]);
      var M = N,
        w,
        A;
      (n[2] !== m
        ? ((w = function () {
            m && M();
          }),
          (A = [m]),
          (n[2] = m),
          (n[3] = w),
          (n[4] = A))
        : ((w = n[3]), (A = n[4])),
        p(w, A));
      var F = S ? h : y,
        O;
      n[5] !== S
        ? ((O = S ? u._(/*BTDS*/ "Hide") : u._(/*BTDS*/ "Show")),
          (n[5] = S),
          (n[6] = O))
        : (O = n[6]);
      var B = O,
        W = _(null),
        q = f(null),
        U = q[0],
        V = q[1],
        H,
        G;
      n[7] !== P || n[8] !== l
        ? ((H = function (t) {
            var e = L.current;
            if (e) {
              e.focus();
              var n = e.selectionStart,
                r = e.selectionEnd,
                o = e.value;
              ((e.value = o.substring(0, n) + t + o.substring(r)),
                e.setSelectionRange(r + t.length, r + t.length),
                l == null || l(e.value));
            }
            P && G();
          }),
          (G = function () {
            (V(null), P && M());
          }),
          (n[7] = P),
          (n[8] = l),
          (n[9] = H),
          (n[10] = G))
        : ((H = n[9]), (G = n[10]));
      var z = null;
      if (U) {
        var j;
        n[11] !== U
          ? ((j = d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: U })),
            (n[11] = U),
            (n[12] = j))
          : (j = n[12]);
        var K;
        (n[13] !== G || n[14] !== j
          ? ((K = d.jsx(o("WAWebUimUie.react").UIE, {
              dismissOnWindowResize: !0,
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              ref: W,
              requestDismiss: G,
              children: j,
            })),
            (n[13] = G),
            (n[14] = j),
            (n[15] = K))
          : (K = n[15]),
          (z = K));
      }
      var Q;
      n[16] !== H
        ? ((Q = function (t) {
            (t.preventDefault(), t.stopPropagation());
            var e = d.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: H,
              onFocusNext: M,
              onFocusPrev: M,
            });
            (V({
              menu: e,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              type: o("WAWebDropdown.react").MenuType.EmojiPicker,
              anchor: t.target,
            }),
              M());
          }),
          (n[16] = H),
          (n[17] = Q))
        : (Q = n[17]);
      var X = Q,
        Y;
      n[18] !== k
        ? ((Y = {
            0: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84",
            },
            1: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69",
            },
          }[!!k << 0]),
          (n[18] = k),
          (n[19] = Y))
        : (Y = n[19]);
      var J;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_aupe",
            (e || (e = r("stylex")))(
              g.inputField,
              o("WAWebUISpacing").uiPadding.all6,
            ),
          )),
          (n[20] = J))
        : (J = n[20]);
      var Z = S ? "text" : "password",
        ee;
      n[21] !== x ||
      n[22] !== t.onBlur ||
      n[23] !== t.onChange ||
      n[24] !== t.onKeyDown ||
      n[25] !== t.pattern ||
      n[26] !== t.placeholder ||
      n[27] !== t.required ||
      n[28] !== t.testid ||
      n[29] !== t.title ||
      n[30] !== t.value ||
      n[31] !== Z
        ? ((ee = d.jsx("input", {
            className: J,
            "data-testid": void 0,
            onBlur: t.onBlur,
            onChange: t.onChange,
            onKeyDown: t.onKeyDown,
            pattern: t.pattern,
            placeholder: t.placeholder,
            ref: x,
            required: t.required,
            title: t.title,
            type: Z,
            value: t.value,
          })),
          (n[21] = x),
          (n[22] = t.onBlur),
          (n[23] = t.onChange),
          (n[24] = t.onKeyDown),
          (n[25] = t.pattern),
          (n[26] = t.placeholder),
          (n[27] = t.required),
          (n[28] = t.testid),
          (n[29] = t.title),
          (n[30] = t.value),
          (n[31] = Z),
          (n[32] = ee))
        : (ee = n[32]);
      var te;
      n[33] !== F || n[34] !== B || n[35] !== c || n[36] !== R
        ? ((te =
            c &&
            d.jsx(r("WDSButton.react"), {
              Icon: F,
              "aria-label": B,
              xstyle: o("WAWebUISpacing").uiMargin.end8,
              onPress: R,
              variant: "borderless",
            })),
          (n[33] = F),
          (n[34] = B),
          (n[35] = c),
          (n[36] = R),
          (n[37] = te))
        : (te = n[37]);
      var ne;
      n[38] !== X
        ? ((ne = d.jsx(b, { onClick: X })), (n[38] = X), (n[39] = ne))
        : (ne = n[39]);
      var re;
      return (
        n[40] !== ee ||
        n[41] !== te ||
        n[42] !== ne ||
        n[43] !== Y ||
        n[44] !== z
          ? ((re = d.jsxs(
              "div",
              babelHelpers.extends({}, Y, { children: [ee, te, ne, z] }),
            )),
            (n[40] = ee),
            (n[41] = te),
            (n[42] = ne),
            (n[43] = Y),
            (n[44] = z),
            (n[45] = re))
          : (re = n[45]),
        re
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u._(/*BTDS*/ "Open emojis panel")), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = d.jsx(r("WDSIconIcMood.react"), {})), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n
          ? ((l = d.jsx(o("WAWebClickable.react").Clickable, {
              onClick: n,
              title: a,
              xstyle: g.emojiButton,
              children: i,
            })),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = C;
  },
  226,
);
