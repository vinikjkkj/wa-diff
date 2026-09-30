__d(
  "WAWebApplyLeadStageSublistAction",
  [
    "WAJids",
    "WALogger",
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
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
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            var l;
            if (!(a != null && n === a)) {
              var u = o("WAWebLabelCollection").LabelCollection.findFirst(
                function (e) {
                  return (
                    e.predefinedId ===
                    o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
                  );
                },
              );
              if (u == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[customer_manager] preset Lead list not found; skipping sub-list write",
                    ])),
                );
                return;
              }
              var c =
                (l = o("WAWebChatCollection").ChatCollection.get(t)) != null
                  ? l
                  : yield o("WAWebFindChatAction")
                      .findOrCreateLatestChat(
                        o("WAWebWidFactory").createWid(t),
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
              c != null &&
                (p(c, u) ||
                  (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                    [{ id: u.id, type: "add" }],
                    [c],
                    { suppressSuccessToast: !0 },
                  ),
                  (i == null ? void 0 : i.logLeadSignal) === !0 &&
                    o("WAWebListsActions").logCtwaSignalsForChats(
                      [c],
                      Number(u.id),
                    )),
                yield r("WAWebLabelSublistSync").sendLabelSublistUpdate(
                  o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                  t,
                  n,
                ));
            }
          },
        )),
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
            var a = _(e);
            return a == null ||
              !o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(a)
              ? !1
              : (yield u(
                  o("WAJids").unsafeCoerceToChatJid(a.id.toString()),
                  t,
                  n,
                  r,
                ),
                !0);
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return o("WAWebBizLabelUtils").hasManualLabelAssociation(
        t,
        e.id.toString(),
        o("WAWebListItemParentType").LabelItemParentType.Chat,
      );
    }
    function _(e) {
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
