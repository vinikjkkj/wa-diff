__d(
  "WAWebOrgAdminRosterUploadRequest",
  ["WAWebOrgAdminMemberTagOptions", "WAWebOrgAdminRosterUploadPlan"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(e) {
      var t = e.memberDirectoryEnabled,
        n = e.memberTagOptions,
        r = e.plan,
        a = e.roster,
        i = e.rosterStatus,
        l = o(
          "WAWebOrgAdminRosterUploadPlan",
        ).getOrgAdminRosterUploadReplacement(r, a),
        s = new Set(n),
        c = [].concat(r.added, r.updated),
        d = Array.from(
          new Set(
            c.flatMap(function (e) {
              var t = e.entry.memberTag;
              return t == null || s.has(t) ? [] : [t];
            }),
          ),
        ),
        m = t && d.length > 0;
      return {
        blocker: u({
          entryCount: l.length,
          memberTagCount: n.length + d.length,
          rosterStatus: i,
          savesMemberTags: m,
        }),
        newMemberTags: d,
        plan: r,
        request: {
          entries: l.map(function (e) {
            var t = e.entry;
            return t;
          }),
          inviteEmails: r.added.flatMap(function (e) {
            var t = e.entry.emailAddress;
            return t == null ? [] : [t];
          }),
          memberTagOptions: n,
          newMemberTagOptions: m ? d : [],
          roster: a,
        },
        rowNumbers: l.map(function (e) {
          var t = e.rowNumber;
          return t;
        }),
      };
    }
    function u(t) {
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
      (l.getOrgAdminRosterUploadDraft = s));
  },
  98,
);
