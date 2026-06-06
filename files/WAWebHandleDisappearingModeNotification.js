__d(
  "WAWebHandleDisappearingModeNotification",
  [
    "WADeprecatedWapParser",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUpdateDisappearingModeForContact",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))(
        "disappearingModeNotification",
        function (e) {
          e.assertTag("notification");
          var t = e.child("disappearing_mode");
          return {
            stanzaId: e.attrString("id"),
            from: o("WAWebJidToWid").deviceJidToDeviceWid(
              e.attrDeviceJid("from"),
            ),
            duration: t.attrInt("duration", 0),
            ts: t.attrTime("t"),
          };
        },
      );
    async function c(t) {
      var n = t.duration,
        r = t.from,
        a = t.stanzaId,
        i = t.ts;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleDisappearingModeNotification: received d=",
                ":t=",
                `
    for `,
                "",
              ])),
            n,
            i,
            r.toString(),
          )
          .tags("DM", "DDM"),
        await o(
          "WAWebUpdateDisappearingModeForContact",
        ).updateDisappearingModeForContact({
          contactId: r,
          newDuration: n,
          newSettingTimestamp: i,
        }),
        o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(a),
          to: o("WAWebCommsWapMd").JID(r),
          class: "notification",
          type: "disappearing_mode",
        })
      );
    }
    function d(e) {
      var t = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleDisappearingModeNotification",
          function () {
            var t = u.parse(e);
            return t.error
              ? (o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Parsing Error: ",
                      "",
                    ])),
                  t.error.toString(),
                ),
                Promise.reject(t.error))
              : c(t.success);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    l.handleDisappearingModeNotificationJob = d;
  },
  98,
);
