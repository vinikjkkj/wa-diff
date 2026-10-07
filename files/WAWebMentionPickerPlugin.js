__d(
  "WAWebMentionPickerPlugin",
  [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
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
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function L(e) {
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
    function E(t) {
      var a = o("react-compiler-runtime").c(71),
        i = t.chat,
        l = t.elevatedPushNamesEnabled,
        u = t.source,
        d = o("LexicalComposerContext").useLexicalComposerContext(),
        m = d[0],
        E = i.groupMetadata,
        A = p(!1),
        F = A[0],
        O = A[1],
        B;
      a[0] !== E ? ((B = R(E)), (a[0] = E), (a[1] = B)) : (B = a[1]);
      var W = B,
        q;
      a[2] !== E ? ((q = L(E)), (a[2] = E), (a[3] = q)) : (q = a[3]);
      var U = q,
        V = W || U,
        H;
      a[4] !== V
        ? ((H = { enabled: V, maxQueryLength: C, boundary: !0 }),
          (a[4] = V),
          (a[5] = H))
        : (H = a[5]);
      var G = o("useWAWebLexicalTypeAhead").useTypeAhead(
          m,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          H,
        ),
        z = G.leadOffset,
        j = G.omitQuery,
        K = G.query,
        Q = G.replaceQuery,
        X;
      a[6] !== Q
        ? ((X = function (t) {
            Q(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (a[6] = Q),
          (a[7] = X))
        : (X = a[7]);
      var Y = X,
        J;
      a[8] !== i || a[9] !== Q || a[10] !== u
        ? ((J = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (u !== "forward-append-message" &&
                o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                  i,
                  1,
                ),
                Q(P, { trailingSpace: !0 }),
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
          (a[9] = Q),
          (a[10] = u),
          (a[11] = J))
        : (J = a[11]);
      var Z = J,
        ee = $,
        te;
      a[12] !== i || a[13] !== Y || a[14] !== Z
        ? ((te = function (t) {
            if (t.type === "mention_all") {
              Z();
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
                Y(t.id);
                var e =
                  t.type === "contact"
                    ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER
                    : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
                o(
                  "WAWebMentionPickerActionLoggingUtils",
                ).logMentionPickerAction(i, e);
              }
          }),
          (a[12] = i),
          (a[13] = Y),
          (a[14] = Z),
          (a[15] = te))
        : (te = a[15]);
      var ne = te,
        re;
      a[16] !== i || a[17] !== E || a[18] !== ne
        ? ((re = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              ee(t)
            ) {
              if (t.type === "mention_all") {
                ne(t);
                return;
              }
              if (t.type !== "contact" && t.type !== "group") return;
              var e = t;
              N(e.id)
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
                      ne(e);
                    })
                    .catch(r("WAWebNoop"))
                : ne(e);
            }
          }),
          (a[16] = i),
          (a[17] = E),
          (a[18] = ne),
          (a[19] = re))
        : (re = a[19]);
      var oe = re,
        ae;
      a[20] !== j
        ? ((ae = function () {
            j();
          }),
          (a[20] = j),
          (a[21] = ae))
        : (ae = a[21]);
      var ie = ae,
        le;
      a[22] !== i || a[23] !== m || a[24] !== l || a[25] !== Y
        ? ((le = function (n, a) {
            switch (n.type) {
              case "contact": {
                var t = n,
                  u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id),
                  d = o(
                    "WAWebLimitSharingUIUtils",
                  ).isLimitSharingReceiverEnabledForUsers(i, [t.id]),
                  p = u || d;
                return N(t.id) &&
                  !o("WAWebBotTos").hasSeenMasterBotTos() &&
                  !o("WAWebBotTos").hasSeenInvokeTos() &&
                  !p
                  ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: a })
                  : c.jsx(
                      o("WAWebMentionsPluginResult.react").UserResult,
                      {
                        chat: i,
                        contact: t.contact,
                        term: t.query,
                        theme: null,
                        selected: a,
                        disabled: p,
                        disabledCTA: M(u, d),
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
                      (O(!1),
                        Y(t.id),
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
                      (O(!1), m.focus());
                    },
                    onAddDialogShown: function () {
                      O(!0);
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
          (a[22] = i),
          (a[23] = m),
          (a[24] = l),
          (a[25] = Y),
          (a[26] = le))
        : (le = a[26]);
      var se = le,
        ue;
      e: {
        var ce = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? h
          : g;
        if (K == null) {
          ue = null;
          break e;
        }
        if (E == null) {
          ue = null;
          break e;
        }
        var de = m.getEditorState().read(x);
        if (de) {
          ue = null;
          break e;
        }
        var me;
        if (
          a[27] !== U ||
          a[28] !== E ||
          a[29] !== K ||
          a[30] !== u ||
          a[31] !== W
        ) {
          me = [];
          var pe = W && U;
          if (
            (E == null ? void 0 : E.id) != null &&
            w({ groupMetadata: E, query: K, source: u })
          ) {
            var _e;
            (a[33] !== E.id || a[34] !== me.length || a[35] !== K
              ? ((_e = {
                  type: "mention_all",
                  selectable: !0,
                  index: me.length,
                  itemKey: "mention-all",
                  height: ce,
                  contentKey: K,
                  id: E.id,
                  query: K,
                }),
                (a[33] = E.id),
                (a[34] = me.length),
                (a[35] = K),
                (a[36] = _e))
              : (_e = a[36]),
              me.push(_e));
          }
          var fe = [];
          W &&
            ((fe = o("WAWebMentionsPluginUtil").getUserResults(K, E)),
            u === "forward-append-message" && (fe = fe.filter(D)));
          var ge = [];
          U &&
            E != null &&
            (ge = o("WAWebMentionsPluginUtil").getSubgroupResults(K, E));
          var he = Math.min(ge.length, S),
            ye = pe && he !== 0 ? 1 : 0,
            Ce = v - me.length - he - ye,
            be = pe && fe.length !== 0 && Ce > 1 ? 1 : 0,
            ve = Math.max(0, Ce - be),
            Se = fe.slice(0, ve);
          if (Se.length !== 0) {
            var Re;
            if (be !== 0) {
              var Le;
              (a[37] !== me.length
                ? ((Le = {
                    index: me.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[37] = me.length),
                  (a[38] = Le))
                : (Le = a[38]),
                me.push(Le));
            }
            var Ee = me.length,
              ke;
            (a[39] !== Ee || a[40] !== K
              ? ((ke = function (t, n) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: ce,
                    itemKey: t.id.toString(),
                    contentKey: K,
                    index: Ee + n,
                    query: K,
                  };
                }),
                (a[39] = Ee),
                (a[40] = K),
                (a[41] = ke))
              : (ke = a[41]),
              (Re = me).push.apply(Re, Se.map(ke)));
          }
          var Ie = Math.max(0, v - me.length - ye),
            Te = ge.slice(0, Ie);
          if (Te.length !== 0) {
            var De;
            if (ye !== 0) {
              var xe;
              (a[42] !== me.length
                ? ((xe = {
                    index: me.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[42] = me.length),
                  (a[43] = xe))
                : (xe = a[43]),
                me.push(xe));
            }
            var $e = me.length,
              Pe;
            (a[44] !== K || a[45] !== $e
              ? ((Pe = function (t, n) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: ce,
                    itemKey: t.id.toString(),
                    contentKey: K,
                    index: $e + n,
                    query: K,
                  };
                }),
                (a[44] = K),
                (a[45] = $e),
                (a[46] = Pe))
              : (Pe = a[46]),
              (De = me).push.apply(De, Te.map(Pe)));
          }
          ((a[27] = U),
            (a[28] = E),
            (a[29] = K),
            (a[30] = u),
            (a[31] = W),
            (a[32] = me));
        } else me = a[32];
        ue = me.length ? me : null;
      }
      var Ne = ue,
        Me;
      e: {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_suggestions_non_group_members_enabled",
          )
        ) {
          Me = !1;
          break e;
        }
        if (E == null) {
          Me = !1;
          break e;
        }
        if (u !== "chat-composer") {
          Me = !1;
          break e;
        }
        if (
          o("WAWebGroupMetadataGetters").getGroupType(E) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          Me = !1;
          break e;
        }
        if (!E.participants.canAdd()) {
          Me = !1;
          break e;
        }
        var we = E.parentGroup;
        if (we != null && !E.participants.iAmAdmin()) {
          var Ae = r("WAWebGroupMetadataCollection").get(we),
            Fe = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(Ae);
          if (
            Fe != null &&
            Fe.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            Me = !1;
            break e;
          }
        }
        Me = !0;
      }
      var Oe = Me,
        Be;
      e: {
        if (K == null || !Oe) {
          Be = !1;
          break e;
        }
        var We = r("countWhere")(Ne != null ? Ne : [], T);
        if (We > 0) {
          Be = !1;
          break e;
        }
        var qe = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (qe <= 0) {
          Be = !1;
          break e;
        }
        var Ue = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (Ue > 0 && K.length < Ue) {
          Be = !1;
          break e;
        }
        Be = !0;
      }
      var Ve = Be,
        He;
      e: {
        if (!Ve || E == null) {
          He = null;
          break e;
        }
        var Ge;
        (a[47] !== E
          ? ((Ge = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(E)),
            (a[47] = E),
            (a[48] = Ge))
          : (Ge = a[48]),
          (He = Ge));
      }
      var ze = He,
        je;
      if (a[49] !== ze || a[50] !== K) {
        e: {
          if (K == null || ze == null) {
            je = null;
            break e;
          }
          var Ke = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Ke <= 0) {
            je = null;
            break e;
          }
          var Qe = o("WAWebMentionsPluginUtil").filterContactsByQuery(K, ze);
          if (Qe.length === 0) {
            je = null;
            break e;
          }
          var Xe = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? h
              : g,
            Ye = [],
            Je;
          (a[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((Je = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: y,
              }),
              (a[52] = Je))
            : (Je = a[52]),
            Ye.push(Je));
          var Ze;
          a[53] !== K
            ? ((Ze = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Xe,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: K,
                  index: n + 1,
                  query: K,
                };
              }),
              (a[53] = K),
              (a[54] = Ze))
            : (Ze = a[54]);
          var et = Qe.slice(0, Ke).map(Ze);
          (Ye.push.apply(Ye, et), (je = Ye));
        }
        ((a[49] = ze), (a[50] = K), (a[51] = je));
      } else je = a[51];
      var tt = je,
        nt;
      e: {
        if (Ne == null && tt == null) {
          nt = null;
          break e;
        }
        var rt;
        if (a[55] !== tt || a[56] !== Ne) {
          if (((rt = []), Ne != null)) {
            var ot;
            (ot = rt).push.apply(ot, Ne);
          }
          if (tt != null) {
            var at, it;
            a[58] !== tt
              ? ((it = tt.filter(I)), (a[58] = tt), (a[59] = it))
              : (it = a[59]);
            var lt = it;
            (at = rt).push.apply(at, lt);
          }
          ((a[55] = tt), (a[56] = Ne), (a[57] = rt));
        } else rt = a[57];
        nt = rt.length > 0 ? rt : null;
      }
      var st = nt,
        ut,
        ct;
      a[60] !== st || a[61] !== se || a[62] !== oe || a[63] !== F
        ? ((ut = F
            ? []
            : (st != null ? st : []).map(function (e) {
                var t =
                  e.type === "contact_header" ||
                  e.type === "group_header" ||
                  e.type === "non_participant_separator" ||
                  (e.type === "contact" &&
                    o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id));
                return {
                  renderFn: function (n) {
                    return se(e, n);
                  },
                  onSelect: function () {
                    return oe(e);
                  },
                  width: 360,
                  height: r("nullthrows")(e.height),
                  skipKeyboardNav: t,
                  disabled: t,
                };
              })),
          (ct = ut.findIndex(k)),
          (a[60] = st),
          (a[61] = se),
          (a[62] = oe),
          (a[63] = F),
          (a[64] = ut),
          (a[65] = ct))
        : ((ut = a[64]), (ct = a[65]));
      var dt = ct,
        mt;
      return (
        a[66] !== dt || a[67] !== ie || a[68] !== ut || a[69] !== z
          ? ((mt = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: z,
              items: ut,
              onCancel: ie,
              startingIndex: dt,
            })),
            (a[66] = dt),
            (a[67] = ie),
            (a[68] = ut),
            (a[69] = z),
            (a[70] = mt))
          : (mt = a[70]),
        mt
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
    function D(e) {
      return !e.id.isBot();
    }
    function x() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return !1;
      var t = e.anchor.getNode();
      return t instanceof o("WAWebMentionNode").MentionNode;
    }
    function $(e) {
      return (
        e.type === "group" || e.type === "contact" || e.type === "mention_all"
      );
    }
    function P() {
      return new (o("WAWebNonJidMentionNode").NonJidMentionNode)({
        text: "@all",
      });
    }
    function N(e) {
      return e.isBot()
        ? o("WAWebBotUtils").isMetaAiBot(e) ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        : !1;
    }
    function M(e, t) {
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
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
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
    l.default = E;
  },
  226,
);
