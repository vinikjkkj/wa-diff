__d(
  "WAWebAuthAgentSmbJourneyLogger",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== t || n[1] !== e
        ? ((r = function () {
            u(e, t);
          }),
          (a = [e, t]),
          (n[0] = t),
          (n[1] = e),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        s(r, a));
    }
    ((l.logAgentBlockedComposerView = u),
      (l.useLogAgentBlockedComposerViewOnMount = c));
  },
  98,
);
