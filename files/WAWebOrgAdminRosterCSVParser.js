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
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield v(e),
            n = x(t.columns);
          return t.rows.map(function (e) {
            return D(e, n);
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          E(t);
          var n = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            yield t.text(),
            d,
          );
          if (
            n.errors.some(function (e) {
              return k(e);
            }) ||
            n.data.length === 0
          )
            throw new e("invalid_file");
          if (n.meta.truncated) throw new e("too_many_lines");
          var r = I(n.data),
            a = n.data[r],
            i = T(n.data, r, a.length);
          if (i.length === 0) throw new e("empty_roster");
          return { columns: a.map(N), rows: i };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = P(e);
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
    function L(e) {
      return p.has(P(e));
    }
    function E(t) {
      if (t.size > c) throw new e("file_too_large");
      if (!t.name.toLowerCase().endsWith(".csv")) throw new e("invalid_file");
    }
    function k(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    function I(t) {
      var n = t.findIndex(function (e) {
        return e.some(function (e) {
          return String(e).trim() !== "";
        });
      });
      if (n < 0) throw new e("invalid_headers");
      return n;
    }
    function T(t, n, r) {
      for (var o = [], a = n + 1; a < t.length; a++) {
        var i = t[a].map(M);
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
    function D(t, n) {
      var r = w(t.cells, n.name),
        o = A(t.cells, n.memberTag),
        a = A(t.cells, n.email),
        i = A(t.cells, n.phone);
      if (r === "" || (a == null && i == null))
        throw new e("invalid_row", t.rowNumber);
      return { emailAddress: a, memberTag: o, name: r, phoneNumber: i };
    }
    function x(t) {
      var n = t.map(P),
        r = $(n, p),
        o = $(n, g),
        a = $(n, h),
        i = $(n, y);
      if (r == null || (a == null && i == null)) throw new e("invalid_headers");
      return { email: a, memberTag: o, name: r, phone: i };
    }
    function $(t, n) {
      var r,
        o = t.flatMap(function (e, t) {
          return n.has(e) ? [t] : [];
        });
      if (o.length > 1) throw new e("invalid_headers");
      return (r = o[0]) != null ? r : null;
    }
    function P(e) {
      return N(e).toLowerCase();
    }
    function N(e) {
      return M(String(e).replace(/^\uFEFF/, ""));
    }
    function M(e) {
      return String(e).trim().replace(m, "").trim();
    }
    function w(e, t) {
      var n;
      return String((n = e[t]) != null ? n : "").trim();
    }
    function A(e, t) {
      if (t == null) return null;
      var n = w(e, t);
      return n === "" ? null : n;
    }
    ((l.WAWebOrgAdminRosterCSVError = e),
      (l.MAX_ORG_ADMIN_ROSTER_ROWS = s),
      (l.MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS = u),
      (l.MAX_ORG_ADMIN_ROSTER_FILE_BYTES = c),
      (l.parseOrgAdminRosterCSV = C),
      (l.parseOrgAdminRosterCSVTable = v),
      (l.getOrgAdminRosterCSVHeaderField = R),
      (l.isOrgAdminRosterCSVWholeNameHeader = L));
  },
  98,
);
