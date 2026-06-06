__d(
  "WAWebCustomerDataFieldSaver",
  [
    "WAJids",
    "WALogger",
    "WAWebContactType",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerApplyLeadLabelAction",
    "WAWebLeadStage",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
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
    function m(e, t, n) {
      if (t != null) {
        t.set(n);
        var r = d(t);
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!e.endsWith(o("WAJids").LID_DOMAIN))
            throw r("err")(
              '[CustomerManager] upsertAsCustomer: chatJid must be LID-based, got "' +
                e +
                '"',
            );
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[CustomerManager] upsertAsCustomer: chatJid ",
                ", leadStage ",
                "",
              ])),
            e,
            String(t),
          );
          var a = yield o(
            "WAWebCustomerDataAction",
          ).retrieveCustomerDataForChatJid(e);
          (yield m(
            e,
            a,
            babelHelpers.extends(
              {
                contactType: o("WAWebContactType").ContactType.CUSTOMER,
                leadStage: t,
              },
              n,
            ),
          ),
            o("WAWebCustomerManagerApplyLeadLabelAction")
              .customerManagerApplyLeadLabelToChat(e)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[CustomerManager] Failed to auto-apply Lead label: ",
                        "",
                      ])),
                    String(e),
                  )
                  .sendLogs("customer_manager_label_apply_failed");
              }));
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      if (!t.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[CustomerManager] deactivateCustomer: chatJid must be LID-based, got "' +
            t +
            '"',
        );
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[CustomerManager] deactivateCustomer: chatJid ",
            "",
          ])),
        t,
      );
      var n = o(
        "WAWebCustomerDataCollection",
      ).CustomerDataCollection.maybeGetCustomerDataByChatJid(t);
      n != null &&
        m(t, n, {
          contactType: o("WAWebContactType").ContactType.NONE,
          leadStage: o("WAWebLeadStage").LeadStage.NONE,
        }).catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] Failed to deactivate customer: ",
                  "",
                ])),
              String(e),
            )
            .sendLogs("customer_manager_deactivate_customer_failed");
        });
    }
    function g(e, t, n, r) {
      r !== n &&
        (r === o("WAWebLeadStage").LeadStage.NONE &&
        n !== o("WAWebLeadStage").LeadStage.NONE
          ? p(e, n)
          : r !== o("WAWebLeadStage").LeadStage.NONE &&
              n === o("WAWebLeadStage").LeadStage.NONE
            ? f(e)
            : m(e, t, { leadStage: n }));
    }
    ((l.saveCustomerDataField = m),
      (l.upsertAsCustomer = p),
      (l.deactivateCustomer = f),
      (l.handleLeadStageTransition = g));
  },
  98,
);
