__d(
  "WAWebDefenseModeTransitionListener",
  ["WALogger", "WAWebBulkUnquarantineMessagesJob", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = !1;
    function d() {
      c ||
        ((c = !0),
        (u = o("WAWebUserPrefsGeneral").getUserPrivacySettings().defenseMode),
        o("WAWebUserPrefsGeneral").privacySettingsEventEmitter.on(
          "all",
          function () {
            var t = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                .defenseMode,
              n = u === "on_standard",
              r = t === "on_standard";
            ((u = t),
              n &&
                !r &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[DefenseMode] disabled, triggering bulk unquarantine",
                    ])),
                ),
                o("WAWebBulkUnquarantineMessagesJob")
                  .bulkUnquarantineMessagesJob()
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[DefenseMode] bulk unquarantine failed",
                          ])),
                      )
                      .verbose();
                  })));
          },
        ));
    }
    l.initDefenseModeTransitionListener = d;
  },
  98,
);
