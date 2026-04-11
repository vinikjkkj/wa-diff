__d(
  "preprocessKadabraUserStoppedMessage",
  ["KadabraStopCurrentMessageState", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return o("relay-runtime").Observable.create(function (e) {
          var n = null;
          return t.subscribe({
            complete: function () {
              (n != null &&
                o("KadabraStopCurrentMessageState").clearStoppedMessage(n),
                e.complete());
            },
            error: function (r) {
              (n != null &&
                o("KadabraStopCurrentMessageState").clearStoppedMessage(n),
                e.error(r));
            },
            next: function (r) {
              var t = Array.isArray(r) ? r : [r],
                a = !1;
              for (var i of t) {
                var l, s;
                if (!(typeof i != "object" || i == null || !("data" in i))) {
                  var u = i.data;
                  if (
                    !(
                      u == null ||
                      typeof u != "object" ||
                      !("xfb_llm_async_response_subscription" in u) ||
                      typeof u.xfb_llm_async_response_subscription != "object"
                    )
                  ) {
                    var c =
                      (l = u.xfb_llm_async_response_subscription) == null
                        ? void 0
                        : l.message;
                    if (
                      !(
                        c == null ||
                        typeof c != "object" ||
                        typeof c.message_persistent_input != "object" ||
                        c.role !== "ASSISTANT"
                      )
                    ) {
                      var d =
                        (s = c.message_persistent_input) == null
                          ? void 0
                          : s.offline_threading_id;
                      if (
                        typeof d == "string" &&
                        ((n = d),
                        o("KadabraStopCurrentMessageState").getIsMessageStopped(
                          d,
                        ))
                      ) {
                        a = !0;
                        continue;
                      }
                    }
                  }
                }
              }
              a || e.next(r);
            },
          });
        });
      },
      s = e;
    l.default = s;
  },
  98,
);
