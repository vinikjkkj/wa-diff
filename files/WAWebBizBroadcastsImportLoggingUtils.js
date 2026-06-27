__d(
  "WAWebBizBroadcastsImportLoggingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.name.toLowerCase();
      return t.endsWith(".ods") || e.type === d
        ? "ods"
        : t.endsWith(".xlsx") || e.type === p
          ? "xlsx"
          : t.endsWith(".xls") || e.type === m
            ? "xls"
            : t.endsWith(".csv") || e.type === c || e.type === u
              ? "csv"
              : "unknown";
    }
    function l(t, n, r) {
      var o;
      return {
        columnSelectionSource:
          (o = r == null ? void 0 : r.columnSelectionSource) != null
            ? o
            : n
              ? void 0
              : "legacy",
        importFileType: e(t),
        smartColumnDetectionEnabled: n,
      };
    }
    function s(e) {
      if (e == null) return {};
      var t = {
        import_file_type: e.importFileType,
        smart_column_detection_enabled: e.smartColumnDetectionEnabled,
      };
      return e.columnSelectionSource == null
        ? t
        : babelHelpers.extends({}, t, {
            column_selection_source: e.columnSelectionSource,
          });
    }
    var u = "application/csv",
      c = "text/csv",
      d = "application/vnd.oasis.opendocument.spreadsheet",
      m = "application/vnd.ms-excel",
      p = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    ((i.getImportAudienceFileType = e),
      (i.createImportAudienceLoggingContext = l),
      (i.getImportAudienceLoggingExtraAttributes = s));
  },
  66,
);
