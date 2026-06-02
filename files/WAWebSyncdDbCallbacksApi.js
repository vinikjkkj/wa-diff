__d(
  "WAWebSyncdDbCallbacksApi",
  [
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSyncdFatal",
    "WAWebSyncdLogs",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return (
          t.deviceIndex === 0 &&
            r(
              "WAWebAndroidUnsupportedActionsSync",
            ).updatePrimaryAllowsAllMutationsFlag("device index"),
          Promise.resolve()
        );
      },
      s = function (t) {
        return (
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerAppStateSyncCompleted(t),
          Promise.resolve()
        );
      },
      u = function () {
        return o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd()
          .then(async function () {});
      },
      c = function (t) {
        return o("WAWebSyncdFatal").handleFatalError(
          t == null ? void 0 : t.collections,
        );
      };
    function d(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .bulkGet(e)
        .then(function (e) {
          return e.map(function (e) {
            return e == null ? void 0 : e.accountLid;
          });
        });
    }
    async function m(e) {
      var t = await o("WAWebSchemaChat").getChatTable().bulkGet(e, !1),
        n = [];
      for (var r of t)
        (r == null ? void 0 : r.historyChatId) != null &&
          r.historyChatId !== "" &&
          n.push(r.historyChatId);
      return n;
    }
    async function p(e) {
      if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated())
        return [];
      for (
        var t = e
            .map(function (e) {
              return r("WAWebMsgKey").fromString(e);
            })
            .filter(function (e) {
              return e.remote.isUser() && !e.remote.isLid();
            }),
          n = (
            await o("WAWebSchemaChat")
              .getChatTable()
              .bulkGet(
                t.map(function (e) {
                  return e.remote.toString();
                }),
              )
          ).map(function (e) {
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
    }
    async function _(e) {
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
          a = await o("WAWebSchemaChat").getChatTable().bulkGet(n, !1),
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
    }
    ((l.handleSyncBeforeApplyPatch = e),
      (l.handleSyncCompleted = s),
      (l.handleSyncDelayApplyingPatchUntilUIUnblocks = u),
      (l.handleSyncdFatal = c),
      (l.writeSyncdLog = o("WAWebSyncdLogs").writeSyncdLogImpl),
      (l.printSyncdLog = o("WAWebSyncdLogs").printSyncdLogs),
      (l.bulkGetAccountLid = d),
      (l.getAdditionalHistoryChatIds = m),
      (l.getAdditionalLidMsgKeys = p),
      (l.getAdditionalHistoryChatIdMsgKeys = _));
  },
  98,
);
