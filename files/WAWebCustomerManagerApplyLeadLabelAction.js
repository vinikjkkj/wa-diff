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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = o("WAWebLabelCollection").LabelCollection.findFirst(
              function (e) {
                return (
                  e.predefinedId ===
                  o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD
                );
              },
            );
          if (r == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[customer_manager] Lead label not found, skipping auto-apply",
                ])),
            );
            return;
          }
          var a = o("WAWebChatCollection").ChatCollection.get(t),
            i =
              a != null
                ? a
                : yield o("WAWebFindChatAction")
                    .findOrCreateLatestChat(
                      o("WAWebWidFactory").createWid(t),
                      "customerManager",
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
          i != null &&
            (((n = i.labels) != null ? n : []).includes(r.id) ||
              (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [{ id: r.id, type: "add" }],
                [i],
              ),
              o("WAWebListsActions").logCtwaSignalsForChats(
                [i],
                Number(r.id),
              )));
        })),
        c.apply(this, arguments)
      );
    }
    l.customerManagerApplyLeadLabelToChat = u;
  },
  98,
);
