__d(
  "WAWebHandleOrgsDirtyBit",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallsOnlyGating",
    "WAWebOrgGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      try {
        if (
          o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ||
          !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()
        )
          return;
        o("WAWebBackendApi").frontendFireAndForget("syncOrgsInBackground", {
          bypassCooldown: !0,
          forceDirectory: !0,
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-dirty-bit] could not start the org sync",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("org-dirty-bit-failed");
      }
    }
    l.handleOrgsDirtyBit = s;
  },
  98,
);
