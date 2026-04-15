__d(
  "WAWebConnectedPillButtons.react",
  [
    "WAWebCheckmarkIcon.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        isSelected: { color: "xk4n5i7", $$css: !0 },
        singlePill: {
          minWidth: "xm5golx",
          height: "x1vqgdyp",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          fontSize: "x1f6kntn",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        isSelectedBackground: { backgroundColor: "x1abdmlv", $$css: !0 },
        middle: { marginInlineEnd: "xjn30re", $$css: !0 },
        first: {
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x1ga7v0g",
          borderEndEndRadius: "x16uus16",
          borderEndStartRadius: "x709u02",
          $$css: !0,
        },
        last: {
          borderStartStartRadius: "x15mokao",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "xbiv7yw",
          $$css: !0,
        },
      },
      c = 18;
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.isSelected,
        a = e.onClick,
        i = e.testid,
        l = e.title,
        d = e.xstyle,
        m = n && u.isSelectedBackground,
        p;
      t[0] !== m || t[1] !== d
        ? ((p = [u.singlePill, d, m]), (t[0] = m), (t[1] = d), (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== n
        ? ((_ =
            n &&
            s.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
              width: c,
              height: c,
              xstyle: [o("WAWebUISpacing").uiMargin.end7, u.isSelected],
            })),
          (t[3] = n),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== n
        ? ((f = { 0: {}, 1: { className: "xk4n5i7" } }[!!n << 0]),
          (t[5] = n),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== f || t[8] !== l
        ? ((g = s.jsx("span", babelHelpers.extends({}, f, { children: l }))),
          (t[7] = f),
          (t[8] = l),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== _ || t[11] !== g
        ? ((h = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: o("WAWebUISpacing").uiMargin.horiz6,
            children: [_, g],
          })),
          (t[10] = _),
          (t[11] = g),
          (t[12] = h))
        : (h = t[12]);
      var y;
      return (
        t[13] !== a || t[14] !== p || t[15] !== h || t[16] !== i
          ? ((y = s.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: p,
              testid: void 0,
              onClick: a,
              children: h,
            })),
            (t[13] = a),
            (t[14] = p),
            (t[15] = h),
            (t[16] = i),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.currentlySelected,
        r = e.onChange,
        a = e.pills;
      if (a.length < 2) {
        var i;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s.jsx(s.Fragment, {})), (t[0] = i))
            : (i = t[0]),
          i
        );
      }
      var l;
      if (t[1] !== n || t[2] !== r || t[3] !== a) {
        var c;
        (t[5] !== n || t[6] !== r || t[7] !== a.length
          ? ((c = function (t, o) {
              return s.jsx(
                d,
                {
                  onClick: function () {
                    return r(t.id);
                  },
                  isSelected: t.id === n,
                  title: t.title,
                  testid: void 0,
                  xstyle: [
                    o === 0 && u.first,
                    o !== a.length - 1 && u.middle,
                    o === a.length - 1 && u.last,
                  ],
                },
                "connected-pill-button-" + t.id.toString(),
              );
            }),
            (t[5] = n),
            (t[6] = r),
            (t[7] = a.length),
            (t[8] = c))
          : (c = t[8]),
          (l = a.map(c)),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a),
          (t[4] = l));
      } else l = t[4];
      var m;
      return (
        t[9] !== l
          ? ((m = s.jsx(o("WAWebFlex.react").FlexRow, { children: l })),
            (t[9] = l),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    l.default = m;
  },
  98,
);
