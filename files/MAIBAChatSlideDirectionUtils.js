__d(
  "MAIBAChatSlideDirectionUtils",
  ["Locale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        chatViewDockExpanded: "translateX(100%)",
        inlineStartOffscreen: "translateX(-100%)",
        isRTL: !1,
      },
      s = {
        chatViewDockExpanded: "translateX(-100%)",
        inlineStartOffscreen: "translateX(100%)",
        isRTL: !0,
      };
    function u(t) {
      return (t === void 0 && (t = o("Locale").isRTL()), t ? s : e);
    }
    l.getMAIBAChatSlideTransforms = u;
  },
  98,
);
