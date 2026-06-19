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
    "WAWebBotUtils",
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
    "WAWebMentionPickerActionLoggingUtils",
    "WAWebMentionSuggestionsUtils",
    "WAWebMentionsPluginResult.react",
    "WAWebMentionsPluginUtil",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebRichTextInputConst",
    "WAWebSchemaGroupMetadata",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "WAWebWamEnumBotEntryPointType",
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
      var a = o("react-compiler-runtime").c(66),
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
      a[9] !== l || a[10] !== z
        ? ((Q = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                l,
                1,
              ),
                z(T, { trailingSpace: !0 }),
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(
                  l,
                  o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[9] = l),
          (a[10] = z),
          (a[11] = Q))
        : (Q = a[11]);
      var X = Q,
        Y = I,
        J;
      a[12] !== l || a[13] !== K || a[14] !== X
        ? ((J = function (t) {
            if (t.type === "mention_all") {
              X();
              return;
            }
            if (t.type === "contact" || t.type === "group")
              if (
                o(
                  "WAWebLimitSharingUIUtils",
                ).isLimitSharingReceiverEnabledForUsers(l, [t.id])
              )
                o(
                  "WAWebLimitSharingUIUtils",
                ).showLimitSharingInvokeBlockedPopup(l);
              else {
                K(t.id);
                var e =
                  t.type === "contact"
                    ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                    : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(l, e);
              }
          }),
          (a[12] = l),
          (a[13] = K),
          (a[14] = X),
          (a[15] = J))
        : (J = a[15]);
      var Z = J,
        ee;
      a[16] !== l || a[17] !== P || a[18] !== Z
        ? ((ee = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              Y(t)
            ) {
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
                      wamEntryPoint:
                        P != null
                          ? o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP
                          : o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1,
                    })
                    .then(function () {
                      Z(e);
                    })
                    .catch(r("WAWebNoop"))
                : Z(e);
            }
          }),
          (a[16] = l),
          (a[17] = P),
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
                  i = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id),
                  d = o(
                    "WAWebLimitSharingUIUtils",
                  ).isLimitSharingReceiverEnabledForUsers(l, [t.id]),
                  m = i || d;
                return t.id.isBot() &&
                  !o("WAWebBotTos").hasSeenMasterBotTos() &&
                  !o("WAWebBotTos").hasSeenInvokeTos() &&
                  !m
                  ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: a })
                  : c.jsx(
                      o("WAWebMentionsPluginResult.react").UserResult,
                      {
                        contact: t.contact,
                        term: t.query,
                        theme: null,
                        selected: a,
                        disabled: m,
                        disabledCTA: D(i, d),
                        elevatedPushNamesEnabled: u,
                      },
                      t.contact.id.toString(),
                    );
              }
              case "group": {
                var p = n;
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").GroupResult,
                  {
                    groupMetadata: p.groupMetadata,
                    term: p.query,
                    theme: null,
                    selected: a,
                  },
                  p.groupMetadata.id.toString(),
                );
              }
              case "mention_all":
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").MentionAllResult,
                  { selected: a },
                );
              case "non_participant_contact": {
                var _ = n;
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").NonParticipantUserResult,
                  {
                    contact: _.contact,
                    chat: l,
                    term: _.query,
                    theme: null,
                    selected: a,
                    elevatedPushNamesEnabled: u,
                    onAddConfirmed: function (t) {
                      (w(!1),
                        K(t.id),
                        o(
                          "WAWebMentionPickerActionLoggingUtils",
                        ).logMentionPickerAction(
                          l,
                          o("WAWebWamEnumMentionType").MENTION_TYPE
                            .NON_GROUP_USER,
                          !0,
                        ));
                    },
                    onAddCancelled: function () {
                      (w(!1), $.focus());
                    },
                    onAddDialogShown: function () {
                      w(!0);
                    },
                  },
                  _.contact.id.toString(),
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
          if (
            (P == null ? void 0 : P.id) != null &&
            x({ groupMetadata: P, query: G, source: d })
          ) {
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
          be = !1;
          break e;
        }
        if (P == null) {
          be = !1;
          break e;
        }
        if (d !== "chat-composer") {
          be = !1;
          break e;
        }
        if (
          P.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          be = !1;
          break e;
        }
        if (!P.participants.canAdd()) {
          be = !1;
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
            be = !1;
            break e;
          }
        }
        be = !0;
      }
      var Le = be,
        Ee;
      e: {
        if (G == null || !Le) {
          Ee = !1;
          break e;
        }
        var ke = r("countWhere")(Ce != null ? Ce : [], E);
        if (ke > 0) {
          Ee = !1;
          break e;
        }
        var Ie = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (Ie <= 0) {
          Ee = !1;
          break e;
        }
        var Te = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (Te > 0 && G.length < Te) {
          Ee = !1;
          break e;
        }
        Ee = !0;
      }
      var De = Ee,
        xe;
      e: {
        if (!De || P == null) {
          xe = null;
          break e;
        }
        var $e;
        (a[42] !== P
          ? (($e = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(P)),
            (a[42] = P),
            (a[43] = $e))
          : ($e = a[43]),
          (xe = $e));
      }
      var Pe = xe,
        Ne;
      if (a[44] !== Pe || a[45] !== G) {
        e: {
          if (G == null || Pe == null) {
            Ne = null;
            break e;
          }
          var Me = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Me <= 0) {
            Ne = null;
            break e;
          }
          var we = o("WAWebMentionsPluginUtil").filterContactsByQuery(G, Pe);
          if (we.length === 0) {
            Ne = null;
            break e;
          }
          var Ae = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? g
              : f,
            Fe = [],
            Oe;
          (a[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((Oe = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: h,
              }),
              (a[47] = Oe))
            : (Oe = a[47]),
            Fe.push(Oe));
          var Be;
          a[48] !== G
            ? ((Be = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Ae,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: G,
                  index: n + 1,
                  query: G,
                };
              }),
              (a[48] = G),
              (a[49] = Be))
            : (Be = a[49]);
          var We = we.slice(0, Me).map(Be);
          (Fe.push.apply(Fe, We), (Ne = Fe));
        }
        ((a[44] = Pe), (a[45] = G), (a[46] = Ne));
      } else Ne = a[46];
      var qe = Ne,
        Ue;
      e: {
        if (Ce == null && qe == null) {
          Ue = null;
          break e;
        }
        var Ve;
        if (a[50] !== qe || a[51] !== Ce) {
          if (((Ve = []), Ce != null)) {
            var He;
            (He = Ve).push.apply(He, Ce);
          }
          if (qe != null) {
            var Ge, ze;
            a[53] !== qe
              ? ((ze = qe.filter(L)), (a[53] = qe), (a[54] = ze))
              : (ze = a[54]);
            var je = ze;
            (Ge = Ve).push.apply(Ge, je);
          }
          ((a[50] = qe), (a[51] = Ce), (a[52] = Ve));
        } else Ve = a[52];
        Ue = Ve.length > 0 ? Ve : null;
      }
      var Ke = Ue,
        Qe,
        Xe;
      a[55] !== Ke || a[56] !== ae || a[57] !== te || a[58] !== M
        ? ((Qe = M
            ? []
            : (Ke != null ? Ke : []).map(function (e) {
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
                    e.type === "non_participant_separator" ||
                    (e.type === "contact" &&
                      o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)),
                };
              })),
          (Xe = Qe.findIndex(R)),
          (a[55] = Ke),
          (a[56] = ae),
          (a[57] = te),
          (a[58] = M),
          (a[59] = Qe),
          (a[60] = Xe))
        : ((Qe = a[59]), (Xe = a[60]));
      var Ye = Xe,
        Je;
      return (
        a[61] !== Ye || a[62] !== re || a[63] !== Qe || a[64] !== V
          ? ((Je = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: V,
              items: Qe,
              onCancel: re,
              startingIndex: Ye,
            })),
            (a[61] = Ye),
            (a[62] = re),
            (a[63] = Qe),
            (a[64] = V),
            (a[65] = Je))
          : (Je = a[65]),
        Je
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
      return (
        e.type === "group" || e.type === "contact" || e.type === "mention_all"
      );
    }
    function T() {
      return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
        text: "@all",
      });
    }
    function D(e, t) {
      return e
        ? c.jsx("div", {
            className: "xhslqc4",
            children: s._(/*BTDS*/ "Only available on mobile devices"),
          })
        : t
          ? c.jsx("div", {
              className: "xo1mcw5",
              children: r("WAWebFbtCommon")("Learn more"),
            })
          : null;
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
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
        u = (n = r.participants.length) != null ? n : 0,
        c = u < l || s;
      return (
        c &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_mention_everyone_sender_web",
        )
      );
    }
    l.default = S;
  },
  226,
);
