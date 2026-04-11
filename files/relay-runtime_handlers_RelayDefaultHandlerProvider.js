__d(
  "relay-runtime/handlers/RelayDefaultHandlerProvider",
  [
    "invariant",
    "relay-runtime/handlers/connection/ConnectionHandler",
    "relay-runtime/handlers/connection/MutationHandlers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "connection":
          return n("relay-runtime/handlers/connection/ConnectionHandler");
        case "deleteRecord":
          return n("relay-runtime/handlers/connection/MutationHandlers")
            .DeleteRecordHandler;
        case "deleteEdge":
          return n("relay-runtime/handlers/connection/MutationHandlers")
            .DeleteEdgeHandler;
        case "appendEdge":
          return n("relay-runtime/handlers/connection/MutationHandlers")
            .AppendEdgeHandler;
        case "prependEdge":
          return n("relay-runtime/handlers/connection/MutationHandlers")
            .PrependEdgeHandler;
        case "appendNode":
          return n("relay-runtime/handlers/connection/MutationHandlers")
            .AppendNodeHandler;
        case "prependNode":
          return n("relay-runtime/handlers/connection/MutationHandlers")
            .PrependNodeHandler;
      }
      l(0, 4515, e);
    }
    a.exports = e;
  },
  null,
);
