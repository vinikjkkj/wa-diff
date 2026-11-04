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
      u = 5e3,
      c = 25 * 1024 * 1024,
      d = s * 2 + 2,
      m = /^\'(?=\s*[=+\-@\t\r])/,
      p = new Set(["name", "full name", "full_name"]),
      _ = new Set([
        "first name",
        "first_name",
        "firstname",
        "given name",
        "given_name",
      ]),
      f = new Set([
        "last name",
        "last_name",
        "lastname",
        "surname",
        "family name",
        "family_name",
      ]),
      g = new Set(["member tag", "member_tag", "tag"]),
      h = new Set(["email", "email address", "email_address"]),
      y = new Set([
        "phone",
        "phone number",
        "phone_number",
        "mobile",
        "mobile phone number",
        "mobile_phone_number",
      ]);
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          R(t);
          var n = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            yield t.text(),
            d,
          );
          if (
            n.errors.some(function (e) {
              return L(e);
            }) ||
            n.data.length === 0
          )
            throw new e("invalid_file");
          if (n.meta.truncated) throw new e("too_many_lines");
          var r = E(n.data),
            a = n.data[r],
            i = k(n.data, r, a.length);
          if (i.length === 0) throw new e("empty_roster");
          return { columns: a.map(T), rows: i };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = I(e);
      return _.has(t)
        ? "first_name"
        : f.has(t)
          ? "last_name"
          : h.has(t)
            ? "email"
            : y.has(t)
              ? "phone"
              : g.has(t)
                ? "member_tag"
                : null;
    }
    function S(e) {
      return p.has(I(e));
    }
    function R(t) {
      if (t.size > c) throw new e("file_too_large");
      if (!t.name.toLowerCase().endsWith(".csv")) throw new e("invalid_file");
    }
    function L(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    function E(t) {
      var n = t.findIndex(function (e) {
        return e.some(function (e) {
          return String(e).trim() !== "";
        });
      });
      if (n < 0) throw new e("invalid_headers");
      return n;
    }
    function k(t, n, r) {
      for (var o = [], a = n + 1; a < t.length; a++) {
        var i = t[a].map(D);
        if (
          !i.every(function (e) {
            return e === "";
          })
        ) {
          var l = a + 1;
          if (i.length !== r) throw new e("row_field_count_mismatch", l);
          if ((o.push({ cells: i, rowNumber: l }), o.length > s))
            throw new e("too_many_rows");
        }
      }
      return o;
    }
    function I(e) {
      return T(e).toLowerCase();
    }
    function T(e) {
      return D(String(e).replace(/^\uFEFF/, ""));
    }
    function D(e) {
      return String(e).trim().replace(m, "").trim();
    }
    ((l.WAWebOrgAdminRosterCSVError = e),
      (l.MAX_ORG_ADMIN_ROSTER_ROWS = s),
      (l.MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS = u),
      (l.MAX_ORG_ADMIN_ROSTER_FILE_BYTES = c),
      (l.parseOrgAdminRosterCSVTable = C),
      (l.getOrgAdminRosterCSVHeaderField = v),
      (l.isOrgAdminRosterCSVWholeNameHeader = S));
  },
  98,
);
