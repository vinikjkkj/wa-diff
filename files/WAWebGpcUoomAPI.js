__d(
  "WAWebGpcUoomAPI",
  [
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingUtils",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "WAWebUserPrefsGeneral",
    "WAWebWaffleFXWAMOUpdateUOOMMutation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "gpc_uoom",
      );
    async function d() {
      !o("WAWebUserPrefsGeneral").getGPCCompleted() &&
        o("WAWebAccountLinkingUtils").checkGPCSetting() &&
        (await m());
    }
    async function m() {
      var t;
      try {
        t = await c.getAccountLinkingData();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] updateUOOMData db read failed: ",
                "",
              ])),
            t,
          )
          .tags("waffle", "account-linking")
          .sendLogs("waffle-update-uoom-db-read-failed", { sampling: 0.01 });
        return;
      }
      if (t != null) {
        var n = t,
          a = n.accesstoken,
          i;
        try {
          i = await o("WAWebRelayClient").commitMutation(
            r("WAWebWaffleFXWAMOUpdateUOOMMutation"),
            {},
            { accessToken: a },
          );
        } catch (e) {
          var l =
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
              : e;
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] updateUOOMData mutation failed: ",
                  "",
                ])),
              l,
            )
            .tags("waffle", "account-linking")
            .sendLogs("waffle-update-uoom-mutation-failed", { sampling: 0.01 });
          return;
        }
        if (i == null) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] updateUOOMData returned null result",
                ])),
            )
            .tags("waffle", "account-linking")
            .sendLogs("waffle-update-uoom-null-result", { sampling: 0.01 });
          return;
        }
        i.xfb_waffle_fx_wamo_update_uoom === !0 &&
          o("WAWebUserPrefsGeneral").setGPCcompleted(!0);
      }
    }
    ((l.checkAndTriggerUOOMMutation = d), (l.updateUOOMData = m));
  },
  98,
);
