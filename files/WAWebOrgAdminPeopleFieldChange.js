__d(
  "WAWebOrgAdminPeopleFieldChange",
  [
    "fbt",
    "WAWebOrgAdminManagedRosterUtils",
    "WAWebOrgAdminPeople",
    "WAWebOrgAdminPersonEdit",
    "WAWebOrgAdminRosterUploadMessages",
    "WAWebOrgAdminRosterUploadPlan",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = [
        {
          field: "member_tag",
          values: o("WAWebOrgAdminPersonEdit").getOrgAdminPersonEditMemberTags(
            e,
            t,
          ),
        },
        {
          field: "secondary_member_tag",
          values: Array.from(
            new Set(
              t.flatMap(function (e) {
                var t = e.secondaryMemberTag;
                return t == null || t === "" ? [] : [t];
              }),
            ),
          ),
        },
      ];
      return n
        .filter(function (e) {
          var t = e.values;
          return t.length > 0;
        })
        .map(function (e) {
          var t = e.field,
            n = e.values;
          return {
            field: t,
            values: [].concat(n).sort(function (e, t) {
              return e.localeCompare(t);
            }),
          };
        });
    }
    function u(e, t, n) {
      var r = new Set(
          e.map(function (e) {
            var t = e.lid;
            return t;
          }),
        ),
        o = n.filter(function (e) {
          var t = e.memberLID;
          return t != null && r.has(t);
        }),
        a = new Set(
          o.map(function (e) {
            var t = e.memberLID;
            return t;
          }),
        ),
        i = e.filter(function (e) {
          var t = e.lid;
          return !a.has(t);
        }).length;
      return {
        entries: Array.from(
          new Map(
            [].concat(o, t).map(function (e) {
              return [e.id, e];
            }),
          ).values(),
        ),
        peopleCount: e.length - i + t.length,
        skippedCount: i,
      };
    }
    function c(e, t, n) {
      var r = e.field,
        a = e.values,
        i = o(
          "WAWebOrgAdminManagedRosterUtils",
        ).getWAWebOrgAdminRosterDetailsByMemberLID(n),
        l = new Map(
          a.map(function (e) {
            return [e, 0];
          }),
        ),
        s = [].concat(
          t.map(function (e) {
            return o("WAWebOrgAdminPeople").getOrgAdminMemberPerson(
              e,
              i.get(e.lid),
            );
          }),
          o(
            "WAWebOrgAdminManagedRosterUtils",
          ).getWAWebOrgAdminRosterOnlyEntries(!0, n, t, "", null),
        );
      for (var u of s) {
        var c = d(u, r),
          m = c == null ? null : l.get(c);
        c != null && m != null && l.set(c, m + 1);
      }
      return l;
    }
    function d(e, t) {
      return t === "member_tag" ? e.memberTag : e.secondaryMemberTag;
    }
    function m(e, t, n) {
      var r = e.memberDirectoryEnabled,
        a = e.memberTagOptions,
        i = e.roster,
        l = i.filter(function (e) {
          var t = e.id;
          return n.has(t);
        }),
        s =
          t === "member_tag" && r
            ? Array.from(new Set(n.values())).flatMap(function (e) {
                return e == null || a.includes(e) ? [] : [e];
              })
            : [];
      return {
        entries: l.map(o("WAWebOrgAdminRosterUploadPlan").toEntryInput),
        inviteEmails: [],
        memberTagOptions: a,
        mode: "append",
        newMemberTagOptions: s,
        removes: [],
        roster: i,
        updates: l.map(function (e) {
          var r = e.id;
          return h(r, t, n.get(r));
        }),
      };
    }
    function p(e, t) {
      var n =
        e === "member_tag"
          ? t == null
            ? void 0
            : t.memberTagName
          : t == null
            ? void 0
            : t.secondaryMemberTagName;
      return n != null
        ? s._(/*BTDS*/ "Change {field name}", [s._param("field name", n)])
        : e === "member_tag"
          ? s._(/*BTDS*/ "Change member tag")
          : s._(/*BTDS*/ "Change second member tag");
    }
    function _(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.status === "success"
        )
          return null;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.status === "network_changed"
        )
          return s._(
            /*BTDS*/ "People or member tags in this organization have changed. Try again.",
          );
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.status === "validation_error" &&
          "errorReason" in e
        ) {
          var n = e.errorReason;
          return o(
            "WAWebOrgAdminRosterUploadMessages",
          ).getRosterReplaceValidationMessage(n, null, null, t);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function f() {
      return s._(/*BTDS*/ "Couldn't save your changes. Try again.");
    }
    function g(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":"{field name} set to {value} for {number} people","_1":"{field name} set to {value} for 1 person"}',
        [
          s._plural(n, "number"),
          s._param("field name", e),
          s._param("value", t),
        ],
      );
    }
    function h(e, t, n) {
      return {
        id: e,
        lastName: null,
        memberTag: t === "member_tag" ? (n != null ? n : "") : null,
        name: null,
        phoneNumber: null,
        secondaryMemberTag:
          t === "secondary_member_tag" ? (n != null ? n : "") : null,
      };
    }
    ((l.getOrgAdminPeopleFieldChoices = e),
      (l.getOrgAdminPeopleFieldTarget = u),
      (l.getOrgAdminPeopleFieldCounts = c),
      (l.getOrgAdminPeopleFieldValue = d),
      (l.getOrgAdminPeopleFieldRequest = m),
      (l.getOrgAdminPeopleFieldChangeTitle = p),
      (l.getOrgAdminPeopleFieldSaveError = _),
      (l.getOrgAdminPeopleFieldSaveFailedMessage = f),
      (l.getOrgAdminPeopleFieldChangedMessage = g));
  },
  226,
);
