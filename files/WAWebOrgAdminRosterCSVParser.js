__d(
  "WAWebOrgAdminRosterCSVParser",
  ["WAWebContactImportCSVParsingUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "WAWebOrgAdminRosterCSVError"),
            (r.code = t),
            (r.rowNumber = n != null ? n : null),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      s = 5e3,
      u = 1e5,
      c = 25 * 1024 * 1024,
      d = /^\'(?=\s*[=+\-@\t\r])/,
      m = new Set(["name", "full name", "full_name"]),
      p = new Set([
        "first name",
        "first_name",
        "firstname",
        "given name",
        "given_name",
      ]),
      _ = new Set([
        "last name",
        "last_name",
        "lastname",
        "surname",
        "family name",
        "family_name",
      ]),
      f = new Set(["member tag", "member_tag", "tag"]),
      g = new Set(["email", "email address", "email_address"]),
      h = new Set([
        "phone",
        "phone number",
        "phone_number",
        "mobile",
        "mobile phone number",
        "mobile_phone_number",
      ]);
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          (n === void 0 && (n = s), S(t));
          var r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            yield t.text(),
            n * 2 + 2,
          );
          if (
            r.errors.some(function (e) {
              return R(e);
            }) ||
            r.data.length === 0
          )
            throw new e("invalid_file");
          if (r.meta.truncated) throw new e("too_many_lines");
          var a = L(r.data),
            i = r.data[a],
            l = E(r.data, a, i.length, n);
          if (l.length === 0) throw new e("empty_roster");
          return { columns: i.map(I), rows: l };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = k(e);
      return p.has(t)
        ? "first_name"
        : _.has(t)
          ? "last_name"
          : g.has(t)
            ? "email"
            : h.has(t)
              ? "phone"
              : f.has(t)
                ? "member_tag"
                : null;
    }
    function v(e) {
      return m.has(k(e));
    }
    function S(t) {
      if (t.size > c) throw new e("file_too_large");
      if (!t.name.toLowerCase().endsWith(".csv")) throw new e("invalid_file");
    }
    function R(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    function L(t) {
      var n = t.findIndex(function (e) {
        return e.some(function (e) {
          return String(e).trim() !== "";
        });
      });
      if (n < 0) throw new e("invalid_headers");
      return n;
    }
    function E(t, n, r, o) {
      for (var a = [], i = n + 1; i < t.length; i++) {
        var l = t[i].map(T);
        if (
          !l.every(function (e) {
            return e === "";
          })
        ) {
          var s = i + 1;
          if (l.length !== r) throw new e("row_field_count_mismatch", s);
          if ((a.push({ cells: l, rowNumber: s }), a.length > o))
            throw new e("too_many_rows");
        }
      }
      return a;
    }
    function k(e) {
      return I(e).toLowerCase();
    }
    function I(e) {
      return T(String(e).replace(/^\uFEFF/, ""));
    }
    function T(e) {
      return String(e).trim().replace(d, "").trim();
    }
    ((l.WAWebOrgAdminRosterCSVError = e),
      (l.MAX_ORG_ADMIN_ROSTER_ROWS = s),
      (l.MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS = u),
      (l.MAX_ORG_ADMIN_ROSTER_FILE_BYTES = c),
      (l.parseOrgAdminRosterCSVTable = y),
      (l.getOrgAdminRosterCSVHeaderField = b),
      (l.isOrgAdminRosterCSVWholeNameHeader = v));
  },
  98,
);
