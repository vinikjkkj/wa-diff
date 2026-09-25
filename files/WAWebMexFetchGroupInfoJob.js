__d(
  "WAWebMexFetchGroupInfoJob",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebLimitSharingGatingUtils",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoJobAcp2Query.graphql",
    "WAWebMexFetchGroupInfoJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebNewsletterRpcUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "XWA2CommunityGroup",
      d = "XWA2CommunityDefaultSubGroup",
      m = "XWA2CommunitySubGroup",
      p = "LID",
      _ = e !== void 0 ? e : (e = n("WAWebMexFetchGroupInfoJobQuery.graphql")),
      f =
        s !== void 0
          ? s
          : (s = n("WAWebMexFetchGroupInfoJobAcp2Query.graphql"));
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            r = e.participantsPhash,
            a = e.queryContext;
          return o("WAWebNewsletterRpcUtils").runWithBackoff(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = {
                  id: t,
                  query_context: a,
                  include_username: o(
                    "WAWebUsernameGatingUtils",
                  ).usernameDisplayedEnabled(),
                  participants_phash: r,
                },
                n = o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
                  ? yield o("WAWebMexClient").fetchQuery(
                      f,
                      babelHelpers.extends({}, e, { include_acp2: !0 }),
                    )
                  : yield o("WAWebMexClient").fetchQuery(_, e);
              return (
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][GROUP] fetched get group info for ",
                        "",
                      ])),
                    t,
                  )
                  .tags("GQL", "MEX"),
                n
              );
            }),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            n = e.participantsPhash,
            r = e.queryContext,
            o = S(r),
            a = yield g({ groupId: t, queryContext: o, participantsPhash: n });
          if (a != null) return b(a);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
        y,
        C,
        b,
        S,
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
          (_ = O.properties) == null || (_ = _.lid_migration_state) == null
            ? void 0
            : _.addressing_mode,
        ee = Z == null || Z === p,
        te = (f = O.properties) == null ? void 0 : f.locked,
        ne = (g = O.properties) == null ? void 0 : g.member_add_mode,
        re = (h = O.properties) == null ? void 0 : h.member_link_mode,
        oe =
          (y = O.properties) == null
            ? void 0
            : y.member_share_group_history_mode,
        ae =
          (C = O.properties) == null
            ? void 0
            : C.membership_approval_mode_enabled,
        ie = (b = O.properties) == null ? void 0 : b.support,
        le = O.state,
        se = O.subject,
        ue = (S = O.subject) == null || (S = S.creator) == null ? void 0 : S.pn,
        ce = B
          ? (E = O.subject) == null ||
            (E = E.creator) == null ||
            (E = E.username_info) == null
            ? void 0
            : E.username
          : null,
        de = O.total_participants_count,
        me =
          ((k = O.participants) == null
            ? void 0
            : k.participants_phash_match) === !0,
        pe =
          (I = O.properties) == null
            ? void 0
            : I.closed_by_membership_approval_mode,
        _e = (T = O.properties) == null ? void 0 : T.general_chat,
        fe =
          O == null ||
          (D = O.properties) == null ||
          (D = D.growth_locked2) == null
            ? void 0
            : D.locked,
        ge =
          O == null || (x = O.properties) == null
            ? void 0
            : x.auto_add_disabled,
        he =
          O == null || ($ = O.properties) == null ? void 0 : $.parent_group_jid,
        ye = O == null || (P = O.properties) == null ? void 0 : P.capi,
        Ce = O == null || (N = O.properties) == null ? void 0 : N.hidden_group,
        be =
          O == null || (M = O.properties) == null
            ? void 0
            : M.group_safety_check,
        ve = O == null || (w = O.properties) == null ? void 0 : w.limit_sharing,
        Se = O == null || (A = O.properties) == null ? void 0 : A.appeal_status,
        Re =
          O == null || (F = O.properties) == null
            ? void 0
            : F.appeal_update_time,
        Le = (O == null ? void 0 : O.missing_participant_identification) === !0;
      if (W != null && q != null && (se == null ? void 0 : se.value) != null) {
        var Ee,
          ke,
          Ie,
          Te,
          De,
          xe,
          $e,
          Pe,
          Ne = o("WAWebMexGetTypename").getTypename(O),
          Me = {
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
                subject: se.value,
                creation: Number(q),
                participants: L(me, j),
                subjectTime: Number(se == null ? void 0 : se.creation_time),
                subjectOwner:
                  (se == null || (Ee = se.creator) == null ? void 0 : Ee.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        se == null || (ke = se.creator) == null
                          ? void 0
                          : ke.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  ue != null ? o("WAWebWidFactory").createWid(ue) : void 0,
                subjectOwnerUsername: ce,
                allowNonAdminSubGroupCreation: Q != null ? Q : !1,
                generalChatAutoAddDisabled: Ne === m && ge != null ? ge : !1,
                restrict: te === !0,
                announce: Ne === d || X === !0,
                support: ie != null ? ie : !1,
                desc: (Ie = G == null ? void 0 : G.value) != null ? Ie : void 0,
                descId: (Te = G == null ? void 0 : G.id) != null ? Te : void 0,
                descOwner:
                  (G == null || (De = G.creator) == null ? void 0 : De.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        G == null || (xe = G.creator) == null ? void 0 : xe.id,
                      )
                    : void 0,
                descOwnerUsername: z,
                descTime:
                  (G == null ? void 0 : G.creation_time) != null
                    ? Number(G == null ? void 0 : G.creation_time)
                    : void 0,
                size: de,
                noFrequentlyForwarded: !1,
                ephemeralDuration: J
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : Y != null
                    ? Y
                    : void 0,
                afterReadDuration: J ? Y : void 0,
                membershipApprovalMode: ae != null ? ae : !1,
                memberAddMode: R(ne),
              },
              Ne !== d && Ne !== c
                ? {
                    memberLinkMode: o(
                      "WAWebGroupMemberLinkMode",
                    ).getMemberLinkModeFromMexType(re),
                    memberShareGroupHistoryMode: o(
                      "WAWebGroupHistoryShareMode",
                    ).getMemberShareGroupHistoryModeFromMexType(oe),
                  }
                : void 0,
              {
                suspended: le === v.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(Se),
                suspendAppealUpdateTime: Re != null ? Re : null,
                terminated: le === v.TERMINATED ? !0 : void 0,
                isLidAddressingMode: ee,
                reportToAdminMode: K != null ? K : !1,
                isParentGroupClosed: pe === !0,
                isParentGroup: Ne === c,
                parentGroup:
                  he != null ? o("WAWebWidFactory").createWid(he) : void 0,
                generalSubgroup: _e === !0,
                defaultSubgroup: Ne === d,
                parentGroupSubject: Ne === m || Ne === d ? null : void 0,
                numSubgroups: 0,
                membershipApprovalRequest: O.membership_approval_request === !0,
                growthLockType: fe === !0 ? "invite" : void 0,
                hasCapi: ye === !0,
                hiddenSubgroup: Ce != null ? Ce : void 0,
                groupSafetyCheck: be != null ? be : void 0,
                limitSharingEnabled:
                  ($e = ve == null ? void 0 : ve.limit_sharing_enabled) != null
                    ? $e
                    : void 0,
                acp2Enabled:
                  o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() &&
                  (Pe =
                    ve == null ? void 0 : ve.limit_companion_sharing_enabled) !=
                    null
                    ? Pe
                    : void 0,
                hasIncompleteParticipantInformation: Le,
              },
            ),
            participantPhashMatch: me,
          };
        return Me;
      }
    }
    var v = {
      ACTIVE: "ACTIVE",
      TERMINATED: "NON_EXISTENT",
      SUSPENDED: "SUSPENDED",
    };
    function S(e) {
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
    function R(e) {
      switch (e) {
        case "ADMIN_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        case "ALL_MEMBER_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        default:
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
      }
    }
    function L(e, t) {
      if (e) return [];
      if (t == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing participants in group info participant response",
        );
      var n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        r = o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryAfterJoinPrerequisitesEnabled(),
        a = t.map(function (e) {
          var t,
            a,
            i = e.group_history_sent,
            l = e.join_time,
            s = e.node,
            u = e.role,
            c,
            d,
            m;
          if (s.id == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing id in group info participant response",
            );
          return (
            (c = o("WAWebWidFactory").createWid(s.id)),
            s.lid != null && (d = o("WAWebWidFactory").createWid(s.lid)),
            s.pn != null && (m = o("WAWebWidFactory").createWid(s.pn)),
            {
              id: c,
              lid: d,
              phoneNumber: m != null ? m : null,
              displayName: (t = s.display_name) != null ? t : null,
              isAdmin: u === "ADMIN_MEMBER" || u === "SUPERADMIN_MEMBER",
              isSuperAdmin: u === "SUPERADMIN_MEMBER",
              username: n
                ? (a = s.username_info) == null
                  ? void 0
                  : a.username
                : null,
              joinTime: r && l != null ? l : null,
              groupHistorySentState: r
                ? o("WAWebGroupHistoryPostJoinTypes").groupHistorySentToState(i)
                : void 0,
            }
          );
        });
      return a;
    }
    l.mexGetGroupInfo = y;
  },
  98,
);
