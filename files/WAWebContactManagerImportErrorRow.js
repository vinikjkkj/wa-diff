__d(
  "WAWebContactManagerImportErrorRow",
  [
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactManagerImportErrorMessage",
    "WAWebContactManagerImportTemplateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        acquisitionSource: s(
          e.rowData,
          o("WAWebContactManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE,
          "Source",
          "source",
          "Acquisition source",
          "acquisition source",
        ),
        error: o(
          "WAWebContactManagerImportErrorMessage",
        ).getContactManagerImportErrorLabel(e.errorType),
        leadStage: s(
          e.rowData,
          o("WAWebContactManagerImportTemplateUtils").FBT_LEAD_STAGE,
          "Lead stage",
          "lead stage",
        ),
        phone: o("WAWebContactImportTemplateParsingUtils").getIssuePhone(e),
        username: s(
          e.rowData,
          o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME,
          "Username",
          "username",
        ),
      };
    }
    function s(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      for (var o of n) {
        var a = e[o];
        if (typeof a == "string" && a.length > 0) return a;
      }
      return "";
    }
    l.getImportErrorRowValues = e;
  },
  98,
);
