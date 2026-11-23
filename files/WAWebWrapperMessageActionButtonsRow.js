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
      var t = e.isMsgGallery,
        n = e.isOutgoingMsg,
        a = e.messageActionButtons,
        i = e.positionLeft,
        l = e.positionRight,
        c = e.transparentGaps,
        d = c === void 0 ? !1 : c,
        m = a.map(function (e, n) {
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
        });
      n && m.reverse();
      var p = "end";
      return (
        !t && !n && (p = "start"),
        s.jsx(o("WAWebFlex.react").FlexRow, {
          justify: p,
          align: "center",
          xstyle: [
            u.container,
            i && u.positionLeft,
            l && u.positionRight,
            d && u.transparentContainer,
          ],
          children: m,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
