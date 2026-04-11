__d(
  "WAWebFormatLinkNotification",
  [
    "fbt",
    "WALogger",
    "WAWebFormatParticipantNames",
    "WAWebPairList",
    "WAWebStringsWithMultiplePluralParts",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = function (t) {
        return (
          t instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(t)
        );
      };
    function S(e) {
      return !e;
    }
    function R(e, t, n, r) {
      return L(e, t, n, r, !1);
    }
    function L(t, n, r, a, i) {
      var l = n
          ? o("WAWebFormatParticipantNames").getFormattedName(n, i, t)
          : null,
        s = r ? o("WAWebFormatParticipantNames").getFormattedName(r, i) : null;
      switch (t) {
        case "parent_group_link":
          return M(a, i, n, l);
        case "sibling_group_link":
          return w(a, i, n, l, t);
        case "sub_group_link":
          break;
        case "parent_group_unlink":
          return N(a, i, n, l);
        case "integrity_parent_group_unlink":
          return P(a, i);
        case "delete_parent_group_unlink":
        case "delete_parent_group":
          return $(a, l, n, i);
        case "sibling_group_unlink":
          return A(a, i, n, l);
        case "sub_group_unlink":
          break;
        case "community_create":
          return F(a, i, n, l);
        case "linked_group_join":
          return O(r, s);
        case "auto_add":
        case "default_sub_group_admin_add":
          return B(a, i, l);
        case "invite_auto_add":
          return W(a, i, r, s);
        default:
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "wa:formatLinkNotification:unknown message subtype: ",
                "",
              ])),
            t,
          );
          break;
      }
    }
    function E(e) {
      return s._(/*BTDS*/ 'You created the community "{community_name}"', [
        s._param("community_name", e),
      ]);
    }
    function k() {
      return s._(/*BTDS*/ "You created the community");
    }
    function I(e, t) {
      return s._(/*BTDS*/ '{author} created the community "{community_name}"', [
        s._param("author", e),
        s._param("community_name", t),
      ]);
    }
    function T(e) {
      return s._(/*BTDS*/ "{author} created the community", [
        s._param("author", e),
      ]);
    }
    function D(e) {
      return s._(/*BTDS*/ 'The community "{community_name}" was created', [
        s._param("community_name", e),
      ]);
    }
    function x() {
      return s._(/*BTDS*/ "The community was created");
    }
    function $(e, t, n, r) {
      var a;
      return (
        e[0] != null &&
          typeof e[0] == "string" &&
          !S(e[0]) &&
          (a = o(
            "WAWebFormatParticipantNames",
          ).getClickableDeactivatedCommunityName(e[0], r)),
        a != null && t != null
          ? v(n)
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "generateDeleteParentGroupNotification: deactivate, isMe",
                  ])),
              ),
              s._(/*BTDS*/ "You deactivated the community {community}", [
                s._param(
                  "community",
                  o(
                    "WAWebFormatParticipantNames",
                  ).getCommunityNameInQuotationMarks(a, !r),
                ),
              ]))
            : (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "generateDeleteParentGroupNotification: deactivate, !isMe",
                  ])),
              ),
              s._(/*BTDS*/ "{author} deactivated the community {community}", [
                s._param("author", t),
                s._param(
                  "community",
                  o(
                    "WAWebFormatParticipantNames",
                  ).getCommunityNameInQuotationMarks(a, !r),
                ),
              ]))
          : v(n)
            ? s._(/*BTDS*/ "You deactivated a community")
            : t != null
              ? s._(/*BTDS*/ "{author} deactivated a community", [
                  s._param("author", t),
                ])
              : s._(/*BTDS*/ "A community was deactivated")
      );
    }
    function P(e, t) {
      var n = o(
        "WAWebFormatParticipantNames",
      ).getClickableIntegrityDeactivateCommunityName(e[0], e[1], t, !0);
      return n != null
        ? (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "generateIntegrityParentGroupUnlinkNotification",
              ])),
          ),
          s._(
            /*BTDS*/ "This group is no longer part of the community {community}",
            [
              s._param(
                "community",
                o(
                  "WAWebFormatParticipantNames",
                ).getCommunityNameInQuotationMarks(n, !t),
              ),
            ],
          ))
        : s._(/*BTDS*/ "This group is no longer part of a community");
    }
    function N(e, t, n, r) {
      var a = babelHelpers.arrayLikeToArray(e).slice(0),
        i = o(
          "WAWebFormatParticipantNames",
        ).getFormattedCommunityNameWithAlternative({
          jid: a[0],
          asString: !t,
          alternativeStringName: a[1],
        });
      return i != null && v(n)
        ? (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupUnlinkNotification, I am author",
              ])),
          ),
          s._(
            /*BTDS*/ "You removed this group from the community {community}",
            [
              s._param(
                "community",
                o(
                  "WAWebFormatParticipantNames",
                ).getCommunityNameInQuotationMarks(i, !t),
              ),
            ],
          ))
        : i == null && v(n)
          ? s._(/*BTDS*/ "You removed this group from a community")
          : i != null && n != null
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "generateParentGroupUnlinkNotification, I am not author",
                  ])),
              ),
              s._(
                /*BTDS*/ "{author} removed this group from the community {community}",
                [
                  s._param("author", r),
                  s._param(
                    "community",
                    o(
                      "WAWebFormatParticipantNames",
                    ).getCommunityNameInQuotationMarks(i, !t),
                  ),
                ],
              ))
            : i != null && n == null
              ? (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "generateParentGroupUnlinkNotification, no author",
                    ])),
                ),
                s._(
                  /*BTDS*/ "This group was removed from the community {community}",
                  [
                    s._param(
                      "community",
                      o(
                        "WAWebFormatParticipantNames",
                      ).getCommunityNameInQuotationMarks(i, !t),
                    ),
                  ],
                ))
              : i == null && n != null
                ? s._(/*BTDS*/ "{author} removed this group from a community", [
                    s._param("author", r),
                  ])
                : s._(/*BTDS*/ "This group was removed from a community");
    }
    function M(e, t, n, r) {
      var a = o(
        "WAWebFormatParticipantNames",
      ).getFormattedCommunityNameWithAlternative({
        jid: e[0],
        asString: !t,
        alternativeStringName: e[1],
      });
      return !S(a) && v(n)
        ? (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "generateParentGroupLinkNotification, I am author",
              ])),
          ),
          s._(
            /*BTDS*/ "You added this group and its members to the community {community}",
            [
              s._param(
                "community",
                o(
                  "WAWebFormatParticipantNames",
                ).getCommunityNameInQuotationMarks(a, !t),
              ),
            ],
          ))
        : S(a) && v(n)
          ? s._(/*BTDS*/ "You added this group and its members to a community")
          : !S(a) && n != null
            ? (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "generateParentGroupLinkNotification, I am not author",
                  ])),
              ),
              s._(
                /*BTDS*/ "{author} added this group and its members to the community {community}",
                [
                  s._param("author", r),
                  s._param(
                    "community",
                    o(
                      "WAWebFormatParticipantNames",
                    ).getCommunityNameInQuotationMarks(a, !t),
                  ),
                ],
              ))
            : !S(a) && n == null
              ? (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "generateParentGroupLinkNotification, no author",
                    ])),
                ),
                s._(
                  /*BTDS*/ "This group and its members were added to the community {community}",
                  [
                    s._param(
                      "community",
                      o(
                        "WAWebFormatParticipantNames",
                      ).getCommunityNameInQuotationMarks(a, !t),
                    ),
                  ],
                ))
              : S(a) && n != null
                ? s._(
                    /*BTDS*/ "{author} added this group and its members to a community",
                    [s._param("author", r)],
                  )
                : s._(
                    /*BTDS*/ "This group and its members were added to a community",
                  );
    }
    function w(e, t, n, r, a) {
      var i = babelHelpers.arrayLikeToArray(e).slice(0),
        l = o("WAWebFormatParticipantNames").getFormattedGroupListForCommunity(
          i,
          !t,
          a,
        ),
        u = o("WAWebPairList").unFlattenPairList(i).length;
      return n != null && !v(n)
        ? l == null
          ? s._(
              /*BTDS*/ '_j{"*":"{author} added {count} groups","_1":"{author} added 1 group"}',
              [s._plural(u, "count"), s._param("author", r)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"{author} added the groups {groups}","_1":"{author} added the group {groups}"}',
              [s._plural(u), s._param("author", r), s._param("groups", l)],
            )
        : l == null
          ? s._(
              /*BTDS*/ '_j{"*":"{count} groups were added","_1":"1 group was added"}',
              [s._plural(u, "count")],
            )
          : t
            ? o(
                "WAWebStringsWithMultiplePluralParts",
              ).getCommunityGroupsAddedStringComponent(
                { formattedNames: l, count: u },
                u,
              )
            : o(
                "WAWebStringsWithMultiplePluralParts",
              ).getCommunityGroupsAddedString({ formattedNames: l }, u);
    }
    function A(e, t, n, r) {
      var a = babelHelpers.arrayLikeToArray(e).slice(0),
        i = o("WAWebFormatParticipantNames").getFormattedGroupListForCommunity(
          a,
          !t,
        ),
        l = o("WAWebPairList").unFlattenPairList(a).length;
      return n != null && !v(n)
        ? i == null
          ? s._(
              /*BTDS*/ '_j{"*":"{author} removed {count} groups","_1":"{author} removed 1 group"}',
              [s._plural(l, "count"), s._param("author", r)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"{author} removed the groups {groups}","_1":"{author} removed the group {groups}"}',
              [s._plural(l), s._param("author", r), s._param("groups", i)],
            )
        : i == null
          ? s._(
              /*BTDS*/ '_j{"*":"{count} groups were removed","_1":"1 group was removed"}',
              [s._plural(l, "count")],
            )
          : t
            ? o(
                "WAWebStringsWithMultiplePluralParts",
              ).getCommunityGroupsRemovedStringComponent(
                { formattedNames: i, count: l },
                l,
              )
            : o(
                "WAWebStringsWithMultiplePluralParts",
              ).getCommunityGroupsRemovedString({ formattedNames: i }, l);
    }
    function F(e, t, n, r) {
      var a = o(
        "WAWebFormatParticipantNames",
      ).getFormattedCommunityNameWithAlternative({
        jid: e[0],
        asString: !t,
        alternativeStringName: e[1],
      });
      return S(a)
        ? r != null
          ? T(r)
          : v(n)
            ? k()
            : x()
        : v(n)
          ? E(a)
          : r != null
            ? I(r, a)
            : D(a);
    }
    function O(e, t) {
      return v(e)
        ? s._(/*BTDS*/ "You joined from the community")
        : s._(/*BTDS*/ "{author} joined from the community", [
            s._param("author", t),
          ]);
    }
    function B(e, t, n) {
      if (e && e.length >= 2) {
        var r = o(
          "WAWebFormatParticipantNames",
        ).getFormattedCommunityNameWithAlternative({
          jid: e[0],
          asString: !t,
          alternativeStringName: e[1],
        });
        return S(r)
          ? s._(/*BTDS*/ "{author} added you to this group and the community", [
              s._param("author", n),
            ])
          : (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "generateAddNotification",
                ])),
            ),
            s._(
              /*BTDS*/ "{author} added you to this group and the community {community}",
              [
                s._param("author", n),
                s._param(
                  "community",
                  o(
                    "WAWebFormatParticipantNames",
                  ).getCommunityNameInQuotationMarks(r, !t),
                ),
              ],
            ));
      }
      return s._(/*BTDS*/ "{author} added you", [s._param("author", n)]);
    }
    function W(e, t, n, r) {
      var a,
        i = !1;
      return (
        e &&
          e.length >= 3 &&
          ((a = o("WAWebFormatParticipantNames").getFormattedNameIfExists(
            e[0],
          )),
          a == null && (a = e[1]),
          e[2] === "true" && (i = !0)),
        i
          ? v(n)
            ? S(a)
              ? s._(/*BTDS*/ "You were added")
              : (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "generateInviteAutoAddNotification: isMe, hasSubgroup",
                    ])),
                ),
                s._(
                  /*BTDS*/ "You were added because you joined the group {group-name}",
                  [
                    s._param(
                      "group-name",
                      o(
                        "WAWebFormatParticipantNames",
                      ).getCommunityNameInQuotationMarks(a, !t),
                    ),
                  ],
                ))
            : s._(/*BTDS*/ "{user_name} joined", [s._param("user_name", r)])
          : v(n)
            ? S(a)
              ? s._(/*BTDS*/ "You were added to this community")
              : (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "generateInviteAutoAddNotification: isMe, !inCommunity",
                    ])),
                ),
                s._(
                  /*BTDS*/ "You were added to this community because you joined the group {group-name}",
                  [
                    s._param(
                      "group-name",
                      o(
                        "WAWebFormatParticipantNames",
                      ).getCommunityNameInQuotationMarks(a, !t),
                    ),
                  ],
                ))
            : s._(/*BTDS*/ "{user_name} joined", [s._param("user_name", r)])
      );
    }
    ((l.formatLinkNotifAsFbt = R), (l.formatLinkNotification = L));
  },
  226,
);
