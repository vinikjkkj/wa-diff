__d(
  "WAWebWrapperMessageActionButtonsRow",
  ["cx", "WAWebFlex.react", "WAWebFlexItem.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        buttonWrapper: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1djpfga",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.hasReaction,
        n = e.isMsgGallery,
        a = e.isOutgoingMsg,
        i = e.messageActionButtons,
        l = (a ? i.reverse() : i).map(function (e, t) {
          return e && !n
            ? u.jsx(
                r("WAWebFlexItem.react"),
                { xstyle: c.buttonWrapper, children: e },
                t,
              )
            : e;
        }),
        s = "end";
      return (
        !n && !a && (s = "start"),
        u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: s,
          align: "center",
          className: "_amj_",
          children: l,
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
