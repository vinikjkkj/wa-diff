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
      return d.jsx(
        r("WDSIconIcVisibility.react"),
        babelHelpers.extends({}, e, {
          iconXstyle: [e.iconXstyle, g.accentIconColor],
        }),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return d.jsx(
        r("WDSIconIcVisibilityOff.react"),
        babelHelpers.extends({}, e, {
          iconXstyle: [e.iconXstyle, g.accentIconColor],
        }),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n = t.enableShowPassword,
        a = n === void 0 ? !1 : n,
        i = t.focusOnMount,
        l = i === void 0 ? !1 : i,
        s = t.onEmojiInserted,
        c = t.showByDefault,
        m = c === void 0 ? !1 : c,
        C = r("useWAWebToggle")(m),
        v = C[0],
        S = C[1],
        R = _(null),
        L = f(!1),
        E = L[0],
        k = L[1],
        I = o("react-gui-use-focus").useFocus({ onFocusChange: k }),
        T = r("useMergeRefs")(R, I),
        D = r("useWAWebIsKeyboardUser")(),
        x = D.isKeyboardUser,
        $ = function () {
          var e;
          (e = R.current) == null || e.focus();
        };
      p(
        function () {
          l && $();
        },
        [l],
      );
      var P = v ? h : y,
        N = v ? u._(/*BTDS*/ "Hide") : u._(/*BTDS*/ "Show"),
        M = _(null),
        w = f(null),
        A = w[0],
        F = w[1],
        O = function (t) {
          var e = R.current;
          if (e) {
            e.focus();
            var n = e.selectionStart,
              r = e.selectionEnd,
              o = e.value;
            ((e.value = o.substring(0, n) + t + o.substring(r)),
              e.setSelectionRange(r + t.length, r + t.length),
              s == null || s(e.value));
          }
          x && B();
        },
        B = function () {
          (F(null), x && $());
        },
        W = null;
      A &&
        (W = d.jsx(o("WAWebUimUie.react").UIE, {
          dismissOnWindowResize: !0,
          displayName: "EmojiPicker",
          escapable: !0,
          popable: !0,
          ref: M,
          requestDismiss: B,
          children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: A }),
        }));
      var q = function (t) {
        (t.preventDefault(), t.stopPropagation());
        var e = d.jsx(r("WAWebEmojiPanel.react"), {
          onEmoji: O,
          onFocusNext: $,
          onFocusPrev: $,
        });
        (F({
          menu: e,
          dirY: o("WAWebDropdown.react").DirY.TOP,
          type: o("WAWebDropdown.react").MenuType.EmojiPicker,
          anchor: t.target,
        }),
          $());
      };
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84",
            },
            1: {
              className:
                "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69",
            },
          }[!!E << 0],
          {
            children: [
              d.jsx("input", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "_aupe",
                  (e || (e = r("stylex")))(
                    g.inputField,
                    o("WAWebUISpacing").uiPadding.all6,
                  ),
                ),
                "data-testid": void 0,
                onBlur: t.onBlur,
                onChange: t.onChange,
                onKeyDown: t.onKeyDown,
                pattern: t.pattern,
                placeholder: t.placeholder,
                ref: T,
                required: t.required,
                title: t.title,
                type: v ? "text" : "password",
                value: t.value,
              }),
              a &&
                d.jsx(r("WDSButton.react"), {
                  Icon: P,
                  "aria-label": N,
                  xstyle: o("WAWebUISpacing").uiMargin.end8,
                  onPress: S,
                  variant: "borderless",
                }),
              d.jsx(b, { onClick: q }),
              W,
            ],
          },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.onClick;
      return d.jsx(o("WAWebClickable.react").Clickable, {
        onClick: t,
        title: u._(/*BTDS*/ "Open emojis panel"),
        xstyle: g.emojiButton,
        children: d.jsx(r("WDSIconIcMood.react"), {}),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
