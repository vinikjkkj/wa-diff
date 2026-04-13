__d(
  "WAWebAddGroupParticipantFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebCommunityAddParticipantModal.react",
    "WAWebCommunityGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteGating",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebParticipantListUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendHistoryBundleAction",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUim",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationModal.react",
    "WAWebUsernameSearchLogger",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebFilteredContacts",
    "useWAWebFilteredOutContacts",
    "useWAWebFlow",
    "useWAWebGroupDiscardGuard",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.use,
      g = _.useCallback,
      h = _.useEffect,
      y = _.useRef,
      C = _.useState,
      b = {
        disclaimer: {
          backgroundColor: "x1280gxy",
          textAlign: "x2b8uid",
          $$css: !0,
        },
      },
      v = n("$InternalEnum").Mirrored([
        "SelectParticipant",
        "ConfirmGroupParticipant",
        "ConfirmCommunityParticipant",
        "UsernameKeyVerification",
      ]);
    function S(t) {
      var a,
        i,
        l,
        m,
        _,
        L = t.handleClearSelectedContacts,
        E = t.onBack,
        k = t.reopenAddGroupFlowCallback,
        I = t.selectedContactsMap,
        T = t.updateSelectedContactsState,
        D = o("useWAWebFlow").useFlow(v.SelectParticipant, { onEnd: E }),
        x = D[0],
        $ = D[1],
        P = C([]),
        N = P[0],
        M = P[1],
        w = C([]),
        A = w[0],
        F = w[1],
        O = C(null),
        B = O[0],
        W = O[1],
        q = r("useWAWebFilteredOutContacts")(),
        U = f(r("WAWebAddGroupParticipantGroupHistoryContext.react")),
        V = U.enterFlowTimestamp,
        H = U.selectedMessageCount,
        G = U.shouldSendGroupHistory,
        z = t.chat,
        j = t.communityName,
        K = z.groupMetadata,
        Q =
          (K == null ? void 0 : K.parentGroup) != null ||
          (K == null ? void 0 : K.isParentGroup) === !0,
        X =
          ((a = z.groupMetadata) == null ? void 0 : a.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        Y =
          (K == null ? void 0 : K.memberAddMode) ===
          o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD,
        J = (K == null ? void 0 : K.isLidAddressingMode) === !0,
        Z = y(),
        ee = C((i = I == null ? void 0 : I.size) != null ? i : 0),
        te = ee[0],
        ne = ee[1],
        re = o("useWAWebGroupDiscardGuard").useAddMemberDiscardGuard(te),
        oe = g(
          function () {
            return re(function () {
              return $.pop();
            });
          },
          [re, $],
        ),
        ae = g(
          function () {
            return re(function () {
              (o("WAWebModalManager").ModalManager.close(), L == null || L());
            });
          },
          [re, L],
        ),
        ie = g(function (e, t, n) {
          ne(n.length);
        }, []),
        le = g(
          function (e) {
            e === o("WAWebUim").DismissReason.UIM_INTERACTION &&
            $.step === v.SelectParticipant
              ? re(function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    L == null || L());
                })
              : $.pop();
          },
          [$, re, L],
        );
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          (L == null || L(), $.pop());
        },
      );
      var se = function () {
          ($.pop(),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              p.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
                chat: z,
                groupMetadata: r("nullthrows")(
                  z.groupMetadata,
                  "groupMetadata must be nonnull for us to reach here",
                ),
                onClose: function () {
                  k
                    ? (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                      k())
                    : o("WAWebModalManager").ModalManager.open(
                        p.jsx(S, { chat: z, communityName: j }),
                      );
                },
              }),
            ));
        },
        ue = function () {
          return I ? I.values().toArray() : [];
        },
        ce = function () {
          return A;
        },
        de = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.isUsernameSearch,
              n = e.triedKey,
              r = e.username;
            (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
              contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint")
                .CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
              searchActionName: o("WAWebWamEnumSearchActionName")
                .SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
              isUsernameSearch: t,
            }),
              $.pop(),
              W({ username: r, triedKey: n, isUsernameSearch: t }),
              $.push(v.UsernameKeyVerification));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        me = function (n) {
          var t = o("WAWebContactCollection").ContactCollection.get(n);
          t
            ? (T == null || T(t, !1), pe())
            : o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[username][add-group-member] lid->contact not found",
                    ])),
                )
                .sendLogs("usernames-lid-has-no-lid-contact");
        },
        pe = function () {
          ($.pop(), W(null));
        },
        _e = function () {
          o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
            contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint")
              .CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
            searchActionName: o("WAWebWamEnumSearchActionName")
              .SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
            isUsernameSearch: B == null ? void 0 : B.isUsernameSearch,
          });
        },
        fe = null,
        ge =
          (l = K == null ? void 0 : K.canSetGroupProperty()) != null ? l : !1;
      j != null
        ? (fe = Y
            ? s._(
                /*BTDS*/ "All members can add community members to this group. {Clickable text for editing group permissions}",
                [
                  s._param(
                    "Clickable text for editing group permissions",
                    ge ? p.jsx(R, { onClick: se }) : null,
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Only admins can add community members to this group. {Clickable text for editing group permissions}",
                [
                  s._param(
                    "Clickable text for editing group permissions",
                    ge ? p.jsx(R, { onClick: se }) : null,
                  ),
                ],
              ))
        : (fe = Y
            ? s._(
                /*BTDS*/ "All members are able to add others to this group. {Clickable text for editing group permissions}",
                [
                  s._param(
                    "Clickable text for editing group permissions",
                    ge ? p.jsx(R, { onClick: se }) : null,
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Only admins are able to add others to this group. {Clickable text for editing group permissions}",
                [
                  s._param(
                    "Clickable text for editing group permissions",
                    ge ? p.jsx(R, { onClick: se }) : null,
                  ),
                ],
              ));
      var he = (m = K == null ? void 0 : K.participants.length) != null ? m : 0,
        ye = o("WAWebMiscGatingUtils").getGroupSizeLimit(
          K == null ? void 0 : K.groupType,
        ),
        Ce = s._(
          /*BTDS*/ '_j{"*":"Can\'t add more than {participants_limit} members","_1":"Can\'t add more than 1 member"}',
          [s._plural(ye, "participants_limit")],
        ),
        be;
      ((_ = z.groupMetadata) == null
        ? void 0
        : _.isNonAdminAndACAGJREnabled()) === !0 &&
        (be = p.jsx(
          "div",
          babelHelpers.extends(
            {},
            (d || (d = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.horiz12,
              o("WAWebUISpacing").uiPadding.vert6,
              b.disclaimer,
            ),
            {
              children: p.jsx(o("WAWebText.react").WAWebTextSmall, {
                color: "secondary",
                children: s._(
                  /*BTDS*/ "Admins need to approve new members based on this group's settings.",
                ),
              }),
            },
          ),
        ));
      var ve = function (t) {
          return t.isLid() &&
            o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled()
            ? t
            : J
              ? o("WAWebLidMigrationUtils").toLid(t)
              : t;
        },
        Se = function (t) {
          var e = ve(t.id);
          return !!(e != null && K != null && K.participants.get(e));
        },
        Re = function () {
          var e = X
            ? s._(/*BTDS*/ "Already added to community")
            : s._(/*BTDS*/ "Already added to group");
          return e.toString();
        },
        Le = function (t) {
          var e = ve(t);
          return e != null && K != null && K.participants.get(e) ? Re() : null;
        },
        Ee = r("useWAWebFilteredContacts")(),
        ke = function (t) {
          var e = t.outContacts,
            n = t.selectedItems,
            r = n,
            a = e != null ? e : [];
          if ((M(r), F(a), r.length === 0 && a.length > 0)) {
            Te(a);
            return;
          }
          if (
            Q &&
            o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
          ) {
            $.push(v.ConfirmCommunityParticipant);
            return;
          }
          ($.push(v.ConfirmGroupParticipant),
            G &&
              o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled() &&
              o(
                "WAWebGroupMemberAddingUserJourneyLogger",
              ).GroupMemberAddingUserJourneyLogger.speedBumpDialogDisplayed());
        },
        Ie = function (t, n) {
          var e = r("WAWebFbtIntlList")(
            t.map(function (e) {
              return (
                o("WAWebFrontendContactGetters").getFormattedShortName(e) ||
                e.shortName
              );
            }),
            r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
            r("WAWebFbtIntlList").DELIMITERS.COMMA,
          ).toString();
          if (G && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled())
            return s._(
              /*BTDS*/ '_j{"*":"Add {members} to \\"{subject}\\" group? You are sending message history to the selected members.","_1":"Add {members} to \\"{subject}\\" group? You are sending message history to the selected member."}',
              [
                s._plural(t.length),
                s._param("members", e),
                s._param("subject", n),
              ],
            );
          var a = !!(K != null && K.isCag) || !!(K != null && K.isParentGroup);
          return a
            ? s._(/*BTDS*/ 'Add {members} to "{subject}" community?', [
                s._param("members", e),
                s._param("subject", n),
              ])
            : s._(/*BTDS*/ 'Add {members} to "{subject}" group?', [
                s._param("members", e),
                s._param("subject", n),
              ]);
        },
        Te = function (t) {
          if (
            o("WAWebOutContactInviteGating").isOutContactInviteEnabled() &&
            t.length > 0
          ) {
            o("WAWebModalManager").ModalManager.open(
              p.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
                names: t.map(function (e) {
                  return e.getName();
                }),
                onConfirm: function () {
                  (o("WAWebOutContactInviteAction").sendMultiGroupInvite(
                    t.map(function (e) {
                      return e.phoneNumber;
                    }),
                  ),
                    F([]),
                    o("WAWebModalManager").ModalManager.close(),
                    L == null || L());
                },
                onCancel: function () {
                  (F([]),
                    o("WAWebModalManager").ModalManager.close(),
                    L == null || L());
                },
              }),
            );
            return;
          }
          (o("WAWebModalManager").ModalManager.close(), L == null || L());
        },
        De = function (t, n) {
          o("WAWebModifyParticipantsGroupAction")
            .addParticipants(z, t, function () {
              Te(n);
            })
            .then(function (e) {
              if (
                G &&
                o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled()
              ) {
                var t = e.participants
                  .filter(function (e) {
                    var t = e.code;
                    return t === "200";
                  })
                  .map(function (e) {
                    var t = e.userWid;
                    return t;
                  });
                if (t.length !== 0) {
                  var n = o(
                      "WAWebGroupHistoryRestrictionHelper",
                    ).filterParticipants(t),
                    r = n.historyReceivers,
                    a = n.nonHistoryReceivers;
                  r.length !== 0 &&
                    (o(
                      "WAWebGroupMemberAddingUserJourneyLogger",
                    ).GroupMemberAddingUserJourneyLogger.bundleMessageSentFromIqResponse(),
                    o("WAWebSendHistoryBundleAction")
                      .sendHistoryBundleAction(
                        o("WAWebWidToJid").widToGroupJid(z.id),
                        r,
                        a,
                        H,
                        V,
                      )
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[group-history] failed to send history bundle: ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs(
                            "group-history-add-participant-send-failed",
                          );
                      }));
                }
              }
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[add-group-participant] failed to add participants: ",
                      "",
                    ])),
                  e.message,
                )
                .sendLogs("add-group-participant-failed");
            });
        };
      h(
        function () {
          if ($.step === v.ConfirmGroupParticipant) {
            var e;
            (e = Z.current) == null || e.focus();
          }
        },
        [$.step, L],
      );
      var xe = null;
      if ($.step == null) return null;
      switch ($.step) {
        case v.SelectParticipant:
          xe = p.jsx(o("WAWebSelectModal.react").SelectModal, {
            tsNavigationData: { surface: "group-member-add-existing-group" },
            handleClearSelectedContacts: L,
            handleUsernameContactRowClicked: de,
            updateSelectedContactsState: T,
            getInitialItems: ue,
            getInitialOutContacts: ce,
            onConfirm: ke,
            onBack: E ? oe : void 0,
            onCancel: ae,
            onOverlayClick: ae,
            onSelectionChanged: ie,
            contacts: Ee,
            outContacts: q,
            title: s._(/*BTDS*/ "Add member"),
            isDisabled: Se,
            isSelected: Se,
            customHeader: be,
            customSecondaryText: Le,
            listType: o("WAWebSelectModal.react").ListType
              .ParticipantManageModal,
            singleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.CONFIRM,
            multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.CONFIRM,
            shouldShowSelectionSummary: !1,
            disclaimer: fe,
            maxItems: ye - he,
            maxItemsExceedErrorMsg: Ce,
          });
          break;
        case v.ConfirmGroupParticipant:
          xe = p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "add-group-participant",
            },
            onOK: function () {
              (G &&
                o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled() &&
                o(
                  "WAWebGroupMemberAddingUserJourneyLogger",
                ).GroupMemberAddingUserJourneyLogger.speedBumpDialogContinued(),
                De(N, A));
            },
            okText: s._(/*BTDS*/ '_j{"*":"Add members","_1":"Add member"}', [
              s._plural(N.length),
            ]),
            onCancel: function () {
              (G &&
                o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled() &&
                o(
                  "WAWebGroupMemberAddingUserJourneyLogger",
                ).GroupMemberAddingUserJourneyLogger.speedBumpDialogCanceled(),
                $.pop());
            },
            cancelText: s._(/*BTDS*/ "Cancel"),
            ref: Z,
            children: p.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: Ie(
                N,
                K != null && K.isUnnamed
                  ? o(
                      "WAWebParticipantListUtils",
                    ).calculateUnnamedGroupParticipantsList(K)
                  : z.contact.name,
              ),
            }),
          });
          break;
        case v.ConfirmCommunityParticipant:
          xe = p.jsx(
            o("WAWebCommunityAddParticipantModal.react")
              .CommunityAddParticipantModal,
            {
              onOK: function () {
                return De(N, A);
              },
              onCancel: function () {
                return $.pop();
              },
              contacts: N,
            },
          );
          break;
        case v.UsernameKeyVerification:
          (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
            contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint")
              .CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
            searchActionName: o("WAWebWamEnumSearchActionName")
              .SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
            isUsernameSearch: B == null ? void 0 : B.isUsernameSearch,
          }),
            (xe =
              B &&
              p.jsx(r("WAWebUsernameKeyVerificationModal.react"), {
                username: B.username,
                initWithError: B.triedKey,
                onKeyVerificationSuccess: me,
                onKeyVerificationCancel: pe,
                dontCloseViaModalManager: !0,
                onInvalidKeyError: _e,
              })));
          break;
      }
      return p.jsx(x, { flow: $, requestDismiss: le, children: xe });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onClick,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Edit group permissions")), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = p.jsx(o("WAWebText.react").WAWebClickableText, {
              onClick: n,
              color: "green",
              children: r,
            })),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = S;
  },
  226,
);
