__d(
  "WAWebMentionPickerPlugin",
  [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "WAWebABProps",
    "WAWebBotDisclaimerManager",
    "WAWebBotInvokeUpsellRow.react",
    "WAWebBotLogging",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebComposeBoxActions",
    "WAWebFbtCommon",
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
    "WAWebPushnameConstants",
    "WAWebRichTextInputConst",
    "WAWebSchemaGroupMetadata",
    "WAWebTextStatusGatingUtils",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumMentionType",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "countWhere",
    "nullthrows",
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
      C = o("WAWebPushnameConstants").MAX_PUSHNAME_LENGTH * 2,
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
      },
      v = 15,
      S = 5;
    function R(e) {
      return !(
        e == null ||
        (e == null ? void 0 : e.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function L(e) {
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
    function E(t) {
      var a = o("react-compiler-runtime").c(70),
        i = t.chat,
        l = t.elevatedPushNamesEnabled,
        u = t.source,
        d = o("LexicalComposerContext").useLexicalComposerContext(),
        m = d[0],
        E = i.groupMetadata,
        M = p(!1),
        w = M[0],
        A = M[1],
        F;
      a[0] !== E ? ((F = R(E)), (a[0] = E), (a[1] = F)) : (F = a[1]);
      var O = F,
        B;
      a[2] !== E ? ((B = L(E)), (a[2] = E), (a[3] = B)) : (B = a[3]);
      var W = B,
        q = O || W,
        U;
      a[4] !== q
        ? ((U = { enabled: q, maxQueryLength: C, boundary: !0 }),
          (a[4] = q),
          (a[5] = U))
        : (U = a[5]);
      var V = o("useWAWebLexicalTypeAhead").useTypeAhead(
          m,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          U,
        ),
        H = V.leadOffset,
        G = V.omitQuery,
        z = V.query,
        j = V.replaceQuery,
        K;
      a[6] !== j
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
          (a[6] = j),
          (a[7] = K))
        : (K = a[7]);
      var Q = K,
        X;
      a[8] !== i || a[9] !== j
        ? ((X = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                i,
                1,
              ),
                j($, { trailingSpace: !0 }),
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
          (a[9] = j),
          (a[10] = X))
        : (X = a[10]);
      var Y = X,
        J = x,
        Z;
      a[11] !== i || a[12] !== Q || a[13] !== Y
        ? ((Z = function (t) {
            if (t.type === "mention_all") {
              Y();
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
                Q(t.id);
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
          (a[12] = Q),
          (a[13] = Y),
          (a[14] = Z))
        : (Z = a[14]);
      var ee = Z,
        te;
      a[15] !== i || a[16] !== E || a[17] !== ee
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
                      chat: i,
                      wamEntryPoint:
                        E != null
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
          (a[15] = i),
          (a[16] = E),
          (a[17] = ee),
          (a[18] = te))
        : (te = a[18]);
      var ne = te,
        re;
      a[19] !== G
        ? ((re = function () {
            G();
          }),
          (a[19] = G),
          (a[20] = re))
        : (re = a[20]);
      var oe = re,
        ae;
      a[21] !== i || a[22] !== m || a[23] !== l || a[24] !== Q
        ? ((ae = function (n, a) {
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
                        disabledCTA: P(u, d),
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
                      (A(!1),
                        Q(t.id),
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
                      (A(!1), m.focus());
                    },
                    onAddDialogShown: function () {
                      A(!0);
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
          (a[24] = Q),
          (a[25] = ae))
        : (ae = a[25]);
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
        if (E == null) {
          le = null;
          break e;
        }
        var ue = m.getEditorState().read(D);
        if (ue) {
          le = null;
          break e;
        }
        var ce;
        if (
          a[26] !== W ||
          a[27] !== E ||
          a[28] !== z ||
          a[29] !== u ||
          a[30] !== O
        ) {
          ce = [];
          var de = O && W;
          if (
            (E == null ? void 0 : E.id) != null &&
            N({ groupMetadata: E, query: z, source: u })
          ) {
            var me;
            (a[32] !== E.id || a[33] !== ce.length || a[34] !== z
              ? ((me = {
                  type: "mention_all",
                  selectable: !0,
                  index: ce.length,
                  itemKey: "mention-all",
                  height: se,
                  contentKey: z,
                  id: E.id,
                  query: z,
                }),
                (a[32] = E.id),
                (a[33] = ce.length),
                (a[34] = z),
                (a[35] = me))
              : (me = a[35]),
              ce.push(me));
          }
          var pe = [];
          O && (pe = o("WAWebMentionsPluginUtil").getUserResults(z, E));
          var _e = [];
          W &&
            E != null &&
            (_e = o("WAWebMentionsPluginUtil").getSubgroupResults(z, E));
          var fe = Math.min(_e.length, S),
            ge = de && fe !== 0 ? 1 : 0,
            he = v - ce.length - fe - ge,
            ye = de && pe.length !== 0 && he > 1 ? 1 : 0,
            Ce = Math.max(0, he - ye),
            be = pe.slice(0, Ce);
          if (be.length !== 0) {
            var ve;
            if (ye !== 0) {
              var Se;
              (a[36] !== ce.length
                ? ((Se = {
                    index: ce.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[36] = ce.length),
                  (a[37] = Se))
                : (Se = a[37]),
                ce.push(Se));
            }
            var Re = ce.length,
              Le;
            (a[38] !== Re || a[39] !== z
              ? ((Le = function (t, n) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: se,
                    itemKey: t.id.toString(),
                    contentKey: z,
                    index: Re + n,
                    query: z,
                  };
                }),
                (a[38] = Re),
                (a[39] = z),
                (a[40] = Le))
              : (Le = a[40]),
              (ve = ce).push.apply(ve, be.map(Le)));
          }
          var Ee = Math.max(0, v - ce.length - ge),
            ke = _e.slice(0, Ee);
          if (ke.length !== 0) {
            var Ie;
            if (ge !== 0) {
              var Te;
              (a[41] !== ce.length
                ? ((Te = {
                    index: ce.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[41] = ce.length),
                  (a[42] = Te))
                : (Te = a[42]),
                ce.push(Te));
            }
            var De = ce.length,
              xe;
            (a[43] !== z || a[44] !== De
              ? ((xe = function (t, n) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: se,
                    itemKey: t.id.toString(),
                    contentKey: z,
                    index: De + n,
                    query: z,
                  };
                }),
                (a[43] = z),
                (a[44] = De),
                (a[45] = xe))
              : (xe = a[45]),
              (Ie = ce).push.apply(Ie, ke.map(xe)));
          }
          ((a[26] = W),
            (a[27] = E),
            (a[28] = z),
            (a[29] = u),
            (a[30] = O),
            (a[31] = ce));
        } else ce = a[31];
        le = ce.length ? ce : null;
      }
      var $e = le,
        Pe;
      e: {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_suggestions_non_group_members_enabled",
          )
        ) {
          Pe = !1;
          break e;
        }
        if (E == null) {
          Pe = !1;
          break e;
        }
        if (u !== "chat-composer") {
          Pe = !1;
          break e;
        }
        if (
          E.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          Pe = !1;
          break e;
        }
        if (!E.participants.canAdd()) {
          Pe = !1;
          break e;
        }
        var Ne = E.parentGroup;
        if (Ne != null && !E.participants.iAmAdmin()) {
          var Me = r("WAWebGroupMetadataCollection").get(Ne),
            we = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(Me);
          if (
            we != null &&
            we.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            Pe = !1;
            break e;
          }
        }
        Pe = !0;
      }
      var Ae = Pe,
        Fe;
      e: {
        if (z == null || !Ae) {
          Fe = !1;
          break e;
        }
        var Oe = r("countWhere")($e != null ? $e : [], T);
        if (Oe > 0) {
          Fe = !1;
          break e;
        }
        var Be = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (Be <= 0) {
          Fe = !1;
          break e;
        }
        var We = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (We > 0 && z.length < We) {
          Fe = !1;
          break e;
        }
        Fe = !0;
      }
      var qe = Fe,
        Ue;
      e: {
        if (!qe || E == null) {
          Ue = null;
          break e;
        }
        var Ve;
        (a[46] !== E
          ? ((Ve = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(E)),
            (a[46] = E),
            (a[47] = Ve))
          : (Ve = a[47]),
          (Ue = Ve));
      }
      var He = Ue,
        Ge;
      if (a[48] !== He || a[49] !== z) {
        e: {
          if (z == null || He == null) {
            Ge = null;
            break e;
          }
          var ze = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (ze <= 0) {
            Ge = null;
            break e;
          }
          var je = o("WAWebMentionsPluginUtil").filterContactsByQuery(z, He);
          if (je.length === 0) {
            Ge = null;
            break e;
          }
          var Ke = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? h
              : g,
            Qe = [],
            Xe;
          (a[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((Xe = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: y,
              }),
              (a[51] = Xe))
            : (Xe = a[51]),
            Qe.push(Xe));
          var Ye;
          a[52] !== z
            ? ((Ye = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Ke,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: z,
                  index: n + 1,
                  query: z,
                };
              }),
              (a[52] = z),
              (a[53] = Ye))
            : (Ye = a[53]);
          var Je = je.slice(0, ze).map(Ye);
          (Qe.push.apply(Qe, Je), (Ge = Qe));
        }
        ((a[48] = He), (a[49] = z), (a[50] = Ge));
      } else Ge = a[50];
      var Ze = Ge,
        et;
      e: {
        if ($e == null && Ze == null) {
          et = null;
          break e;
        }
        var tt;
        if (a[54] !== Ze || a[55] !== $e) {
          if (((tt = []), $e != null)) {
            var nt;
            (nt = tt).push.apply(nt, $e);
          }
          if (Ze != null) {
            var rt, ot;
            a[57] !== Ze
              ? ((ot = Ze.filter(I)), (a[57] = Ze), (a[58] = ot))
              : (ot = a[58]);
            var at = ot;
            (rt = tt).push.apply(rt, at);
          }
          ((a[54] = Ze), (a[55] = $e), (a[56] = tt));
        } else tt = a[56];
        et = tt.length > 0 ? tt : null;
      }
      var it = et,
        lt,
        st;
      a[59] !== it || a[60] !== ie || a[61] !== ne || a[62] !== w
        ? ((lt = w
            ? []
            : (it != null ? it : []).map(function (e) {
                var t =
                  e.type === "contact_header" ||
                  e.type === "group_header" ||
                  e.type === "non_participant_separator" ||
                  (e.type === "contact" &&
                    o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id));
                return {
                  renderFn: function (n) {
                    return ie(e, n);
                  },
                  onSelect: function () {
                    return ne(e);
                  },
                  width: 360,
                  height: r("nullthrows")(e.height),
                  skipKeyboardNav: t,
                  disabled: t,
                };
              })),
          (st = lt.findIndex(k)),
          (a[59] = it),
          (a[60] = ie),
          (a[61] = ne),
          (a[62] = w),
          (a[63] = lt),
          (a[64] = st))
        : ((lt = a[63]), (st = a[64]));
      var ut = st,
        ct;
      return (
        a[65] !== ut || a[66] !== oe || a[67] !== lt || a[68] !== H
          ? ((ct = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: H,
              items: lt,
              onCancel: oe,
              startingIndex: ut,
            })),
            (a[65] = ut),
            (a[66] = oe),
            (a[67] = lt),
            (a[68] = H),
            (a[69] = ct))
          : (ct = a[69]),
        ct
      );
    }
    function k(e) {
      return e.skipKeyboardNav === !1;
    }
    function I(e) {
      return e.type !== "non_participant_separator";
    }
    function T(e) {
      return e.selectable;
    }
    function D() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return !1;
      var t = e.anchor.getNode();
      return t instanceof o("WAWebMentionNode").MentionNode;
    }
    function x(e) {
      return (
        e.type === "group" || e.type === "contact" || e.type === "mention_all"
      );
    }
    function $() {
      return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
        text: "@all",
      });
    }
    function P(e, t) {
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
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
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
    l.default = E;
  },
  226,
);
