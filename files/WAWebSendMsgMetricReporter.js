__d(
  "WAWebSendMsgMetricReporter",
  [
    "WAWebCoreActionsODS",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMsgType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        createPostODSCountersFn: (e = o("WAWebCoreActionsODS"))
          .createPostODSCountersFn,
        createPostODSErrorCountersFn: e.createPostODSErrorCountersFn,
        logMCMigrationControl: e.logMCMigrationControl,
        logMCMigrationRegression: e.logMCMigrationRegression,
        logMCMigrationTest: e.logMCMigrationTest,
      };
    function u(e, t, n) {
      return new (o("WAWebMessageSendReporter").MessageSendReporter)(
        e,
        babelHelpers.extends({}, n, { frontendDeps: t, odsDeps: s }),
      );
    }
    var c = function (t, n) {
        var e = {
          createSendReporter: function (r) {
            return u(t, n, r);
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
      d = function (t, n) {
        var e = u(t, n),
          r = new (o("WAWebMessageSendPerfReporter").MessageSendPerfReporter)({
            chatWid: t.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
          });
        if (t.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
          var a;
          (a = r) == null || a.setIsRevokeMessage(!0);
        }
        var i = {
          createSendReporter: function (r) {
            return u(t, n, r);
          },
          sendReporter: null,
          sendPerfReporter: null,
        };
        return (
          Object.defineProperty(i, "sendReporter", {
            get: function () {
              return e;
            },
            set: function (n) {
              e = n;
            },
            enumerable: !0,
          }),
          Object.defineProperty(i, "sendPerfReporter", {
            get: function () {
              return r;
            },
            set: function (t) {
              r = t;
            },
            enumerable: !0,
          }),
          i
        );
      };
    ((l.createMsgModelMetricReporter = c), (l.createAddonMetricReporter = d));
  },
  98,
);
