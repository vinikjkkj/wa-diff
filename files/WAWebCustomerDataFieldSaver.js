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
          yield p([{ chatJid: e, extraFields: n, leadStage: t }]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                var t = e.chatJid,
                  n = e.extraFields,
                  r = e.leadStage;
                return {
                  chatJid: t,
                  profile: {
                    acquisitionSource: n == null ? void 0 : n.acquisitionSource,
                    address: n == null ? void 0 : n.address,
                    birthday: n == null ? void 0 : n.birthday,
                    email: n == null ? void 0 : n.email,
                    lastOrder: n == null ? void 0 : n.lastOrder,
                    leadStage: r,
                    name: T(t),
                  },
                };
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
          yield g(t, 0);
        })),
        _.apply(this, arguments)
      );
    }
    var f = 10;
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!(t >= e.length)) {
            var r = e.slice(t, t + f);
            (yield (c || (c = n("Promise"))).all(
              r.map(function (e) {
                return (c || (c = n("Promise"))).all([y(e.chatJid), b(e)]);
              }),
            ),
              yield g(e, t + f));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileToServer(e, { leadStage: t, name: T(e) }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(e, t),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    ((l.upsertAsCustomer = d),
      (l.upsertAsCustomers = p),
      (l.upsertLeadStageToProfile = S),
      (l.clearLeadStageOnProfile = L),
      (l.upsertCustomerFieldToProfile = k));
  },
  98,
);
