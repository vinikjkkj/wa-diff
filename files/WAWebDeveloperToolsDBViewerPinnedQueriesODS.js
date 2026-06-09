__d(
  "WAWebDeveloperToolsDBViewerPinnedQueriesODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("WAWebODS").incr("web.devtools.db_viewer.pinned_queries.tab_activated");
    }
    function s() {
      r("WAWebODS").incr("web.devtools.db_viewer.pinned_queries.query_pinned");
    }
    function u() {
      r("WAWebODS").incr("web.devtools.db_viewer.pinned_queries.query_loaded");
    }
    ((l.logPinnedQueriesTabActivated = e),
      (l.logQueryPinned = s),
      (l.logPinnedQueryLoaded = u));
  },
  98,
);
