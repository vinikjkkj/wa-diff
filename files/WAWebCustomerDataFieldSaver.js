__d(
  "WAWebCustomerDataFieldSaver",
  [
    "WAJids",
    "WALogger",
    "WAWebApplyLeadStageSublistAction",
    "WAWebContactCollection",
    "WAWebContactManagerApplyLeadLabelAction",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebFrontendContactGetters",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (!t.endsWith(o("WAJids").LID_DOMAIN))
            throw r("err")(
              '[ContactManager] upsertAsCustomer: chatJid must be LID-based, got "' +
                t +
                '"',
            );
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ContactManager] upsertAsCustomer: chatJid ",
                  ", leadStage ",
                  "",
                ])),
              t,
              String(n),
            ),
            o("WAWebContactManagerApplyLeadLabelAction")
              .contactManagerApplyLeadLabelToChat(t)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ContactManager] Failed to auto-apply Lead label: ",
                        "",
                      ])),
                    String(e),
                  )
                  .sendLogs("customer_manager_label_apply_failed");
              }),
            n != null)
          )
            try {
              yield o(
                "WAWebApplyLeadStageSublistAction",
              ).applyLeadStageSublistForProfile(t, n, null);
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ContactManager] Failed to write lead stage sub-list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("customer_manager_lead_stage_sublist_write_failed");
            }
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileToServer(t, {
            acquisitionSource: a == null ? void 0 : a.acquisitionSource,
            address: a == null ? void 0 : a.address,
            birthday: a == null ? void 0 : a.birthday,
            email: a == null ? void 0 : a.email,
            lastOrder: a == null ? void 0 : a.lastOrder,
            leadStage: n,
            name: y(t),
          }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(t));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileToServer(e, { leadStage: t, name: y(e) }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(e, t),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    ((l.upsertAsCustomer = c),
      (l.upsertLeadStageToProfile = m),
      (l.clearLeadStageOnProfile = _),
      (l.upsertCustomerFieldToProfile = g));
  },
  98,
);
