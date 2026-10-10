__d(
  "WAWebHatchBrowserTaskDisplay",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r = t != null && !l(t.version, e.version) ? t : null,
        o =
          (r == null ? void 0 : r.screenshotURL) != null ||
          e.encryptedScreenshot != null,
        a =
          o ||
          e.previewAvailable === !0 ||
          (r == null ? void 0 : r.previewAvailable) === !0,
        i = u(r, e.state),
        d = s(r, i, a);
      return {
        canRecoverFromTombstone:
          d &&
          i !== "STOPPED" &&
          _(r == null ? void 0 : r.status) !== "superseded",
        hasPreview: o,
        isPreviewAvailable: a,
        isTombstone: d,
        liveScreenshotURL: r == null ? void 0 : r.screenshotURL,
        state: i,
        subtitle: c(i, e, r),
        title: (n = p(r == null ? void 0 : r.title)) != null ? n : e.title,
      };
    }
    function l(e, t) {
      return e != null && t != null && e < t;
    }
    function s(e, t, n) {
      return e != null && _(e.status) === "superseded" ? !0 : m(t) && !n;
    }
    function u(e, t) {
      var n, r, o, a, i;
      if (e == null) return t;
      var l = _(e.status);
      return (n =
        (r =
          (o = (a = d(l)) != null ? a : m(t) ? t : null) != null
            ? o
            : f(_((i = p(e.displayState)) != null ? i : e.displayStatus))) !=
        null
          ? r
          : g(l, e.terminalReason)) != null
        ? n
        : t;
    }
    function c(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s =
          (r = p(n == null ? void 0 : n.activityTitle)) != null
            ? r
            : p(n == null ? void 0 : n.siteDomain),
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
    function d(e) {
      return e === "complete" || e === "completed"
        ? "COMPLETED"
        : e === "failed"
          ? "FAILED"
          : e === "stopped"
            ? "STOPPED"
            : null;
    }
    function m(e) {
      return e === "COMPLETED" || e === "FAILED" || e === "STOPPED";
    }
    function p(e) {
      return e != null && e.trim() !== "" ? e : null;
    }
    function _(e) {
      return e == null ? void 0 : e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function f(e) {
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
    function g(e, t) {
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
                  ? h(_(t))
                  : null;
    }
    function h(e) {
      return e === "awaiting_input_timed_out" ||
        e === "awaiting_user_input_timed_out" ||
        e === "user_control_heartbeat_timed_out"
        ? "NEEDS_USER"
        : e === "user_stop"
          ? "STOPPED"
          : "FAILED";
    }
    i.browserTaskCardDisplay = e;
  },
  66,
);
