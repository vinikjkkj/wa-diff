__d(
  "WAWebMediaEditorToolbarFontDropdown.react",
  [
    "WAWebAlignCenterIcon.react",
    "WAWebAlignLeftIcon.react",
    "WAWebAlignRightIcon.react",
    "WAWebCheckmarkIcon.react",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFontLoader",
    "WAWebMediaEditorEnumsFonts",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useEffect,
      d = [
        {
          alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT,
          icon: o("WAWebAlignLeftIcon.react").AlignLeftIcon,
        },
        {
          alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER,
          icon: o("WAWebAlignCenterIcon.react").AlignCenterIcon,
        },
        {
          alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT,
          icon: o("WAWebAlignRightIcon.react").AlignRightIcon,
        },
      ],
      m = {
        noricanRegular: { marginInlineStart: "x4h0osi", $$css: !0 },
        item: {
          boxSizing: "x9f619",
          display: "x1lliihq",
          height: "x1vqgdyp",
          paddingInlineEnd: "x1ikfw9c",
          fontSize: "x7yx35o",
          lineHeight: "xwgyvy0",
          color: "x14ug900",
          whiteSpace: "xuxw1ft",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        alignmentContainer: {
          height: "x1vqgdyp",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        alignmentIconSelected: { opacity: "x1hc1fzr", $$css: !0 },
        alignmentIcon: { opacity: "x197sbye", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.font,
        i = t.isSelectedFont,
        l = t.onAction,
        s;
      if (i) {
        var c;
        (n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = u.jsx("span", {
              className: "x10l6tqk xyc4j8s xeer0ze",
              children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                displayInline: !0,
              }),
            })),
            (n[0] = c))
          : (c = n[0]),
          (s = c));
      }
      var d;
      n[1] !== a
        ? ((d = o("WAWebMediaEditorEnumsFonts").getFontTranslation(a)),
          (n[1] = a),
          (n[2] = d))
        : (d = n[2]);
      var p = d,
        _;
      e: switch (a) {
        case o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF: {
          var f;
          (n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (e || (e = r("stylex")))(
                o("WAWebUISpacing").uiMargin.top0,
              )),
              (n[3] = f))
            : (f = n[3]),
            (_ = f));
          break e;
        }
        case o("WAWebMediaEditorEnumsFonts").FontType.SERIF: {
          var g;
          (n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (e || (e = r("stylex")))(
                o("WAWebUISpacing").uiMargin.top2,
              )),
              (n[4] = g))
            : (g = n[4]),
            (_ = g));
          break e;
        }
        case o("WAWebMediaEditorEnumsFonts").FontType.NORICAN_REGULAR: {
          var h;
          (n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (e || (e = r("stylex")))(
                m.noricanRegular,
                o("WAWebUISpacing").uiMargin.top4,
              )),
              (n[5] = h))
            : (h = n[5]),
            (_ = h));
          break e;
        }
        case o("WAWebMediaEditorEnumsFonts").FontType.BRYNDAN_WRITE: {
          var y;
          (n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = "xe9ewy2 xngnso2"), (n[6] = y))
            : (y = n[6]),
            (_ = y));
          break e;
        }
        case o("WAWebMediaEditorEnumsFonts").FontType.OSWALD_HEAVY: {
          var C;
          (n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = "x1kgmq87 x1603h9y"), (n[7] = C))
            : (C = n[7]),
            (_ = C));
        }
      }
      var b;
      n[8] !== a || n[9] !== l
        ? ((b = function (t) {
            return l(t, a);
          }),
          (n[8] = a),
          (n[9] = l),
          (n[10] = b))
        : (b = n[10]);
      var v;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e || (e = r("stylex")))(
            m.item,
            o("WAWebUISpacing").uiPadding.top13,
            o("WAWebUISpacing").uiPadding.start24,
          )),
          (n[11] = v))
        : (v = n[11]);
      var S;
      n[12] !== a
        ? ((S = o("WAWebMediaEditorEnumsFonts").getFontStyle(a)),
          (n[12] = a),
          (n[13] = S))
        : (S = n[13]);
      var R;
      n[14] !== _ || n[15] !== p
        ? ((R = u.jsx("span", { className: _, children: p })),
          (n[14] = _),
          (n[15] = p),
          (n[16] = R))
        : (R = n[16]);
      var L;
      n[17] !== s || n[18] !== S || n[19] !== R
        ? ((L = u.jsxs("div", {
            role: "button",
            className: v,
            style: S,
            children: [R, s],
          })),
          (n[17] = s),
          (n[18] = S),
          (n[19] = R),
          (n[20] = L))
        : (L = n[20]);
      var E;
      return (
        n[21] !== b || n[22] !== L
          ? ((E = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: b,
              children: L,
            })),
            (n[21] = b),
            (n[22] = L),
            (n[23] = E))
          : (E = n[23]),
        E
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.onAction,
        i = t.selectedAlignment,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex")))(
            m.alignmentContainer,
            o("WAWebUISpacing").uiPadding.top9,
          )),
          (n[0] = l))
        : (l = n[0]);
      var s;
      n[1] !== a || n[2] !== i
        ? ((s = d.map(function (e) {
            var t = e.alignment,
              n = e.icon;
            return u.jsx(
              r("WAWebFlexItem.react"),
              {
                children: u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                  action: function (n) {
                    return a(n, t);
                  },
                  children: u.jsx(n, {
                    iconXstyle: i ? m.alignmentIconSelected : m.alignmentIcon,
                  }),
                }),
              },
              t,
            );
          })),
          (n[1] = a),
          (n[2] = i),
          (n[3] = s))
        : (s = n[3]);
      var c;
      return (
        n[4] !== s
          ? ((c = u.jsx(o("WAWebFlex.react").FlexRow, {
              className: l,
              justify: "around",
              align: "center",
              children: s,
            })),
            (n[4] = s),
            (n[5] = c))
          : (c = n[5]),
        c
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.onAlignmentSelect,
        r = e.onFontSelect,
        a = e.selectedAlignment,
        i = e.selectedFont,
        l = e.showAlignmentOptions,
        s;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = []), (t[0] = s))
        : (s = t[0]),
        c(g, s));
      var d;
      t[1] !== r
        ? ((d = function (t, n) {
            (t.stopPropagation(), r(n));
          }),
          (t[1] = r),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        f;
      t[3] !== n
        ? ((f = function (t, r) {
            (t.stopPropagation(), n(r));
          }),
          (t[3] = n),
          (t[4] = f))
        : (f = t[4]);
      var h = f,
        y;
      if (t[5] !== m || t[6] !== e.fonts || t[7] !== i) {
        var C;
        (t[9] !== m || t[10] !== i
          ? ((C = function (t) {
              return u.jsx(
                p,
                { font: t, isSelectedFont: i === t, onAction: m },
                t,
              );
            }),
            (t[9] = m),
            (t[10] = i),
            (t[11] = C))
          : (C = t[11]),
          (y = e.fonts.map(C)),
          (t[5] = m),
          (t[6] = e.fonts),
          (t[7] = i),
          (t[8] = y));
      } else y = t[8];
      var b;
      t[12] !== h || t[13] !== a || t[14] !== l
        ? ((b =
            l && u.jsx(_, { selectedAlignment: a, onAction: h }, "alignment")),
          (t[12] = h),
          (t[13] = a),
          (t[14] = l),
          (t[15] = b))
        : (b = t[15]);
      var v;
      return (
        t[16] !== y || t[17] !== b
          ? ((v = u.jsxs("div", { children: [y, b] })),
            (t[16] = y),
            (t[17] = b),
            (t[18] = v))
          : (v = t[18]),
        v
      );
    }
    function g() {
      o("WAWebFontLoader").FontLoader.loadAllFonts();
    }
    l.default = f;
  },
  98,
);
