__d(
  "WAWebMexFetchGroupInfoIncludBotsJob",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebNewsletterRpcUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "XWA2CommunityGroup",
      d = "XWA2CommunityDefaultSubGroup",
      m = "XWA2CommunitySubGroup",
      p = "LID",
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql"));
    async function f(e) {
      var t = e.groupId,
        n = e.participantsPhash,
        r = e.queryContext;
      return o("WAWebNewsletterRpcUtils").runWithBackoff(async function () {
        var e = await o("WAWebMexClient").fetchQuery(_, {
          id: t,
          query_context: r,
          include_username: o(
            "WAWebUsernameGatingUtils",
          ).usernameDisplayedEnabled(),
          participants_phash: n,
        });
        return (
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] fetched get group info for ",
                  "",
                ])),
              t,
            )
            .tags("GQL", "MEX"),
          e
        );
      });
    }
    async function g(e) {
      var t = e.groupId,
        n = e.participantsPhash,
        r = e.queryContext,
        o = C(r),
        a = await f({ groupId: t, queryContext: o, participantsPhash: n });
      if (a != null) return h(a);
    }
    function h(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        _,
        f,
        g,
        h,
        C,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O = e.xwa2_group_query_by_id;
      if (O == null) return null;
      var B = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        W = O.id,
        q = O.creation_time,
        U = O.creator,
        V = (t = O.creator) == null ? void 0 : t.pn,
        H = B
          ? (n = O.creator) == null || (n = n.username_info) == null
            ? void 0
            : n.username
          : null,
        G = O.description,
        z = B
          ? (r = O.description) == null ||
            (r = r.creator) == null ||
            (r = r.username_info) == null
            ? void 0
            : r.username
          : null,
        j = (a = O.participants) == null ? void 0 : a.edges,
        K = (i = O.properties) == null ? void 0 : i.allow_admin_reports,
        Q =
          (l = O.properties) == null
            ? void 0
            : l.allow_non_admin_sub_group_creation,
        X = (s = O.properties) == null ? void 0 : s.announcement,
        Y =
          (u = O.properties) == null || (u = u.ephemeral) == null
            ? void 0
            : u.expiration_time_in_sec,
        J =
          Y != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          o("WAWebAfterReadUtils").isAfterReadDuration(Y),
        Z =
          ((_ = O.properties) == null || (_ = _.lid_migration_state) == null
            ? void 0
            : _.addressing_mode) === p,
        ee = (f = O.properties) == null ? void 0 : f.locked,
        te = (g = O.properties) == null ? void 0 : g.member_add_mode,
        ne = (h = O.properties) == null ? void 0 : h.member_link_mode,
        re =
          (C = O.properties) == null
            ? void 0
            : C.member_share_group_history_mode,
        oe =
          (S = O.properties) == null
            ? void 0
            : S.membership_approval_mode_enabled,
        ae = (R = O.properties) == null ? void 0 : R.support,
        ie = O.state,
        le = O.subject,
        se = (L = O.subject) == null || (L = L.creator) == null ? void 0 : L.pn,
        ue = B
          ? (E = O.subject) == null ||
            (E = E.creator) == null ||
            (E = E.username_info) == null
            ? void 0
            : E.username
          : null,
        ce = O.total_participants_count,
        de =
          ((k = O.participants) == null
            ? void 0
            : k.participants_phash_match) === !0,
        me =
          (I = O.properties) == null
            ? void 0
            : I.closed_by_membership_approval_mode,
        pe = (T = O.properties) == null ? void 0 : T.general_chat,
        _e =
          O == null ||
          (D = O.properties) == null ||
          (D = D.growth_locked2) == null
            ? void 0
            : D.locked,
        fe =
          O == null || (x = O.properties) == null
            ? void 0
            : x.auto_add_disabled,
        ge =
          O == null || ($ = O.properties) == null ? void 0 : $.parent_group_jid,
        he = O == null || (P = O.properties) == null ? void 0 : P.capi,
        ye = O == null || (N = O.properties) == null ? void 0 : N.hidden_group,
        Ce =
          O == null || (M = O.properties) == null
            ? void 0
            : M.group_safety_check,
        be = O == null || (w = O.properties) == null ? void 0 : w.limit_sharing,
        ve = O == null || (A = O.properties) == null ? void 0 : A.appeal_status,
        Se =
          O == null || (F = O.properties) == null
            ? void 0
            : F.appeal_update_time,
        Re = (O == null ? void 0 : O.missing_participant_identification) === !0;
      if (W != null && q != null && (le == null ? void 0 : le.value) != null) {
        var Le,
          Ee,
          ke,
          Ie,
          Te,
          De,
          xe,
          $e = o("WAWebMexGetTypename").getTypename(O),
          Pe = v(de, j),
          Ne = Pe.isOpenBotGroup,
          Me = Pe.isTeeBotGroup,
          we = Pe.participantsInfo,
          Ae = {
            groupInfo: babelHelpers.extends(
              {
                id: o("WAWebWidFactory").createWid(W),
                owner:
                  (U == null ? void 0 : U.id) != null
                    ? o("WAWebWidFactory").createWid(U == null ? void 0 : U.id)
                    : void 0,
                creatorPn:
                  V != null ? o("WAWebWidFactory").createWid(V) : void 0,
                creatorUsername: H,
                subject: le.value,
                creation: Number(q),
                participants: we,
                subjectTime: Number(le == null ? void 0 : le.creation_time),
                subjectOwner:
                  (le == null || (Le = le.creator) == null ? void 0 : Le.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        le == null || (Ee = le.creator) == null
                          ? void 0
                          : Ee.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  se != null ? o("WAWebWidFactory").createWid(se) : void 0,
                subjectOwnerUsername: ue,
                allowNonAdminSubGroupCreation: Q != null ? Q : !1,
                generalChatAutoAddDisabled: $e === m && fe != null ? fe : !1,
                restrict: ee === !0,
                announce: $e === d || X === !0,
                support: ae != null ? ae : !1,
                desc: (ke = G == null ? void 0 : G.value) != null ? ke : void 0,
                descId: (Ie = G == null ? void 0 : G.id) != null ? Ie : void 0,
                descOwner:
                  (G == null || (Te = G.creator) == null ? void 0 : Te.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        G == null || (De = G.creator) == null ? void 0 : De.id,
                      )
                    : void 0,
                descOwnerUsername: z,
                descTime:
                  (G == null ? void 0 : G.creation_time) != null
                    ? Number(G == null ? void 0 : G.creation_time)
                    : void 0,
                size: ce,
                noFrequentlyForwarded: !1,
                ephemeralDuration: J
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : Y != null
                    ? Y
                    : void 0,
                afterReadDuration: J ? Y : void 0,
                membershipApprovalMode: oe != null ? oe : !1,
                memberAddMode: b(te),
              },
              $e !== d && $e !== c
                ? {
                    memberLinkMode: o(
                      "WAWebGroupMemberLinkMode",
                    ).getMemberLinkModeFromMexType(ne),
                    memberShareGroupHistoryMode: o(
                      "WAWebGroupHistoryShareMode",
                    ).getMemberShareGroupHistoryModeFromMexType(re),
                  }
                : void 0,
              {
                suspended: ie === y.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(ve),
                suspendAppealUpdateTime: Se != null ? Se : null,
                terminated: ie === y.TERMINATED ? !0 : void 0,
                isLidAddressingMode: Z,
                reportToAdminMode: K != null ? K : !1,
                isParentGroupClosed: me === !0,
                isParentGroup: $e === c,
                parentGroup:
                  ge != null ? o("WAWebWidFactory").createWid(ge) : void 0,
                generalSubgroup: pe === !0,
                defaultSubgroup: $e === d,
                parentGroupSubject: $e === m || $e === d ? null : void 0,
                numSubgroups: 0,
                membershipApprovalRequest: O.membership_approval_request === !0,
                growthLockType: _e === !0 ? "invite" : void 0,
                hasCapi: he === !0,
                hiddenSubgroup: ye != null ? ye : void 0,
                groupSafetyCheck: Ce != null ? Ce : void 0,
                limitSharingEnabled:
                  (xe = be == null ? void 0 : be.limit_sharing_enabled) != null
                    ? xe
                    : void 0,
                hasIncompleteParticipantInformation: Re,
                isOpenBotGroup: Ne != null ? Ne : void 0,
                isTeeBotGroup: Me != null ? Me : void 0,
              },
            ),
            participantPhashMatch: de,
          };
        return Ae;
      }
    }
    var y = {
      ACTIVE: "ACTIVE",
      TERMINATED: "NON_EXISTENT",
      SUSPENDED: "SUSPENDED",
    };
    function C(e) {
      return e === "interactive" || e === "enter_group_info"
        ? "INTERACTIVE"
        : e === "missing_participant_identification"
          ? "MISSING_PARTICIPANT_IDENTIFICATION"
          : e === void 0 || e === "out_of_sync_update"
            ? "UNKNOWN"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(e) {
      switch (e) {
        case "ADMIN_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        case "ALL_MEMBER_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        default:
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
      }
    }
    function v(e, t) {
      if (e)
        return {
          participantsInfo: [],
          isOpenBotGroup: void 0,
          isTeeBotGroup: void 0,
        };
      if (t == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing participants in group info participant response",
        );
      var n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        r = [],
        a = !1,
        i = !1,
        l = [];
      return (
        t.forEach(function (e) {
          var t,
            s,
            u = e.node,
            c = e.participant,
            d = e.role,
            m = !1,
            p = !1,
            _ = c != null ? c : u;
          if (_ == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing participant or node in group info participant response",
            );
          var f, g, h;
          if (_.id != null)
            ((f = o("WAWebWidFactory").createWid(_.id)),
              _.lid != null && (g = o("WAWebWidFactory").createWid(_.lid)),
              _.pn != null && (h = o("WAWebWidFactory").createWid(_.pn)));
          else if (_.jid != null)
            ((f = o("WAWebWidFactory").createWid(_.jid)),
              f.isBot() &&
                (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(f)
                  ? ((m = !0),
                    (a = o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled()))
                  : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(f) &&
                    ((p = !0),
                    (i = o(
                      "WAWebBotGroupGatingUtils",
                    ).isTEEGroupBotParticipantAddEnabled()))));
          else
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing id or jid in group info participant response",
            );
          var y = {
            id: f,
            lid: g,
            phoneNumber: h != null ? h : null,
            displayName: (t = _.display_name) != null ? t : null,
            isAdmin: d === "ADMIN_MEMBER" || d === "SUPERADMIN_MEMBER",
            isSuperAdmin: d === "SUPERADMIN_MEMBER",
            username: n
              ? (s = _.username_info) == null
                ? void 0
                : s.username
              : null,
          };
          !(m || p) ||
          (m &&
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled()) ||
          (p &&
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())
            ? r.push(y)
            : l.length < 3 && l.push(f.toString());
        }),
        l.length > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][GROUP] skipped ",
                " bot participants => ",
                "",
              ])),
            l.length,
            l,
          ),
        { participantsInfo: r, isOpenBotGroup: a, isTeeBotGroup: i }
      );
    }
    l.mexGetGroupInfoIncludBots = g;
  },
  98,
);
