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
      return e == null
        ? !1
        : !Object.keys(e).some(function (e) {
            return (
              f.has(e.toLowerCase()) ||
              y.has(e.toLowerCase()) ||
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                e,
                o("WAWebContactImportSmartColumnDetection")
                  .FIRST_NAME_HEADER_ALIASES,
              ) ||
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                e,
                o("WAWebContactImportSmartColumnDetection")
                  .LAST_NAME_HEADER_ALIASES,
              )
            );
          });
    }
    function I(e) {
      var t = {};
      for (var n in e)
        if (n !== "originalRowIndex") {
          var r = e[n];
          r != null && (t[n] = String(r));
        }
      return t;
    }
    function T(e) {
      return R(e, g);
    }
    function D(e) {
      return R(e, d);
    }
    function x(e) {
      var t,
        n,
        r = [
          (t = e.parsedContact) == null ? void 0 : t.firstName,
          (n = e.parsedContact) == null ? void 0 : n.lastName,
        ]
          .filter(function (e) {
            return e != null && e !== "";
          })
          .join(" ");
      return r !== "" ? r : T(e.rowData);
    }
    function $(e) {
      var t,
        n = (t = e.parsedContact) == null ? void 0 : t.phone;
      return n != null && n !== "" ? n : D(e.rowData);
    }
    function P(e, t) {
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
    function N(e) {
      return typeof e != "string" ? !1 : d.has(e.toLowerCase().trim());
    }
    function M(e) {
      return typeof e != "string" ? !1 : C.has(e.toLowerCase().trim());
    }
    function w(e, t) {
      var n = [],
        r = v(e),
        a = A(e, t, n),
        i = new Map(),
        l = [];
      a.forEach(function (e) {
        var t = e.originalIndex,
          r = e.phoneResult,
          a = e.row,
          s = r.value;
        s != null && i.has(s)
          ? n.push({
              errorType: o("WAWebContactImportTypedError").PhoneError.DUPLICATE,
              rowData: a,
              rowIndex: t,
            })
          : s != null &&
            (i.set(s, t), l.push({ originalIndex: t, phoneResult: r, row: a }));
      });
      var s = l.map(function (e) {
        var t = e.originalIndex,
          n = e.phoneResult,
          a = e.row,
          i = void 0,
          l = void 0;
        if (r === "single") {
          var s = S(a, _),
            u = o("WAWebContactImportValidationUtils").sanitizeName(s),
            c = "";
          (u.status ===
          o("WAWebContactImportValidationUtils").ValidationStatus.VALID
            ? (c = u.value != null ? u.value : "")
            : (c = n.value != null ? n.value : ""),
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
              : (i = n.value != null ? n.value : void 0));
        }
        var b = I(a),
          v = { phone: n.value != null ? n.value : "", rowIndex: t, rawRow: b };
        return (
          i != null && (v.firstName = i),
          l != null && (v.lastName = l),
          v
        );
      });
      return { errors: n, validContacts: s };
    }
    function A(e, t, n) {
      var r = [];
      return (
        e.forEach(function (e, a) {
          var i = S(e, d),
            l = o(
              "WAWebContactImportValidationUtils",
            ).validateAndFormatPhoneNumber(String(i));
          if (
            l.status ===
            o("WAWebContactImportValidationUtils").ValidationStatus.INVALID
          ) {
            n.push({ errorType: l.type, rowData: e, rowIndex: a });
            return;
          }
          if (t != null) {
            var s = I(e),
              u = t(s);
            if (u != null) {
              var c = babelHelpers.extends({}, s);
              n.push({ errorType: u, rowData: c, rowIndex: a });
              return;
            }
          }
          r.push({ originalIndex: a, phoneResult: l, row: e });
        }),
        r
      );
    }
    ((l.FBT_PHONE = e),
      (l.FBT_NAME = u),
      (l.splitFullName = L),
      (l.isNameFieldKey = E),
      (l.isCombinedNameRow = k),
      (l.toContactRawRow = I),
      (l.extractName = T),
      (l.extractPhone = D),
      (l.getIssueName = x),
      (l.getIssuePhone = $),
      (l.readRawRowColumn = P),
      (l.isPhoneFieldName = N),
      (l.isParsedNameOrPhoneFieldName = M),
      (l.parseContactData = w));
  },
  226,
);
