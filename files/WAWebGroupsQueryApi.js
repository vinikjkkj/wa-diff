__d(
  "WAWebGroupsQueryApi",
  [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
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
      var t = e.expiration;
      return { ephemeralDuration: t };
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
        var a = e.groupInfoParticipantMixins.value.participantMixins;
        return a.name === "ParticipantWithJid"
          ? {
              isAdmin: t,
              isSuperAdmin: n,
              id: o("WAWebJidToWid").userJidToUserWid(a.value.jid),
            }
          : a.name === "ParticipantWithJidAndDisplayName"
            ? {
                isAdmin: t,
                isSuperAdmin: n,
                id: o("WAWebJidToWid").userJidToUserWid(a.value.jid),
                displayName: a.value.displayName,
              }
            : a.name === "ParticipantWithJidLidAndDisplayName"
              ? {
                  isAdmin: t,
                  isSuperAdmin: n,
                  id: o("WAWebJidToWid").userJidToUserWid(a.value.jid),
                  lid: o("WAWebJidToWid").userJidToUserWid(a.value.lid),
                  displayName: a.value.displayName,
                }
              : a.name === "ParticipantWithJidAndLid"
                ? {
                    isAdmin: t,
                    isSuperAdmin: n,
                    id: o("WAWebJidToWid").userJidToUserWid(a.value.jid),
                    lid: o("WAWebJidToWid").userJidToUserWid(a.value.lid),
                  }
                : a.name === "ParticipantWithJidAndIdentity"
                  ? {
                      isAdmin: t,
                      isSuperAdmin: n,
                      id: o("WAWebJidToWid").userJidToUserWid(a.value.jid),
                      phoneNumber: d(a.value.identityTypes),
                      username: m(a.value.identityTypes),
                    }
                  : (a.name,
                    {
                      isAdmin: t,
                      isSuperAdmin: n,
                      id: o("WAWebJidToWid").userJidToUserWid(a.value.jid),
                      lid: null,
                      displayName: a.value.displayName,
                      phoneNumber: d(a.value.identityTypes),
                      username: m(a.value.identityTypes),
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
        g = t.appealStatus,
        h = t.appealUpdateTime,
        y = t.creation,
        C = t.description,
        b = t.descriptionGroupInfoDescriptionMixin,
        v = t.ephemeral,
        S = t.groupAddressingModeMixin,
        R = t.groupMemberAddModeMixin,
        L = t.groupMemberShareGroupHistoryModeMixin,
        E = t.growthLocked,
        k = t.hasAllowAdminReports,
        I = t.hasAllowNonAdminSubGroupCreation,
        T = t.hasAnnouncement,
        D = t.hasAutoAddDisabled,
        x = t.hasCapi,
        $ = t.hasDefaultSubGroup,
        P = t.hasGeneralChat,
        N = t.hasLocked,
        M = t.hasMissingParticipantIdentification,
        w = t.hasNoFrequentlyForwarded,
        A = t.hasSupport,
        F = t.id,
        O = t.linkedParent,
        B = t.membershipApprovalMode,
        W = t.membershipApprovalRequest,
        q = t.namedSubjectOrUnnamedSubjectFallbackMixinGroup,
        U = t.parent,
        V = t.participant,
        H = t.size,
        G = t.sO,
        z = t.sT,
        j = t.subjectOwnerIdentityMixin,
        K = t.suspended;
      if (F == null) throw r("err")("parseGroupSmax: invalid group id");
      var Q = q == null ? void 0 : q.value.subject;
      if (Q == null) throw r("err")("parseGroupSmax: invalid group subject");
      var X = V != null ? p(V) : [],
        Y =
          (n =
            B == null ||
            (a = B.membershipApprovalGroupJoinModeEnabledMixin) == null
              ? void 0
              : a.state) != null
            ? n
            : B == null
              ? void 0
              : B.state,
        J = o("WAWebSchemaGroupMetadata").MemberAddMode.cast(
          R == null || (i = R.memberAddModeMemberAddModes) == null
            ? void 0
            : i.value.elementValue,
        ),
        Z = o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(
          L == null ||
            (l = L.memberShareGroupHistoryModeMemberShareGroupHistoryModes) ==
              null
            ? void 0
            : l.value.elementValue,
        ),
        ee =
          (d = C == null ? void 0 : C.groupInfoDescriptionMixin) != null
            ? d
            : b,
        te = _(t),
        ne = te.creator,
        re = te.creatorCountryCode,
        oe = te.creatorPn,
        ae = te.creatorUsername,
        ie = f(G, j),
        le = ie.subjectOwner,
        se = ie.subjectOwnerPn,
        ue = ie.subjectOwnerUsername,
        ce = babelHelpers.extends(
          {
            id: o("WAWebWidFactory").createWid(F + "@g.us"),
            owner: ne,
            creatorPn: oe,
            creatorUsername: ae,
            creatorCountryCode: re,
            creation: y,
            restrict: !!N,
            announce: !!T,
            noFrequentlyForwarded: !!w,
            support: A,
            suspended: K != null,
            suspendAppealStatus: o(
              "WAWebSuspendAppealStatusType",
            ).toSuspendAppealStatus(g == null ? void 0 : g.type),
            suspendAppealUpdateTime:
              (h == null ? void 0 : h.value) != null ? h.value : null,
            isParentGroup: U != null,
            numSubgroups: U == null ? void 0 : U.numSubGroups,
            participants: X,
            isParentGroupClosed:
              (U == null ||
              (m = U.parentGroupDefaultMembershipApprovalModeMixin) == null
                ? void 0
                : m.defaultMembershipApprovalMode) === "request_required",
            defaultSubgroup: $,
            generalSubgroup: P,
            membershipApprovalMode: Y === "on",
            reportToAdminMode: k,
            membershipApprovalRequest: W,
            isLidAddressingMode:
              (S == null ? void 0 : S.addressingMode) === "lid",
            memberAddMode: J,
            memberShareGroupHistoryMode: Z,
            allowNonAdminSubGroupCreation: I,
          },
          ee && e(ee),
          v && s(v),
          u(E),
          c(O),
          {
            subject: Q,
            subjectTime: z,
            subjectOwner: le,
            subjectOwnerUsername: ue,
            subjectOwnerPn: se,
            size: H,
            generalChatAutoAddDisabled: !!D,
            hasCapi: x,
            hasIncompleteParticipantInformation: M === !0,
          },
        );
      return ce;
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
