__d(
  "WebBloksCAABroadcastChannelListener",
  ["WebBloksFBLErrorBeacon"],
  function (t, n, r, o, a, i, l) {
    var e = 5,
      s = 1e3;
    function u(t, n, r, a, i, l, u) {
      var c;
      try {
        c = new BroadcastChannel(r);
      } catch (e) {
        (o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
          error: "BC_CONSTRUCTOR_FAILED",
          extra: { message: e instanceof Error ? e.name : "unknown" },
        }),
          u != null
            ? window.setTimeout(function () {
                t.executeCatch(u, ["broadcast_channel_unavailable", "", "", n]);
              })
            : l != null &&
              window.setTimeout(function () {
                t.executeCatch(l, [n]);
              }));
        return;
      }
      var d = !1,
        m = 0,
        p = Number.isFinite(a) ? Math.max(a, s) : s,
        _ = window.setTimeout(function () {
          d ||
            ((d = !0),
            c.close(),
            l != null
              ? window.setTimeout(function () {
                  t.executeCatch(l, [n]);
                })
              : u != null &&
                window.setTimeout(function () {
                  t.executeCatch(u, ["broadcast_channel_timeout", "", "", n]);
                }));
        }, p),
        f = function (a) {
          (m++,
            o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
              error: "BC_MALFORMED_MESSAGE",
              extra: { message: a + " (count: " + m + ")" },
            }),
            !(m < e) &&
              ((d = !0),
              window.clearTimeout(_),
              c.close(),
              u != null
                ? window.setTimeout(function () {
                    t.executeCatch(u, ["malformed_message_limit", "", "", n]);
                  })
                : l != null &&
                  window.setTimeout(function () {
                    t.executeCatch(l, [n]);
                  })));
        };
      ((c.onmessage = function (e) {
        if (!d) {
          var r = e.data;
          if (r == null || typeof r != "object") {
            f("Received non-object message data");
            return;
          }
          var o = r.error;
          if (typeof o == "string" && o !== "") {
            if (((d = !0), window.clearTimeout(_), c.close(), u != null)) {
              var a = o,
                s = typeof r.error_reason == "string" ? r.error_reason : "",
                m =
                  typeof r.error_description == "string"
                    ? r.error_description
                    : "";
              window.setTimeout(function () {
                t.executeCatch(u, [a, s, m, n]);
              });
            } else
              l != null &&
                window.setTimeout(function () {
                  t.executeCatch(l, [n]);
                });
            return;
          }
          if (typeof r.nonce != "string" || r.nonce === "") {
            f(
              "Received message with missing or empty nonce, type: " +
                typeof r.nonce,
            );
            return;
          }
          d = !0;
          var p = r.nonce;
          (window.clearTimeout(_),
            c.close(),
            window.setTimeout(function () {
              t.executeCatch(i, [p, n]);
            }));
        }
      }),
        (c.onmessageerror = function () {
          d || f("Received message that failed deserialization");
        }));
    }
    l.default = u;
  },
  98,
);
