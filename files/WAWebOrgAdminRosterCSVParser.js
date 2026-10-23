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
            n = D(t.columns);
          return t.rows.map(function (e) {
            return T(e, n);
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
          L(t);
          var n = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            yield t.text(),
            d,
          );
          if (
            n.errors.some(function (e) {
              return E(e);
            }) ||
            n.data.length === 0
          )
            throw new e("invalid_file");
          if (n.meta.truncated) throw new e("too_many_lines");
          var r = k(n.data),
            a = n.data[r],
            i = I(n.data, r, a.length);
          if (i.length === 0) throw new e("empty_roster");
          return { columns: a.map(P), rows: i };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = $(e);
      return p.has(t)
        ? "name"
        : _.has(t)
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
    function L(t) {
      if (t.size > c) throw new e("file_too_large");
      if (!t.name.toLowerCase().endsWith(".csv")) throw new e("invalid_file");
    }
    function E(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    function k(t) {
      var n = t.findIndex(function (e) {
        return e.some(function (e) {
          return String(e).trim() !== "";
        });
      });
      if (n < 0) throw new e("invalid_headers");
      return n;
    }
    function I(t, n, r) {
      for (var o = [], a = n + 1; a < t.length; a++) {
        var i = t[a].map(N);
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
    function T(t, n) {
      var r = M(t.cells, n.name),
        o = w(t.cells, n.memberTag),
        a = w(t.cells, n.email),
        i = w(t.cells, n.phone);
      if (r === "" || (a == null && i == null))
        throw new e("invalid_row", t.rowNumber);
      return { emailAddress: a, memberTag: o, name: r, phoneNumber: i };
    }
    function D(t) {
      var n = t.map($),
        r = x(n, p),
        o = x(n, g),
        a = x(n, h),
        i = x(n, y);
      if (r == null || (a == null && i == null)) throw new e("invalid_headers");
      return { email: a, memberTag: o, name: r, phone: i };
    }
    function x(t, n) {
      var r,
        o = t.flatMap(function (e, t) {
          return n.has(e) ? [t] : [];
        });
      if (o.length > 1) throw new e("invalid_headers");
      return (r = o[0]) != null ? r : null;
    }
    function $(e) {
      return P(e).toLowerCase();
    }
    function P(e) {
      return N(String(e).replace(/^\uFEFF/, ""));
    }
    function N(e) {
      return String(e).trim().replace(m, "").trim();
    }
    function M(e, t) {
      var n;
      return String((n = e[t]) != null ? n : "").trim();
    }
    function w(e, t) {
      if (t == null) return null;
      var n = M(e, t);
      return n === "" ? null : n;
    }
    ((l.WAWebOrgAdminRosterCSVError = e),
      (l.MAX_ORG_ADMIN_ROSTER_ROWS = s),
      (l.MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS = u),
      (l.MAX_ORG_ADMIN_ROSTER_FILE_BYTES = c),
      (l.parseOrgAdminRosterCSV = C),
      (l.parseOrgAdminRosterCSVTable = v),
      (l.getOrgAdminRosterCSVHeaderField = R));
  },
  98,
);
