__d(
  "WAWebOrgAdminRosterUploadRequest",
  ["WAWebOrgAdminMemberTagOptions", "WAWebOrgAdminRosterUploadPlan"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = 1e3,
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
        _ = p
          ? o(
              "WAWebOrgAdminRosterUploadPlan",
            ).getOrgAdminRosterUploadPeopleNotInFile(s, d)
          : u,
        g = s.added.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        h = s.updated.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        y = _.removed.filter(function (e) {
          var n = e.id;
          return !t.people.has(n);
        }),
        C = [].concat(g, h),
        b = C.length + y.length > 0,
        v =
          p && b
            ? o(
                "WAWebOrgAdminRosterUploadPlan",
              ).getOrgAdminRosterUploadReplacement(
                babelHelpers.extends({}, s, { added: g, updated: h }),
                d,
                y,
              )
            : C.map(function (e) {
                var t = e.entry,
                  n = e.rowNumber;
                return { entry: t, rowNumber: n };
              }),
        S = d.length - y.length + g.length,
        R = new Set(i),
        L = Array.from(
          new Set(
            C.flatMap(function (e) {
              var t = e.entry.memberTag;
              return t == null || R.has(t) ? [] : [t];
            }),
          ),
        ),
        E = n && L.length > 0;
      return {
        blocker: f({
          entryCount: S,
          memberTagCount: i.length + L.length,
          rosterStatus: m,
          savesMemberTags: E,
        }),
        counts: {
          added: g.length,
          notImported:
            s.incomplete.length + s.unnamed.length + s.repeated.length,
          removed: y.length,
          updated: h.length,
        },
        memberTagNames: a,
        newMemberTags: L,
        notInFile: _,
        plan: s,
        request: {
          entries: v.map(function (e) {
            var t = e.entry;
            return t;
          }),
          inviteEmails: n
            ? g.flatMap(function (e) {
                var t = e.entry.emailAddress;
                return t == null ? [] : [t];
              })
            : [],
          memberTagNames: Object.keys(a).length === 0 ? void 0 : a,
          memberTagOptions: i,
          mode: b ? l : "append",
          newMemberTagOptions: E ? L : [],
          roster: d,
        },
        rosterCount: S,
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
          return babelHelpers.extends({}, e, { people: _(e.people, n) });
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "row" &&
          "rowNumber" in t
        ) {
          var r = t.rowNumber;
          return babelHelpers.extends({}, e, { rows: _(e.rows, r) });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function _(e, t) {
      var n = new Set(e);
      return (n.delete(t) || n.add(t), n);
    }
    function f(t) {
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
      (l.MAX_ORG_ADMIN_ROSTER_APPEND_ENTRIES = s),
      (l.NO_ORG_ADMIN_ROSTER_UPLOAD_HOLDS = d),
      (l.getOrgAdminRosterUploadDraft = m),
      (l.toggleOrgAdminRosterUploadHold = p));
  },
  98,
);
