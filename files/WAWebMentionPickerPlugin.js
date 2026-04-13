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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(67),
        i = t.botInvokeEnabled,
        l = t.chat,
        u = t.elevatedPushNamesEnabled,
        d = t.source,
        m = i === void 0 ? !1 : i,
        S = o("LexicalComposerContext").useLexicalComposerContext(),
        $ = S[0],
        P = l.groupMetadata,
        N = p(!1),
        M = N[0],
        w = N[1],
        A;
      a[0] !== m || a[1] !== P
        ? ((A = b(P, m)), (a[0] = m), (a[1] = P), (a[2] = A))
        : (A = a[2]);
      var F = A,
        O;
      a[3] !== P ? ((O = v(P)), (a[3] = P), (a[4] = O)) : (O = a[4]);
      var B = O,
        W = F || B,
        q;
      a[5] !== W
        ? ((q = { enabled: W, maxQueryLength: y, boundary: !0 }),
          (a[5] = W),
          (a[6] = q))
        : (q = a[6]);
      var U = o("useWAWebLexicalTypeAhead").useTypeAhead(
          $,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          q,
        ),
        V = U.leadOffset,
        H = U.omitQuery,
        G = U.query,
        z = U.replaceQuery,
        j;
      a[7] !== z
        ? ((j = function (t) {
            z(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (a[7] = z),
          (a[8] = j))
        : (j = a[8]);
      var K = j,
        Q;
      a[9] !== l || a[10] !== P || a[11] !== z
        ? ((Q = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                l,
                1,
              ),
                z(D, { trailingSpace: !0 }));
              var e = yield o("WAWebChatThreadLogging").getChatThreadID(
                l.id.toJid(),
              );
              new (o(
                "WAWebMentionPickerActionWamEvent",
              ).MentionPickerActionWamEvent)({
                isAGroup: P != null,
                mentionType: o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
                threadId: e != null ? e : "",
              }).commit();
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[9] = l),
          (a[10] = P),
          (a[11] = z),
          (a[12] = Q))
        : (Q = a[12]);
      var X = Q,
        Y = T,
        J;
      a[13] !== l || a[14] !== K || a[15] !== X
        ? ((J = function (t) {
            if (t.type === "mention_all") {
              X();
              return;
            }
            (t.type === "contact" || t.type === "group") &&
              (o(
                "WAWebLimitSharingUIUtils",
              ).isLimitSharingReceiverEnabledForUsers(l, [t.id])
                ? o(
                    "WAWebLimitSharingUIUtils",
                  ).showLimitSharingInvokeBlockedPopup(l)
                : K(t.id));
          }),
          (a[13] = l),
          (a[14] = K),
          (a[15] = X),
          (a[16] = J))
        : (J = a[16]);
      var Z = J,
        ee;
      a[17] !== l || a[18] !== Z
        ? ((ee = function (t) {
            if (Y(t)) {
              if (t.type === "mention_all") {
                Z(t);
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
                      Z(e);
                    })
                    .catch(r("WAWebNoop"))
                : Z(e);
            }
          }),
          (a[17] = l),
          (a[18] = Z),
          (a[19] = ee))
        : (ee = a[19]);
      var te = ee,
        ne;
      a[20] !== H
        ? ((ne = function () {
            H();
          }),
          (a[20] = H),
          (a[21] = ne))
        : (ne = a[21]);
      var re = ne,
        oe;
      a[22] !== l || a[23] !== $ || a[24] !== u || a[25] !== K
        ? ((oe = function (n, a) {
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
                      (w(!1),
                        K(t.id),
                        o("WAWebChatThreadLogging")
                          .getChatThreadID(l.id.toJid())
                          .then(I));
                    },
                    onAddCancelled: function () {
                      (w(!1), $.focus());
                    },
                    onAddDialogShown: function () {
                      w(!0);
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
          }),
          (a[22] = l),
          (a[23] = $),
          (a[24] = u),
          (a[25] = K),
          (a[26] = oe))
        : (oe = a[26]);
      var ae = oe,
        ie;
      e: {
        var le = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? g
          : f;
        if (G == null) {
          ie = null;
          break e;
        }
        if (P == null && !m) {
          ie = null;
          break e;
        }
        var se = $.getEditorState().read(k);
        if (se) {
          ie = null;
          break e;
        }
        var ue;
        if (
          a[27] !== m ||
          a[28] !== B ||
          a[29] !== P ||
          a[30] !== G ||
          a[31] !== d ||
          a[32] !== F
        ) {
          var ce = [],
            de = F && B;
          if ((P == null ? void 0 : P.id) != null && x(P, G, d)) {
            var me;
            (a[34] !== P.id || a[35] !== ce.length || a[36] !== G
              ? ((me = {
                  type: "mention_all",
                  selectable: !0,
                  index: ce.length,
                  itemKey: "mention-all",
                  height: le,
                  contentKey: G,
                  id: P.id,
                  query: G,
                }),
                (a[34] = P.id),
                (a[35] = ce.length),
                (a[36] = G),
                (a[37] = me))
              : (me = a[37]),
              ce.push(me));
          }
          if (F) {
            var pe = o("WAWebMentionsPluginUtil").getUserResults(G, P, m);
            if (pe.length !== 0) {
              if (de) {
                var _e;
                (a[38] !== ce.length
                  ? ((_e = {
                      index: ce.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: _,
                    }),
                    (a[38] = ce.length),
                    (a[39] = _e))
                  : (_e = a[39]),
                  ce.push(_e));
              }
              var fe = pe.map(function (e, t) {
                return {
                  type: "contact",
                  selectable: !0,
                  contact: e,
                  id: e.id,
                  height: le,
                  itemKey: e.id.toString(),
                  contentKey: G,
                  index: t + ce.length,
                  query: G,
                };
              });
              ce.push.apply(ce, fe);
            }
          }
          if (B && P != null) {
            var ge = o("WAWebMentionsPluginUtil").getSubgroupResults(G, P);
            if (ge.length !== 0) {
              if (de) {
                var he;
                (a[40] !== ce.length
                  ? ((he = {
                      index: ce.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: _,
                    }),
                    (a[40] = ce.length),
                    (a[41] = he))
                  : (he = a[41]),
                  ce.push(he));
              }
              var ye = ge.map(function (e, t) {
                return {
                  type: "group",
                  selectable: !0,
                  groupMetadata: e,
                  id: e.id,
                  height: le,
                  itemKey: e.id.toString(),
                  contentKey: G,
                  index: t + ce.length,
                  query: G,
                };
              });
              ce.push.apply(ce, ye);
            }
          }
          ((ue = ce.length ? ce.slice(0, 15) : null),
            (a[27] = m),
            (a[28] = B),
            (a[29] = P),
            (a[30] = G),
            (a[31] = d),
            (a[32] = F),
            (a[33] = ue));
        } else ue = a[33];
        ie = ue;
      }
      var Ce = ie,
        be;
      e: {
        if (
          !o(
            "WAWebGroupGatingUtils",
          ).isEnhancedMentionSuggestionsNonGroupMembersEnabled()
        ) {
          be = null;
          break e;
        }
        if (P == null) {
          be = null;
          break e;
        }
        if (d !== "chat-composer") {
          be = null;
          break e;
        }
        if (
          P.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          be = null;
          break e;
        }
        if (!P.participants.canAdd()) {
          be = null;
          break e;
        }
        var ve = P.parentGroup;
        if (ve != null && !P.participants.iAmAdmin()) {
          var Se = r("WAWebGroupMetadataCollection").get(ve),
            Re = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(Se);
          if (
            Re != null &&
            Re.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            be = null;
            break e;
          }
        }
        var Le;
        (a[42] !== P
          ? ((Le = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(P)),
            (a[42] = P),
            (a[43] = Le))
          : (Le = a[43]),
          (be = Le));
      }
      var Ee = be,
        ke;
      if (a[44] !== Ee || a[45] !== G || a[46] !== Ce) {
        e: {
          if (G == null || Ee == null) {
            ke = null;
            break e;
          }
          var Ie = r("countWhere")(Ce != null ? Ce : [], E);
          if (Ie > 0) {
            ke = null;
            break e;
          }
          var Te = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Te <= 0) {
            ke = null;
            break e;
          }
          var De = o("WAWebMentionsPluginUtil").filterContactsByQuery(G, Ee);
          if (De.length === 0) {
            ke = null;
            break e;
          }
          var xe = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? g
              : f,
            $e = [],
            Pe;
          (a[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((Pe = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: h,
              }),
              (a[48] = Pe))
            : (Pe = a[48]),
            $e.push(Pe));
          var Ne;
          a[49] !== G
            ? ((Ne = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: xe,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: G,
                  index: n + 1,
                  query: G,
                };
              }),
              (a[49] = G),
              (a[50] = Ne))
            : (Ne = a[50]);
          var Me = De.slice(0, Te).map(Ne);
          ($e.push.apply($e, Me), (ke = $e));
        }
        ((a[44] = Ee), (a[45] = G), (a[46] = Ce), (a[47] = ke));
      } else ke = a[47];
      var we = ke,
        Ae;
      e: {
        if (Ce == null && we == null) {
          Ae = null;
          break e;
        }
        var Fe;
        if (a[51] !== we || a[52] !== Ce) {
          if (((Fe = []), Ce != null)) {
            var Oe;
            (Oe = Fe).push.apply(Oe, Ce);
          }
          if (we != null) {
            var Be, We;
            a[54] !== we
              ? ((We = we.filter(L)), (a[54] = we), (a[55] = We))
              : (We = a[55]);
            var qe = We;
            (Be = Fe).push.apply(Be, qe);
          }
          ((a[51] = we), (a[52] = Ce), (a[53] = Fe));
        } else Fe = a[53];
        Ae = Fe.length > 0 ? Fe : null;
      }
      var Ue = Ae,
        Ve,
        He;
      a[56] !== Ue || a[57] !== ae || a[58] !== te || a[59] !== M
        ? ((Ve = M
            ? []
            : (Ue != null ? Ue : []).map(function (e) {
                return {
                  renderFn: function (n) {
                    return ae(e, n);
                  },
                  onSelect: function () {
                    return te(e);
                  },
                  width: 360,
                  height: r("WANullthrows")(e.height),
                  skipKeyboardNav:
                    e.type === "contact_header" ||
                    e.type === "group_header" ||
                    e.type === "non_participant_separator",
                };
              })),
          (He = Ve.findIndex(R)),
          (a[56] = Ue),
          (a[57] = ae),
          (a[58] = te),
          (a[59] = M),
          (a[60] = Ve),
          (a[61] = He))
        : ((Ve = a[60]), (He = a[61]));
      var Ge = He,
        ze;
      return (
        a[62] !== Ge || a[63] !== re || a[64] !== Ve || a[65] !== V
          ? ((ze = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: V,
              items: Ve,
              onCancel: re,
              startingIndex: Ge,
            })),
            (a[62] = Ge),
            (a[63] = re),
            (a[64] = Ve),
            (a[65] = V),
            (a[66] = ze))
          : (ze = a[66]),
        ze
      );
    }
    function R(e) {
      return e.skipKeyboardNav === !1;
    }
    function L(e) {
      return e.type !== "non_participant_separator";
    }
    function E(e) {
      return e.selectable;
    }
    function k() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return !1;
      var t = e.anchor.getNode();
      return t instanceof o("WAWebMentionNode").MentionNode;
    }
    function I(e) {
      new (o("WAWebMentionPickerActionWamEvent").MentionPickerActionWamEvent)({
        isAGroup: !0,
        mentionType: o("WAWebWamEnumMentionType").MENTION_TYPE.NON_GROUP_USER,
        threadId: e != null ? e : "",
      }).commit();
    }
    function T(e) {
      return (
        e.type === "group" || e.type === "contact" || e.type === "mention_all"
      );
    }
    function D() {
      return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
        text: "@all",
      });
    }
    function x(e, t, n) {
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
