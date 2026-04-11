__d(
  "WAWebUsernameErrorUtils",
  [
    "$InternalEnum",
    "WAWebFbtCommon",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameStringUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum")({
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        NOT_ACCEPTABLE: 406,
        RATE_OVER_LIMIT: 429,
        INTERNAL_SERVER_ERROR: 500,
        USERNAME_NOT_AVAILABLE: 40601,
        USERNAME_SET_OVER_LIMIT: 40602,
        USERNAME_CHANGE_BLOCKED: 40603,
      }),
      c = function (t, n) {
        switch (t.statusCode) {
          case u.USERNAME_CHANGE_BLOCKED:
            d(
              o(
                "WAWebUsernameStringUtils",
              ).getUsernameChangeNotAllowedMessage(),
              n,
            );
            break;
          default:
            d(
              o("WAWebUsernameStringUtils").getUsernameGenericErrorMessage(),
              n,
            );
            break;
        }
      },
      d = function (t, n) {
        o("WAWebToastManager").ToastManager.open(
          s.jsx(o("WAWebToast.react").Toast, {
            msg: t,
            action: n
              ? {
                  actionText: r("WAWebFbtCommon")("Try again"),
                  onAction: function () {
                    n();
                  },
                }
              : null,
          }),
        );
      };
    l.handleErrorBasedOnErrorCode = c;
  },
  98,
);
