__d(
  "WAWebNewsletterFollowQPLLogger",
  [
    "WAWebEncryptedRid",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebQplFlowWrapper",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(1026960759, "186"),
      s = r("qpl")._(1026957851, "1164"),
      u = (function () {
        function t(t) {
          var n = t.discoverySurface,
            r = t.eventSurface,
            a = t.eventUnit,
            i = t.markerId;
          if (
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterQplLoggingEnabledForMarkerId(i)
          ) {
            var l = {
                int: { discovery_surface: n, surface: r, unit: a },
                string: {
                  encrypted_rid: o("WAWebEncryptedRid").getEncryptedRid(),
                },
              },
              u = Math.round(Math.random() * 1e9),
              c =
                i ===
                o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
                  .CHANNEL_FOLLOW
                  ? e
                  : s;
            this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(c, {
              annotations: l,
              instanceKey: u,
            });
          }
        }
        var n = t.prototype;
        return (
          (n.markFetchStart = function () {
            var e;
            (e = this.$1) == null ||
              e.addPoint("follow_unfollow_request_start");
          }),
          (n.markFetchEnd = function () {
            var e;
            (e = this.$1) == null || e.addPoint("follow_unfollow_request_end");
          }),
          (n.markPDFNShown = function () {
            var e;
            (e = this.$1) == null || e.addPoint("accept_pdfn_start");
          }),
          (n.markPDFNDismissed = function () {
            var e;
            (e = this.$1) == null || e.addPoint("accept_pdfn_start_end");
          }),
          (n.end = function (t) {
            var e;
            (e = this.$1) == null || e.end(t);
          }),
          t
        );
      })();
    l.WAWebNewsletterFollowQPLLogger = u;
  },
  98,
);
