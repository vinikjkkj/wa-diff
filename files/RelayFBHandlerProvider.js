__d(
  "RelayFBHandlerProvider",
  [
    "BizKitNotificationsThinClientConnectionHandler",
    "UFI2CommentsConnectionHandler",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { update: o("UFI2CommentsConnectionHandler").update },
      s = {
        update: o("BizKitNotificationsThinClientConnectionHandler").update,
      };
    function u(t) {
      switch (t) {
        case "connection":
          return o("relay-runtime").ConnectionHandler;
        case "ufi2_comments":
          return e;
        case "bizkit_notifications_thin_client":
          return s;
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
      var n = new Error(
        "RelayFBHandlerProvider: No handler defined for `" + t + "`.",
      );
      throw (n.stack, n);
    }
    l.default = u;
  },
  98,
);
