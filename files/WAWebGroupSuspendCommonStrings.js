__d(
  "WAWebGroupSuspendCommonStrings",
  ["fbt", "WAWebGroupGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(/*BTDS*/ "This group is no longer available")
        : s._(/*BTDS*/ "This group is suspended");
    }
    function u() {
      return s._(/*BTDS*/ "Delete group");
    }
    function c() {
      return s._(/*BTDS*/ "Deactivate community");
    }
    function d() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(/*BTDS*/ "This community is no longer available")
        : s._(/*BTDS*/ "This community is suspended");
    }
    function m() {
      return s._(
        /*BTDS*/ "No one in this group can send messages, add members, download or forward media.",
      );
    }
    function p() {
      return s._(
        /*BTDS*/ "No one in this community can send messages, add members or groups, download or forward media.",
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "This group is end-to-end encrypted. WhatsApp can\u2019t see or read messages from this group.",
      );
    }
    function f() {
      return s._(
        /*BTDS*/ "This community is end-to-end encrypted. WhatsApp can\u2019t see or read messages from this community.",
      );
    }
    function g() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(/*BTDS*/ "This group is now available")
        : s._(/*BTDS*/ "This group is no longer suspended");
    }
    function h() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(/*BTDS*/ "This community is now available")
        : s._(/*BTDS*/ "This community is no longer suspended");
    }
    function y() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(/*BTDS*/ "Group no longer available pending review")
        : s._(/*BTDS*/ "Group suspended pending review");
    }
    function C() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(/*BTDS*/ "Community no longer available pending review")
        : s._(/*BTDS*/ "Community suspended pending review");
    }
    function b() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "This group will remain unavailable until the review is completed.",
          )
        : s._(
            /*BTDS*/ "This group will remain suspended until the review is completed.",
          );
    }
    function v() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "This community will remain unavailable until the review is completed.",
          )
        : s._(
            /*BTDS*/ "This community will remain suspended until the review is completed.",
          );
    }
    function S() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "Find out how WhatsApp keeps groups safe and why a group may be unavailable.",
          )
        : s._(
            /*BTDS*/ "Find out how WhatsApp keeps groups safe and why a group may get suspended.",
          );
    }
    function R() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "Find out how WhatsApp keeps communities safe and why a community may be unavailable.",
          )
        : s._(
            /*BTDS*/ "Find out how WhatsApp keeps communities safe and why a community may get suspended.",
          );
    }
    function L() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "An admin requested a review of this group. The review is complete, and the group is now available.",
          )
        : s._(
            /*BTDS*/ "An admin requested a review of this group. The review is complete, and the group is no longer suspended.",
          );
    }
    function E() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "An admin requested a review of this community. The review is complete, and the community is now available.",
          )
        : s._(
            /*BTDS*/ "An admin requested a review of this community. The review is complete, and the community is no longer suspended.",
          );
    }
    function k() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "An admin requested a review of this group. The review is complete, and the group remains unavailable.",
          )
        : s._(
            /*BTDS*/ "An admin requested a review of this group. The review is complete, and the group remains suspended.",
          );
    }
    function I() {
      return o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignVariantEnabled()
        ? s._(
            /*BTDS*/ "An admin requested a review of this community. The review is complete, and the community remains unavailable.",
          )
        : s._(
            /*BTDS*/ "An admin requested a review of this community. The review is complete, and the community remains suspended.",
          );
    }
    ((l.groupSuspendedTitle = e),
      (l.deleteGroupLabel = u),
      (l.deactivateCommunityLabel = c),
      (l.communitySuspendedTitle = d),
      (l.groupRestrictionsText = m),
      (l.communityRestrictionsText = p),
      (l.groupE2eeFootnote = _),
      (l.communityE2eeFootnote = f),
      (l.groupApprovedTitle = g),
      (l.communityApprovedTitle = h),
      (l.groupInReviewTitle = y),
      (l.communityInReviewTitle = C),
      (l.groupInReviewBullet = b),
      (l.communityInReviewBullet = v),
      (l.groupSuspendedExplanation = S),
      (l.communitySuspendedExplanation = R),
      (l.groupAppealApprovedExplanation = L),
      (l.communityAppealApprovedExplanation = E),
      (l.groupAppealRejectedExplanation = k),
      (l.communityAppealRejectedExplanation = I));
  },
  226,
);
