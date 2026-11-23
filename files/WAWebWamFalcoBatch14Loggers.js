__d(
  "WAWebWamFalcoBatch14Loggers",
  [
    "WamCtwaLabelSignalFalcoEvent",
    "WamE2eRetryRejectFalcoEvent",
    "WamIncomingMessageDropFalcoEvent",
    "WamLabelEventFalcoEvent",
    "WamMdBootstrapDataAppliedFalcoEvent",
    "WamStatusCrossPostFalcoEvent",
    "WamSubscriptionUserActionFalcoEvent",
    "WamUsernameCreationActionFalcoEvent",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o = function () {
        return r("unsafeCast")(t);
      };
      if (n) {
        e.logCritical(o);
        return;
      }
      e.log(o);
    }
    function s(e) {
      switch (e) {
        case 1422:
        case 2298:
        case 3568:
        case 3578:
        case 3724:
        case 4662:
        case 5224:
        case 7458:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1422:
          return (e(r("WamLabelEventFalcoEvent"), n, o), !0);
        case 2298:
          return (e(r("WamMdBootstrapDataAppliedFalcoEvent"), n, o), !0);
        case 3568:
          return (e(r("WamStatusCrossPostFalcoEvent"), n, o), !0);
        case 3578:
          return (e(r("WamE2eRetryRejectFalcoEvent"), n, o), !0);
        case 3724:
          return (e(r("WamIncomingMessageDropFalcoEvent"), n, o), !0);
        case 4662:
          return (e(r("WamCtwaLabelSignalFalcoEvent"), n, o), !0);
        case 5224:
          return (e(r("WamUsernameCreationActionFalcoEvent"), n, o), !0);
        case 7458:
          return (e(r("WamSubscriptionUserActionFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
