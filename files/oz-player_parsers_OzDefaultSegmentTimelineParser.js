__d(
  "oz-player/parsers/OzDefaultSegmentTimelineParser",
  [
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/utils/OzUrlHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      e.parseSegments = function (t, n) {
        var e = [];
        return (
          n.SegmentTimeline[0].S &&
            (e = n.SegmentTimeline[0].S.map(function (e) {
              return {
                t: Number.parseInt(e.$.t, 10),
                d: Number.parseInt(e.$.d, 10),
                r: Number.parseInt(e.$.r || "0", 10),
                id: e.$.id ? Number.parseInt(e.$.id, 10) : void 0,
              };
            })),
          e
        );
      };
      var t = e.prototype;
      return (
        (t.parseSegmentsContainer = function (n, a, i) {
          return new (r(
            "oz-player/manifests/SegmentTemplateSegmentsContainer",
          ))(
            n,
            o("oz-player/utils/OzUrlHelper").joinUrlPaths(a.baseUrl, i.$.media),
            Number.parseInt(i.$.timescale, 10),
            e.parseSegments(n, i),
            null,
            a.isStaticMpd,
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
