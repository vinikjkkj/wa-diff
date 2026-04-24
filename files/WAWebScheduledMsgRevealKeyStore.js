__d(
  "WAWebScheduledMsgRevealKeyStore",
  [
    "WATimeUtils",
    "WAWebModelStorageUtils",
    "WAWebScheduledMsgConstants",
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
          var t = o(
              "WAWebSchemaScheduledMsgRevealKey",
            ).getScheduledMsgRevealKeyTable(),
            n = yield t.equals(["revealKeyId"], e);
          for (var r of n) if (r.isOrphan === 0) return r;
          return null;
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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["scheduled-msg-reveal-key"],
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var r = n[0],
                      o = yield r.get(e);
                    o != null &&
                      (e === t
                        ? yield r.merge(e, { isOrphan: 0 })
                        : (yield r.remove(e),
                          yield r.createOrReplace(
                            babelHelpers.extends({}, o, {
                              msgId: t,
                              isOrphan: 0,
                            }),
                          )));
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
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
          var t = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          yield t.remove(e);
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
            "WAWebSchemaScheduledMsgRevealKey",
          ).getScheduledMsgRevealKeyTable();
          return e.equals(["isOrphan"], 1);
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = 86400,
            t =
              o("WAWebScheduledMsgConstants")
                .SCHEDULED_MSG_ORPHAN_KEY_RETENTION_DAYS * e,
            n = o("WATimeUtils").unixTime() - t,
            r = o(
              "WAWebSchemaScheduledMsgRevealKey",
            ).getScheduledMsgRevealKeyTable(),
            a = yield r.equals(["isOrphan"], 1),
            i = [];
          for (var l of a) l.createdAt < n && i.push(l.msgId);
          return (i.length > 0 && (yield r.bulkRemove(i)), i.length);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(e);
          return r("countWhere")(t, function (e) {
            return e.status === "PENDING" || e.status === "FAILED";
          });
        })),
        k.apply(this, arguments)
      );
    }
    ((l.storeRevealKey = e),
      (l.getRevealKeyByMsgId = u),
      (l.getRevealKeyByRevealKeyId = d),
      (l.getRevealKeysForChat = p),
      (l.updateRevealKeyStatus = f),
      (l.linkKeyToMessage = h),
      (l.deleteRevealKey = C),
      (l.getOrphanKeys = v),
      (l.cleanupExpiredKeys = R),
      (l.countPendingKeysForChat = E));
  },
  98,
);
