__d(
  "WAWebSyncdDbCallbacksApi",
  [
    "Promise",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSyncdFatal",
    "WAWebSyncdLogs",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (o) {
        return (
          o.deviceIndex === 0 &&
            r(
              "WAWebAndroidUnsupportedActionsSync",
            ).updatePrimaryAllowsAllMutationsFlag("device index"),
          (e || (e = n("Promise"))).resolve()
        );
      },
      u = function (r) {
        return (
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerAppStateSyncCompleted(r),
          (e || (e = n("Promise"))).resolve()
        );
      },
      c = function () {
        return o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd()
          .then(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {}));
      },
      d = function (t) {
        return o("WAWebSyncdFatal").handleFatalError(
          t == null ? void 0 : t.collections,
        );
      };
    function m(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .bulkGet(e)
        .then(function (e) {
          return e.map(function (e) {
            return e == null ? void 0 : e.accountLid;
          });
        });
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat").getChatTable().bulkGet(e, !1),
            n = [];
          for (var r of t)
            (r == null ? void 0 : r.historyChatId) != null &&
              r.historyChatId !== "" &&
              n.push(r.historyChatId);
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
          )
            return [];
          for (
            var t = e
                .map(function (e) {
                  return r("WAWebMsgKey").fromString(e);
                })
                .filter(function (e) {
                  return e.remote.isUser() && !e.remote.isLid();
                }),
              n = (yield o("WAWebSchemaChat")
                .getChatTable()
                .bulkGet(
                  t.map(function (e) {
                    return e.remote.toString();
                  }),
                )).map(function (e) {
                return e == null ? void 0 : e.accountLid;
              }),
              a = [],
              i = 0;
            i < t.length;
            i++
          ) {
            var l = n[i];
            if (l != null) {
              var s = t[i];
              a.push(
                new (r("WAWebMsgKey"))({
                  fromMe: s.fromMe,
                  remote: o("WAWebWidFactory").createWid(l),
                  id: s.id,
                }).toString(),
              );
            }
          }
          return a;
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
          var t = e
            .map(function (e) {
              return r("WAWebMsgKey").fromString(e);
            })
            .filter(function (e) {
              return e.remote.isLid();
            });
          if (t.length === 0) return [];
          for (
            var n = Array.from(
                new Set(
                  t.map(function (e) {
                    return e.remote.toString();
                  }),
                ),
              ),
              a = yield o("WAWebSchemaChat").getChatTable().bulkGet(n, !1),
              i = new Map(),
              l = 0;
            l < n.length;
            l++
          ) {
            var s,
              u = (s = a[l]) == null ? void 0 : s.historyChatId;
            u != null && u !== "" && i.set(n[l], u);
          }
          var c = [];
          for (var d of t) {
            var m = i.get(d.remote.toString());
            m != null &&
              c.push(
                new (r("WAWebMsgKey"))({
                  fromMe: d.fromMe,
                  remote: o("WAWebWidFactory").createWid(m),
                  id: d.id,
                  participant: d.participant,
                }).toString(),
              );
          }
          return c;
        })),
        y.apply(this, arguments)
      );
    }
    ((l.handleSyncBeforeApplyPatch = s),
      (l.handleSyncCompleted = u),
      (l.handleSyncDelayApplyingPatchUntilUIUnblocks = c),
      (l.handleSyncdFatal = d),
      (l.writeSyncdLog = o("WAWebSyncdLogs").writeSyncdLogImpl),
      (l.printSyncdLog = o("WAWebSyncdLogs").printSyncdLogs),
      (l.bulkGetAccountLid = m),
      (l.getAdditionalHistoryChatIds = p),
      (l.getAdditionalLidMsgKeys = f),
      (l.getAdditionalHistoryChatIdMsgKeys = h));
  },
  98,
);
