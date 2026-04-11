__d(
  "OzPredictedSegmentTimelineParser",
  [
    "PredictedSegmentTemplateSegmentsContainer",
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/parsers/OzDefaultSegmentTimelineParser",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzUrlHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.parseSegmentsContainer = function (t, n, a) {
          var e;
          if (a.SegmentTimeline[0].$.FBPredictedMedia) {
            e = o("oz-player/utils/OzUrlHelper").joinUrlPaths(
              n.baseUrl,
              a.SegmentTimeline[0].$.FBPredictedMedia,
            );
            var i = new (r("oz-player/shims/OzURI"))(e);
            (i.addQueryData("_nc_sc", 1), (e = i.toString()));
          }
          var l;
          a.SegmentTimeline[0].$.FBPredictedMediaStartNumber &&
            (l = Number.parseInt(
              a.SegmentTimeline[0].$.FBPredictedMediaStartNumber,
              0,
            ));
          var s;
          a.SegmentTimeline[0].$.FBPredictedMediaEndNumber &&
            (s = Number.parseInt(
              a.SegmentTimeline[0].$.FBPredictedMediaEndNumber,
              0,
            ));
          var u;
          a.SegmentTimeline[0].$.FBAverageDuration &&
            (u = Number.parseInt(a.SegmentTimeline[0].$.FBAverageDuration, 0));
          var c = r(
            "oz-player/parsers/OzDefaultSegmentTimelineParser",
          ).parseSegments(t, a);
          return ((n.isTemplatedMpd && l != null && u != null) ||
            !n.isTemplatedMpd) &&
            e != null &&
            s != null
            ? new (r("PredictedSegmentTemplateSegmentsContainer"))(
                t,
                o("oz-player/utils/OzUrlHelper").joinUrlPaths(
                  n.baseUrl,
                  a.$.media,
                ),
                n.mpdUrl,
                Number.parseInt(a.$.timescale, 10),
                c,
                e,
                l,
                s,
                u,
                n.isStaticMpd,
              )
            : new (r("oz-player/manifests/SegmentTemplateSegmentsContainer"))(
                t,
                o("oz-player/utils/OzUrlHelper").joinUrlPaths(
                  n.baseUrl,
                  a.$.media,
                ),
                Number.parseInt(a.$.timescale, 10),
                c,
                e,
                n.isStaticMpd,
              );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
