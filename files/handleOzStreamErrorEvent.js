__d(
  "handleOzStreamErrorEvent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    function l(t, n) {
      var r = n.error.getExtra().code;
      if (!(t.getBool("no_retry_on_empty_string_error_code", !1) && r === "")) {
        if (t.getBool("retry_null_error_code_in_stream", !1) && r == null) {
          n.retry();
          return;
        }
        var o = JSON.parse(t.getString("network_end_broadcasts_json", "[]"));
        if (r != null && o.includes(r)) {
          n.endStream();
          return;
        }
        var a = JSON.parse(t.getString("network_skip_json", "[]"));
        if (r != null && a.includes(r)) {
          n.retry();
          return;
        }
        var i = t.getBool("back_off_pdash_504_retry", !0)
            ? e[n.retryAttemptCount]
            : 0,
          l = JSON.parse(t.getString("network_reload_mpd_json", "[]")),
          s = t.getBool("fix_reload_manifest_retry", !1);
        if (
          !(
            t.getBool("back_off_pdash_504_retry", !0) &&
            i == null &&
            (!s || (r != null && l.includes(r)))
          )
        ) {
          if (i != null && r != null && l.includes(r)) {
            t.getBool("network_reload_mpd_json_retry", !1)
              ? n.retry({ behavior: "recover_failed_request", waitMs: i * 1e3 })
              : n.retry({ waitMs: i * 1e3 });
            return;
          }
          var u = JSON.parse(
              t.getString(
                "network_retry_intervals_json",
                '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}',
              ),
            ),
            c = r != null ? u[r] : null;
          if (c != null) {
            t.getBool("network_retry_intervals_json_retry", !1)
              ? n.retry({ behavior: "retry_failed_request", waitMs: c })
              : n.retry({ waitMs: c });
            return;
          }
        }
      }
    }
    i.default = l;
  },
  66,
);
