__d(
  "WAWebApplyLeadStageSublistAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
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
    l.applyLeadStageSublist = u;
  },
  98,
);
