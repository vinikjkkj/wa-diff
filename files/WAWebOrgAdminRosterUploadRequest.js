__d(
  "WAWebOrgAdminRosterUploadRequest",
  ["WAWebOrgAdminMemberTagOptions", "WAWebOrgAdminRosterUploadPlan"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = 1e5,
      u = { joined: [], removed: [], withoutEmail: [] },
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
        _ = l === "replace",
        h = _
          ? o(
              "WAWebOrgAdminRosterUploadPlan",
            ).getOrgAdminRosterUploadPeopleNotInFile(s, d)
          : u,
        C = s.added.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        b = s.updated.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        v = h.removed.filter(function (e) {
          var n = e.id;
          return !t.people.has(n);
        }),
        S = [].concat(C, b),
        R = S.length + v.length > 0,
        L = R ? l : "append",
        E = d.length - v.length + C.length,
        k = p(n),
        I = new Set(i),
        T = Array.from(
          new Set(
            S.flatMap(function (e) {
              var t = e.entry.memberTag;
              return t == null || I.has(t) ? [] : [t];
            }),
          ),
        ),
        D = n && T.length > 0;
      return {
        blocker: y({
          entryCount: E,
          maxEntryCount: k,
          memberTagCount: i.length + T.length,
          rosterStatus: m,
          savesMemberTags: D,
        }),
        counts: {
          added: C.length,
          notImported:
            s.incomplete.length + s.unnamed.length + s.repeated.length,
          removed: v.length,
          updated: b.length,
        },
        maxRosterEntries: k,
        memberTagNames: a,
        newMemberTags: T,
        notInFile: h,
        plan: s,
        request: {
          entries: S.map(function (e) {
            var t = e.entry;
            return t;
          }),
          inviteEmails: n
            ? C.flatMap(function (e) {
                var t = e.entry.emailAddress;
                return t == null ? [] : [t];
              })
            : [],
          memberTagNames: Object.keys(a).length === 0 ? void 0 : a,
          memberTagOptions: i,
          memberTagOptionsInUse: g(
            L,
            n,
            babelHelpers.extends({}, s, { added: C, updated: b }),
            d,
            v,
          ),
          mode: L,
          newMemberTagOptions: D ? T : [],
          removes: v,
          roster: d,
          updates: S.map(f),
        },
        rosterCount: E,
        rowNumbers: S.map(function (e) {
          var t = e.rowNumber;
          return t;
        }),
      };
    }
    function p(t) {
      return t ? e : s;
    }
    function _(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "person" &&
          "id" in t
        ) {
          var n = t.id;
          return babelHelpers.extends({}, e, { people: h(e.people, n) });
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "row" &&
          "rowNumber" in t
        ) {
          var r = t.rowNumber;
          return babelHelpers.extends({}, e, { rows: h(e.rows, r) });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function f(e) {
      var t,
        n,
        r,
        o = e.changes,
        a = e.entry,
        i = e.match;
      return i == null
        ? null
        : {
            id: i.id,
            lastName: o.includes("last_name")
              ? (t = a.lastName) != null
                ? t
                : ""
              : null,
            memberTag: o.includes("member_tag")
              ? (n = a.memberTag) != null
                ? n
                : ""
              : null,
            name: o.includes("name") ? a.name : null,
            phoneNumber: o.includes("phone") ? a.phoneNumber : null,
            secondaryMemberTag: o.includes("secondary_member_tag")
              ? (r = a.secondaryMemberTag) != null
                ? r
                : ""
              : null,
          };
    }
    function g(e, t, n, r, a) {
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
    function h(e, t) {
      var n = new Set(e);
      return (n.delete(t) || n.add(t), n);
    }
    function y(e) {
      var t = e.entryCount,
        n = e.maxEntryCount,
        r = e.memberTagCount,
        a = e.rosterStatus,
        i = e.savesMemberTags;
      return a !== "loaded"
        ? a === "truncated"
          ? "roster_truncated"
          : "roster_unavailable"
        : t > n
          ? "too_many_people"
          : i && r > o("WAWebOrgAdminMemberTagOptions").MAX_MEMBER_TAG_OPTIONS
            ? "too_many_member_tags"
            : null;
    }
    ((l.MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES = e),
      (l.MAX_HIDDEN_ORG_ADMIN_ROSTER_ENTRIES = s),
      (l.NO_ORG_ADMIN_ROSTER_UPLOAD_HOLDS = d),
      (l.getOrgAdminRosterUploadDraft = m),
      (l.getMaxOrgAdminRosterEntries = p),
      (l.toggleOrgAdminRosterUploadHold = _));
  },
  98,
);
