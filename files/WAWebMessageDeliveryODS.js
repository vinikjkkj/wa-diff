__d(
  "WAWebMessageDeliveryODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      queueTimeout: function (t) {
        e: {
          if (t === "offline") {
            r("WAWebODS").incr("web.message_delivery.queue_timeout.offline");
            break e;
          }
          if (t === "online") {
            r("WAWebODS").incr("web.message_delivery.queue_timeout.online");
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      },
      offlineDeliveryWaitTimeout: function () {
        r("WAWebODS").incr(
          "web.message_delivery.offline_delivery_wait_timeout",
        );
      },
    };
    l.messageDeliveryODSCounters = e;
  },
  98,
);
