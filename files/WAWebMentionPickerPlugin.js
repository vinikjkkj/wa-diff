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
      var n = o("react-compiler-runtime").c(66),
        a = t.botInvokeEnabled,
        i = t.chat,
        l = t.elevatedPushNamesEnabled,
        u = t.source,
        d = a === void 0 ? !1 : a,
        m = o("LexicalComposerContext").useLexicalComposerContext(),
        S = m[0],
        x = i.groupMetadata,
        $ = p(!1),
        P = $[0],
        N = $[1],
        M;
      n[0] !== d || n[1] !== x
        ? ((M = b(x, d)), (n[0] = d), (n[1] = x), (n[2] = M))
        : (M = n[2]);
      var w = M,
        A;
      n[3] !== x ? ((A = v(x)), (n[3] = x), (n[4] = A)) : (A = n[4]);
      var F = A,
        O = w || F,
        B;
      n[5] !== O
        ? ((B = { enabled: O, maxQueryLength: y, boundary: !0 }),
          (n[5] = O),
          (n[6] = B))
        : (B = n[6]);
      var W = o("useWAWebLexicalTypeAhead").useTypeAhead(
          S,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          B,
        ),
        q = W.leadOffset,
        U = W.omitQuery,
        V = W.query,
        H = W.replaceQuery,
        G;
      n[7] !== H
        ? ((G = function (t) {
            H(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (n[7] = H),
          (n[8] = G))
        : (G = n[8]);
      var z = G,
        j;
      n[9] !== i || n[10] !== H
        ? ((j = async function () {
            (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
              i,
              1,
            ),
              H(T, { trailingSpace: !0 }),
              o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(
                i,
                o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
              ));
          }),
          (n[9] = i),
          (n[10] = H),
          (n[11] = j))
        : (j = n[11]);
      var K = j,
        Q = I,
        X;
      n[12] !== i || n[13] !== z || n[14] !== K
        ? ((X = function (t) {
            if (t.type === "mention_all") {
              K();
              return;
            }
            if (t.type === "contact" || t.type === "group")
              if (
                o(
                  "WAWebLimitSharingUIUtils",
                ).isLimitSharingReceiverEnabledForUsers(i, [t.id])
              )
                o(
                  "WAWebLimitSharingUIUtils",
                ).showLimitSharingInvokeBlockedPopup(i);
              else {
                z(t.id);
                var e =
                  t.type === "contact"
                    ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                    : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(i, e);
              }
          }),
          (n[12] = i),
          (n[13] = z),
          (n[14] = K),
          (n[15] = X))
        : (X = n[15]);
      var Y = X,
        J;
      n[16] !== i || n[17] !== x || n[18] !== Y
        ? ((J = function (t) {
            if (Q(t)) {
              if (t.type === "mention_all") {
                Y(t);
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
                      chat: i,
                      wamEntryPoint:
                        x != null
                          ? o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP
                          : o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1,
                    })
                    .then(function () {
                      Y(e);
                    })
                    .catch(r("WAWebNoop"))
                : Y(e);
            }
          }),
          (n[16] = i),
          (n[17] = x),
          (n[18] = Y),
          (n[19] = J))
        : (J = n[19]);
      var Z = J,
        ee;
      n[20] !== U
        ? ((ee = function () {
            U();
          }),
          (n[20] = U),
          (n[21] = ee))
        : (ee = n[21]);
      var te = ee,
        ne;
      n[22] !== i || n[23] !== S || n[24] !== l || n[25] !== z
        ? ((ne = function (n, a) {
            switch (n.type) {
              case "contact": {
                var t = n,
                  u = o(
                    "WAWebLimitSharingUIUtils",
                  ).isLimitSharingReceiverEnabledForUsers(i, [t.id]);
                return t.id.isBot() &&
                  !o("WAWebBotTos").hasSeenMasterBotTos() &&
                  !o("WAWebBotTos").hasSeenInvokeTos() &&
                  !u
                  ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: a })
                  : c.jsx(
                      o("WAWebMentionsPluginResult.react").UserResult,
                      {
                        contact: t.contact,
                        term: t.query,
                        theme: null,
                        selected: a,
                        disabled: u,
                        disabledCTA:
                          u &&
                          c.jsx("div", {
                            className: "xo1mcw5",
                            children: r("WAWebFbtCommon")("Learn more"),
                          }),
                        elevatedPushNamesEnabled: l,
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
                    chat: i,
                    term: m.query,
                    theme: null,
                    selected: a,
                    elevatedPushNamesEnabled: l,
                    onAddConfirmed: function (t) {
                      (N(!1),
                        z(t.id),
                        o(
                          "WAWebMentionPickerActionLoggingUtils",
                        ).logMentionPickerAction(
                          i,
                          o("WAWebWamEnumMentionType").MENTION_TYPE
                            .NON_GROUP_USER,
                          !0,
                        ));
                    },
                    onAddCancelled: function () {
                      (N(!1), S.focus());
                    },
                    onAddDialogShown: function () {
                      N(!0);
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
          (n[22] = i),
          (n[23] = S),
          (n[24] = l),
          (n[25] = z),
          (n[26] = ne))
        : (ne = n[26]);
      var re = ne,
        oe;
      e: {
        var ae = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? g
          : f;
        if (V == null) {
          oe = null;
          break e;
        }
        if (x == null && !d) {
          oe = null;
          break e;
        }
        var ie = S.getEditorState().read(k);
        if (ie) {
          oe = null;
          break e;
        }
        var le;
        if (
          n[27] !== d ||
          n[28] !== F ||
          n[29] !== x ||
          n[30] !== V ||
          n[31] !== u ||
          n[32] !== w
        ) {
          var se = [],
            ue = w && F;
          if (
            (x == null ? void 0 : x.id) != null &&
            D({ groupMetadata: x, query: V, source: u })
          ) {
            var ce;
            (n[34] !== x.id || n[35] !== se.length || n[36] !== V
              ? ((ce = {
                  type: "mention_all",
                  selectable: !0,
                  index: se.length,
                  itemKey: "mention-all",
                  height: ae,
                  contentKey: V,
                  id: x.id,
                  query: V,
                }),
                (n[34] = x.id),
                (n[35] = se.length),
                (n[36] = V),
                (n[37] = ce))
              : (ce = n[37]),
              se.push(ce));
          }
          if (w) {
            var de = o("WAWebMentionsPluginUtil").getUserResults(V, x, d);
            if (de.length !== 0) {
              if (ue) {
                var me;
                (n[38] !== se.length
                  ? ((me = {
                      index: se.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: _,
                    }),
                    (n[38] = se.length),
                    (n[39] = me))
                  : (me = n[39]),
                  se.push(me));
              }
              var pe = de.map(function (e, t) {
                return {
                  type: "contact",
                  selectable: !0,
                  contact: e,
                  id: e.id,
                  height: ae,
                  itemKey: e.id.toString(),
                  contentKey: V,
                  index: t + se.length,
                  query: V,
                };
              });
              se.push.apply(se, pe);
            }
          }
          if (F && x != null) {
            var _e = o("WAWebMentionsPluginUtil").getSubgroupResults(V, x);
            if (_e.length !== 0) {
              if (ue) {
                var fe;
                (n[40] !== se.length
                  ? ((fe = {
                      index: se.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: _,
                    }),
                    (n[40] = se.length),
                    (n[41] = fe))
                  : (fe = n[41]),
                  se.push(fe));
              }
              var ge = _e.map(function (e, t) {
                return {
                  type: "group",
                  selectable: !0,
                  groupMetadata: e,
                  id: e.id,
                  height: ae,
                  itemKey: e.id.toString(),
                  contentKey: V,
                  index: t + se.length,
                  query: V,
                };
              });
              se.push.apply(se, ge);
            }
          }
          ((le = se.length ? se.slice(0, 15) : null),
            (n[27] = d),
            (n[28] = F),
            (n[29] = x),
            (n[30] = V),
            (n[31] = u),
            (n[32] = w),
            (n[33] = le));
        } else le = n[33];
        oe = le;
      }
      var he = oe,
        ye;
      e: {
        if (
          !o(
            "WAWebGroupGatingUtils",
          ).isEnhancedMentionSuggestionsNonGroupMembersEnabled()
        ) {
          ye = !1;
          break e;
        }
        if (x == null) {
          ye = !1;
          break e;
        }
        if (u !== "chat-composer") {
          ye = !1;
          break e;
        }
        if (
          x.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          ye = !1;
          break e;
        }
        if (!x.participants.canAdd()) {
          ye = !1;
          break e;
        }
        var Ce = x.parentGroup;
        if (Ce != null && !x.participants.iAmAdmin()) {
          var be = r("WAWebGroupMetadataCollection").get(Ce),
            ve = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(be);
          if (
            ve != null &&
            ve.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            ye = !1;
            break e;
          }
        }
        ye = !0;
      }
      var Se = ye,
        Re;
      e: {
        if (V == null || !Se) {
          Re = !1;
          break e;
        }
        var Le = r("countWhere")(he != null ? he : [], E);
        if (Le > 0) {
          Re = !1;
          break e;
        }
        var Ee = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (Ee <= 0) {
          Re = !1;
          break e;
        }
        var ke = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (ke > 0 && V.length < ke) {
          Re = !1;
          break e;
        }
        Re = !0;
      }
      var Ie = Re,
        Te;
      e: {
        if (!Ie || x == null) {
          Te = null;
          break e;
        }
        var De;
        (n[42] !== x
          ? ((De = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(x)),
            (n[42] = x),
            (n[43] = De))
          : (De = n[43]),
          (Te = De));
      }
      var xe = Te,
        $e;
      if (n[44] !== xe || n[45] !== V) {
        e: {
          if (V == null || xe == null) {
            $e = null;
            break e;
          }
          var Pe = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Pe <= 0) {
            $e = null;
            break e;
          }
          var Ne = o("WAWebMentionsPluginUtil").filterContactsByQuery(V, xe);
          if (Ne.length === 0) {
            $e = null;
            break e;
          }
          var Me = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? g
              : f,
            we = [],
            Ae;
          (n[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ae = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: h,
              }),
              (n[47] = Ae))
            : (Ae = n[47]),
            we.push(Ae));
          var Fe;
          n[48] !== V
            ? ((Fe = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Me,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: V,
                  index: n + 1,
                  query: V,
                };
              }),
              (n[48] = V),
              (n[49] = Fe))
            : (Fe = n[49]);
          var Oe = Ne.slice(0, Pe).map(Fe);
          (we.push.apply(we, Oe), ($e = we));
        }
        ((n[44] = xe), (n[45] = V), (n[46] = $e));
      } else $e = n[46];
      var Be = $e,
        We;
      e: {
        if (he == null && Be == null) {
          We = null;
          break e;
        }
        var qe;
        if (n[50] !== Be || n[51] !== he) {
          if (((qe = []), he != null)) {
            var Ue;
            (Ue = qe).push.apply(Ue, he);
          }
          if (Be != null) {
            var Ve, He;
            n[53] !== Be
              ? ((He = Be.filter(L)), (n[53] = Be), (n[54] = He))
              : (He = n[54]);
            var Ge = He;
            (Ve = qe).push.apply(Ve, Ge);
          }
          ((n[50] = Be), (n[51] = he), (n[52] = qe));
        } else qe = n[52];
        We = qe.length > 0 ? qe : null;
      }
      var ze = We,
        je,
        Ke;
      n[55] !== ze || n[56] !== re || n[57] !== Z || n[58] !== P
        ? ((je = P
            ? []
            : (ze != null ? ze : []).map(function (e) {
                return {
                  renderFn: function (n) {
                    return re(e, n);
                  },
                  onSelect: function () {
                    return Z(e);
                  },
                  width: 360,
                  height: r("WANullthrows")(e.height),
                  skipKeyboardNav:
                    e.type === "contact_header" ||
                    e.type === "group_header" ||
                    e.type === "non_participant_separator",
                };
              })),
          (Ke = je.findIndex(R)),
          (n[55] = ze),
          (n[56] = re),
          (n[57] = Z),
          (n[58] = P),
          (n[59] = je),
          (n[60] = Ke))
        : ((je = n[59]), (Ke = n[60]));
      var Qe = Ke,
        Xe;
      return (
        n[61] !== Qe || n[62] !== te || n[63] !== je || n[64] !== q
          ? ((Xe = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: q,
              items: je,
              onCancel: te,
              startingIndex: Qe,
            })),
            (n[61] = Qe),
            (n[62] = te),
            (n[63] = je),
            (n[64] = q),
            (n[65] = Xe))
          : (Xe = n[65]),
        Xe
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
