__d(
  "BusinessCometAdCenterNativeEditContextUtils",
  [
    "ALToolTab",
    "BusinessCometAdCenterNativeEditRequest.entrypointutils",
    "MAIBAR21Utils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("gkx")("21034") &&
        o("MAIBAR21Utils").isMAIBAR21MBSEnabled(
          o("ALToolTab").getCurrentToolTab().tool,
        )
      );
    }
    function s(t, n) {
      return e()
        ? o(
            "BusinessCometAdCenterNativeEditRequest.entrypointutils",
          ).refineNativeEditRequest(t, n)
        : null;
    }
    ((l.isNativeEditContextEnabled = e),
      (l.refineNativeEditRuntimeRequest = s));
  },
  98,
);
