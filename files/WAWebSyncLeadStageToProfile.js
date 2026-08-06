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
    var e, s;
    function u(e) {
      var t;
      if (!e.id.isUser()) return null;
      var n =
        (t = e.accountLid) != null
          ? t
          : o("WAWebLidMigrationUtils").toUserLid(e.id);
      return n != null ? o("WAWebWidToJid").widToChatJid(n) : null;
    }
    function c(t, n) {
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
    ((l.getLeadProfileChatJid = u), (l.syncLeadStageToProfile = c));
  },
  98,
);
