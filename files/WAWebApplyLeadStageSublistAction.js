__d(
  "WAWebApplyLeadStageSublistAction",
  [
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebLeadSublistGating",
    "WAWebLidMigrationUtils",
    "WAWebListItemParentType",
    "WAWebListsActions",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n,
        a = t.chatJid,
        i = t.newStage,
        l = t.options,
        u = t.prevStage;
      if (!(u != null && i === u)) {
        var c = o("WAWebLabelCollection").LabelCollection.findFirst(
          function (e) {
            return (
              e.predefinedId ===
              o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
            );
          },
        );
        if (c == null) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] preset Lead list not found; skipping sub-list write",
              ])),
          );
          return;
        }
        var d =
          (n = o("WAWebChatCollection").ChatCollection.get(a)) != null
            ? n
            : await o("WAWebFindChatAction")
                .findOrCreateLatestChat(
                  o("WAWebWidFactory").createWid(a),
                  "contactManager",
                )
                .then(function (e) {
                  return e.chat;
                })
                .catch(function (e) {
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[customer_manager] failed to find/create chat: ",
                          "",
                        ])),
                      String(e),
                    ),
                    null
                  );
                });
        d != null &&
          (_(d, c) ||
            (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
              [{ id: c.id, type: "add" }],
              [d],
              { suppressSuccessToast: !0 },
            ),
            (l == null ? void 0 : l.logLeadSignal) === !0 &&
              o("WAWebListsActions").logCtwaSignalsForChats(
                [d],
                Number(c.id),
                i,
              )),
          await r("WAWebLabelSublistSync").sendLabelSublistUpdate(
            o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
            a,
            i,
          ));
      }
    }
    async function c(e, t, n, r) {
      var a = f(e);
      return a == null
        ? d(e, t, n)
        : o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(a)
          ? (await u({
              chatJid: o("WAJids").unsafeCoerceToChatJid(a.id.toString()),
              newStage: t,
              options: r,
              prevStage: n,
            }),
            !0)
          : !1;
    }
    async function d(e, t, n) {
      var a = o("WAWebLabelCollection").LabelCollection.findFirst(function (e) {
          return (
            e.predefinedId ===
            o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
          );
        }),
        i = p(e);
      return a == null ||
        i == null ||
        !o("WAWebLeadSublistGating").isContactEligibleForLeadSublist(i) ||
        !m(e, a)
        ? !1
        : ((n == null || t !== n) &&
            (await r("WAWebLabelSublistSync").sendLabelSublistUpdate(
              o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
              e,
              t,
            )),
          !0);
    }
    function m(e, t) {
      return [
        o("WAWebListItemParentType").LabelItemParentType.Chat,
        o("WAWebListItemParentType").LabelItemParentType.Contact,
      ].some(function (n) {
        return o("WAWebBizLabelUtils")
          .getLabelsForModelAnyAddressingMode(e, n)
          .includes(t.id);
      });
    }
    function p(e) {
      var t,
        n = o("WAWebWidFactory").createWid(e);
      if (!n.isUser()) return null;
      var r = o("WAWebWidFactory").asUserWidOrThrow(n),
        a = o("WAWebApiContact").getAlternateUserWid(r);
      return (t = o("WAWebContactCollection").ContactCollection.get(r)) != null
        ? t
        : a != null
          ? o("WAWebContactCollection").ContactCollection.get(a)
          : null;
    }
    function _(e, t) {
      return o("WAWebBizLabelUtils").hasManualLabelAssociation(
        t,
        e.id.toString(),
        o("WAWebListItemParentType").LabelItemParentType.Chat,
      );
    }
    function f(e) {
      var t = o("WAWebWidFactory").createWid(e);
      if (!t.isUser()) return null;
      var n = o("WAWebLidMigrationUtils").toUserLid(t);
      return n != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(n)
        : null;
    }
    ((l.applyLeadStageSublist = u), (l.applyLeadStageSublistForProfile = c));
  },
  98,
);
