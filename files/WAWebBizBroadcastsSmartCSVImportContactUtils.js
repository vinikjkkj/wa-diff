__d(
  "WAWebBizBroadcastsSmartCSVImportContactUtils",
  ["WAWebContactImportValidationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = (
          ((t = e.firstName) != null ? t : "") +
          " " +
          ((n = e.lastName) != null ? n : "")
        ).trim();
      return r !== "" ? r : e.phone;
    }
    function s(t, n, r) {
      var o,
        a,
        i,
        l,
        s,
        u = (o = t.rawRow) == null ? void 0 : o[r];
      if (u != null) return p(u);
      var c = n.detection;
      return ((a = c.phoneColumn) == null ? void 0 : a.header) === r
        ? p(t.phone)
        : ((i = c.fullNameColumn) == null ? void 0 : i.header) === r
          ? p(e(t))
          : ((l = c.firstNameColumn) == null ? void 0 : l.header) === r
            ? p(t.firstName)
            : ((s = c.lastNameColumn) == null ? void 0 : s.header) === r
              ? p(t.lastName)
              : null;
    }
    function u(e, t, n) {
      var r = s(e, t, n);
      return r == null ? null : m(r);
    }
    function c(e, t, n) {
      return e.length === 0
        ? d(t, n)
        : e.every(function (e) {
            return u(e, t, n) != null;
          });
    }
    function d(e, t) {
      var n = e.rawRows;
      return (
        n != null &&
        n.length > 0 &&
        n.some(function (e) {
          var n = e.rowData[t];
          return typeof n != "string" ? !1 : m(n) != null;
        })
      );
    }
    function m(e) {
      var t = o(
        "WAWebContactImportValidationUtils",
      ).validateAndFormatPhoneNumber(e);
      return t.status ===
        o("WAWebContactImportValidationUtils").ValidationStatus.VALID &&
        t.value != null
        ? t.value
        : null;
    }
    function p(e) {
      if (e == null) return null;
      var t = e.trim();
      return t === "" ? null : t;
    }
    ((l.formatSmartCSVImportContactName = e),
      (l.readSmartCSVImportColumnValue = s),
      (l.getValidSmartCSVImportPhoneValue = u),
      (l.isSmartCSVImportPhoneHeaderValid = c));
  },
  98,
);
