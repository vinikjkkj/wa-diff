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
      var a = o("react-compiler-runtime").c(67),
        i = t.botInvokeEnabled,
        l = t.chat,
        u = t.elevatedPushNamesEnabled,
        d = t.source,
        m = i === void 0 ? !1 : i,
        S = o("LexicalComposerContext").useLexicalComposerContext(),
        x = S[0],
        $ = l.groupMetadata,
        P = p(!1),
        N = P[0],
        M = P[1],
        w;
      a[0] !== m || a[1] !== $
        ? ((w = b($, m)), (a[0] = m), (a[1] = $), (a[2] = w))
        : (w = a[2]);
      var A = w,
        F;
      a[3] !== $ ? ((F = v($)), (a[3] = $), (a[4] = F)) : (F = a[4]);
      var O = F,
        B = A || O,
        W;
      a[5] !== B
        ? ((W = { enabled: B, maxQueryLength: y, boundary: !0 }),
          (a[5] = B),
          (a[6] = W))
        : (W = a[6]);
      var q = o("useWAWebLexicalTypeAhead").useTypeAhead(
          x,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          W,
        ),
        U = q.leadOffset,
        V = q.omitQuery,
        H = q.query,
        G = q.replaceQuery,
        z;
      a[7] !== G
        ? ((z = function (t) {
            G(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (a[7] = G),
          (a[8] = z))
        : (z = a[8]);
      var j = z,
        K;
      a[9] !== l || a[10] !== G
        ? ((K = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                l,
                1,
              ),
                G(T, { trailingSpace: !0 }),
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
          (a[10] = G),
          (a[11] = K))
        : (K = a[11]);
      var Q = K,
        X = I,
        Y;
      a[12] !== l || a[13] !== j || a[14] !== Q
        ? ((Y = function (t) {
            if (t.type === "mention_all") {
              Q();
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
                j(t.id);
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
          (a[13] = j),
          (a[14] = Q),
          (a[15] = Y))
        : (Y = a[15]);
      var J = Y,
        Z;
      a[16] !== l || a[17] !== $ || a[18] !== J
        ? ((Z = function (t) {
            if (X(t)) {
              if (t.type === "mention_all") {
                J(t);
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
                        $ != null
                          ? o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP
                          : o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1,
                    })
                    .then(function () {
                      J(e);
                    })
                    .catch(r("WAWebNoop"))
                : J(e);
            }
          }),
          (a[16] = l),
          (a[17] = $),
          (a[18] = J),
          (a[19] = Z))
        : (Z = a[19]);
      var ee = Z,
        te;
      a[20] !== V
        ? ((te = function () {
            V();
          }),
          (a[20] = V),
          (a[21] = te))
        : (te = a[21]);
      var ne = te,
        re;
      a[22] !== l || a[23] !== x || a[24] !== u || a[25] !== j
        ? ((re = function (n, a) {
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
                      (M(!1),
                        j(t.id),
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
                      (M(!1), x.focus());
                    },
                    onAddDialogShown: function () {
                      M(!0);
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
          (a[23] = x),
          (a[24] = u),
          (a[25] = j),
          (a[26] = re))
        : (re = a[26]);
      var oe = re,
        ae;
      e: {
        var ie = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? g
          : f;
        if (H == null) {
          ae = null;
          break e;
        }
        if ($ == null && !m) {
          ae = null;
          break e;
        }
        var le = x.getEditorState().read(k);
        if (le) {
          ae = null;
          break e;
        }
        var se;
        if (
          a[27] !== m ||
          a[28] !== O ||
          a[29] !== $ ||
          a[30] !== H ||
          a[31] !== d ||
          a[32] !== A
        ) {
          var ue = [],
            ce = A && O;
          if (
            ($ == null ? void 0 : $.id) != null &&
            D({ groupMetadata: $, query: H, source: d })
          ) {
            var de;
            (a[34] !== $.id || a[35] !== ue.length || a[36] !== H
              ? ((de = {
                  type: "mention_all",
                  selectable: !0,
                  index: ue.length,
                  itemKey: "mention-all",
                  height: ie,
                  contentKey: H,
                  id: $.id,
                  query: H,
                }),
                (a[34] = $.id),
                (a[35] = ue.length),
                (a[36] = H),
                (a[37] = de))
              : (de = a[37]),
              ue.push(de));
          }
          if (A) {
            var me = o("WAWebMentionsPluginUtil").getUserResults(H, $, m);
            if (me.length !== 0) {
              if (ce) {
                var pe;
                (a[38] !== ue.length
                  ? ((pe = {
                      index: ue.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: _,
                    }),
                    (a[38] = ue.length),
                    (a[39] = pe))
                  : (pe = a[39]),
                  ue.push(pe));
              }
              var _e = me.map(function (e, t) {
                return {
                  type: "contact",
                  selectable: !0,
                  contact: e,
                  id: e.id,
                  height: ie,
                  itemKey: e.id.toString(),
                  contentKey: H,
                  index: t + ue.length,
                  query: H,
                };
              });
              ue.push.apply(ue, _e);
            }
          }
          if (O && $ != null) {
            var fe = o("WAWebMentionsPluginUtil").getSubgroupResults(H, $);
            if (fe.length !== 0) {
              if (ce) {
                var ge;
                (a[40] !== ue.length
                  ? ((ge = {
                      index: ue.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: _,
                    }),
                    (a[40] = ue.length),
                    (a[41] = ge))
                  : (ge = a[41]),
                  ue.push(ge));
              }
              var he = fe.map(function (e, t) {
                return {
                  type: "group",
                  selectable: !0,
                  groupMetadata: e,
                  id: e.id,
                  height: ie,
                  itemKey: e.id.toString(),
                  contentKey: H,
                  index: t + ue.length,
                  query: H,
                };
              });
              ue.push.apply(ue, he);
            }
          }
          ((se = ue.length ? ue.slice(0, 15) : null),
            (a[27] = m),
            (a[28] = O),
            (a[29] = $),
            (a[30] = H),
            (a[31] = d),
            (a[32] = A),
            (a[33] = se));
        } else se = a[33];
        ae = se;
      }
      var ye = ae,
        Ce;
      e: {
        if (
          !o(
            "WAWebGroupGatingUtils",
          ).isEnhancedMentionSuggestionsNonGroupMembersEnabled()
        ) {
          Ce = null;
          break e;
        }
        if ($ == null) {
          Ce = null;
          break e;
        }
        if (d !== "chat-composer") {
          Ce = null;
          break e;
        }
        if (
          $.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          Ce = null;
          break e;
        }
        if (!$.participants.canAdd()) {
          Ce = null;
          break e;
        }
        var be = $.parentGroup;
        if (be != null && !$.participants.iAmAdmin()) {
          var ve = r("WAWebGroupMetadataCollection").get(be),
            Se = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(ve);
          if (
            Se != null &&
            Se.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            Ce = null;
            break e;
          }
        }
        var Re;
        (a[42] !== $
          ? ((Re = o("WAWebMentionsPluginUtil").getNonParticipantCandidates($)),
            (a[42] = $),
            (a[43] = Re))
          : (Re = a[43]),
          (Ce = Re));
      }
      var Le = Ce,
        Ee;
      if (a[44] !== Le || a[45] !== H || a[46] !== ye) {
        e: {
          if (H == null || Le == null) {
            Ee = null;
            break e;
          }
          var ke = r("countWhere")(ye != null ? ye : [], E);
          if (ke > 0) {
            Ee = null;
            break e;
          }
          var Ie = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Ie <= 0) {
            Ee = null;
            break e;
          }
          var Te = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_suggestions_min_mention_char_count",
          );
          if (Te > 0 && H.length < Te) {
            Ee = null;
            break e;
          }
          var De = o("WAWebMentionsPluginUtil").filterContactsByQuery(H, Le);
          if (De.length === 0) {
            Ee = null;
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
          a[49] !== H
            ? ((Ne = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: xe,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: H,
                  index: n + 1,
                  query: H,
                };
              }),
              (a[49] = H),
              (a[50] = Ne))
            : (Ne = a[50]);
          var Me = De.slice(0, Ie).map(Ne);
          ($e.push.apply($e, Me), (Ee = $e));
        }
        ((a[44] = Le), (a[45] = H), (a[46] = ye), (a[47] = Ee));
      } else Ee = a[47];
      var we = Ee,
        Ae;
      e: {
        if (ye == null && we == null) {
          Ae = null;
          break e;
        }
        var Fe;
        if (a[51] !== we || a[52] !== ye) {
          if (((Fe = []), ye != null)) {
            var Oe;
            (Oe = Fe).push.apply(Oe, ye);
          }
          if (we != null) {
            var Be, We;
            a[54] !== we
              ? ((We = we.filter(L)), (a[54] = we), (a[55] = We))
              : (We = a[55]);
            var qe = We;
            (Be = Fe).push.apply(Be, qe);
          }
          ((a[51] = we), (a[52] = ye), (a[53] = Fe));
        } else Fe = a[53];
        Ae = Fe.length > 0 ? Fe : null;
      }
      var Ue = Ae,
        Ve,
        He;
      a[56] !== Ue || a[57] !== oe || a[58] !== ee || a[59] !== N
        ? ((Ve = N
            ? []
            : (Ue != null ? Ue : []).map(function (e) {
                return {
                  renderFn: function (n) {
                    return oe(e, n);
                  },
                  onSelect: function () {
                    return ee(e);
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
          (a[57] = oe),
          (a[58] = ee),
          (a[59] = N),
          (a[60] = Ve),
          (a[61] = He))
        : ((Ve = a[60]), (He = a[61]));
      var Ge = He,
        ze;
      return (
        a[62] !== Ge || a[63] !== ne || a[64] !== Ve || a[65] !== U
          ? ((ze = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: U,
              items: Ve,
              onCancel: ne,
              startingIndex: Ge,
            })),
            (a[62] = Ge),
            (a[63] = ne),
            (a[64] = Ve),
            (a[65] = U),
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
      return (
        e.type === "group" || e.type === "contact" || e.type === "mention_all"
      );
    }
    function T() {
      return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
        text: "@all",
      });
    }
    function D(e) {
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
