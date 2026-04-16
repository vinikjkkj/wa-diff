__d(
  "RelayFBHandlerProvider",
  [
    "BizKitNotificationsThinClientConnectionHandler",
    "UFI2CommentsConnectionHandler",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "connection":
          return o("relay-runtime").ConnectionHandler;
        case "ufi2_comments":
          return o("UFI2CommentsConnectionHandler");
        case "bizkit_notifications_thin_client":
          return o("BizKitNotificationsThinClientConnectionHandler");
        case "deleteRecord":
          return o("relay-runtime").MutationHandlers.DeleteRecordHandler;
        case "deleteEdge":
          return o("relay-runtime").MutationHandlers.DeleteEdgeHandler;
        case "appendEdge":
          return o("relay-runtime").MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
          return o("relay-runtime").MutationHandlers.PrependEdgeHandler;
        case "appendNode":
          return o("relay-runtime").MutationHandlers.AppendNodeHandler;
        case "prependNode":
          return o("relay-runtime").MutationHandlers.PrependNodeHandler;
      }
      var t = new Error(
        "RelayFBHandlerProvider: No handler defined for `" + e + "`.",
      );
      throw (t.stack, t);
    }
    l.default = e;
  },
  98,
);
