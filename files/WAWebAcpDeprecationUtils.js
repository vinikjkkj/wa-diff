__d(
  "WAWebAcpDeprecationUtils",
  [
    "WATimeUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebWidFactory").createWid(t),
            r = {
              sharingLimited: !1,
              trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                .UNKNOWN,
              limitSharingSettingTimestamp:
                Math.floor(o("WATimeUtils").unixTime()) * e,
            };
          (yield o("WAWebLimitSharingModelUtils").updateChat(n, r),
            yield o("WAWebLimitSharingModelUtils").genLimitSharingSystemMessage(
              n,
              r,
            ));
        })),
        u.apply(this, arguments)
      );
    }
    l.opusProcessChat = s;
  },
  98,
);
