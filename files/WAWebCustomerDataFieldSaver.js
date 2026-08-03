__d(
  "WAWebCustomerDataFieldSaver",
  [
    "WAJids",
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactManagerApplyLeadLabelAction",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebContactType",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "WAWebFrontendContactGetters",
    "WAWebLeadStage",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
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
    function p(e, t, n) {
      if (t != null) {
        t.set(n);
        var r = m(t);
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!e.endsWith(o("WAJids").LID_DOMAIN))
            throw r("err")(
              '[ContactManager] upsertAsCustomer: chatJid must be LID-based, got "' +
                e +
                '"',
            );
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
            yield o(
              "WAWebContactManagerCustomerProfileUpsertMutation",
            ).upsertCustomerProfileToServer(e, {
              acquisitionSource: n == null ? void 0 : n.acquisitionSource,
              address: n == null ? void 0 : n.address,
              email: n == null ? void 0 : n.email,
              lastOrder: n == null ? void 0 : n.lastOrder,
              leadStage: t,
              name: g(e),
            }));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : null;
    }
    function h(t) {
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
        p(t, n, {
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
    function y(e, t, n, r) {
      r !== n &&
        (r === o("WAWebLeadStage").LeadStage.NONE &&
        n !== o("WAWebLeadStage").LeadStage.NONE
          ? _(e, n).catch(function (e) {
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
            ? h(e)
            : p(e, t, { leadStage: n }));
    }
    ((l.saveCustomerDataField = p),
      (l.upsertAsCustomer = _),
      (l.deactivateCustomer = h),
      (l.handleLeadStageTransition = y));
  },
  98,
);
