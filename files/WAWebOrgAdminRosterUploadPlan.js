__d(
  "WAWebOrgAdminRosterUploadPlan",
  [
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebOrgAdminRosterCSVParser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["name", "email", "phone"],
      s = 256,
      u = /[\u200c\u200d]/g,
      c =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/;
    function d(e) {
      var t = new Set();
      return e.map(function (e) {
        var n = o(
          "WAWebOrgAdminRosterCSVParser",
        ).getOrgAdminRosterCSVHeaderField(e);
        return n == null || t.has(n) ? "skip" : (t.add(n), n);
      });
    }
    function m(e, t, n) {
      return e.map(function (e, r) {
        return r === t ? n : n !== "skip" && e === n ? "skip" : e;
      });
    }
    function p(t) {
      return e.filter(function (e) {
        return !t.includes(e);
      });
    }
    function _(e) {
      var t = e.columns,
        n = e.fixes,
        r = e.getMemberTag,
        o = e.roster,
        a = e.table,
        i = E(o),
        l = new Set(),
        s = t.includes("member_tag"),
        u = a.rows.map(function (e) {
          var o,
            a = n.get(e.rowNumber),
            u = v(e, t, a, r),
            c = C(u),
            d = u.email == null ? null : k(u.email),
            m = d == null ? null : (o = i.get(d)) != null ? o : null,
            p = d != null && l.has(d);
          return (
            c.length === 0 && d != null && !p && l.add(d),
            y({
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
    function f(e, t, n) {
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
              : [{ entry: x(e), rowNumber: null }];
        }),
        e.added.map(function (e) {
          var t = e.entry,
            n = e.rowNumber;
          return { entry: t, rowNumber: n };
        }),
      );
    }
    function g(e, t) {
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
    function h(t) {
      return e.filter(function (e) {
        return e === "name"
          ? t.name != null && !I(t.name.trim())
          : e === "email"
            ? t.email != null &&
              !o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(
                t.email.trim(),
              )
            : e === "phone"
              ? t.phone != null &&
                o(
                  "WAWebOrgAdminGroupCandidate",
                ).normalizeOrgAdminRosterPhoneNumber(t.phone) == null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      });
    }
    function y(e) {
      var t = e.cells,
        n = e.fixed,
        r = e.match,
        o = e.missing,
        a = e.repeated,
        i = e.row,
        l = e.tagColumnMapped,
        s = r == null ? D(t) : S(r, t, l),
        u = r == null ? [] : R(r, s);
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
        status: b(o, a, r, u),
      };
    }
    function C(t) {
      return e.filter(function (e) {
        return e === "name"
          ? !I(t.name)
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
    function b(e, t, n, r) {
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
    function v(e, t, n, r) {
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
        d = s("member_tag");
      return {
        email: o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(u)
          ? u
          : null,
        emailText: u,
        memberTag: d === "" ? null : r(d),
        name: ((l = n == null ? void 0 : n.name) != null
          ? l
          : s("name")
        ).trim(),
        phone: o(
          "WAWebOrgAdminGroupCandidate",
        ).normalizeOrgAdminRosterPhoneNumber(c),
        phoneText: c,
      };
    }
    function S(e, t, n) {
      var r;
      return {
        emailAddress: e.emailAddress,
        memberTag: n ? t.memberTag : e.memberTag,
        name: t.name,
        phoneNumber: (r = t.phone) != null ? r : e.phoneNumber,
      };
    }
    function R(e, t) {
      var n,
        r,
        a = [];
      return (
        t.name !== e.name && a.push("name"),
        ((n = t.memberTag) != null ? n : null) !==
          ((r = e.memberTag) != null ? r : null) && a.push("member_tag"),
        L(
          t.phoneNumber,
          e.phoneNumber,
          o("WAWebOrgAdminGroupCandidate").normalizeOrgAdminRosterPhoneNumber,
        ) || a.push("phone"),
        a
      );
    }
    function L(e, t, n) {
      return (e == null ? null : n(e)) === (t == null ? null : n(t));
    }
    function E(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.emailAddress;
        r != null && !t.has(k(r)) && t.set(k(r), n);
      }
      return t;
    }
    function k(e) {
      return e.trim().toLowerCase();
    }
    function I(e) {
      var t = e.normalize("NFC");
      return t !== "" && T(t) <= s && !c.test(t.replace(u, ""));
    }
    function T(e) {
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
    function D(e) {
      return {
        emailAddress: e.email,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phone,
      };
    }
    function x(e) {
      return {
        emailAddress: e.emailAddress,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
      };
    }
    ((l.guessOrgAdminRosterUploadColumns = d),
      (l.setOrgAdminRosterUploadColumn = m),
      (l.getOrgAdminRosterUploadMissingFields = p),
      (l.buildOrgAdminRosterUploadPlan = _),
      (l.getOrgAdminRosterUploadReplacement = f),
      (l.getOrgAdminRosterUploadPeopleNotInFile = g),
      (l.getOrgAdminRosterUploadFixErrors = h));
  },
  98,
);
