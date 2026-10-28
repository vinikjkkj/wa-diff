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
    var e, s;
    function u() {
      try {
        if (
          o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ||
          !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()
        )
          return;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-dirty-bit] syncing orgs",
            ])),
        ),
          o("WAWebBackendApi").frontendFireAndForget("syncOrgsInBackground", {
            bypassCooldown: !0,
            forceDirectory: !0,
          }));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[org-dirty-bit] could not start the org sync",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("org-dirty-bit-failed");
      }
    }
    l.handleOrgsDirtyBit = u;
  },
  98,
);
