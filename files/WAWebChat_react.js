__d(
  "WAWebChat.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebAccessibility.react",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizGatingUtils",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatCell.react",
    "WAWebChatCellContextMenuV2.react",
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatIcons.react",
    "WAWebChatModel",
    "WAWebChatSearchQuery",
    "WAWebChatTimestamp.react",
    "WAWebChatstateInfo.react",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebConversationPreloadGatingUtils",
    "WAWebDataTransfer",
    "WAWebDetailImage.react",
    "WAWebDomScroll",
    "WAWebEnvironment",
    "WAWebEphemeralFbtKic",
    "WAWebErrorBoundary.react",
    "WAWebEventFiles",
    "WAWebFeatureFlagCollection",
    "WAWebFeatureFlagName",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebGroupChatImage.react",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataContext",
    "WAWebGroupType",
    "WAWebIdleTaskRunner",
    "WAWebKeyboardHotKeys.react",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebMemberLabelCollection",
    "WAWebMiscErrors",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebName.react",
    "WAWebNewsletterChatHeaderSubtitle.react",
    "WAWebParticipantsList.react",
    "WAWebPreloadChatMessagesAction",
    "WAWebSettingsModel",
    "WAWebStackedCirclesImage.react",
    "WAWebStateHoc_DEPRECATED.react",
    "WAWebStateUtils",
    "WAWebStatusChatlistRing.react",
    "WAWebTimerHoc_DEPRECATED.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserSubtitle.react",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumStatusRowSection",
    "WAWebWid",
    "WAWebWidToJid",
    "WDSFocusStateStyles",
    "WDSFontTokenStyles",
    "gkx",
    "justknobx",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "chat",
        "doNotBoldUnread",
        "ephemeralIcon",
        "fakePin",
        "filterPreset",
        "firstCellInList",
        "forceActive",
        "hiddenSubgroupIcon",
        "hideArchivedIcon",
        "hideMuteIcon",
        "hidePin",
        "mode",
        "overrideCommunityAnnouncementGroupName",
        "skipCheckMark",
        "smallUnread",
        "testid",
        "theme",
      ],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d.PureComponent,
      _ = { LAST: "LAST", INFO: "INFO" },
      f = "Files",
      g = (function (t) {
        function n(e) {
          var n, a;
          return (
            (a = t.call(this, e) || this),
            (a.$1 = 0),
            (a.$3 = function (e) {
              a.$2 = e;
            }),
            (a.$5 = function (e) {
              a.$4 = e;
            }),
            (a.state = {
              active: !1,
              focused: !1,
              dragging: !1,
              searchText: "",
              contextMenu: null,
              wdsMenuOpen: !1,
              chatId: null,
              unreadCount: 0,
              isHovered: !1,
              chatAssignmentVisibleToUser:
                ((n = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(
                  o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
                )) == null
                  ? void 0
                  : n.enabled) === !0,
              assignedAgents: o("WAWebBizGatingUtils").chatAssignmentEnabled()
                ? o("WAWebChatAssignmentCollection")
                    .ChatAssignmentCollection.getAgentCollectionForChatId(
                      a.props.chat.id,
                    )
                    .toArray()
                : [],
            }),
            (a.$7 = function () {
              var e = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(
                a.props.chat,
              );
              e !== a.state.unreadCount && a.setState({ unreadCount: e });
            }),
            (a.$8 = function () {
              var e,
                t = a.props.chat;
              o("WAWebChatGetters").getIsGroup(t) &&
                (e = t.groupMetadata) != null &&
                e.stale &&
                r("WAWebGroupMetadataCollection").find(t.id);
            }),
            (a.$9 = function () {
              var e = a.props.chat;
              o("WAWebChatGetters").getIsGroup(e) &&
                r("WAWebMemberLabelCollection").initializeLabelsForChat(
                  o("WAWebWidToJid").widToGroupJid(e.id),
                );
            }),
            (a.$10 = function () {
              a.props.searchQuery
                ? a.setState({ searchText: a.props.searchQuery.trimmed() })
                : o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Chat: prop searchQuery is undefined",
                      ])),
                  );
            }),
            (a.$11 = function (e) {
              if (e === "focus") {
                var t = a.$4;
                t &&
                  (o("WAWebDomScroll").scrollIntoViewIfNeeded(t),
                  r("WAWebFocusTracer").focus(t));
              }
              a.setState({ active: !!e });
            }),
            (a.$12 = function () {
              if (o("WAWebBizGatingUtils").chatAssignmentEnabled()) {
                var e = o("WAWebChatAssignmentCollection")
                  .ChatAssignmentCollection.getAgentCollectionForChatId(
                    a.props.chat.id,
                  )
                  .toArray();
                a.setState({ assignedAgents: e });
              }
            }),
            (a.contextEnabled = function () {
              var e = a.props.noContext;
              return !e;
            }),
            (a.assignChat = function () {
              var e = !!(
                  a.props.searchQuery && !a.props.searchQuery.isEmptyQuery()
                ),
                t = a.props.chat.archive;
              if (a.props.mode === _.INFO) {
                o("WAWebCmd").Cmd.assignChat(
                  a.props.chat,
                  o("WAWebChatAssignmentLogEvents.flow")
                    .ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN,
                );
                return;
              }
              if (e || t) {
                o("WAWebCmd").Cmd.assignChat(
                  a.props.chat,
                  o("WAWebChatAssignmentLogEvents.flow")
                    .ChatAssignmentEntryPointType.MULTI_SELECT,
                );
                return;
              }
              var n = a.props,
                r = n.multiSelection,
                i = n.onStartMultiSelect,
                l = n.selectableState;
              l &&
                r &&
                i &&
                (l.setSelectable(!0),
                r.setVal(o("WAWebStateUtils").unproxy(a.props.chat)),
                i(
                  o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint
                    .ChatAssignment,
                ));
            }),
            (a.$13 = function (e) {
              e.event && a.$14 ? a.$14(e.event) : e.anchor && a.$15 && a.$15();
            }),
            (a.$14 = null),
            (a.$15 = null),
            (a.$16 = function (e) {
              a.$14 = e;
            }),
            (a.$17 = function (e) {
              a.$15 = e;
            }),
            (a.$18 = function (e) {
              (a.setState({ wdsMenuOpen: e }),
                a.props.onContextMenuChange == null ||
                  a.props.onContextMenuChange(e));
            }),
            (a.$19 = function () {
              (a.setState({ contextMenu: null }),
                a.props.onContextMenuChange == null ||
                  a.props.onContextMenuChange(!1));
            }),
            (a.$20 = function (e) {
              var t = a.props,
                n = t.chat,
                r = t.onClick;
              r && r(e, o("WAWebStateUtils").unproxy(n));
            }),
            (a.$21 = function (e) {
              e.button === 0 && a.$20(e);
            }),
            (a.$22 = function () {
              (o("WAWebPreloadChatMessagesAction").preloadChatMessagesAction(
                o("WAWebStateUtils").unproxy(a.props.chat),
              ),
                o(
                  "WAWebConversationPreloadGatingUtils",
                ).isConversationPreloadEnabled() &&
                  o("WAWebCmd").Cmd.trigger("warm_conversation", {
                    chat: o("WAWebStateUtils").unproxy(a.props.chat),
                  }),
                a.setState({ isHovered: !0 }));
            }),
            (a.$23 = function () {
              a.setState({ isHovered: !1 });
            }),
            (a.$24 = function (e) {
              (e.preventDefault(), e.stopPropagation(), a.$20(e));
            }),
            (a.$25 = function (e) {
              if (a.props.chat.canSend) {
                var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
                t.hasType(f) &&
                  (a.$1 === 0 && a.setState({ dragging: !0 }), (a.$1 += 1));
              }
            }),
            (a.$26 = function (e) {
              if (a.props.chat.canSend) {
                var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
                t.hasType(f) &&
                  ((a.$1 -= 1), a.$1 === 0 && a.setState({ dragging: !1 }));
              }
            }),
            (a.$27 = function (e) {
              var t = a.props.chat;
              if (t.canSend) {
                a.setState({ dragging: !1 });
                var n = new (r("WAWebDataTransfer"))(e.dataTransfer);
                n.hasType(f) &&
                  o("WAWebEventFiles")
                    .getFiles(e)
                    .then(function (e) {
                      o("WAWebCmd")
                        .Cmd.openChatFromUnread({ chat: t })
                        .then(function (n) {
                          n &&
                            o("WAWebCmd").Cmd.attachMediaDrawer({
                              chat: t,
                              initCaption: t.getComposeContents(),
                              attachments: e.map(function (e) {
                                return { file: e };
                              }),
                              fileOrigin: o("WAWebWamEnumMediaPickerOriginType")
                                .MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
                            });
                        });
                    })
                    .catch(
                      o("WAFilteredCatch").filteredCatch(
                        o("WAWebMiscErrors").MediaDragDropError,
                        function (e) {
                          o("WAWebCmd")
                            .Cmd.openChatFromUnread({ chat: t })
                            .then(function (n) {
                              n &&
                                e.src &&
                                o(
                                  "WAWebComposeBoxActions",
                                ).ComposeBoxActions.paste(t, e.src);
                            });
                        },
                      ),
                    );
              }
            }),
            (a.$28 = function (e) {
              a.setState({ focused: !0 });
            }),
            (a.$29 = function () {
              a.setState({ focused: !1 });
            }),
            (a.$30 = {
              enter: a.$24,
              space: a.$24,
              left: function () {
                return a.props.handleArrowKeyInChatItem == null
                  ? void 0
                  : a.props.handleArrowKeyInChatItem(
                      a.props.chat.id.toString(),
                    );
              },
              right: function () {
                return a.props.handleArrowKeyInChatItem == null
                  ? void 0
                  : a.props.handleArrowKeyInChatItem(
                      a.props.chat.id.toString(),
                    );
              },
            }),
            (a.$6 = a.props.throttle(a.$7, 0, { leading: !1, tailing: !0 })),
            a
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.getDerivedStateFromProps = function (t, n) {
            var e = {},
              a = t.active,
              i = !1;
            if (a != null) {
              var l = a.value;
              l instanceof o("WAWebChatModel").Chat
                ? (i = r("WAWebWid").equals(l.id, t.chat.id))
                : l instanceof r("WAWebWid") &&
                  r("WAWebWid").isGroup(l) &&
                  (i = r("WAWebWid").equals(l, t.chat.id));
            }
            n.active !== i && (e.active = !!i);
            var s = t.searchQuery ? t.searchQuery.trimmed() : "";
            n.searchText !== s && (e.searchText = s);
            var u = t.chat.id;
            return (
              n.chatId !== u &&
                ((e.chatId = u),
                (e.unreadCount = o(
                  "WAWebFrontendChatGetters",
                ).getOptimisticUnreadCount(t.chat))),
              e
            );
          }));
        var a = n.prototype;
        return (
          (a.componentDidMount = function () {
            var e,
              t = this.props.chat;
            (this.initListeners(this.props),
              o("WAWebChatGetters").getIsGroup(t) &&
                (e = t.groupMetadata) != null &&
                e.stale &&
                o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$8),
              o("WAWebChatGetters").getIsGroup(t) &&
                o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$9));
          }),
          (a.componentDidUpdate = function (t) {
            var e = this.props.chat;
            if (e !== t.chat) {
              var n;
              (o("WAWebChatGetters").getIsGroup(e) &&
                (n = e.groupMetadata) != null &&
                n.stale &&
                o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$8),
                o("WAWebChatGetters").getIsGroup(e) &&
                  o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$9));
            }
            (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) !==
              this.state.unreadCount && this.$6(),
              this.initListeners(this.props, t));
          }),
          (a.initListeners = function (t, n) {
            var e = this,
              r = t.active,
              a = t.chat,
              i = t.listeners,
              l = t.searchQuery;
            (n != null &&
              n.searchQuery &&
              n.searchQuery !== l &&
              i.remove(
                n.searchQuery,
                o("WAWebChatSearchQuery").SEARCH_EVENT,
                this.$10,
              ),
              l &&
                (!n || l !== n.searchQuery) &&
                i.add(l, o("WAWebChatSearchQuery").SEARCH_EVENT, this.$10));
            var s = n == null ? void 0 : n.chat.id;
            if (
              !a.id.equals(s) &&
              (n != null &&
                n.active &&
                i.remove(n.active, n.chat.id.toString(), this.$11),
              r)
            ) {
              var u = a.id.toString();
              i.add(r, u, this.$11);
            }
            (!n &&
              o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
              i.add(
                o("WAWebFeatureFlagCollection").FeatureFlagCollection,
                "add remove change:enabled reset",
                function () {
                  var t;
                  e.setState({
                    chatAssignmentVisibleToUser:
                      ((t = o(
                        "WAWebFeatureFlagCollection",
                      ).FeatureFlagCollection.get(
                        o("WAWebFeatureFlagName").FeatureFlagName
                          .CHAT_ASSIGNMENT,
                      )) == null
                        ? void 0
                        : t.enabled) === !0,
                  });
                },
              ),
              s &&
                i.remove(
                  o(
                    "WAWebChatAssignmentCollection",
                  ).ChatAssignmentCollection.getAgentCollectionForChatId(s),
                  "add change remove",
                  this.$12,
                ),
              i.add(
                o(
                  "WAWebChatAssignmentCollection",
                ).ChatAssignmentCollection.getAgentCollectionForChatId(a.id),
                "add change remove",
                this.$12,
              ),
              i.add(
                o("WAWebChatCollection").ChatCollection,
                "change:isParentGroup",
                function () {
                  return e.forceUpdate();
                },
              ));
          }),
          (a.render = function () {
            var t,
              n,
              a = this.props,
              i = a.chat,
              l = a.doNotBoldUnread,
              u = a.ephemeralIcon,
              d = a.fakePin,
              p = a.filterPreset,
              f = a.firstCellInList,
              g = a.forceActive,
              h = a.hiddenSubgroupIcon,
              y = a.hideArchivedIcon,
              C = a.hideMuteIcon,
              b = a.hidePin,
              v = a.mode,
              S = a.overrideCommunityAnnouncementGroupName,
              R = a.skipCheckMark,
              L = a.smallUnread,
              E = a.testid,
              k = a.theme,
              I = babelHelpers.objectWithoutPropertiesLoose(a, e),
              T = I.secondary,
              D = this.state,
              x = D.active,
              $ = D.assignedAgents,
              P = D.contextMenu,
              N = D.dragging,
              M = D.focused,
              w = D.isHovered,
              A = D.searchText,
              F = D.unreadCount,
              O,
              B,
              W =
                o("WAWebChatAssignmentUtils").canAssignChat(i) &&
                i.isAssignedToMe &&
                i.unopenedByAssignedAgent,
              q = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(i),
              U = l !== !0 && (F !== 0 || W) && !q;
            switch (v) {
              case _.LAST:
                ((O = m.jsx(r("WAWebChatTimestamp.react"), {
                  timestampColor: U ? "accent" : "contentDeemphasized",
                  chat: i,
                })),
                  T == null &&
                    ((T = m.jsx(r("WAWebChatstateInfo.react"), { chat: i })),
                    (B = m.jsx(o("WAWebChatIcons.react").Icons, {
                      chat: i,
                      mute: i.mute,
                      unreadCount: F,
                      hideArchivedIcon: y === !0,
                      hideMuteIcon: C === !0,
                      settings: r("WAWebSettingsModel"),
                      unreadMentionIcon: i.hasUnreadMention,
                      smallUnread: L,
                      hidePin: b,
                      fakePin: d,
                    }))));
                break;
              case _.INFO:
                T == null &&
                  (o("WAWebChatGetters").getIsGroup(i) ||
                  o("WAWebChatGetters").getIsBroadcast(i)
                    ? (T = i.groupMetadata
                        ? m.jsx(r("WAWebParticipantsList.react"), {
                            groupMetadata: i.groupMetadata,
                          })
                        : null)
                    : o("WAWebChatGetters").getIsNewsletter(i)
                      ? (T = m.jsx(
                          r("WAWebNewsletterChatHeaderSubtitle.react"),
                          {
                            newsletterMetadata: i.newsletterMetadata,
                            location: "info",
                          },
                        ))
                      : (T = m.jsx(r("WAWebUserSubtitle.react"), {
                          contact: i.contact,
                          presence: i.presence,
                          chatstate: i.presence.chatstate,
                          location: "list",
                          chatId: i.id,
                        })));
                break;
            }
            var V = this.props.photoSize;
            (k === "chat-info" && (V = 49),
              (k === "subgroup" || k === "community-tab-subgroup") && (V = 40));
            var H =
                ((t = i.groupMetadata) == null ? void 0 : t.groupType) ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
              G = m.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: i.id,
                size: V,
                waitIdle: !r("WAWebEnvironment").isWindows,
                shape: H
                  ? o("WAWebDetailImage.react").DetailImageShape.Squircle
                  : null,
                ephemeralIcon: u,
                isHoveredOrActive: w || x,
                hiddenSubgroupIcon: h,
                showOutline: !1,
              }),
              z =
                this.props.showStatusRingAroundProfilePhoto === !0
                  ? m.jsx(r("WAWebStatusChatlistRing.react"), {
                      contact: i.contact,
                      photoSize: V,
                      waitIdle: !r("WAWebEnvironment").isWindows,
                      rowSection: o("WAWebChatSearchQuery").isSearchResult(
                        this.props.searchQuery,
                      )
                        ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                            .CHAT_LIST_SEARCH
                        : o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                            .CHAT_LIST,
                      rowIndex: o("WAWebChatSearchQuery").isSearchResult(
                        this.props.searchQuery,
                      )
                        ? 0
                        : this.props.index || 0,
                      isHoveredOrActive: w || x,
                    })
                  : G,
              j = this.props.showCommunityInfo,
              K = j === void 0 ? !1 : j,
              Q = o("WAWebChatGetters").getIsGroup(i)
                ? m.jsx(r("WAWebGroupChatImage.react"), {
                    chat: i,
                    regularChatImage: r("justknobx")._("550") ? z : G,
                    selection: this.props.active,
                    showSpeakerForCag: this.props.showSpeakerForCag,
                    showCommunityInfo: K,
                    isHovered: w,
                    size: V,
                    theme: o("WAWebStackedCirclesImage.react")
                      .SubgroupImageTheme.CHAT_LIST,
                  })
                : null,
              X = this.props.mouseDownAsClick,
              Y = r("gkx")("26258")
                ? !1
                : o("WAWebMuteCollection").MuteCollection.getCollapseMuted() &&
                  !o("WAWebChatGetters").getIsNewsletter(i),
              J;
            P &&
              (J = m.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "ChatContextMenu",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: this.$19,
                children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: P }),
              }));
            var Z =
                o("WAWebChatAssignmentUtils").canAssignChat(i) &&
                this.state.chatAssignmentVisibleToUser,
              ee = this.props.searchMatch,
              te =
                ee == null || ee.results.length === 0
                  ? A
                  : ee.results
                      .map(function (e) {
                        return ee.match.substring(
                          e.startIndex,
                          e.startIndex + e.length,
                        );
                      })
                      .join(" "),
              ne =
                F !== 0
                  ? m.jsx("span", {
                      className:
                        "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
                      children:
                        F > 0
                          ? s._(
                              /*BTDS*/ '_j{"*":"{count} unread messages","_1":"1 unread message"}',
                              [s._plural(F, "count")],
                            )
                          : s._(/*BTDS*/ "Unread"),
                    })
                  : null,
              re = m.jsxs(m.Fragment, {
                children: [
                  ne,
                  m.jsx(o("WAWebName.react").Name, {
                    chat: i,
                    firstLabel: p == null ? void 0 : p.label,
                    highlightText: te,
                    showBusinessCheckmark: o(
                      "WAWebContactGetters",
                    ).getShowBusinessCheckmarkInChatlist(i.contact),
                    showLabelIcon: o("WAWebBizGatingUtils").canDisplayLabel(),
                    titlify: !0,
                    ellipsify: !0,
                    showChatAssignmentIcon: Z,
                    assignedAgents: $,
                    showMessageYourselfName: o("WAWebContactGetters").getIsMe(
                      i.contact,
                    ),
                    skipCheckMark: R,
                    overrideCommunityAnnouncementGroupName: S,
                    xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
                    truncateName: !0,
                  }),
                ],
              }),
              oe = null,
              ae = o("WAWebChatEphemerality").getEphemeralSetting(i);
            ae != null &&
              ae !== 0 &&
              (oe = m.jsx(o("WAWebAccessibility.react").InvisibleLabel, {
                children: o(
                  "WAWebEphemeralFbtKic",
                ).getDisappearingMessageExplanationStringKic(ae),
              }));
            var ie,
              le =
                this.props.showCommunityInfo === !0 &&
                o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
                  i.groupMetadata,
                );
            if (le) {
              var se,
                ue =
                  (se = i.groupMetadata) == null
                    ? void 0
                    : se.getParentGroupChat();
              ue != null &&
                (ie = m.jsx(o("WAWebName.react").Name, {
                  chat: ue,
                  titlify: !0,
                  ellipsify: !0,
                }));
            }
            var ce = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "chat-cell-image",
                children:
                  o("WAWebChatGetters").getIsGroup(i) && Q != null ? Q : z,
              }),
              de = I.focused != null ? I.focused : M;
            return m.jsx(r("WAWebGroupMetadataContext").Provider, {
              value: i.groupMetadata,
              children: m.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
                ref: this.$5,
                handlers: this.$30,
                onFocus: this.$28,
                onBlur: this.$29,
                focusType: "keyboardOnly",
                onDragEnter: this.$25,
                onDragLeave: this.$26,
                onDrop: this.$27,
                "aria-selected": g != null ? g : x,
                tabIndex: x ? 0 : -1,
                children: [
                  m.jsxs(m.Fragment, {
                    children: [
                      m.jsx(r("WAWebChatCellContextMenuV2.react"), {
                        chat: i,
                        assignChat: this.assignChat,
                        cellRef: this.$2,
                        multiSelection: this.props.multiSelection,
                        onStartMultiSelect: this.props.onStartMultiSelect,
                        searchQuery: this.props.searchQuery,
                        selectableState: this.props.selectableState,
                        onContextMenuChange: this.$18,
                        onContextMenuReady: this.$16,
                        onChevronMenuReady: this.$17,
                      }),
                      m.jsx(r("WAWebChatCell.react"), {
                        id: i.id,
                        ref: this.$3,
                        theme: k,
                        contextEnabled: this.contextEnabled,
                        pendingAction: i.pendingAction,
                        contextMenu: !!P || this.state.wdsMenuOpen,
                        unreadStyle: U,
                        active: g != null ? g : !!x,
                        activeStyleType: this.props.activeStyleType,
                        isMuted: Y && o("WAWebMuteGetters").getIsMuted(i.mute),
                        dragging: !!N,
                        image: ce,
                        primary: re,
                        primaryDetail: O,
                        secondary: T,
                        secondaryDetail: B,
                        onClick: X ? void 0 : this.$20,
                        onMouseDown: X ? this.$21 : void 0,
                        onContext: this.$13,
                        onMouseEnter: this.$22,
                        onMouseLeave: this.$23,
                        testid: void 0,
                        isNewsletter: o("WAWebChatGetters").getIsNewsletter(i),
                        label: ie,
                        hideMeta:
                          o("WAWebChatGetters").getIsNewsletter(i) &&
                          ((n = i.newsletterMetadata) == null
                            ? void 0
                            : n.suspended),
                        firstCellInList: f,
                        className: (c || (c = r("stylex")))(
                          de &&
                            o("WDSFocusStateStyles").WDSFocusStateStyles
                              .genericFocusPersistent,
                        ),
                      }),
                    ],
                  }),
                  oe,
                  J,
                ],
              }),
            });
          }),
          n
        );
      })(p);
    ((g.CONCERNS = {
      chat: [
        "id",
        "isReadOnly",
        "pendingAction",
        "canSend",
        "contact",
        "presence",
        "groupMetadata",
        "newsletterMetadata",
        "mute",
        "pendingSeenCount",
        "unreadCount",
        "labels",
        "archive",
        "hasUnreadMention",
        "unopenedByAssignedAgent",
        "chatlistPreview",
        "lastReactionPreview",
        "isAssignedToMe",
        "msgs",
        "msgs",
        "msgsChanged",
        "pendingDeleteForMeCount",
        "isFavorite",
        "capiThreadControl",
        "groupType",
        "active",
      ],
    }),
      (g.defaultProps = { mode: _.LAST }));
    function h() {
      return r("WAWebTimerHoc_DEPRECATED.react")(
        o("WAWebListenerHoc_DEPRECATED").ListenerHOC(
          r("WAWebStateHoc_DEPRECATED.react")(g, g.CONCERNS),
        ),
      );
    }
    var y = h(),
      C = h();
    ((l.Mode = _), (l.ChatFactory = h), (l.Chat = y), (l.ChatOrContact = C));
  },
  226,
);
