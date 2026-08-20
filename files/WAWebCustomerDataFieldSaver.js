__d(
  "WAWebCustomerDataFieldSaver",
  [
    "WAJids",
    "WALogger",
    "WAWebApplyLeadStageSublistAction",
    "WAWebContactCollection",
    "WAWebContactManagerApplyLeadLabelAction",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebContactType",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebFrontendContactGetters",
    "WAWebLeadStage",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      var t, n, r, o, a, i, l;
      return {
        contactType: e.contactType,
        email: (t = e.email) != null ? t : "",
        altPhoneNumbers: (n = e.altPhoneNumbers) != null ? n : "",
        birthday: (r = e.birthday) != null ? r : void 0,
        address: (o = e.address) != null ? o : "",
        acquisitionSource: (a = e.acquisitionSource) != null ? a : void 0,
        leadStage: (i = e.leadStage) != null ? i : void 0,
        lastOrder: (l = e.lastOrder) != null ? l : void 0,
      };
    }
    function _(e, t, n) {
      if (t != null) {
        t.set(n);
        var r = p(t);
        return o("WAWebCustomerDataAction").customerDataEditAction(
          t.chatJid,
          r,
          t.createdAt,
        );
      }
      var a = babelHelpers.extends(
        {
          contactType: o("WAWebContactType").ContactType.NONE,
          email: "",
          altPhoneNumbers: "",
          address: "",
          leadStage: o("WAWebLeadStage").LeadStage.NONE,
        },
        n,
      );
      return o("WAWebCustomerDataAction").customerDataAddAction(e, a);
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!e.endsWith(o("WAJids").LID_DOMAIN))
            throw r("err")(
              '[ContactManager] upsertAsCustomer: chatJid must be LID-based, got "' +
                e +
                '"',
            );
          if (
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[ContactManager] upsertAsCustomer: chatJid ",
                  ", leadStage ",
                  "",
                ])),
              e,
              String(t),
            ),
            o("WAWebContactManagerApplyLeadLabelAction")
              .contactManagerApplyLeadLabelToChat(e)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ContactManager] Failed to auto-apply Lead label: ",
                        "",
                      ])),
                    String(e),
                  )
                  .sendLogs("customer_manager_label_apply_failed");
              }),
            t != null && t !== o("WAWebLeadStage").LeadStage.NONE)
          )
            try {
              yield o(
                "WAWebApplyLeadStageSublistAction",
              ).applyLeadStageSublistForProfile(e, t, null);
            } catch (e) {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[ContactManager] Failed to write lead stage sub-list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("customer_manager_lead_stage_sublist_write_failed");
            }
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileToServer(e, {
            acquisitionSource: n == null ? void 0 : n.acquisitionSource,
            address: n == null ? void 0 : n.address,
            email: n == null ? void 0 : n.email,
            lastOrder: n == null ? void 0 : n.lastOrder,
            leadStage: t,
            name: v(e),
          }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileToServer(e, { leadStage: t, name: v(e) }),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(e, t),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    function S(t) {
      if (!t.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[ContactManager] deactivateCustomer: chatJid must be LID-based, got "' +
            t +
            '"',
        );
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[ContactManager] deactivateCustomer: chatJid ",
            "",
          ])),
        t,
      );
      var n = o(
        "WAWebCustomerDataCollection",
      ).CustomerDataCollection.maybeGetCustomerDataByChatJid(t);
      n != null &&
        _(t, n, {
          contactType: o("WAWebContactType").ContactType.NONE,
          leadStage: o("WAWebLeadStage").LeadStage.NONE,
        }).catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[ContactManager] Failed to deactivate customer: ",
                  "",
                ])),
              String(e),
            )
            .sendLogs("customer_manager_deactivate_customer_failed");
        });
    }
    function R(e, t, n, r) {
      r !== n &&
        (r === o("WAWebLeadStage").LeadStage.NONE &&
        n !== o("WAWebLeadStage").LeadStage.NONE
          ? f(e, n).catch(function (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ContactManager] Failed to upsert customer profile to server: ",
                      "",
                    ])),
                  String(e),
                )
                .sendLogs("customer_manager_server_profile_upsert_failed");
            })
          : r !== o("WAWebLeadStage").LeadStage.NONE &&
              n === o("WAWebLeadStage").LeadStage.NONE
            ? S(e)
            : _(e, t, { leadStage: n }));
    }
    ((l.saveCustomerDataField = _),
      (l.upsertAsCustomer = f),
      (l.upsertLeadStageToProfile = h),
      (l.upsertCustomerFieldToProfile = C),
      (l.deactivateCustomer = S),
      (l.handleLeadStageTransition = R));
  },
  98,
);
