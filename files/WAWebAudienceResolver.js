__d(
  "WAWebAudienceResolver",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebContactImportContactVerifier",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBMessageRange",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSchemaLabelAssociation",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      return e.type ===
        o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_EXPLICIT
        ? Array.from(new Set(e.userJids))
        : e.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE
          ? u(e.predicateType, e.params)
          : [];
    }
    async function u(e, t) {
      var n, r;
      switch (e) {
        case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL:
          return c(t == null ? void 0 : t.labelIds);
        case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_ALL_CONTACTS:
          return m();
        case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY:
          return _((n = t == null ? void 0 : t.days) != null ? n : 30);
        case o("WAWebAudienceExpressionTypes")
          .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY:
          return f((r = t == null ? void 0 : t.days) != null ? r : 30);
        default:
          return [];
      }
    }
    async function c(e) {
      if (e == null || e.length === 0) return [];
      var t = await o(
          "WAWebDBLabelAssociationDatabaseApi",
        ).queryLabelAssociationsForLabelIds(e),
        n = new Set();
      for (var a of t)
        if (
          a.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
        ) {
          var i = a.associationId;
          if (r("WAWebWid").isStringLid(i)) n.add(i);
          else {
            var l = o("WAWebWidFactory").createWid(i);
            if (!l.isUser()) continue;
            var s = o("WAWebLidMigrationUtils").toLid(l);
            s != null &&
              r("WAWebWid").isStringLid(s.toString()) &&
              ((i = s.toString()), n.add(i));
          }
        }
      return Array.from(n);
    }
    async function d(e) {
      var t = await r("WAWebLidAwareContactsDB").all(),
        n = new Set();
      for (var o of t)
        (!e || o.type === "in") &&
          r("WAWebWid").isStringLid(o.id) &&
          !r("WAWebWid").isBot(o.id) &&
          !r("WAWebWid").isPSA(o.id) &&
          n.add(o.id);
      return n;
    }
    async function m() {
      var e = await d(!0);
      return Array.from(e);
    }
    async function p(t, n) {
      var a = o("WATimeUtils").unixTime() - t * o("WATimeUtils").DAY_SECONDS,
        i = new Set(),
        l = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit(),
        s = await o("WAWebSchemaChat").getChatTable().all({ limit: l }),
        u = [];
      if (
        (await Promise.all(
          s.map(async function (e) {
            var t = o("WAWebWidFactory").createWid(e.id);
            if (t.isUser()) {
              var l = await o("WAWebDBMessageRange").getLastMessageTimestamp(t);
              if (n(l, a)) {
                var s = e.accountLid;
                if (s != null && r("WAWebWid").isStringLid(s)) {
                  i.add(s);
                  return;
                }
                var c = o("WAWebLidMigrationUtils").toLid(t);
                if (c != null && r("WAWebWid").isStringLid(c.toString())) {
                  i.add(c.toString());
                  return;
                }
                if (r("WAWebWid").isStringLid(e.id)) {
                  i.add(e.id);
                  return;
                }
                var d = t.user;
                d != null && u.push(d);
              }
            }
          }),
        ),
        u.length > 0)
      )
        try {
          var c = await o(
            "WAWebContactImportContactVerifier",
          ).resolveLidsFromPhones(u, {
            errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
              .BUSINESS_BROADCAST,
          });
          for (var d of u) {
            var m = c[d];
            m != null && i.add(m);
          }
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:audience-resolver] USync LID resolution failed: ",
                  "",
                ])),
              t,
            )
            .sendLogs("audience-resolver-usync-failed");
        }
      return Array.from(i);
    }
    async function _(e) {
      return p(e, function (e, t) {
        return e != null && e >= t;
      });
    }
    async function f(e) {
      return p(e, function (e, t) {
        return e == null || e < t;
      });
    }
    l.resolveAudienceExpression = s;
  },
  98,
);
