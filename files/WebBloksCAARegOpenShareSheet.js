__d(
  "WebBloksCAARegOpenShareSheet",
  [
    "WebBloksClipboardSetString",
    "WebBloksScriptDebuggingUtils",
    "WebBloksScriptString",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      s(e, t).catch(function (n) {
        o("WebBloksScriptDebuggingUtils").logScriptError(
          e.objectSet,
          n,
          o("WebBloksScriptString").castWebBloksScriptStringFromString(t),
          e,
        );
      });
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { text: t };
          typeof navigator.canShare == "function" &&
          typeof navigator.share == "function" &&
          navigator.canShare(n)
            ? yield navigator.share == null ? void 0 : navigator.share(n)
            : (r("WebBloksClipboardSetString")(e, t),
              e.objectSet.toastManager.enqueueSimpleToast("Link copied"));
        })),
        u.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
