__d(
  "polarisLongVideoUploadReportContext",
  ["ConstUriUtils", "ifRequired", "polarisLongVideoUploadReportStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("ifRequired")(
        "polarisLongFormUploaderEventLogger",
        function (e) {
          return e.getLongFormUploaderReportCandidate();
        },
      );
      return (e == null ? void 0 : e.context) != null
        ? e.context
        : (e == null ? void 0 : e.hasActiveSession) === !0
          ? null
          : o(
              "polarisLongVideoUploadReportStorage",
            ).readPolarisLongVideoUploadReportContext();
    }
    function s(e, t, n) {
      var r, a, i, l, s;
      if (e.product !== "instagram_long_video_upload") return e;
      var u =
          e.hasCompleteLogs === !0 &&
          n != null &&
          n !== "" &&
          n !== "0" &&
          t != null &&
          t.ownerViewerId === n
            ? t.snapshot
            : null,
        c = {
          capture_available: u != null,
          client_platform: "WEB",
          creation_step:
            (r = u == null ? void 0 : u.creation_step) != null ? r : null,
          publish_attempt_id:
            (a = u == null ? void 0 : u.publish_attempt_id) != null ? a : null,
          report_entrypoint: (i = e.source) != null ? i : "unknown",
          session_debugger_url:
            u == null
              ? null
              : (l = o("ConstUriUtils").getUri(
                    "https://ig-data-apps.internalmeta.com/ig/home/mobile_longform/longform-uploader-sessions",
                  )) == null ||
                  (l = l.addQueryParam("session", u.uploader_session_id)) ==
                    null
                ? void 0
                : l.toString(),
          uploader_session_id:
            (s = u == null ? void 0 : u.uploader_session_id) != null ? s : null,
        },
        d = {
          ig_lfv_attribution: "selected_area",
          ig_lfv_session_debugger_url: c.session_debugger_url,
          ig_lfv_uploader_session_id: c.uploader_session_id,
        },
        m;
      try {
        m = JSON.parse(e.miscInfo);
      } catch (e) {
        m = null;
      }
      var p = m != null && typeof m == "object" && !Array.isArray(m) ? m : {},
        _ = "Attached Metadata" in p ? p["Attached Metadata"] : null;
      return babelHelpers.extends({}, e, {
        diagnosticLogs: {
          longform_uploader_diagnostics: babelHelpers.extends({}, u, c),
        },
        miscInfo: JSON.stringify(
          babelHelpers.extends({}, p, {
            "Attached Metadata": babelHelpers.extends(
              {},
              _ != null && typeof _ == "object" && !Array.isArray(_) ? _ : {},
              d,
            ),
          }),
        ),
      });
    }
    ((l.capturePolarisLongVideoUploadReportContext = e),
      (l.getPolarisLongVideoUploadReportParams = s));
  },
  98,
);
