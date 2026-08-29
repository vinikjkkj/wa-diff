__d(
  "WAWebWrapperMessageActionButtonsRow",
  ["WAWebFlex.react", "WAWebFlexItem.react", "react"],
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
      var t = e.isMsgGallery,
        n = e.isOutgoingMsg,
        a = e.messageActionButtons,
        i = e.positionLeft,
        l = e.positionRight,
        c = e.transparentGaps,
        d = c === void 0 ? !1 : c,
        m = (n ? a.reverse() : a).map(function (e, n) {
          return e && !t
            ? s.jsx(
                r("WAWebFlexItem.react"),
                {
                  xstyle: [u.buttonWrapper, d && u.interactiveButton],
                  children: e,
                },
                n,
              )
            : e;
        }),
        p = "end";
      return (
        !t && !n && (p = "start"),
        s.jsx(o("WAWebFlex.react").FlexRow, {
          justify: p,
          align: "center",
          className: {
            0: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw",
            4: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7",
            2: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xej21xi",
            6: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 xej21xi",
            1: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw x47corl",
            5: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 x47corl",
            3: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xej21xi x47corl",
            7: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 xej21xi x47corl",
          }[(!!i << 2) | (!!l << 1) | (!!d << 0)],
          children: m,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
