__d(
  "WAWebGroupJoinModalUtils",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebMembershipApprovalRequestAction",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n =
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError
          ? e.status
          : null;
      switch (n) {
        case 400:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(
                /*BTDS*/ "Unable to join this community. Please try again later.",
              )
            : s._(
                /*BTDS*/ "Unable to join this group. Please try again later.",
              );
        case 401:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(
                /*BTDS*/ "You can't join this community because you were removed.",
              )
            : s._(
                /*BTDS*/ "You can't join this group because you were removed.",
              );
        case 404:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(
                /*BTDS*/ "You can't join this community because it doesn't exist.",
              )
            : s._(
                /*BTDS*/ "You can't join this group because it no longer exists.",
              );
        case 405:
          return s._(
            /*BTDS*/ "You can't join this group because you were removed from the community.",
          );
        case 409:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(
                /*BTDS*/ "You can't join this community because you are already a member of it.",
              )
            : s._(
                /*BTDS*/ "You can't join this group because you are already a member of it.",
              );
        case 410:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(
                /*BTDS*/ "You can't join this community because this invite link was reset.",
              )
            : s._(
                /*BTDS*/ "You can't join this group because this invite link was reset.",
              );
        case 412:
          return s._(
            /*BTDS*/ "You can't join this group because the community is full.",
          );
        case 419:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "You can't join this community because it is full.")
            : s._(/*BTDS*/ "You can't join this group because it is full.");
        case 426:
          return s._(
            /*BTDS*/ "You need approval from an admin to join this group. Update your app so you can request to join.",
          );
        case 429:
          return s._(
            /*BTDS*/ "You have reached the limit for the number of groups you can join at this time. You can try joining this group again later.",
          );
        case 436:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(
                /*BTDS*/ "You can't join this community because the invite link is unavailable.",
              )
            : s._(
                /*BTDS*/ "You can't join this group because the invite link is unavailable.",
              );
        default:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "Couldn't join this community. Please try again.")
            : s._(/*BTDS*/ "Couldn't join this group. Please try again.");
      }
    }
    function d(e) {
      if (e instanceof o("WAWebMembershipApprovalRequestAction").RequestError)
        switch (e.status) {
          case 401:
            return s._(/*BTDS*/ "You can't cancel this request.");
          case 404:
            return s._(/*BTDS*/ "Your request no longer exists.");
        }
      if (e instanceof o("WAWebMembershipApprovalRequestAction").GroupError)
        switch (e.status) {
          case 400:
            return s._(/*BTDS*/ "An error occurred while canceling.");
          case 404:
          case 423:
            return s._(/*BTDS*/ "This group no longer exists.");
          case 429:
            return s._(
              /*BTDS*/ "An error occurred while canceling. Please try again later.",
            );
        }
      return s._(
        /*BTDS*/ "An error occurred while canceling. Please try again.",
      );
    }
    function m(e) {
      var t =
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError
          ? e.status
          : null;
      switch (t) {
        case 403:
          return s._(
            /*BTDS*/ "You can't join this group because you aren't a member of the community.",
          );
        case 404:
          return s._(
            /*BTDS*/ "You can't join this group because it no longer exists.",
          );
        case 405:
          return s._(
            /*BTDS*/ "You can't join this group because it isn't part of the community.",
          );
        case 503:
          return s._(/*BTDS*/ "Check your phone's connection and try again.");
        case 426:
          return s._(
            /*BTDS*/ "You need approval from an admin to join this group. Update your app so you can request to join.",
          );
        case 406:
          return s._(
            /*BTDS*/ "You can't join this group because you'll need to be invited. Update WhatsApp to the latest version to see your options.",
          );
        default:
          return s._(
            /*BTDS*/ "Unable to join this group. Please try again later.",
          );
      }
    }
    function p(e) {
      switch (e) {
        case 400:
          return s._(/*BTDS*/ "Couldn't revoke invite");
        case 401:
          return s._(
            /*BTDS*/ "You can't revoke this group invite because you aren't a group admin.",
          );
        case 403:
          return s._(
            /*BTDS*/ "You can't revoke this group invite because you aren't a group member.",
          );
        case 404:
          return s._(
            /*BTDS*/ "You can't revoke this group invite because this group has ended.",
          );
        default:
          return s._(/*BTDS*/ "Can't revoke invite. Please try again.");
      }
    }
    function _(e) {
      var t,
        n = e.owner,
        r = e.participants,
        a = n != null ? ((t = r.get(n)) == null ? void 0 : t.contact) : null,
        i = a != null ? o("WAWebContactGetters").getIsMe(a) : !1,
        l =
          a != null
            ? o("WAWebFrontendContactGetters").getFormattedNameAndType(a)
            : { displayName: null, type: null },
        s = l.displayName,
        u = l.type,
        c =
          u ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME ||
          u ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME ||
          u ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME;
      return o("WAWebClock").Clock.createdByOnDateStr(e.creation, i, c, s);
    }
    function f(e) {
      var t = e.groupMetadata,
        n = e.numSubgroups,
        a = e.parentGroupSubject,
        i = t.groupType,
        l = t.size,
        u = r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0";
      switch (i) {
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          return s._(
            /*BTDS*/ '_j{"*":"Announcement group{separator}{number_of_participants} members","_1":"Announcement group{separator}1 member"}',
            [
              s._plural(l != null ? l : 0, "number_of_participants"),
              s._param("separator", u),
            ],
          );
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return s._(
            /*BTDS*/ '_j{"*":"Community{separator}{number} groups{created_by_separator}{created_by}","_1":"Community{separator}1 group{created_by_separator}{created_by}"}',
            [
              s._plural(n != null ? n : 0, "number"),
              s._param("separator", u),
              s._param("created_by_separator", u),
              s._param("created_by", _(t)),
            ],
          );
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
          if (a != null)
            return s._(/*BTDS*/ 'Group in "{community}"', [
              s._param("community", a),
            ]);
          break;
        default:
          break;
      }
      return _(t);
    }
    function g(e) {
      var t = e.groupType,
        n = e.isCommunityParticipant,
        r = n === void 0 ? !1 : n,
        a = e.isHiddenSubgroup,
        i = a === void 0 ? !1 : a,
        l = e.membershipApprovalMode,
        u = l === void 0 ? !1 : l,
        c = e.parentGroupSubject,
        d = e.requestSent,
        m = d === void 0 ? !1 : d;
      if (m) return s._(/*BTDS*/ "Request sent. Waiting for admin approval.");
      switch (t) {
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return s._(
            /*BTDS*/ "When you join this community, you will be added to its announcement group. Your profile will be visible to community admins.",
          );
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
        case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          if (i)
            return s._(
              /*BTDS*/ "Only members that have been invited can join this group. You can remove this group at any time.",
            );
          if (r) break;
          return c != null
            ? s._(
                /*BTDS*/ 'You will be added to the community "{community}" and its announcement group. Your profile will be visible to community admins.',
                [s._param("community", c)],
              )
            : s._(
                /*BTDS*/ "You will be added to a community and its announcement group. Your profile will be visible to community admins.",
              );
        case o("WAWebGroupType").GroupType.DEFAULT:
          break;
      }
      return u ? s._(/*BTDS*/ "An admin must approve your request.") : null;
    }
    function h(e) {
      var t = e.adminRequestRequired,
        n = t === void 0 ? !1 : t,
        a = e.error,
        i = e.groupType,
        l = e.inGroup,
        u = e.isHiddenSubgroup,
        c = u === void 0 ? !1 : u,
        d = e.isSentByMe,
        m = d === void 0 ? !1 : d,
        p = e.membershipApprovalMode,
        _ = p === void 0 ? !1 : p,
        f = e.requestSent,
        g = f === void 0 ? !1 : f;
      if (a instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
        if (a.status === 426) return s._(/*BTDS*/ "Update");
        if (a.status === 406) return r("WAWebFbtCommon")("OK");
      }
      return m
        ? s._(/*BTDS*/ "Revoke invite")
        : l
          ? i === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "View community")
            : s._(/*BTDS*/ "View group")
          : i === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "Join community")
            : c
              ? s._(/*BTDS*/ "Message group owner")
              : _ || (i === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && n)
                ? g
                  ? s._(/*BTDS*/ "Cancel request")
                  : s._(/*BTDS*/ "Request to join")
                : s._(/*BTDS*/ "Join group");
    }
    function y(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? s._(/*BTDS*/ "Manage groups")
          : e
            ? r("WAWebFbtCommon")("Close")
            : r("WAWebFbtCommon")("Cancel")
      );
    }
    function C(e, t) {
      return Number(t.isAdmin) - Number(e.isAdmin);
    }
    var b = 2,
      v = 5;
    function S(e, t) {
      var n = [],
        r = [];
      (e.map(function (e) {
        e.contact.getProfilePicThumb().img != null ? n.push(e) : r.push(e);
      }),
        n.sort(C),
        (r = r.slice(0, b)));
      var o = n.concat(r);
      o = o.slice(0, v);
      var a = Math.max(0, (t != null ? t : e.length) - o.length);
      return { sortedContacts: o, hiddenPileCount: a };
    }
    function R() {
      return r("WAWebNetworkStatus").online
        ? !0
        : (o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Check your connection and try again."),
            }),
          ),
          o("WAWebModalManager").ModalManager.close(),
          !1);
    }
    ((l.getGroupInviteAcceptErrorStr = c),
      (l.getCancelRequestErrorStr = d),
      (l.getErrorStr = m),
      (l.getGroupInviteRevokeErrorStr = p),
      (l.getGroupInviteSubtitle = f),
      (l.getFinePrint = g),
      (l.getGroupInviteActionText = h),
      (l.getDismissText = y),
      (l.sortFacePileContacts = S),
      (l.shouldSendInviteRequest = R));
  },
  226,
);
