__d(
  "WAService",
  [
    "MsgrSchedulerQPL",
    "PersistedQueueApi",
    "TaskSchedulerPriority",
    "WAAbPropsInit",
    "WABaseGlobals",
    "WACastStanzas",
    "WAComms",
    "WACommsInit",
    "WACryptoLibraryConfig",
    "WACryptoManager",
    "WACryptoManagerUtils",
    "WADanglingQueue",
    "WADeviceNotificationFlushable",
    "WAGetClockSkewApi",
    "WAGlobals",
    "WAJids",
    "WAMPSFlushable",
    "WAOfflineUtils",
    "WAOneQueue",
    "WAProtocolQueue",
    "WAPullMode",
    "WATagsLogger",
    "WATimeUtils",
    "WAWaitForComms",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["backend"]);
    async function d(t) {
      var n = t.config,
        a = t.dependencies,
        i = t.getCommsConfig,
        l = t.hmacKey,
        d = t.qpl,
        m = t.regData,
        p = t.serverRPC;
      c.LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "initWAInfra for deviceJid: ",
            "",
          ])),
        m.deviceJid,
      );
      var _ = o("WACryptoManagerUtils").createCryptoManager(m.regInfo),
        f = o("WAProtocolQueue").protocolQueue(),
        g = new (o("WAOneQueue").WAOneQueue)({
          castAcks: o("WACastStanzas").castStanzasToServer,
          context: { cryptoManager: _.manager },
          danglingQueue: { clear: o("WADanglingQueue").danglingQueueClear },
          enqueuePriority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
          flushables: [
            o("WADeviceNotificationFlushable").deviceNotificationFlushable,
            o("WAMPSFlushable").mpsFlushable,
            o("WAProtocolQueue").pqFlushable,
            o("WACryptoManager").cryptoManagerFlushable(_.manager),
          ],
          mode: o("WAOfflineUtils").ServerRPCMode.INIT,
          promotionTimeoutMs: 200,
          pullMode: new (o("WAPullMode").PullMode)(
            o("WAPullMode").defaultOfflineBatchSize,
            {
              isAdaptiveLowWatermarkEnabled: function () {
                return r("gkx")("29355");
              },
            },
          ),
          schedulerLifecycleListener: o(
            "MsgrSchedulerQPL",
          ).makeMsgrSchedulerQPLListener({ defaultSamplingRate: 8e3 }),
          schedulerName: "wa",
        });
      (o("WADanglingQueue").initDanglingQueue(
        o("PersistedQueueApi").persistedQueueApi(),
      ),
        o("WABaseGlobals").setGlobals({
          myJids: { deviceJid: m.deviceJid, userJid: m.userJid },
          jidUtils: o("WAJids").createJidUtils({ platform: "msgr" }),
        }),
        o("WAGlobals").setGlobals({
          config: n,
          dependencies: a,
          myJids: { deviceJid: m.deviceJid, userJid: m.userJid },
          waOneQueue: g,
          hmacKey: l,
          qpl: d,
        }),
        o("WACryptoLibraryConfig").setCryptoLibraryConfig({
          signalFutureMessagesMax: n.getSignalFutureMessagesMax(),
          S508658AutoAcknowledgeStaleSessions: !1,
          isPqKeysUploadEnabled: n.isPqKeysUploadEnabled(),
          isPq1on1MessageEnabled: n.isPq1on1MessageEnabled(),
        }));
      var h = await o("WAGetClockSkewApi").getClockSkew(),
        y = h.clockSkew;
      (o("WATimeUtils").setClockSkew(y),
        await o("WAAbPropsInit").initAbProps());
      function C() {
        return (
          c.LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "New comms connection",
              ])),
          ),
          o("WACommsInit")
            .initComms({
              stanzaHandler: p.handleStanza,
              getCommsConfig: i,
              regInfo: m.regInfo,
              oneQueue: g,
              fullCommsSync: !0,
            })
            .catch(function (e) {
              o("WAWaitForComms").failComms(e);
            }),
          o("WAWaitForComms").waitForComms()
        );
      }
      return (
        c.LOG(
          u || (u = babelHelpers.taggedTemplateLiteralLoose(["Worker inited"])),
        ),
        {
          oneQueue: g,
          protocolQueue: f,
          startComms: C,
          stopComms: function () {
            return o("WAComms").stopComms();
          },
        }
      );
    }
    l.makeWAService = d;
  },
  98,
);
