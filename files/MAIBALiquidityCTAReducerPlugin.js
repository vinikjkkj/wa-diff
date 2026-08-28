__d(
  "MAIBALiquidityCTAReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.modal == null ||
            n.adAccountID == null ||
            n.businessID == null
            ? {
                adAccountID: null,
                businessID: null,
                externalConversationId: null,
                modal: null,
              }
            : {
                adAccountID: n.adAccountID,
                businessID: n.businessID,
                externalConversationId: n.externalConversationId,
                modal: n.modal,
              };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
