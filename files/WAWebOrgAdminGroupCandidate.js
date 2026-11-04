__d(
  "WAWebOrgAdminGroupCandidate",
  [
    "WAPhoneFindCC",
    "WAWebApiContact",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebOrgAdminDirectoryMemberDisplay",
    "WAWebOrgAdminManagedRosterUtils",
    "WAWebOrgAdminPersonName",
    "WAWebPhoneUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e =
        /(?:[\t-\r \(\)\x2D-\/\xA0\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u1680\u180E\u2000-\u2015\u2028-\u202F\u205F-\u2064\u2066-\u206F\u2212\u3000\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/g,
      s = /^(?:\+|00|011)/,
      u = "1",
      c = /^\d{10}$/,
      d = 11;
    function m(e) {
      return {
        directoryMember: e,
        displayName: o("WAWebOrgAdminPersonName").getOrgAdminPersonName(
          e,
          null,
        ),
        key: "directory:" + e.lid,
        memberTag: e.memberTag,
        source: "directory",
      };
    }
    function p(e) {
      return {
        displayName: o("WAWebOrgAdminPersonName").getOrgAdminPersonName(
          null,
          e,
        ),
        key: "roster:" + e.id,
        memberTag: e.memberTag,
        rosterEntry: e,
        source: "roster",
      };
    }
    function _(e) {
      var t = e.adminRoster,
        n = e.adminRosterEnabled,
        r = e.directory,
        a = e.selfLID,
        i = e.selfPhoneNumber,
        l = r.filter(function (e) {
          return e.lid !== a;
        });
      if (!n) {
        var s = o(
          "WAWebOrgAdminManagedRosterUtils",
        ).getWAWebOrgAdminRosterDetailsByMemberLID(t);
        return l.map(function (e) {
          return babelHelpers.extends({}, m(e), {
            displayName: o("WAWebOrgAdminPersonName").getOrgAdminPersonName(
              e,
              s.get(e.lid),
            ),
          });
        });
      }
      var u = new Set(
        t.flatMap(function (e) {
          return e.memberLID == null ? [] : [e.memberLID];
        }),
      );
      return []
        .concat(
          t
            .filter(function (e) {
              return !R(e, a, i);
            })
            .map(p),
          l
            .filter(function (e) {
              return !u.has(e.lid);
            })
            .map(m),
        )
        .sort(function (e, t) {
          return e.displayName.localeCompare(t.displayName);
        });
    }
    function f(e) {
      if (e.source === "directory")
        return o(
          "WAWebOrgAdminDirectoryMemberDisplay",
        ).getOrgAdminDirectoryMemberIdentityLabel(e.directoryMember);
      var t = e.rosterEntry,
        n = t.emailAddress,
        r = t.phoneNumber,
        a = L(r);
      return n != null && n !== ""
        ? a == null
          ? n
          : n + " \xB7 " + o("WAWebPhoneUtils").formatPhone(a)
        : a == null
          ? null
          : o("WAWebPhoneUtils").formatPhone(a);
    }
    function g(e) {
      return e.source === "directory" ? e.directoryMember.lid : null;
    }
    function h(e) {
      return e.source === "directory"
        ? e.directoryMember.lid
        : e.rosterEntry.memberLID;
    }
    function y(e) {
      return e.source === "roster" ? e.rosterEntry.emailAddress : null;
    }
    function C(e) {
      return e.source === "roster" ? e.rosterEntry.secondaryMemberTag : null;
    }
    function b(e) {
      if (e.source !== "roster") return null;
      var t = e.rosterEntry,
        n = t.emailAddress,
        r = t.id;
      return n == null || n === "" ? null : r;
    }
    function v(e, t) {
      if (e.source === "directory") {
        var n;
        return (
          o(
            "WAWebOrgAdminDirectoryMemberDisplay",
          ).orgAdminDirectoryMemberMatchesQuery(e.directoryMember, t) ||
          e.displayName.toLocaleLowerCase().includes(t) ||
          ((n = e.memberTag) == null
            ? void 0
            : n.toLocaleLowerCase().includes(t)) === !0
        );
      }
      if (t === "") return !0;
      var r = e.rosterEntry;
      if (
        [e.displayName, r.memberTag, r.emailAddress].some(function (e) {
          return (
            (e == null ? void 0 : e.toLocaleLowerCase().includes(t)) === !0
          );
        })
      )
        return !0;
      var a = o(
          "WAWebOrgAdminDirectoryMemberDisplay",
        ).normalizeOrgAdminPhoneSearchValue(t),
        i = L(r.phoneNumber);
      return (
        i != null &&
        a !== "" &&
        /^[\t-\r \(\)\+\x2D\.0-9\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/.test(
          t,
        ) &&
        i.includes(a)
      );
    }
    function S(e) {
      return h(e) != null || b(e) != null;
    }
    function R(e, t, n) {
      if (e.memberLID != null) return e.memberLID === t;
      var r = L(e.phoneNumber);
      if (r == null) return !1;
      if (r === n) return !0;
      try {
        var a;
        return (
          ((a = o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").createUserWidOrThrow(r),
          )) == null
            ? void 0
            : a.user) === t
        );
      } catch (e) {
        return !1;
      }
    }
    function L(e) {
      if (e == null) return null;
      var t = e
        .trim()
        .replace(/[\s().-]/g, "")
        .replace(/^(?:\+|00)/, "");
      if (!/^[1-9][0-9]{6,14}$/.test(t)) return null;
      var n = o("WAPhoneFindCC").findCC(t);
      if (n === "") return null;
      var r = t.substring(n.length);
      return o(
        "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
      ).isPhoneNumberValid(Number(n), r)
        ? t
        : null;
    }
    function E(t) {
      var n = t.replace(e, ""),
        r = n.replace(s, ""),
        a =
          r === n &&
          c.test(n) &&
          o("WAWebPhoneUtils").isValidMobileForRegistration(u, n)
            ? "" + u + n
            : L(r);
      return a != null &&
        (!a.startsWith(u) ||
          (a.length === d &&
            o("WAWebPhoneUtils").isValidMobileForRegistration(
              u,
              a.slice(u.length),
            )))
        ? a
        : null;
    }
    function k(t) {
      var n = t.replace(e, "");
      return E(t) === "" + u + n;
    }
    ((l.directoryMemberToGroupCandidate = m),
      (l.rosterEntryToGroupCandidate = p),
      (l.getOrgAdminGroupCandidates = _),
      (l.getOrgAdminGroupCandidateIdentityLabel = f),
      (l.getOrgAdminGroupCandidateProfileLID = g),
      (l.getOrgAdminGroupCandidateLID = h),
      (l.getOrgAdminGroupCandidateEmailAddress = y),
      (l.getOrgAdminGroupCandidateSecondaryMemberTag = C),
      (l.getOrgAdminGroupCandidateEmailInviteID = b),
      (l.orgAdminGroupCandidateMatchesQuery = v),
      (l.canAddOrgAdminGroupCandidate = S),
      (l.isCurrentUserOrgAdminRosterEntry = R),
      (l.normalizeOrgAdminRosterPhoneNumber = L),
      (l.normalizeOrgAdminRosterPhoneNumberInput = E),
      (l.isOrgAdminRosterPhoneNumberInputWithoutCountryCode = k));
  },
  98,
);
