__d(
  "WAWebRichResponseUnknownFragment.react",
  [
    "WAWebFlex.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(6),
        n = e.fragment,
        r = e.parseState,
        a;
      t[0] !== n || t[1] !== r
        ? ((a = o(
            "WAWebRichResponseUnknownFragmentUtils",
          ).getUnknownFragmentText(n, r)),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a))
        : (a = t[2]);
      var i = a,
        l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [u.container, u.paddingAll12]), (t[3] = l))
        : (l = t[3]);
      var c;
      return (
        t[4] !== i
          ? ((c = s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: l,
              children: i,
            })),
            (t[4] = i),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  98,
);
