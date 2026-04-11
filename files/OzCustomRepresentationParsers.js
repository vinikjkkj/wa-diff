__d(
  "OzCustomRepresentationParsers",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzReadableStreamUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.ozConfig,
        n = e.startTimestamp,
        a = {
          timescale: function (t) {
            var e = t.SegmentTemplate;
            if (e && e.length > 0) {
              var n = e[0].$;
              if (n) return Number.parseInt(n.timescale, 0) || null;
            }
            return null;
          },
        };
      return (
        t.getBool("parse_initialization_binary", !1) &&
          (a.initializationBinary = function (e) {
            try {
              var t = window.atob(e.FBInitializationBinary[0]._);
              return o(
                "oz-player/utils/OzReadableStreamUtils",
              ).stringToUint8Array(t);
            } catch (e) {
              return null;
            }
          }),
        (a.playbackResolutionMos = function (e) {
          try {
            return e.$.FBPlaybackResolutionMos;
          } catch (e) {
            return null;
          }
        }),
        (a.playbackResolutionCsvqm = function (e) {
          try {
            return e.$.FBPlaybackResolutionCsvqm;
          } catch (e) {
            return null;
          }
        }),
        (a.qualityLabel = function (e) {
          try {
            return e.$.FBQualityLabel;
          } catch (e) {
            return null;
          }
        }),
        t.getBool("parse_first_segment", !1) &&
          (a.firstSegmentParser = function (e) {
            if (n != null && n > 0) return null;
            try {
              var t =
                  e.SegmentBase[0].$.FBFirstSegmentRange.split("-").map(Number),
                o = { startByte: t[0], endByte: t[1] },
                a = e.BaseURL[0]._,
                i = new (r("oz-player/shims/OzURI"))(a),
                l = new (r("oz-player/manifests/OzSegmentOptions"))();
              return {
                getData: function () {
                  return null;
                },
                getURI: function () {
                  return i;
                },
                getByteRange: function () {
                  return o;
                },
                getTimeRange: function () {
                  return { startTime: 0, endTime: 2 };
                },
                getSequenceNumber: function () {
                  return null;
                },
                getOptions: function () {
                  return l;
                },
              };
            } catch (e) {
              return null;
            }
          }),
        a
      );
    }
    l.createOzCustomRepresentationParsers = e;
  },
  98,
);
