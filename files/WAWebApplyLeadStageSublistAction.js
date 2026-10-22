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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                : yield o("WAWebFindChatAction")
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
              (h(d, c) ||
                (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                  [{ id: c.id, type: "add" }],
                  [d],
                  { suppressSuccessToast: !0 },
                ),
                (l == null ? void 0 : l.logLeadSignal) === !0 &&
                  o("WAWebListsActions").logCtwaSignalsForChats(
                    [d],
                    Number(c.id),
                  )),
              yield r("WAWebLabelSublistSync").sendLabelSublistUpdate(
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                a,
                i,
              ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = y(e);
            return a == null
              ? p(e, t, n)
              : o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(a)
                ? (yield u({
                    chatJid: o("WAJids").unsafeCoerceToChatJid(a.id.toString()),
                    newStage: t,
                    options: r,
                    prevStage: n,
                  }),
                  !0)
                : !1;
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebLabelCollection").LabelCollection.findFirst(
              function (e) {
                return (
                  e.predefinedId ===
                  o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
                );
              },
            ),
            i = g(e);
          return a == null ||
            i == null ||
            !o("WAWebLeadSublistGating").isContactEligibleForLeadSublist(i) ||
            !f(e, a)
            ? !1
            : ((n == null || t !== n) &&
                (yield r("WAWebLabelSublistSync").sendLabelSublistUpdate(
                  o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                  e,
                  t,
                )),
              !0);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return [
        o("WAWebListItemParentType").LabelItemParentType.Chat,
        o("WAWebListItemParentType").LabelItemParentType.Contact,
      ].some(function (n) {
        return o("WAWebBizLabelUtils")
          .getLabelsForModelAnyAddressingMode(e, n)
          .includes(t.id);
      });
    }
    function g(e) {
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
    function h(e, t) {
      return o("WAWebBizLabelUtils").hasManualLabelAssociation(
        t,
        e.id.toString(),
        o("WAWebListItemParentType").LabelItemParentType.Chat,
      );
    }
    function y(e) {
      var t = o("WAWebWidFactory").createWid(e);
      if (!t.isUser()) return null;
      var n = o("WAWebLidMigrationUtils").toUserLid(t);
      return n != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(n)
        : null;
    }
    ((l.applyLeadStageSublist = u), (l.applyLeadStageSublistForProfile = d));
  },
  98,
);
