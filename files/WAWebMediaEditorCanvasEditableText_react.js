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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(74),
        n = e.layer,
        a = e.layerCenter,
        i = e.onOutsideClick,
        l = e.onSave,
        c = e.onUnselect,
        d = e.ref,
        f = e.scale,
        h = e.text,
        b = _(h),
        v = b[0],
        R = b[1],
        L = _(),
        E = L[0],
        k = L[1],
        I = p(),
        T;
      t[0] !== v || t[1] !== l
        ? ((T = function () {
            l(v.replace(/^\n+/, "").replace(/\n+$/, ""));
          }),
          (t[0] = v),
          (t[1] = l),
          (t[2] = T))
        : (T = t[2]);
      var D = T,
        x,
        $;
      (t[3] !== D || t[4] !== c
        ? ((x = function () {
            return {
              save: function () {
                (D(), c());
              },
            };
          }),
          ($ = [D, c]),
          (t[3] = D),
          (t[4] = c),
          (t[5] = x),
          (t[6] = $))
        : ((x = t[5]), ($ = t[6])),
        m(d, x, $));
      var P;
      t[7] !== E || t[8] !== D || t[9] !== i || t[10] !== c
        ? ((P = function (t) {
            E || (i == null ? void 0 : i(t)) === !1 || (D(), c());
          }),
          (t[7] = E),
          (t[8] = D),
          (t[9] = i),
          (t[10] = c),
          (t[11] = P))
        : (P = t[11]);
      var N = o("useWAWebOnOutsideClick").useOnOutsideClickRef(P),
        M;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function (t) {
            R(t.text);
          }),
          (t[12] = M))
        : (M = t[12]);
      var w = M,
        A;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function (t) {
            var e = I.current;
            e && e.replaceSelection(t);
          }),
          (t[13] = A))
        : (A = t[13]);
      var F = A,
        O;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            k(null);
          }),
          (t[14] = O))
        : (O = t[14]);
      var B = O,
        W;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = function (t) {
            k({
              menu: u.jsx(r("WAWebEmojiPanel.react"), {
                onEmoji: F,
                onFocusNext: B,
                onFocusPrev: B,
              }),
              anchor: t.target,
            });
          }),
          (t[15] = W))
        : (W = t[15]);
      var q = W,
        U = r("useWAWebStaticButtonA11y")(q),
        V = U[0],
        H = U[1],
        G = a.getX() * f.x,
        z = a.getY() * f.y,
        j;
      t[16] !== z || t[17] !== G
        ? ((j = { left: G, top: z }), (t[16] = z), (t[17] = G), (t[18] = j))
        : (j = t[18]);
      var K = j,
        Q;
      t[19] !== n
        ? ((Q = n.getTextColor().toHex()), (t[19] = n), (t[20] = Q))
        : (Q = t[20]);
      var X;
      t[21] !== n
        ? ((X = o("WAWebMediaEditorEnumsFonts").getFontStyle(n.getFont())),
          (t[21] = n),
          (t[22] = X))
        : (X = t[22]);
      var Y = X.fontFamily,
        J;
      t[23] !== n
        ? ((J = y(n.getAlignment())), (t[23] = n), (t[24] = J))
        : (J = t[24]);
      var Z;
      t[25] !== n
        ? ((Z = n.getStyles()), (t[25] = n), (t[26] = Z))
        : (Z = t[26]);
      var ee = Z.lineHorizontalPadding + 1,
        te;
      t[27] !== n
        ? ((te = n.getStyles()), (t[27] = n), (t[28] = te))
        : (te = t[28]);
      var ne = te.lineHorizontalPadding + 1,
        re;
      t[29] !== n
        ? ((re = n.getTextBackground()
            ? n.getTextBackgroundColor().toHex()
            : void 0),
          (t[29] = n),
          (t[30] = re))
        : (re = t[30]);
      var oe;
      t[31] !== Q ||
      t[32] !== X.fontFamily ||
      t[33] !== J ||
      t[34] !== ee ||
      t[35] !== ne ||
      t[36] !== re
        ? ((oe = {
            color: Q,
            fontFamily: Y,
            textAlign: J,
            paddingLeft: ee,
            paddingRight: ne,
            paddingTop: 1,
            paddingBottom: 1,
            borderWidth: 0,
            borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalfPlus,
            margin: 0,
            boxSizing: "border-box",
            backgroundColor: re,
          }),
          (t[31] = Q),
          (t[32] = X.fontFamily),
          (t[33] = J),
          (t[34] = ee),
          (t[35] = ne),
          (t[36] = re),
          (t[37] = oe))
        : (oe = t[37]);
      var ae = oe,
        ie;
      if (t[38] !== n || t[39] !== ae) {
        var le = n.getStyles().backgroundShadow;
        ((ie = babelHelpers.extends({}, ae, {
          boxShadow: n.getTextBackground()
            ? le.offsetX +
              "px " +
              le.offsetY +
              "px " +
              le.radius +
              "px " +
              le.spread +
              "px " +
              le.color.toRgbaString()
            : void 0,
        })),
          (t[38] = n),
          (t[39] = ae),
          (t[40] = ie));
      } else ie = t[40];
      var se = ie,
        ue = S(ae),
        ce;
      t[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = s._(/*BTDS*/ "Type something")), (t[41] = ce))
        : (ce = t[41]);
      var de = ce,
        me;
      t[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = "x10l6tqk x78zum5 x6s0dn4 xl56j7k xnalus7 xqtp20y"),
          (t[42] = me))
        : (me = t[42]);
      var pe, _e;
      t[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe = {
            className:
              "x9f619 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xtze7p7 x1vljpgm xmsdxl7 x72u2kh x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xamhcws x1alpsbp xlxy82 xyumdvf x1tiyuxx x1uc92m x1nbhmlj x181vq82",
          }),
          (_e = { className: "x1n2onr6" }),
          (t[43] = pe),
          (t[44] = _e))
        : ((pe = t[43]), (_e = t[44]));
      var fe;
      t[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = "xuuh30 x1uvocx6 x10l6tqk xbudbmw x7y3cno"), (t[45] = fe))
        : (fe = t[45]);
      var ge;
      t[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = u.jsx("div", {
            className:
              "x1ypdohk x1hqk2wv x1c9tyrk xeusxvb x1pahc9y x1ertn4p x11q5tta x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
            children: u.jsx(r("WDSIconIcMood.react"), {}),
          })),
          (t[46] = ge))
        : (ge = t[46]);
      var he;
      t[47] !== H || t[48] !== V
        ? ((he = u.jsx(
            "div",
            babelHelpers.extends({ className: fe }, H, {
              ref: V,
              children: ge,
            }),
          )),
          (t[47] = H),
          (t[48] = V),
          (t[49] = he))
        : (he = t[49]);
      var ye;
      t[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((ye =
            "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 x1szn6h9 xh8yej3 x5yr21d xrxyp3c xv0oops x1isl5vh xn8zj9a"),
          (t[50] = ye))
        : (ye = t[50]);
      var Ce;
      t[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = u.jsx(r("WAWebRichTextInputPlugins.react"), {})), (t[51] = Ce))
        : (Ce = t[51]);
      var be;
      t[52] !== v || t[53] !== D || t[54] !== ue
        ? ((be = u.jsx(
            r("WAWebRichTextInput.react"),
            {
              ref: I,
              textXstyle: g.inputText,
              initialText: v,
              onChange: w,
              onEnter: D,
              multiline: !0,
              focusOnMount: !0,
              placeholder: de,
              children: Ce,
            },
            ue,
          )),
          (t[52] = v),
          (t[53] = D),
          (t[54] = ue),
          (t[55] = be))
        : (be = t[55]);
      var ve;
      t[56] !== se || t[57] !== be
        ? ((ve = u.jsx("div", { className: ye, style: se, children: be })),
          (t[56] = se),
          (t[57] = be),
          (t[58] = ve))
        : (ve = t[58]);
      var Se;
      t[59] !== v || t[60] !== n || t[61] !== ae
        ? ((Se = u.jsx(C, {
            layer: n,
            draftText: v,
            placeholderText: de,
            textStyle: ae,
          })),
          (t[59] = v),
          (t[60] = n),
          (t[61] = ae),
          (t[62] = Se))
        : (Se = t[62]);
      var Re;
      t[63] !== N || t[64] !== he || t[65] !== ve || t[66] !== Se
        ? ((Re = u.jsx(
            "div",
            babelHelpers.extends({}, pe, {
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, _e, {
                  ref: N,
                  children: [he, ve, Se],
                }),
              ),
            }),
          )),
          (t[63] = N),
          (t[64] = he),
          (t[65] = ve),
          (t[66] = Se),
          (t[67] = Re))
        : (Re = t[67]);
      var Le;
      t[68] !== E
        ? ((Le =
            E &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: B,
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: babelHelpers.extends(
                  {
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    type: o("WAWebDropdown.react").MenuType.EmojiPicker,
                  },
                  E,
                ),
              }),
            })),
          (t[68] = E),
          (t[69] = Le))
        : (Le = t[69]);
      var Ee;
      return (
        t[70] !== K || t[71] !== Re || t[72] !== Le
          ? ((Ee = u.jsxs("div", {
              className: me,
              style: K,
              children: [Re, Le],
            })),
            (t[70] = K),
            (t[71] = Re),
            (t[72] = Le),
            (t[73] = Ee))
          : (Ee = t[73]),
        Ee
      );
    }
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
      var t = o("react-compiler-runtime").c(10),
        n = e.draftText,
        r = e.layer,
        a = e.placeholderText,
        i = e.textStyle,
        l;
      t[0] !== i
        ? ((l = babelHelpers.extends({}, i, {
            fontSize: "17px",
            lineHeight: "25px",
            padding: "0 10px",
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s = l;
      if (!n) {
        var c;
        (t[2] !== s
          ? ((c = babelHelpers.extends({}, s, {
              fontFamily: void 0,
              padding: "0 14px",
            })),
            (t[2] = s),
            (t[3] = c))
          : (c = t[3]),
          (s = c));
      }
      var d;
      if (t[4] !== n || t[5] !== r || t[6] !== a || t[7] !== s) {
        var m = n || a.toString(),
          p;
        (t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = "x9f619 x126k92a xlshs6z"), (t[9] = p))
          : (p = t[9]),
          (d = u.jsx("div", {
            className: p,
            style: s,
            children: o("WAWebMediaEditorUtilsTextInCanvas")
              .getLines(m, r.getFont(), r.getFontSize(), 0)
              .map(b),
          })),
          (t[4] = n),
          (t[5] = r),
          (t[6] = a),
          (t[7] = s),
          (t[8] = d));
      } else d = t[8];
      return d;
    }
    function b(e, t) {
      return u.jsx(
        "div",
        {
          className: "x1sdyfia",
          children: e.words.length === 0 ? " " : e.words.map(v),
        },
        t,
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return e.emojiPath != null
        ? u.jsx("span", { className: "x1rg5ohu xezl2tj x17rw0jw" }, t)
        : e.text;
    }
    function S(e) {
      var t = r("useWAWebPrevious")(e),
        n = p(0);
      return (t && !r("lodash").isEqual(t, e) && (n.current += 1), n.current);
    }
    l.default = h;
  },
  226,
);
