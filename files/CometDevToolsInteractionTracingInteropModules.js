__d(
  "CometDevToolsInteractionTracingInteropModules",
  [
    "CometDevToolsQPLInterop",
    "ConstUriUtils",
    "CurrentAppID",
    "WebLoom",
    "browser-tools-interop",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK",
    "gkx",
    "goForceFullPageRedirectTo",
    "interaction-tracing",
    "isInstagramURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {};
    ((s.isSuspenseDebuggingEnabled = r("gkx")("3654") || r("gkx")("3307")),
      (s.goForceFullPageRedirectTo = r("goForceFullPageRedirectTo")),
      (s.getWrapperComponentPropArrayFromDOMElement = r(
        "getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK",
      )),
      (s.isInstagramURI = function (e) {
        return r("isInstagramURI")(e);
      }),
      (s.URI = function (e) {
        return o("ConstUriUtils").getUri(e);
      }),
      o("browser-tools-interop").BrowserToolsSuspenseInteropSetup(s),
      (e.appIdForScuba = o("CurrentAppID").getAppID()),
      (e.getReactComponentStackFromDOMElement_THIS_CAN_BREAK = r(
        "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
      )),
      o("browser-tools-interop").BrowserToolsVisualCompletionInteropSetup(e));
    var u = [
      o("browser-tools-interop").BrowserToolsLoomInterop.create(r("WebLoom")),
      o("browser-tools-interop").BrowserToolsInteractionTracingInterop.create(
        r("interaction-tracing"),
      ),
      o("browser-tools-interop").BrowserToolsSuspenseInterop.create(
        r("interaction-tracing"),
        s,
      ),
      r("CometDevToolsQPLInterop"),
      o("browser-tools-interop").BrowserToolsVisualCompletionInterop,
    ];
    l.default = u;
  },
  98,
);
