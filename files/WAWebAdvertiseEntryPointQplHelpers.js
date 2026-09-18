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
      m = null;
    function p() {
      var t = c;
      (t != null && t.isActive() && t.endCancel(),
        (d = 0),
        (m = null),
        (c = o("WAWebQplFlow").startQplFlow(r("qpl")._(1029384627, "3661"), {
          annotations: { string: { surface: s } },
          timeoutInMs: u,
        })),
        f(e.PROVIDER_MOUNT));
    }
    function _() {
      return ((d += 1), d === 1);
    }
    function f(e) {
      var t;
      (t = c) == null || t.addPoint(e);
    }
    function g(e) {
      m = e;
    }
    function h(t) {
      var n;
      (f(e.ENTRY_POINT_RENDERED),
        (n = c) == null ||
          n.endSuccess({
            int: { attempt_count: d },
            string: { outcome: t ? "visible" : "not_linked" },
          }),
        (c = null));
    }
    function y(e) {
      var t, n;
      ((t = c) == null ||
        t.addAnnotations({
          int: { attempt_count: d },
          string: babelHelpers.extends(
            { outcome: "suppressed" },
            m != null ? { failure_reason: m } : null,
          ),
        }),
        (n = c) == null || n.endFail(e),
        (c = null));
    }
    ((l.AdvertiseEntryPointQplPoint = e),
      (l.startAdvertiseEntryPointQpl = p),
      (l.advertiseEntryPointQplBeginAttempt = _),
      (l.advertiseEntryPointQplAddPoint = f),
      (l.advertiseEntryPointQplRecordFailureReason = g),
      (l.endAdvertiseEntryPointQplVisible = h),
      (l.endAdvertiseEntryPointQplSuppressed = y));
  },
  98,
);
