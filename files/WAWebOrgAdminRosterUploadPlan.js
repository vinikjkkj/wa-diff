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
        i = L(o),
        l = new Set(),
        s = new Set(),
        u = t.includes("member_tag"),
        c = a.rows.map(function (e) {
          var o = b(e, t, n.get(e.rowNumber), r),
            a = y(o),
            c = E(i, o.email, o.phone),
            d = k(o.email, o.phone),
            m =
              d.some(function (e) {
                return l.has(e);
              }) ||
              (c != null && s.has(c));
          return (
            a.length === 0 &&
              !m &&
              (d.forEach(function (e) {
                return l.add(e);
              }),
              c != null && s.add(c)),
            h({
              cells: o,
              index: i,
              match: c,
              missing: a,
              repeated: m,
              row: e,
              tagColumnMapped: u,
            })
          );
        });
      return {
        added: c.filter(function (e) {
          return e.status === "added";
        }),
        incomplete: c.filter(function (e) {
          return e.status === "incomplete";
        }),
        repeated: c.filter(function (e) {
          return e.status === "repeated";
        }),
        rows: c,
        unchanged: c.filter(function (e) {
          return e.status === "unchanged";
        }),
        unnamed: c.filter(function (e) {
          return e.status === "unnamed";
        }),
        updated: c.filter(function (e) {
          return e.status === "updated";
        }),
      };
    }
    function f(e, t) {
      var n = new Map();
      for (var r of [].concat(e.updated, e.unchanged))
        r.match != null && n.set(r.match.id, r);
      return [].concat(
        t.map(function (e) {
          var t = n.get(e.id);
          return t == null
            ? { entry: $(e), rowNumber: null }
            : { entry: t.entry, rowNumber: t.rowNumber };
        }),
        e.added.map(function (e) {
          var t = e.entry,
            n = e.rowNumber;
          return { entry: t, rowNumber: n };
        }),
      );
    }
    function g(t) {
      return e.filter(function (e) {
        return e === "name"
          ? t.name != null && !T(t.name.trim())
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
    function h(e) {
      var t = e.cells,
        n = e.index,
        r = e.match,
        o = e.missing,
        a = e.repeated,
        i = e.row,
        l = e.tagColumnMapped,
        s = r == null ? x(t) : v(r, t, n, l),
        u = r == null ? [] : S(r, s);
      return {
        cells: i.cells,
        changes: u,
        emailText: t.emailText,
        entry: s,
        match: r,
        memberTag: t.memberTag,
        missing: o,
        name: t.name,
        phoneText: t.phoneText,
        rowNumber: i.rowNumber,
        status: C(o, a, r, u),
      };
    }
    function y(t) {
      return e.filter(function (e) {
        return e === "name"
          ? !T(t.name)
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
    function C(e, t, n, r) {
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
    function b(e, t, n, r) {
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
    function v(e, t, n, r) {
      var o = t.email == null ? null : n.byEmail.get(I(t.email)),
        a = t.phone == null ? null : n.byPhone.get(t.phone);
      return {
        emailAddress: t.email == null || o != null ? e.emailAddress : t.email,
        memberTag: r ? t.memberTag : e.memberTag,
        name: t.name,
        phoneNumber: t.phone == null || a != null ? e.phoneNumber : t.phone,
      };
    }
    function S(e, t) {
      var n,
        r,
        a = [];
      return (
        t.name !== e.name && a.push("name"),
        ((n = t.memberTag) != null ? n : null) !==
          ((r = e.memberTag) != null ? r : null) && a.push("member_tag"),
        R(t.emailAddress, e.emailAddress, I) || a.push("email"),
        R(
          t.phoneNumber,
          e.phoneNumber,
          o("WAWebOrgAdminGroupCandidate").normalizeOrgAdminRosterPhoneNumber,
        ) || a.push("phone"),
        a
      );
    }
    function R(e, t, n) {
      return (e == null ? null : n(e)) === (t == null ? null : n(t));
    }
    function L(e) {
      var t = new Map(),
        n = new Map();
      for (var r of e) {
        var a = r.emailAddress;
        a != null && !t.has(I(a)) && t.set(I(a), r);
        var i = o(
          "WAWebOrgAdminGroupCandidate",
        ).normalizeOrgAdminRosterPhoneNumber(r.phoneNumber);
        i != null && !n.has(i) && n.set(i, r);
      }
      return { byEmail: t, byPhone: n };
    }
    function E(e, t, n) {
      var r, o;
      return (r =
        (o = t == null ? null : e.byEmail.get(I(t))) != null
          ? o
          : n == null
            ? null
            : e.byPhone.get(n)) != null
        ? r
        : null;
    }
    function k(e, t) {
      var n = [];
      return (
        e != null && n.push("email:" + I(e)),
        t != null && n.push("phone:" + t),
        n
      );
    }
    function I(e) {
      return e.trim().toLowerCase();
    }
    function T(e) {
      var t = e.normalize("NFC");
      return t !== "" && D(t) <= s && !c.test(t.replace(u, ""));
    }
    function D(e) {
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
    function x(e) {
      return {
        emailAddress: e.email,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phone,
      };
    }
    function $(e) {
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
      (l.getOrgAdminRosterUploadFixErrors = g));
  },
  98,
);
