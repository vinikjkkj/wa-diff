__d(
  "WAWebCustomerManagerBulkAddToListAction",
  [
    "Promise",
    "WALogger",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
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
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (s || (s = n("Promise"))).allSettled(
              Array.from(t).map(function (e) {
                return o("WAWebFindChatAction")
                  .findOrCreateLatestChat(
                    o("WAWebWidFactory").createWid(e),
                    "customerManager",
                  )
                  .then(function (e) {
                    var t = e.chat;
                    return t;
                  });
              }),
            ),
            i = [];
          for (var l of a) l.status === "fulfilled" && i.push(l.value);
          var u = a.length - i.length;
          (u > 0 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] bulkAddToList: ",
                    " of ",
                    " find-or-create calls failed",
                  ])),
                u,
                a.length,
              )
              .sendLogs(
                "customer_manager_bulk_add_to_list_find_or_create_failed",
              ),
            i.length !== 0 &&
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [{ id: r, type: "add" }],
                i,
              ));
        })),
        c.apply(this, arguments)
      );
    }
    l.bulkAddCustomersToList = u;
  },
  98,
);
