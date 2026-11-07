__d(
  "WAWebOrgAdminRosterUploadPlan",
  [
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebOrgAdminMemberTagOptions",
    "WAWebOrgAdminRosterCSVParser",
    "WAWebOrgMemberDisplayName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["name", "email", "phone"],
      s = ["name", "last_name", "email", "phone"],
      u = 256,
      c = /[\u200c\u200d]/g,
      d =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/;
    function m(e, t) {
      var n = new Set();
      return e.map(function (e) {
        var r,
          a = o(
            "WAWebOrgAdminRosterCSVParser",
          ).isOrgAdminRosterCSVWholeNameHeader(e)
            ? null
            : (r = o(
                  "WAWebOrgAdminRosterCSVParser",
                ).getOrgAdminRosterCSVHeaderField(e)) != null
              ? r
              : w(e, t);
        return a == null || n.has(a) ? "skip" : (n.add(a), a);
      });
    }
    function p(e, t, n) {
      return e.map(function (e, r) {
        return r === t ? n : n !== "skip" && e === n ? "skip" : e;
      });
    }
    function _(t) {
      var n = t.map(function (e) {
        return e === "first_name" ? "name" : e;
      });
      return e.filter(function (e) {
        return !n.includes(e);
      });
    }
    function f(e) {
      var t = e.columns,
        n = e.fixes,
        r = e.getMemberTag,
        o = e.getSecondaryMemberTag,
        a = e.roster,
        i = e.table,
        l = T(a),
        s = new Set(),
        u = {
          memberTag: t.includes("member_tag"),
          secondaryMemberTag: t.includes("secondary_member_tag"),
        },
        c = t.includes("last_name"),
        d = i.rows.map(function (e) {
          var a,
            i = n.get(e.rowNumber),
            d = R(e, t, i, { getMemberTag: r, getSecondaryMemberTag: o }),
            m = v(d),
            p = d.email == null ? null : D(d.email),
            _ = p == null ? null : (a = l.get(p)) != null ? a : null,
            f = p != null && s.has(p);
          return (
            m.length === 0 && p != null && !f && s.add(p),
            b({
              cells: d,
              fixed: i != null,
              lastNameMapped: c,
              match: _,
              missing: m,
              repeated: f,
              row: e,
              tagColumnsMapped: u,
            })
          );
        });
      return {
        added: d.filter(function (e) {
          return e.status === "added";
        }),
        incomplete: d.filter(function (e) {
          return e.status === "incomplete";
        }),
        repeated: d.filter(function (e) {
          return e.status === "repeated";
        }),
        rows: d,
        unchanged: d.filter(function (e) {
          return e.status === "unchanged";
        }),
        unnamed: d.filter(function (e) {
          return e.status === "unnamed";
        }),
        updated: d.filter(function (e) {
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
              : [{ entry: M(e), rowNumber: null }];
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
              }),
        o = r.filter(function (e) {
          return e.memberLID == null;
        });
      return {
        joined: r.filter(function (e) {
          return e.memberLID != null;
        }),
        removed: o.filter(C),
        withoutEmail: o.filter(function (e) {
          return !C(e);
        }),
      };
    }
    function y(e) {
      return s.filter(function (t) {
        return t === "name"
          ? e.name != null && !x(e.name.trim())
          : t === "last_name"
            ? e.lastName != null && !$(e.lastName.trim())
            : t === "email"
              ? e.email != null &&
                !o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(
                  e.email.trim(),
                )
              : t === "phone"
                ? e.phone != null &&
                  o(
                    "WAWebOrgAdminGroupCandidate",
                  ).normalizeOrgAdminRosterPhoneNumberInput(e.phone) == null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      });
    }
    function C(e) {
      var t = e.emailAddress;
      return (
        t != null &&
        o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(t.trim())
      );
    }
    function b(e) {
      var t = e.cells,
        n = e.fixed,
        r = e.lastNameMapped,
        a = e.match,
        i = e.missing,
        l = e.repeated,
        s = e.row,
        u = e.tagColumnsMapped,
        c = a == null ? N(t) : L(a, t, u, r),
        d = a == null ? [] : E(a, c);
      return {
        cells: s.cells,
        changes: d,
        emailText: t.emailText,
        entry: c,
        fixed: n,
        match: a,
        memberTag: t.memberTag,
        missing: i,
        name: o("WAWebOrgMemberDisplayName").getOrgMemberFullName(
          c.name,
          c.lastName,
        ),
        phoneText: t.phoneText,
        rowNumber: s.rowNumber,
        secondaryMemberTag: t.secondaryMemberTag,
        status: S(i, l, a, d),
      };
    }
    function v(e) {
      return s.filter(function (t) {
        var n;
        return t === "name"
          ? !x(e.name)
          : t === "last_name"
            ? !$((n = e.lastName) != null ? n : "")
            : t === "email"
              ? e.email == null
              : t === "phone"
                ? e.phone == null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      });
    }
    function S(e, t, n, r) {
      return e.includes("email") || e.includes("phone")
        ? "incomplete"
        : e.length > 0
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
        s,
        u = r.getMemberTag,
        c = r.getSecondaryMemberTag,
        d = function (r) {
          var n,
            o = t.indexOf(r);
          return o === -1 ? "" : ((n = e.cells[o]) != null ? n : "").trim();
        },
        m = (
          (a = n == null ? void 0 : n.email) != null ? a : d("email")
        ).trim(),
        p = (
          (i = n == null ? void 0 : n.phone) != null ? i : d("phone")
        ).trim(),
        _ = d("member_tag"),
        f = d("secondary_member_tag"),
        g = (
          (l = n == null ? void 0 : n.lastName) != null ? l : d("last_name")
        ).trim();
      return {
        email: o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(m)
          ? m
          : null,
        emailText: m,
        lastName: g === "" ? null : g,
        memberTag: _ === "" ? null : u(_),
        name: ((s = n == null ? void 0 : n.name) != null
          ? s
          : d("first_name")
        ).trim(),
        phone: o(
          "WAWebOrgAdminGroupCandidate",
        ).normalizeOrgAdminRosterPhoneNumberInput(p),
        phoneText: p,
        secondaryMemberTag: f === "" ? null : c(f),
      };
    }
    function L(e, t, n, r) {
      var o, a;
      return {
        emailAddress: e.emailAddress,
        lastName: r ? t.lastName : e.lastName,
        memberTag: n.memberTag ? t.memberTag : e.memberTag,
        name: t.name,
        phoneNumber: (o = t.phone) != null ? o : e.phoneNumber,
        secondaryMemberTag: n.secondaryMemberTag
          ? (a = t.secondaryMemberTag) != null
            ? a
            : ""
          : e.secondaryMemberTag,
      };
    }
    function E(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u = [];
      return (
        t.name.normalize("NFC") !== e.name.normalize("NFC") && u.push("name"),
        ((n = (r = t.lastName) == null ? void 0 : r.normalize("NFC")) != null
          ? n
          : null) !==
          ((a = (i = e.lastName) == null ? void 0 : i.normalize("NFC")) != null
            ? a
            : null) && u.push("last_name"),
        ((l = t.memberTag) != null ? l : null) !==
          ((s = e.memberTag) != null ? s : null) && u.push("member_tag"),
        k(t.secondaryMemberTag) !== k(e.secondaryMemberTag) &&
          u.push("secondary_member_tag"),
        I(
          t.phoneNumber,
          e.phoneNumber,
          o("WAWebOrgAdminGroupCandidate").normalizeOrgAdminRosterPhoneNumber,
        ) || u.push("phone"),
        u
      );
    }
    function k(e) {
      return e === "" ? null : e != null ? e : null;
    }
    function I(e, t, n) {
      return (e == null ? null : n(e)) === (t == null ? null : n(t));
    }
    function T(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.emailAddress;
        r != null && !t.has(D(r)) && t.set(D(r), n);
      }
      return t;
    }
    function D(e) {
      return e.trim().toLowerCase();
    }
    function x(e) {
      var t = e.normalize("NFC");
      return t !== "" && P(t) <= u && !d.test(t.replace(c, ""));
    }
    function $(e) {
      return e === "" || x(e);
    }
    function P(e) {
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
    function N(e) {
      var t = {
        emailAddress: e.email,
        lastName: e.lastName,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phone,
      };
      return e.secondaryMemberTag == null
        ? t
        : babelHelpers.extends({}, t, {
            secondaryMemberTag: e.secondaryMemberTag,
          });
    }
    function M(e) {
      return {
        emailAddress: e.emailAddress,
        lastName: e.lastName,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
        secondaryMemberTag: e.secondaryMemberTag,
      };
    }
    function w(e, t) {
      var n = o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption(e);
      return n === ""
        ? null
        : A(t == null ? void 0 : t.memberTagName, n)
          ? "member_tag"
          : A(t == null ? void 0 : t.secondaryMemberTagName, n)
            ? "secondary_member_tag"
            : null;
    }
    function A(e, t) {
      return (
        e != null &&
        o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption(e) === t
      );
    }
    ((l.guessOrgAdminRosterUploadColumns = m),
      (l.setOrgAdminRosterUploadColumn = p),
      (l.getOrgAdminRosterUploadMissingFields = _),
      (l.buildOrgAdminRosterUploadPlan = f),
      (l.getOrgAdminRosterUploadReplacement = g),
      (l.getOrgAdminRosterUploadPeopleNotInFile = h),
      (l.getOrgAdminRosterUploadFixErrors = y),
      (l.isValidName = x),
      (l.isValidLastName = $),
      (l.toEntryInput = M));
  },
  98,
);
