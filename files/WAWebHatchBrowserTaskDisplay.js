__d(
  "WAWebHatchBrowserTaskDisplay",
  ["WAWebHatchBrowserTaskState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = t != null && !s(t.version, e.version) ? t : null,
        o =
          (r == null ? void 0 : r.screenshotURL) != null ||
          e.encryptedScreenshot != null,
        a =
          o ||
          e.previewAvailable === !0 ||
          (r == null ? void 0 : r.previewAvailable) === !0,
        i = c(r, e),
        l = i.state,
        d = i.terminalReason,
        p = u(r, l, a);
      return {
        canRecoverFromTombstone:
          p &&
          l !== "STOPPED" &&
          f(r == null ? void 0 : r.status) !== "superseded",
        hasPreview: o,
        isPreviewAvailable: a,
        isTombstone: p,
        liveScreenshotURL: r == null ? void 0 : r.screenshotURL,
        state: l,
        subtitle: m(l, e, r),
        terminalReason: d,
        title: (n = _(r == null ? void 0 : r.title)) != null ? n : e.title,
      };
    }
    function s(e, t) {
      return e != null && t != null && e < t;
    }
    function u(e, t, n) {
      return e != null && f(e.status) === "superseded"
        ? !0
        : o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(t) && !n;
    }
    function c(e, t) {
      var n;
      if (e == null) return d(t.state, t.terminalReason);
      var r = f(e.status),
        a = p(r);
      if (a != null) return d(a, e.terminalReason);
      if (o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(t.state))
        return d(t.state, t.terminalReason);
      var i = g(f((n = _(e.displayState)) != null ? n : e.displayStatus));
      if (i != null) return d(i, e.terminalReason);
      var l = h(r, e.terminalReason);
      return l != null ? d(l, e.terminalReason) : d(t.state, t.terminalReason);
    }
    function d(e, t) {
      return { state: e, terminalReason: e === "FAILED" ? t : null };
    }
    function m(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s =
          (r = _(n == null ? void 0 : n.activityTitle)) != null
            ? r
            : _(n == null ? void 0 : n.siteDomain),
        u = t.state === e ? t.statusLabel : null;
      return e === "COMPLETED" || e === "FAILED" || e === "STOPPED"
        ? u
        : e === "WAITING" || e === "NEEDS_USER" || e === "PAUSED"
          ? (o = (a = s != null ? s : u) != null ? a : t.activityTitle) != null
            ? o
            : t.siteDomain
          : (i = (l = s != null ? s : t.activityTitle) != null ? l : u) != null
            ? i
            : t.siteDomain;
    }
    function p(e) {
      return e === "complete" || e === "completed"
        ? "COMPLETED"
        : e === "failed"
          ? "FAILED"
          : e === "stopped"
            ? "STOPPED"
            : null;
    }
    function _(e) {
      return e != null && e.trim() !== "" ? e : null;
    }
    function f(e) {
      return e == null ? void 0 : e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function g(e) {
      return e === "queued"
        ? "QUEUED"
        : e === "starting"
          ? "STARTING"
          : e === "working"
            ? "WORKING"
            : e === "waiting" || e === "needs_user"
              ? "WAITING"
              : e === "needs_you"
                ? "NEEDS_USER"
                : e === "paused"
                  ? "PAUSED"
                  : e === "stopped"
                    ? "STOPPED"
                    : e === "complete" || e === "completed"
                      ? "COMPLETED"
                      : e === "failed"
                        ? "FAILED"
                        : null;
    }
    function h(e, t) {
      return e === "queued"
        ? "QUEUED"
        : e === "starting"
          ? "STARTING"
          : e === "running"
            ? "WORKING"
            : e === "awaiting_user_input" || e === "needs_user"
              ? "WAITING"
              : e === "user_controlled"
                ? "PAUSED"
                : e === "superseded"
                  ? y(f(t))
                  : null;
    }
    function y(e) {
      return e === "awaiting_input_timed_out" ||
        e === "awaiting_user_input_timed_out" ||
        e === "user_control_heartbeat_timed_out"
        ? "NEEDS_USER"
        : e === "user_stop"
          ? "STOPPED"
          : "FAILED";
    }
    l.browserTaskCardDisplay = e;
  },
  98,
);
