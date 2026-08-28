__d(
  "CAAPasskeyErrorTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("$InternalEnum")({
        USER_CANCELLED_REAUTH_ERROR: 0,
        USER_CANCELLED_OS_DIALOG_ERROR: 1,
        UNSUPPORTED_PASSWORD_MANAGER_ERROR: 2,
        UNSUPPORTED_USER_AGENT_ERROR: 3,
        UNKNOWN_ERROR: 4,
      }),
      s =
        ((e = {}),
        (e[l.USER_CANCELLED_REAUTH_ERROR] = "USER_CANCELLED_REAUTH_ERROR"),
        (e[l.USER_CANCELLED_OS_DIALOG_ERROR] =
          "USER_CANCELLED_OS_DIALOG_ERROR"),
        (e[l.UNSUPPORTED_PASSWORD_MANAGER_ERROR] =
          "UNSUPPORTED_PASSWORD_MANAGER_ERROR"),
        (e[l.UNSUPPORTED_USER_AGENT_ERROR] = "UNSUPPORTED_USER_AGENT_ERROR"),
        (e[l.UNKNOWN_ERROR] = "UNKNOWN_ERROR"),
        e);
    ((i.PasskeyErrorType = l), (i.PASSKEY_ERROR_TYPE_NAMES = s));
  },
  66,
);
