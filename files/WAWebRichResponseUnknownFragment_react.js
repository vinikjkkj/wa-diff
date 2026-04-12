__d(
  "WAWebRichResponseUnknownFragment.react",
  ["WAWebFlex.react", "WAWebRichResponseUnknownFragmentUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          borderStartStartRadius: "xbjudin",
          borderStartEndRadius: "xnlwouz",
          borderEndEndRadius: "xpp8er5",
          borderEndStartRadius: "xs9wviy",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          color: "xhslqc4",
          $$css: !0,
        },
        paddingAll12: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.fragment,
        n = e.parseState,
        r = o("WAWebRichResponseUnknownFragmentUtils").getUnknownFragmentText(
          t,
          n,
        );
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: [u.container, u.paddingAll12],
        children: r,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
