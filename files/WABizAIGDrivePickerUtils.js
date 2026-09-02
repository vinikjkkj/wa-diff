__d(
  "WABizAIGDrivePickerUtils",
  ["BizAIGoogleDriveSyncStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "application/vnd.google-apps.folder",
      s = "__shared_with_me__",
      u = {
        "application/pdf": "PDF",
        "application/vnd.google-apps.document": "Google Doc",
        "application/vnd.google-apps.spreadsheet": "Google Sheet",
        "text/csv": "CSV",
        "text/plain": "Text",
        "image/jpeg": "JPEG",
        "image/png": "PNG",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          "DOCX",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          "XLSX",
      },
      c = 250 * 1024 * 1024;
    function d(e) {
      return e.syncStatus != null &&
        r("BizAIGoogleDriveSyncStatus").cast(e.syncStatus) === "syncing"
        ? "syncing"
        : e.isSynced === !0
          ? "already-synced"
          : e.size != null && Number(e.size) > c
            ? "unsupported-size"
            : u[e.mimeType] == null
              ? "unsupported-type"
              : "selectable";
    }
    function m(e) {
      var t = u[e];
      if (t != null) return t;
      var n = e.split("/"),
        r = n[n.length - 1];
      return r.toUpperCase().replace(/^VND\..*\./, "");
    }
    var p = {
      selectable_count: 0,
      unsupported_type_count: 0,
      unsupported_size_count: 0,
      already_synced_count: 0,
      syncing_count: 0,
    };
    function _(t) {
      var n = 0,
        r = 0,
        o = 0,
        a = 0,
        i = 0;
      for (var l of t)
        if (l.mime_type !== e) {
          var s = d({
            id: l.id,
            name: l.name,
            mimeType: l.mime_type,
            size: l.size,
            isSynced: l.is_synced,
            syncStatus: l.sync_status,
            thumbnailLink: l.thumbnail_link,
            fullPath: l.full_path,
          });
          s === "selectable"
            ? n++
            : s === "unsupported-type"
              ? r++
              : s === "unsupported-size"
                ? o++
                : s === "already-synced"
                  ? a++
                  : s === "syncing" && i++;
        }
      return {
        selectable_count: n,
        unsupported_type_count: r,
        unsupported_size_count: o,
        already_synced_count: a,
        syncing_count: i,
      };
    }
    ((l.FOLDER_MIME_TYPE = e),
      (l.SHARED_WITH_ME_FOLDER_ID = s),
      (l.MAX_FILE_SIZE_BYTES = c),
      (l.getFileStatus = d),
      (l.getShortName = m),
      (l.EMPTY_BREAKDOWN = p),
      (l.getResponseBreakdown = _));
  },
  98,
);
