__d(
  "MAIBAChatHeaderCenterInsetUtils",
  ["MAIBAChatAppVars.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return (
        "calc(" +
        o("MAIBAChatAppVars.stylex").MAIBAChatAppVars.canvasBodyInlinePadding +
        " - " +
        t +
        "px + max(0px, (100% - " +
        e +
        "px - " +
        o("MAIBAChatAppVars.stylex").MAIBAChatAppVars.canvasBodyInlinePadding +
        " * 2 - " +
        o("MAIBAChatAppVars.stylex").MAIBAChatAppVars.canvasContentMaxWidth +
        " - " +
        r +
        "px + " +
        (t + n) +
        "px) / 2))"
      );
    }
    l.getMAIBAHeaderCenterContentInset = e;
  },
  98,
);
