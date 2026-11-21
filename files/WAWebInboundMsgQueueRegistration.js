__d(
  "WAWebInboundMsgQueueRegistration",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebInboundMsgDrain",
    "WAWebInboundMsgIntake",
    "WAWebInboundMsgLeftoverLidPnMappings",
    "WAWebInboundMsgMessageWriter",
    "WAWebInboundMsgPersistedQueue",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebInboundMsgQueueGating",
    "WAWebInboundMsgQueueODS",
    "WAWebInboundMsgQueuePref",
    "WAWebInboundMsgQueueStore",
    "WAWebOneQueue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WAWebInboundMsgPersistedQueueAdapter").setInboundMsgQueueStop(
              c,
            ),
            !o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled())
          ) {
            p();
            return;
          }
          if (
            !(yield o("WAWebInboundMsgQueueStore").preloadInboundMsgQueue())
          ) {
            (o(
              "WAWebInboundMsgPersistedQueueAdapter",
            ).isInboundMsgQueueRegistrationPending() &&
              o("WAWebInboundMsgQueueODS").logInboundMsgQueueOpenFailed(),
              o(
                "WAWebInboundMsgPersistedQueueAdapter",
              ).settleInboundMsgQueueRegistration());
            return;
          }
          (yield o(
            "WAWebInboundMsgLeftoverLidPnMappings",
          ).learnLeftoverInboundMsgLidPnMappings(),
            yield m(),
            o("WAWebInboundMsgDrain").startInboundMsgDrain(),
            o("WAWebInboundMsgDrain").whenInboundMsgRecoveryDone().then(d),
            o(
              "WAWebInboundMsgPersistedQueueAdapter",
            ).settleInboundMsgQueueRegistration());
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      (o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[inbound-msg-queue] another tab took the session over, stopping",
            ])),
        )
        .tags("messaging"),
        o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled() &&
          o("WAWebInboundMsgPersistedQueue").stopInboundMsgCommits(),
        o("WAWebInboundMsgDrain").stopInboundMsgDrain());
    }
    function d() {
      o("WAWebInboundMsgPersistedQueue").isInboundMsgCommitInFlight() ||
        o("WAWebInboundMsgDrain").hasUndrainedInboundMsgs() ||
        o("WAWebInboundMsgQueuePref").clearInboundMsgQueueMayHaveRows();
    }
    function m() {
      return o("WAWebOneQueue")
        .getWAWebOneQueue()
        .enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = !o(
              "WAWebInboundMsgPersistedQueueAdapter",
            ).hasInboundMsgQueueRegistrationTimedOut();
            (e &&
              o("WAWebInboundMsgQueuePref").markInboundMsgQueueMayHaveRows(),
              o(
                "WAWebInboundMsgMessageWriter",
              ).installInboundMsgMessageWriter(),
              o(
                "WAWebInboundMsgPersistedQueueAdapter",
              ).setInboundMsgSignalStateHold(
                o("WAWebInboundMsgPersistedQueue").hasUnwrittenInboundMsgs,
              ),
              o(
                "WAWebInboundMsgPersistedQueueAdapter",
              ).setInboundMsgPersistedQueueHooks({
                flushable: o("WAWebInboundMsgPersistedQueue")
                  .inboundMsgPersistedQueueFlushable,
                intake: e ? o("WAWebInboundMsgIntake").intakeInboundMsg : null,
                sendReceipts: o("WAWebInboundMsgPersistedQueue")
                  .sendCommittedInboundMsgReceipts,
                waitForDrainIdle: o("WAWebInboundMsgPersistedQueue")
                  .waitForEarlierInboundMsgs,
                waitForStartupChatsDrained: o("WAWebInboundMsgDrain")
                  .waitForInboundMsgStartupChatsDrained,
                pauseDrainUntilMainStreamReady: o("WAWebInboundMsgDrain")
                  .pauseInboundMsgDrainUntilMainStreamReady,
              }));
          }),
          { flush: !1, operationType: "wa_web_inbound_msg_queue_registration" },
        );
    }
    function p() {
      var e = function () {
        o("WAWebInboundMsgQueueStore")
          .preloadInboundMsgQueue()
          .then(function () {
            (o("WAWebInboundMsgDrain").startInboundMsgDrain(),
              o("WAWebInboundMsgDrain").whenInboundMsgRecoveryDone().then(d));
          });
      };
      if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
        e();
        return;
      }
      o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(e);
    }
    l.registerInboundMsgQueue = s;
  },
  98,
);
