__d(
  "WAWebEmailInviteCSVParser",
  ["WAWebContactImportCSVParsingUtils", "WAWebFileUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "WAWebEmailInviteCSVError"),
            (r.code = t),
            (r.rowNumber = n != null ? n : null),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      s = 10 * 1024 * 1024,
      u = 5,
      c = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/,
      d = u * 2 + 2,
      m = new Set(["email", "emails", "email address", "email_address"]),
      p = new Set([
        "name",
        "full name",
        "full_name",
        "display name",
        "display_name",
      ]);
    async function _(t) {
      var n = await g({ file: t, maxBytes: s, previewRows: d }),
        r = y(n, !0),
        o = [],
        a = [],
        i = new Set(),
        l = 0;
      for (var m of r) {
        var p = m.email;
        if (p !== "") {
          if (i.has(p)) {
            l++;
            continue;
          }
          if ((i.add(p), c.test(p) ? o.push(p) : a.push(p), i.size > u))
            throw new e("too_many_emails");
        }
      }
      if (i.size === 0) throw new e("empty_file");
      return { duplicateCount: l, invalidEmails: a, validEmails: o };
    }
    async function f(t, n) {
      n === void 0 && (n = []);
      var r = await g({ file: t, maxBytes: s, previewRows: d }),
        o = y(r, !1);
      if (o.length > u) throw new e("too_many_emails");
      if (o.length === 0) throw new e("empty_file");
      var a = new Set(
        n.map(function (e) {
          return e.trim().toLowerCase();
        }),
      );
      return o.map(function (e) {
        return babelHelpers.extends({}, e, { status: v(e.email, a) });
      });
    }
    async function g(t) {
      var n = t.file,
        r = t.maxBytes,
        a = t.previewRows;
      h(n, r);
      var i = await o("WAWebContactImportCSVParsingUtils").loadPapaParse(
        await o("WAWebFileUtils").blobToText(n),
        a,
      );
      if (i.meta.truncated) throw new e("too_many_emails");
      if (i.errors.some(R)) throw new e("invalid_file");
      var l = i.data
        .map(function (e, t) {
          return { cells: e, rowNumber: t + 1 };
        })
        .filter(function (e) {
          return e.cells.some(function (e) {
            return e.trim() !== "";
          });
        });
      if (l.length === 0) throw new e("empty_file");
      return l;
    }
    function h(t, n) {
      if (t.size > n) throw new e("file_too_large");
      if (!t.name.toLowerCase().endsWith(".csv")) throw new e("invalid_file");
    }
    function y(t, n) {
      var r = t[0],
        o = r.cells.map(function (e) {
          return e
            .trim()
            .replace(/^\uFEFF/, "")
            .toLowerCase();
        }),
        a = o.flatMap(function (e, t) {
          return m.has(e) ? [t] : [];
        });
      if (a.length > 1) throw new e("invalid_file", r.rowNumber);
      if (a.length === 1) {
        var i = o.findIndex(function (e) {
          return p.has(e);
        });
        return t.slice(1).map(function (e) {
          return C(e, a[0], i, n);
        });
      }
      if (
        t.every(function (e) {
          return S(e.cells);
        })
      )
        return t.map(function (e) {
          return C(e, 0, -1, n);
        });
      if (t.length === 1)
        return r.cells.map(function (e) {
          return { rowNumber: r.rowNumber, name: "", email: b(e, n) };
        });
      throw new e("invalid_file", r.rowNumber);
    }
    function C(e, t, n, r) {
      var o, a;
      return {
        rowNumber: e.rowNumber,
        name: ((o = e.cells[n]) != null ? o : "").trim(),
        email: b((a = e.cells[t]) != null ? a : "", r),
      };
    }
    function b(e, t) {
      var n = e.trim();
      return (t ? n.replace(/^\'/, "").trim() : n).toLowerCase();
    }
    function v(e, t) {
      return c.test(e)
        ? t.has(e)
          ? "duplicate"
          : (t.add(e), "ready")
        : "invalid";
    }
    function S(e) {
      return (
        e.filter(function (e) {
          return e.trim() !== "";
        }).length <= 1
      );
    }
    function R(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    ((l.WAWebEmailInviteCSVError = e),
      (l.MAX_EMAIL_INVITE_CSV_BYTES = s),
      (l.MAX_EMAIL_INVITE_RECIPIENTS = u),
      (l.EMAIL_INVITE_REGEX = c),
      (l.parseEmailInviteCSV = _),
      (l.parseEmailInviteCSVForReview = f));
  },
  98,
);
