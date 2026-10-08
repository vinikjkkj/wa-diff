__d(
  "WAWebOrgAdminRosterUploadText",
  [
    "fbt",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminMemberTagOptions",
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
        e.emailText === "" ? s._(/*BTDS*/ "no email").toString() : e.emailText,
        e.phoneText === ""
          ? s._(/*BTDS*/ "no phone").toString()
          : p(e.phoneText),
        e.memberTag,
      ]
        .filter(Boolean)
        .join(" \xB7 ");
    }
    function u(e) {
      var t = e.unnamed.length + e.repeated.length;
      return [
        e.incomplete.length > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} rows missing an email or phone won\'t be added","_1":"1 row missing an email or phone won\'t be added"}',
              [s._plural(e.incomplete.length, "number")],
            )
          : null,
        t > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} rows will be left out","_1":"1 row will be left out"}',
              [s._plural(t, "number")],
            )
          : null,
        e.incomplete.length + t === 0
          ? s._(/*BTDS*/ "Every row is ready")
          : null,
        e.added.length > 0
          ? s._(/*BTDS*/ '_j{"*":"{number} new","_1":"1 new"}', [
              s._plural(e.added.length, "number"),
            ])
          : null,
        e.updated.length > 0
          ? s._(/*BTDS*/ '_j{"*":"{number} updated","_1":"1 updated"}', [
              s._plural(e.updated.length, "number"),
            ])
          : null,
      ]
        .filter(Boolean)
        .map(function (e) {
          return e.toString();
        })
        .join(" \xB7 ");
    }
    function c(e) {
      return e > 0
        ? s
            ._(
              /*BTDS*/ '_j{"*":"{number} organization invites go out","_1":"1 organization invite goes out"}',
              [s._plural(e, "number")],
            )
            .toString()
        : s._(/*BTDS*/ "No invites go out").toString();
    }
    function d(e) {
      return e.blocker === "roster_unavailable"
        ? s._(
            /*BTDS*/ "This organization's people didn't load, so it can't take an upload right now. Close Upload CSV and try again.",
          )
        : e.blocker === "roster_truncated"
          ? s._(
              /*BTDS*/ "This organization has more than {maximum people} people, so it can't take an upload.",
              [
                s._param(
                  "maximum people",
                  r("intlNumUtils").formatNumber(
                    o("WAWebOrgAdminRosterUploadRequest")
                      .MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES,
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
                    r("intlNumUtils").formatNumber(
                      o("WAWebOrgAdminRosterUploadRequest")
                        .MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES,
                    ),
                  ),
                  s._param(
                    "number of people",
                    r("intlNumUtils").formatNumber(e.request.entries.length),
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
    function m(e, t, n) {
      return [
        e.added.length > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} people added","_1":"1 person added"}',
              [s._plural(e.added.length, "number")],
            )
          : null,
        e.updated.length > 0
          ? s._(/*BTDS*/ '_j{"*":"{number} updated","_1":"1 updated"}', [
              s._plural(e.updated.length, "number"),
            ])
          : null,
        t > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} invites sent","_1":"1 invite sent"}',
              [s._plural(t, "number")],
            )
          : null,
        n > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} invites didn\'t go out; resend from Invite members","_1":"1 invite didn\'t go out; resend from Invite members"}',
              [s._plural(n, "number")],
            )
          : null,
      ]
        .filter(Boolean)
        .map(function (e) {
          return e.toString();
        })
        .join(" \xB7 ");
    }
    function p(e) {
      var t = o(
        "WAWebOrgAdminGroupCandidate",
      ).normalizeOrgAdminRosterPhoneNumber(e);
      return t == null ? e : o("WAWebPhoneUtils").formatPhone(t);
    }
    ((l.getOrgAdminRosterUploadRowDetail = e),
      (l.getOrgAdminRosterUploadReviewFootnote = u),
      (l.getOrgAdminRosterUploadInviteFootnote = c),
      (l.getOrgAdminRosterUploadBlockerMessage = d),
      (l.getOrgAdminRosterUploadSuccessMessage = m),
      (l.formatOrgAdminRosterUploadPhone = p));
  },
  226,
);
