__d(
  "WAWebWrapperMessageActionButtonsRow",
  ["WAWebFlex.react", "WAWebFlexItem.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        buttonWrapper: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1djpfga",
          transition: "xcxita6",
          $$css: !0,
        },
        interactiveButton: { pointerEvents: "x67bb7w", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.isMsgGallery,
        a = e.isOutgoingMsg,
        i = e.messageActionButtons,
        l = e.positionLeft,
        c = e.positionRight,
        d = e.transparentGaps,
        m = d === void 0 ? !1 : d,
        p;
      if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== m) {
        var _;
        (t[5] !== n || t[6] !== m
          ? ((_ = function (t, o) {
              return t && !n
                ? s.jsx(
                    r("WAWebFlexItem.react"),
                    {
                      xstyle: [u.buttonWrapper, m && u.interactiveButton],
                      children: t,
                    },
                    o,
                  )
                : t;
            }),
            (t[5] = n),
            (t[6] = m),
            (t[7] = _))
          : (_ = t[7]),
          (p = i.map(_)),
          a && p.reverse(),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = m),
          (t[4] = p));
      } else p = t[4];
      var f = "end";
      !n && !a && (f = "start");
      var g = f,
        h;
      t[8] !== l || t[9] !== c || t[10] !== m
        ? ((h = {
            0: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw",
            4: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7",
            2: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xej21xi",
            6: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 xej21xi",
            1: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw x47corl",
            5: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 x47corl",
            3: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xej21xi x47corl",
            7: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 xej21xi x47corl",
          }[(!!l << 2) | (!!c << 1) | (!!m << 0)]),
          (t[8] = l),
          (t[9] = c),
          (t[10] = m),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== f || t[13] !== h || t[14] !== p
          ? ((y = s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: g,
              align: "center",
              className: h,
              children: p,
            })),
            (t[12] = f),
            (t[13] = h),
            (t[14] = p),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    l.default = c;
  },
  98,
);
