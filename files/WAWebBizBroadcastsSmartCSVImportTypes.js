__d(
  "WAWebBizBroadcastsSmartCSVImportTypes",
  ["WAWebBizBroadcastsSegmentDetection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.rawRows != null ? u(e.headerRow, e.rawRows) : s(e.headerRow, t);
      return babelHelpers.extends({}, e, {
        segmentDetection: o(
          "WAWebBizBroadcastsSegmentDetection",
        ).detectSegmentColumn(e.headerRow, n, c(e.detection)),
      });
    }
    function s(e, t) {
      return t.map(function (t) {
        return e.map(function (e) {
          var n, r;
          return (n = (r = t.rawRow) == null ? void 0 : r[e]) != null ? n : "";
        });
      });
    }
    function u(e, t) {
      return t.map(function (t) {
        return e.map(function (e) {
          var n;
          return (n = t.rowData[e]) != null ? n : "";
        });
      });
    }
    function c(e) {
      var t = [];
      return (
        d(t, e.phoneColumn),
        d(t, e.fullNameColumn),
        d(t, e.firstNameColumn),
        d(t, e.lastNameColumn),
        t
      );
    }
    function d(e, t) {
      t == null || e.includes(t.columnIndex) || e.push(t.columnIndex);
    }
    ((l.buildSmartCSVImportContext = e),
      (l.buildSegmentRows = s),
      (l.buildSegmentRowsFromRawRows = u));
  },
  98,
);
