__d(
  "WAWebNumberedListItemMutatorComponent.react",
  [
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (!(e == null || e === "")) return o("WABidi").dir(e);
    }
    function c(e) {
      var t = u(e) === "rtl";
      return t !== r("WAWebL10N").isRTL();
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.children,
        r = e.inline,
        a = e.numbering,
        i = e.selectable,
        l = e.text,
        u = n === void 0 ? "" : n,
        d = r === void 0 ? !1 : r;
      if (d) {
        var m;
        return (
          t[0] !== u || t[1] !== a || t[2] !== i
            ? ((m = s.jsxs(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
                selectable: i,
                children: [a, u],
              })),
              (t[0] = u),
              (t[1] = a),
              (t[2] = i),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      var p = a + " ",
        _;
      t[4] !== a
        ? ((_ = a.replace(".", "")), (t[4] = a), (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== l
        ? ((f = {
            0: { className: "x4tra6z" },
            1: { className: "xp4054r x1cy9i3i x4tra6z" },
          }[!!c(l) << 0]),
          (t[6] = l),
          (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== u
        ? ((g = o("WAWebFormatComponentUtils").removeFirstLeadingSpace(u)),
          (t[8] = u),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== p || t[11] !== i || t[12] !== g
        ? ((h = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
            selectable: i,
            prePlainText: p,
            children: g,
          })),
          (t[10] = p),
          (t[11] = i),
          (t[12] = g),
          (t[13] = h))
        : (h = t[13]);
      var y;
      return (
        t[14] !== _ || t[15] !== f || t[16] !== h
          ? ((y = s.jsx(
              "li",
              babelHelpers.extends({ dir: "auto", value: _ }, f, {
                children: h,
              }),
            )),
            (t[14] = _),
            (t[15] = f),
            (t[16] = h),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    l.default = d;
  },
  98,
);
