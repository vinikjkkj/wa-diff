__d(
  "MAIBAAdDraftEditorPublishState",
  ["MAIBAAsyncSupportLobbyStateStore", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = "sac_remediation_publish",
      c = new Set(["COMPLETED", "IN_PROGRESS", "TIMED_OUT"]),
      d = new Set(),
      m = new Set();
    function p(e) {
      return (
        e.focusSectionKind === "special_ad_category" &&
        e.campaignGroupDraftFragmentID != null &&
        e.campaignGroupDraftFragmentID !== ""
      );
    }
    function _(e, t, n) {
      return e == null ||
        e === "" ||
        t == null ||
        t === "" ||
        n == null ||
        n === ""
        ? null
        : e + ":" + t + ":" + n;
    }
    function f() {
      for (var e of m) e();
    }
    function g(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function h(e, t, n) {
      var r = _(e, t, n);
      r == null || d.has(r) || (d.add(r), f());
    }
    function y(e, t, n) {
      var r = _(e, t, n);
      return r != null && d.has(r);
    }
    function C(e, t, n) {
      return t == null || t === "" || n == null || n === ""
        ? !1
        : e.some(function (e) {
            return (
              e.operationType === u &&
              e.remediationContextId === t &&
              e.campaignGroupId === n &&
              e.publishId != null &&
              e.publishId !== "" &&
              c.has(e.status)
            );
          });
    }
    function b(e) {
      if (!(e == null || e === "")) {
        var t = e + ":",
          n = !1;
        for (var r of d) r.startsWith(t) && (d.delete(r), (n = !0));
        n && f();
      }
    }
    function v(e, t, n) {
      var r = o(
          "MAIBAAsyncSupportLobbyStateStore",
        ).useSubscriptionAsyncSupportLobbyStates(e),
        a = s(g, function () {
          return y(e, t, n);
        });
      return a || C(r, t, n);
    }
    ((l.isSACRemediationReadyToPublish = p),
      (l.markSACRemediationPublished = h),
      (l.clearSACRemediationPublished = b),
      (l.useIsSACRemediationPublished = v));
  },
  98,
);
