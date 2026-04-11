__d(
  "LWICometCTALinkUtils",
  ["LWICometCTAEditorNeedsOverrideType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("LWICometCTAEditorNeedsOverrideType").cast(
        e == null ? void 0 : e.type,
      ) == null || (e == null ? void 0 : e.type) === "INSTAGRAM_MESSAGE"
        ? !0
        : t != null &&
            t.instagram_user_id != null &&
            (e == null ? void 0 : e.type) === "VIEW_INSTAGRAM_PROFILE";
    }
    l.getShouldUseLinkFromCTA = e;
  },
  98,
);
