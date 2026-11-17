__d(
  "WAWebMexFetchGroupInfoIncludBotsJob",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupReactionSettings",
    "WAWebLimitSharingGatingUtils",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoIncludBotsJobAcp2Query.graphql",
    "WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebMexGroupMembershipFormFragments",
    "WAWebNewsletterRpcUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "XWA2CommunityGroup",
      m = "XWA2CommunityDefaultSubGroup",
      p = "XWA2CommunitySubGroup",
      _ = "LID",
      f =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql")),
      g =
        s !== void 0
          ? s
          : (s = n("WAWebMexFetchGroupInfoIncludBotsJobAcp2Query.graphql"));
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            r = e.includeMembershipForm,
            a = e.participantsPhash,
            i = e.queryContext;
          return o("WAWebNewsletterRpcUtils").runWithBackoff(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = {
                  id: t,
                  query_context: i,
                  include_username: o(
                    "WAWebUsernameGatingUtils",
                  ).usernameDisplayedEnabled(),
                  include_membership_form: r,
                  participants_phash: a,
                },
                n = o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
                  ? yield o("WAWebMexClient").fetchQuery(g, e)
                  : yield o("WAWebMexClient").fetchQuery(f, e);
              return (
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            n = e.includeMembershipForm,
            r = n === void 0 ? !1 : n,
            o = e.participantsPhash,
            a = e.queryContext,
            i = R(a),
            l = yield h({
              groupId: t,
              includeMembershipForm: r,
              queryContext: i,
              participantsPhash: o,
            });
          if (l != null) return v(l, r);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        R,
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
        O,
        B,
        W,
        q,
        U = e.xwa2_group_query_by_id;
      if (U == null) return null;
      var V = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        H = U.id,
        G = U.creation_time,
        z = U.creator,
        j = (n = U.creator) == null ? void 0 : n.pn,
        K = V
          ? (a = U.creator) == null || (a = a.username_info) == null
            ? void 0
            : a.username
          : null,
        Q = U.description,
        X = V
          ? (i = U.description) == null ||
            (i = i.creator) == null ||
            (i = i.username_info) == null
            ? void 0
            : i.username
          : null,
        Y = (l = U.participants) == null ? void 0 : l.edges,
        J = (s = U.properties) == null ? void 0 : s.allow_admin_reports,
        Z =
          (u = U.properties) == null
            ? void 0
            : u.allow_non_admin_sub_group_creation,
        ee = (c = U.properties) == null ? void 0 : c.announcement,
        te =
          (f = U.properties) == null || (f = f.ephemeral) == null
            ? void 0
            : f.expiration_time_in_sec,
        ne =
          te != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          o("WAWebAfterReadUtils").isAfterReadDuration(te),
        re =
          (g = U.properties) == null || (g = g.lid_migration_state) == null
            ? void 0
            : g.addressing_mode,
        oe = re == null || re === _,
        ae = (h = U.properties) == null ? void 0 : h.locked,
        ie = (y = U.properties) == null ? void 0 : y.member_add_mode,
        le = (C = U.properties) == null ? void 0 : C.member_link_mode,
        se =
          (b = U.properties) == null
            ? void 0
            : b.member_share_group_history_mode,
        ue =
          (v = U.properties) == null
            ? void 0
            : v.membership_approval_mode_enabled,
        ce = (R = U.properties) == null ? void 0 : R.support,
        de = U.state,
        me = U.subject,
        pe = (k = U.subject) == null || (k = k.creator) == null ? void 0 : k.pn,
        _e = V
          ? (I = U.subject) == null ||
            (I = I.creator) == null ||
            (I = I.username_info) == null
            ? void 0
            : I.username
          : null,
        fe = U.total_participants_count,
        ge =
          ((T = U.participants) == null
            ? void 0
            : T.participants_phash_match) === !0,
        he =
          (D = U.properties) == null
            ? void 0
            : D.closed_by_membership_approval_mode,
        ye = (x = U.properties) == null ? void 0 : x.general_chat,
        Ce =
          U == null ||
          ($ = U.properties) == null ||
          ($ = $.growth_locked2) == null
            ? void 0
            : $.locked,
        be =
          U == null || (P = U.properties) == null
            ? void 0
            : P.auto_add_disabled,
        ve =
          U == null || (N = U.properties) == null ? void 0 : N.parent_group_jid,
        Se = U == null || (M = U.properties) == null ? void 0 : M.capi,
        Re = U == null || (w = U.properties) == null ? void 0 : w.hidden_group,
        Le =
          U == null || (A = U.properties) == null
            ? void 0
            : A.group_safety_check,
        Ee = U == null || (F = U.properties) == null ? void 0 : F.limit_sharing,
        ke = U == null || (O = U.properties) == null ? void 0 : O.appeal_status,
        Ie =
          U == null || (B = U.properties) == null
            ? void 0
            : B.appeal_update_time,
        Te = U == null ? void 0 : U.properties,
        De =
          r("justknobx")._("7606") &&
          Te != null &&
          "group_custom_reactions" in Te
            ? (W =
                (q = Te.group_custom_reactions) == null
                  ? void 0
                  : q.default_reactions) != null
              ? W
              : null
            : void 0,
        xe = (U == null ? void 0 : U.missing_participant_identification) === !0;
      if (H != null && G != null && (me == null ? void 0 : me.value) != null) {
        var $e,
          Pe,
          Ne,
          Me,
          we,
          Ae,
          Fe,
          Oe,
          Be = o("WAWebMexGetTypename").getTypename(U),
          We = E(ge, Y),
          qe = We.isOpenBotGroup,
          Ue = We.isTeeBotGroup,
          Ve = We.participantsInfo,
          He = {
            groupInfo: babelHelpers.extends(
              {
                id: o("WAWebWidFactory").createWid(H),
                owner:
                  (z == null ? void 0 : z.id) != null
                    ? o("WAWebWidFactory").createWid(z == null ? void 0 : z.id)
                    : void 0,
                creatorPn:
                  j != null ? o("WAWebWidFactory").createWid(j) : void 0,
                creatorUsername: K,
                subject: me.value,
                creation: Number(G),
                participants: Ve,
                subjectTime: Number(me == null ? void 0 : me.creation_time),
                subjectOwner:
                  (me == null || ($e = me.creator) == null ? void 0 : $e.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        me == null || (Pe = me.creator) == null
                          ? void 0
                          : Pe.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  pe != null ? o("WAWebWidFactory").createWid(pe) : void 0,
                subjectOwnerUsername: _e,
                allowNonAdminSubGroupCreation: Z != null ? Z : !1,
                generalChatAutoAddDisabled: Be === p && be != null ? be : !1,
                restrict: ae === !0,
                announce: Be === m || ee === !0,
                support: ce != null ? ce : !1,
                desc: (Ne = Q == null ? void 0 : Q.value) != null ? Ne : void 0,
                descId: (Me = Q == null ? void 0 : Q.id) != null ? Me : void 0,
                descOwner:
                  (Q == null || (we = Q.creator) == null ? void 0 : we.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        Q == null || (Ae = Q.creator) == null ? void 0 : Ae.id,
                      )
                    : void 0,
                descOwnerUsername: X,
                descTime:
                  (Q == null ? void 0 : Q.creation_time) != null
                    ? Number(Q == null ? void 0 : Q.creation_time)
                    : void 0,
                size: fe,
                noFrequentlyForwarded: !1,
                ephemeralDuration: ne
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : te != null
                    ? te
                    : void 0,
                afterReadDuration: ne ? te : void 0,
                membershipApprovalMode: ue != null ? ue : !1,
                memberAddMode: L(ie),
              },
              Be !== m && Be !== d
                ? {
                    groupReactionSettings: o(
                      "WAWebGroupReactionSettings",
                    ).getGroupReactionSettingsFromMexGroupInfo(De),
                    memberLinkMode: o(
                      "WAWebGroupMemberLinkMode",
                    ).getMemberLinkModeFromMexType(le),
                    memberShareGroupHistoryMode: o(
                      "WAWebGroupHistoryShareMode",
                    ).getMemberShareGroupHistoryModeFromMexType(se),
                  }
                : void 0,
              {
                suspended: de === S.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(ke),
                suspendAppealUpdateTime: Ie != null ? Ie : null,
                terminated: de === S.TERMINATED ? !0 : void 0,
                isLidAddressingMode: oe,
                reportToAdminMode: J != null ? J : !1,
                isParentGroupClosed: he === !0,
                isParentGroup: Be === d,
                parentGroup:
                  ve != null ? o("WAWebWidFactory").createWid(ve) : void 0,
                generalSubgroup: ye === !0,
                defaultSubgroup: Be === m,
                parentGroupSubject: Be === p || Be === m ? null : void 0,
                numSubgroups: 0,
                membershipApprovalRequest: U.membership_approval_request === !0,
                growthLockType: Ce === !0 ? "invite" : void 0,
                hasCapi: Se === !0,
                hiddenSubgroup: Re != null ? Re : void 0,
                groupSafetyCheck: Le != null ? Le : void 0,
                limitSharingEnabled:
                  (Fe = Ee == null ? void 0 : Ee.limit_sharing_enabled) != null
                    ? Fe
                    : void 0,
                acp2Enabled:
                  o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() &&
                  (Oe =
                    Ee == null ? void 0 : Ee.limit_companion_sharing_enabled) !=
                    null
                    ? Oe
                    : void 0,
                hasIncompleteParticipantInformation: xe,
                isOpenBotGroup: qe != null ? qe : void 0,
                isTeeBotGroup: Ue != null ? Ue : void 0,
              },
            ),
            participantPhashMatch: ge,
          };
        if (t && Be !== d && Be !== m) {
          var Ge;
          He.membershipForm =
            (Ge = o(
              "WAWebMexGroupMembershipFormFragments",
            ).parseGroupMembershipFormFromGroupInfo(U)) != null
              ? Ge
              : void 0;
        }
        return He;
      }
    }
    var S = {
      ACTIVE: "ACTIVE",
      TERMINATED: "NON_EXISTENT",
      SUSPENDED: "SUSPENDED",
    };
    function R(e) {
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
    function L(e) {
      switch (e) {
        case "ADMIN_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        case "ALL_MEMBER_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        default:
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
      }
    }
    function E(e, t) {
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
            u = e.group_history_sent,
            c = e.join_time,
            d = e.node,
            m = e.participant,
            p = e.role,
            _ = !1,
            f = m != null ? m : d;
          if (f == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing participant or node in group info participant response",
            );
          var g, h, y;
          if (f.id != null)
            ((g = o("WAWebWidFactory").createWid(f.id)),
              f.lid != null && (h = o("WAWebWidFactory").createWid(f.lid)),
              f.pn != null && (y = o("WAWebWidFactory").createWid(f.pn)));
          else if (f.jid != null)
            ((g = o("WAWebWidFactory").createWid(f.jid)),
              g.isBot() &&
                (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(g)
                  ? ((_ = !0),
                    (a = o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotSendEnabled()))
                  : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(g) &&
                    (i = !0)));
          else
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing id or jid in group info participant response",
            );
          var C = {
            id: g,
            lid: h,
            phoneNumber: y != null ? y : null,
            displayName: (t = f.display_name) != null ? t : null,
            isAdmin: p === "ADMIN_MEMBER" || p === "SUPERADMIN_MEMBER",
            isSuperAdmin: p === "SUPERADMIN_MEMBER",
            username: n
              ? (s = f.username_info) == null
                ? void 0
                : s.username
              : null,
            joinTime: c != null ? c : null,
            groupHistorySentState: o(
              "WAWebGroupHistoryPostJoinTypes",
            ).groupHistorySentToState(u),
          };
          !_ ||
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled()
            ? r.push(C)
            : l.length < 3 && l.push(g.toString());
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
    l.mexGetGroupInfoIncludBots = C;
  },
  98,
);
