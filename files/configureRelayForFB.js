__d(
  "configureRelayForFB",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("relay-runtime").ConnectionInterface.inject({
        CURSOR: "cursor",
        EDGES: "edges",
        END_CURSOR: "end_cursor",
        HAS_NEXT_PAGE: "has_next_page",
        HAS_PREV_PAGE: "has_previous_page",
        NODE: "node",
        PAGE_INFO_TYPE: "PageInfo",
        PAGE_INFO: "page_info",
        START_CURSOR: "start_cursor",
      });
    }
    l.default = e;
  },
  98,
);
