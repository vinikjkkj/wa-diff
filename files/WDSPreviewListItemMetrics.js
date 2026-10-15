__d(
  "WDSPreviewListItemMetrics",
  ["WDSListItemConfig.stylex", "WDSPreviewListItemConfig.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { comfortable: "medium", compact: "small", singleLine: "xxSmall" },
      s = { comfortable: 48, compact: 40, singleLine: 24 },
      u = 4,
      c = 4,
      d = { comfortable: 8, compact: 4, singleLine: 4 },
      m = {
        comfortable: o("WDSListItemConfig.stylex").WDSListItemMinAddOnHeight,
        compact: o("WDSListItemConfig.stylex").WDSListItemMinAddOnHeight,
        singleLine: 0,
      },
      p = 4;
    function _(e) {
      var t = e.density,
        n = e.hasParentName,
        r = n === void 0 ? !1 : n,
        a = Math.max(s[t] + u * 2, m[t]),
        i = r && t === "comfortable",
        l =
          o("WDSPreviewListItemConfig.stylex")
            .WDSPreviewListItemTitleLineHeight +
          (t === "singleLine"
            ? 0
            : o("WDSPreviewListItemConfig.stylex")
                .WDSPreviewListItemSubtitleLineHeight) +
          (i
            ? o("WDSPreviewListItemConfig.stylex")
                .WDSPreviewListItemOverlineLineHeight +
              p * 2
            : 0);
      return Math.max(a, l) + d[t] * 2 + c;
    }
    ((l.WDSPreviewListItemAvatarSize = e),
      (l.WDSPreviewListItemAvatarPx = s),
      (l.getWDSPreviewListItemRowHeight = _));
  },
  98,
);
