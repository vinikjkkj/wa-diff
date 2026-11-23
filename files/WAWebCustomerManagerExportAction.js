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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      n === void 0 && (n = "all");
      try {
        var r =
            n === "all"
              ? o("WAWebCustomerManagerExportColumns").EXPORT_COLUMNS
              : o("WAWebCustomerManagerExportColumns").getVisibleExportColumns(
                  o("WAWebCustomerManagerUserPrefs").getColumnOrder(),
                  o("WAWebCustomerManagerUserPrefs").getVisibleColumns(),
                ),
          a = r.some(function (e) {
            return e.id === "notes";
          })
            ? await o(
                "WAWebCustomerManagerSearchNoteContents",
              ).loadCustomerSearchNoteContents(
                t.map(function (e) {
                  return String(e.chatJid);
                }),
              )
            : o("WAWebCustomerManagerSearchNoteContents")
                .EMPTY_SEARCH_NOTE_CONTENTS,
          i = n === "all" ? await c(t) : new Map(),
          l = o("WAWebCustomerManagerExportData").buildCustomerExportRecords(
            t,
            a,
            i,
          ),
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
          d = l.map(function (e) {
            return o("WAWebCustomerManagerExportColumns").getExportRow(e, s);
          }),
          m = await o(
            "WAWebCustomerManagerExportCsvUtils",
          ).buildCustomerManagerCsv(u, d);
        await o(
          "WAWebCustomerManagerExportCsvUtils",
        ).downloadCustomerManagerCsv(m, "customer_manager_export");
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
    }
    var u = 1e3;
    async function c(e) {
      return o(
        "WAWebCustomerManagerGating",
      ).customerManagerCustomFieldsEnabled()
        ? new Map(await d(e, 0))
        : new Map();
    }
    async function d(e, t) {
      if (t >= e.length) return [];
      var n = await m(e.slice(t, t + u));
      return [].concat(n, await d(e, t + u));
    }
    async function m(e) {
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
      var r = await o(
        "WAWebContactManagerCustomerProfilesQuery",
      ).fetchCustomerProfileRecords({
        candidateLids: n,
        includeCustomFields: !0,
      });
      return r.map(function (e) {
        var t;
        return [String(e.chatJid), (t = e.customFieldValues) != null ? t : []];
      });
    }
    l.exportCustomers = s;
  },
  98,
);
