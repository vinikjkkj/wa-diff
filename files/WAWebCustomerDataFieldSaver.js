__d(
  "WAWebCustomerDataFieldSaver",
  [
    "WAJids",
    "WALogger",
    "WAWebApplyLeadStageSublistAction",
    "WAWebContactCollection",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerManagerApplyLeadLabelAction",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebFrontendContactGetters",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e, t, n) {
      await m([{ chatJid: e, extraFields: n, leadStage: t }]);
    }
    function d(e, t) {
      var n = e.chatJid,
        r = e.extraFields,
        o = e.leadStage;
      return {
        chatJid: n,
        profile: babelHelpers.extends({}, r, { leadStage: o, name: t }),
      };
    }
    async function m(t) {
      t.forEach(function (t) {
        var n = t.chatJid,
          a = t.leadStage;
        if (!n.endsWith(o("WAJids").LID_DOMAIN))
          throw r("err")(
            "[CustomerManager] upsertAsCustomer: chatJid must be LID-based",
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
        await o(
          "WAWebContactManagerCustomerProfileUpsertMutation",
        ).upsertCustomerProfilesToServer(
          t.map(function (e) {
            return d(e, v(e.chatJid));
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
      await f(t);
    }
    async function p(e, t) {
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
        n = await o(
          "WAWebContactManagerCustomerProfileUpsertMutation",
        ).createCustomerProfilesIfAbsent(
          e.map(function (e) {
            var t;
            return d(
              e,
              ((t = e.extraFields) == null || (t = t.name) == null
                ? void 0
                : t.trim()) || null,
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
          (await f(
            e.filter(function (e, t) {
              return n[t] === "written";
            }),
          )),
        n
      );
    }
    var _ = 10;
    async function f(e, t) {
      if ((t === void 0 && (t = 0), !(t >= e.length))) {
        var n = e.slice(t, t + _);
        return (
          await Promise.all(
            n.map(function (e) {
              return Promise.all([g(e.chatJid, e.leadStage), h(e)]);
            }),
          ),
          f(e, t + _)
        );
      }
    }
    async function g(e, t) {
      try {
        await o(
          "WAWebCustomerManagerApplyLeadLabelAction",
        ).customerManagerApplyLeadLabelToChat(e, t);
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
    }
    async function h(e) {
      var t = e.chatJid,
        n = e.leadStage;
      if (n != null)
        try {
          await o(
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
    }
    async function y(e, t) {
      (await o(
        "WAWebContactManagerCustomerProfileUpsertMutation",
      ).upsertCustomerProfileToServer(e, { leadStage: t, name: v(e) }),
        o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
          e,
        ));
    }
    async function C(e) {
      (await o(
        "WAWebContactManagerCustomerProfileUpsertMutation",
      ).upsertCustomerProfileFieldToServer(e, {
        field: "leadStage",
        value: null,
      }),
        o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
          e,
        ));
    }
    async function b(e, t) {
      (await o(
        "WAWebContactManagerCustomerProfileUpsertMutation",
      ).upsertCustomerProfileFieldToServer(e, t),
        o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
          e,
        ));
    }
    function v(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getContactDisplayName(t)
        : null;
    }
    ((l.upsertAsCustomer = c),
      (l.upsertAsCustomers = m),
      (l.createCustomersIfAbsent = p),
      (l.upsertLeadStageToProfile = y),
      (l.clearLeadStageOnProfile = C),
      (l.upsertCustomerFieldToProfile = b));
  },
  98,
);
