__d(
  "WebBloksCAAMobileWebEncryptPassword",
  ["FBBrowserPasswordEncryption", "WebBloksScriptDebuggingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = Math.floor(Date.now() / 1e3).toString();
      o("FBBrowserPasswordEncryption")
        .encryptPassword(n, r, t, i)
        .then(function (t) {
          e.execute(a, [t]);
        })
        .catch(function (t) {
          return o("WebBloksScriptDebuggingUtils").logScriptError(
            e.bloksContext.objectSet,
            t,
            a,
            e,
          );
        });
    }
    l.default = e;
  },
  98,
);
