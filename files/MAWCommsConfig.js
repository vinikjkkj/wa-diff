__d(
  "MAWCommsConfig",
  [
    "MAWBridge",
    "MAWChatSocketPlatformDetails",
    "MAWODSProxy",
    "MAWQplProxy",
    "MAWReliabilityMonitor",
    "MWFBLogger",
    "WAAPI",
    "WAComms",
    "WADevToolsStanzaViewer",
    "WAOdsEnums",
    "WAOpenChatSocket",
    "WAResolvable",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
    "gkx",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 43200;
    function c(t) {
      (o("MWFBLogger")
        .MWLogger()
        .tags(["backend", "comms"])
        .DEBUG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "comms change: ",
              "",
            ])),
          t,
        ),
        t === "connected" &&
          r("promiseDone")(o("WAComms").startHandlingRequests()));
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authKeyPair,
            n = yield o(
              "MAWChatSocketPlatformDetails",
            ).getChatSocketPlatformDetails({ authKeyPair: t }),
            a = !1,
            i = !1,
            l = !1,
            d = null,
            m = new (o("WAResolvable").Resolvable)(),
            p = o(
              "MAWReliabilityMonitor",
            ).MAWReliabilityMonitorSingleton.startMonitoring(
              "MAWCommsConfig",
              function () {
                return {
                  extra: { isHandshakeInProgress: String(l) },
                  reason: d != null ? d : "no_explicit_connection_state_so_far",
                  state: (function () {
                    switch (d) {
                      case "disconnected":
                        return o("MAWReliabilityMonitor").HealthReportState
                          .ERROR;
                      case "in_handshake":
                        return o("MAWReliabilityMonitor").HealthReportState
                          .PENDING;
                      case "connected":
                        return o("MAWReliabilityMonitor").HealthReportState.OK;
                      default:
                        return o("MAWReliabilityMonitor").HealthReportState
                          .UNKNOWN;
                    }
                  })(),
                };
              },
            );
          o("MAWQplProxy").measurePerfInQPL_USE_WITH_CARE(
            r("qpl")._(1056839232, "112"),
            "wai_connection",
            function () {
              return m.promise;
            },
            { bool: { waapi_deferred: r("gkx")("14711") } },
          );
          var _ = function (t) {
            ((d = t),
              p.updateState(),
              t === "in_handshake"
                ? l === !1
                  ? ((l = !0),
                    o("MAWQplProxy").sendQplPointThroughBridge(
                      r("qpl")._(1056839232, "112"),
                      "wai_in_handshake",
                    ))
                  : o("MWFBLogger")
                      .MWLogger()
                      .tags(["backend", "comms"])
                      .DEBUG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "openChatSocket retried",
                          ])),
                      )
                : t === "connected"
                  ? (m.resolve(),
                    o("MAWODSProxy").odsBumpEntityKey({
                      entity: o("WAOdsEnums").Entity.WA_CONNECTIVITY,
                      key: "success",
                    }),
                    (l = !1))
                  : t === "disconnected" &&
                    (o("MAWQplProxy").sendQPLBoolAnnotationThroughBridge(
                      r("qpl")._(1056839232, "112"),
                      "didWAIConnectionDisconnect",
                      !0,
                    ),
                    (l = !1),
                    o("MAWODSProxy").odsBumpEntityKey({
                      entity: o("WAOdsEnums").Entity.WA_CONNECTIVITY,
                      key: "disconnected",
                    })));
          };
          return {
            deadSocketTime: 2e4,
            handlers: {
              onCastStanza: function (t) {
                r("gkx")("3282") &&
                  o("WADevToolsStanzaViewer").sendNewStanzaToDevTool(t, !0);
              },
              onClockSkewUpdate: function (t) {
                var e = o("WATimeUtils").getClockSkew();
                if (!(i && Math.abs(e - t) <= 10)) {
                  if (((i = !0), Math.abs(t) > u)) {
                    (o("MAWODSProxy").odsBumpEntityKey({
                      entity: o("WAOdsEnums").Entity.CLOCK_SKEW_UPDATE,
                      key: "exceeds_max_val",
                    }),
                      a ||
                        ((a = !0),
                        o("MAWODSProxy").odsBumpEntityKey({
                          entity: o("WAOdsEnums").Entity.CLOCK_SKEW_UPDATE,
                          key: "exceeds_max_val_alert",
                        })));
                    return;
                  }
                  r("promiseDone")(
                    r("WAAPI")
                      .updateClockSkew({ clockSkew: t })
                      .then(function () {
                        o("MAWBridge")
                          .getBridge()
                          .fireAndForget("event", "uiUpdate", {
                            events: [{ tag: "ClockSkewUpdated", value: t }],
                          });
                      }),
                  );
                }
              },
              onConnectionChange: function (t) {
                (_(t), c(t));
              },
              onHandleStanza: function (t) {
                r("gkx")("3282") &&
                  o("WADevToolsStanzaViewer").sendNewStanzaToDevTool(t, !1);
              },
            },
            healthCheckInterval: 20,
            maxRetries: Number.MAX_SAFE_INTEGER,
            maxSocketLoopWaitTime: 6e4,
            openChatSocket: function (t, r) {
              return o("WAOpenChatSocket").openChatSocket(n, t, r);
            },
            shouldBlockReceivingUntilSuccess: !1,
            shouldCloseStaleSocket: !0,
          };
        })),
        m.apply(this, arguments)
      );
    }
    l.getCommsConfig = d;
  },
  98,
);
