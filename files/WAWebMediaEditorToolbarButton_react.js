__d(
  "WAWebMediaEditorToolbarButton.react",
  [
    "WAWebChevronCustomIcons",
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarColor.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          color: "x1heor9g",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          fontSize: "x6prxxf",
          lineHeight: "x152skdk",
          cursor: "x1ypdohk",
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          ":hover_backgroundColor": "x1ubxc9n",
          ":active_backgroundColor": "x11xlx4c",
          $$css: !0,
        },
        selected: { backgroundColor: "x4wrhlh", $$css: !0 },
        disabled: {
          opacity: "xbyyjgo",
          ":hover_backgroundColor": "x1n5bzlp",
          ":active_backgroundColor": "xyftt0y",
          $$css: !0,
        },
        icon: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(25),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.children,
        m = l.onClick,
        p = l.icon,
        _ = l.caret,
        f = l.disabled,
        g = l.title,
        h = l.selected,
        y = l.theme,
        C = l.testid,
        b = f === void 0 ? !1 : f,
        v = h === void 0 ? !1 : h,
        S =
          y === void 0
            ? o("WAWebMediaEditorToolbarColor.react").Theme.Default
            : y,
        R = C === void 0 ? "" : C,
        L;
      if (_)
        e: switch (_) {
          case "up": {
            var E;
            (n[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = c.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                  displayInline: !0,
                  height: 24,
                })),
                (n[3] = E))
              : (E = n[3]),
              (L = E));
            break e;
          }
          case "down": {
            var k;
            (n[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = c.jsx(
                  o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                  { displayInline: !0, height: 24 },
                )),
                (n[4] = k))
              : (k = n[4]),
              (L = k));
            break e;
          }
          default:
        }
      var I;
      n[5] !== b || n[6] !== a.xstyle || n[7] !== v || n[8] !== S
        ? ((I = (s || (s = r("stylex"))).props(
            d.container,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            S === o("WAWebMediaEditorToolbarColor.react").Theme.Default &&
              d.paddingAll8,
            b && d.disabled,
            !b && v && d.selected,
            a.xstyle,
          )),
          (n[5] = b),
          (n[6] = a.xstyle),
          (n[7] = v),
          (n[8] = S),
          (n[9] = I))
        : (I = n[9]);
      var T;
      n[10] !== p
        ? ((T =
            p &&
            c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: d.icon,
              children: p,
            })),
          (n[10] = p),
          (n[11] = T))
        : (T = n[11]);
      var D;
      n[12] !== u
        ? ((D =
            u != null &&
            c.jsx("span", {
              className: "x1iyjqo2 xxk0z11 x1o2sk6j x2b8uid x1wbi8v6 x7g7pl8",
              children: u,
            })),
          (n[12] = u),
          (n[13] = D))
        : (D = n[13]);
      var x;
      n[14] !== L
        ? ((x = L && c.jsx("span", { children: L })), (n[14] = L), (n[15] = x))
        : (x = n[15]);
      var $;
      return (
        n[16] !== m ||
        n[17] !== i ||
        n[18] !== I ||
        n[19] !== T ||
        n[20] !== D ||
        n[21] !== x ||
        n[22] !== R ||
        n[23] !== g
          ? (($ = c.jsxs(
              "button",
              babelHelpers.extends(
                { ref: i, onClick: m, "data-testid": void 0 },
                I,
                { title: g, children: [T, D, x] },
              ),
            )),
            (n[16] = m),
            (n[17] = i),
            (n[18] = I),
            (n[19] = T),
            (n[20] = D),
            (n[21] = x),
            (n[22] = R),
            (n[23] = g),
            (n[24] = $))
          : ($ = n[24]),
        $
      );
    }
    l.ToolbarButton = m;
  },
  98,
);
