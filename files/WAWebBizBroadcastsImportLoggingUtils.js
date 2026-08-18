__d(
  "WAWebBizBroadcastsImportLoggingUtils",
  ["$InternalEnum", "WAWebContactImportTypedError", "countWhere", "sumBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      BEFORE_FILE_IMPORT: "before_file_import",
      COLUMN_SELECTION: "column_selection",
      IMPORT_REVIEW: "import_review",
      SEGMENTATION: "segmentation",
    });
    function s(e) {
      var t = e.name.toLowerCase();
      return t.endsWith(".ods") || e.type === y
        ? "ods"
        : t.endsWith(".xlsx") || e.type === b
          ? "xlsx"
          : t.endsWith(".xls") || e.type === C
            ? "xls"
            : t.endsWith(".csv") || e.type === h || e.type === g
              ? "csv"
              : "unknown";
    }
    function u(e) {
      var t,
        n = e.file,
        r = e.smartColumnDetectionEnabled,
        o = e.smartDetectionContext;
      return {
        columnSelectionSource:
          (t = o == null ? void 0 : o.columnSelectionSource) != null
            ? t
            : r
              ? void 0
              : "legacy",
        importFileType: s(n),
        smartColumnDetectionEnabled: r,
      };
    }
    function c(e, t) {
      return babelHelpers.extends({}, e, t);
    }
    function d(e) {
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
    function m(e, t) {
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
        c =
          (i = t == null ? void 0 : t.rawRowCount) != null
            ? i
            : e == null
              ? void 0
              : e.rawRowCount,
        m = d(e),
        p = l == null ? m : babelHelpers.extends({}, m, { audience_count: l }),
        _ =
          u == null ? p : babelHelpers.extends({}, p, { is_multi_audience: u }),
        f =
          s == null ? _ : babelHelpers.extends({}, _, { num_imported_rows: s });
      return c == null ? f : babelHelpers.extends({}, f, { num_raw_rows: c });
    }
    function p(e, t) {
      return m(e, t);
    }
    function _(e, t, n, r) {
      var o =
        t == null && n != null ? { smart_column_detection_enabled: n } : {};
      return babelHelpers.extends({}, m(t, r), o, { phase: e });
    }
    function f(e, t) {
      var n = e.flatMap(function (e) {
          var t;
          return (t = e.errorList) != null ? t : [];
        }),
        a = r("sumBy")(e, function (e) {
          return e.contacts.length;
        });
      return babelHelpers.extends({}, t, {
        num_duplicate_contacts: r("countWhere")(n, function (e) {
          return (
            e.errorType ===
            o("WAWebContactImportTypedError").PhoneError.DUPLICATE
          );
        }),
        num_error_contacts: n.length,
        num_invalid_contacts: r("countWhere")(n, function (e) {
          return (
            e.errorType === o("WAWebContactImportTypedError").PhoneError.INVALID
          );
        }),
        num_non_wa_contacts: r("countWhere")(n, function (e) {
          return (
            e.errorType ===
            o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER
          );
        }),
        num_total_contacts: a + n.length,
      });
    }
    var g = "application/csv",
      h = "text/csv",
      y = "application/vnd.oasis.opendocument.spreadsheet",
      C = "application/vnd.ms-excel",
      b = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    ((l.ImportAudienceCancelPhase = e),
      (l.createImportAudienceLoggingContext = u),
      (l.createImportAudienceSuccessLoggingContext = c),
      (l.getImportAudienceLoggingExtraAttributes = d),
      (l.getImportAudienceMetadataLoggingExtraAttributes = m),
      (l.getImportAudienceSuccessLoggingExtraAttributes = p),
      (l.getImportAudienceCancelLoggingExtraAttributes = _),
      (l.getImportReviewLoggingExtraAttributes = f));
  },
  98,
);
