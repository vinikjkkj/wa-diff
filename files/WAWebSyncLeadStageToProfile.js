__d(
  "WAWebSyncLeadStageToProfile",
  [
    "WALogger",
    "WAWebCustomerDataFieldSaver",
    "WAWebLidMigrationUtils",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t;
      if (!e.id.isUser()) return null;
      var n =
        (t = e.accountLid) != null
          ? t
          : o("WAWebLidMigrationUtils").toUserLid(e.id);
      return n != null ? o("WAWebWidToJid").widToChatJid(n) : null;
    }
    function m(t, n) {
      if (t == null) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage skipped: chat has no LID",
              ])),
          )
          .sendLogs("lead-stage-customer-profile-no-lid");
        return;
      }
      o("WAWebCustomerDataFieldSaver")
        .upsertLeadStageToProfile(t, n)
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[customer_manager] lead stage customer profile upsert failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("lead-stage-customer-profile-upsert-fail");
        });
    }
    function p(e) {
      if (e == null) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage clear skipped: chat has no LID",
              ])),
          )
          .sendLogs("lead-stage-customer-profile-no-lid");
        return;
      }
      o("WAWebCustomerDataFieldSaver")
        .clearLeadStageOnProfile(e)
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[customer_manager] lead stage customer profile clear failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("lead-stage-customer-profile-clear-fail");
        });
    }
    ((l.getLeadProfileChatJid = d),
      (l.syncLeadStageToProfile = m),
      (l.clearLeadStageOnProfile = p));
  },
  98,
);
