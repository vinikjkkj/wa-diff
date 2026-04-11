__d(
  "WAWebBotIncomingInvokeSystemMsg",
  [
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotSystemMsg",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id.remote,
            n = e.t;
          if ((yield u(t)) !== !0 && !t.isBot()) {
            var r = o("WAWebBotSystemMsg").createBotInvokeSystemMsg(t, n);
            return r;
          }
          return null;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = null;
          if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
            var n = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getChat",
              { chatId: e },
            );
            return (n && (t = n.hasCreatedBotInvokeSystemMsg), t);
          }
          var r = yield o("WAWebSchemaChat").getChatTable().get(e.toString());
          return ((t = r == null ? void 0 : r.hasCreatedBotInvokeSystemMsg), t);
        })),
        c.apply(this, arguments)
      );
    }
    l.createSysMsgForIncomingBotInvoke = e;
  },
  98,
);
