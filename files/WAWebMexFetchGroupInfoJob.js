__d(
  "WAWebMexFetchGroupInfoJob",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupReactionSettings",
    "WAWebLimitSharingGatingUtils",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoJobAcp2Query.graphql",
    "WAWebMexFetchGroupInfoJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebMexGroupMembershipFormFragments",
    "WAWebNewsletterRpcUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "justknobx",
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
    async function g(e) {
      var t = e.groupId,
        n = e.includeMembershipForm,
        r = e.participantsPhash,
        a = e.queryContext;
      return o("WAWebNewsletterRpcUtils").runWithBackoff(async function () {
        var e = {
            id: t,
            query_context: a,
            include_username: o(
              "WAWebUsernameGatingUtils",
            ).usernameDisplayedEnabled(),
            include_membership_form: n,
            participants_phash: r,
          },
          i = o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
            ? await o("WAWebMexClient").fetchQuery(f, e)
            : await o("WAWebMexClient").fetchQuery(_, e);
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
          i
        );
      });
    }
    async function h(e) {
      var t = e.groupId,
        n = e.includeMembershipForm,
        r = n === void 0 ? !1 : n,
        o = e.participantsPhash,
        a = e.queryContext,
        i = v(a),
        l = await g({
          groupId: t,
          includeMembershipForm: r,
          queryContext: i,
          participantsPhash: o,
        });
      if (l != null) return C(l, r);
    }
    async function y(e) {
      var t = await h({
        groupId: e.toString(),
        includeMembershipForm: !0,
        queryContext: "interactive",
      });
      return t == null ? void 0 : t.membershipForm;
    }
    function C(e, t) {
      var n,
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
        ee = (_ = U.properties) == null ? void 0 : _.announcement,
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
        oe = re == null || re === p,
        ae = (h = U.properties) == null ? void 0 : h.locked,
        ie = (y = U.properties) == null ? void 0 : y.member_add_mode,
        le = (C = U.properties) == null ? void 0 : C.member_link_mode,
        se =
          (v = U.properties) == null
            ? void 0
            : v.member_share_group_history_mode,
        ue =
          (L = U.properties) == null
            ? void 0
            : L.membership_approval_mode_enabled,
        ce = (E = U.properties) == null ? void 0 : E.support,
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
          We = {
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
                participants: R(ge, Y),
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
                generalChatAutoAddDisabled: Be === m && be != null ? be : !1,
                restrict: ae === !0,
                announce: Be === d || ee === !0,
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
                memberAddMode: S(ie),
              },
              Be !== d && Be !== c
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
                suspended: de === b.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(ke),
                suspendAppealUpdateTime: Ie != null ? Ie : null,
                terminated: de === b.TERMINATED ? !0 : void 0,
                isLidAddressingMode: oe,
                reportToAdminMode: J != null ? J : !1,
                isParentGroupClosed: he === !0,
                isParentGroup: Be === c,
                parentGroup:
                  ve != null ? o("WAWebWidFactory").createWid(ve) : void 0,
                generalSubgroup: ye === !0,
                defaultSubgroup: Be === d,
                parentGroupSubject: Be === m || Be === d ? null : void 0,
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
              },
            ),
            participantPhashMatch: ge,
          };
        if (t && Be !== c && Be !== d) {
          var qe;
          We.membershipForm =
            (qe = o(
              "WAWebMexGroupMembershipFormFragments",
            ).parseGroupMembershipFormFromGroupInfo(U)) != null
              ? qe
              : void 0;
        }
        return We;
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
      if (e) return [];
      if (t == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing participants in group info participant response",
        );
      var n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        r = t.map(function (e) {
          var t,
            r,
            a = e.group_history_sent,
            i = e.join_time,
            l = e.node,
            s = e.role,
            u,
            c,
            d;
          if (l.id == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing id in group info participant response",
            );
          return (
            (u = o("WAWebWidFactory").createWid(l.id)),
            l.lid != null && (c = o("WAWebWidFactory").createWid(l.lid)),
            l.pn != null && (d = o("WAWebWidFactory").createWid(l.pn)),
            {
              id: u,
              lid: c,
              phoneNumber: d != null ? d : null,
              displayName: (t = l.display_name) != null ? t : null,
              isAdmin: s === "ADMIN_MEMBER" || s === "SUPERADMIN_MEMBER",
              isSuperAdmin: s === "SUPERADMIN_MEMBER",
              username: n
                ? (r = l.username_info) == null
                  ? void 0
                  : r.username
                : null,
              joinTime: i != null ? i : null,
              groupHistorySentState: o(
                "WAWebGroupHistoryPostJoinTypes",
              ).groupHistorySentToState(a),
            }
          );
        });
      return r;
    }
    ((l.mexGetGroupInfo = h), (l.mexFetchGroupMembershipFormFromGroupInfo = y));
  },
  98,
);
