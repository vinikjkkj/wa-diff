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
      a[16] !== l || a[17] !== J
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
                    })
                    .then(function () {
                      J(e);
                    })
                    .catch(r("WAWebNoop"))
                : J(e);
            }
          }),
          (a[16] = l),
          (a[17] = J),
          (a[18] = Z))
        : (Z = a[18]);
      var ee = Z,
        te;
      a[19] !== V
        ? ((te = function () {
            V();
          }),
          (a[19] = V),
          (a[20] = te))
        : (te = a[20]);
      var ne = te,
        re;
      a[21] !== l || a[22] !== x || a[23] !== u || a[24] !== j
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
          (a[21] = l),
          (a[22] = x),
          (a[23] = u),
          (a[24] = j),
          (a[25] = re))
        : (re = a[25]);
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
          a[26] !== m ||
          a[27] !== O ||
          a[28] !== $ ||
          a[29] !== H ||
          a[30] !== d ||
          a[31] !== A
        ) {
          var ue = [],
            ce = A && O;
          if (($ == null ? void 0 : $.id) != null && D($, H, d)) {
            var de;
            (a[33] !== $.id || a[34] !== ue.length || a[35] !== H
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
                (a[33] = $.id),
                (a[34] = ue.length),
                (a[35] = H),
                (a[36] = de))
              : (de = a[36]),
              ue.push(de));
          }
          if (A) {
            var me = o("WAWebMentionsPluginUtil").getUserResults(H, $, m);
            if (me.length !== 0) {
              if (ce) {
                var pe;
                (a[37] !== ue.length
                  ? ((pe = {
                      index: ue.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: _,
                    }),
                    (a[37] = ue.length),
                    (a[38] = pe))
                  : (pe = a[38]),
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
                (a[39] !== ue.length
                  ? ((ge = {
                      index: ue.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: _,
                    }),
                    (a[39] = ue.length),
                    (a[40] = ge))
                  : (ge = a[40]),
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
            (a[26] = m),
            (a[27] = O),
            (a[28] = $),
            (a[29] = H),
            (a[30] = d),
            (a[31] = A),
            (a[32] = se));
        } else se = a[32];
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
        (a[41] !== $
          ? ((Re = o("WAWebMentionsPluginUtil").getNonParticipantCandidates($)),
            (a[41] = $),
            (a[42] = Re))
          : (Re = a[42]),
          (Ce = Re));
      }
      var Le = Ce,
        Ee;
      if (a[43] !== Le || a[44] !== H || a[45] !== ye) {
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
          var Te = o("WAWebMentionsPluginUtil").filterContactsByQuery(H, Le);
          if (Te.length === 0) {
            Ee = null;
            break e;
          }
          var De = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? g
              : f,
            xe = [],
            $e;
          (a[47] === Symbol.for("react.memo_cache_sentinel")
            ? (($e = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: h,
              }),
              (a[47] = $e))
            : ($e = a[47]),
            xe.push($e));
          var Pe;
          a[48] !== H
            ? ((Pe = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: De,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: H,
                  index: n + 1,
                  query: H,
                };
              }),
              (a[48] = H),
              (a[49] = Pe))
            : (Pe = a[49]);
          var Ne = Te.slice(0, Ie).map(Pe);
          (xe.push.apply(xe, Ne), (Ee = xe));
        }
        ((a[43] = Le), (a[44] = H), (a[45] = ye), (a[46] = Ee));
      } else Ee = a[46];
      var Me = Ee,
        we;
      e: {
        if (ye == null && Me == null) {
          we = null;
          break e;
        }
        var Ae;
        if (a[50] !== Me || a[51] !== ye) {
          if (((Ae = []), ye != null)) {
            var Fe;
            (Fe = Ae).push.apply(Fe, ye);
          }
          if (Me != null) {
            var Oe, Be;
            a[53] !== Me
              ? ((Be = Me.filter(L)), (a[53] = Me), (a[54] = Be))
              : (Be = a[54]);
            var We = Be;
            (Oe = Ae).push.apply(Oe, We);
          }
          ((a[50] = Me), (a[51] = ye), (a[52] = Ae));
        } else Ae = a[52];
        we = Ae.length > 0 ? Ae : null;
      }
      var qe = we,
        Ue,
        Ve;
      a[55] !== qe || a[56] !== oe || a[57] !== ee || a[58] !== N
        ? ((Ue = N
            ? []
            : (qe != null ? qe : []).map(function (e) {
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
          (Ve = Ue.findIndex(R)),
          (a[55] = qe),
          (a[56] = oe),
          (a[57] = ee),
          (a[58] = N),
          (a[59] = Ue),
          (a[60] = Ve))
        : ((Ue = a[59]), (Ve = a[60]));
      var He = Ve,
        Ge;
      return (
        a[61] !== He || a[62] !== ne || a[63] !== Ue || a[64] !== U
          ? ((Ge = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: U,
              items: Ue,
              onCancel: ne,
              startingIndex: He,
            })),
            (a[61] = He),
            (a[62] = ne),
            (a[63] = Ue),
            (a[64] = U),
            (a[65] = Ge))
          : (Ge = a[65]),
        Ge
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
    function D(e, t, n) {
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
