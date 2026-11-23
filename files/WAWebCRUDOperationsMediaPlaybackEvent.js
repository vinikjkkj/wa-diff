__d(
  "WAWebCRUDOperationsMediaPlaybackEvent",
  ["WAWebSchemaMediaPlaybackEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebSchemaMediaPlaybackEvent")
        .getMediaPlaybackEventTable()
        .bulkCreateOrReplace(
          e.map(function (e) {
            return { event: e };
          }),
        );
    }
    function s(e) {
      return o("WAWebSchemaMediaPlaybackEvent")
        .getMediaPlaybackEventTable()
        .all({ limit: e, offset: 0 });
    }
    async function u() {
      return o("WAWebSchemaMediaPlaybackEvent")
        .getMediaPlaybackEventTable()
        .count();
    }
    function c(e) {
      return o("WAWebSchemaMediaPlaybackEvent")
        .getMediaPlaybackEventTable()
        .bulkRemove(e);
    }
    ((l.addEvents = e),
      (l.getOldestEvents = s),
      (l.getRowCount = u),
      (l.deleteEvents = c));
  },
  98,
);
