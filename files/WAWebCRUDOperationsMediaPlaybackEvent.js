__d(
  "WAWebCRUDOperationsMediaPlaybackEvent",
  ["WAWebSchemaMediaPlaybackEvent", "asyncToGeneratorRuntime"],
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
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaMediaPlaybackEvent")
            .getMediaPlaybackEventTable()
            .count();
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebSchemaMediaPlaybackEvent")
        .getMediaPlaybackEventTable()
        .bulkRemove(e);
    }
    ((l.addEvents = e),
      (l.getOldestEvents = s),
      (l.getRowCount = u),
      (l.deleteEvents = d));
  },
  98,
);
