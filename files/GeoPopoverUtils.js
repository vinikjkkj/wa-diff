__d(
  "GeoPopoverUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 280,
      l = function (n) {
        var t = n.isSticky,
          r = t === void 0 ? !0 : t,
          o = n.renderDelay,
          a = o === void 0 ? e : o,
          i = n.hideOnBlur,
          l = i === void 0 ? !0 : i,
          s = n.groupName,
          u = s === void 0 ? "GeoPopover" : s;
        return { isSticky: r, renderDelay: a, hideOnBlur: l, groupName: u };
      };
    ((i.DEFAULT_TOOLTIP_DELAY = e), (i.getDefaultProps = l));
  },
  66,
);
