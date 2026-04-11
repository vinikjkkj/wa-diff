__d(
  "WAWebNewsletterOpenQPLLogger",
  ["WAWebNewsletterLoggingUtils", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(1026963966, "1165"),
      s = (function () {
        function t() {
          this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(e);
        }
        var n = t.prototype;
        return (
          (n.annotate = function (t, n) {
            var e,
              r = {
                int: {
                  unread_count: t.unreadCount,
                  origin: o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(
                    n,
                  ),
                  user_role: o(
                    "WAWebNewsletterLoggingUtils",
                  ).getChannelUserTypeFromMembershipType(t.newsletterMetadata),
                },
              };
            (e = this.$1) == null || e.annotate(r);
          }),
          (n.end = function (t) {
            var e,
              n = t.success;
            (e = this.$1) == null || e.end(n ? 2 : 3);
          }),
          t
        );
      })();
    l.WAWebNewsletterOpenQPLLogger = s;
  },
  98,
);
