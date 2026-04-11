__d(
  "WAWebHandleBusinessProductCatalogNotification",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "refreshCatalogProducts",
        { productIds: e },
      );
    }
    function s(e) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateCatalogCollectionReviewStatuses",
        { notification: e },
      );
    }
    ((l.handleProductNotification = e), (l.handleCollectionNotification = s));
  },
  98,
);
