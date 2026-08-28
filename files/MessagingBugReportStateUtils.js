__d(
  "MessagingBugReportStateUtils",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "N/A",
      s = function () {
        return e;
      };
    function u() {
      return {
        channel_connection: r("ifRequired")(
          "ChannelConnection",
          function (e) {
            return !e.disconnected();
          },
          s,
        ),
        tab_id: r("ifRequired")(
          "ChannelClientID",
          function (e) {
            return e.getID();
          },
          s,
        ),
        channel_host: r("ifRequired")(
          "ChannelManager",
          function (e) {
            return e.getConfig("fullHost") + "." + e.getConfig("domain");
          },
          s,
        ),
      };
    }
    l.getStateSnapshot = u;
  },
  98,
);
