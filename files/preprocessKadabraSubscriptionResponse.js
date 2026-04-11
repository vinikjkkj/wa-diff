__d(
  "preprocessKadabraSubscriptionResponse",
  ["FBLogger", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Map();
      return o("relay-runtime").Observable.create(function (n) {
        return e.subscribe({
          complete: n.complete,
          error: function (t) {
            (r("FBLogger")("kadabra_subscriptions")
              .catching(t)
              .mustfix("Subscription error in preprocessResponse"),
              n.error(t));
          },
          next: function (r) {
            var e = Array.isArray(r) ? r : [r],
              o = !1;
            for (var a of e) {
              var i;
              if (!(typeof a != "object" || a == null || !("data" in a))) {
                var l = a.data;
                if (
                  !(
                    l == null ||
                    typeof l != "object" ||
                    !("xfb_llm_async_response_subscription" in l) ||
                    typeof l.xfb_llm_async_response_subscription != "object"
                  )
                ) {
                  var s =
                    (i = l.xfb_llm_async_response_subscription) == null
                      ? void 0
                      : i.message;
                  if (
                    !(
                      s == null ||
                      typeof s != "object" ||
                      s.role !== "ASSISTANT" ||
                      s.streaming_state !== "STREAMING"
                    )
                  ) {
                    var u = s.id,
                      c = s.chunk_index;
                    if (typeof c == "number" && typeof u == "string") {
                      var d = t.get(u);
                      d != null && c < d ? (o = !0) : t.set(u, c);
                    }
                  }
                }
              }
            }
            o || n.next(r);
          },
        });
      });
    }
    l.default = e;
  },
  98,
);
