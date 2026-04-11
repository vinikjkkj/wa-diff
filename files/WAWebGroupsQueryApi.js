__d(
  "WAWebGroupsQueryApi",
  [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebGroupHistoryShareMode",
    "WAWebJidToWid",
    "WAWebSchemaGroupMetadata",
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
        g = t.creation,
        h = t.description,
        y = t.descriptionGroupInfoDescriptionMixin,
        C = t.ephemeral,
        b = t.groupAddressingModeMixin,
        v = t.groupMemberAddModeMixin,
        S = t.groupMemberShareGroupHistoryModeMixin,
        R = t.growthLocked,
        L = t.hasAllowAdminReports,
        E = t.hasAllowNonAdminSubGroupCreation,
        k = t.hasAnnouncement,
        I = t.hasAutoAddDisabled,
        T = t.hasCapi,
        D = t.hasDefaultSubGroup,
        x = t.hasGeneralChat,
        $ = t.hasLocked,
        P = t.hasMissingParticipantIdentification,
        N = t.hasNoFrequentlyForwarded,
        M = t.hasSupport,
        w = t.id,
        A = t.linkedParent,
        F = t.membershipApprovalMode,
        O = t.membershipApprovalRequest,
        B = t.namedSubjectOrUnnamedSubjectFallbackMixinGroup,
        W = t.parent,
        q = t.participant,
        U = t.size,
        V = t.sO,
        H = t.sT,
        G = t.subjectOwnerIdentityMixin,
        z = t.suspended;
      if (w == null) throw r("err")("parseGroupSmax: invalid group id");
      var j = B == null ? void 0 : B.value.subject;
      if (j == null) throw r("err")("parseGroupSmax: invalid group subject");
      var K = q != null ? p(q) : [],
        Q =
          (n =
            F == null ||
            (a = F.membershipApprovalGroupJoinModeEnabledMixin) == null
              ? void 0
              : a.state) != null
            ? n
            : F == null
              ? void 0
              : F.state,
        X = o("WAWebSchemaGroupMetadata").MemberAddMode.cast(
          v == null || (i = v.memberAddModeMemberAddModes) == null
            ? void 0
            : i.value.elementValue,
        ),
        Y = o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(
          S == null ||
            (l = S.memberShareGroupHistoryModeMemberShareGroupHistoryModes) ==
              null
            ? void 0
            : l.value.elementValue,
        ),
        J =
          (d = h == null ? void 0 : h.groupInfoDescriptionMixin) != null
            ? d
            : y,
        Z = _(t),
        ee = Z.creator,
        te = Z.creatorCountryCode,
        ne = Z.creatorPn,
        re = Z.creatorUsername,
        oe = f(V, G),
        ae = oe.subjectOwner,
        ie = oe.subjectOwnerPn,
        le = oe.subjectOwnerUsername,
        se = babelHelpers.extends(
          {
            id: o("WAWebWidFactory").createWid(w + "@g.us"),
            owner: ee,
            creatorPn: ne,
            creatorUsername: re,
            creatorCountryCode: te,
            creation: g,
            restrict: !!$,
            announce: !!k,
            noFrequentlyForwarded: !!N,
            support: M,
            suspended: z != null,
            isParentGroup: W != null,
            numSubgroups: W == null ? void 0 : W.numSubGroups,
            participants: K,
            isParentGroupClosed:
              (W == null ||
              (m = W.parentGroupDefaultMembershipApprovalModeMixin) == null
                ? void 0
                : m.defaultMembershipApprovalMode) === "request_required",
            defaultSubgroup: D,
            generalSubgroup: x,
            membershipApprovalMode: Q === "on",
            reportToAdminMode: L,
            membershipApprovalRequest: O,
            isLidAddressingMode:
              (b == null ? void 0 : b.addressingMode) === "lid",
            memberAddMode: X,
            memberShareGroupHistoryMode: Y,
            allowNonAdminSubGroupCreation: E,
          },
          J && e(J),
          C && s(C),
          u(R),
          c(A),
          {
            subject: j,
            subjectTime: H,
            subjectOwner: ae,
            subjectOwnerUsername: le,
            subjectOwnerPn: ie,
            size: U,
            generalChatAutoAddDisabled: !!I,
            hasCapi: T,
            hasIncompleteParticipantInformation: P === !0,
          },
        );
      return se;
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
