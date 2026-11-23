__d(
  "WAWebOrgAdminRosterUploadText",
  [
    "fbt",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminMemberTagOptions",
    "WAWebOrgAdminRosterCSVParser",
    "WAWebPhoneUtils",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return [
        t
          ? s
              ._(/*BTDS*/ "", [
                s._param(
                  "row number",
                  r("intlNumUtils").formatNumber(e.rowNumber),
                ),
              ])
              .toString()
          : null,
        e.emailText,
        h(e.phoneText),
        e.memberTag,
        e.secondaryMemberTag,
      ]
        .filter(Boolean)
        .join(" \xB7 ");
    }
    function u(e) {
      return [
        e.added > 0
          ? s._(/*BTDS*/ "", [s._param("number of new people", e.added, [0])])
          : null,
        e.removed > 0
          ? s._(/*BTDS*/ "", [
              s._param("number of people removed", e.removed, [0]),
            ])
          : null,
        e.updated > 0
          ? s._(/*BTDS*/ "", [
              s._param("number of people updated", e.updated, [0]),
            ])
          : null,
        e.notImported > 0
          ? s._(/*BTDS*/ "", [s._plural(e.notImported, "number")])
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
          : s._(/*BTDS*/ "").toString();
    }
    function d(e, t) {
      return e === 0
        ? null
        : t > 0
          ? s._(/*BTDS*/ "", [s._plural(t, "number")]).toString()
          : s._(/*BTDS*/ "").toString();
    }
    function m(e) {
      return e.blocker === "roster_unavailable"
        ? s._(/*BTDS*/ "")
        : e.blocker === "roster_truncated"
          ? s._(/*BTDS*/ "", [
              s._param(
                "maximum people",
                r("intlNumUtils").formatNumberWithThousandDelimiters(
                  o("WAWebOrgAdminRosterCSVParser")
                    .MAX_ORG_ADMIN_ROSTER_DISPLAY_ROWS,
                  0,
                ),
              ),
            ])
          : e.blocker === "too_many_people"
            ? s._(/*BTDS*/ "", [
                s._param(
                  "maximum people",
                  r("intlNumUtils").formatNumberWithThousandDelimiters(
                    e.maxRosterEntries,
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
              ])
            : e.blocker === "too_many_member_tags"
              ? s._(/*BTDS*/ "", [
                  s._param(
                    "maximum member tags",
                    r("intlNumUtils").formatNumber(
                      o("WAWebOrgAdminMemberTagOptions").MAX_MEMBER_TAG_OPTIONS,
                    ),
                  ),
                  s._param(
                    "number of new member tags",
                    r("intlNumUtils").formatNumber(e.newMemberTags.length),
                  ),
                ])
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
          ? s._(/*BTDS*/ "").toString()
          : [
              e.added > 0
                ? s._(/*BTDS*/ "", [s._plural(e.added, "number")])
                : null,
              e.updated > 0
                ? s._(/*BTDS*/ "", [s._plural(e.updated, "number")])
                : null,
              e.removed > 0
                ? s._(/*BTDS*/ "", [
                    s._param("number of people removed", e.removed, [0]),
                  ])
                : null,
              t > 0 ? s._(/*BTDS*/ "", [s._plural(t, "number")]) : null,
            ]
              .filter(Boolean)
              .map(function (e) {
                return e.toString();
              })
              .join(" \xB7 ")
      );
    }
    function _(e) {
      var t = e.done,
        n = e.total,
        o = e.type;
      return o === "invites"
        ? f(t, n)
        : s._(/*BTDS*/ "", [
            s._plural(n, "number"),
            s._param(
              "saved count",
              r("intlNumUtils").formatNumberWithThousandDelimiters(t, 0),
            ),
            s._param(
              "change count",
              r("intlNumUtils").formatNumberWithThousandDelimiters(n, 0),
            ),
          ]);
    }
    function f(e, t) {
      return s._(/*BTDS*/ "", [
        s._plural(t, "number"),
        s._param(
          "sent count",
          r("intlNumUtils").formatNumberWithThousandDelimiters(e, 0),
        ),
        s._param(
          "invite count",
          r("intlNumUtils").formatNumberWithThousandDelimiters(t, 0),
        ),
      ]);
    }
    function g(e) {
      var t = o(
        "WAWebOrgAdminGroupCandidate",
      ).normalizeOrgAdminRosterPhoneNumber(e);
      return t == null ? e : o("WAWebPhoneUtils").formatPhone(t);
    }
    function h(e) {
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
      (l.getOrgAdminRosterUploadProgressLabel = _),
      (l.formatOrgAdminRosterUploadPhone = g));
  },
  226,
);
