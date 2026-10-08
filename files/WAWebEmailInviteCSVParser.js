__d(
  "WAWebEmailInviteCSVParser",
  [
    "WAWebContactImportCSVParsingUtils",
    "WAWebFileUtils",
    "asyncToGeneratorRuntime",
  ],
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
      s = 1024 * 1024,
      u = 50,
      c = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      d = u * 2 + 2,
      m = new Set(["email", "email address", "email_address"]);
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          f(t);
          var n = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            yield o("WAWebFileUtils").blobToText(t),
            d,
          );
          if (n.meta.truncated) throw new e("too_many_emails");
          if (
            n.errors.some(function (e) {
              return C(e);
            })
          )
            throw new e("invalid_file");
          var r = n.data.filter(function (e) {
            return e.some(function (e) {
              return String(e).trim() !== "";
            });
          });
          if (r.length === 0) throw new e("empty_file");
          var a = g(r),
            i = [],
            l = [],
            s = new Set(),
            m = 0;
          for (var p of a) {
            var _ = p.value.toLowerCase();
            if (_ !== "") {
              if (s.has(_)) {
                m++;
                continue;
              }
              if ((s.add(_), c.test(_) ? i.push(_) : l.push(_), s.size > u))
                throw new e("too_many_emails");
            }
          }
          if (s.size === 0) throw new e("empty_file");
          return { duplicateCount: m, invalidEmails: l, validEmails: i };
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      if (t.size > s) throw new e("file_too_large");
      if (!t.name.toLowerCase().endsWith(".csv")) throw new e("invalid_file");
    }
    function g(t) {
      var n = t[0].map(function (e) {
          return h(String(e).replace(/^\uFEFF/, "")).toLowerCase();
        }),
        r = n.flatMap(function (e, t) {
          return m.has(e) ? [t] : [];
        });
      if (r.length === 1) {
        var o = r[0];
        return t.slice(1).map(function (e, t) {
          var n;
          return {
            rowNumber: t + 2,
            value: h(String((n = e[o]) != null ? n : "")),
          };
        });
      }
      if (r.length > 1) throw new e("invalid_file", 1);
      if (t.every(y))
        return t.map(function (e, t) {
          var n;
          return {
            rowNumber: t + 1,
            value: h(String((n = e[0]) != null ? n : "")),
          };
        });
      if (t.length === 1)
        return t[0].map(function (e) {
          return { rowNumber: 1, value: h(String(e != null ? e : "")) };
        });
      throw new e("invalid_file", 1);
    }
    function h(e) {
      return String(e).trim().replace(/^\'/, "").trim();
    }
    function y(e) {
      return (
        e.filter(function (e) {
          return String(e).trim() !== "";
        }).length <= 1
      );
    }
    function C(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    ((l.WAWebEmailInviteCSVError = e),
      (l.MAX_EMAIL_INVITE_CSV_BYTES = s),
      (l.MAX_EMAIL_INVITE_RECIPIENTS = u),
      (l.EMAIL_INVITE_REGEX = c),
      (l.parseEmailInviteCSV = p));
  },
  98,
);
