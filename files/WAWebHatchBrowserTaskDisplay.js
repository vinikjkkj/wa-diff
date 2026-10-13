__d(
  "WAWebHatchBrowserTaskDisplay",
  ["WAWebHatchBrowserTaskState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r,
        a,
        i = (r = s(t, e)) != null ? r : s(n, e),
        l =
          (i == null ? void 0 : i.screenshotURL) != null ||
          e.encryptedScreenshot != null,
        u =
          l ||
          e.previewAvailable === !0 ||
          (i == null ? void 0 : i.previewAvailable) === !0,
        m = d(i, e),
        f = m.state,
        g = m.terminalReason,
        h = c(i, f),
        y = p(f, e, i);
      return {
        canRecoverFromTombstone: !1,
        completionDetail: y == null ? _(f, e, i) : null,
        hasPreview: l,
        isPreviewAvailable: u,
        isSettled: o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(f),
        isTombstone: h,
        liveScreenshotURL: i == null ? void 0 : i.screenshotURL,
        settledTask:
          i != null &&
          o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(f)
            ? i
            : null,
        state: f,
        subtitle: y,
        terminalReason: g,
        title:
          (a = o("WAWebHatchBrowserTaskState").nonBlank(
            i == null ? void 0 : i.title,
          )) != null
            ? a
            : e.title,
      };
    }
    function s(e, t) {
      return e != null && !u(e.version, t.version) ? e : null;
    }
    function u(e, t) {
      return e != null && t != null && e < t;
    }
    function c(e, t) {
      return (
        e != null &&
        y(e.status) === "superseded" &&
        !o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(t)
      );
    }
    function d(e, t) {
      if (e == null) return m(t.state, t.terminalReason);
      var n = y(e.status),
        r = h(n);
      if (r != null) return m(r, e.terminalReason);
      if (o("WAWebHatchBrowserTaskState").isSettledBrowserTaskState(t.state))
        return m(t.state, t.terminalReason);
      var a = g(e);
      if (a != null) return m(a, e.terminalReason);
      var i = b(n, e.terminalReason);
      return i != null ? m(i, e.terminalReason) : m(t.state, t.terminalReason);
    }
    function m(e, t) {
      return { state: e, terminalReason: e === "FAILED" ? t : null };
    }
    function p(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u =
          (r = o("WAWebHatchBrowserTaskState").nonBlank(
            n == null ? void 0 : n.activityTitle,
          )) != null
            ? r
            : o("WAWebHatchBrowserTaskState").nonBlank(
                n == null ? void 0 : n.siteDomain,
              ),
        c = t.state === e ? t.statusLabel : null;
      return e === "COMPLETED"
        ? o("WAWebHatchBrowserTaskState").nonBlank(c)
        : e === "FAILED" || e === "STOPPED"
          ? c
          : e === "WAITING" || e === "NEEDS_USER" || e === "PAUSED"
            ? (a = (i = u != null ? u : c) != null ? i : t.activityTitle) !=
              null
              ? a
              : t.siteDomain
            : (l = (s = u != null ? u : t.activityTitle) != null ? s : c) !=
                null
              ? l
              : t.siteDomain;
    }
    function _(e, t, n) {
      var r;
      return e !== "COMPLETED"
        ? null
        : (r = f(n)
              ? o("WAWebHatchBrowserTaskState").nonBlank(
                  n == null ? void 0 : n.activityTitle,
                )
              : null) != null
          ? r
          : t.state === "COMPLETED"
            ? o("WAWebHatchBrowserTaskState").nonBlank(t.activityTitle)
            : null;
    }
    function f(e) {
      var t;
      return (
        e != null && ((t = h(y(e.status))) != null ? t : g(e)) === "COMPLETED"
      );
    }
    function g(e) {
      var t;
      return C(
        y(
          (t = o("WAWebHatchBrowserTaskState").nonBlank(e.displayState)) != null
            ? t
            : e.displayStatus,
        ),
      );
    }
    function h(e) {
      return e === "complete" || e === "completed"
        ? "COMPLETED"
        : e === "failed"
          ? "FAILED"
          : e === "stopped"
            ? "STOPPED"
            : null;
    }
    function y(e) {
      return e == null ? void 0 : e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function C(e) {
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
    function b(e, t) {
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
                  ? v(y(t))
                  : null;
    }
    function v(e) {
      return e === "awaiting_input_timed_out" ||
        e === "awaiting_user_input_timed_out" ||
        e === "user_control_heartbeat_timed_out"
        ? "NEEDS_USER"
        : e === "user_stop"
          ? "STOPPED"
          : "FAILED";
    }
    ((l.browserTaskCardDisplay = e), (l.acceptedBrowserTask = s));
  },
  98,
);
