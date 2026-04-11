__d(
  "WAWebMessagingUserJourneyLogger",
  [
    "WARandomHex",
    "WAWebGetThreadType",
    "WAWebGetUserRole",
    "WAWebMessagingUserJourneyWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$1 = o("WARandomHex").randomHex(16)), (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.commitEvent = function (n) {
          var t;
          new (o(
            "WAWebMessagingUserJourneyWamEvent",
          ).MessagingUserJourneyWamEvent)(
            babelHelpers.extends(
              {
                appSessionId: e.appSessionId,
                userJourneyFunnelId: this.$1,
                threadType: o("WAWebGetThreadType").getThreadType(this.$2),
                userRole:
                  (t = o("WAWebGetUserRole").getUserRole(this.$2)) != null
                    ? t
                    : void 0,
              },
              n,
            ),
          ).commit();
        }),
        e
      );
    })();
    ((e.appSessionId = o("WARandomHex").randomHex(16)),
      (l.MessagingUserJourneyLogger = e));
  },
  98,
);
