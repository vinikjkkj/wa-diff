__d(
  "WAWebOptOutBridgeApi",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebOptOutListCollection",
    "WAWebSchemaOptOutList",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreOptOutList: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isMMOptOutEnabled()
          ) {
            var e = yield o("WAWebSchemaOptOutList").getOptOutListTable().all();
            o(
              "WAWebOptOutListCollection",
            ).OptOutListCollection.initializeFromCache(
              o("WAWebApiHydrateWidsUtil").hydrateWids(e),
            );
          }
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      updateOptOutListCollection: function (t) {
        var e = t.wids;
        o("WAWebOptOutListCollection").OptOutListCollection.replaceAllWith(e);
      },
      updateOptOutListModelInCollection: o("WAWebOptOutListCollection")
        .OptOutListCollection.updateOptOutListInCollectionAndDb,
    };
    l.OptOutBridgeApi = e;
  },
  98,
);
