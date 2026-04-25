__d(
  "WAWebContactImportTemplateParsingUtils",
  ["fbt", "WAWebContactImportTypedError", "WAWebContactImportValidationUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = s._(/*BTDS*/ "Phone number").toString(),
      u = s._(/*BTDS*/ "Full name").toString(),
      c = new Set(["phone", "phone number", e.toLowerCase()]),
      d = ["name", "full name", u.toLowerCase()],
      m = ["firstname", "first name"],
      p = new Set(d),
      _ = new Set(m),
      f = new Set([].concat(m, d)),
      g = new Set(["lastname", "last name"]);
    function h(e, t) {
      for (var n in e) {
        var r = n.toLowerCase();
        if (t.has(r)) return n;
      }
    }
    function y(e) {
      for (var t of e.slice(0, 3)) {
        var n = h(t, _) != null,
          r = h(t, g) != null;
        if (n || r) return "dual";
        var o = h(t, p) != null;
        if (o) return "single";
      }
      return "single";
    }
    function C(e, t) {
      var n = h(e, t);
      if (n != null) return e[n];
    }
    function b(e, t) {
      for (var n in e) {
        var r = n.toLowerCase();
        if (t.has(r) && e[n] != null) return String(e[n]);
      }
      return "";
    }
    function v(e) {
      return b(e, f);
    }
    function S(e) {
      return b(e, c);
    }
    function R(e) {
      return typeof e != "string" ? !1 : c.has(e.toLowerCase().trim());
    }
    function L(e) {
      var t = [],
        n = y(e),
        r = [];
      e.forEach(function (e, n) {
        var a = C(e, c),
          i = o(
            "WAWebContactImportValidationUtils",
          ).validateAndFormatPhoneNumber(String(a));
        if (
          i.status ===
          o("WAWebContactImportValidationUtils").ValidationStatus.INVALID
        ) {
          t.push({ errorType: i.type, rowData: e, rowIndex: n });
          return;
        }
        r.push({ originalIndex: n, phoneResult: i, row: e });
      });
      var a = new Map(),
        i = [];
      r.forEach(function (e) {
        var n = e.originalIndex,
          r = e.phoneResult,
          l = e.row,
          s = r.value;
        s != null && a.has(s)
          ? t.push({
              errorType: o("WAWebContactImportTypedError").PhoneError.DUPLICATE,
              rowData: l,
              rowIndex: n,
            })
          : s != null &&
            (a.set(s, n), i.push({ originalIndex: n, phoneResult: r, row: l }));
      });
      var l = i.map(function (e) {
        var t = e.originalIndex,
          r = e.phoneResult,
          a = e.row,
          i = void 0,
          l = void 0;
        if (n === "single") {
          var s = C(a, p),
            u = o("WAWebContactImportValidationUtils").sanitizeName(s),
            c = "";
          (u.status ===
          o("WAWebContactImportValidationUtils").ValidationStatus.VALID
            ? (c = u.value != null ? u.value : "")
            : (c = r.value != null ? r.value : ""),
            (i = c !== "" ? c : void 0));
        } else {
          var d = C(a, _),
            m = C(a, g),
            f = "",
            h = "",
            y = null,
            b = null;
          (d != null &&
            ((y = o("WAWebContactImportValidationUtils").sanitizeName(d)),
            y.status ===
              o("WAWebContactImportValidationUtils").ValidationStatus.VALID &&
              (f = y.value != null ? y.value : "")),
            m != null &&
              ((b = o("WAWebContactImportValidationUtils").sanitizeName(m)),
              b.status ===
                o("WAWebContactImportValidationUtils").ValidationStatus.VALID &&
                (h = b.value != null ? b.value : "")),
            f !== "" || h !== ""
              ? ((i = f !== "" ? f : void 0), (l = h !== "" ? h : void 0))
              : (i = r.value != null ? r.value : void 0));
        }
        var v = { phone: r.value != null ? r.value : "", rowIndex: t };
        return (
          i != null && (v.firstName = i),
          l != null && (v.lastName = l),
          v
        );
      });
      return { errors: t, validContacts: l };
    }
    ((l.FBT_PHONE = e),
      (l.FBT_NAME = u),
      (l.extractName = v),
      (l.extractPhone = S),
      (l.isPhoneFieldName = R),
      (l.parseContactData = L));
  },
  226,
);
