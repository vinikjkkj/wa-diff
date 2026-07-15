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
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumMentionType",
    "WDSMargins.stylex",
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
      _ = {
        marginInline1: {
          marginInlineStart: "xm2jcoa",
          marginInlineEnd: "x1mpyi22",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      },
      f = 42,
      g = 52,
      h = 60,
      y = 9,
      C = r("WAWebConstantsDeprecated").MAX_PUSHNAME_LENGTH * 2,
      b = {
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
    function v(e) {
      return !(
        e == null ||
        (e == null ? void 0 : e.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function S(e) {
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
    function R(t) {
      var a = o("react-compiler-runtime").c(64),
        i = t.chat,
        l = t.elevatedPushNamesEnabled,
        u = t.source,
        d = o("LexicalComposerContext").useLexicalComposerContext(),
        m = d[0],
        R = i.groupMetadata,
        P = p(!1),
        N = P[0],
        M = P[1],
        w;
      a[0] !== R ? ((w = v(R)), (a[0] = R), (a[1] = w)) : (w = a[1]);
      var A = w,
        F;
      a[2] !== R ? ((F = S(R)), (a[2] = R), (a[3] = F)) : (F = a[3]);
      var O = F,
        B = A || O,
        W;
      a[4] !== B
        ? ((W = { enabled: B, maxQueryLength: C, boundary: !0 }),
          (a[4] = B),
          (a[5] = W))
        : (W = a[5]);
      var q = o("useWAWebLexicalTypeAhead").useTypeAhead(
          m,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          W,
        ),
        U = q.leadOffset,
        V = q.omitQuery,
        H = q.query,
        G = q.replaceQuery,
        z;
      a[6] !== G
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
          (a[6] = G),
          (a[7] = z))
        : (z = a[7]);
      var j = z,
        K;
      a[8] !== i || a[9] !== G
        ? ((K = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                i,
                1,
              ),
                G(D, { trailingSpace: !0 }),
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(
                  i,
                  o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE,
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[8] = i),
          (a[9] = G),
          (a[10] = K))
        : (K = a[10]);
      var Q = K,
        X = T,
        Y;
      a[11] !== i || a[12] !== j || a[13] !== Q
        ? ((Y = function (t) {
            if (t.type === "mention_all") {
              Q();
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
                j(t.id);
                var e =
                  t.type === "contact"
                    ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                    : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(i, e);
              }
          }),
          (a[11] = i),
          (a[12] = j),
          (a[13] = Q),
          (a[14] = Y))
        : (Y = a[14]);
      var J = Y,
        Z;
      a[15] !== i || a[16] !== R || a[17] !== J
        ? ((Z = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              X(t)
            ) {
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
                      chat: i,
                      wamEntryPoint:
                        R != null
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
          (a[15] = i),
          (a[16] = R),
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
      a[21] !== i || a[22] !== m || a[23] !== l || a[24] !== j
        ? ((re = function (n, a) {
            switch (n.type) {
              case "contact": {
                var t = n,
                  u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id),
                  d = o(
                    "WAWebLimitSharingUIUtils",
                  ).isLimitSharingReceiverEnabledForUsers(i, [t.id]),
                  p = u || d;
                return t.id.isBot() &&
                  !o("WAWebBotTos").hasSeenMasterBotTos() &&
                  !o("WAWebBotTos").hasSeenInvokeTos() &&
                  !p
                  ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: a })
                  : c.jsx(
                      o("WAWebMentionsPluginResult.react").UserResult,
                      {
                        contact: t.contact,
                        term: t.query,
                        theme: null,
                        selected: a,
                        disabled: p,
                        disabledCTA: x(u, d),
                        elevatedPushNamesEnabled: l,
                      },
                      t.contact.id.toString(),
                    );
              }
              case "group": {
                var f = n;
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").GroupResult,
                  {
                    groupMetadata: f.groupMetadata,
                    term: f.query,
                    theme: null,
                    selected: a,
                  },
                  f.groupMetadata.id.toString(),
                );
              }
              case "mention_all":
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").MentionAllResult,
                  { selected: a },
                );
              case "non_participant_contact": {
                var g = n;
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").NonParticipantUserResult,
                  {
                    contact: g.contact,
                    chat: i,
                    term: g.query,
                    theme: null,
                    selected: a,
                    elevatedPushNamesEnabled: l,
                    onAddConfirmed: function (t) {
                      (M(!1),
                        j(t.id),
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
                      (M(!1), m.focus());
                    },
                    onAddDialogShown: function () {
                      M(!0);
                    },
                  },
                  g.contact.id.toString(),
                );
              }
              case "contact_header":
                return c.jsx("div", {
                  className:
                    "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
                  children: s._(/*BTDS*/ "Contacts"),
                });
              case "group_header":
                return c.jsx("div", {
                  className:
                    "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
                  children: s._(/*BTDS*/ "Groups"),
                });
              case "non_participant_separator":
                return c.jsx(
                  "hr",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props([
                      b.separator,
                      o("WDSMargins.stylex").wdsMargins.marginVer4,
                      _.marginInline1,
                    ]),
                  ),
                );
            }
          }),
          (a[21] = i),
          (a[22] = m),
          (a[23] = l),
          (a[24] = j),
          (a[25] = re))
        : (re = a[25]);
      var oe = re,
        ae;
      e: {
        var ie = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? h
          : g;
        if (H == null) {
          ae = null;
          break e;
        }
        if (R == null) {
          ae = null;
          break e;
        }
        var le = m.getEditorState().read(I);
        if (le) {
          ae = null;
          break e;
        }
        var se;
        if (
          a[26] !== O ||
          a[27] !== R ||
          a[28] !== H ||
          a[29] !== u ||
          a[30] !== A
        ) {
          var ue = [],
            ce = A && O;
          if (
            (R == null ? void 0 : R.id) != null &&
            $({ groupMetadata: R, query: H, source: u })
          ) {
            var de;
            (a[32] !== R.id || a[33] !== ue.length || a[34] !== H
              ? ((de = {
                  type: "mention_all",
                  selectable: !0,
                  index: ue.length,
                  itemKey: "mention-all",
                  height: ie,
                  contentKey: H,
                  id: R.id,
                  query: H,
                }),
                (a[32] = R.id),
                (a[33] = ue.length),
                (a[34] = H),
                (a[35] = de))
              : (de = a[35]),
              ue.push(de));
          }
          if (A) {
            var me = o("WAWebMentionsPluginUtil").getUserResults(H, R);
            if (me.length !== 0) {
              if (ce) {
                var pe;
                (a[36] !== ue.length
                  ? ((pe = {
                      index: ue.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: f,
                    }),
                    (a[36] = ue.length),
                    (a[37] = pe))
                  : (pe = a[37]),
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
          if (O && R != null) {
            var fe = o("WAWebMentionsPluginUtil").getSubgroupResults(H, R);
            if (fe.length !== 0) {
              if (ce) {
                var ge;
                (a[38] !== ue.length
                  ? ((ge = {
                      index: ue.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: f,
                    }),
                    (a[38] = ue.length),
                    (a[39] = ge))
                  : (ge = a[39]),
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
            (a[26] = O),
            (a[27] = R),
            (a[28] = H),
            (a[29] = u),
            (a[30] = A),
            (a[31] = se));
        } else se = a[31];
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
          Ce = !1;
          break e;
        }
        if (R == null) {
          Ce = !1;
          break e;
        }
        if (u !== "chat-composer") {
          Ce = !1;
          break e;
        }
        if (
          R.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          Ce = !1;
          break e;
        }
        if (!R.participants.canAdd()) {
          Ce = !1;
          break e;
        }
        var be = R.parentGroup;
        if (be != null && !R.participants.iAmAdmin()) {
          var ve = r("WAWebGroupMetadataCollection").get(be),
            Se = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(ve);
          if (
            Se != null &&
            Se.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            Ce = !1;
            break e;
          }
        }
        Ce = !0;
      }
      var Re = Ce,
        Le;
      e: {
        if (H == null || !Re) {
          Le = !1;
          break e;
        }
        var Ee = r("countWhere")(ye != null ? ye : [], k);
        if (Ee > 0) {
          Le = !1;
          break e;
        }
        var ke = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (ke <= 0) {
          Le = !1;
          break e;
        }
        var Ie = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (Ie > 0 && H.length < Ie) {
          Le = !1;
          break e;
        }
        Le = !0;
      }
      var Te = Le,
        De;
      e: {
        if (!Te || R == null) {
          De = null;
          break e;
        }
        var xe;
        (a[40] !== R
          ? ((xe = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(R)),
            (a[40] = R),
            (a[41] = xe))
          : (xe = a[41]),
          (De = xe));
      }
      var $e = De,
        Pe;
      if (a[42] !== $e || a[43] !== H) {
        e: {
          if (H == null || $e == null) {
            Pe = null;
            break e;
          }
          var Ne = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Ne <= 0) {
            Pe = null;
            break e;
          }
          var Me = o("WAWebMentionsPluginUtil").filterContactsByQuery(H, $e);
          if (Me.length === 0) {
            Pe = null;
            break e;
          }
          var we = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? h
              : g,
            Ae = [],
            Fe;
          (a[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((Fe = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: y,
              }),
              (a[45] = Fe))
            : (Fe = a[45]),
            Ae.push(Fe));
          var Oe;
          a[46] !== H
            ? ((Oe = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: we,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: H,
                  index: n + 1,
                  query: H,
                };
              }),
              (a[46] = H),
              (a[47] = Oe))
            : (Oe = a[47]);
          var Be = Me.slice(0, Ne).map(Oe);
          (Ae.push.apply(Ae, Be), (Pe = Ae));
        }
        ((a[42] = $e), (a[43] = H), (a[44] = Pe));
      } else Pe = a[44];
      var We = Pe,
        qe;
      e: {
        if (ye == null && We == null) {
          qe = null;
          break e;
        }
        var Ue;
        if (a[48] !== We || a[49] !== ye) {
          if (((Ue = []), ye != null)) {
            var Ve;
            (Ve = Ue).push.apply(Ve, ye);
          }
          if (We != null) {
            var He, Ge;
            a[51] !== We
              ? ((Ge = We.filter(E)), (a[51] = We), (a[52] = Ge))
              : (Ge = a[52]);
            var ze = Ge;
            (He = Ue).push.apply(He, ze);
          }
          ((a[48] = We), (a[49] = ye), (a[50] = Ue));
        } else Ue = a[50];
        qe = Ue.length > 0 ? Ue : null;
      }
      var je = qe,
        Ke,
        Qe;
      a[53] !== je || a[54] !== oe || a[55] !== ee || a[56] !== N
        ? ((Ke = N
            ? []
            : (je != null ? je : []).map(function (e) {
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
                    e.type === "non_participant_separator" ||
                    (e.type === "contact" &&
                      o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)),
                };
              })),
          (Qe = Ke.findIndex(L)),
          (a[53] = je),
          (a[54] = oe),
          (a[55] = ee),
          (a[56] = N),
          (a[57] = Ke),
          (a[58] = Qe))
        : ((Ke = a[57]), (Qe = a[58]));
      var Xe = Qe,
        Ye;
      return (
        a[59] !== Xe || a[60] !== ne || a[61] !== Ke || a[62] !== U
          ? ((Ye = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: U,
              items: Ke,
              onCancel: ne,
              startingIndex: Xe,
            })),
            (a[59] = Xe),
            (a[60] = ne),
            (a[61] = Ke),
            (a[62] = U),
            (a[63] = Ye))
          : (Ye = a[63]),
        Ye
      );
    }
    function L(e) {
      return e.skipKeyboardNav === !1;
    }
    function E(e) {
      return e.type !== "non_participant_separator";
    }
    function k(e) {
      return e.selectable;
    }
    function I() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return !1;
      var t = e.anchor.getNode();
      return t instanceof o("WAWebMentionNode").MentionNode;
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
    function x(e, t) {
      return e
        ? c.jsx("div", {
            className: "xhslqc4",
            children: s._(/*BTDS*/ "Only available on your phone"),
          })
        : t
          ? c.jsx("div", {
              className: "xo1mcw5",
              children: r("WAWebFbtCommon")("Learn more"),
            })
          : null;
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
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
    l.default = R;
  },
  226,
);
