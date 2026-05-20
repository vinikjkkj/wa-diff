__d(
  "WAWebScheduledMsgRevealKeyStore",
  [
    "WAWebBackendApi",
    "WAWebSchemaScheduledMsgRevealKey",
    "asyncToGeneratorRuntime",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          yield t.createOrReplace(e);
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
          var t = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          return t.get(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebSchemaScheduledMsgRevealKey",
            ).getScheduledMsgRevealKeyTable(),
            r = yield n.equals(["revealKeyId"], e);
          return (t = r[0]) != null ? t : null;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          return t.equals(["chatId"], e);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          yield n.merge(e, { status: t });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          (yield t.remove(e),
            o("WAWebBackendApi").frontendFireAndForget(
              "triggerScheduledMsgRevealedFromBridge",
              { msgId: e },
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(e);
          return r("countWhere")(t, function (e) {
            return e.status === "PENDING" || e.status === "FAILED";
          });
        })),
        b.apply(this, arguments)
      );
    }
    ((l.storeRevealKey = e),
      (l.getRevealKeyByMsgId = u),
      (l.getRevealKeyByRevealKeyId = d),
      (l.getRevealKeysForChat = p),
      (l.updateRevealKeyStatus = f),
      (l.deleteRevealKey = h),
      (l.countPendingKeysForChat = C));
  },
  98,
);
