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
      u = 1e3,
      c = 25 * 1024 * 1024,
      d = s * 2 + 2,
      m = /^\'(?=\s*[=+\-@\t\r])/,
      p = new Set(["name", "full name", "full_name"]),
      _ = new Set(["member tag", "member_tag", "tag"]),
      f = new Set(["email", "email address", "email_address"]),
      g = new Set([
        "phone",
        "phone number",
        "phone_number",
        "mobile",
        "mobile phone number",
        "mobile_phone_number",
      ]);
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield C(e),
            n = I(t.columns);
          return t.rows.map(function (e) {
            return k(e, n);
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          S(t);
          var n = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            yield t.text(),
            d,
          );
          if (
            n.errors.some(function (e) {
              return R(e);
            }) ||
            n.data.length === 0
          )
            throw new e("invalid_file");
          if (n.meta.truncated) throw new e("too_many_lines");
          var r = L(n.data),
            a = n.data[r],
            i = E(n.data, r, a.length);
          if (i.length === 0) throw new e("empty_roster");
          return { columns: a.map(x), rows: i };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = D(e);
      return p.has(t)
        ? "name"
        : f.has(t)
          ? "email"
          : g.has(t)
            ? "phone"
            : _.has(t)
              ? "member_tag"
              : null;
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
    function E(t, n, r) {
      for (var o = [], a = n + 1; a < t.length; a++) {
        var i = t[a].map($);
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
    function k(t, n) {
      var r = P(t.cells, n.name),
        o = N(t.cells, n.memberTag),
        a = N(t.cells, n.email),
        i = N(t.cells, n.phone);
      if (r === "" || (a == null && i == null))
        throw new e("invalid_row", t.rowNumber);
      return { emailAddress: a, memberTag: o, name: r, phoneNumber: i };
    }
    function I(t) {
      var n = t.map(D),
        r = T(n, p),
        o = T(n, _),
        a = T(n, f),
        i = T(n, g);
      if (r == null || (a == null && i == null)) throw new e("invalid_headers");
      return { email: a, memberTag: o, name: r, phone: i };
    }
    function T(t, n) {
      var r,
        o = t.flatMap(function (e, t) {
          return n.has(e) ? [t] : [];
        });
      if (o.length > 1) throw new e("invalid_headers");
      return (r = o[0]) != null ? r : null;
    }
    function D(e) {
      return x(e).toLowerCase();
    }
    function x(e) {
      return $(String(e).replace(/^\uFEFF/, ""));
    }
    function $(e) {
      return String(e).trim().replace(m, "").trim();
    }
    function P(e, t) {
      var n;
      return String((n = e[t]) != null ? n : "").trim();
    }
    function N(e, t) {
      if (t == null) return null;
      var n = P(e, t);
      return n === "" ? null : n;
    }
    ((l.WAWebOrgAdminRosterCSVError = e),
      (l.MAX_ORG_ADMIN_ROSTER_ROWS = s),
      (l.MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS = u),
      (l.MAX_ORG_ADMIN_ROSTER_FILE_BYTES = c),
      (l.parseOrgAdminRosterCSV = h),
      (l.parseOrgAdminRosterCSVTable = C),
      (l.getOrgAdminRosterCSVHeaderField = v));
  },
  98,
);
