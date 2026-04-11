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
    "asyncToGeneratorRuntime",
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.duration,
            n = e.from,
            r = e.stanzaId,
            a = e.ts;
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleDisappearingModeNotification: received d=",
                    ":t=",
                    "\n    for ",
                    "",
                  ])),
                t,
                a,
                n.toString(),
              )
              .tags("DM", "DDM"),
            yield o(
              "WAWebUpdateDisappearingModeForContact",
            ).updateDisappearingModeForContact({
              contactId: n,
              newDuration: t,
              newSettingTimestamp: a,
            }),
            o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(r),
              to: o("WAWebCommsWapMd").JID(n),
              class: "notification",
              type: "disappearing_mode",
            })
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      var n = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleDisappearingModeNotification",
          function () {
            var n = u.parse(t);
            return n.error
              ? (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Parsing Error: ",
                      "",
                    ])),
                  n.error.toString(),
                ),
                Promise.reject(n.error))
              : c(n.success);
          },
          { priority: n },
        )
        .waitUntilCompleted({ node: t });
    }
    l.handleDisappearingModeNotificationJob = m;
  },
  98,
);
