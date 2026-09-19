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
    function s(t, n, r) {
      if (
        t.hasCompleteLogs !== !0 ||
        r == null ||
        r === "" ||
        r === "0" ||
        n == null ||
        n.ownerViewerId !== r
      )
        return t;
      try {
        var a,
          i,
          l = e();
        if (
          (l == null ? void 0 : l.ownerViewerId) !== r ||
          (l == null ? void 0 : l.snapshot.uploader_session_id) !==
            n.snapshot.uploader_session_id
        )
          return t;
        var s = JSON.parse(t.miscInfo);
        if (s == null || typeof s != "object" || Array.isArray(s)) return t;
        var u = "Attached Metadata" in s ? s["Attached Metadata"] : void 0;
        if (
          u !== void 0 &&
          (u == null || typeof u != "object" || Array.isArray(u))
        )
          return t;
        var c = n.snapshot,
          d =
            (a = o("ConstUriUtils").getUri(
              "https://ig-data-apps.internalmeta.com/ig/home/mobile_longform/longform-uploader-sessions",
            )) == null ||
            (a = a.addQueryParam("session", c.uploader_session_id)) == null
              ? void 0
              : a.toString(),
          m = {
            ig_lfv_attribution: (function (e) {
              if (e === !0 && t.product === "instagram_long_video_upload")
                return "selected_area";
              if (e === !0 && c.session_active) return "active_composer";
              if (e === !0) return "recent_composer";
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(!0),
            ig_lfv_session_debugger_url: d,
            ig_lfv_uploader_session_id: c.uploader_session_id,
          };
        return u != null &&
          Object.keys(m).some(function (e) {
            return e in u;
          })
          ? t
          : babelHelpers.extends({}, t, {
              attachments: [].concat(t.attachments, [
                {
                  content: "",
                  file: new File(
                    [
                      JSON.stringify(
                        babelHelpers.extends({}, c, {
                          capture_available: !0,
                          report_entrypoint:
                            (i = t.source) != null ? i : "unknown",
                          session_debugger_url: d,
                        }),
                      ),
                    ],
                    "longform_uploader_diagnostics.json",
                    { type: "application/json" },
                  ),
                },
              ]),
              miscInfo: JSON.stringify(
                babelHelpers.extends({}, s, {
                  "Attached Metadata": babelHelpers.extends({}, u, m),
                }),
              ),
            });
      } catch (e) {
        return t;
      }
    }
    ((l.capturePolarisLongVideoUploadReportContext = e),
      (l.getPolarisLongVideoUploadReportParams = s));
  },
  98,
);
