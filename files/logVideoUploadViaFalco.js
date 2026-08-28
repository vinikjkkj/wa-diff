__d(
  "logVideoUploadViaFalco",
  [
    "FBLogger",
    "MediaUploadCommonWwwFalcoEvent",
    "VideoComposerDialogVersion",
    "VideoUploadSourceType",
    "WorkSharedDraftMode",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("FBLogger")("media_upload", "media_upload_common_www");
    }
    function s(e) {
      if (e != null) return String(e);
    }
    function u(e) {
      if (e != null) return e === "false" || e === "0" ? !1 : !!e;
    }
    function c(t) {
      try {
        if (t == null) return;
        var n;
        return (
          typeof t == "number"
            ? (n = Number.isInteger(t) ? t : Math.trunc(t))
            : (n = Number.parseInt(String(t), 10)),
          Number.isNaN(n) || !Number.isFinite(n) ? void 0 : String(n)
        );
      } catch (n) {
        e()
          .catching(r("getErrorSafe")(n))
          .warn("Value should be integer, but it was not - %s", String(t));
        return;
      }
    }
    function d(e) {
      if (e != null) {
        var t = Number(e);
        return Number.isNaN(t) || !Number.isFinite(t) ? void 0 : t;
      }
    }
    function m(e) {
      if (!(e == null || typeof e != "object")) return e;
    }
    function p(e, t) {
      if (e != null && Object.values(t).indexOf(e) >= 0) return e;
    }
    function _(t) {
      var n = s(t.waterfall_id);
      if (n == null) {
        e().warn(
          "Video upload event cannot be logged due missing waterfall_id: %s",
          String(t.waterfall_id),
        );
        return;
      }
      var o = p(t.source, r("VideoUploadSourceType"));
      if (o == null) {
        e().warn(
          "Video upload event cannot be logged due missing or invalid source type: %s (original: %s)",
          String(o),
          String(t.source),
        );
        return;
      }
      var a = s(t.event);
      if (a == null) {
        e().warn(
          "Video upload event cannot be logged due missing event field: %s",
          String(t.event),
        );
        return;
      }
      var i = {
        waterfall_id: n,
        source: o,
        event: a,
        actor_id: s(t.actor_id),
        target_id: s(t.target_id),
        composer_entry_point_ref: s(t.composer_entry_point_ref),
        container_type: c(t.container_type),
        is_chunked_upload: u(t.is_chunked_upload),
        hinted_app_id: s(t.app_id),
        is_remote_upload: u(t.is_remote_upload),
        composer_dialog_version: p(
          t.composer_dialog_version,
          r("VideoComposerDialogVersion"),
        ),
        composer_work_shared_draft_mode: p(
          t.composer_work_shared_draft_mode,
          r("WorkSharedDraftMode"),
        ),
        elapsed_time: c(t.elapsed_time),
        error: s(t.error),
        error_inner: s(t.error_inner),
        error_code: c(t.error_code),
        error_description: s(t.error_description),
        error_summary: s(t.error_summary),
        error_trace: s(t.error_trace),
        source_height: c(t.source_height),
        source_width: c(t.source_width),
        duration: c(t.duration),
        file_size: c(t.file_size),
        has_file_been_replaced: u(t.has_file_been_replaced),
        composer_session_id: s(t.composer_session_id),
        retries: c(t.retries),
        server_retries: c(t.server_retries),
        asset_id: s(t.asset_id),
        file_can_read: u(t.file_can_read),
        application_state: s(t.application_state),
        upload_method: s(t.upload_method),
        upload_domain: s(t.upload_domain),
        hash: s(t.hash),
        hash_time: c(t.hash_time),
        hash_exception: s(t.hash_exception),
        video_id: s(t.video_id),
        upload_speed: d(t.upload_speed),
        skip_upload: u(t.skip_upload),
        trigger_time: s(t.trigger_time),
        ad_account_id: s(t.ad_account_id),
        video_original_file_path: s(t.video_original_file_path),
        event_reason: s(t.event_reason),
        retry_id: s(t.retry_id),
        internet_status: s(t.internet_status),
        network_status: s(t.network_status),
        is_spherical: u(t.is_spherical),
        file_extension: s(t.file_extension),
        sent_bytes: c(t.sent_bytes),
        start_offset: c(t.start_offset),
        transport_retries: c(t.transport_retries),
        timeout_retries: c(t.timeout_retries),
        request_manager_state: s(t.request_manager_state),
        debug: m(t.debug),
        creative_tools: s(t.creative_tools),
        media_type: s(t.media_type),
        source_frame_rate: c(t.source_frame_rate),
        source_bit_rate: c(t.source_bit_rate),
        source_video_codec: s(t.source_video_codec),
      };
      r("MediaUploadCommonWwwFalcoEvent").logCritical(function () {
        return i;
      });
    }
    l.default = _;
  },
  98,
);
