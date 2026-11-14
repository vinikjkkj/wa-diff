__d(
  "WAWebCustomerManagerApplyLeadLabelAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebListsActions",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = o("WAWebLabelCollection").LabelCollection.findFirst(
              function (e) {
                return (
                  e.predefinedId ===
                  o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD
                );
              },
            );
          if (a == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[customer_manager] Lead label not found, skipping auto-apply",
                ])),
            );
            return;
          }
          var i = o("WAWebChatCollection").ChatCollection.get(t),
            l =
              i != null
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
                              "[customer_manager] Failed to find or create chat for ",
                              ": ",
                              "",
                            ])),
                          t,
                          String(e),
                        ),
                        null
                      );
                    });
          l != null &&
            (((r = l.labels) != null ? r : []).includes(a.id) ||
              (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [{ id: a.id, type: "add" }],
                [l],
              ),
              o("WAWebListsActions").logCtwaSignalsForChats(
                [l],
                Number(a.id),
                n,
              )));
        })),
        c.apply(this, arguments)
      );
    }
    l.customerManagerApplyLeadLabelToChat = u;
  },
  98,
);
