__d(
  "WAWebMetaVerifiedUserActionLogger",
  [
    "WAWebMetaVerifiedUserActionWamEvent",
    "WAWebWamEnumMetaVerifiedUserActionReferral",
    "WAWebWamEnumMetaVerifiedUserActionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      new (o(
        "WAWebMetaVerifiedUserActionWamEvent",
      ).MetaVerifiedUserActionWamEvent)({
        metaVerifiedUserActionSurface: o(
          "WAWebWamEnumMetaVerifiedUserActionSurface",
        ).META_VERIFIED_USER_ACTION_SURFACE.BUSINESS_TOOLS,
        metaVerifiedUserActionReferral: o(
          "WAWebWamEnumMetaVerifiedUserActionReferral",
        ).META_VERIFIED_USER_ACTION_REFERRAL.BUSINESS_TOOLS,
        metaVerifiedUserActionAction: e,
      }).commit();
    }
    function s(e, t, n) {
      new (o(
        "WAWebMetaVerifiedUserActionWamEvent",
      ).MetaVerifiedUserActionWamEvent)({
        metaVerifiedUserActionSurface: t,
        metaVerifiedUserActionReferral: n,
        metaVerifiedUserActionAction: e,
      }).commit();
    }
    ((l.logMetaVerifiedEntryPointEvents = e),
      (l.logMetaVerifiedModalEvents = s));
  },
  98,
);
