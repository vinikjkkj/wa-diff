__d(
  "WAWebContactImportTemplateParsingUtils",
  [
    "fbt",
    "WAWebContactImportSmartColumnDetection",
    "WAWebContactImportTypedError",
    "WAWebContactImportValidationUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = s._(/*BTDS*/ "Phone number").toString(),
      u = s._(/*BTDS*/ "Full name").toString(),
      c = ["phone", "phone number", e.toLowerCase()],
      d = new Set(c),
      m = ["name", "full name", u.toLowerCase()],
      p = ["firstname", "first name"],
      _ = new Set(m),
      f = new Set(p),
      g = new Set([].concat(p, m)),
      h = ["lastname", "last name"],
      y = new Set(h),
      C = new Set([].concat(c, m, p, h));
    function b(e, t) {
      for (var n in e) {
        var r = n.toLowerCase();
        if (t.has(r)) return n;
      }
    }
    function v(e) {
      for (var t of e.slice(0, 3)) {
        var n = b(t, f) != null,
          r = b(t, y) != null;
        if (n || r) return "dual";
        var o = b(t, _) != null;
        if (o) return "single";
      }
      return "single";
    }
    function S(e, t) {
      var n = b(e, t);
      if (n != null) return e[n];
    }
    function R(e, t) {
      for (var n in e) {
        var r = n.toLowerCase();
        if (t.has(r) && e[n] != null) return String(e[n]);
      }
      return "";
    }
    function L(e) {
      var t = e.trim(),
        n = t.search(/\s/);
      return n === -1
        ? { firstName: t, lastName: "" }
        : {
            firstName: t.slice(0, n),
            lastName: t.slice(n).trim().replace(/\s+/g, " "),
          };
    }
    function E(e) {
      var t = e.toLowerCase();
      return (
        g.has(t) ||
        y.has(t) ||
        o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
          e,
          o("WAWebContactImportSmartColumnDetection").FULL_NAME_HEADER_ALIASES,
        ) ||
        o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
          e,
          o("WAWebContactImportSmartColumnDetection").FIRST_NAME_HEADER_ALIASES,
        ) ||
        o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
          e,
          o("WAWebContactImportSmartColumnDetection").LAST_NAME_HEADER_ALIASES,
        )
      );
    }
    function k(e) {
      return R(e, g);
    }
    function I(e) {
      return R(e, d);
    }
    function T(e, t) {
      if (e == null) return null;
      var n = new Set(
        t.map(function (e) {
          return e.toLowerCase();
        }),
      );
      for (var r in e)
        if (n.has(r.toLowerCase())) {
          var o = e[r];
          if (typeof o == "string" && o.trim().length > 0) return o.trim();
        }
      return null;
    }
    function D(e) {
      return typeof e != "string" ? !1 : d.has(e.toLowerCase().trim());
    }
    function x(e) {
      return typeof e != "string" ? !1 : C.has(e.toLowerCase().trim());
    }
    function $(e) {
      var t = [],
        n = v(e),
        r = [];
      e.forEach(function (e, n) {
        var a = S(e, d),
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
          var s = S(a, _),
            u = o("WAWebContactImportValidationUtils").sanitizeName(s),
            c = "";
          (u.status ===
          o("WAWebContactImportValidationUtils").ValidationStatus.VALID
            ? (c = u.value != null ? u.value : "")
            : (c = r.value != null ? r.value : ""),
            (i = c !== "" ? c : void 0));
        } else {
          var d = S(a, f),
            m = S(a, y),
            p = "",
            g = "",
            h = null,
            C = null;
          (d != null &&
            ((h = o("WAWebContactImportValidationUtils").sanitizeName(d)),
            h.status ===
              o("WAWebContactImportValidationUtils").ValidationStatus.VALID &&
              (p = h.value != null ? h.value : "")),
            m != null &&
              ((C = o("WAWebContactImportValidationUtils").sanitizeName(m)),
              C.status ===
                o("WAWebContactImportValidationUtils").ValidationStatus.VALID &&
                (g = C.value != null ? C.value : "")),
            p !== "" || g !== ""
              ? ((i = p !== "" ? p : void 0), (l = g !== "" ? g : void 0))
              : (i = r.value != null ? r.value : void 0));
        }
        var b = {};
        for (var v in a)
          if (v !== "originalRowIndex") {
            var R = a[v];
            R != null && (b[v] = String(R));
          }
        var L = {
          phone: r.value != null ? r.value : "",
          rowIndex: t,
          rawRow: b,
        };
        return (
          i != null && (L.firstName = i),
          l != null && (L.lastName = l),
          L
        );
      });
      return { errors: t, validContacts: l };
    }
    ((l.FBT_PHONE = e),
      (l.FBT_NAME = u),
      (l.splitFullName = L),
      (l.isNameFieldKey = E),
      (l.extractName = k),
      (l.extractPhone = I),
      (l.readRawRowColumn = T),
      (l.isPhoneFieldName = D),
      (l.isParsedNameOrPhoneFieldName = x),
      (l.parseContactData = $));
  },
  226,
);
