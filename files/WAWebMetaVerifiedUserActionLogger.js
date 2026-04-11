__d(
  "WAWebMetaVerifiedUserActionLogger",
  [
    "WAWebMetaVerifiedUserActionWamEvent",
    "WAWebWamEnumMetaVerifiedUserActionReferral",
    "WAWebWamEnumMetaVerifiedUserActionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        new (o(
          "WAWebMetaVerifiedUserActionWamEvent",
        ).MetaVerifiedUserActionWamEvent)({
          metaVerifiedUserActionSurface: o(
            "WAWebWamEnumMetaVerifiedUserActionSurface",
          ).META_VERIFIED_USER_ACTION_SURFACE.BUSINESS_TOOLS,
          metaVerifiedUserActionReferral: o(
            "WAWebWamEnumMetaVerifiedUserActionReferral",
          ).META_VERIFIED_USER_ACTION_REFERRAL.BUSINESS_TOOLS,
          metaVerifiedUserActionAction: t,
        }).commit();
      },
      s = function (t, n, r) {
        new (o(
          "WAWebMetaVerifiedUserActionWamEvent",
        ).MetaVerifiedUserActionWamEvent)({
          metaVerifiedUserActionSurface: n,
          metaVerifiedUserActionReferral: r,
          metaVerifiedUserActionAction: t,
        }).commit();
      };
    ((l.logMetaVerifiedEntryPointEvents = e),
      (l.logMetaVerifiedModalEvents = s));
  },
  98,
);
