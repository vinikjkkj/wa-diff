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
      p = null;
    function _() {
      var t = c;
      (t != null && t.isActive() && t.endCancel(),
        (d = 0),
        (m = null),
        (p = null),
        (c = o("WAWebQplFlow").startQplFlow(r("qpl")._(1029384627, "3661"), {
          annotations: { string: { surface: s } },
          timeoutInMs: u,
        })),
        g(e.PROVIDER_MOUNT));
    }
    function f() {
      return ((d += 1), d === 1);
    }
    function g(e) {
      var t;
      (t = c) == null || t.addPoint(e);
    }
    function h(e, t) {
      ((m = e), (p = t != null ? t : null));
    }
    function y(t) {
      var n;
      (g(e.ENTRY_POINT_RENDERED),
        (n = c) == null ||
          n.endSuccess({
            int: { attempt_count: d },
            string: { outcome: t ? "visible" : "not_linked" },
          }),
        (c = null));
    }
    function C(e) {
      var t,
        n,
        r = { outcome: "suppressed" };
      (m != null && (r.failure_reason = m),
        p != null && (r.failure_detail = p),
        (t = c) == null ||
          t.addAnnotations({ int: { attempt_count: d }, string: r }),
        (n = c) == null || n.endFail(e),
        (c = null));
    }
    ((l.AdvertiseEntryPointQplPoint = e),
      (l.startAdvertiseEntryPointQpl = _),
      (l.advertiseEntryPointQplBeginAttempt = f),
      (l.advertiseEntryPointQplAddPoint = g),
      (l.advertiseEntryPointQplRecordFailureReason = h),
      (l.endAdvertiseEntryPointQplVisible = y),
      (l.endAdvertiseEntryPointQplSuppressed = C));
  },
  98,
);
