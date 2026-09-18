__d(
  "polarisLongFormDiagnosticSanitizer",
  ["hashString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        "upload_id",
        "uploadId",
        "session_id",
        "sessionId",
        "chain_id",
        "chainId",
        "request_key",
        "requestKey",
        "publish_attempt_id",
        "client_id",
        "media_id",
        "video_asset_id",
        "longform_upload_id",
        "longform_video_asset_id",
        "clip_upload_id",
        "landscape_cover_upload_id",
      ]),
      s = new Set([
        "width",
        "height",
        "duration_ms",
        "upload_media_width",
        "upload_media_height",
        "uploadMediaWidth",
        "uploadMediaHeight",
        "uploadMediaDurationMs",
        "fileByteOffset",
        "chunkSize",
        "upload_media_duration_ms",
        "file_size_bytes",
        "chain_index",
        "chain_length",
        "offset",
        "count",
        "retry_count",
        "clip_count",
        "start_timestamp_ms",
        "error_code",
        "error",
        "statusCode",
        "longform_end_card_check_version",
        "publish_mode",
        "media_type",
      ]),
      u = new Set([
        "is_longform_video",
        "is_clips_video",
        "extract_cover_frame",
        "acknowledged",
        "is_terminal",
        "is_retryable",
        "uploads_ready",
        "verification_error",
      ]),
      c = new Set([
        "payload",
        "data",
        "request_data",
        "medias",
        "posts",
        "error_info",
        "media",
        "associated_clips_metadata",
        "associated_clips_upload_ids",
        "clip_upload_ids",
        "longform_end_card_check",
        "result",
        "results",
        "clip_video_asset_ids",
      ]),
      d = new Set([
        "ok",
        "fail",
        "PENDING",
        "COMPLETED",
        "PENDING_DISTRIBUTION",
        "ERROR",
        "STARTED",
        "RETRYING",
        "FAILURE",
        "SUCCESS",
        "WARN",
        "BLOCK",
        "PASS",
        "UPLOADS_PENDING",
        "PROCESSING",
        "pending",
        "processing",
        "completed",
        "failed",
        "aborted",
        "COMPLETE",
        "VERIFYING",
        "ALLOW",
        "REJECT",
      ]),
      m = new Set(["VIDEO_UPLOAD", "COVER_UPLOAD", "LANDSCAPE_COVER_UPLOAD"]),
      p = new Set([
        "Error",
        "TypeError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "URIError",
        "EvalError",
        "DOMException",
        "AbortError",
        "NetworkError",
        "TimeoutError",
        "AjaxError",
        "CometAsyncFetchError",
      ]),
      _ = new Set([
        "method",
        "phase",
        "outcome",
        "transport",
        "scope",
        "logging_source",
        "error_name",
      ]),
      f = new Set(
        [].concat(Array.from(p), [
          "GET",
          "POST",
          "request",
          "response",
          "load",
          "error",
          "abort",
          "timeout",
          "relay",
          "ig_api",
          "ig_upload_summary",
          "PAGE_DURING_UPLOADER_SESSION",
          "UPLOADER_OPERATION",
          "ONERROR",
          "ONUNHANDLEDREJECTION",
          "PROMISE_DONE",
          "GUARDED",
          "REACT_FIBER",
          "ERROR_BOUNDARY",
        ]),
      ),
      g = new Set([
        "request",
        "response",
        "response_headers",
        "body",
        "stack_frames",
      ]),
      h = new Set(["http_status", "transport_status", "line", "column"]);
    function y(e) {
      if (Array.isArray(e)) {
        for (var t of e) y(t);
        Object.freeze(e);
      } else if (e != null && typeof e == "object") {
        for (var n of Object.values(e)) y(n);
        Object.freeze(e);
      }
      return e;
    }
    function C(e) {
      return typeof e == "string" &&
        /^(?:[0-9]{1,32}(?:_[0-9]{1,32})?|[a-fA-F0-9]{16,128}|[a-fA-F0-9]{8}-[a-fA-F0-9-]{27,63})$/.test(
          e,
        )
        ? e
        : null;
    }
    function b(e) {
      return Math.abs(r("hashString")(e)).toString(16);
    }
    function v(t, n) {
      n === void 0 && (n = !1);
      var r = n ? 300 : 100,
        o = !1;
      function a(t, i, l) {
        if ((l === void 0 && (l = !1), i > (n ? 8 : 4) || r-- <= 0))
          return ((o = !0), null);
        if (l && typeof t == "string") {
          var p = C(t);
          return (o || (o = p == null), p);
        }
        if (Array.isArray(t))
          return (
            o || (o = t.length > 12),
            t.slice(0, 12).map(function (e) {
              return a(e, i + 1, l);
            })
          );
        if (t == null || typeof t != "object")
          return (o || (o = t != null), null);
        var y = {},
          v = Object.keys(t);
        o || (o = v.length > 40);
        for (var S of v.slice(0, 40)) {
          var R = t[S],
            L = null;
          (n && _.has(S) && typeof R == "string" && f.has(R)
            ? (L = R)
            : n && S === "request_event_id"
              ? (L = C(R))
              : (n &&
                    /^(error|error_name|error_code|error_type|reason_code)_hash$/.test(
                      S,
                    ) &&
                    typeof R == "string" &&
                    /^[a-f0-9]{1,16}$/.test(R)) ||
                  (n &&
                    /^(x-fb-request-id|x-ig-request-id|x-fb-trace-id|x-fb-debug)$/.test(
                      S,
                    ) &&
                    typeof R == "string" &&
                    /^[A-Za-z0-9+/=_-]{8,256}$/.test(R)) ||
                  (n &&
                    S === "script" &&
                    typeof R == "string" &&
                    /^(?:intern\/)?rsrc\.php\/[A-Za-z0-9_./-]{1,256}$/.test(R))
                ? (L = R)
                : e.has(S)
                  ? (L = C(R))
                  : ((s.has(S) || (n && h.has(S))) &&
                        typeof R == "number" &&
                        Number.isFinite(R)) ||
                      ((u.has(S) || (n && S === "redacted")) &&
                        typeof R == "boolean") ||
                      (S === "upload_subphase" &&
                        typeof R == "string" &&
                        m.has(R)) ||
                      ((S === "status" ||
                        S === "error_type" ||
                        S === "error_code" ||
                        S === "verification_status" ||
                        S === "verdict") &&
                        typeof R == "string" &&
                        d.has(R))
                    ? (L = R)
                    : (S === "error_code" ||
                          S === "error_type" ||
                          S === "reason_code") &&
                        typeof R == "string"
                      ? ((y[S + "_hash"] = b(R.slice(0, 256))), (o = !0))
                      : (c.has(S) || (n && g.has(S))) &&
                        (L = a(R, i + 1, S.endsWith("_ids"))),
            L != null ? (y[S] = L) : R != null && (o = !0));
        }
        return y;
      }
      try {
        var i = a(t, 0);
        return { body: i, redacted: o };
      } catch (e) {
        return { body: null, redacted: !0 };
      }
    }
    function S(e) {
      var t = typeof e == "string" && /^\d{1,7}$/.test(e) ? Number(e) : e;
      return typeof t == "number" && Number.isFinite(t) ? t : null;
    }
    function R(e) {
      var t = e != null && typeof e == "object" ? e : {},
        n = typeof t.name == "string" ? t.name : "Error",
        r = Array.isArray(t.stackFrames) ? t.stackFrames : [],
        o = r.slice(0, 12).map(function (e) {
          var t, n;
          if (e == null || typeof e != "object") return {};
          var r =
            typeof e.script == "string"
              ? (t = e.script.match(
                  /^https:\/\/(?:(?:[a-z0-9.-]+\.)?(?:cdninstagram\.com|fbcdn\.net)|www\.[0-9]+\.od\.facebook\.com)\/((?:intern\/)?rsrc\.php\/[A-Za-z0-9_./-]+)(?:[?#]|$)/,
                )) == null
                ? void 0
                : t[1]
              : null;
          return {
            column: S(e.column),
            line: S(e.line),
            script:
              (n = r == null ? void 0 : r.slice(0, 256)) != null ? n : null,
          };
        });
      return {
        error_hash: b(n + JSON.stringify(o)),
        error_name: p.has(n) ? n : "Error",
        error_name_hash: b(n),
        redacted: !0,
        stack_frames: o,
      };
    }
    ((l.freezeLongFormDiagnosticValue = y),
      (l.longFormDiagnosticID = C),
      (l.sanitizeLongFormDiagnosticBody = v),
      (l.sanitizeLongFormDiagnosticError = R));
  },
  98,
);
