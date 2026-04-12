__d(
  "WAWebMediaEditorCanvasEditableText.react",
  [
    "fbt",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorUtilsTextInCanvas",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSIconIcMood.react",
    "WDSVars.stylex",
    "lodash",
    "react",
    "useWAWebOnOutsideClick",
    "useWAWebPrevious",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = 2,
      g = { inputText: { fontSize: "x1lkfr7t", $$css: !0 } };
    function h(e) {
      var t = e.layer,
        n = e.layerCenter,
        a = e.onOutsideClick,
        i = e.onSave,
        l = e.onUnselect,
        c = e.ref,
        f = e.scale,
        h = e.text,
        v = _(h),
        S = v[0],
        R = v[1],
        L = _(),
        E = L[0],
        k = L[1],
        I = p(),
        T = d(
          function () {
            i(S.replace(/^\n+/, "").replace(/\n+$/, ""));
          },
          [i, S],
        );
      m(
        c,
        function () {
          return {
            save: function () {
              (T(), l());
            },
          };
        },
        [T, l],
      );
      var D = o("useWAWebOnOutsideClick").useOnOutsideClickRef(function (e) {
          E || (a == null ? void 0 : a(e)) === !1 || (T(), l());
        }),
        x = function (t) {
          R(t.text);
        },
        $ = function (t) {
          var e = I.current;
          e && e.replaceSelection(t);
        },
        P = function () {
          k(null);
        },
        N = function (t) {
          k({
            menu: u.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: $,
              onFocusNext: P,
              onFocusPrev: P,
            }),
            anchor: t.target,
          });
        },
        M = r("useWAWebStaticButtonA11y")(N),
        w = M[0],
        A = M[1],
        F = { left: n.getX() * f.x, top: n.getY() * f.y },
        O = {
          color: t.getTextColor().toHex(),
          fontFamily: o("WAWebMediaEditorEnumsFonts").getFontStyle(t.getFont())
            .fontFamily,
          textAlign: y(t.getAlignment()),
          paddingLeft: t.getStyles().lineHorizontalPadding + 1,
          paddingRight: t.getStyles().lineHorizontalPadding + 1,
          paddingTop: 1,
          paddingBottom: 1,
          borderWidth: 0,
          borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalfPlus,
          margin: 0,
          boxSizing: "border-box",
          backgroundColor: t.getTextBackground()
            ? t.getTextBackgroundColor().toHex()
            : void 0,
        },
        B = t.getStyles().backgroundShadow,
        W = babelHelpers.extends({}, O, {
          boxShadow: t.getTextBackground()
            ? B.offsetX +
              "px " +
              B.offsetY +
              "px " +
              B.radius +
              "px " +
              B.spread +
              "px " +
              B.color.toRgbaString()
            : void 0,
        }),
        q = b(O),
        U = s._(/*BTDS*/ "Type something");
      return u.jsxs("div", {
        className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k xnalus7 xqtp20y",
        style: F,
        children: [
          u.jsx("div", {
            className:
              "x9f619 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xtze7p7 x1vljpgm xmsdxl7 x72u2kh x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xamhcws x1alpsbp xlxy82 xyumdvf x1tiyuxx x1uc92m x1nbhmlj x181vq82",
            children: u.jsxs("div", {
              className: "x1n2onr6",
              ref: D,
              children: [
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    { className: "xuuh30 x1uvocx6 x10l6tqk xbudbmw x7y3cno" },
                    A,
                    {
                      ref: w,
                      children: u.jsx("div", {
                        className:
                          "x1ypdohk x1hqk2wv x1c9tyrk xeusxvb x1pahc9y x1ertn4p x11q5tta x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
                        children: u.jsx(r("WDSIconIcMood.react"), {}),
                      }),
                    },
                  ),
                ),
                u.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 x1szn6h9 xh8yej3 x5yr21d xrxyp3c xv0oops x1isl5vh xn8zj9a",
                  style: W,
                  children: u.jsx(
                    r("WAWebRichTextInput.react"),
                    {
                      ref: I,
                      textXstyle: g.inputText,
                      initialText: S,
                      onChange: x,
                      onEnter: T,
                      multiline: !0,
                      focusOnMount: !0,
                      placeholder: U,
                      children: u.jsx(r("WAWebRichTextInputPlugins.react"), {}),
                    },
                    q,
                  ),
                }),
                u.jsx(C, {
                  layer: t,
                  draftText: S,
                  placeholderText: U,
                  textStyle: O,
                }),
              ],
            }),
          }),
          E &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: P,
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: babelHelpers.extends(
                  {
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    type: o("WAWebDropdown.react").MenuType.EmojiPicker,
                  },
                  E,
                ),
              }),
            }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      switch (e) {
        case o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT:
          return "left";
        case o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER:
          return "center";
        case o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT:
          return "right";
      }
    }
    function C(e) {
      var t = e.draftText,
        n = e.layer,
        r = e.placeholderText,
        a = e.textStyle,
        i = babelHelpers.extends({}, a, {
          fontSize: "17px",
          lineHeight: "25px",
          padding: "0 10px",
        });
      t ||
        (i = babelHelpers.extends({}, i, {
          fontFamily: void 0,
          padding: "0 14px",
        }));
      var l = t || r.toString();
      return u.jsx("div", {
        className: "x9f619 x126k92a xlshs6z",
        style: i,
        children: o("WAWebMediaEditorUtilsTextInCanvas")
          .getLines(l, n.getFont(), n.getFontSize(), 0)
          .map(function (e, t) {
            return u.jsx(
              "div",
              {
                className: "x1sdyfia",
                children:
                  e.words.length === 0
                    ? " "
                    : e.words.map(function (e, t) {
                        return e.emojiPath != null
                          ? u.jsx(
                              "span",
                              { className: "x1rg5ohu xezl2tj x17rw0jw" },
                              t,
                            )
                          : e.text;
                      }),
              },
              t,
            );
          }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = r("useWAWebPrevious")(e),
        n = p(0);
      return (t && !r("lodash").isEqual(t, e) && (n.current += 1), n.current);
    }
    l.default = h;
  },
  226,
);
