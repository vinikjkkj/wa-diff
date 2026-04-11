__d(
  "WAWebNewsletterOpenQPLLoggerV2",
  [
    "WAWebEncryptedRid",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebQplFlowWrapper",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(1026963966, "1165"),
      s = (function () {
        function t() {
          this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(e);
        }
        var n = t.prototype;
        return (
          (n.annotate = function (t) {
            var e,
              n = t.discoverySurface,
              r = t.isCached,
              a = t.role,
              i = t.unreadCount,
              l = {
                int: { unread_count: i, discovery_surface: n },
                string: {
                  channel_user_type: a
                    ? o(
                        "WAWebNewsletterLoggingUtils",
                      ).getChannelUserStringFromChannelUserType(
                        o("WAWebNewsletterLoggingUtils").getChannelUserType(a),
                      )
                    : void 0,
                  encrypted_rid: o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterOpenQPLUserRidLoggingEnabled()
                    ? o("WAWebEncryptedRid").getEncryptedRid()
                    : void 0,
                },
                bool: { is_cached: r },
              };
            (e = this.$1) == null || e.annotate(l);
          }),
          (n.markFetchStart = function () {
            var e;
            (e = this.$1) == null || e.addPoint("messages_fetch_start");
          }),
          (n.markFetchEnd = function () {
            var e;
            (e = this.$1) == null || e.addPoint("messages_fetch_end");
          }),
          (n.end = function (t) {
            var e,
              n = t.success;
            (e = this.$1) == null || e.end(n ? 2 : 3);
          }),
          t
        );
      })();
    l.WAWebNewsletterOpenQPLLoggerV2 = s;
  },
  98,
);
