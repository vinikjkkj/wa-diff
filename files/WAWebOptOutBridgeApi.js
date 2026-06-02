__d(
  "WAWebOptOutBridgeApi",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebOptOutListCollection",
    "WAWebSchemaOptOutList",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreOptOutList: async function () {
        if (
          o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled()
        ) {
          var e = await o("WAWebSchemaOptOutList").getOptOutListTable().all();
          o(
            "WAWebOptOutListCollection",
          ).OptOutListCollection.initializeFromCache(
            o("WAWebApiHydrateWidsUtil").hydrateWids(e),
          );
        }
      },
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
