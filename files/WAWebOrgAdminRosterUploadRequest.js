__d(
  "WAWebOrgAdminRosterUploadRequest",
  ["WAWebOrgAdminMemberTagOptions", "WAWebOrgAdminRosterUploadPlan"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = 5e3,
      u = { joined: [], removed: [] },
      c = {},
      d = { people: new Set(), rows: new Set() };
    function m(e) {
      var t = e.holds,
        n = e.memberDirectoryEnabled,
        r = e.memberTagNames,
        a = r === void 0 ? c : r,
        i = e.memberTagOptions,
        l = e.mode,
        s = e.plan,
        d = e.roster,
        m = e.rosterStatus,
        p = l === "replace",
        g = p
          ? o(
              "WAWebOrgAdminRosterUploadPlan",
            ).getOrgAdminRosterUploadPeopleNotInFile(s, d)
          : u,
        y = s.added.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        C = s.updated.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        b = g.removed.filter(function (e) {
          var n = e.id;
          return !t.people.has(n);
        }),
        v = [].concat(y, C),
        S = v.length + b.length > 0,
        R = S ? l : "append",
        L = d.length - b.length + y.length,
        E = new Set(i),
        k = Array.from(
          new Set(
            v.flatMap(function (e) {
              var t = e.entry.memberTag;
              return t == null || E.has(t) ? [] : [t];
            }),
          ),
        ),
        I = n && k.length > 0;
      return {
        blocker: h({
          entryCount: L,
          memberTagCount: i.length + k.length,
          rosterStatus: m,
          savesMemberTags: I,
        }),
        counts: {
          added: y.length,
          notImported:
            s.incomplete.length + s.unnamed.length + s.repeated.length,
          removed: b.length,
          updated: C.length,
        },
        memberTagNames: a,
        newMemberTags: k,
        notInFile: g,
        plan: s,
        request: {
          entries: v.map(function (e) {
            var t = e.entry;
            return t;
          }),
          inviteEmails: n
            ? y.flatMap(function (e) {
                var t = e.entry.emailAddress;
                return t == null ? [] : [t];
              })
            : [],
          memberTagNames: Object.keys(a).length === 0 ? void 0 : a,
          memberTagOptions: i,
          memberTagOptionsInUse: f(
            R,
            n,
            babelHelpers.extends({}, s, { added: y, updated: C }),
            d,
            b,
          ),
          mode: R,
          newMemberTagOptions: I ? k : [],
          removes: b,
          roster: d,
          updates: v.map(_),
        },
        rosterCount: L,
        rowNumbers: v.map(function (e) {
          var t = e.rowNumber;
          return t;
        }),
      };
    }
    function p(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "person" &&
          "id" in t
        ) {
          var n = t.id;
          return babelHelpers.extends({}, e, { people: g(e.people, n) });
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "row" &&
          "rowNumber" in t
        ) {
          var r = t.rowNumber;
          return babelHelpers.extends({}, e, { rows: g(e.rows, r) });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function _(e) {
      var t,
        n,
        r = e.changes,
        o = e.entry,
        a = e.match;
      return a == null
        ? null
        : {
            id: a.id,
            memberTag: r.includes("member_tag")
              ? (t = o.memberTag) != null
                ? t
                : ""
              : null,
            name: r.includes("name") ? o.name : null,
            phoneNumber: r.includes("phone") ? o.phoneNumber : null,
            secondaryMemberTag: r.includes("secondary_member_tag")
              ? (n = o.secondaryMemberTag) != null
                ? n
                : ""
              : null,
          };
    }
    function f(e, t, n, r, a) {
      if (!(e !== "replace" || t))
        return Array.from(
          new Set(
            o("WAWebOrgAdminMemberTagOptions").normalizeMemberTagOptions(
              o("WAWebOrgAdminRosterUploadPlan")
                .getOrgAdminRosterUploadReplacement(n, r, a)
                .flatMap(function (e) {
                  var t = e.entry.memberTag;
                  return t == null ? [] : [t];
                }),
            ),
          ),
        );
    }
    function g(e, t) {
      var n = new Set(e);
      return (n.delete(t) || n.add(t), n);
    }
    function h(t) {
      var n = t.entryCount,
        r = t.memberTagCount,
        a = t.rosterStatus,
        i = t.savesMemberTags;
      return a !== "loaded"
        ? a === "truncated"
          ? "roster_truncated"
          : "roster_unavailable"
        : n > e
          ? "too_many_people"
          : i && r > o("WAWebOrgAdminMemberTagOptions").MAX_MEMBER_TAG_OPTIONS
            ? "too_many_member_tags"
            : null;
    }
    ((l.MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES = e),
      (l.MAX_ORG_ADMIN_ROSTER_CHANGE_OPERATIONS = s),
      (l.NO_ORG_ADMIN_ROSTER_UPLOAD_HOLDS = d),
      (l.getOrgAdminRosterUploadDraft = m),
      (l.toggleOrgAdminRosterUploadHold = p));
  },
  98,
);
