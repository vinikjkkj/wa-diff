__d(
  "relay-runtime/handlers/connection/ConnectionInterface",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        after: !0,
        before: !0,
        find: !0,
        first: !0,
        last: !0,
        surrounds: !0,
      },
      l = {
        CURSOR: "cursor",
        EDGES: "edges",
        END_CURSOR: "endCursor",
        HAS_NEXT_PAGE: "hasNextPage",
        HAS_PREV_PAGE: "hasPreviousPage",
        NODE: "node",
        PAGE_INFO_TYPE: "PageInfo",
        PAGE_INFO: "pageInfo",
        START_CURSOR: "startCursor",
      },
      s = {
        inject: function (t) {
          l = t;
        },
        get: function () {
          return l;
        },
        isConnectionCall: function (n) {
          return Object.prototype.hasOwnProperty.call(e, n.name);
        },
      };
    a.exports = s;
  },
  null,
);
