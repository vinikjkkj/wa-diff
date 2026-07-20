__d(
  "WAWebBizBroadcastsImportLoggingUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      BEFORE_FILE_IMPORT: "before_file_import",
      COLUMN_SELECTION: "column_selection",
      IMPORT_REVIEW: "import_review",
      SEGMENTATION: "segmentation",
    });
    function l(e) {
      var t = e.name.toLowerCase();
      return t.endsWith(".ods") || e.type === g
        ? "ods"
        : t.endsWith(".xlsx") || e.type === y
          ? "xlsx"
          : t.endsWith(".xls") || e.type === h
            ? "xls"
            : t.endsWith(".csv") || e.type === f || e.type === _
              ? "csv"
              : "unknown";
    }
    function s(e, t, n) {
      var r;
      return {
        columnSelectionSource:
          (r = n == null ? void 0 : n.columnSelectionSource) != null
            ? r
            : t
              ? void 0
              : "legacy",
        importFileType: l(e),
        smartColumnDetectionEnabled: t,
      };
    }
    function u(e, t) {
      return babelHelpers.extends({}, e, t);
    }
    function c(e) {
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
    function d(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l =
          (n = t == null ? void 0 : t.audienceCount) != null
            ? n
            : e == null
              ? void 0
              : e.audienceCount,
        s =
          (r = t == null ? void 0 : t.importedRowCount) != null
            ? r
            : e == null
              ? void 0
              : e.importedRowCount,
        u =
          (o =
            (a = t == null ? void 0 : t.isMultiAudience) != null
              ? a
              : e == null
                ? void 0
                : e.isMultiAudience) != null
            ? o
            : l == null
              ? null
              : l > 1,
        d =
          (i = t == null ? void 0 : t.rawRowCount) != null
            ? i
            : e == null
              ? void 0
              : e.rawRowCount,
        m = c(e),
        p = l == null ? m : babelHelpers.extends({}, m, { audience_count: l }),
        _ =
          u == null ? p : babelHelpers.extends({}, p, { is_multi_audience: u }),
        f =
          s == null ? _ : babelHelpers.extends({}, _, { num_imported_rows: s });
      return d == null ? f : babelHelpers.extends({}, f, { num_raw_rows: d });
    }
    function m(e, t) {
      return d(e, t);
    }
    function p(e, t, n, r) {
      var o =
        t == null && n != null ? { smart_column_detection_enabled: n } : {};
      return babelHelpers.extends({}, d(t, r), o, { phase: e });
    }
    var _ = "application/csv",
      f = "text/csv",
      g = "application/vnd.oasis.opendocument.spreadsheet",
      h = "application/vnd.ms-excel",
      y = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    ((i.ImportAudienceCancelPhase = e),
      (i.createImportAudienceLoggingContext = s),
      (i.createImportAudienceSuccessLoggingContext = u),
      (i.getImportAudienceLoggingExtraAttributes = c),
      (i.getImportAudienceMetadataLoggingExtraAttributes = d),
      (i.getImportAudienceSuccessLoggingExtraAttributes = m),
      (i.getImportAudienceCancelLoggingExtraAttributes = p));
  },
  66,
);
