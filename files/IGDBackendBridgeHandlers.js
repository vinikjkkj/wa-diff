__d(
  "IGDBackendBridgeHandlers",
  [
    "EBBridgedAPIHandler",
    "IGDBridgedAPIHandler",
    "IGDLowLevelApiBridgeHandlers",
    "MAWODSProxy",
    "WABridgedAPIHandler",
    "WAMockServerShell",
    "WAWaitForComms",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return babelHelpers.extends(
        {},
        o("IGDLowLevelApiBridgeHandlers").igdBridgeHandlers,
        {
          ebapi: async function (r) {
            (o("MAWODSProxy").bumpBridgeRouteSubtypeUsage("ebapi", r.type),
              await o("WAWaitForComms").waitForComms());
            var n = o("EBBridgedAPIHandler").ebapi[r.type];
            return (
              n == null &&
                t
                  .TAGS(["EBBridgedAPI"])
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handle with type ",
                        " not found",
                      ])),
                    r.type,
                  ),
              n.apply(void 0, r.args)
            );
          },
          igdapi: async function (t) {
            return (
              await o("WAWaitForComms").waitForComms(),
              o("IGDBridgedAPIHandler").igdapi(t)
            );
          },
          initMockServer: function (t) {
            return o("WAMockServerShell").getMockServer == null
              ? Promise.reject(
                  "Mock server is not available. Make sure you use worker v2",
                )
              : o("WAMockServerShell").getMockServer().init(t);
          },
          minosEBAPI: function () {
            throw r("err")("not implemented");
          },
          runJobFireAndForget: function (t) {},
          runJobWaitUntilCompleted: function (t) {},
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
          waapi: async function (n) {
            (o("MAWODSProxy").bumpBridgeRouteSubtypeUsage("waapi", n.type),
              await o("WAWaitForComms").waitForComms());
            var e = o("WABridgedAPIHandler").waapi[n.type];
            return (
              e == null &&
                t
                  .TAGS(["WABridgedAPI"])
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handle with type ",
                        " not found",
                      ])),
                    n.type,
                  ),
              e.apply(void 0, n.args)
            );
          },
        },
      );
    }
    l.getIGDBridgeHandlers = u;
  },
  98,
);
