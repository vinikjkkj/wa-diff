__d(
  "WAWebMessageDeliveryODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      queueEnqueued: function (t, n) {
        e: {
          var e = [n, t];
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "legacy" &&
            e[1] === "offline"
          ) {
            r("WAWebODS").incr("web.message_delivery.queue_enqueued.offline");
            break e;
          }
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "legacy" &&
            e[1] === "online"
          ) {
            r("WAWebODS").incr("web.message_delivery.queue_enqueued.online");
            break e;
          }
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "one_queue" &&
            e[1] === "offline"
          ) {
            r("WAWebODS").incr(
              "web.message_delivery.one_queue.queue_enqueued.offline",
            );
            break e;
          }
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "one_queue" &&
            e[1] === "online"
          ) {
            r("WAWebODS").incr(
              "web.message_delivery.one_queue.queue_enqueued.online",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      },
      queueTimeout: function (t, n) {
        e: {
          var e = [n, t];
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "legacy" &&
            e[1] === "offline"
          ) {
            r("WAWebODS").incr("web.message_delivery.queue_timeout.offline");
            break e;
          }
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "legacy" &&
            e[1] === "online"
          ) {
            r("WAWebODS").incr("web.message_delivery.queue_timeout.online");
            break e;
          }
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "one_queue" &&
            e[1] === "offline"
          ) {
            r("WAWebODS").incr(
              "web.message_delivery.one_queue.queue_timeout.offline",
            );
            break e;
          }
          if (
            Array.isArray(e) &&
            e.length === 2 &&
            e[0] === "one_queue" &&
            e[1] === "online"
          ) {
            r("WAWebODS").incr(
              "web.message_delivery.one_queue.queue_timeout.online",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      },
      offlineDeliveryWaitTimeout: function (t) {
        e: {
          if (t === "legacy") {
            r("WAWebODS").incr(
              "web.message_delivery.offline_delivery_wait_timeout",
            );
            break e;
          }
          if (t === "one_queue") {
            r("WAWebODS").incr(
              "web.message_delivery.one_queue.offline_delivery_wait_timeout",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      },
    };
    l.messageDeliveryODSCounters = e;
  },
  98,
);
