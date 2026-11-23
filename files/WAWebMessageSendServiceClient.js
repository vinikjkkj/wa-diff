__d(
  "WAWebMessageSendServiceClient",
  ["WAWebMessageSendService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        storeAndSend: function (n, r, a) {
          return e(
            o("WAWebMessageSendService").MessageSendService,
            function (e) {
              return e.storeAndSend(n, r, a);
            },
          );
        },
        prepareChatForMessageSending: function (n) {
          return e(
            o("WAWebMessageSendService").MessageSendService,
            function (e) {
              return e.prepareChatForMessageSending(n);
            },
          );
        },
        sendMsgRecord: function (n) {
          return e(
            o("WAWebMessageSendService").MessageSendService,
            function (e) {
              return e.sendMsgRecord(n);
            },
          );
        },
        sendAddonRecord: function (n) {
          return e(
            o("WAWebMessageSendService").MessageSendService,
            function (e) {
              return e.sendAddonRecord(n);
            },
          );
        },
        resendLatestEdit: function (n) {
          return e(
            o("WAWebMessageSendService").MessageSendService,
            function (e) {
              return e.resendLatestEdit(n);
            },
          );
        },
      };
    }
    l.messageSendServiceClient = e;
  },
  98,
);
