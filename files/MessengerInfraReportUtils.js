__d(
  "MessengerInfraReportUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        return t === 2;
      },
      l = function (t) {
        switch (t) {
          case 1:
            return "START";
          case 2:
            return "SUCCESS";
          case 3:
            return "FAIL";
          case 4:
            return "CANCEL";
          case 113:
            return "TIMEOUT";
          case 706:
            return "CANCEL_UNLOAD";
          case 4158:
            return "INVALID";
          case 87:
            return "ERROR";
          case 5947:
            return "SUCCESS_PAST_TIMEOUT";
          case 160:
            return "OFFLINE";
          default:
            return String(t);
        }
      };
    ((i.isQplActionSuccessful = e), (i.qplStatusStr = l));
  },
  66,
);
