__d(
  "WAWebSyncLeadStageToProfile",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactManagerGating",
    "WAWebLazyLoadedRetriable",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebCustomerDataFieldSaver")
            .__setRef("WAWebSyncLeadStageToProfile")
            .load();
        }),
        "CustomerProfileLeadStage",
      );
    function m(e) {
      var t;
      if (!e.id.isUser()) return null;
      var n =
        (t = e.accountLid) != null
          ? t
          : o("WAWebLidMigrationUtils").toUserLid(e.id);
      return n != null ? o("WAWebWidToJid").widToChatJid(n) : null;
    }
    function p(e) {
      var t = o("WAWebWidFactory").createWid(e);
      if (!o("WAWebContactManagerGating").isWidEligibleForCustomerFields(t))
        return null;
      var n = o("WAWebChatCollection").ChatCollection.get(e);
      if (n != null) return m(n);
      var r = o("WAWebLidMigrationUtils").toUserLid(t);
      return r != null ? o("WAWebWidToJid").widToChatJid(r) : null;
    }
    function _(t, n) {
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
      d()
        .then(function (e) {
          return e.upsertLeadStageToProfile(t, n);
        })
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
    function f(e) {
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
      d()
        .then(function (t) {
          return t.clearLeadStageOnProfile(e);
        })
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
    ((l.getLeadProfileChatJid = m),
      (l.getLeadProfileChatJidForChatJid = p),
      (l.syncLeadStageToProfile = _),
      (l.clearLeadStageOnProfile = f));
  },
  98,
);
