__d(
  "WAWebOrgAdminRosterUploadPlan",
  [
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebOrgAdminRosterCSVParser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["name", "email", "phone"],
      s = ["first_name", "last_name"],
      u = 256,
      c = /[\u200c\u200d]/g,
      d =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/;
    function m(e) {
      var t = new Set(),
        n = e.map(function (e) {
          var n = o(
            "WAWebOrgAdminRosterCSVParser",
          ).getOrgAdminRosterCSVHeaderField(e);
          return n == null || t.has(n) ? "skip" : (t.add(n), n);
        });
      return t.has("name")
        ? n.map(function (e) {
            return s.includes(e) ? "skip" : e;
          })
        : n;
    }
    function p(e, t, n) {
      return e.map(function (e, r) {
        return r === t ? n : n !== "skip" && v(e, n) ? "skip" : e;
      });
    }
    function _(t) {
      var n = t.map(function (e) {
        return s.includes(e) ? "name" : e;
      });
      return e.filter(function (e) {
        return !n.includes(e);
      });
    }
    function f(e) {
      var t = e.columns,
        n = e.fixes,
        r = e.getMemberTag,
        o = e.roster,
        a = e.table,
        i = I(o),
        l = new Set(),
        s = t.includes("member_tag"),
        u = a.rows.map(function (e) {
          var o,
            a = n.get(e.rowNumber),
            u = R(e, t, a, r),
            c = b(u),
            d = u.email == null ? null : T(u.email),
            m = d == null ? null : (o = i.get(d)) != null ? o : null,
            p = d != null && l.has(d);
          return (
            c.length === 0 && d != null && !p && l.add(d),
            C({
              cells: u,
              fixed: a != null,
              match: m,
              missing: c,
              repeated: p,
              row: e,
              tagColumnMapped: s,
            })
          );
        });
      return {
        added: u.filter(function (e) {
          return e.status === "added";
        }),
        incomplete: u.filter(function (e) {
          return e.status === "incomplete";
        }),
        repeated: u.filter(function (e) {
          return e.status === "repeated";
        }),
        rows: u,
        unchanged: u.filter(function (e) {
          return e.status === "unchanged";
        }),
        unnamed: u.filter(function (e) {
          return e.status === "unnamed";
        }),
        updated: u.filter(function (e) {
          return e.status === "updated";
        }),
      };
    }
    function g(e, t, n) {
      var r = new Map();
      for (var o of [].concat(e.updated, e.unchanged))
        o.match != null && r.set(o.match.id, o);
      var a = new Set(n);
      return [].concat(
        t.flatMap(function (e) {
          var t = r.get(e.id);
          return t != null
            ? [{ entry: t.entry, rowNumber: t.rowNumber }]
            : a.has(e)
              ? []
              : [{ entry: P(e), rowNumber: null }];
        }),
        e.added.map(function (e) {
          var t = e.entry,
            n = e.rowNumber;
          return { entry: t, rowNumber: n };
        }),
      );
    }
    function h(e, t) {
      var n = new Set(
          e.rows.flatMap(function (e) {
            var t = e.match;
            return t == null ? [] : [t.id];
          }),
        ),
        r =
          n.size === 0
            ? []
            : t.filter(function (e) {
                return !n.has(e.id);
              });
      return {
        joined: r.filter(function (e) {
          return e.memberLID != null;
        }),
        removed: r.filter(function (e) {
          return e.memberLID == null;
        }),
      };
    }
    function y(t) {
      return e.filter(function (e) {
        return e === "name"
          ? t.name != null && !D(t.name.trim())
          : e === "email"
            ? t.email != null &&
              !o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(
                t.email.trim(),
              )
            : e === "phone"
              ? t.phone != null &&
                o(
                  "WAWebOrgAdminGroupCandidate",
                ).normalizeOrgAdminRosterPhoneNumberInput(t.phone) == null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      });
    }
    function C(e) {
      var t = e.cells,
        n = e.fixed,
        r = e.match,
        o = e.missing,
        a = e.repeated,
        i = e.row,
        l = e.tagColumnMapped,
        s = r == null ? $(t) : L(r, t, l),
        u = r == null ? [] : E(r, s);
      return {
        cells: i.cells,
        changes: u,
        emailText: t.emailText,
        entry: s,
        fixed: n,
        match: r,
        memberTag: t.memberTag,
        missing: o,
        name: t.name,
        phoneText: t.phoneText,
        rowNumber: i.rowNumber,
        status: S(o, a, r, u),
      };
    }
    function b(t) {
      return e.filter(function (e) {
        return e === "name"
          ? !D(t.name)
          : e === "email"
            ? t.email == null
            : e === "phone"
              ? t.phone == null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      });
    }
    function v(e, t) {
      return (
        e === t ||
        (e === "name" && s.includes(t)) ||
        (s.includes(e) && t === "name")
      );
    }
    function S(e, t, n, r) {
      return e.includes("email") || e.includes("phone")
        ? "incomplete"
        : e.includes("name")
          ? "unnamed"
          : t
            ? "repeated"
            : n == null
              ? "added"
              : r.length > 0
                ? "updated"
                : "unchanged";
    }
    function R(e, t, n, r) {
      var a,
        i,
        l,
        s = function (r) {
          var n,
            o = t.indexOf(r);
          return o === -1 ? "" : ((n = e.cells[o]) != null ? n : "").trim();
        },
        u = (
          (a = n == null ? void 0 : n.email) != null ? a : s("email")
        ).trim(),
        c = (
          (i = n == null ? void 0 : n.phone) != null ? i : s("phone")
        ).trim(),
        d = s("member_tag"),
        m =
          s("name") ||
          [s("first_name"), s("last_name")].filter(Boolean).join(" ");
      return {
        email: o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(u)
          ? u
          : null,
        emailText: u,
        memberTag: d === "" ? null : r(d),
        name: ((l = n == null ? void 0 : n.name) != null ? l : m).trim(),
        phone: o(
          "WAWebOrgAdminGroupCandidate",
        ).normalizeOrgAdminRosterPhoneNumberInput(c),
        phoneText: c,
      };
    }
    function L(e, t, n) {
      var r;
      return {
        emailAddress: e.emailAddress,
        memberTag: n ? t.memberTag : e.memberTag,
        name: t.name,
        phoneNumber: (r = t.phone) != null ? r : e.phoneNumber,
      };
    }
    function E(e, t) {
      var n,
        r,
        a = [];
      return (
        t.name !== e.name && a.push("name"),
        ((n = t.memberTag) != null ? n : null) !==
          ((r = e.memberTag) != null ? r : null) && a.push("member_tag"),
        k(
          t.phoneNumber,
          e.phoneNumber,
          o("WAWebOrgAdminGroupCandidate").normalizeOrgAdminRosterPhoneNumber,
        ) || a.push("phone"),
        a
      );
    }
    function k(e, t, n) {
      return (e == null ? null : n(e)) === (t == null ? null : n(t));
    }
    function I(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.emailAddress;
        r != null && !t.has(T(r)) && t.set(T(r), n);
      }
      return t;
    }
    function T(e) {
      return e.trim().toLowerCase();
    }
    function D(e) {
      var t = e.normalize("NFC");
      return t !== "" && x(t) <= u && !d.test(t.replace(c, ""));
    }
    function x(e) {
      var t = 0;
      for (var n of Array.from(e)) {
        var r,
          o = (r = n.codePointAt(0)) != null ? r : 0;
        o < 128
          ? (t += 1)
          : o < 2048
            ? (t += 2)
            : o < 65536
              ? (t += 3)
              : (t += 4);
      }
      return t;
    }
    function $(e) {
      return {
        emailAddress: e.email,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phone,
      };
    }
    function P(e) {
      return {
        emailAddress: e.emailAddress,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
      };
    }
    ((l.guessOrgAdminRosterUploadColumns = m),
      (l.setOrgAdminRosterUploadColumn = p),
      (l.getOrgAdminRosterUploadMissingFields = _),
      (l.buildOrgAdminRosterUploadPlan = f),
      (l.getOrgAdminRosterUploadReplacement = g),
      (l.getOrgAdminRosterUploadPeopleNotInFile = h),
      (l.getOrgAdminRosterUploadFixErrors = y));
  },
  98,
);
