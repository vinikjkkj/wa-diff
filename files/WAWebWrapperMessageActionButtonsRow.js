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
        container: {
          marginTop: "xken49m",
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x135b78x",
          paddingInlineEnd: "x11lfxj5",
          paddingLeft: null,
          paddingRight: null,
          position: "x10l6tqk",
          top: "xwa60dl",
          width: "xfvs6mw",
          $$css: !0,
        },
        transparentContainer: { pointerEvents: "x47corl", $$css: !0 },
        interactiveButton: { pointerEvents: "x67bb7w", $$css: !0 },
        positionLeft: {
          insetInlineStart: "xho9bl7",
          left: null,
          right: null,
          $$css: !0,
        },
        positionRight: {
          insetInlineEnd: "xej21xi",
          left: null,
          right: null,
          $$css: !0,
        },
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
      var g = l && u.positionLeft,
        h = c && u.positionRight,
        y = m && u.transparentContainer,
        C;
      t[8] !== g || t[9] !== h || t[10] !== y
        ? ((C = [u.container, g, h, y]),
          (t[8] = g),
          (t[9] = h),
          (t[10] = y),
          (t[11] = C))
        : (C = t[11]);
      var b;
      return (
        t[12] !== f || t[13] !== C || t[14] !== p
          ? ((b = s.jsx(o("WAWebFlex.react").FlexRow, {
              justify: f,
              align: "center",
              xstyle: C,
              children: p,
            })),
            (t[12] = f),
            (t[13] = C),
            (t[14] = p),
            (t[15] = b))
          : (b = t[15]),
        b
      );
    }
    l.default = c;
  },
  98,
);
