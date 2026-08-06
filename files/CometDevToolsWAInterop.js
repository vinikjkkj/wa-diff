__d(
  "CometDevToolsWAInterop",
  [
    "CometDevToolsCheatCodesInterop",
    "CometDevToolsErrorConsoleInterop",
    "CometDevToolsGKToolInterop",
    "CometDevToolsInteractionTracingInteropModules",
    "CometDevToolsMemoryInterop",
    "CometDevToolsQEToolInterop",
    "CometDevToolsRelayInterop",
    "CometDevToolsRouterInterop",
    "CometDevToolsSSRInspectorInterop",
    "CometDevToolsSmaxInterop",
    "browser-tools-interop",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("browser-tools-interop").BrowserToolsInteropLoader.loadModules(
        [
          o("browser-tools-interop").BrowserToolsWelcomeInterop,
          r("CometDevToolsSmaxInterop"),
          r("CometDevToolsCheatCodesInterop"),
          r("CometDevToolsRelayInterop"),
          r("gkx")("20637") ? r("CometDevToolsSSRInspectorInterop") : null,
        ].concat(r("CometDevToolsInteractionTracingInteropModules"), [
          r("CometDevToolsGKToolInterop"),
          r("CometDevToolsQEToolInterop"),
          r("CometDevToolsErrorConsoleInterop"),
          {
            namespace: o("CometDevToolsMemoryInterop").namespace,
            onConnection: o("CometDevToolsMemoryInterop").onConnection,
          },
          {
            namespace: o("CometDevToolsRouterInterop").namespace,
            onConnection: o("CometDevToolsRouterInterop").onConnection,
          },
        ]),
        "whatsapp",
        e == null ? void 0 : e.connectFromIFrame,
      );
    }
    l.init = e;
  },
  98,
);
