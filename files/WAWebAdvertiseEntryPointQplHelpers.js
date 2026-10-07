__d(
  "WAWebAdvertiseEntryPointQplHelpers",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        PROVIDER_MOUNT: "provider_mount",
        FETCH_TOKEN_START: "fetch_token_start",
        FETCH_TOKEN_END: "fetch_token_end",
        LINKED_ACCOUNTS_QUERY_START: "linked_accounts_query_start",
        LINKED_ACCOUNTS_QUERY_END: "linked_accounts_query_end",
        LINKED_ACCOUNTS_QUERY_FAIL: "linked_accounts_query_fail",
        ACCOUNT_INFO_SET: "account_info_set",
        ENTRY_POINT_RENDERED: "entry_point_rendered",
      }),
      s = "navbar",
      u = 3e4,
      c = null,
      d = 0,
      m = null,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = 0;
    function y() {
      var t = c;
      (t != null && t.isActive() && t.endCancel(),
        (h += 1),
        (d = 0),
        (m = null),
        (p = null),
        (_ = null),
        (f = null),
        (g = null),
        (c = o("WAWebQplFlow").startQplFlow(r("qpl")._(1029384627, "3661"), {
          annotations: { string: { surface: s } },
          timeoutInMs: u,
        })),
        b(e.PROVIDER_MOUNT));
    }
    function C() {
      return ((d += 1), d === 1);
    }
    function b(e) {
      var t;
      (t = c) == null || t.addPoint(e);
    }
    function v(e, t, n) {
      var r, o;
      ((m = e),
        (p = t != null ? t : null),
        (_ = (r = n == null ? void 0 : n.elapsedMs) != null ? r : null),
        (f = (o = n == null ? void 0 : n.isOnline) != null ? o : null));
    }
    function S() {
      return c == null || g != null ? null : ((g = "pending"), h);
    }
    function R(e, t) {
      e === h && (g = t);
    }
    function L(t) {
      var n;
      (b(e.ENTRY_POINT_RENDERED),
        (n = c) == null ||
          n.endSuccess({
            int: { attempt_count: d },
            string: { outcome: t ? "visible" : "not_linked" },
          }),
        (c = null));
    }
    function E(e) {
      var t,
        n,
        r = { outcome: "suppressed" };
      (m != null && (r.failure_reason = m),
        p != null && (r.failure_detail = p),
        g != null && (r.network_probe = g),
        (t = c) == null ||
          t.addAnnotations({
            bool: { is_online: f },
            int: { attempt_count: d, failure_elapsed_ms: _ },
            string: r,
          }),
        (n = c) == null || n.endFail(e),
        (c = null));
    }
    ((l.AdvertiseEntryPointQplPoint = e),
      (l.startAdvertiseEntryPointQpl = y),
      (l.advertiseEntryPointQplBeginAttempt = C),
      (l.advertiseEntryPointQplAddPoint = b),
      (l.advertiseEntryPointQplRecordFailureReason = v),
      (l.advertiseEntryPointQplStartNetworkProbe = S),
      (l.advertiseEntryPointQplRecordNetworkProbe = R),
      (l.endAdvertiseEntryPointQplVisible = L),
      (l.endAdvertiseEntryPointQplSuppressed = E));
  },
  98,
);
