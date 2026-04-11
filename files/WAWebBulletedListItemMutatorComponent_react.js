__d(
  "WAWebBulletedListItemMutatorComponent.react",
  [
    "fbt",
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (!(e == null || e === "")) return o("WABidi").dir(e);
    }
    function d(e) {
      var t = c(e) === "rtl";
      return t !== r("WAWebL10N").isRTL();
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.children,
        r = e.inline,
        a = e.selectable,
        i = e.symbol,
        l = e.text,
        c = n === void 0 ? "" : n,
        m = r === void 0 ? !1 : r;
      if (m) {
        var p;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "\u2022")), (t[0] = p))
          : (p = t[0]);
        var _;
        return (
          t[1] !== c || t[2] !== a
            ? ((_ = u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
                selectable: a,
                children: [p, c],
              })),
              (t[1] = c),
              (t[2] = a),
              (t[3] = _))
            : (_ = t[3]),
          _
        );
      }
      var f = i + " ",
        g;
      t[4] !== l
        ? ((g = {
            0: {
              className:
                "x1g0dm76 x1jieuv1 xo7wnuk x1gznph8 x1rkpvhg xlu7um4 xm78dhd x1r4uxqn",
            },
            1: {
              className:
                "x1jieuv1 xo7wnuk xlu7um4 xm78dhd x1r4uxqn xp4054r x1c1uobl xpdmqnj xh6kr0w xl717p",
            },
          }[!!d(l) << 0]),
          (t[4] = l),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== c
        ? ((h = o("WAWebFormatComponentUtils").removeFirstLeadingSpace(c)),
          (t[6] = c),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== f || t[9] !== a || t[10] !== h
        ? ((y = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
            selectable: a,
            prePlainText: f,
            children: h,
          })),
          (t[8] = f),
          (t[9] = a),
          (t[10] = h),
          (t[11] = y))
        : (y = t[11]);
      var C;
      return (
        t[12] !== g || t[13] !== y
          ? ((C = u.jsx(
              "li",
              babelHelpers.extends({ dir: "auto" }, g, { children: y }),
            )),
            (t[12] = g),
            (t[13] = y),
            (t[14] = C))
          : (C = t[14]),
        C
      );
    }
    l.default = m;
  },
  226,
);
