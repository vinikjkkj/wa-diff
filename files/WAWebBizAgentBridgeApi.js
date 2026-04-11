__d(
  "WAWebBizAgentBridgeApi",
  ["WAWebBizAgentAction", "WAWebBizUpdateContactsWithVerifiedNamesAction"],
  function (t, n, r, o, a, i, l) {
    var e = {
      applyContactBusinessProps: function () {
        o(
          "WAWebBizUpdateContactsWithVerifiedNamesAction",
        ).applyContactBusinessProps();
      },
      initializeAgentLog: function () {
        return o("WAWebBizAgentAction").initializeAgentLog();
      },
    };
    l.BizAgentBridgeApi = e;
  },
  98,
);
