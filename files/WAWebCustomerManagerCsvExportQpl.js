__d(
  "WAWebCustomerManagerCsvExportQpl",
  ["WAWebCustomerManagerQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = 3e5,
      s = o("WAWebCustomerManagerQplFlow").createCustomerManagerQplFlow(
        r("qpl")._(450242534, "3764"),
        e,
      );
    function u(e, t) {
      (s.start({ string: { scope: e, view: t } }), s.pointOnce("walk_start"));
    }
    function c(e) {
      s.pointOnce("walk_end", { int: { row_count: e } });
    }
    function d(e) {
      s.pointOnce("confirm_clicked", { string: { column_set: e } });
    }
    function m() {
      s.endSuccess();
    }
    function p(e) {
      (s.pointOnce("walk_fail"), s.endFail(e, { string: { stage: "walk" } }));
    }
    function _(e) {
      s.endFail(e, { string: { stage: "download" } });
    }
    function f() {
      s.cancel();
    }
    ((l.startCsvExport = u),
      (l.endCsvExportWalk = c),
      (l.pointCsvExportConfirmClicked = d),
      (l.endCsvExportSuccess = m),
      (l.endCsvExportWalkFailed = p),
      (l.endCsvExportDownloadFailed = _),
      (l.cancelCsvExport = f));
  },
  98,
);
