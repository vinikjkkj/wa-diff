__d(
  "WAWebGroupJoinModalUtils",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebMembershipApprovalRequestAction",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebProfilePicThumbGetters",
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
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 401:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 404:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 405:
          return s._(/*BTDS*/ "");
        case 409:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 410:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 412:
          return s._(/*BTDS*/ "");
        case 419:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 426:
          return s._(/*BTDS*/ "");
        case 429:
          return s._(/*BTDS*/ "");
        case 436:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        default:
          return t === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
      }
    }
    function d(e) {
      if (e instanceof o("WAWebMembershipApprovalRequestAction").RequestError)
        switch (e.status) {
          case 401:
            return s._(/*BTDS*/ "");
          case 404:
            return s._(/*BTDS*/ "");
        }
      if (e instanceof o("WAWebMembershipApprovalRequestAction").GroupError)
        switch (e.status) {
          case 400:
            return s._(/*BTDS*/ "");
          case 404:
          case 423:
            return s._(/*BTDS*/ "");
          case 429:
            return s._(/*BTDS*/ "");
        }
      return s._(/*BTDS*/ "");
    }
    function m(e) {
      var t =
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError
          ? e.status
          : null;
      switch (t) {
        case 403:
          return s._(/*BTDS*/ "");
        case 404:
          return s._(/*BTDS*/ "");
        case 405:
          return s._(/*BTDS*/ "");
        case 503:
          return s._(/*BTDS*/ "");
        case 426:
          return s._(/*BTDS*/ "");
        case 406:
          return s._(/*BTDS*/ "");
        default:
          return s._(/*BTDS*/ "");
      }
    }
    function p(e) {
      switch (e) {
        case 400:
          return s._(/*BTDS*/ "");
        case 401:
          return s._(/*BTDS*/ "");
        case 403:
          return s._(/*BTDS*/ "");
        case 404:
          return s._(/*BTDS*/ "");
        default:
          return s._(/*BTDS*/ "");
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
      return o("WAWebClock").Clock.createdByOnDateStr({
        isMeOwner: i,
        ownerName: s,
        showOwnerName: c,
        unixTime: e.creation,
      });
    }
    function f(e) {
      var t = e.groupMetadata,
        n = e.numSubgroups,
        a = e.parentGroupSubject,
        i = t.size,
        l = o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(t),
        u = r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0";
      switch (l) {
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          return s._(/*BTDS*/ "", [
            s._plural(i != null ? i : 0, "number_of_participants"),
            s._param("separator", u),
          ]);
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return s._(/*BTDS*/ "", [
            s._plural(n != null ? n : 0, "number"),
            s._param("separator", u),
            s._param("created_by_separator", u),
            s._param("created_by", _(t)),
          ]);
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
          if (a != null) return s._(/*BTDS*/ "", [s._param("community", a)]);
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
      if (m) return s._(/*BTDS*/ "");
      switch (t) {
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return s._(/*BTDS*/ "");
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
        case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          if (i) return s._(/*BTDS*/ "");
          if (r) break;
          return c != null
            ? s._(/*BTDS*/ "", [s._param("community", c)])
            : s._(/*BTDS*/ "");
        case o("WAWebGroupType").GroupType.DEFAULT:
          break;
      }
      return u ? s._(/*BTDS*/ "") : null;
    }
    function h(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? s._(/*BTDS*/ "")
          : e
            ? r("WAWebFbtCommon")("Close")
            : r("WAWebFbtCommon")("Cancel")
      );
    }
    function y(e, t) {
      return Number(t.isAdmin) - Number(e.isAdmin);
    }
    var C = 2,
      b = 5;
    function v(e, t) {
      var n = [],
        r = [];
      (e.map(function (e) {
        o("WAWebProfilePicThumbGetters").getImg(
          e.contact.getProfilePicThumb(),
        ) != null
          ? n.push(e)
          : r.push(e);
      }),
        n.sort(y),
        (r = r.slice(0, C)));
      var a = n.concat(r);
      a = a.slice(0, b);
      var i = Math.max(0, (t != null ? t : e.length) - a.length);
      return { sortedContacts: a, hiddenPileCount: i };
    }
    function S() {
      return r("WAWebNetworkStatus").online
        ? !0
        : (o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
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
      (l.getDismissText = h),
      (l.sortFacePileContacts = v),
      (l.shouldSendInviteRequest = S));
  },
  226,
);
