__d(
  "MCDSPrivateFormBorderRadius",
  ["MCDSPrivateFormControlLayoutContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext,
      u = {
        roundBorderTopStart: { borderStartStartRadius: "xu6lwgc", $$css: !0 },
        roundBorderTopEnd: { borderStartEndRadius: "x6obfwx", $$css: !0 },
        roundBorderBottomStart: { borderEndStartRadius: "xn08o6o", $$css: !0 },
        roundBorderBottomEnd: { borderEndEndRadius: "x51g37g", $$css: !0 },
      };
    function c() {
      var e = s(r("MCDSPrivateFormControlLayoutContext")),
        t = e.hasBottomSibling,
        n = e.hasEndSibling,
        o = e.hasStartSibling,
        a = e.hasTopSibling,
        i = [];
      return (
        !o && !a && i.push(u.roundBorderTopStart),
        !n && !a && i.push(u.roundBorderTopEnd),
        !o && !t && i.push(u.roundBorderBottomStart),
        !n && !t && i.push(u.roundBorderBottomEnd),
        i
      );
    }
    l.useMCDSPrivateBorderRadiusStyle = c;
  },
  98,
);
