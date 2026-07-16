__d(
  "WAWebBizAiGoogleDriveGetFilesMutation",
  ["WALogger", "WAWebBizAiGoogleDriveGetFilesMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiGoogleDriveGetFilesMutation.graphql"));
    function c(e) {
      var t,
        n =
          e == null || (t = e.meta_ai_biz_agent_wa_gdrive_get_files) == null
            ? void 0
            : t.files;
      return n == null
        ? []
        : n.map(function (e) {
            var t, n, r;
            return {
              cdn_url: e.cdn_url,
              file_name: (t = e.file_name) != null ? t : "",
              google_file_id: (n = e.google_file_id) != null ? n : "",
              has_thumbnail: e.has_thumbnail,
              mime_type: (r = e.mime_type) != null ? r : "",
              sync_failure_reason: e.sync_failure_reason,
              sync_status: d(e.sync_status),
              synced_at: e.synced_at,
              thumbnail_link: e.thumbnail_link,
            };
          });
    }
    function d(e) {
      return e === "SYNCED" || e === "SYNCING" || e === "SYNC_FAILED"
        ? e
        : (e != null &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBizAiGoogleDriveGetFilesMutation: unknown sync_status: ",
                    "",
                  ])),
                String(e),
              )
              .sendLogs("biz-ai-gdrive-unknown-sync-status"),
          "SYNCING");
    }
    ((l.MUTATION = u), (l.normalizeGoogleDriveFiles = c), (l.toSyncStatus = d));
  },
  98,
);
