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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      if (
        (o("WAWebInboundMsgPersistedQueueAdapter").setInboundMsgQueueStop(u),
        !o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled())
      ) {
        m();
        return;
      }
      if (!(await o("WAWebInboundMsgQueueStore").preloadInboundMsgQueue())) {
        (o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgQueueRegistrationPending() &&
          o("WAWebInboundMsgQueueODS").logInboundMsgQueueOpenFailed(),
          o(
            "WAWebInboundMsgPersistedQueueAdapter",
          ).settleInboundMsgQueueRegistration());
        return;
      }
      (await o(
        "WAWebInboundMsgLeftoverLidPnMappings",
      ).learnLeftoverInboundMsgLidPnMappings(),
        await d(),
        o("WAWebInboundMsgDrain").startInboundMsgDrain(),
        o("WAWebInboundMsgDrain").whenInboundMsgRecoveryDone().then(c),
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).settleInboundMsgQueueRegistration());
    }
    function u() {
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
    function c() {
      o("WAWebInboundMsgPersistedQueue").isInboundMsgCommitInFlight() ||
        o("WAWebInboundMsgDrain").hasUndrainedInboundMsgs() ||
        o("WAWebInboundMsgQueuePref").clearInboundMsgQueueMayHaveRows();
    }
    function d() {
      return o("WAWebOneQueue")
        .getWAWebOneQueue()
        .enqueue(
          async function () {
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
          },
          { flush: !1, operationType: "wa_web_inbound_msg_queue_registration" },
        );
    }
    function m() {
      var e = function () {
        o("WAWebInboundMsgQueueStore")
          .preloadInboundMsgQueue()
          .then(function () {
            (o("WAWebInboundMsgDrain").startInboundMsgDrain(),
              o("WAWebInboundMsgDrain").whenInboundMsgRecoveryDone().then(c));
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
