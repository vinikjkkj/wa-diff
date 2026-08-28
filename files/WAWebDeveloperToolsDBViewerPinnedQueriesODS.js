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
    function c() {
      r("WAWebODS").incr("web.devtools.db_viewer.pinned_queries.query_removed");
    }
    function d() {
      r("WAWebODS").incr(
        "web.devtools.db_viewer.pinned_queries.query_repinned",
      );
    }
    ((l.logPinnedQueriesTabActivated = e),
      (l.logQueryPinned = s),
      (l.logPinnedQueryLoaded = u),
      (l.logPinnedQueryRemoved = c),
      (l.logQueryRepinned = d));
  },
  98,
);
