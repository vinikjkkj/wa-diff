__d(
  "WAWebSendMsgMetricReporter",
  [
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMsgType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        var e = {
          createSendReporter: function (n) {
            return new (o("WAWebMessageSendReporter").MessageSendReporter)(
              t,
              n,
            );
          },
          sendReporter: null,
          sendPerfReporter: null,
        };
        return (
          Object.defineProperty(e, "sendReporter", {
            get: function () {
              return t.wamMessageSendReporter;
            },
            set: function (n) {
              t.wamMessageSendReporter = n;
            },
            enumerable: !0,
          }),
          Object.defineProperty(e, "sendPerfReporter", {
            get: function () {
              var e;
              return (e = t.wamMessageSendPerfReporter) != null ? e : null;
            },
            set: function (n) {
              t.wamMessageSendPerfReporter = n;
            },
            enumerable: !0,
          }),
          e
        );
      },
      s = function (t) {
        var e = new (o("WAWebMessageSendReporter").MessageSendReporter)(t),
          n = new (o("WAWebMessageSendPerfReporter").MessageSendPerfReporter)({
            chatWid: t.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
          });
        if (t.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
          var r;
          (r = n) == null || r.setIsRevokeMessage(!0);
        }
        var a = {
          createSendReporter: function (n) {
            return new (o("WAWebMessageSendReporter").MessageSendReporter)(
              t,
              n,
            );
          },
          sendReporter: null,
          sendPerfReporter: null,
        };
        return (
          Object.defineProperty(a, "sendReporter", {
            get: function () {
              return e;
            },
            set: function (n) {
              e = n;
            },
            enumerable: !0,
          }),
          Object.defineProperty(a, "sendPerfReporter", {
            get: function () {
              return n;
            },
            set: function (t) {
              n = t;
            },
            enumerable: !0,
          }),
          a
        );
      };
    ((l.createMsgModelMetricReporter = e), (l.createAddonMetricReporter = s));
  },
  98,
);
