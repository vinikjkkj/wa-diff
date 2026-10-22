__d(
  "WAWebOrgAdminPersonEdit",
  [
    "fbt",
    "WAWebOrgAdminMemberTagOptions",
    "WAWebOrgAdminPeople",
    "WAWebOrgAdminRosterUploadMessages",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t;
      return (
        e.member == null &&
        e.lid == null &&
        ((t = e.emailAddress) != null ? t : "") !== ""
      );
    }
    function u(e, t) {
      var n = new Set(
          e.map(o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption),
        ),
        r = new Map();
      for (var a of t) {
        var i = a.memberTag;
        if (i != null) {
          var l = o(
            "WAWebOrgAdminMemberTagOptions",
          ).getCanonicalMemberTagOption(i);
          !n.has(l) &&
            !r.has(l) &&
            r.set(
              l,
              o("WAWebOrgAdminMemberTagOptions").normalizeMemberTagOption(i),
            );
        }
      }
      return [].concat(
        e,
        Array.from(r.values()).sort(function (e, t) {
          return e.localeCompare(t);
        }),
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a =
              (r = o("WAWebOrgAdminPeople").getOrgAdminPersonRosterEntry(
                t,
                e.roster,
              )) == null
                ? void 0
                : r.emailAddress;
          if (a == null) return p();
          try {
            var i = yield e.upload({
              entries: [babelHelpers.extends({}, n, { emailAddress: a })],
              inviteEmails: [],
              memberTagOptions: e.memberTagOptions,
              mode: "append",
              newMemberTagOptions: _(e, n.memberTag),
              roster: e.roster,
            });
            return m(i, e.showSuccessToast);
          } catch (e) {
            return p();
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.status === "success"
        ) {
          return (t(s._(/*BTDS*/ "Changes saved").toString()), null);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.status === "network_changed"
        )
          return s._(
            /*BTDS*/ "People or member tags in this organization have changed. Try again.",
          );
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.status === "validation_error" &&
          "errorReason" in n
        ) {
          var r = n.errorReason;
          return o(
            "WAWebOrgAdminRosterUploadMessages",
          ).getRosterReplaceValidationMessage(r, null, null);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function p() {
      return s._(/*BTDS*/ "Couldn't save your changes. Try again.");
    }
    function _(e, t) {
      var n = e.memberDirectoryEnabled,
        r = e.memberTagOptions;
      return n && t != null && !r.includes(t) ? [t] : [];
    }
    ((l.canEditOrgAdminPerson = e),
      (l.getOrgAdminPersonEditMemberTags = u),
      (l.saveOrgAdminPerson = c));
  },
  226,
);
