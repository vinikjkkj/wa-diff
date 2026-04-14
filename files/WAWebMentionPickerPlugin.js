__d(
  "WAWebMentionPickerPlugin",
  [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "WANullthrows",
    "WAWebABProps",
    "WAWebBotDisclaimerManager",
    "WAWebBotInvokeUpsellRow.react",
    "WAWebBotLogging",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebChatThreadLogging",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebComposeBoxActions",
    "WAWebConstantsDeprecated",
    "WAWebFbtCommon",
    "WAWebGroupGatingUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebLexicalTypeAheadList.react",
    "WAWebLexicalUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMentionNode",
    "WAWebMentionPickerActionWamEvent",
    "WAWebMentionSuggestionsUtils",
    "WAWebMentionsPluginResult.react",
    "WAWebMentionsPluginUtil",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebRichTextInputConst",
    "WAWebSchemaGroupMetadata",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "WAWebWamEnumMentionType",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react",
    "stylex",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = 42,
      f = 52,
      g = 60,
      h = 9,
      y = r("WAWebConstantsDeprecated").MAX_PUSHNAME_LENGTH * 2,
      C = {
        sectionHeader: {
          color: "x1v5yvga",
          fontSize: "x1f6kntn",
          textAlign: "x1yc453h",
          fontWeight: "xo1l8bm",
          height: "x5kalc8",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          WebkitFontSmoothing: "xvmahel",
          $$css: !0,
        },
        separator: {
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
      };
    function b(e, t) {
      return !(
        (e == null && !t) ||
        (e == null ? void 0 : e.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function v(e) {
      return (e == null ? void 0 : e.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        e != null &&
        e.participants.iAmAdmin()
        ? !0
        : (e == null ? void 0 : e.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
            (e == null ? void 0 : e.groupType) ===
              o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function S(t) {
      var a = t.botInvokeEnabled,
        i = a === void 0 ? !1 : a,
        l = t.chat,
        u = t.elevatedPushNamesEnabled,
        d = t.source,
        S = o("LexicalComposerContext").useLexicalComposerContext(),
        L = S[0],
        E = l.groupMetadata,
        k = p(!1),
        I = k[0],
        T = k[1],
        D = b(E, i),
        x = v(E),
        $ = o("useWAWebLexicalTypeAhead").useTypeAhead(
          L,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          { enabled: D || x, maxQueryLength: y, boundary: !0 },
        ),
        P = $.leadOffset,
        N = $.omitQuery,
        M = $.query,
        w = $.replaceQuery,
        A = function (t) {
          w(
            function () {
              return new (o("Lexical").TextNode)(
                o("WAWebMentionSuggestionsUtils").formatMention(t),
              );
            },
            { trailingSpace: !0 },
          );
        },
        F = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
              l,
              1,
            ),
              w(
                function () {
                  return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
                    text: "@all",
                  });
                },
                { trailingSpace: !0 },
              ));
            var e = yield o("WAWebChatThreadLogging").getChatThreadID(
              l.id.toJid(),
            );
            new (o(
              "WAWebMentionPickerActionWamEvent",
            ).MentionPickerActionWamEvent)({
              isAGroup: E != null,
              mentionType: o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
              threadId: e != null ? e : "",
            }).commit();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        O = function (t) {
          return (
            t.type === "group" ||
            t.type === "contact" ||
            t.type === "mention_all"
          );
        },
        B = function (t) {
          if (t.type === "mention_all") {
            F();
            return;
          }
          if (t.type === "contact" || t.type === "group")
            if (
              o(
                "WAWebLimitSharingUIUtils",
              ).isLimitSharingReceiverEnabledForUsers(l, [t.id])
            )
              o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(
                l,
              );
            else {
              A(t.id);
              var e =
                t.type === "contact"
                  ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                  : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
              o("WAWebChatThreadLogging")
                .getChatThreadID(l.id.toJid())
                .then(function (t) {
                  new (o(
                    "WAWebMentionPickerActionWamEvent",
                  ).MentionPickerActionWamEvent)({
                    isAGroup: E != null,
                    mentionType: e,
                    threadId: t != null ? t : "",
                  }).commit();
                });
            }
        },
        W = function (t) {
          if (O(t)) {
            if (t.type === "mention_all") {
              B(t);
              return;
            }
            if (t.type !== "contact" && t.type !== "group") return;
            var e = t,
              n = e.id.isBot();
            n
              ? o("WAWebBotDisclaimerManager")
                  .enterBotTosFlow({
                    noticeId: String(
                      o("WAWebBotTosIds").getApplicableBotNoticeId(
                        o("WAWebBotLogging").BotEntryPointType.Invoke,
                      ),
                    ),
                    botEntryPoint:
                      o("WAWebBotLogging").BotEntryPointType.Invoke,
                    chat: l,
                  })
                  .then(function () {
                    B(e);
                  })
                  .catch(r("WAWebNoop"))
              : B(e);
          }
        },
        q = function () {
          N();
        },
        U = function (n, a) {
          switch (n.type) {
            case "contact": {
              var t = n,
                i = o(
                  "WAWebLimitSharingUIUtils",
                ).isLimitSharingReceiverEnabledForUsers(l, [t.id]);
              return t.id.isBot() &&
                !o("WAWebBotTos").hasSeenMasterBotTos() &&
                !o("WAWebBotTos").hasSeenInvokeTos() &&
                !i
                ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: a })
                : c.jsx(
                    o("WAWebMentionsPluginResult.react").UserResult,
                    {
                      contact: t.contact,
                      term: t.query,
                      theme: null,
                      selected: a,
                      disabled: i,
                      disabledCTA:
                        i &&
                        c.jsx("div", {
                          className: "xo1mcw5",
                          children: r("WAWebFbtCommon")("Learn more"),
                        }),
                      elevatedPushNamesEnabled: u,
                    },
                    t.contact.id.toString(),
                  );
            }
            case "group": {
              var d = n;
              return c.jsx(
                o("WAWebMentionsPluginResult.react").GroupResult,
                {
                  groupMetadata: d.groupMetadata,
                  term: d.query,
                  theme: null,
                  selected: a,
                },
                d.groupMetadata.id.toString(),
              );
            }
            case "mention_all":
              return c.jsx(
                o("WAWebMentionsPluginResult.react").MentionAllResult,
                { selected: a },
              );
            case "non_participant_contact": {
              var m = n;
              return c.jsx(
                o("WAWebMentionsPluginResult.react").NonParticipantUserResult,
                {
                  contact: m.contact,
                  chat: l,
                  term: m.query,
                  theme: null,
                  selected: a,
                  elevatedPushNamesEnabled: u,
                  onAddConfirmed: function (t) {
                    (T(!1),
                      A(t.id),
                      o("WAWebChatThreadLogging")
                        .getChatThreadID(l.id.toJid())
                        .then(function (e) {
                          new (o(
                            "WAWebMentionPickerActionWamEvent",
                          ).MentionPickerActionWamEvent)({
                            isAGroup: !0,
                            mentionType: o("WAWebWamEnumMentionType")
                              .MENTION_TYPE.NON_GROUP_USER,
                            threadId: e != null ? e : "",
                          }).commit();
                        }));
                  },
                  onAddCancelled: function () {
                    (T(!1), L.focus());
                  },
                  onAddDialogShown: function () {
                    T(!0);
                  },
                },
                m.contact.id.toString(),
              );
            }
            case "contact_header":
              return c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    C.sectionHeader,
                    o("WAWebUISpacing").uiPadding.start14,
                  ),
                  { children: s._(/*BTDS*/ "Contacts") },
                ),
              );
            case "group_header":
              return c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    C.sectionHeader,
                    o("WAWebUISpacing").uiPadding.start14,
                  ),
                  { children: s._(/*BTDS*/ "Groups") },
                ),
              );
            case "non_participant_separator":
              return c.jsx(
                "hr",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    C.separator,
                    o("WAWebUISpacing").uiMargin.vert4,
                    o("WAWebUISpacing").uiMargin.horiz1,
                  ]),
                ),
              );
          }
        },
        V = m(
          function () {
            var e = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? g
              : f;
            if (M == null || (E == null && !i)) return null;
            var t = L.getEditorState().read(function () {
              var e = o("WAWebLexicalUtils").$getRangeSelection();
              if (!e) return !1;
              var t = e.anchor.getNode();
              return t instanceof o("WAWebMentionNode").MentionNode;
            });
            if (t) return null;
            var n = [],
              r = D && x;
            if (
              ((E == null ? void 0 : E.id) != null &&
                R(E, M, d) &&
                n.push({
                  type: "mention_all",
                  selectable: !0,
                  index: n.length,
                  itemKey: "mention-all",
                  height: e,
                  contentKey: M,
                  id: E.id,
                  query: M,
                }),
              D)
            ) {
              var a = o("WAWebMentionsPluginUtil").getUserResults(M, E, i);
              if (a.length !== 0) {
                r &&
                  n.push({
                    index: n.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: _,
                  });
                var l = a.map(function (t, r) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: e,
                    itemKey: t.id.toString(),
                    contentKey: M,
                    index: r + n.length,
                    query: M,
                  };
                });
                n.push.apply(n, l);
              }
            }
            if (x && E != null) {
              var s = o("WAWebMentionsPluginUtil").getSubgroupResults(M, E);
              if (s.length !== 0) {
                r &&
                  n.push({
                    index: n.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: _,
                  });
                var u = s.map(function (t, r) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: e,
                    itemKey: t.id.toString(),
                    contentKey: M,
                    index: r + n.length,
                    query: M,
                  };
                });
                n.push.apply(n, u);
              }
            }
            return n.length ? n.slice(0, 15) : null;
          },
          [M, E, L, D, x, i, d],
        ),
        H = m(
          function () {
            if (
              !o(
                "WAWebGroupGatingUtils",
              ).isEnhancedMentionSuggestionsNonGroupMembersEnabled() ||
              E == null ||
              d !== "chat-composer" ||
              E.groupType ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
              !E.participants.canAdd()
            )
              return null;
            var e = E.parentGroup;
            if (e != null && !E.participants.iAmAdmin()) {
              var t = r("WAWebGroupMetadataCollection").get(e),
                n = o(
                  "WAWebCommunityAnnouncementGroupUtils",
                ).getCommunityAnnouncementGroup(t);
              if (
                n != null &&
                n.memberAddMode !==
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
              )
                return null;
            }
            return o("WAWebMentionsPluginUtil").getNonParticipantCandidates(E);
          },
          [E, d],
        ),
        G = m(
          function () {
            if (M == null || H == null) return null;
            var e = r("countWhere")(V != null ? V : [], function (e) {
              return e.selectable;
            });
            if (e > 0) return null;
            var t = o("WAWebABProps").getABPropConfigValue(
              "enhanced_mention_limit",
            );
            if (t <= 0) return null;
            var n = o("WAWebMentionsPluginUtil").filterContactsByQuery(M, H);
            if (n.length === 0) return null;
            var a = o(
                "WAWebTextStatusGatingUtils",
              ).receiveTextStatusForNewSurfacesEnabled()
                ? g
                : f,
              i = [];
            i.push({
              index: 0,
              itemKey: "section-non-participants-separator",
              type: "non_participant_separator",
              selectable: !1,
              height: h,
            });
            var l = n.slice(0, t).map(function (e, t) {
              return {
                type: "non_participant_contact",
                selectable: !0,
                contact: e,
                id: e.id,
                height: a,
                itemKey: "non-participant-" + e.id.toString(),
                contentKey: M,
                index: t + 1,
                query: M,
              };
            });
            return (i.push.apply(i, l), i);
          },
          [M, H, V],
        ),
        z = m(
          function () {
            if (V == null && G == null) return null;
            var e = [];
            if ((V != null && e.push.apply(e, V), G != null)) {
              var t = G.filter(function (e) {
                return e.type !== "non_participant_separator";
              });
              e.push.apply(e, t);
            }
            return e.length > 0 ? e : null;
          },
          [V, G],
        ),
        j = I
          ? []
          : (z != null ? z : []).map(function (e) {
              return {
                renderFn: function (n) {
                  return U(e, n);
                },
                onSelect: function () {
                  return W(e);
                },
                width: 360,
                height: r("WANullthrows")(e.height),
                skipKeyboardNav:
                  e.type === "contact_header" ||
                  e.type === "group_header" ||
                  e.type === "non_participant_separator",
              };
            }),
        K = j.findIndex(function (e) {
          return e.skipKeyboardNav === !1;
        });
      return c.jsx(r("WAWebLexicalTypeAheadList.react"), {
        leadOffset: P,
        items: j,
        onCancel: q,
        startingIndex: K,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t, n) {
      var r, a;
      if (n === "message_edit" || !"all".startsWith(t)) return !1;
      var i = o("WAWebABProps").getABPropConfigValue(
          "admin_only_mention_everyone_group_size",
        ),
        l = (r = e.participants.iAmAdmin()) != null ? r : !1,
        s = (a = e.participants.length) != null ? a : 0,
        u = s < i || l;
      return (
        u &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_mention_everyone_sender_web",
        )
      );
    }
    l.default = S;
  },
  226,
);
