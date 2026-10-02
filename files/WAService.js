__d(
  "WAService",
  [
    "PersistedQueueApi",
    "WAAbPropsInit",
    "WABaseGlobals",
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
    "WATagsLogger",
    "WATimeUtils",
    "WAWaitForComms",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["backend"]);
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.config,
            r = t.dependencies,
            a = t.getCommsConfig,
            i = t.hmacKey,
            l = t.qpl,
            d = t.regData,
            m = t.serverRPC;
          c.LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "initWAInfra for deviceJid: ",
                "",
              ])),
            d.deviceJid,
          );
          var p = o("WACryptoManagerUtils").createCryptoManager(d.regInfo),
            _ = o("WAProtocolQueue").protocolQueue(),
            f = new (o("WAOneQueue").WAOneQueue)({
              cryptoManager: p.manager,
              flushables: [
                o("WADeviceNotificationFlushable").deviceNotificationFlushable,
                o("WAMPSFlushable").mpsFlushable,
                o("WAProtocolQueue").pqFlushable,
                o("WACryptoManager").cryptoManagerFlushable(p.manager),
              ],
              mode: o("WAOfflineUtils").ServerRPCMode.INIT,
            });
          (o("WADanglingQueue").initDanglingQueue(
            o("PersistedQueueApi").persistedQueueApi(),
          ),
            o("WABaseGlobals").setGlobals({
              myJids: { deviceJid: d.deviceJid, userJid: d.userJid },
              jidUtils: o("WAJids").createJidUtils({ platform: "msgr" }),
            }),
            o("WAGlobals").setGlobals({
              config: n,
              dependencies: r,
              myJids: { deviceJid: d.deviceJid, userJid: d.userJid },
              waOneQueue: f,
              hmacKey: i,
              qpl: l,
            }),
            o("WACryptoLibraryConfig").setCryptoLibraryConfig({
              signalFutureMessagesMax: n.getSignalFutureMessagesMax(),
              S508658AutoAcknowledgeStaleSessions: !1,
              isPqKeysUploadEnabled: n.isPqKeysUploadEnabled(),
              isPq1on1MessageEnabled: n.isPq1on1MessageEnabled(),
            }));
          var g = yield o("WAGetClockSkewApi").getClockSkew(),
            h = g.clockSkew;
          (o("WATimeUtils").setClockSkew(h),
            yield o("WAAbPropsInit").initAbProps());
          function y() {
            return (
              c.LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "New comms connection",
                  ])),
              ),
              o("WACommsInit")
                .initComms({
                  stanzaHandler: m.handleStanza,
                  getCommsConfig: a,
                  regInfo: d.regInfo,
                  oneQueue: f,
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Worker inited",
                ])),
            ),
            {
              oneQueue: f,
              protocolQueue: _,
              startComms: y,
              stopComms: function () {
                return o("WAComms").stopComms();
              },
            }
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.makeWAService = d;
  },
  98,
);
