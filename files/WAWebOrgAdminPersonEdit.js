__d(
  "WAWebOrgAdminPersonEdit",
  [
    "fbt",
    "WALogger",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminMemberTagOptions",
    "WAWebOrgAdminPeople",
    "WAWebOrgAdminRosterUploadMessages",
    "WAWebOrgAdminRosterUploadRequest",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      var t;
      return (
        e.member == null &&
        e.lid == null &&
        ((t = e.emailAddress) != null ? t : "") !== ""
      );
    }
    function c(e, t) {
      return m(
        e,
        t.map(function (e) {
          var t = e.memberTag;
          return t;
        }),
      );
    }
    function d(e) {
      return m(
        [],
        e.map(function (e) {
          var t = e.secondaryMemberTag;
          return t;
        }),
      );
    }
    function m(e, t) {
      var n = new Set(
          e.map(o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption),
        ),
        r = new Map();
      for (var a of t)
        if (a != null) {
          var i = o(
            "WAWebOrgAdminMemberTagOptions",
          ).getCanonicalMemberTagOption(a);
          !n.has(i) &&
            !r.has(i) &&
            r.set(
              i,
              o("WAWebOrgAdminMemberTagOptions").normalizeMemberTagOption(a),
            );
        }
      return [].concat(
        e,
        Array.from(r.values()).sort(function (e, t) {
          return e.localeCompare(t);
        }),
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebOrgAdminPeople").getOrgAdminPersonRosterEntry(
              t,
              e.roster,
            ),
            a = r == null ? void 0 : r.emailAddress;
          if (r == null || a == null) return C();
          try {
            var i = yield e.upload({
              entries: [babelHelpers.extends({}, n, { emailAddress: a })],
              inviteEmails: [],
              memberTagOptions: e.memberTagOptions,
              mode: "append",
              newMemberTagOptions: S(e, n.memberTag),
              removes: [],
              roster: e.roster,
              updates: [b(r, n)],
            });
            return y(
              i,
              function () {
                return e.showSuccessToast(
                  s._(/*BTDS*/ "Changes saved").toString(),
                );
              },
              o("WAWebOrgAdminRosterUploadRequest").getMaxOrgAdminRosterEntries(
                e.memberDirectoryEnabled,
              ),
            );
          } catch (e) {
            return C();
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = o(
            "WAWebOrgAdminRosterUploadRequest",
          ).getMaxOrgAdminRosterEntries(t.memberDirectoryEnabled);
          if (t.roster.length >= i)
            return s._(
              /*BTDS*/ "An organization can have up to {maximum people} people.",
              [
                s._param(
                  "maximum people",
                  r("intlNumUtils").formatNumberWithThousandDelimiters(i, 0),
                ),
              ],
            );
          try {
            var l = yield t.upload({
              entries: [v(n)],
              inviteEmails: t.memberDirectoryEnabled ? [n.emailAddress] : [],
              memberTagOptions: t.memberTagOptions,
              mode: "append",
              newMemberTagOptions: S(t, n.memberTag),
              removes: [],
              roster: t.roster,
              updates: [null],
            });
            return y(l, a, i);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] adding a person failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-admin-add-person-failed"),
              C()
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = t.trim().toLowerCase();
      return e.find(function (e) {
        var t;
        return (
          ((t = e.emailAddress) == null ? void 0 : t.trim().toLowerCase()) === n
        );
      });
    }
    function y(e, t, n) {
      e: {
        var r = e;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.status === "success" &&
          "invitedCount" in r
        ) {
          var a = r.invitedCount;
          return (t(a), null);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.status === "network_changed"
        )
          return s._(
            /*BTDS*/ "People or member tags in this organization have changed. Try again.",
          );
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.status === "validation_error" &&
          "errorReason" in r
        ) {
          var i = r.errorReason;
          return o(
            "WAWebOrgAdminRosterUploadMessages",
          ).getRosterReplaceValidationMessage(i, null, null, n);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function C() {
      return s._(/*BTDS*/ "Couldn't save your changes. Try again.");
    }
    function b(e, t) {
      var n,
        r,
        a = t.lastName,
        i = t.memberTag,
        l = t.name,
        s = t.phoneNumber;
      return {
        id: e.id,
        lastName: a === ((n = e.lastName) != null ? n : "") ? null : a,
        memberTag:
          (i != null ? i : null) === ((r = e.memberTag) != null ? r : null)
            ? null
            : i != null
              ? i
              : "",
        name: l === e.name ? null : l,
        phoneNumber:
          s ===
          o("WAWebOrgAdminGroupCandidate").normalizeOrgAdminRosterPhoneNumber(
            e.phoneNumber,
          )
            ? null
            : s,
        secondaryMemberTag: null,
      };
    }
    function v(e) {
      var t = e.emailAddress,
        n = e.lastName,
        r = e.memberTag,
        o = e.name,
        a = e.phoneNumber,
        i = e.secondaryMemberTag,
        l = {
          emailAddress: t,
          lastName: n === "" ? null : n,
          memberTag: r,
          name: o,
          phoneNumber: a,
        };
      return i == null
        ? l
        : babelHelpers.extends({}, l, { secondaryMemberTag: i });
    }
    function S(e, t) {
      var n = e.memberDirectoryEnabled,
        r = e.memberTagOptions;
      return n && t != null && !r.includes(t) ? [t] : [];
    }
    ((l.canEditOrgAdminPerson = u),
      (l.getOrgAdminPersonEditMemberTags = c),
      (l.getOrgAdminPersonEditSecondaryMemberTags = d),
      (l.saveOrgAdminPerson = p),
      (l.addOrgAdminPerson = f),
      (l.findOrgAdminRosterEntryByEmail = h));
  },
  226,
);
