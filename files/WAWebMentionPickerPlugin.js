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
    function v(e, t) {
      return !(
        (e == null && !t) ||
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
      var a = o("react-compiler-runtime").c(66),
        i = t.botInvokeEnabled,
        l = t.chat,
        u = t.elevatedPushNamesEnabled,
        d = t.source,
        m = i === void 0 ? !1 : i,
        R = o("LexicalComposerContext").useLexicalComposerContext(),
        P = R[0],
        N = l.groupMetadata,
        M = p(!1),
        w = M[0],
        A = M[1],
        F;
      a[0] !== m || a[1] !== N
        ? ((F = v(N, m)), (a[0] = m), (a[1] = N), (a[2] = F))
        : (F = a[2]);
      var O = F,
        B;
      a[3] !== N ? ((B = S(N)), (a[3] = N), (a[4] = B)) : (B = a[4]);
      var W = B,
        q = O || W,
        U;
      a[5] !== q
        ? ((U = { enabled: q, maxQueryLength: C, boundary: !0 }),
          (a[5] = q),
          (a[6] = U))
        : (U = a[6]);
      var V = o("useWAWebLexicalTypeAhead").useTypeAhead(
          P,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          U,
        ),
        H = V.leadOffset,
        G = V.omitQuery,
        z = V.query,
        j = V.replaceQuery,
        K;
      a[7] !== j
        ? ((K = function (t) {
            j(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (a[7] = j),
          (a[8] = K))
        : (K = a[8]);
      var Q = K,
        X;
      a[9] !== l || a[10] !== j
        ? ((X = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                l,
                1,
              ),
                j(D, { trailingSpace: !0 }),
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
          (a[10] = j),
          (a[11] = X))
        : (X = a[11]);
      var Y = X,
        J = T,
        Z;
      a[12] !== l || a[13] !== Q || a[14] !== Y
        ? ((Z = function (t) {
            if (t.type === "mention_all") {
              Y();
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
                Q(t.id);
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
          (a[13] = Q),
          (a[14] = Y),
          (a[15] = Z))
        : (Z = a[15]);
      var ee = Z,
        te;
      a[16] !== l || a[17] !== N || a[18] !== ee
        ? ((te = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              J(t)
            ) {
              if (t.type === "mention_all") {
                ee(t);
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
                        N != null
                          ? o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP
                          : o("WAWebWamEnumBotEntryPointType")
                              .BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1,
                    })
                    .then(function () {
                      ee(e);
                    })
                    .catch(r("WAWebNoop"))
                : ee(e);
            }
          }),
          (a[16] = l),
          (a[17] = N),
          (a[18] = ee),
          (a[19] = te))
        : (te = a[19]);
      var ne = te,
        re;
      a[20] !== G
        ? ((re = function () {
            G();
          }),
          (a[20] = G),
          (a[21] = re))
        : (re = a[21]);
      var oe = re,
        ae;
      a[22] !== l || a[23] !== P || a[24] !== u || a[25] !== Q
        ? ((ae = function (n, a) {
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
                        disabledCTA: x(i, d),
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
                var f = n;
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").NonParticipantUserResult,
                  {
                    contact: f.contact,
                    chat: l,
                    term: f.query,
                    theme: null,
                    selected: a,
                    elevatedPushNamesEnabled: u,
                    onAddConfirmed: function (t) {
                      (A(!1),
                        Q(t.id),
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
                      (A(!1), P.focus());
                    },
                    onAddDialogShown: function () {
                      A(!0);
                    },
                  },
                  f.contact.id.toString(),
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
          (a[22] = l),
          (a[23] = P),
          (a[24] = u),
          (a[25] = Q),
          (a[26] = ae))
        : (ae = a[26]);
      var ie = ae,
        le;
      e: {
        var se = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? h
          : g;
        if (z == null) {
          le = null;
          break e;
        }
        if (N == null && !m) {
          le = null;
          break e;
        }
        var ue = P.getEditorState().read(I);
        if (ue) {
          le = null;
          break e;
        }
        var ce;
        if (
          a[27] !== m ||
          a[28] !== W ||
          a[29] !== N ||
          a[30] !== z ||
          a[31] !== d ||
          a[32] !== O
        ) {
          var de = [],
            me = O && W;
          if (
            (N == null ? void 0 : N.id) != null &&
            $({ groupMetadata: N, query: z, source: d })
          ) {
            var pe;
            (a[34] !== N.id || a[35] !== de.length || a[36] !== z
              ? ((pe = {
                  type: "mention_all",
                  selectable: !0,
                  index: de.length,
                  itemKey: "mention-all",
                  height: se,
                  contentKey: z,
                  id: N.id,
                  query: z,
                }),
                (a[34] = N.id),
                (a[35] = de.length),
                (a[36] = z),
                (a[37] = pe))
              : (pe = a[37]),
              de.push(pe));
          }
          if (O) {
            var _e = o("WAWebMentionsPluginUtil").getUserResults(z, N, m);
            if (_e.length !== 0) {
              if (me) {
                var fe;
                (a[38] !== de.length
                  ? ((fe = {
                      index: de.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: f,
                    }),
                    (a[38] = de.length),
                    (a[39] = fe))
                  : (fe = a[39]),
                  de.push(fe));
              }
              var ge = _e.map(function (e, t) {
                return {
                  type: "contact",
                  selectable: !0,
                  contact: e,
                  id: e.id,
                  height: se,
                  itemKey: e.id.toString(),
                  contentKey: z,
                  index: t + de.length,
                  query: z,
                };
              });
              de.push.apply(de, ge);
            }
          }
          if (W && N != null) {
            var he = o("WAWebMentionsPluginUtil").getSubgroupResults(z, N);
            if (he.length !== 0) {
              if (me) {
                var ye;
                (a[40] !== de.length
                  ? ((ye = {
                      index: de.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: f,
                    }),
                    (a[40] = de.length),
                    (a[41] = ye))
                  : (ye = a[41]),
                  de.push(ye));
              }
              var Ce = he.map(function (e, t) {
                return {
                  type: "group",
                  selectable: !0,
                  groupMetadata: e,
                  id: e.id,
                  height: se,
                  itemKey: e.id.toString(),
                  contentKey: z,
                  index: t + de.length,
                  query: z,
                };
              });
              de.push.apply(de, Ce);
            }
          }
          ((ce = de.length ? de.slice(0, 15) : null),
            (a[27] = m),
            (a[28] = W),
            (a[29] = N),
            (a[30] = z),
            (a[31] = d),
            (a[32] = O),
            (a[33] = ce));
        } else ce = a[33];
        le = ce;
      }
      var be = le,
        ve;
      e: {
        if (
          !o(
            "WAWebGroupGatingUtils",
          ).isEnhancedMentionSuggestionsNonGroupMembersEnabled()
        ) {
          ve = !1;
          break e;
        }
        if (N == null) {
          ve = !1;
          break e;
        }
        if (d !== "chat-composer") {
          ve = !1;
          break e;
        }
        if (
          N.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          ve = !1;
          break e;
        }
        if (!N.participants.canAdd()) {
          ve = !1;
          break e;
        }
        var Se = N.parentGroup;
        if (Se != null && !N.participants.iAmAdmin()) {
          var Re = r("WAWebGroupMetadataCollection").get(Se),
            Le = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(Re);
          if (
            Le != null &&
            Le.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            ve = !1;
            break e;
          }
        }
        ve = !0;
      }
      var Ee = ve,
        ke;
      e: {
        if (z == null || !Ee) {
          ke = !1;
          break e;
        }
        var Ie = r("countWhere")(be != null ? be : [], k);
        if (Ie > 0) {
          ke = !1;
          break e;
        }
        var Te = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (Te <= 0) {
          ke = !1;
          break e;
        }
        var De = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (De > 0 && z.length < De) {
          ke = !1;
          break e;
        }
        ke = !0;
      }
      var xe = ke,
        $e;
      e: {
        if (!xe || N == null) {
          $e = null;
          break e;
        }
        var Pe;
        (a[42] !== N
          ? ((Pe = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(N)),
            (a[42] = N),
            (a[43] = Pe))
          : (Pe = a[43]),
          ($e = Pe));
      }
      var Ne = $e,
        Me;
      if (a[44] !== Ne || a[45] !== z) {
        e: {
          if (z == null || Ne == null) {
            Me = null;
            break e;
          }
          var we = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (we <= 0) {
            Me = null;
            break e;
          }
          var Ae = o("WAWebMentionsPluginUtil").filterContactsByQuery(z, Ne);
          if (Ae.length === 0) {
            Me = null;
            break e;
          }
          var Fe = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? h
              : g,
            Oe = [],
            Be;
          (a[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((Be = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: y,
              }),
              (a[47] = Be))
            : (Be = a[47]),
            Oe.push(Be));
          var We;
          a[48] !== z
            ? ((We = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Fe,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: z,
                  index: n + 1,
                  query: z,
                };
              }),
              (a[48] = z),
              (a[49] = We))
            : (We = a[49]);
          var qe = Ae.slice(0, we).map(We);
          (Oe.push.apply(Oe, qe), (Me = Oe));
        }
        ((a[44] = Ne), (a[45] = z), (a[46] = Me));
      } else Me = a[46];
      var Ue = Me,
        Ve;
      e: {
        if (be == null && Ue == null) {
          Ve = null;
          break e;
        }
        var He;
        if (a[50] !== Ue || a[51] !== be) {
          if (((He = []), be != null)) {
            var Ge;
            (Ge = He).push.apply(Ge, be);
          }
          if (Ue != null) {
            var ze, je;
            a[53] !== Ue
              ? ((je = Ue.filter(E)), (a[53] = Ue), (a[54] = je))
              : (je = a[54]);
            var Ke = je;
            (ze = He).push.apply(ze, Ke);
          }
          ((a[50] = Ue), (a[51] = be), (a[52] = He));
        } else He = a[52];
        Ve = He.length > 0 ? He : null;
      }
      var Qe = Ve,
        Xe,
        Ye;
      a[55] !== Qe || a[56] !== ie || a[57] !== ne || a[58] !== w
        ? ((Xe = w
            ? []
            : (Qe != null ? Qe : []).map(function (e) {
                return {
                  renderFn: function (n) {
                    return ie(e, n);
                  },
                  onSelect: function () {
                    return ne(e);
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
          (Ye = Xe.findIndex(L)),
          (a[55] = Qe),
          (a[56] = ie),
          (a[57] = ne),
          (a[58] = w),
          (a[59] = Xe),
          (a[60] = Ye))
        : ((Xe = a[59]), (Ye = a[60]));
      var Je = Ye,
        Ze;
      return (
        a[61] !== Je || a[62] !== oe || a[63] !== Xe || a[64] !== H
          ? ((Ze = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: H,
              items: Xe,
              onCancel: oe,
              startingIndex: Je,
            })),
            (a[61] = Je),
            (a[62] = oe),
            (a[63] = Xe),
            (a[64] = H),
            (a[65] = Ze))
          : (Ze = a[65]),
        Ze
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
            children: s._(/*BTDS*/ "Only available on mobile devices"),
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
