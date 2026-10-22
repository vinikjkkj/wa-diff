__d(
  "WAWebAECompanionJourneyLogging",
  [
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebWamEnumSmbUserActionTypeEnum",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      c(
        e,
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        t,
      );
    }
    function s(e, t) {
      c(
        e,
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        t,
      );
    }
    function u(e, t, n) {
      c(
        e,
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
        t,
        n,
      );
    }
    function c(e, t, n, r) {
      new (o(
        "WAWebAutomaticEventsUserJourneyWamEvent",
      ).AutomaticEventsUserJourneyWamEvent)(
        babelHelpers.extends(
          {
            surface: e,
            smbUserActionType: t,
            automaticEventsTargetComponent: n,
          },
          r != null && { extraAttributes: JSON.stringify(r) },
        ),
      ).commit();
    }
    ((l.logAECompanionJourneyView = e),
      (l.logAECompanionJourneyClick = s),
      (l.logAECompanionJourneyApi = u));
  },
  98,
);
