__d(
  "WAWebCustomerManagerBulkAddToListAction",
  [
    "WALogger",
    "WAWebCustomerManagerListChangeOperationId",
    "WAWebCustomerManagerSMBUserJourneyLogger",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var r = o(
          "WAWebCustomerManagerListChangeOperationId",
        ).nextListChangeOperationId(),
        a = function (n, a, i) {
          return o(
            "WAWebCustomerManagerSMBUserJourneyLogger",
          ).CustomerManagerUserJourneyLogger.listChangeResult({
            action_status: n,
            affected_customer_count: t.length,
            failure_count: i,
            membership_operation: "add",
            operation_id: r,
            operation_source: "bulk_add_to_list",
            success_count: a,
          });
        };
      a("attempt", null, null);
      var i = await Promise.allSettled(
          t.map(function (e) {
            return o("WAWebFindChatAction")
              .findOrCreateLatestChat(
                o("WAWebWidFactory").createWid(e),
                "contactManager",
              )
              .then(function (e) {
                var t = e.chat;
                return t;
              });
          }),
        ),
        l = [];
      for (var s of i) s.status === "fulfilled" && l.push(s.value);
      var u = i.length - l.length;
      if (
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
              i.length,
            )
            .sendLogs(
              "customer_manager_bulk_add_to_list_find_or_create_failed",
            ),
        l.length === 0)
      ) {
        a("failure", 0, u);
        return;
      }
      (o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
        [{ id: n, type: "add" }],
        l,
      ),
        a(u > 0 ? "partial_success" : "success", l.length, u));
    }
    l.bulkAddCustomersToList = s;
  },
  98,
);
