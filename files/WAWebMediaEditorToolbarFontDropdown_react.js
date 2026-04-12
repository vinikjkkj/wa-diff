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
      var n = t.font,
        a = t.isSelectedFont,
        i = t.onAction,
        l;
      a &&
        (l = u.jsx("span", {
          className: "x10l6tqk xyc4j8s xeer0ze",
          children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
            displayInline: !0,
          }),
        }));
      var s = o("WAWebMediaEditorEnumsFonts").getFontTranslation(n),
        c;
      switch (n) {
        case o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF:
          c = (e || (e = r("stylex")))(o("WAWebUISpacing").uiMargin.top0);
          break;
        case o("WAWebMediaEditorEnumsFonts").FontType.SERIF:
          c = (e || (e = r("stylex")))(o("WAWebUISpacing").uiMargin.top2);
          break;
        case o("WAWebMediaEditorEnumsFonts").FontType.NORICAN_REGULAR:
          c = (e || (e = r("stylex")))(
            m.noricanRegular,
            o("WAWebUISpacing").uiMargin.top4,
          );
          break;
        case o("WAWebMediaEditorEnumsFonts").FontType.BRYNDAN_WRITE:
          c = "xe9ewy2 xngnso2";
          break;
        case o("WAWebMediaEditorEnumsFonts").FontType.OSWALD_HEAVY:
          c = "x1kgmq87 x1603h9y";
          break;
      }
      return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: function (t) {
          return i(t, n);
        },
        children: u.jsxs("div", {
          role: "button",
          className: (e || (e = r("stylex")))(
            m.item,
            o("WAWebUISpacing").uiPadding.top13,
            o("WAWebUISpacing").uiPadding.start24,
          ),
          style: o("WAWebMediaEditorEnumsFonts").getFontStyle(n),
          children: [u.jsx("span", { className: c, children: s }), l],
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.onAction,
        a = t.selectedAlignment;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        className: (e || (e = r("stylex")))(
          m.alignmentContainer,
          o("WAWebUISpacing").uiPadding.top9,
        ),
        justify: "around",
        align: "center",
        children: d.map(function (e) {
          var t = e.alignment,
            i = e.icon;
          return u.jsx(
            r("WAWebFlexItem.react"),
            {
              children: u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                action: function (r) {
                  return n(r, t);
                },
                children: u.jsx(i, {
                  iconXstyle: a ? m.alignmentIconSelected : m.alignmentIcon,
                }),
              }),
            },
            t,
          );
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.onAlignmentSelect,
        n = e.onFontSelect,
        r = e.selectedAlignment,
        a = e.selectedFont,
        i = e.showAlignmentOptions;
      c(function () {
        o("WAWebFontLoader").FontLoader.loadAllFonts();
      }, []);
      var l = function (t, r) {
          (t.stopPropagation(), n(r));
        },
        s = function (n, r) {
          (n.stopPropagation(), t(r));
        };
      return u.jsxs("div", {
        children: [
          e.fonts.map(function (e) {
            return u.jsx(
              p,
              { font: e, isSelectedFont: a === e, onAction: l },
              e,
            );
          }),
          i && u.jsx(_, { selectedAlignment: r, onAction: s }, "alignment"),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
