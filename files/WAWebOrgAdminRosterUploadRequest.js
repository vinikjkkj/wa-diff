__d(
  "WAWebOrgAdminRosterUploadRequest",
  ["WAWebOrgAdminMemberTagOptions", "WAWebOrgAdminRosterUploadPlan"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = 1e3,
      u = { joined: [], removed: [] },
      c = { people: new Set(), rows: new Set() };
    function d(e) {
      var t = e.holds,
        n = e.memberDirectoryEnabled,
        r = e.memberTagOptions,
        a = e.mode,
        i = e.plan,
        l = e.roster,
        s = e.rosterStatus,
        c = a === "replace",
        d = c
          ? o(
              "WAWebOrgAdminRosterUploadPlan",
            ).getOrgAdminRosterUploadPeopleNotInFile(i, l)
          : u,
        m = i.added.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        p = i.updated.filter(function (e) {
          var n = e.rowNumber;
          return !t.rows.has(n);
        }),
        f = d.removed.filter(function (e) {
          var n = e.id;
          return !t.people.has(n);
        }),
        g = [].concat(m, p),
        h = c
          ? o(
              "WAWebOrgAdminRosterUploadPlan",
            ).getOrgAdminRosterUploadReplacement(
              babelHelpers.extends({}, i, { added: m, updated: p }),
              l,
              f,
            )
          : g.map(function (e) {
              var t = e.entry,
                n = e.rowNumber;
              return { entry: t, rowNumber: n };
            }),
        y = l.length - f.length + m.length,
        C = new Set(r),
        b = Array.from(
          new Set(
            g.flatMap(function (e) {
              var t = e.entry.memberTag;
              return t == null || C.has(t) ? [] : [t];
            }),
          ),
        ),
        v = n && b.length > 0;
      return {
        blocker: _({
          entryCount: y,
          memberTagCount: r.length + b.length,
          rosterStatus: s,
          savesMemberTags: v,
        }),
        counts: {
          added: m.length,
          notImported:
            i.incomplete.length + i.unnamed.length + i.repeated.length,
          removed: f.length,
          updated: p.length,
        },
        newMemberTags: b,
        notInFile: d,
        plan: i,
        request: {
          entries: h.map(function (e) {
            var t = e.entry;
            return t;
          }),
          inviteEmails: n
            ? m.flatMap(function (e) {
                var t = e.entry.emailAddress;
                return t == null ? [] : [t];
              })
            : [],
          memberTagOptions: r,
          mode: a,
          newMemberTagOptions: v ? b : [],
          roster: l,
        },
        rosterCount: y,
        rowNumbers: h.map(function (e) {
          var t = e.rowNumber;
          return t;
        }),
      };
    }
    function m(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "person" &&
          "id" in t
        ) {
          var n = t.id;
          return babelHelpers.extends({}, e, { people: p(e.people, n) });
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "row" &&
          "rowNumber" in t
        ) {
          var r = t.rowNumber;
          return babelHelpers.extends({}, e, { rows: p(e.rows, r) });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function p(e, t) {
      var n = new Set(e);
      return (n.delete(t) || n.add(t), n);
    }
    function _(t) {
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
      (l.NO_ORG_ADMIN_ROSTER_UPLOAD_HOLDS = c),
      (l.getOrgAdminRosterUploadDraft = d),
      (l.toggleOrgAdminRosterUploadHold = m));
  },
  98,
);
