__d(
  "WAWebAuthAgentSmbJourneyLogger",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .AUTHORIZED_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BLOCKED_COMPOSER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        userActionTarget: "blocked_composer",
        extraAttributes: { offboarding_type: e, is_authorized_agent: t },
      });
    }
    function c(e, t) {
      s(
        function () {
          u(e, t);
        },
        [e, t],
      );
    }
    ((l.logAgentBlockedComposerView = u),
      (l.useLogAgentBlockedComposerViewOnMount = c));
  },
  98,
);
