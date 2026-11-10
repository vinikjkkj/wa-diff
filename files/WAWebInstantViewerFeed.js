__d(
  "WAWebInstantViewerFeed",
  [
    "WAWebChatGroupUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInstantsConsumption",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return [].concat(
        e.filter(function (e) {
          return (
            !o("WAWebInstantsConsumption").isInstantConsumed(e) &&
            !o("WAWebChatGroupUtils").isSuspendedGroup(
              o("WAWebFrontendMsgGetters").getMaybeChat(e),
            )
          );
        }),
        e.filter(function (e) {
          return o("WAWebInstantsConsumption").isInstantConsumed(e);
        }),
      );
    }
    l.buildInstantViewerFeed = e;
  },
  98,
);
