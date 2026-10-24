__d(
  "WAWebOrgAdminRosterUploadText",
  [
    "fbt",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminMemberTagOptions",
    "WAWebOrgAdminRosterCSVParser",
    "WAWebOrgAdminRosterUploadRequest",
    "WAWebPhoneUtils",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return [
        t
          ? s
              ._(/*BTDS*/ "Row {row number}", [
                s._param(
                  "row number",
                  r("intlNumUtils").formatNumber(e.rowNumber),
                ),
              ])
              .toString()
          : null,
        e.emailText,
        f(e.phoneText),
        e.memberTag,
        e.secondaryMemberTag,
      ]
        .filter(Boolean)
        .join(" \xB7 ");
    }
    function u(e) {
      return [
        e.added > 0
          ? s._(/*BTDS*/ '_j{"*":"Adding {number of new people}"}', [
              s._param("number of new people", e.added, [0]),
            ])
          : null,
        e.removed > 0
          ? s._(/*BTDS*/ '_j{"*":"Removing {number of people removed}"}', [
              s._param("number of people removed", e.removed, [0]),
            ])
          : null,
        e.updated > 0
          ? s._(/*BTDS*/ '_j{"*":"Updating {number of people updated}"}', [
              s._param("number of people updated", e.updated, [0]),
            ])
          : null,
        e.notImported > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} rows not imported","_1":"1 row not imported"}',
              [s._plural(e.notImported, "number")],
            )
          : null,
      ]
        .filter(Boolean)
        .map(function (e) {
          return e.toString();
        })
        .join(" \u2022 ");
    }
    function c(e, t) {
      return e.removed + e.updated > 0
        ? u(e)
        : e.added > 0 || t
          ? null
          : s._(/*BTDS*/ "Nothing new in this file").toString();
    }
    function d(e, t) {
      return e === 0
        ? null
        : t > 0
          ? s
              ._(
                /*BTDS*/ '_j{"*":"Confirm to send {number} invites.","_1":"Confirm to send 1 invite."}',
                [s._plural(t, "number")],
              )
              .toString()
          : s
              ._(/*BTDS*/ "Confirming will not send anything to members.")
              .toString();
    }
    function m(e) {
      return e.blocker === "roster_unavailable"
        ? s._(
            /*BTDS*/ "This organization's people didn't load, so it can't take an upload right now. Close Add people and try again.",
          )
        : e.blocker === "roster_truncated"
          ? s._(
              /*BTDS*/ "This organization has more than {maximum people} people, so it can't take an upload.",
              [
                s._param(
                  "maximum people",
                  r("intlNumUtils").formatNumberWithThousandDelimiters(
                    o("WAWebOrgAdminRosterCSVParser")
                      .MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS,
                    0,
                  ),
                ),
              ],
            )
          : e.blocker === "too_many_people"
            ? s._(
                /*BTDS*/ "An organization can have up to {maximum people} people after an upload, and this file would make it {number of people}. Remove some rows from the file, then upload it again.",
                [
                  s._param(
                    "maximum people",
                    r("intlNumUtils").formatNumberWithThousandDelimiters(
                      o("WAWebOrgAdminRosterUploadRequest")
                        .MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES,
                      0,
                    ),
                  ),
                  s._param(
                    "number of people",
                    r("intlNumUtils").formatNumberWithThousandDelimiters(
                      e.rosterCount,
                      0,
                    ),
                  ),
                ],
              )
            : e.blocker === "too_many_member_tags"
              ? s._(
                  /*BTDS*/ "An organization can have up to {maximum member tags} member tags, and this file would add {number of new member tags}. Go back to merge values that look alike, or don't import the member tag column.",
                  [
                    s._param(
                      "maximum member tags",
                      r("intlNumUtils").formatNumber(
                        o("WAWebOrgAdminMemberTagOptions")
                          .MAX_MEMBER_TAG_OPTIONS,
                      ),
                    ),
                    s._param(
                      "number of new member tags",
                      r("intlNumUtils").formatNumber(e.newMemberTags.length),
                    ),
                  ],
                )
              : e.blocker === null || e.blocker === void 0
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e.blocker,
                    );
                  })();
    }
    function p(e, t, n) {
      return (
        n === void 0 && (n = !1),
        e.added + e.updated + e.removed === 0 && n
          ? s._(/*BTDS*/ "Member tag names saved").toString()
          : [
              e.added > 0
                ? s._(
                    /*BTDS*/ '_j{"*":"{number} people added","_1":"1 person added"}',
                    [s._plural(e.added, "number")],
                  )
                : null,
              e.updated > 0
                ? s._(/*BTDS*/ '_j{"*":"{number} updated","_1":"1 updated"}', [
                    s._plural(e.updated, "number"),
                  ])
                : null,
              e.removed > 0
                ? s._(/*BTDS*/ '_j{"*":"{number of people removed} removed"}', [
                    s._param("number of people removed", e.removed, [0]),
                  ])
                : null,
              t > 0
                ? s._(
                    /*BTDS*/ '_j{"*":"{number} invites didn\'t go out; resend from People","_1":"1 invite didn\'t go out; resend from People"}',
                    [s._plural(t, "number")],
                  )
                : null,
            ]
              .filter(Boolean)
              .map(function (e) {
                return e.toString();
              })
              .join(" \xB7 ")
      );
    }
    function _(e) {
      var t = o(
        "WAWebOrgAdminGroupCandidate",
      ).normalizeOrgAdminRosterPhoneNumber(e);
      return t == null ? e : o("WAWebPhoneUtils").formatPhone(t);
    }
    function f(e) {
      var t = o(
        "WAWebOrgAdminGroupCandidate",
      ).normalizeOrgAdminRosterPhoneNumberInput(e);
      return t == null ? e : o("WAWebPhoneUtils").formatPhone(t);
    }
    ((l.getOrgAdminRosterUploadRowDetail = e),
      (l.getOrgAdminRosterUploadSummary = u),
      (l.getOrgAdminRosterUploadReviewFootnote = c),
      (l.getOrgAdminRosterUploadInviteFootnote = d),
      (l.getOrgAdminRosterUploadBlockerMessage = m),
      (l.getOrgAdminRosterUploadSuccessMessage = p),
      (l.formatOrgAdminRosterUploadPhone = _));
  },
  226,
);
