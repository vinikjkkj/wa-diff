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
    function c(e, t) {
      var n = {
        createSendReporter: function (r) {
          return u(e, t, r);
        },
        sendReporter: null,
        sendPerfReporter: null,
      };
      return (
        Object.defineProperty(n, "sendReporter", {
          get: function () {
            return e.wamMessageSendReporter;
          },
          set: function (n) {
            e.wamMessageSendReporter = n;
          },
          enumerable: !0,
        }),
        Object.defineProperty(n, "sendPerfReporter", {
          get: function () {
            var t;
            return (t = e.wamMessageSendPerfReporter) != null ? t : null;
          },
          set: function (n) {
            e.wamMessageSendPerfReporter = n;
          },
          enumerable: !0,
        }),
        n
      );
    }
    function d(e, t) {
      var n = u(e, t),
        r = new (o("WAWebMessageSendPerfReporter").MessageSendPerfReporter)({
          chatWid: e.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
        });
      if (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
        var a;
        (a = r) == null || a.setIsRevokeMessage(!0);
      }
      var i = {
        createSendReporter: function (r) {
          return u(e, t, r);
        },
        sendReporter: null,
        sendPerfReporter: null,
      };
      return (
        Object.defineProperty(i, "sendReporter", {
          get: function () {
            return n;
          },
          set: function (t) {
            n = t;
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
    }
    ((l.createMsgModelMetricReporter = c), (l.createAddonMetricReporter = d));
  },
  98,
);
