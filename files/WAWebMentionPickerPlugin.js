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
    "asyncToGeneratorRuntime",
    "countWhere",
    "cr:19180",
    "nullthrows",
    "react",
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(74),
        l = t.chatId,
        p = t.elevatedPushNamesEnabled,
        f = t.source,
        g = o("LexicalComposerContext").useLexicalComposerContext(),
        D = g[0],
        W =
          (a = o("useWAWebChatValues").useOptionalChatValues(l, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getAcp2Setting,
            o("WAWebFrontendChatGetters").getLimitSharing,
          ])) != null
            ? a
            : [null, null, null],
        q = W[0],
        U = W[1],
        V = W[2],
        H = h(!1),
        G = H[0],
        z = H[1],
        j;
      i[0] !== q ? ((j = I(q)), (i[0] = q), (i[1] = j)) : (j = i[1]);
      var K = j,
        Q;
      i[2] !== q ? ((Q = T(q)), (i[2] = q), (i[3] = Q)) : (Q = i[3]);
      var X = Q,
        Y = K || X,
        J;
      i[4] !== Y
        ? ((J = { enabled: Y, maxQueryLength: R, boundary: !0 }),
          (i[4] = Y),
          (i[5] = J))
        : (J = i[5]);
      var Z = o("useWAWebLexicalTypeAhead").useTypeAhead(
          D,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          J,
        ),
        ee = Z.leadOffset,
        te = Z.omitQuery,
        ne = Z.query,
        re = Z.replaceQuery,
        oe = r("useWAWebOrgMentionNames")(q, ne != null && K),
        ae;
      i[6] !== re
        ? ((ae = function (t) {
            re(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (i[6] = re),
          (i[7] = ae))
        : (ae = i[7]);
      var ie = ae,
        le;
      i[8] !== l || i[9] !== re || i[10] !== f
        ? ((le = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = o("WAWebGetMaybeChatById").getMaybeChatById(l);
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mention-picker] mention all skipped, chat left the collection",
                    ])),
                );
                return;
              }
              (f !== "forward-append-message" &&
                o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                  t,
                  1,
                ),
                re(A, { trailingSpace: !0 }),
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(
                  t,
                  o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
                ));
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (i[8] = l),
          (i[9] = re),
          (i[10] = f),
          (i[11] = le))
        : (le = i[11]);
      var se = le,
        ue = w,
        ce;
      i[12] !== l || i[13] !== ie || i[14] !== se
        ? ((ce = function (t) {
            if (t.type === "mention_all") {
              se();
              return;
            }
            if (t.type === "contact" || t.type === "group") {
              var e = o("WAWebGetMaybeChatById").getMaybeChatById(l);
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
                o(
                  "WAWebLimitSharingUIUtils",
                ).showLimitSharingInvokeBlockedPopup(e);
              else {
                ie(t.id);
                var n =
                  t.type === "contact"
                    ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                    : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(e, n);
              }
            }
          }),
          (i[12] = l),
          (i[13] = ie),
          (i[14] = se),
          (i[15] = ce))
        : (ce = i[15]);
      var de = ce,
        me;
      i[16] !== l || i[17] !== q || i[18] !== de
        ? ((me = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              ue(t)
            ) {
              if (t.type === "mention_all") {
                de(t);
                return;
              }
              if (t.type !== "contact" && t.type !== "group") return;
              var e = t;
              if (F(e.id)) {
                var a,
                  i = o("WAWebGetMaybeChatById").getMaybeChatById(l);
                if (i == null) {
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
                    botEntryPoint:
                      o("WAWebBotLogging").BotEntryPointType.Invoke,
                    chat: i,
                    wamEntryPoint:
                      q != null
                        ? o("WAWebWamEnumBotEntryPointType")
                            .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP
                        : o("WAWebWamEnumBotEntryPointType")
                            .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1,
                    onStage: function (t) {
                      o("WAWebBotUtils").isMetaAiBot(i.id) &&
                        (u == null || u(t));
                    },
                  })
                  .then(function () {
                    de(e);
                  })
                  .catch(r("WAWebNoop"));
              } else de(e);
            }
          }),
          (i[16] = l),
          (i[17] = q),
          (i[18] = de),
          (i[19] = me))
        : (me = i[19]);
      var pe = me,
        _e;
      i[20] !== te
        ? ((_e = function () {
            te();
          }),
          (i[20] = te),
          (i[21] = _e))
        : (_e = i[21]);
      var fe = _e,
        ge;
      i[22] !== U ||
      i[23] !== l ||
      i[24] !== D ||
      i[25] !== p ||
      i[26] !== ie ||
      i[27] !== V
        ? ((ge = function (t, n) {
            switch (t.type) {
              case "contact": {
                var e = t,
                  a = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id),
                  i = o(
                    "WAWebLimitSharingUIUtils",
                  ).isLimitSharingReceiverEnabledForUsersFor(
                    { acp2Setting: U, chatId: l, limitSharing: V },
                    [e.id],
                  ),
                  u = a || i;
                return F(e.id) &&
                  !o("WAWebBotTos").hasSeenMasterBotTos() &&
                  !o("WAWebBotTos").hasSeenInvokeTos() &&
                  !u
                  ? _.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: n })
                  : _.jsx(
                      o("WAWebMentionsPluginResult.react").UserResult,
                      {
                        chatId: l,
                        contact: e.contact,
                        term: e.query,
                        theme: null,
                        selected: n,
                        disabled: u,
                        disabledCTA: O(a, i),
                        elevatedPushNamesEnabled: p,
                      },
                      e.contact.id.toString(),
                    );
              }
              case "group": {
                var c = t;
                return _.jsx(
                  o("WAWebMentionsPluginResult.react").GroupResult,
                  {
                    groupMetadata: c.groupMetadata,
                    term: c.query,
                    theme: null,
                    selected: n,
                  },
                  c.groupMetadata.id.toString(),
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
                    chatId: l,
                    term: f.query,
                    theme: null,
                    selected: n,
                    elevatedPushNamesEnabled: p,
                    onAddConfirmed: function (t) {
                      (z(!1), ie(t.id));
                      var e = o("WAWebGetMaybeChatById").getMaybeChatById(l);
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
                        o("WAWebWamEnumMentionType").MENTION_TYPE
                          .NON_GROUP_USER,
                        !0,
                      );
                    },
                    onAddCancelled: function () {
                      (z(!1), D.focus());
                    },
                    onAddDialogShown: function () {
                      z(!0);
                    },
                  },
                  f.contact.id.toString(),
                );
              }
              case "contact_header":
                return _.jsx("div", {
                  className:
                    "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
                  children: s._(/*BTDS*/ "Contacts"),
                });
              case "group_header":
                return _.jsx("div", {
                  className:
                    "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
                  children: s._(/*BTDS*/ "Groups"),
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
          }),
          (i[22] = U),
          (i[23] = l),
          (i[24] = D),
          (i[25] = p),
          (i[26] = ie),
          (i[27] = V),
          (i[28] = ge))
        : (ge = i[28]);
      var he = ge,
        ye;
      e: {
        var Ce = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? v
          : b;
        if (ne == null) {
          ye = null;
          break e;
        }
        if (q == null) {
          ye = null;
          break e;
        }
        var be = D.getEditorState().read(M);
        if (be) {
          ye = null;
          break e;
        }
        var ve;
        if (
          i[29] !== oe ||
          i[30] !== X ||
          i[31] !== q ||
          i[32] !== ne ||
          i[33] !== f ||
          i[34] !== K
        ) {
          ve = [];
          var Se = K && X;
          if (
            (q == null ? void 0 : q.id) != null &&
            B({ groupMetadata: q, query: ne, source: f })
          ) {
            var Re;
            (i[36] !== q.id || i[37] !== ve.length || i[38] !== ne
              ? ((Re = {
                  type: "mention_all",
                  selectable: !0,
                  index: ve.length,
                  itemKey: "mention-all",
                  height: Ce,
                  contentKey: ne,
                  id: q.id,
                  query: ne,
                }),
                (i[36] = q.id),
                (i[37] = ve.length),
                (i[38] = ne),
                (i[39] = Re))
              : (Re = i[39]),
              ve.push(Re));
          }
          var Le = [];
          K &&
            ((Le = o("WAWebMentionsPluginUtil").getUserResults(ne, q, oe)),
            f === "forward-append-message" && (Le = Le.filter(N)));
          var Ee = [];
          X &&
            q != null &&
            (Ee = o("WAWebMentionsPluginUtil").getSubgroupResults(ne, q));
          var ke = Math.min(Ee.length, k),
            Ie = Se && ke !== 0 ? 1 : 0,
            Te = E - ve.length - ke - Ie,
            De = Se && Le.length !== 0 && Te > 1 ? 1 : 0,
            xe = Math.max(0, Te - De),
            $e = Le.slice(0, xe);
          if ($e.length !== 0) {
            var Pe;
            if (De !== 0) {
              var Ne;
              (i[40] !== ve.length
                ? ((Ne = {
                    index: ve.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: C,
                  }),
                  (i[40] = ve.length),
                  (i[41] = Ne))
                : (Ne = i[41]),
                ve.push(Ne));
            }
            var Me = ve.length,
              we;
            (i[42] !== Me || i[43] !== ne
              ? ((we = function (t, n) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: Ce,
                    itemKey: t.id.toString(),
                    contentKey: ne,
                    index: Me + n,
                    query: ne,
                  };
                }),
                (i[42] = Me),
                (i[43] = ne),
                (i[44] = we))
              : (we = i[44]),
              (Pe = ve).push.apply(Pe, $e.map(we)));
          }
          var Ae = Math.max(0, E - ve.length - Ie),
            Fe = Ee.slice(0, Ae);
          if (Fe.length !== 0) {
            var Oe;
            if (Ie !== 0) {
              var Be;
              (i[45] !== ve.length
                ? ((Be = {
                    index: ve.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: C,
                  }),
                  (i[45] = ve.length),
                  (i[46] = Be))
                : (Be = i[46]),
                ve.push(Be));
            }
            var We = ve.length,
              qe;
            (i[47] !== ne || i[48] !== We
              ? ((qe = function (t, n) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: Ce,
                    itemKey: t.id.toString(),
                    contentKey: ne,
                    index: We + n,
                    query: ne,
                  };
                }),
                (i[47] = ne),
                (i[48] = We),
                (i[49] = qe))
              : (qe = i[49]),
              (Oe = ve).push.apply(Oe, Fe.map(qe)));
          }
          ((i[29] = oe),
            (i[30] = X),
            (i[31] = q),
            (i[32] = ne),
            (i[33] = f),
            (i[34] = K),
            (i[35] = ve));
        } else ve = i[35];
        ye = ve.length ? ve : null;
      }
      var Ue = ye,
        Ve;
      e: {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_suggestions_non_group_members_enabled",
          )
        ) {
          Ve = !1;
          break e;
        }
        if (q == null) {
          Ve = !1;
          break e;
        }
        if (f !== "chat-composer") {
          Ve = !1;
          break e;
        }
        if (
          o("WAWebGroupMetadataGetters").getGroupType(q) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          Ve = !1;
          break e;
        }
        if (!q.participants.canAdd()) {
          Ve = !1;
          break e;
        }
        var He = q.parentGroup;
        if (He != null && !q.participants.iAmAdmin()) {
          var Ge = r("WAWebGroupMetadataCollection").get(He),
            ze = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(Ge);
          if (
            ze != null &&
            ze.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            Ve = !1;
            break e;
          }
        }
        Ve = !0;
      }
      var je = Ve,
        Ke;
      e: {
        if (ne == null || !je) {
          Ke = !1;
          break e;
        }
        var Qe = r("countWhere")(Ue != null ? Ue : [], P);
        if (Qe > 0) {
          Ke = !1;
          break e;
        }
        var Xe = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (Xe <= 0) {
          Ke = !1;
          break e;
        }
        var Ye = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (Ye > 0 && ne.length < Ye) {
          Ke = !1;
          break e;
        }
        Ke = !0;
      }
      var Je = Ke,
        Ze;
      e: {
        if (!Je || q == null) {
          Ze = null;
          break e;
        }
        var et;
        (i[50] !== q
          ? ((et = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(q)),
            (i[50] = q),
            (i[51] = et))
          : (et = i[51]),
          (Ze = et));
      }
      var tt = Ze,
        nt;
      if (i[52] !== tt || i[53] !== ne) {
        e: {
          if (ne == null || tt == null) {
            nt = null;
            break e;
          }
          var rt = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (rt <= 0) {
            nt = null;
            break e;
          }
          var ot = o("WAWebMentionsPluginUtil").filterContactsByQuery(ne, tt);
          if (ot.length === 0) {
            nt = null;
            break e;
          }
          var at = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? v
              : b,
            it = [],
            lt;
          (i[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((lt = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: S,
              }),
              (i[55] = lt))
            : (lt = i[55]),
            it.push(lt));
          var st;
          i[56] !== ne
            ? ((st = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: at,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: ne,
                  index: n + 1,
                  query: ne,
                };
              }),
              (i[56] = ne),
              (i[57] = st))
            : (st = i[57]);
          var ut = ot.slice(0, rt).map(st);
          (it.push.apply(it, ut), (nt = it));
        }
        ((i[52] = tt), (i[53] = ne), (i[54] = nt));
      } else nt = i[54];
      var ct = nt,
        dt;
      e: {
        if (Ue == null && ct == null) {
          dt = null;
          break e;
        }
        var mt;
        if (i[58] !== ct || i[59] !== Ue) {
          if (((mt = []), Ue != null)) {
            var pt;
            (pt = mt).push.apply(pt, Ue);
          }
          if (ct != null) {
            var _t, ft;
            i[61] !== ct
              ? ((ft = ct.filter($)), (i[61] = ct), (i[62] = ft))
              : (ft = i[62]);
            var gt = ft;
            (_t = mt).push.apply(_t, gt);
          }
          ((i[58] = ct), (i[59] = Ue), (i[60] = mt));
        } else mt = i[60];
        dt = mt.length > 0 ? mt : null;
      }
      var ht = dt,
        yt,
        Ct;
      i[63] !== ht || i[64] !== he || i[65] !== pe || i[66] !== G
        ? ((yt = G
            ? []
            : (ht != null ? ht : []).map(function (e) {
                var t =
                  e.type === "contact_header" ||
                  e.type === "group_header" ||
                  e.type === "non_participant_separator" ||
                  (e.type === "contact" &&
                    o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id));
                return {
                  renderFn: function (n) {
                    return he(e, n);
                  },
                  onSelect: function () {
                    return pe(e);
                  },
                  width: 360,
                  height: r("nullthrows")(e.height),
                  skipKeyboardNav: t,
                  disabled: t,
                };
              })),
          (Ct = yt.findIndex(x)),
          (i[63] = ht),
          (i[64] = he),
          (i[65] = pe),
          (i[66] = G),
          (i[67] = yt),
          (i[68] = Ct))
        : ((yt = i[67]), (Ct = i[68]));
      var bt = Ct,
        vt;
      return (
        i[69] !== bt || i[70] !== fe || i[71] !== yt || i[72] !== ee
          ? ((vt = _.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: ee,
              items: yt,
              onCancel: fe,
              startingIndex: bt,
            })),
            (i[69] = bt),
            (i[70] = fe),
            (i[71] = yt),
            (i[72] = ee),
            (i[73] = vt))
          : (vt = i[73]),
        vt
      );
    }
    function x(e) {
      return e.skipKeyboardNav === !1;
    }
    function $(e) {
      return e.type !== "non_participant_separator";
    }
    function P(e) {
      return e.selectable;
    }
    function N(e) {
      return !e.id.isBot();
    }
    function M() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return !1;
      var t = e.anchor.getNode();
      return t instanceof o("WAWebMentionNode").MentionNode;
    }
    function w(e) {
      return (
        e.type === "group" || e.type === "contact" || e.type === "mention_all"
      );
    }
    function A() {
      return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
        text: "@all",
      });
    }
    function F(e) {
      return e.isBot()
        ? o("WAWebBotUtils").isMetaAiBot(e) ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        : !1;
    }
    function O(e, t) {
      return e
        ? _.jsx("div", {
            className: "xhslqc4",
            children: s._(/*BTDS*/ "Only available on your phone"),
          })
        : t
          ? _.jsx("div", {
              className: "xo1mcw5",
              children: r("WAWebFbtCommon")("Learn more"),
            })
          : null;
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B(e) {
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
