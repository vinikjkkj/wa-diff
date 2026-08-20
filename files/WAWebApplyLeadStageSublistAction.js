__d(
  "WAWebApplyLeadStageSublistAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatCollection",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebLeadSublistGating",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l;
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
              (i = o("WAWebChatCollection").ChatCollection.get(t)) != null
                ? i
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
              (((l = c.labels) != null ? l : []).includes(u.id) ||
                o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                  [{ id: u.id, type: "add" }],
                  [c],
                ),
              yield r("WAWebLabelSublistSync").sendLabelSublistUpdate(
                o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                t,
                n,
              ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = p(e);
          return r == null ||
            !o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(r)
            ? !1
            : (yield u(
                o("WAJids").unsafeCoerceToChatJid(r.id.toString()),
                t,
                n,
              ),
              !0);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
