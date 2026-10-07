__d(
  "WAWebCustomerManagerExportAction",
  [
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerExportColumns",
    "WAWebCustomerManagerExportCsvUtils",
    "WAWebCustomerManagerExportData",
    "WAWebCustomerManagerGating",
    "WAWebCustomerManagerLocalSearch",
    "WAWebCustomerManagerSearchNoteContents",
    "WAWebCustomerManagerUserPrefs",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n === void 0 && (n = "all");
          try {
            var r =
                n === "all"
                  ? o("WAWebCustomerManagerExportColumns").EXPORT_COLUMNS
                  : o(
                      "WAWebCustomerManagerExportColumns",
                    ).getVisibleExportColumns(
                      o("WAWebCustomerManagerUserPrefs").getColumnOrder(),
                      o("WAWebCustomerManagerUserPrefs").getVisibleColumns(),
                    ),
              a = r.some(function (e) {
                return e.id === "notes";
              })
                ? yield o(
                    "WAWebCustomerManagerSearchNoteContents",
                  ).loadCustomerSearchNoteContents(
                    t.map(function (e) {
                      return String(e.chatJid);
                    }),
                  )
                : o("WAWebCustomerManagerSearchNoteContents")
                    .EMPTY_SEARCH_NOTE_CONTENTS,
              i = n === "all" ? yield d(t) : new Map(),
              l = o(
                "WAWebCustomerManagerExportData",
              ).buildCustomerExportRecords(t, a, i),
              s =
                n === "all"
                  ? [].concat(
                      r,
                      o(
                        "WAWebCustomerManagerExportColumns",
                      ).getCustomFieldExportColumns(l),
                    )
                  : r,
              u = o("WAWebCustomerManagerExportColumns").getExportHeaders(s),
              c = l.map(function (e) {
                return o("WAWebCustomerManagerExportColumns").getExportRow(
                  e,
                  s,
                );
              }),
              m = yield o(
                "WAWebCustomerManagerExportCsvUtils",
              ).buildCustomerManagerCsv(u, c),
              p = new Blob(["\uFEFF" + m], { type: "text/csv;charset=utf-8" }),
              _ = new Date().toISOString().slice(0, 10);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              p,
              "customer_manager_export_" + _,
              o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
            );
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to export customers to CSV: ",
                      "",
                    ])),
                  t,
                )
                .verbose()
                .sendLogs("customer-manager-export-failed", { sampling: 1 }),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    var c = 1e3;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebCustomerManagerGating",
          ).customerManagerCustomFieldsEnabled()
            ? new Map(yield p(e, 0))
            : new Map();
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t >= e.length) return [];
          var n = yield f(e.slice(t, t + c));
          return [].concat(n, yield p(e, t + c));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebCustomerManagerLocalSearch").toCandidateLids(
                e.map(function (e) {
                  return String(e.chatJid);
                }),
              )) != null
                ? t
                : [];
          if (n.length === 0) return [];
          var r = yield o(
            "WAWebContactManagerCustomerProfilesQuery",
          ).fetchCustomerProfileRecords({
            candidateLids: n,
            includeCustomFields: !0,
          });
          return r.map(function (e) {
            var t;
            return [
              String(e.chatJid),
              (t = e.customFieldValues) != null ? t : [],
            ];
          });
        })),
        g.apply(this, arguments)
      );
    }
    l.exportCustomers = s;
  },
  98,
);
