__d(
  "WAWebContactImportUsernameValidator",
  ["WAWebContactImportTemplateParsingUtils", "WAWebContactImportTypedError"],
  function (t, n, r, o, a, i, l) {
    var e = ["Username", "username"];
    function s(t, n) {
      var r,
        a = new Set(),
        i = [],
        l = [],
        s = [].concat(
          e,
          (r = n == null ? void 0 : n.extraHeaderKeys) != null ? r : [],
        );
      t.forEach(function (e) {
        var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
          e.rawRow,
          s,
        );
        if (t == null) {
          i.push(e);
          return;
        }
        var n = t.toLowerCase();
        if (a.has(n)) {
          var r;
          l.push({
            errorType: o("WAWebContactImportTypedError").UsernameError
              .DUPLICATE,
            rowData: babelHelpers.extends({}, (r = e.rawRow) != null ? r : {}),
            rowIndex: e.rowIndex,
          });
          return;
        }
        (a.add(n), i.push(e));
      });
      var u = l.map(function (e) {
        return babelHelpers.extends({}, e, {
          contactIndex: null,
          type: "error",
        });
      });
      return { errorList: u, validContacts: i };
    }
    l.detectDuplicateUsernames = s;
  },
  98,
);
