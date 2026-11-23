__d(
  "MAWZenonSendMultiwayMsgChatdTaskHandler",
  ["CometTaskFrameworkTypes", "WASmaxMultiwaydMultiwayRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WASmaxMultiwaydMultiwayRPC").sendMultiwayRPC(
        e.multiwayRequestArgs,
      );
    }
    ((l.executionContext = o(
      "CometTaskFrameworkTypes",
    ).ExecutionContext.MAW_WORKER),
      (l.handleTask = e));
  },
  98,
);
