__d(
  "WebBloksCAAPerformIGDeviceBasedLogin",
  [
    "CAAWebBloksQPLUtils",
    "PolarisOneTapLoginStorage",
    "WebBloksErrors",
    "WebBloksScriptDebuggingUtils",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      try {
        var i = r("nullthrows")(
            o("PolarisOneTapLoginStorage") == null
              ? void 0
              : o("PolarisOneTapLoginStorage").getLoginNonces,
          ),
          l = i(),
          s = l[t],
          u;
        (s == null || s.mid !== n ? (u = "") : (u = s.nonce),
          e.execute(a, [u]));
      } catch (t) {
        (o("WebBloksScriptDebuggingUtils").logScriptError(
          e.bloksContext.objectSet,
          new (o("WebBloksErrors").WebBloksScriptError)(
            r("getErrorSafe")(t).message,
            e,
          ),
          a,
          e,
        ),
          o("CAAWebBloksQPLUtils").getQPLMarkerEndLoginTTIFail(
            "Nonce",
            "AccountsYouMayHave",
            "generic_error_dialog",
          ),
          e.executeCatch(a, [""]));
      }
    }
    l.default = e;
  },
  98,
);
