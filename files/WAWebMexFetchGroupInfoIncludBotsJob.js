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
            n = e.participantsPhash,
            r = e.queryContext,
            o = R(r),
            a = yield h({ groupId: t, queryContext: o, participantsPhash: n });
          if (a != null) return v(a);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t,
        n,
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
        q = e.xwa2_group_query_by_id;
      if (q == null) return null;
      var U = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        V = q.id,
        H = q.creation_time,
        G = q.creator,
        z = (t = q.creator) == null ? void 0 : t.pn,
        j = U
          ? (n = q.creator) == null || (n = n.username_info) == null
            ? void 0
            : n.username
          : null,
        K = q.description,
        Q = U
          ? (a = q.description) == null ||
            (a = a.creator) == null ||
            (a = a.username_info) == null
            ? void 0
            : a.username
          : null,
        X = (i = q.participants) == null ? void 0 : i.edges,
        Y = (l = q.properties) == null ? void 0 : l.allow_admin_reports,
        J =
          (s = q.properties) == null
            ? void 0
            : s.allow_non_admin_sub_group_creation,
        Z = (u = q.properties) == null ? void 0 : u.announcement,
        ee =
          (c = q.properties) == null || (c = c.ephemeral) == null
            ? void 0
            : c.expiration_time_in_sec,
        te =
          ee != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          o("WAWebAfterReadUtils").isAfterReadDuration(ee),
        ne =
          (f = q.properties) == null || (f = f.lid_migration_state) == null
            ? void 0
            : f.addressing_mode,
        re = ne == null || ne === _,
        oe = (g = q.properties) == null ? void 0 : g.locked,
        ae = (h = q.properties) == null ? void 0 : h.member_add_mode,
        ie = (y = q.properties) == null ? void 0 : y.member_link_mode,
        le =
          (C = q.properties) == null
            ? void 0
            : C.member_share_group_history_mode,
        se =
          (b = q.properties) == null
            ? void 0
            : b.membership_approval_mode_enabled,
        ue = (v = q.properties) == null ? void 0 : v.support,
        ce = q.state,
        de = q.subject,
        me = (R = q.subject) == null || (R = R.creator) == null ? void 0 : R.pn,
        pe = U
          ? (k = q.subject) == null ||
            (k = k.creator) == null ||
            (k = k.username_info) == null
            ? void 0
            : k.username
          : null,
        _e = q.total_participants_count,
        fe =
          ((I = q.participants) == null
            ? void 0
            : I.participants_phash_match) === !0,
        ge =
          (T = q.properties) == null
            ? void 0
            : T.closed_by_membership_approval_mode,
        he = (D = q.properties) == null ? void 0 : D.general_chat,
        ye =
          q == null ||
          (x = q.properties) == null ||
          (x = x.growth_locked2) == null
            ? void 0
            : x.locked,
        Ce =
          q == null || ($ = q.properties) == null
            ? void 0
            : $.auto_add_disabled,
        be =
          q == null || (P = q.properties) == null ? void 0 : P.parent_group_jid,
        ve = q == null || (N = q.properties) == null ? void 0 : N.capi,
        Se = q == null || (M = q.properties) == null ? void 0 : M.hidden_group,
        Re =
          q == null || (w = q.properties) == null
            ? void 0
            : w.group_safety_check,
        Le = q == null || (A = q.properties) == null ? void 0 : A.limit_sharing,
        Ee = q == null || (F = q.properties) == null ? void 0 : F.appeal_status,
        ke =
          q == null || (O = q.properties) == null
            ? void 0
            : O.appeal_update_time,
        Ie = q == null ? void 0 : q.properties,
        Te =
          r("justknobx")._("7606") &&
          Ie != null &&
          "group_custom_reactions" in Ie
            ? (B =
                (W = Ie.group_custom_reactions) == null
                  ? void 0
                  : W.default_reactions) != null
              ? B
              : null
            : void 0,
        De = (q == null ? void 0 : q.missing_participant_identification) === !0;
      if (V != null && H != null && (de == null ? void 0 : de.value) != null) {
        var xe,
          $e,
          Pe,
          Ne,
          Me,
          we,
          Ae,
          Fe,
          Oe = o("WAWebMexGetTypename").getTypename(q),
          Be = E(fe, X),
          We = Be.isOpenBotGroup,
          qe = Be.isTeeBotGroup,
          Ue = Be.participantsInfo,
          Ve = {
            groupInfo: babelHelpers.extends(
              {
                id: o("WAWebWidFactory").createWid(V),
                owner:
                  (G == null ? void 0 : G.id) != null
                    ? o("WAWebWidFactory").createWid(G == null ? void 0 : G.id)
                    : void 0,
                creatorPn:
                  z != null ? o("WAWebWidFactory").createWid(z) : void 0,
                creatorUsername: j,
                subject: de.value,
                creation: Number(H),
                participants: Ue,
                subjectTime: Number(de == null ? void 0 : de.creation_time),
                subjectOwner:
                  (de == null || (xe = de.creator) == null ? void 0 : xe.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        de == null || ($e = de.creator) == null
                          ? void 0
                          : $e.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  me != null ? o("WAWebWidFactory").createWid(me) : void 0,
                subjectOwnerUsername: pe,
                allowNonAdminSubGroupCreation: J != null ? J : !1,
                generalChatAutoAddDisabled: Oe === p && Ce != null ? Ce : !1,
                restrict: oe === !0,
                announce: Oe === m || Z === !0,
                support: ue != null ? ue : !1,
                desc: (Pe = K == null ? void 0 : K.value) != null ? Pe : void 0,
                descId: (Ne = K == null ? void 0 : K.id) != null ? Ne : void 0,
                descOwner:
                  (K == null || (Me = K.creator) == null ? void 0 : Me.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        K == null || (we = K.creator) == null ? void 0 : we.id,
                      )
                    : void 0,
                descOwnerUsername: Q,
                descTime:
                  (K == null ? void 0 : K.creation_time) != null
                    ? Number(K == null ? void 0 : K.creation_time)
                    : void 0,
                size: _e,
                noFrequentlyForwarded: !1,
                ephemeralDuration: te
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : ee != null
                    ? ee
                    : void 0,
                afterReadDuration: te ? ee : void 0,
                membershipApprovalMode: se != null ? se : !1,
                memberAddMode: L(ae),
              },
              Oe !== m && Oe !== d
                ? {
                    groupReactionSettings: o(
                      "WAWebGroupReactionSettings",
                    ).getGroupReactionSettingsFromMexGroupInfo(Te),
                    memberLinkMode: o(
                      "WAWebGroupMemberLinkMode",
                    ).getMemberLinkModeFromMexType(ie),
                    memberShareGroupHistoryMode: o(
                      "WAWebGroupHistoryShareMode",
                    ).getMemberShareGroupHistoryModeFromMexType(le),
                  }
                : void 0,
              {
                suspended: ce === S.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(Ee),
                suspendAppealUpdateTime: ke != null ? ke : null,
                terminated: ce === S.TERMINATED ? !0 : void 0,
                isLidAddressingMode: re,
                reportToAdminMode: Y != null ? Y : !1,
                isParentGroupClosed: ge === !0,
                isParentGroup: Oe === d,
                parentGroup:
                  be != null ? o("WAWebWidFactory").createWid(be) : void 0,
                generalSubgroup: he === !0,
                defaultSubgroup: Oe === m,
                parentGroupSubject: Oe === p || Oe === m ? null : void 0,
                numSubgroups: 0,
                membershipApprovalRequest: q.membership_approval_request === !0,
                growthLockType: ye === !0 ? "invite" : void 0,
                hasCapi: ve === !0,
                hiddenSubgroup: Se != null ? Se : void 0,
                groupSafetyCheck: Re != null ? Re : void 0,
                limitSharingEnabled:
                  (Ae = Le == null ? void 0 : Le.limit_sharing_enabled) != null
                    ? Ae
                    : void 0,
                acp2Enabled:
                  o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() &&
                  (Fe =
                    Le == null ? void 0 : Le.limit_companion_sharing_enabled) !=
                    null
                    ? Fe
                    : void 0,
                hasIncompleteParticipantInformation: De,
                isOpenBotGroup: We != null ? We : void 0,
                isTeeBotGroup: qe != null ? qe : void 0,
              },
            ),
            participantPhashMatch: fe,
          };
        return Ve;
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
