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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "gpc_uoom",
      );
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          !o("WAWebUserPrefsGeneral").getGPCCompleted() &&
            o("WAWebAccountLinkingUtils").checkGPCSetting() &&
            (yield p());
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          try {
            t = yield c.getAccountLinkingData();
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] updateUOOMData failed to read account linking data: ",
                    "",
                  ])),
                t,
              )
              .tags("waffle", "account-linking")
              .sendLogs("waffle-update-uoom-db-read-failed", {
                sampling: 0.01,
              });
            return;
          }
          if (t != null) {
            var n = t,
              a = n.accesstoken,
              i;
            try {
              i = yield o("WAWebRelayClient").commitMutation(
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
                .sendLogs("waffle-update-uoom-mutation-failed", {
                  sampling: 0.01,
                });
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
        })),
        _.apply(this, arguments)
      );
    }
    ((l.checkAndTriggerUOOMMutation = d), (l.updateUOOMData = p));
  },
  98,
);
