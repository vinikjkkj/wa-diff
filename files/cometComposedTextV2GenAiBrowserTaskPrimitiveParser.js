__d(
  "cometComposedTextV2GenAiBrowserTaskPrimitiveParser",
  ["MSGDataclassTypes.flow", "cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = s(e.browser_task_id);
      if (n == null) return null;
      var r = u(e.encrypted_screenshot);
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders").buildBrowserTaskNode({
            activityTitle: s(e.activity_title),
            browserTaskId: n,
            encryptedScreenshot: r,
            nodeType: "browserTask",
            previewAvailable: e.preview_available === !0,
            siteDomain: s((t = e.current_site) == null ? void 0 : t.domain),
            state: c(e),
            statusLabel: s(e.status_label),
            title: s(e.title),
            version: e.version,
          }),
        );
    }
    function s(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    function u(e) {
      return e == null ||
        s(e.direct_path) == null ||
        s(e.media_key) == null ||
        s(e.file_sha256) == null ||
        s(e.file_enc_sha256) == null
        ? null
        : e;
    }
    function c(e) {
      var t = e.state,
        n =
          t != null
            ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.cast(t)
            : null;
      return n != null ? n : d(e.status, e.terminal_reason);
    }
    function d(e, t) {
      return (function (e) {
        return e === "queued"
          ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Queued
          : e === "starting"
            ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Starting
            : e === "awaiting_user_input" ||
                e === "needs_user" ||
                e === "waiting"
              ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Waiting
              : e === "needs_you"
                ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.NeedsUser
                : e === "paused" || e === "user_controlled"
                  ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Paused
                  : e === "stopped"
                    ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Stopped
                    : e === "completed"
                      ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState
                          .Completed
                      : e === "failed"
                        ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState
                            .Failed
                        : e === "superseded"
                          ? p(m(t))
                          : o("MSGDataclassTypes.flow").GenAiBrowserTaskState
                              .Working;
      })(m(e));
    }
    function m(e) {
      return (e != null ? e : "").trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function p(e) {
      return e === "awaiting_user_input_timed_out" ||
        e === "user_control_heartbeat_timed_out"
        ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.NeedsUser
        : e === "user_stop"
          ? o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Stopped
          : o("MSGDataclassTypes.flow").GenAiBrowserTaskState.Failed;
    }
    l.default = e;
  },
  98,
);
