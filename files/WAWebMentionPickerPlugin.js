__d(
  "WAWebMentionPickerPlugin",
  [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "WALogger",
    "WAWebABProps",
    "WAWebBotDisclaimerManager",
    "WAWebBotGroupGatingUtils",
    "WAWebBotInvokeUpsellRow.react",
    "WAWebBotLogging",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebComposeBoxActions",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebGetMaybeChatById",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLexicalTypeAheadList.react",
    "WAWebLexicalUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMentionNode",
    "WAWebMentionPickerActionLoggingUtils",
    "WAWebMentionSuggestionsUtils",
    "WAWebMentionsPluginResult.react",
    "WAWebMentionsPluginUtil",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebPushnameConstants",
    "WAWebRichTextInputConst",
    "WAWebSchemaGroupMetadata",
    "WAWebTextStatusGatingUtils",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumMentionType",
    "WDSMargins.stylex",
    "countWhere",
    "cr:19180",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebChatValues",
    "useWAWebLexicalTypeAhead",
    "useWAWebOrgMentionNames",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useMemo,
      h = f.useState,
      y = {
        marginInline1: {
          marginInlineStart: "xm2jcoa",
          marginInlineEnd: "x1mpyi22",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      },
      C = 42,
      b = 52,
      v = 60,
      S = 9,
      R = o("WAWebPushnameConstants").MAX_PUSHNAME_LENGTH * 2,
      L = {
        separator: {
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
      },
      E = 15,
      k = 5;
    function I(e) {
      return !(
        e == null ||
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function T(e) {
      return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        e != null &&
        e.participants.iAmAdmin()
        ? !0
        : o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) ===
            o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
            o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) ===
              o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function D(t) {
      var a,
        i = t.chatId,
        l = t.elevatedPushNamesEnabled,
        p = t.source,
        f = o("LexicalComposerContext").useLexicalComposerContext(),
        D = f[0],
        N =
          (a = o("useWAWebChatValues").useOptionalChatValues(i, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getAcp2Setting,
            o("WAWebFrontendChatGetters").getLimitSharing,
          ])) != null
            ? a
            : [null, null, null],
        M = N[0],
        w = N[1],
        A = N[2],
        F = h(!1),
        O = F[0],
        B = F[1],
        W = I(M),
        q = T(M),
        U = o("useWAWebLexicalTypeAhead").useTypeAhead(
          D,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          { enabled: W || q, maxQueryLength: R, boundary: !0 },
        ),
        V = U.leadOffset,
        H = U.omitQuery,
        G = U.query,
        z = U.replaceQuery,
        j = r("useWAWebOrgMentionNames")(M, G != null && W),
        K = function (t) {
          z(
            function () {
              return new (o("Lexical").TextNode)(
                o("WAWebMentionSuggestionsUtils").formatMention(t),
              );
            },
            { trailingSpace: !0 },
          );
        },
        Q = async function () {
          var t = o("WAWebGetMaybeChatById").getMaybeChatById(i);
          if (t == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[mention-picker] mention all skipped, chat left the collection",
                ])),
            );
            return;
          }
          (p !== "forward-append-message" &&
            o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
              t,
              1,
            ),
            z(
              function () {
                return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
                  text: "@all",
                });
              },
              { trailingSpace: !0 },
            ),
            o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(
              t,
              o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
            ));
        },
        X = function (t) {
          return (
            t.type === "group" ||
            t.type === "contact" ||
            t.type === "mention_all"
          );
        },
        Y = function (t) {
          if (t.type === "mention_all") {
            Q();
            return;
          }
          if (t.type === "contact" || t.type === "group") {
            var e = o("WAWebGetMaybeChatById").getMaybeChatById(i);
            if (e == null) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mention-picker] insert mention skipped, chat left the collection",
                  ])),
              );
              return;
            }
            if (
              o(
                "WAWebLimitSharingUIUtils",
              ).isLimitSharingReceiverEnabledForUsers(e, [t.id])
            )
              o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(
                e,
              );
            else {
              K(t.id);
              var n =
                t.type === "contact"
                  ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                  : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
              o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(
                e,
                n,
              );
            }
          }
        },
        J = function (t) {
          if (
            !(
              t.type === "contact" &&
              o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
            ) &&
            X(t)
          ) {
            if (t.type === "mention_all") {
              Y(t);
              return;
            }
            if (t.type !== "contact" && t.type !== "group") return;
            var e = t;
            if (x(e.id)) {
              var a,
                l = o("WAWebGetMaybeChatById").getMaybeChatById(i);
              if (l == null) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[mention-picker] meta ai notice skipped, chat left the collection",
                    ])),
                );
                return;
              }
              var s = (a = n("cr:19180")) != null ? a : {},
                u = s.logWindowsMetaAiStage;
              o("WAWebBotDisclaimerManager")
                .enterBotTosFlow({
                  noticeId: String(
                    o("WAWebBotTosIds").getApplicableBotNoticeId(
                      o("WAWebBotLogging").BotEntryPointType.Invoke,
                    ),
                  ),
                  botEntryPoint: o("WAWebBotLogging").BotEntryPointType.Invoke,
                  chat: l,
                  wamEntryPoint:
                    M != null
                      ? o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
                          .INVOKE_META_AI_GROUP
                      : o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
                          .INVOKE_META_AI_1ON1,
                  onStage: function (t) {
                    o("WAWebBotUtils").isMetaAiBot(l.id) && (u == null || u(t));
                  },
                })
                .then(function () {
                  Y(e);
                })
                .catch(r("WAWebNoop"));
            } else Y(e);
          }
        },
        Z = function () {
          H();
        },
        ee = function (t, n) {
          switch (t.type) {
            case "contact": {
              var e = t,
                a = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id),
                u = o(
                  "WAWebLimitSharingUIUtils",
                ).isLimitSharingReceiverEnabledForUsersFor(
                  { acp2Setting: w, chatId: i, limitSharing: A },
                  [e.id],
                ),
                c = a || u;
              return x(e.id) &&
                !o("WAWebBotTos").hasSeenMasterBotTos() &&
                !o("WAWebBotTos").hasSeenInvokeTos() &&
                !c
                ? _.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: n })
                : _.jsx(
                    o("WAWebMentionsPluginResult.react").UserResult,
                    {
                      chatId: i,
                      contact: e.contact,
                      term: e.query,
                      theme: null,
                      selected: n,
                      disabled: c,
                      disabledCTA: $(a, u),
                      elevatedPushNamesEnabled: l,
                    },
                    e.contact.id.toString(),
                  );
            }
            case "group": {
              var p = t;
              return _.jsx(
                o("WAWebMentionsPluginResult.react").GroupResult,
                {
                  groupMetadata: p.groupMetadata,
                  term: p.query,
                  theme: null,
                  selected: n,
                },
                p.groupMetadata.id.toString(),
              );
            }
            case "mention_all":
              return _.jsx(
                o("WAWebMentionsPluginResult.react").MentionAllResult,
                { selected: n },
              );
            case "non_participant_contact": {
              var f = t;
              return _.jsx(
                o("WAWebMentionsPluginResult.react").NonParticipantUserResult,
                {
                  contact: f.contact,
                  chatId: i,
                  term: f.query,
                  theme: null,
                  selected: n,
                  elevatedPushNamesEnabled: l,
                  onAddConfirmed: function (t) {
                    (B(!1), K(t.id));
                    var e = o("WAWebGetMaybeChatById").getMaybeChatById(i);
                    if (e == null) {
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[mention-picker] non-group mention logging skipped, chat left the collection",
                          ])),
                      );
                      return;
                    }
                    o(
                      "WAWebMentionPickerActionLoggingUtils",
                    ).logMentionPickerAction(
                      e,
                      o("WAWebWamEnumMentionType").MENTION_TYPE.NON_GROUP_USER,
                      !0,
                    );
                  },
                  onAddCancelled: function () {
                    (B(!1), D.focus());
                  },
                  onAddDialogShown: function () {
                    B(!0);
                  },
                },
                f.contact.id.toString(),
              );
            }
            case "contact_header":
              return _.jsx("div", {
                className:
                  "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
                children: s._(/*BTDS*/ ""),
              });
            case "group_header":
              return _.jsx("div", {
                className:
                  "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
                children: s._(/*BTDS*/ ""),
              });
            case "non_participant_separator":
              return _.jsx(
                "hr",
                babelHelpers.extends(
                  {},
                  (m || (m = r("stylex"))).props([
                    L.separator,
                    o("WDSMargins.stylex").wdsMargins.marginVer4,
                    y.marginInline1,
                  ]),
                ),
              );
          }
        },
        te = g(
          function () {
            var e = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? v
              : b;
            if (G == null || M == null) return null;
            var t = D.getEditorState().read(function () {
              var e = o("WAWebLexicalUtils").$getRangeSelection();
              if (!e) return !1;
              var t = e.anchor.getNode();
              return t instanceof o("WAWebMentionNode").MentionNode;
            });
            if (t) return null;
            var n = [],
              r = W && q;
            (M == null ? void 0 : M.id) != null &&
              P({ groupMetadata: M, query: G, source: p }) &&
              n.push({
                type: "mention_all",
                selectable: !0,
                index: n.length,
                itemKey: "mention-all",
                height: e,
                contentKey: G,
                id: M.id,
                query: G,
              });
            var a = [];
            W &&
              ((a = o("WAWebMentionsPluginUtil").getUserResults(G, M, j)),
              p === "forward-append-message" &&
                (a = a.filter(function (e) {
                  return !e.id.isBot();
                })));
            var i = [];
            q &&
              M != null &&
              (i = o("WAWebMentionsPluginUtil").getSubgroupResults(G, M));
            var l = Math.min(i.length, k),
              s = r && l !== 0 ? 1 : 0,
              u = E - n.length - l - s,
              c = r && a.length !== 0 && u > 1 ? 1 : 0,
              d = Math.max(0, u - c),
              m = a.slice(0, d);
            if (m.length !== 0) {
              c !== 0 &&
                n.push({
                  index: n.length,
                  itemKey: "section-contacts",
                  type: "contact_header",
                  selectable: !1,
                  height: C,
                });
              var _ = n.length;
              n.push.apply(
                n,
                m.map(function (t, n) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: e,
                    itemKey: t.id.toString(),
                    contentKey: G,
                    index: _ + n,
                    query: G,
                  };
                }),
              );
            }
            var f = Math.max(0, E - n.length - s),
              g = i.slice(0, f);
            if (g.length !== 0) {
              s !== 0 &&
                n.push({
                  index: n.length,
                  itemKey: "section-groups",
                  type: "group_header",
                  selectable: !1,
                  height: C,
                });
              var h = n.length;
              n.push.apply(
                n,
                g.map(function (t, n) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: e,
                    itemKey: t.id.toString(),
                    contentKey: G,
                    index: h + n,
                    query: G,
                  };
                }),
              );
            }
            return n.length ? n : null;
          },
          [G, M, D, j, W, q, p],
        ),
        ne = g(
          function () {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "enhanced_mention_suggestions_non_group_members_enabled",
              ) ||
              M == null ||
              p !== "chat-composer" ||
              o("WAWebGroupMetadataGetters").getGroupType(M) ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
              !M.participants.canAdd()
            )
              return !1;
            var e = M.parentGroup;
            if (e != null && !M.participants.iAmAdmin()) {
              var t = r("WAWebGroupMetadataCollection").get(e),
                n = o(
                  "WAWebCommunityAnnouncementGroupUtils",
                ).getCommunityAnnouncementGroup(t);
              if (
                n != null &&
                n.memberAddMode !==
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
              )
                return !1;
            }
            return !0;
          },
          [M, p],
        ),
        re = g(
          function () {
            if (G == null || !ne) return !1;
            var e = r("countWhere")(te != null ? te : [], function (e) {
              return e.selectable;
            });
            if (e > 0) return !1;
            var t = o("WAWebABProps").getABPropConfigValue(
              "enhanced_mention_limit",
            );
            if (t <= 0) return !1;
            var n = o("WAWebABProps").getABPropConfigValue(
              "enhanced_mention_suggestions_min_mention_char_count",
            );
            return !(n > 0 && G.length < n);
          },
          [G, ne, te],
        ),
        oe = g(
          function () {
            return !re || M == null
              ? null
              : o("WAWebMentionsPluginUtil").getNonParticipantCandidates(M);
          },
          [re, M],
        ),
        ae = g(
          function () {
            if (G == null || oe == null) return null;
            var e = o("WAWebABProps").getABPropConfigValue(
              "enhanced_mention_limit",
            );
            if (e <= 0) return null;
            var t = o("WAWebMentionsPluginUtil").filterContactsByQuery(G, oe);
            if (t.length === 0) return null;
            var n = o(
                "WAWebTextStatusGatingUtils",
              ).receiveTextStatusForNewSurfacesEnabled()
                ? v
                : b,
              r = [];
            r.push({
              index: 0,
              itemKey: "section-non-participants-separator",
              type: "non_participant_separator",
              selectable: !1,
              height: S,
            });
            var a = t.slice(0, e).map(function (e, t) {
              return {
                type: "non_participant_contact",
                selectable: !0,
                contact: e,
                id: e.id,
                height: n,
                itemKey: "non-participant-" + e.id.toString(),
                contentKey: G,
                index: t + 1,
                query: G,
              };
            });
            return (r.push.apply(r, a), r);
          },
          [G, oe],
        ),
        ie = g(
          function () {
            if (te == null && ae == null) return null;
            var e = [];
            if ((te != null && e.push.apply(e, te), ae != null)) {
              var t = ae.filter(function (e) {
                return e.type !== "non_participant_separator";
              });
              e.push.apply(e, t);
            }
            return e.length > 0 ? e : null;
          },
          [te, ae],
        ),
        le = O
          ? []
          : (ie != null ? ie : []).map(function (e) {
              var t =
                e.type === "contact_header" ||
                e.type === "group_header" ||
                e.type === "non_participant_separator" ||
                (e.type === "contact" &&
                  o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id));
              return {
                renderFn: function (n) {
                  return ee(e, n);
                },
                onSelect: function () {
                  return J(e);
                },
                width: 360,
                height: r("nullthrows")(e.height),
                skipKeyboardNav: t,
                disabled: t,
              };
            }),
        se = le.findIndex(function (e) {
          return e.skipKeyboardNav === !1;
        });
      return _.jsx(r("WAWebLexicalTypeAheadList.react"), {
        leadOffset: V,
        items: le,
        onCancel: Z,
        startingIndex: se,
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      return e.isBot()
        ? o("WAWebBotUtils").isMetaAiBot(e) ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        : !1;
    }
    function $(e, t) {
      return e
        ? _.jsx("div", { className: "xhslqc4", children: s._(/*BTDS*/ "") })
        : t
          ? _.jsx("div", {
              className: "xo1mcw5",
              children: r("WAWebFbtCommon")("Learn more"),
            })
          : null;
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t,
        n,
        r = e.groupMetadata,
        a = e.query,
        i = e.source;
      if (i === "message_edit" || !"all".startsWith(a)) return !1;
      var l = o("WAWebABProps").getABPropConfigValue(
          "admin_only_mention_everyone_group_size",
        ),
        s = (t = r.participants.iAmAdmin()) != null ? t : !1,
        u = (n = r.participants.length) != null ? n : 0;
      return u < l || s;
    }
    l.default = D;
  },
  226,
);
