__d(
  "WAWebCustomerDataBridgeApi",
  [
    "Promise",
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataModel",
    "WAWebMobilePlatforms",
    "WAWebSchemaCustomerData",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        restoreCustomerData: function () {
          return !o("WAWebMobilePlatforms").isSMB() ||
            !o("WAWebSchemaCustomerData").canUseCustomerDataTable()
            ? (e || (e = n("Promise"))).resolve()
            : o("WAWebSchemaCustomerData")
                .getCustomerDataTable()
                .all()
                .then(function (e) {
                  o(
                    "WAWebCustomerDataCollection",
                  ).CustomerDataCollection.initializeFromCache(e);
                });
        },
        syncCustomerData: function (t) {
          var e = t.record;
          o("WAWebCustomerDataCollection").CustomerDataCollection.add(
            new (o("WAWebCustomerDataModel").CustomerData)(
              babelHelpers.extends({}, e, { id: e.chatJid }),
            ),
            { merge: !0 },
          );
        },
        removeCustomerDataFromCollection: function (t) {
          var e = t.chatJid;
          o(
            "WAWebCustomerDataCollection",
          ).CustomerDataCollection.purgeCustomerDataByChatJid(e);
        },
      };
    l.CustomerDataBridgeApi = s;
  },
  98,
);
