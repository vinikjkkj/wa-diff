__d(
  "WAWebGroupHistoryReceiverFailureReason",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 10,
      l = "add_option_in_wrong_list",
      s = "already_exists",
      u = "expired",
      c = "invalid_jid",
      d = "not_shareable",
      m = "older_than_local_history",
      p = "parse_failed",
      _ = "timestamp_too_old",
      f = "insert_messages_exception",
      g = "processing_failed",
      h = "protobuf_parse_failed",
      y = "out_window_pin:";
    function C(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          o = n[1];
        for (var a of o) {
          var i,
            l = a[0],
            s = a[1],
            u = "" + r + l;
          t.set(u, ((i = t.get(u)) != null ? i : 0) + s);
        }
      }
      return t;
    }
    function b(t) {
      var n = Array.from(t.entries())
        .filter(function (e) {
          var t = e[1];
          return t > 0;
        })
        .sort(function (e, t) {
          var n = e[0],
            r = e[1],
            o = t[0],
            a = t[1];
          return a - r || n.localeCompare(o);
        })
        .slice(0, e)
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return t + ":" + n;
        });
      return n.length > 0 ? n.join(",") : void 0;
    }
    ((i.SKIP_REASON_ADD_OPTION_IN_WRONG_LIST = l),
      (i.SKIP_REASON_ALREADY_EXISTS = s),
      (i.SKIP_REASON_EXPIRED = u),
      (i.SKIP_REASON_INVALID_JID = c),
      (i.SKIP_REASON_NOT_SHAREABLE = d),
      (i.SKIP_REASON_OLDER_THAN_LOCAL_HISTORY = m),
      (i.SKIP_REASON_PARSE_FAILED = p),
      (i.SKIP_REASON_TIMESTAMP_TOO_OLD = _),
      (i.FAILURE_REASON_INSERT_MESSAGES_EXCEPTION = f),
      (i.FAILURE_REASON_PROCESSING_FAILED = g),
      (i.FAILURE_REASON_PROTOBUF_PARSE_FAILED = h),
      (i.OUT_WINDOW_PIN_REASON_PREFIX = y),
      (i.mergeReasonCounts = C),
      (i.formatReceiverFailureReason = b));
  },
  66,
);
