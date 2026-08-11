__d(
  "WAWebMexFetchGroupInfoIncludBotsJob",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
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
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql"));
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            r = e.participantsPhash,
            a = e.queryContext;
          return o("WAWebNewsletterRpcUtils").runWithBackoff(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebMexClient").fetchQuery(_, {
                id: t,
                query_context: a,
                include_username: o(
                  "WAWebUsernameGatingUtils",
                ).usernameDisplayedEnabled(),
                participants_phash: r,
              });
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
                e
              );
            }),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            n = e.participantsPhash,
            r = e.queryContext,
            o = v(r),
            a = yield f({ groupId: t, queryContext: o, participantsPhash: n });
          if (a != null) return C(a);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
        v,
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
        ie = (v = O.properties) == null ? void 0 : v.support,
        le = O.state,
        se = O.subject,
        ue = (L = O.subject) == null || (L = L.creator) == null ? void 0 : L.pn,
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
          Pe = o("WAWebMexGetTypename").getTypename(O),
          Ne = R(me, j),
          Me = Ne.isOpenBotGroup,
          we = Ne.isTeeBotGroup,
          Ae = Ne.participantsInfo,
          Fe = {
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
                participants: Ae,
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
                generalChatAutoAddDisabled: Pe === m && ge != null ? ge : !1,
                restrict: te === !0,
                announce: Pe === d || X === !0,
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
                memberAddMode: S(ne),
              },
              Pe !== d && Pe !== c
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
                suspended: le === b.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(Se),
                suspendAppealUpdateTime: Re != null ? Re : null,
                terminated: le === b.TERMINATED ? !0 : void 0,
                isLidAddressingMode: ee,
                reportToAdminMode: K != null ? K : !1,
                isParentGroupClosed: pe === !0,
                isParentGroup: Pe === c,
                parentGroup:
                  he != null ? o("WAWebWidFactory").createWid(he) : void 0,
                generalSubgroup: _e === !0,
                defaultSubgroup: Pe === d,
                parentGroupSubject: Pe === m || Pe === d ? null : void 0,
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
                hasIncompleteParticipantInformation: Le,
                isOpenBotGroup: Me != null ? Me : void 0,
                isTeeBotGroup: we != null ? we : void 0,
              },
            ),
            participantPhashMatch: me,
          };
        return Fe;
      }
    }
    var b = {
      ACTIVE: "ACTIVE",
      TERMINATED: "NON_EXISTENT",
      SUSPENDED: "SUSPENDED",
    };
    function v(e) {
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
    function S(e) {
      switch (e) {
        case "ADMIN_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        case "ALL_MEMBER_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        default:
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
      }
    }
    function R(e, t) {
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
        r = o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryAfterJoinPrerequisitesEnabled(),
        a = [],
        i = !1,
        l = !1,
        u = [];
      return (
        t.forEach(function (e) {
          var t,
            s,
            c = e.group_history_sent,
            d = e.join_time,
            m = e.node,
            p = e.participant,
            _ = e.role,
            f = !1,
            g = !1,
            h = p != null ? p : m;
          if (h == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing participant or node in group info participant response",
            );
          var y, C, b;
          if (h.id != null)
            ((y = o("WAWebWidFactory").createWid(h.id)),
              h.lid != null && (C = o("WAWebWidFactory").createWid(h.lid)),
              h.pn != null && (b = o("WAWebWidFactory").createWid(h.pn)));
          else if (h.jid != null)
            ((y = o("WAWebWidFactory").createWid(h.jid)),
              y.isBot() &&
                (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(y)
                  ? ((f = !0),
                    (i = o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled()))
                  : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(y) &&
                    ((g = !0),
                    (l = o(
                      "WAWebBotGroupGatingUtils",
                    ).isTEEGroupBotParticipantAddEnabled()))));
          else
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing id or jid in group info participant response",
            );
          var v = {
            id: y,
            lid: C,
            phoneNumber: b != null ? b : null,
            displayName: (t = h.display_name) != null ? t : null,
            isAdmin: _ === "ADMIN_MEMBER" || _ === "SUPERADMIN_MEMBER",
            isSuperAdmin: _ === "SUPERADMIN_MEMBER",
            username: n
              ? (s = h.username_info) == null
                ? void 0
                : s.username
              : null,
            joinTime: r && d != null ? d : null,
            groupHistorySentState: r
              ? o("WAWebGroupHistoryPostJoinTypes").groupHistorySentToState(c)
              : void 0,
          };
          !(f || g) ||
          (f &&
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled()) ||
          (g &&
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())
            ? a.push(v)
            : u.length < 3 && u.push(y.toString());
        }),
        u.length > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][GROUP] skipped ",
                " bot participants => ",
                "",
              ])),
            u.length,
            u,
          ),
        { participantsInfo: a, isOpenBotGroup: i, isTeeBotGroup: l }
      );
    }
    l.mexGetGroupInfoIncludBots = h;
  },
  98,
);
