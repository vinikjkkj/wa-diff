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
      };
    function c(e) {
      var t = e.hasReaction,
        n = e.isMsgGallery,
        a = e.isOutgoingMsg,
        i = e.messageActionButtons,
        l = e.positionLeft,
        c = e.positionRight,
        d = (a ? i.reverse() : i).map(function (e, t) {
          return e && !n
            ? s.jsx(
                r("WAWebFlexItem.react"),
                { xstyle: u.buttonWrapper, children: e },
                t,
              )
            : e;
        }),
        m = "end";
      return (
        !n && !a && (m = "start"),
        s.jsx(o("WAWebFlex.react").FlexRow, {
          justify: m,
          align: "center",
          className: {
            0: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw",
            2: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7",
            1: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xej21xi",
            3: "xken49m xexx8yu x18d9i69 x135b78x x11lfxj5 x10l6tqk xwa60dl xfvs6mw xho9bl7 xej21xi",
          }[(!!l << 1) | (!!c << 0)],
          children: d,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
