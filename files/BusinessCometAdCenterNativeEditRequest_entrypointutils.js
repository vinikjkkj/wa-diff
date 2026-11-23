__d(
  "BusinessCometAdCenterNativeEditRequest.entrypointutils",
  [
    "BusinessUnifiedScopingSelectorUtils.entrypointutils",
    "MAIBAR21MBSGate.entrypointutils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "9223372036854775807",
      s = new Set(["audience", "call_to_action", "location_radius"]);
    function u(e) {
      return s.has(e);
    }
    function c(e) {
      return e === "location_radius" ? "location" : e;
    }
    function d(t) {
      return (
        typeof t == "string" &&
        /^[1-9]\d*$/.test(t) &&
        (t.length < e.length || (t.length === e.length && t <= e))
      );
    }
    function m(e) {
      return (
        r("gkx")("21034") &&
        e === "AD_CENTER" &&
        o(
          "BusinessUnifiedScopingSelectorUtils.entrypointutils",
        ).mapRouteNameToBusinessToolName(e) === "mbs_ads" &&
        o("MAIBAR21MBSGate.entrypointutils").isMAIBAR21MBSActorEnabled()
      );
    }
    function p(e, t) {
      return e == null ||
        e.pageID !== t ||
        !d(e.boostID) ||
        !d(e.campaignID) ||
        !d(e.legacyAccountID) ||
        !d(e.pageID) ||
        (e.focus != null && (!u(e.focus) || !d(e.adID))) ||
        (e.adID != null && e.focus == null)
        ? null
        : e;
    }
    ((l.isNativeEditFocus = u),
      (l.getNativeEditPhaseFocus = c),
      (l.isNativeEditID = d),
      (l.isNativeEditDestinationEnabled = m),
      (l.refineNativeEditRequest = p));
  },
  98,
);
