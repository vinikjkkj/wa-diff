__d(
  "WAWebMexFetchGroupInfoIncludBotsJob",
  [
    "WALogger",
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
        A = e.xwa2_group_query_by_id;
      if (A == null) return null;
      var F = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        O = A.id,
        B = A.creation_time,
        W = A.creator,
        q = (t = A.creator) == null ? void 0 : t.pn,
        U = F
          ? (n = A.creator) == null || (n = n.username_info) == null
            ? void 0
            : n.username
          : null,
        V = A.description,
        H = F
          ? (r = A.description) == null ||
            (r = r.creator) == null ||
            (r = r.username_info) == null
            ? void 0
            : r.username
          : null,
        G = (a = A.participants) == null ? void 0 : a.edges,
        z = (i = A.properties) == null ? void 0 : i.allow_admin_reports,
        j =
          (l = A.properties) == null
            ? void 0
            : l.allow_non_admin_sub_group_creation,
        K = (s = A.properties) == null ? void 0 : s.announcement,
        Q =
          (u = A.properties) == null || (u = u.ephemeral) == null
            ? void 0
            : u.expiration_time_in_sec,
        X =
          ((_ = A.properties) == null || (_ = _.lid_migration_state) == null
            ? void 0
            : _.addressing_mode) === p,
        Y = (f = A.properties) == null ? void 0 : f.locked,
        J = (g = A.properties) == null ? void 0 : g.member_add_mode,
        Z = (h = A.properties) == null ? void 0 : h.member_link_mode,
        ee =
          (y = A.properties) == null
            ? void 0
            : y.member_share_group_history_mode,
        te =
          (C = A.properties) == null
            ? void 0
            : C.membership_approval_mode_enabled,
        ne = (v = A.properties) == null ? void 0 : v.support,
        re = A.state,
        oe = A.subject,
        ae = (L = A.subject) == null || (L = L.creator) == null ? void 0 : L.pn,
        ie = F
          ? (E = A.subject) == null ||
            (E = E.creator) == null ||
            (E = E.username_info) == null
            ? void 0
            : E.username
          : null,
        le = A.total_participants_count,
        se =
          ((k = A.participants) == null
            ? void 0
            : k.participants_phash_match) === !0,
        ue =
          (I = A.properties) == null
            ? void 0
            : I.closed_by_membership_approval_mode,
        ce = (T = A.properties) == null ? void 0 : T.general_chat,
        de =
          A == null ||
          (D = A.properties) == null ||
          (D = D.growth_locked2) == null
            ? void 0
            : D.locked,
        me =
          A == null || (x = A.properties) == null
            ? void 0
            : x.auto_add_disabled,
        pe =
          A == null || ($ = A.properties) == null ? void 0 : $.parent_group_jid,
        _e = A == null || (P = A.properties) == null ? void 0 : P.capi,
        fe = A == null || (N = A.properties) == null ? void 0 : N.hidden_group,
        ge =
          A == null || (M = A.properties) == null
            ? void 0
            : M.group_safety_check,
        he = A == null || (w = A.properties) == null ? void 0 : w.limit_sharing,
        ye = (A == null ? void 0 : A.missing_participant_identification) === !0;
      if (O != null && B != null && (oe == null ? void 0 : oe.value) != null) {
        var Ce,
          be,
          ve,
          Se,
          Re,
          Le,
          Ee,
          ke = o("WAWebMexGetTypename").getTypename(A),
          Ie = R(se, G),
          Te = Ie.isOpenBotGroup,
          De = Ie.isTeeBotGroup,
          xe = Ie.participantsInfo,
          $e = {
            groupInfo: babelHelpers.extends(
              {
                id: o("WAWebWidFactory").createWid(O),
                owner:
                  (W == null ? void 0 : W.id) != null
                    ? o("WAWebWidFactory").createWid(W == null ? void 0 : W.id)
                    : void 0,
                creatorPn:
                  q != null ? o("WAWebWidFactory").createWid(q) : void 0,
                creatorUsername: U,
                subject: oe.value,
                creation: Number(B),
                participants: xe,
                subjectTime: Number(oe == null ? void 0 : oe.creation_time),
                subjectOwner:
                  (oe == null || (Ce = oe.creator) == null ? void 0 : Ce.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        oe == null || (be = oe.creator) == null
                          ? void 0
                          : be.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  ae != null ? o("WAWebWidFactory").createWid(ae) : void 0,
                subjectOwnerUsername: ie,
                allowNonAdminSubGroupCreation: j != null ? j : !1,
                generalChatAutoAddDisabled: ke === m && me != null ? me : !1,
                restrict: Y === !0,
                announce: ke === d || K === !0,
                support: ne != null ? ne : !1,
                desc: (ve = V == null ? void 0 : V.value) != null ? ve : void 0,
                descId: (Se = V == null ? void 0 : V.id) != null ? Se : void 0,
                descOwner:
                  (V == null || (Re = V.creator) == null ? void 0 : Re.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        V == null || (Le = V.creator) == null ? void 0 : Le.id,
                      )
                    : void 0,
                descOwnerUsername: H,
                descTime:
                  (V == null ? void 0 : V.creation_time) != null
                    ? Number(V == null ? void 0 : V.creation_time)
                    : void 0,
                size: le,
                noFrequentlyForwarded: !1,
                ephemeralDuration: Q != null ? Q : void 0,
                membershipApprovalMode: te != null ? te : !1,
                memberAddMode: S(J),
                memberLinkMode: o(
                  "WAWebGroupMemberLinkMode",
                ).getMemberLinkModeFromMexType(Z),
                memberShareGroupHistoryMode: o(
                  "WAWebGroupHistoryShareMode",
                ).getMemberShareGroupHistoryModeFromMexType(ee),
                suspended: re === b.SUSPENDED,
                terminated: re === b.TERMINATED ? !0 : void 0,
                isLidAddressingMode: X,
                reportToAdminMode: z != null ? z : !1,
                isParentGroupClosed: ue === !0,
                isParentGroup: ke === c,
                parentGroup:
                  pe != null ? o("WAWebWidFactory").createWid(pe) : void 0,
                generalSubgroup: ce === !0,
                defaultSubgroup: ke === d,
              },
              (ke === m || ke === d) && { parentGroupSubject: null },
              {
                numSubgroups: 0,
                membershipApprovalRequest: A.membership_approval_request === !0,
                growthLockType: de === !0 ? "invite" : void 0,
                hasCapi: _e === !0,
                hiddenSubgroup: fe != null ? fe : void 0,
                groupSafetyCheck: ge != null ? ge : void 0,
                limitSharingEnabled:
                  (Ee = he == null ? void 0 : he.limit_sharing_enabled) != null
                    ? Ee
                    : void 0,
                hasIncompleteParticipantInformation: ye,
                isOpenBotGroup: Te != null ? Te : void 0,
                isTeeBotGroup: De != null ? De : void 0,
              },
            ),
            participantPhashMatch: se,
          };
        return $e;
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
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
    l.mexGetGroupInfoIncludBots = h;
  },
  98,
);
