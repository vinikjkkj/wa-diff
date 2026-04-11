__d(
  "WAWebSubgroupJoinModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactsModal.react",
    "WAWebFindChatAction",
    "WAWebGroupJoinModalBase.react",
    "WAWebGroupJoinModalUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebJoinSubgroupAction",
    "WAWebMembershipApprovalRequestAction",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOpenChatFlow.react",
    "WAWebQuerySubGroupAction",
    "WAWebStreamModel",
    "WAWebSubgroupSendRequestModal.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUpdaterUpdateApp",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatFilterActionTypes",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = n("$InternalEnum").Mirrored([
        "Loading",
        "Success",
        "Error",
        "Complete",
      ]);
    function _(e, t, n) {
      var a,
        i = e.participants.getAdmins(),
        l = function (i) {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebSubgroupSendRequestModal.react"), {
              adminContact: i,
              subgroupInfo: e,
              participants: t,
              source: n,
            }),
          );
        };
      if (i.length === 1) {
        l(i[0].contact);
        return;
      }
      var c = r("WAWebGroupMetadataCollection").get(e.parentGroupId.toString()),
        d =
          c == null || (a = c.participants.getSuperAdmin()) == null
            ? void 0
            : a.id;
      if (d) {
        var m;
        ((m = i[0]) != null && m.id.equals(d)) ||
          (i.some(function (e) {
            return e.id.equals(d);
          }) &&
            (i = i.sort(function (e, t) {
              return e.id.equals(d) ? -1 : t.id.equals(d) ? 1 : 0;
            })));
      }
      var p = i.map(function (e) {
        return e.contact;
      });
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebContactsModal.react"), {
          title: s._(/*BTDS*/ "Select a group admin"),
          contacts: p,
          onCancel: o("WAWebModalManager").closeModalManager,
          onSelect: l,
        }),
      );
    }
    function f(e) {
      var t,
        a = e.onSuccess,
        i = e.source,
        l = e.subgroupMetadata,
        c = m(null),
        f = c[0],
        h = c[1],
        y = m(null),
        C = y[0],
        b = y[1],
        v = m(null),
        S = v[0],
        R = v[1],
        L = m(!1),
        E = L[0],
        k = L[1],
        I = m(!1),
        T = I[0],
        D = I[1],
        x = !(
          C instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          C.status === 406
        ),
        $ = r("useWAWebEventTargetValue")(
          r("WAWebGroupMetadataCollection"),
          "group_participant_change_" +
            o("WAWebUserPrefsMeUser").getMeUser().toString(),
          function () {
            var e = r("WAWebGroupMetadataCollection").get(l.id);
            return !!(e != null && e.participants.iAmMember());
          },
        ),
        P = l.hiddenSubgroup === !0,
        N;
      if (
        (C != null &&
          (T
            ? (N = o("WAWebGroupJoinModalUtils").getCancelRequestErrorStr(C))
            : (N = o("WAWebGroupJoinModalUtils").getErrorStr(C))),
        d(
          function () {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                if (
                  o("WAWebStreamModel").Stream.displayInfo ===
                  o("WAWebStreamModel").StreamInfo.OFFLINE
                )
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    503,
                  );
                var e = yield o("WAWebQuerySubGroupAction").querySubgroupInfo(
                  l.id,
                  l.parentGroupId,
                );
                if (e != null && e.suspended) {
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "You can't join this group. This group is no longer available.",
                      ),
                    }),
                  );
                  return;
                }
                (R(e),
                  k(!!(e != null && e.membershipApprovalMode)),
                  D(!!(e != null && e.membershipApprovalRequest)),
                  o(
                    "WAWebUpdateSubgroupsCommunityAction",
                  ).updateMembershipApprovalRequest(
                    l.id,
                    !!(e != null && e.membershipApprovalRequest),
                  ));
              })()
              .catch(function (e) {
                (b(e), h(p.Error));
              });
          },
          [l],
        ),
        f === p.Error)
      )
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "subgroup-join" },
          onOK: g,
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: N,
          }),
        });
      if (!S) return null;
      var M = S.adminRequestRequired,
        w = S.groupType,
        A = S.id,
        F = S.participants,
        O = S.subject,
        B = E,
        W = w === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && M,
        q = w === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        U = { groupId: A },
        V = o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
          groupType: w,
          inGroup: $,
          error: C,
          adminRequestRequired: M,
          membershipApprovalMode: B,
          requestSent: T,
          isHiddenSubgroup: P,
        }),
        H = function () {
          (P &&
            (o("WAWebModalManager").ModalManager.close(),
            o("WAWebCmd").Cmd.openCommunityHomeManageGroups(l.parentGroupId)),
            o("WAWebModalManager").ModalManager.close());
        },
        G = o("WAWebGroupJoinModalUtils").getDismissText(T, P),
        z = F.toArray(),
        j = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                l.id,
                "subgroupJoinModal",
                e,
              ),
              n = t.chat,
              r = yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: n });
            r &&
              (h(p.Success),
              o("WAWebComposeBoxActions").ComposeBoxActions.focus(n),
              o("WAWebModalManager").ModalManager.close(),
              a());
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        K = function (t) {
          (h(p.Success),
            D(t),
            o(
              "WAWebUpdateSubgroupsCommunityAction",
            ).updateMembershipApprovalRequest(l.id, t));
        },
        Q = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            h(p.Loading);
            try {
              (yield o(
                "WAWebMembershipApprovalRequestAction",
              ).cancelMembershipApprovalRequest(A),
                K(!1));
            } catch (e) {
              (h(p.Complete), b(r("getErrorSafe")(e)));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        X = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            if (
              (e = r("WAWebGroupMetadataCollection").get(l.id)) != null &&
              e.participants.iAmMember()
            ) {
              yield j();
              return;
            }
            if (P) {
              var t,
                n = s._(
                  /*BTDS*/ 'There\'s a group called "{group-name}" with the visibility set to hidden in the "{community-name}" community. What is it about?',
                  [
                    s._param("group-name", l.subject),
                    s._param(
                      "community-name",
                      (t = r("WAWebGroupMetadataCollection").get(
                        l.parentGroupId,
                      )) == null
                        ? void 0
                        : t.subject,
                    ),
                  ],
                );
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
                  target: { wid: r("WANullthrows")(l.owner) },
                  msgText: n.toString(),
                  clearPreviousText: !0,
                  onSuccess: r("WAWebNoop"),
                }),
                { transition: "modal-flow" },
              );
              return;
            }
            if (W) {
              (o("WAWebModalManager").ModalManager.close(), _(S, z, i));
              return;
            }
            if (T) {
              yield Q();
              return;
            }
            (h(p.Loading), b(null));
            try {
              if (
                C instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                (C.status === 406 || C.status === 426)
              ) {
                (C.status === 426
                  ? yield o("WAWebUpdaterUpdateApp").updateApp()
                  : C.status === 406 && H(),
                  h(p.Success));
                return;
              }
              if (q) {
                var a = yield o(
                    "WAWebJoinSubgroupAction",
                  ).joinAnnouncementGroup(l.parentGroupId, l.id),
                  c = o(
                    "WAWebCommunityGroupJourneyEventImpl",
                  ).CommunityGroupJourneyEvent.inviteModalSourceToSurface(i);
                c &&
                  (a == null ? void 0 : a.status) === 200 &&
                  (B
                    ? new (o(
                        "WAWebCommunityGroupJourneyEventImpl",
                      ).CommunityGroupJourneyEvent)({
                        action: o("WAWebWamEnumChatFilterActionTypes")
                          .CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
                        surface: c,
                        chat: o("WAWebChatCollection").ChatCollection.get(l.id),
                      }).commit()
                    : new (o(
                        "WAWebCommunityGroupJourneyEventImpl",
                      ).CommunityGroupJourneyEvent)({
                        action: o("WAWebWamEnumChatFilterActionTypes")
                          .CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
                        surface: c,
                        chat: o("WAWebChatCollection").ChatCollection.get(l.id),
                      }).commit());
              }
              if (
                l.groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
                l.groupType ===
                  o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
              ) {
                var d = yield o("WAWebJoinSubgroupAction").joinSubgroup(
                    l.parentGroupId,
                    l.id,
                    B,
                  ),
                  m = o(
                    "WAWebCommunityGroupJourneyEventImpl",
                  ).CommunityGroupJourneyEvent.inviteModalSourceToSurface(i);
                m &&
                  (d == null ? void 0 : d.status) === 200 &&
                  (B
                    ? new (o(
                        "WAWebCommunityGroupJourneyEventImpl",
                      ).CommunityGroupJourneyEvent)({
                        action: o("WAWebWamEnumChatFilterActionTypes")
                          .CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
                        surface: m,
                        chat: o("WAWebChatCollection").ChatCollection.get(l.id),
                      }).commit()
                    : new (o(
                        "WAWebCommunityGroupJourneyEventImpl",
                      ).CommunityGroupJourneyEvent)({
                        action: o("WAWebWamEnumChatFilterActionTypes")
                          .CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
                        surface: m,
                        chat: o("WAWebChatCollection").ChatCollection.get(l.id),
                      }).commit());
              }
              if (B) {
                K(!0);
                return;
              }
              yield j({ isGroupJoin: !0 });
            } catch (e) {
              if (
                e instanceof
                o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse
              ) {
                (k(e.membershipApprovalMode),
                  e.membershipApprovalMode ? K(!0) : yield j());
                return;
              }
              if (
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                e.status === 304
              ) {
                K(!0);
                return;
              }
              (b(r("getErrorSafe")(e)), h(p.Complete));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(r("WAWebGroupJoinModalBase.react"), {
        image: U,
        title: O,
        subtitle: o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({
          groupMetadata: S,
        }),
        contacts: z,
        actionText: V,
        onAction: X,
        actionDisabled: !1,
        onCancel: x ? H : void 0,
        description: S.displayedDesc,
        cancelText: G,
        finePrint: {
          text:
            N != null
              ? N
              : o("WAWebGroupJoinModalUtils").getFinePrint({
                  groupType: w,
                  isCommunityParticipant: !0,
                  membershipApprovalMode: B,
                  requestSent: T,
                  isHiddenSubgroup: P,
                }),
          isError: N != null,
        },
        loading: f === p.Loading,
        participantsCount: (t = S.size) != null ? t : F.length,
        groupType: S.groupType,
        source: i,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = f;
  },
  226,
);
