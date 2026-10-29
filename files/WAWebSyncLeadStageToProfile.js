__d(
  "WAWebSyncLeadStageToProfile",
  [
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCustomerManagerGating",
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
      d,
      m = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebCustomerDataFieldSaver")
            .__setRef("WAWebSyncLeadStageToProfile")
            .load();
        }),
        "CustomerProfileLeadStage",
      );
    function p(e) {
      var t;
      if (!e.id.isUser()) return null;
      var n =
        (t = e.accountLid) != null
          ? t
          : o("WAWebLidMigrationUtils").toUserLid(e.id);
      return n != null ? o("WAWebWidToJid").widToChatJid(n) : null;
    }
    function _(e) {
      var t,
        n,
        r,
        a = o("WAWebChatCollection").ChatCollection.get(e.id);
      return (t = a != null ? p(a) : null) != null
        ? t
        : o("WAJids").validateChatJid(
            (n = (r = e.id) == null ? void 0 : r.toJid()) != null ? n : "",
          );
    }
    function f(e) {
      var t = o("WAWebWidFactory").createWid(e);
      if (!o("WAWebCustomerManagerGating").isWidEligibleForCustomerFields(t))
        return null;
      var n = o("WAWebChatCollection").ChatCollection.get(e);
      if (n != null) return p(n);
      var r = o("WAWebLidMigrationUtils").toUserLid(t);
      return r != null ? o("WAWebWidToJid").widToChatJid(r) : null;
    }
    function g(t, n, a) {
      if (t == null) {
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage skipped: chat has no LID",
              ])),
          )
          .sendLogs("lead-stage-customer-profile-no-lid"),
          y(a, { status: "skipped_no_lid" }));
        return;
      }
      m()
        .then(function (e) {
          return e.upsertLeadStageToProfile(t, n);
        })
        .then(
          function () {
            return { status: "written" };
          },
          function (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[customer_manager] lead stage customer profile upsert failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("lead-stage-customer-profile-upsert-fail"),
              { error: r("getErrorSafe")(e), status: "failed" }
            );
          },
        )
        .then(function (e) {
          return y(a, e);
        });
    }
    function h(e) {
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
      m()
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
    function y(e, t) {
      try {
        e == null || e(t);
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage mirror observer threw",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("lead-stage-customer-profile-observer-throw");
      }
    }
    ((l.getLeadProfileChatJid = p),
      (l.getLeadProfileChatJidForContact = _),
      (l.getLeadProfileChatJidForChatJid = f),
      (l.syncLeadStageToProfile = g),
      (l.clearLeadStageOnProfile = h));
  },
  98,
);
