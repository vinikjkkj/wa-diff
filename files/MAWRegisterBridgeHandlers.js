__d(
  "MAWRegisterBridgeHandlers",
  [
    "BackendInitLoggingUtils",
    "EBBridgedAPIHandler",
    "EBLogger",
    "EBMinosBridgedAPIHandler",
    "EBSMBridgeHandlers",
    "KeyTransparencyBridgeHandlers",
    "MAWDeleteThread",
    "MAWMpsBridgeHandlers",
    "MAWODSProxy",
    "MWFBLogger",
    "WAAPIBridgeHandlers",
    "WABridgedAPIHandler",
    "WAMockServerShell",
    "WAWaitForComms",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return e.type === "deleteThread"
        ? o("WAWaitForComms")
            .waitForComms()
            .then(function () {
              return o("MAWDeleteThread").deleteThreadImpl(e.args.chatJid);
            })
        : void 0;
    }
    function d(t, n) {
      (t.setHandlers(
        "kt",
        o("KeyTransparencyBridgeHandlers").keyTransparencyBridgeHandlers,
      ),
        t.setHandlers("mps", o("MAWMpsBridgeHandlers").mpsBridgeHandlers),
        t.setHandlers("waapi", o("WAAPIBridgeHandlers").waapiBridgeHandlers),
        t.setHandlers("ebsmapi", o("EBSMBridgeHandlers").ebsmapiBridgeHandlers),
        t.setHandlers(
          "backend",
          babelHelpers.extends({}, n.bridgeHandlers, {
            ebapi: async function (n) {
              (o("MAWODSProxy").bumpBridgeRouteSubtypeUsage("ebapi", n.type),
                await o("WAWaitForComms").waitForComms());
              var t = o("EBBridgedAPIHandler").ebapi[n.type];
              return (
                t == null &&
                  o("EBLogger")
                    .EBLogger()
                    .tags(["EBBridgedAPI"])
                    .MUSTFIX(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "handle with type ",
                          " not found",
                        ])),
                      n.type,
                    ),
                t.apply(void 0, n.args)
              );
            },
            igdapi: function () {
              return Promise.resolve();
            },
            initMockServer: function (t) {
              return o("WAMockServerShell").getMockServer == null
                ? Promise.reject(
                    "Mock server is not available. Make sure you use worker v2",
                  )
                : o("WAMockServerShell").getMockServer().init(t);
            },
            minosEBAPI: async function (t) {
              (o("MAWODSProxy").bumpBridgeRouteSubtypeUsage(
                "minosEBAPI",
                t.type,
              ),
                await o("WAWaitForComms").waitForComms());
              var e = o("EBMinosBridgedAPIHandler").minosEBAPI[t.type];
              return (
                e == null &&
                  o("EBLogger")
                    .EBLogger()
                    .tags(["EBMinosBridgedAPI"])
                    .MUSTFIX(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "handle with type ",
                          " not found",
                        ])),
                      t.type,
                    ),
                e.apply(void 0, t.args)
              );
            },
            runJobFireAndForget: c,
            runJobWaitUntilCompleted: c,
            runMock: function (t) {
              return o("WAMockServerShell").getMockServer == null
                ? Promise.reject(
                    "Mock server is not available. Make sure you use worker v2",
                  )
                : o("WAMockServerShell").getMockServer().runMock(t);
            },
            setMockVariables: function (t) {
              if (o("WAMockServerShell").getMockServer == null)
                throw r("err")(
                  "Mock server is not available. Make sure you use worker v2",
                );
              o("WAMockServerShell").getMockServer().setVariables(t.variables);
            },
            waapi: async function (t) {
              (o("MAWODSProxy").bumpBridgeRouteSubtypeUsage("waapi", t.type),
                await o("WAWaitForComms").waitForComms());
              var e = o("WABridgedAPIHandler").waapi[t.type];
              return (
                e == null &&
                  o("MWFBLogger")
                    .MWLogger()
                    .tags(["backend"])
                    .tags(["WABridgedAPI"])
                    .MUSTFIX(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "handle with type ",
                          " not found",
                        ])),
                      t.type,
                    ),
                e.apply(void 0, t.args)
              );
            },
          }),
          o("MAWODSProxy").bumpBridgeRouteUsage,
        ),
        o("BackendInitLoggingUtils").MAWInitPoint("backend_bridge_ready"));
    }
    l.registerBridgeHandlers = d;
  },
  98,
);
