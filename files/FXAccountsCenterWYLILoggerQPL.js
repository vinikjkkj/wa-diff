__d(
  "FXAccountsCenterWYLILoggerQPL",
  ["$InternalEnum", "QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "LOGIN_ACTIVITY_SCREEN_RENDERED",
        "SELECT_PROFILE_SCREEN_RENDERED",
        "LOGIN_ACTIVITY_DETAIL_SCREEN_RENDERED",
        "UNRECOGNIZED_LOGINS_SCREEN_RENDERED",
        "LOG_OUT_ON_MULTIPLE_DEVICES_SCREEN_RENDERED",
        "LOG_OUT_SUCCEEDED",
        "LOG_OUT_FAILED",
        "LOG_OUT_ON_MULTIPLE_DEVICES_SUCCEEDED",
        "LOG_OUT_ON_MULTIPLE_DEVICES_FAILED",
        "SECURED_ACTION_CHALLENGE_TRIGGERED",
        "REAUTH_SCREEN_RENDERED",
        "LOGOUT_BUTTON_CLICKED",
        "LOGOUT_CONFIRMATION_DIALOG_LOGOUT_BUTTON_CLICKED",
        "LOGOUT_CONFIRMATION_DIALOG_CANCEL_BUTTON_CLICKED",
        "LOGOUT_CONFIRMATION_DIALOG_SECURE_ACCOUNT_BUTTON_CLICKED",
      ]),
      s = n("$InternalEnum").Mirrored([
        "SECURE_ACCOUNT_FLOW_STARTED_WYLI_FLOW_ENDED",
      ]);
    function u(e) {
      r("QPLUserFlow").start(r("qpl")._(688271855, "2156"), {
        annotations: { bool: { is_f3: e.is_f3 } },
      });
    }
    function c(e) {
      r("QPLUserFlow").endSuccess(r("qpl")._(688271855, "2156"), {
        annotations: { string: { reasons: e } },
      });
    }
    function d() {
      r("QPLUserFlow").endCancel(r("qpl")._(688271855, "2156"));
    }
    function m(e) {
      r("QPLUserFlow").addPoint(r("qpl")._(688271855, "2156"), e);
    }
    ((l.FXAccountsCenterWYLILoggerPoint = e),
      (l.FXAccountsCenterWYLILoggerEndReasons = s),
      (l.start = u),
      (l.endSuccess = c),
      (l.endCancel = d),
      (l.addPoint = m));
  },
  98,
);
