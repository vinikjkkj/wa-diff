__d(
  "WAWebBadge.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          zIndex: "xupqr0c",
          $$css: !0,
        },
        warningIcon: {
          top: "xnfr1j",
          insetInlineStart: "x14q0ukc",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.Icon,
        r = e.theme,
        a;
      t[0] !== r
        ? ((a = {
            0: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly",
            2: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly xotx74u",
            1: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly x1kk9kun",
            3: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly x1kk9kun",
          }[((r === "pending") << 1) | ((r === "warning") << 0)]),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n || t[3] !== r
        ? ((l = n
            ? s.jsx(n, { xstyle: [u.icon, r === "warning" && u.warningIcon] })
            : null),
          (t[2] = n),
          (t[3] = r),
          (t[4] = l))
        : (l = t[4]);
      var c = l,
        d;
      return (
        t[5] !== i || t[6] !== c
          ? ((d = s.jsx("div", { className: i, children: c })),
            (t[5] = i),
            (t[6] = c),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = c;
  },
  98,
);
