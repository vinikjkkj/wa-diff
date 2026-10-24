__d(
  "WAWebOrgAdminRosterUploadPlan",
  [
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebOrgAdminMemberTagOptions",
    "WAWebOrgAdminRosterCSVParser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["name", "email", "phone"],
      s = ["first_name", "last_name"],
      u = 256,
      c = /[\u200c\u200d]/g,
      d =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/;
    function m(e, t) {
      var n = new Set(),
        r = e.map(function (e) {
          var r,
            a =
              (r = o(
                "WAWebOrgAdminRosterCSVParser",
              ).getOrgAdminRosterCSVHeaderField(e)) != null
                ? r
                : M(e, t);
          return a == null || n.has(a) ? "skip" : (n.add(a), a);
        });
      return n.has("name")
        ? r.map(function (e) {
            return s.includes(e) ? "skip" : e;
          })
        : r;
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
        o = e.getSecondaryMemberTag,
        a = e.roster,
        i = e.table,
        l = T(a),
        s = new Set(),
        u = {
          memberTag: t.includes("member_tag"),
          secondaryMemberTag: t.includes("secondary_member_tag"),
        },
        c = i.rows.map(function (e) {
          var a,
            i = n.get(e.rowNumber),
            c = R(e, t, i, { getMemberTag: r, getSecondaryMemberTag: o }),
            d = b(c),
            m = c.email == null ? null : D(c.email),
            p = m == null ? null : (a = l.get(m)) != null ? a : null,
            _ = m != null && s.has(m);
          return (
            d.length === 0 && m != null && !_ && s.add(m),
            C({
              cells: c,
              fixed: i != null,
              match: p,
              missing: d,
              repeated: _,
              row: e,
              tagColumnsMapped: u,
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
              : [{ entry: N(e), rowNumber: null }];
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
          ? t.name != null && !x(t.name.trim())
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
        l = e.tagColumnsMapped,
        s = r == null ? P(t) : L(r, t, l),
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
        secondaryMemberTag: t.secondaryMemberTag,
        status: S(o, a, r, u),
      };
    }
    function b(t) {
      return e.filter(function (e) {
        return e === "name"
          ? !x(t.name)
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
        s = r.getMemberTag,
        u = r.getSecondaryMemberTag,
        c = function (r) {
          var n,
            o = t.indexOf(r);
          return o === -1 ? "" : ((n = e.cells[o]) != null ? n : "").trim();
        },
        d = (
          (a = n == null ? void 0 : n.email) != null ? a : c("email")
        ).trim(),
        m = (
          (i = n == null ? void 0 : n.phone) != null ? i : c("phone")
        ).trim(),
        p = c("member_tag"),
        _ = c("secondary_member_tag"),
        f =
          c("name") ||
          [c("first_name"), c("last_name")].filter(Boolean).join(" ");
      return {
        email: o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(d)
          ? d
          : null,
        emailText: d,
        memberTag: p === "" ? null : s(p),
        name: ((l = n == null ? void 0 : n.name) != null ? l : f).trim(),
        phone: o(
          "WAWebOrgAdminGroupCandidate",
        ).normalizeOrgAdminRosterPhoneNumberInput(m),
        phoneText: m,
        secondaryMemberTag: _ === "" ? null : u(_),
      };
    }
    function L(e, t, n) {
      var r, o;
      return {
        emailAddress: e.emailAddress,
        memberTag: n.memberTag ? t.memberTag : e.memberTag,
        name: t.name,
        phoneNumber: (r = t.phone) != null ? r : e.phoneNumber,
        secondaryMemberTag: n.secondaryMemberTag
          ? (o = t.secondaryMemberTag) != null
            ? o
            : ""
          : e.secondaryMemberTag,
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
        k(t.secondaryMemberTag) !== k(e.secondaryMemberTag) &&
          a.push("secondary_member_tag"),
        I(
          t.phoneNumber,
          e.phoneNumber,
          o("WAWebOrgAdminGroupCandidate").normalizeOrgAdminRosterPhoneNumber,
        ) || a.push("phone"),
        a
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
      return t !== "" && $(t) <= u && !d.test(t.replace(c, ""));
    }
    function $(e) {
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
    function P(e) {
      var t = {
        emailAddress: e.email,
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
    function N(e) {
      return {
        emailAddress: e.emailAddress,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
        secondaryMemberTag: e.secondaryMemberTag,
      };
    }
    function M(e, t) {
      var n = o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption(e);
      return n === ""
        ? null
        : w(t == null ? void 0 : t.memberTagName, n)
          ? "member_tag"
          : w(t == null ? void 0 : t.secondaryMemberTagName, n)
            ? "secondary_member_tag"
            : null;
    }
    function w(e, t) {
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
      (l.getOrgAdminRosterUploadFixErrors = y));
  },
  98,
);
