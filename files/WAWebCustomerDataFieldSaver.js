__d(
  "WAWebCustomerDataFieldSaver",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebApplyLeadStageSublistAction",
    "WAWebContactCollection",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerManagerApplyLeadLabelAction",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebFrontendContactGetters",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield _([{ chatJid: e, extraFields: n, leadStage: t }]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = e.chatJid,
        r = e.extraFields,
        o = e.leadStage;
      return {
        chatJid: n,
        profile: babelHelpers.extends({}, r, { leadStage: o, name: t }),
      };
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t.forEach(function (t) {
            var n = t.chatJid,
              a = t.leadStage;
            if (!n.endsWith(o("WAJids").LID_DOMAIN))
              throw r("err")(
                '[CustomerManager] upsertAsCustomer: chatJid must be LID-based, got "' +
                  n +
                  '"',
              );
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] upsertAsCustomer: chatJid ",
                  ", leadStage ",
                  "",
                ])),
              n,
              String(a),
            );
          });
          try {
            yield o(
              "WAWebContactManagerCustomerProfileUpsertMutation",
            ).upsertCustomerProfilesToServer(
              t.map(function (e) {
                return p(e, $(e.chatJid));
              }),
            );
          } finally {
            t.forEach(function (e) {
              var t = e.chatJid;
              return o(
                "WAWebCustomerProfileChangeNotifier",
              ).notifyCustomerProfileChanged(t);
            });
          }
          yield C(t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e.forEach(function (e, t) {
            var n = e.chatJid;
            if (!n.endsWith(o("WAJids").LID_DOMAIN))
              throw r("err")(
                "[CustomerManager] createCustomersIfAbsent: chatJid must be LID-based at entry " +
                  (t + 1),
              );
          });
          var n;
          try {
            n = yield o(
              "WAWebContactManagerCustomerProfileUpsertMutation",
            ).createCustomerProfilesIfAbsent(
              e.map(function (e) {
                var t;
                return p(
                  e,
                  ((t = e.extraFields) == null || (t = t.name) == null
                    ? void 0
                    : t.trim()) || $(e.chatJid),
                );
              }),
            );
          } finally {
            e.forEach(function (e) {
              var t = e.chatJid;
              return o(
                "WAWebCustomerProfileChangeNotifier",
              ).notifyCustomerProfileChanged(t);
            });
          }
          return (
            (t == null ? void 0 : t.skipLeadArtifacts) !== !0 &&
              (yield C(
                e.filter(function (e, t) {
                  return n[t] === "written";
                }),
              )),
            n
          );
        })),
        h.apply(this, arguments)
      );
    }
    var y = 10;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = 0), !(t >= e.length))) {
            var r = e.slice(t, t + y);
            return (
              yield (c || (c = n("Promise"))).all(
                r.map(function (e) {
                  return (c || (c = n("Promise"))).all([v(e.chatJid), R(e)]);
                }),
              ),
              C(e, t + y)
            );
          }
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
          try {
            yield o(
              "WAWebCustomerManagerApplyLeadLabelAction",
            ).customerManagerApplyLeadLabelToChat(e);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[CustomerManager] Failed to auto-apply Lead label: ",
                    "",
                  ])),
                String(e),
              )
              .sendLogs("customer_manager_label_apply_failed");
          }
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
          var t = e.chatJid,
            n = e.leadStage;
          if (n != null)
            try {
              yield o(
                "WAWebApplyLeadStageSublistAction",
              ).applyLeadStageSublistForProfile(t, n, null);
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomerManager] Failed to write lead stage sub-list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("customer_manager_lead_stage_sublist_write_failed");
            }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileToServer(e, { leadStage: t, name: $(e) }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(e, {
            field: "leadStage",
            value: null,
          }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(e, t),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    ((l.upsertAsCustomer = d),
      (l.upsertAsCustomers = _),
      (l.createCustomersIfAbsent = g),
      (l.upsertLeadStageToProfile = E),
      (l.clearLeadStageOnProfile = I),
      (l.upsertCustomerFieldToProfile = D));
  },
  98,
);
