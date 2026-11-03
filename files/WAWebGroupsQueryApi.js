__d(
  "WAWebGroupsQueryApi",
  [
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebAsISOCountryCode",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebJidToWid",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e) return null;
      var t = e.bodyElementValue,
        n = e.id,
        r = e.participant,
        a = e.participantIdentityMixin,
        i = e.t,
        l = {
          desc: t,
          descId: n,
          descOwner:
            r != null ? o("WAWebJidToWid").userJidToUserWid(r) : void 0,
          descTime: o("WATimeUtils").castToUnixTime(i),
        },
        s = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
      if (s) {
        var u;
        l.descOwnerUsername =
          a == null || (u = a.participantUsernameMixin) == null
            ? void 0
            : u.participantUsername;
      }
      var c = o(
        "WAWebUsernameGatingUtils",
      ).lidGroupMigrationNonMemberIQEnabled();
      if (c) {
        var d,
          m =
            a == null || (d = a.participantPNMixin) == null
              ? void 0
              : d.participantPn;
        l.descOwnerPn =
          m != null ? o("WAWebJidToWid").userJidToUserWid(m) : void 0;
      }
      return l;
    }
    function s(e) {
      if (!e) return null;
      var t = e.expiration,
        n =
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          o("WAWebAfterReadUtils").isAfterReadDuration(t);
      return n
        ? {
            ephemeralDuration: o(
              "WAWebAfterReadUtils",
            ).getAfterReadFallbackDuration(),
            afterReadDuration: t,
          }
        : { ephemeralDuration: t };
    }
    function u(e) {
      if (e == null) return null;
      var t = e.expiration,
        n = e.type;
      return { growthLockExpiration: t, growthLockType: n };
    }
    function c(e) {
      return e == null
        ? null
        : {
            parentGroup: o("WAWebJidToWid").groupJidToWid(e.jid),
            parentGroupSubject: e.subject,
          };
    }
    function d(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "PhoneNumber" &&
          "value" in e
        ) {
          var t = e.value;
          return o("WAWebJidToWid").userJidToUserWid(t.phoneNumber);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "PhoneNumberAndUsernameAtt" &&
          "value" in e
        ) {
          var n = e.value;
          return o("WAWebJidToWid").userJidToUserWid(n.phoneNumber);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "UsernameAtt"
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function m(e) {
      if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
        return null;
      switch (e.name) {
        case "UsernameAtt":
        case "PhoneNumberAndUsernameAtt":
          return e.value.username;
        default:
          return (e.name, null);
      }
    }
    function p(e) {
      return e.map(function (e) {
        var t, n;
        if (e.groupInfoParticipantMixins.name === "GroupInfoParticipantAdmin") {
          var r = e.groupInfoParticipantMixins.value.type;
          ((t = !0), (n = r === "superadmin"));
        } else (e.groupInfoParticipantMixins.name, (t = !1), (n = !1));
        var a = e.groupInfoParticipantMixins.value,
          i = a.groupHistorySent,
          l = a.joinTime,
          s = a.participantMixins,
          u = o("WAWebGroupHistoryPostJoinTypes").groupHistorySentToState(i);
        return s.name === "ParticipantWithJid"
          ? {
              isAdmin: t,
              isSuperAdmin: n,
              joinTime: l,
              groupHistorySentState: u,
              id: o("WAWebJidToWid").userJidToUserWid(s.value.jid),
            }
          : s.name === "ParticipantWithJidAndDisplayName"
            ? {
                isAdmin: t,
                isSuperAdmin: n,
                joinTime: l,
                groupHistorySentState: u,
                id: o("WAWebJidToWid").userJidToUserWid(s.value.jid),
                displayName: s.value.displayName,
              }
            : s.name === "ParticipantWithJidLidAndDisplayName"
              ? {
                  isAdmin: t,
                  isSuperAdmin: n,
                  joinTime: l,
                  groupHistorySentState: u,
                  id: o("WAWebJidToWid").userJidToUserWid(s.value.jid),
                  lid: o("WAWebJidToWid").userJidToUserWid(s.value.lid),
                  displayName: s.value.displayName,
                }
              : s.name === "ParticipantWithJidAndLid"
                ? {
                    isAdmin: t,
                    isSuperAdmin: n,
                    joinTime: l,
                    groupHistorySentState: u,
                    id: o("WAWebJidToWid").userJidToUserWid(s.value.jid),
                    lid: o("WAWebJidToWid").userJidToUserWid(s.value.lid),
                  }
                : s.name === "ParticipantWithJidAndIdentity"
                  ? {
                      isAdmin: t,
                      isSuperAdmin: n,
                      joinTime: l,
                      groupHistorySentState: u,
                      id: o("WAWebJidToWid").userJidToUserWid(s.value.jid),
                      phoneNumber: d(s.value.identityTypes),
                      username: m(s.value.identityTypes),
                    }
                  : (s.name,
                    {
                      isAdmin: t,
                      isSuperAdmin: n,
                      joinTime: l,
                      groupHistorySentState: u,
                      id: o("WAWebJidToWid").userJidToUserWid(s.value.jid),
                      lid: null,
                      displayName: s.value.displayName,
                      phoneNumber: d(s.value.identityTypes),
                      username: m(s.value.identityTypes),
                    });
      });
    }
    function _(e) {
      var t = e.creator,
        n = e.groupCreatorIdentityMixin,
        r,
        a;
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var i, l;
        ((r =
          n == null || (i = n.groupCreatorUsernameMixin) == null
            ? void 0
            : i.creatorUsername),
          (a =
            n == null || (l = n.groupCreatorCountryCodeMixin) == null
              ? void 0
              : l.creatorCountryCode));
      }
      var s = o(
          "WAWebUsernameGatingUtils",
        ).lidGroupMigrationNonMemberIQEnabled(),
        u;
      if (s) {
        var c;
        u =
          n == null || (c = n.groupCreatorPhoneNumberMixin) == null
            ? void 0
            : c.creatorPn;
      }
      return {
        creator: t != null ? o("WAWebJidToWid").userJidToUserWid(t) : void 0,
        creatorUsername: r,
        creatorCountryCode:
          a != null ? o("WAWebAsISOCountryCode").asISOCountryCode(a) : null,
        creatorPn: u != null ? o("WAWebJidToWid").userJidToUserWid(u) : void 0,
      };
    }
    function f(e, t) {
      var n;
      if (e == null)
        return {
          subjectOwner: void 0,
          subjectOwnerUsername: void 0,
          subjectOwnerPn: void 0,
        };
      var r = o("WAWebJidToWid").userJidToUserWid(e),
        a = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
          ? t == null || (n = t.subjectOwnerUsernameMixin) == null
            ? void 0
            : n.sOUsername
          : void 0,
        i = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled(),
        l;
      if (i) {
        var s,
          u =
            t == null || (s = t.subjectOwnerPhoneNumberMixin) == null
              ? void 0
              : s.sOPn;
        l = u != null ? o("WAWebJidToWid").userJidToUserWid(u) : void 0;
      }
      return { subjectOwner: r, subjectOwnerUsername: a, subjectOwnerPn: l };
    }
    function g(t) {
      var n,
        a,
        i,
        l,
        d,
        m,
        g,
        h = t.appealStatus,
        y = t.appealUpdateTime,
        C = t.creation,
        b = t.description,
        v = t.descriptionGroupInfoDescriptionMixin,
        S = t.ephemeral,
        R = t.groupAddressingModeMixin,
        L = t.groupMemberAddModeMixin,
        E = t.groupMemberShareGroupHistoryModeMixin,
        k = t.groupReactionSettings,
        I = t.growthLocked,
        T = t.hasAllowAdminReports,
        D = t.hasAllowNonAdminSubGroupCreation,
        x = t.hasAnnouncement,
        $ = t.hasAutoAddDisabled,
        P = t.hasCapi,
        N = t.hasDefaultSubGroup,
        M = t.hasGeneralChat,
        w = t.hasLocked,
        A = t.hasMissingParticipantIdentification,
        F = t.hasNoFrequentlyForwarded,
        O = t.hasSupport,
        B = t.id,
        W = t.linkedParent,
        q = t.membershipApprovalMode,
        U = t.membershipApprovalRequest,
        V = t.namedSubjectOrUnnamedSubjectFallbackMixinGroup,
        H = t.parent,
        G = t.participant,
        z = t.size,
        j = t.sO,
        K = t.sT,
        Q = t.subjectOwnerIdentityMixin,
        X = t.suspended;
      if (B == null) throw r("err")("parseGroupSmax: invalid group id");
      var Y = V == null ? void 0 : V.value.subject;
      if (Y == null) throw r("err")("parseGroupSmax: invalid group subject");
      var J = G != null ? p(G) : [],
        Z =
          (n =
            q == null ||
            (a = q.membershipApprovalGroupJoinModeEnabledMixin) == null
              ? void 0
              : a.state) != null
            ? n
            : q == null
              ? void 0
              : q.state,
        ee = o("WAWebSchemaGroupMetadata").MemberAddMode.cast(
          L == null || (i = L.memberAddModeMemberAddModes) == null
            ? void 0
            : i.value.elementValue,
        ),
        te = o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(
          E == null ||
            (l = E.memberShareGroupHistoryModeMemberShareGroupHistoryModes) ==
              null
            ? void 0
            : l.value.elementValue,
        ),
        ne =
          (d = b == null ? void 0 : b.groupInfoDescriptionMixin) != null
            ? d
            : v,
        re = _(t),
        oe = re.creator,
        ae = re.creatorCountryCode,
        ie = re.creatorPn,
        le = re.creatorUsername,
        se = f(j, Q),
        ue = se.subjectOwner,
        ce = se.subjectOwnerPn,
        de = se.subjectOwnerUsername,
        me = babelHelpers.extends(
          {
            id: o("WAWebWidFactory").createWid(B + "@g.us"),
            owner: oe,
            creatorPn: ie,
            creatorUsername: le,
            creatorCountryCode: ae,
            creation: C,
            restrict: !!w,
            announce: !!x,
            noFrequentlyForwarded: !!F,
            support: O,
            suspended: X != null,
            suspendAppealStatus: o(
              "WAWebSuspendAppealStatusType",
            ).toSuspendAppealStatus(h == null ? void 0 : h.type),
            suspendAppealUpdateTime:
              (y == null ? void 0 : y.value) != null ? y.value : null,
            isParentGroup: H != null,
            numSubgroups: H == null ? void 0 : H.numSubGroups,
            participants: J,
            isParentGroupClosed:
              (H == null ||
              (m = H.parentGroupDefaultMembershipApprovalModeMixin) == null
                ? void 0
                : m.defaultMembershipApprovalMode) === "request_required",
            defaultSubgroup: N,
            generalSubgroup: M,
            membershipApprovalMode: Z === "on",
            reportToAdminMode: T,
            membershipApprovalRequest: U,
            isLidAddressingMode:
              (R == null ? void 0 : R.addressingMode) == null ||
              (R == null ? void 0 : R.addressingMode) === "lid",
            memberAddMode: ee,
            memberShareGroupHistoryMode: te,
            groupReactionSettings:
              k != null
                ? {
                    defaultReactions: ((g = k.defaultReaction) != null
                      ? g
                      : []
                    ).map(function (e) {
                      return e.elementValue;
                    }),
                  }
                : void 0,
            allowNonAdminSubGroupCreation: D,
          },
          ne && e(ne),
          S && s(S),
          u(I),
          c(W),
          {
            subject: Y,
            subjectTime: K,
            subjectOwner: ue,
            subjectOwnerUsername: de,
            subjectOwnerPn: ce,
            size: z,
            generalChatAutoAddDisabled: !!$,
            hasCapi: P,
            hasIncompleteParticipantInformation: A === !0,
          },
        );
      return me;
    }
    function h(e) {
      var t = e.maybeChild("linked_parent"),
        n = t == null ? void 0 : t.maybeAttrGroupJid("jid");
      return n == null
        ? null
        : {
            parentGroup: o("WAWebJidToWid").groupJidToWid(n),
            parentGroupSubject:
              t == null ? void 0 : t.maybeAttrString("subject"),
          };
    }
    ((l.extractDescriptionSmax = e),
      (l.extractUsernameFromIdentityTypes = m),
      (l.extractGroupParticipantsSmax = p),
      (l.parseGroupCreatorSmax = _),
      (l.parseSubjectOwnerSmax = f),
      (l.parseGroupSmax = g),
      (l.extractLinkedParent = h));
  },
  98,
);
