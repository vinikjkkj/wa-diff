__d(
  "WAWebStanzaHandlersV2",
  ["WAWebInboundMsgPersistedQueueAdapter", "WAWebInboundMsgQueueGating"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        (o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() !=
          null ||
          o(
            "WAWebInboundMsgPersistedQueueAdapter",
          ).isInboundMsgQueueRegistrationPending()) &&
        o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
      );
    }
    l.shouldHandleStanzaV2 = e;
  },
  98,
);
