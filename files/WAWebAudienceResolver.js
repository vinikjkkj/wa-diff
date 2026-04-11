__d(
  "WAWebAudienceResolver",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebBizBroadcastsContactVerifier",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBMessageRange",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSchemaLabelAssociation",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.type ===
            o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_EXPLICIT
            ? Array.from(e.userJids)
            : e.type ===
                o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE
              ? d(e.predicateType, e.params)
              : [];
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          switch (e) {
            case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL:
              return p(t == null ? void 0 : t.labelIds);
            case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_ALL_CONTACTS:
              return h();
            case o("WAWebAudienceExpressionTypes")
              .PREDICATE_TYPE_CHATTED_RECENTLY:
              return v((n = t == null ? void 0 : t.days) != null ? n : 30);
            case o("WAWebAudienceExpressionTypes")
              .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY:
              return R((r = t == null ? void 0 : t.days) != null ? r : 30);
            default:
              return [];
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null || e.length === 0) return [];
          var t = yield o(
              "WAWebDBLabelAssociationDatabaseApi",
            ).queryLabelAssociationsForLabelIds(e),
            n = new Set();
          for (var a of t)
            if (
              a.type ===
              o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").all(),
            n = new Set();
          for (var o of t)
            (!e || o.type === "in") &&
              r("WAWebWid").isStringLid(o.id) &&
              !r("WAWebWid").isBot(o.id) &&
              !r("WAWebWid").isPSA(o.id) &&
              n.add(o.id);
          return n;
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f(!0);
          return Array.from(e);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i =
              o("WATimeUtils").unixTime() - t * o("WATimeUtils").DAY_SECONDS,
            l = new Set(),
            u = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit(),
            c = yield o("WAWebSchemaChat").getChatTable().all({ limit: u }),
            d = [];
          if (
            (yield (s || (s = n("Promise"))).all(
              c.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = o("WAWebWidFactory").createWid(e.id);
                      if (t.isUser()) {
                        var n = yield o(
                          "WAWebDBMessageRange",
                        ).getLastMessageTimestamp(t);
                        if (a(n, i)) {
                          var s = e.accountLid;
                          if (s != null && r("WAWebWid").isStringLid(s)) {
                            l.add(s);
                            return;
                          }
                          var u = o("WAWebLidMigrationUtils").toLid(t);
                          if (
                            u != null &&
                            r("WAWebWid").isStringLid(u.toString())
                          ) {
                            l.add(u.toString());
                            return;
                          }
                          if (r("WAWebWid").isStringLid(e.id)) {
                            l.add(e.id);
                            return;
                          }
                          var c = t.user;
                          c != null && d.push(c);
                        }
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            d.length > 0)
          )
            try {
              var m = yield o(
                "WAWebBizBroadcastsContactVerifier",
              ).resolveLidsFromPhones(d);
              for (var p of d) {
                var _ = m[p];
                _ != null && l.add(_);
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
          return Array.from(l);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return C(e, function (e, t) {
            return e != null && e >= t;
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return C(e, function (e, t) {
            return e == null || e < t;
          });
        })),
        L.apply(this, arguments)
      );
    }
    l.resolveAudienceExpression = u;
  },
  98,
);
