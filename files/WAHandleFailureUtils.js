__d(
  "WAHandleFailureUtils",
  [
    "FBLogger",
    "MAWODSProxy",
    "WABridge",
    "WAOdsEnums",
    "getErrorSafe",
    "promiseDone",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("MAWClearSignalAndTempStores").__setRef(
        "WAHandleFailureUtils",
      ),
      s = {
        GENERIC_FAILURE: "400",
        NOT_AUTHORIZED: "401",
        TEMP_BANNED: "402",
        BANNED: "403",
        CAT_EXPIRED: "413",
        CAT_INVALID: "414",
        NOT_FOUND: "415",
        CAT_SESSION_INVALID: "418",
        INTERNAL_ERROR: "500",
        SERVER_UNAVAILABLE: "503",
      };
    function u() {
      return new Promise(function (t, n) {
        e.onReady(function (e) {
          r("promiseDone")(
            e.clearSignalAndTempStores(),
            function () {
              return t();
            },
            function (e) {
              var t = r("getErrorSafe")(e);
              (r("FBLogger")("wmi")
                .catching(t)
                .mustfix("Failed to clear signal and temp stores"),
                n(t));
            },
          );
        });
      });
    }
    function c() {
      return u().then(function () {
        o("WABridge").getBridge().fireAndForget("event", "logout", {});
      });
    }
    async function d() {
      (await u(),
        o("MAWODSProxy").odsBumpEntityKey({
          entity: o("WAOdsEnums").Entity.WA_REREGISTRATION,
          key: "reregister_phone",
        }),
        o("WABridge")
          .getBridge()
          .fireAndForget("event", "reregisterDevice", {}));
    }
    ((l.FAILURE_CODES = s), (l.deregisterPhone = c), (l.reregisterPhone = d));
  },
  98,
);
