__d(
  "WAWebBizBroadcastsImportColumnSelectionFlow",
  [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable",
    "WAWebModalManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, a, i, l, u, c, d) {
      return new (s || (s = n("Promise")))(function (n) {
        function s(e) {
          (o("WAWebModalManager").ModalManager.close(), n(e));
        }
        o("WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable")
          .openSmartCSVImportSelectColumnsScreenLoadable({
            allHeaders: a,
            detection: t,
            hideNameColumn: l,
            onCancel: function () {
              (c == null || c("column_selection_cancelled"), s(null));
            },
            onConfirm: function (t) {
              if (t.phoneColumnIndex == null) {
                (c == null || c("no_phone_column_selected"), s(null));
                return;
              }
              s({
                nameHeader:
                  !l && t.nameColumnIndex != null ? a[t.nameColumnIndex] : null,
                phoneHeader: a[t.phoneColumnIndex],
              });
            },
            previewRows: i,
          })
          .then(function () {
            d == null || d();
          })
          .catch(function (t) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load smart CSV import select columns screen",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("biz-broadcasts-select-columns-load"),
              u == null || u("select_columns_load_failed"),
              n(null));
          });
      });
    }
    l.openSmartCSVImportSelectColumnsScreen = u;
  },
  98,
);
