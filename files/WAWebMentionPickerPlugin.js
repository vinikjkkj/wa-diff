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
        w = p(!1),
        A = w[0],
        F = w[1],
        O;
      a[0] !== E ? ((O = R(E)), (a[0] = E), (a[1] = O)) : (O = a[1]);
      var B = O,
        W;
      a[2] !== E ? ((W = L(E)), (a[2] = E), (a[3] = W)) : (W = a[3]);
      var q = W,
        U = B || q,
        V;
      a[4] !== U
        ? ((V = { enabled: U, maxQueryLength: C, boundary: !0 }),
          (a[4] = U),
          (a[5] = V))
        : (V = a[5]);
      var H = o("useWAWebLexicalTypeAhead").useTypeAhead(
          m,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          V,
        ),
        G = H.leadOffset,
        z = H.omitQuery,
        j = H.query,
        K = H.replaceQuery,
        Q;
      a[6] !== K
        ? ((Q = function (t) {
            K(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (a[6] = K),
          (a[7] = Q))
        : (Q = a[7]);
      var X = Q,
        Y;
      a[8] !== i || a[9] !== K || a[10] !== u
        ? ((Y = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (u !== "forward-append-message" &&
                o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(
                  i,
                  1,
                ),
                K(P, { trailingSpace: !0 }),
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
          (a[9] = K),
          (a[10] = u),
          (a[11] = Y))
        : (Y = a[11]);
      var J = Y,
        Z = $,
        ee;
      a[12] !== i || a[13] !== X || a[14] !== J
        ? ((ee = function (t) {
            if (t.type === "mention_all") {
              J();
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
                X(t.id);
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
          (a[13] = X),
          (a[14] = J),
          (a[15] = ee))
        : (ee = a[15]);
      var te = ee,
        ne;
      a[16] !== i || a[17] !== E || a[18] !== te
        ? ((ne = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              Z(t)
            ) {
              if (t.type === "mention_all") {
                te(t);
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
                      te(e);
                    })
                    .catch(r("WAWebNoop"))
                : te(e);
            }
          }),
          (a[16] = i),
          (a[17] = E),
          (a[18] = te),
          (a[19] = ne))
        : (ne = a[19]);
      var re = ne,
        oe;
      a[20] !== z
        ? ((oe = function () {
            z();
          }),
          (a[20] = z),
          (a[21] = oe))
        : (oe = a[21]);
      var ae = oe,
        ie;
      a[22] !== i || a[23] !== m || a[24] !== l || a[25] !== X
        ? ((ie = function (n, a) {
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
                        disabledCTA: N(u, d),
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
                      (F(!1),
                        X(t.id),
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
                      (F(!1), m.focus());
                    },
                    onAddDialogShown: function () {
                      F(!0);
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
          (a[25] = X),
          (a[26] = ie))
        : (ie = a[26]);
      var le = ie,
        se;
      e: {
        var ue = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? h
          : g;
        if (j == null) {
          se = null;
          break e;
        }
        if (E == null) {
          se = null;
          break e;
        }
        var ce = m.getEditorState().read(x);
        if (ce) {
          se = null;
          break e;
        }
        var de;
        if (
          a[27] !== q ||
          a[28] !== E ||
          a[29] !== j ||
          a[30] !== u ||
          a[31] !== B
        ) {
          de = [];
          var me = B && q;
          if (
            (E == null ? void 0 : E.id) != null &&
            M({ groupMetadata: E, query: j, source: u })
          ) {
            var pe;
            (a[33] !== E.id || a[34] !== de.length || a[35] !== j
              ? ((pe = {
                  type: "mention_all",
                  selectable: !0,
                  index: de.length,
                  itemKey: "mention-all",
                  height: ue,
                  contentKey: j,
                  id: E.id,
                  query: j,
                }),
                (a[33] = E.id),
                (a[34] = de.length),
                (a[35] = j),
                (a[36] = pe))
              : (pe = a[36]),
              de.push(pe));
          }
          var _e = [];
          B &&
            ((_e = o("WAWebMentionsPluginUtil").getUserResults(j, E)),
            u === "forward-append-message" && (_e = _e.filter(D)));
          var fe = [];
          q &&
            E != null &&
            (fe = o("WAWebMentionsPluginUtil").getSubgroupResults(j, E));
          var ge = Math.min(fe.length, S),
            he = me && ge !== 0 ? 1 : 0,
            ye = v - de.length - ge - he,
            Ce = me && _e.length !== 0 && ye > 1 ? 1 : 0,
            be = Math.max(0, ye - Ce),
            ve = _e.slice(0, be);
          if (ve.length !== 0) {
            var Se;
            if (Ce !== 0) {
              var Re;
              (a[37] !== de.length
                ? ((Re = {
                    index: de.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[37] = de.length),
                  (a[38] = Re))
                : (Re = a[38]),
                de.push(Re));
            }
            var Le = de.length,
              Ee;
            (a[39] !== Le || a[40] !== j
              ? ((Ee = function (t, n) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: ue,
                    itemKey: t.id.toString(),
                    contentKey: j,
                    index: Le + n,
                    query: j,
                  };
                }),
                (a[39] = Le),
                (a[40] = j),
                (a[41] = Ee))
              : (Ee = a[41]),
              (Se = de).push.apply(Se, ve.map(Ee)));
          }
          var ke = Math.max(0, v - de.length - he),
            Ie = fe.slice(0, ke);
          if (Ie.length !== 0) {
            var Te;
            if (he !== 0) {
              var De;
              (a[42] !== de.length
                ? ((De = {
                    index: de.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[42] = de.length),
                  (a[43] = De))
                : (De = a[43]),
                de.push(De));
            }
            var xe = de.length,
              $e;
            (a[44] !== j || a[45] !== xe
              ? (($e = function (t, n) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: ue,
                    itemKey: t.id.toString(),
                    contentKey: j,
                    index: xe + n,
                    query: j,
                  };
                }),
                (a[44] = j),
                (a[45] = xe),
                (a[46] = $e))
              : ($e = a[46]),
              (Te = de).push.apply(Te, Ie.map($e)));
          }
          ((a[27] = q),
            (a[28] = E),
            (a[29] = j),
            (a[30] = u),
            (a[31] = B),
            (a[32] = de));
        } else de = a[32];
        se = de.length ? de : null;
      }
      var Pe = se,
        Ne;
      e: {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_suggestions_non_group_members_enabled",
          )
        ) {
          Ne = !1;
          break e;
        }
        if (E == null) {
          Ne = !1;
          break e;
        }
        if (u !== "chat-composer") {
          Ne = !1;
          break e;
        }
        if (
          o("WAWebGroupMetadataGetters").getGroupType(E) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          Ne = !1;
          break e;
        }
        if (!E.participants.canAdd()) {
          Ne = !1;
          break e;
        }
        var Me = E.parentGroup;
        if (Me != null && !E.participants.iAmAdmin()) {
          var we = r("WAWebGroupMetadataCollection").get(Me),
            Ae = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(we);
          if (
            Ae != null &&
            Ae.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            Ne = !1;
            break e;
          }
        }
        Ne = !0;
      }
      var Fe = Ne,
        Oe;
      e: {
        if (j == null || !Fe) {
          Oe = !1;
          break e;
        }
        var Be = r("countWhere")(Pe != null ? Pe : [], T);
        if (Be > 0) {
          Oe = !1;
          break e;
        }
        var We = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (We <= 0) {
          Oe = !1;
          break e;
        }
        var qe = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (qe > 0 && j.length < qe) {
          Oe = !1;
          break e;
        }
        Oe = !0;
      }
      var Ue = Oe,
        Ve;
      e: {
        if (!Ue || E == null) {
          Ve = null;
          break e;
        }
        var He;
        (a[47] !== E
          ? ((He = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(E)),
            (a[47] = E),
            (a[48] = He))
          : (He = a[48]),
          (Ve = He));
      }
      var Ge = Ve,
        ze;
      if (a[49] !== Ge || a[50] !== j) {
        e: {
          if (j == null || Ge == null) {
            ze = null;
            break e;
          }
          var je = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (je <= 0) {
            ze = null;
            break e;
          }
          var Ke = o("WAWebMentionsPluginUtil").filterContactsByQuery(j, Ge);
          if (Ke.length === 0) {
            ze = null;
            break e;
          }
          var Qe = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? h
              : g,
            Xe = [],
            Ye;
          (a[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ye = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: y,
              }),
              (a[52] = Ye))
            : (Ye = a[52]),
            Xe.push(Ye));
          var Je;
          a[53] !== j
            ? ((Je = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Qe,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: j,
                  index: n + 1,
                  query: j,
                };
              }),
              (a[53] = j),
              (a[54] = Je))
            : (Je = a[54]);
          var Ze = Ke.slice(0, je).map(Je);
          (Xe.push.apply(Xe, Ze), (ze = Xe));
        }
        ((a[49] = Ge), (a[50] = j), (a[51] = ze));
      } else ze = a[51];
      var et = ze,
        tt;
      e: {
        if (Pe == null && et == null) {
          tt = null;
          break e;
        }
        var nt;
        if (a[55] !== et || a[56] !== Pe) {
          if (((nt = []), Pe != null)) {
            var rt;
            (rt = nt).push.apply(rt, Pe);
          }
          if (et != null) {
            var ot, at;
            a[58] !== et
              ? ((at = et.filter(I)), (a[58] = et), (a[59] = at))
              : (at = a[59]);
            var it = at;
            (ot = nt).push.apply(ot, it);
          }
          ((a[55] = et), (a[56] = Pe), (a[57] = nt));
        } else nt = a[57];
        tt = nt.length > 0 ? nt : null;
      }
      var lt = tt,
        st,
        ut;
      a[60] !== lt || a[61] !== le || a[62] !== re || a[63] !== A
        ? ((st = A
            ? []
            : (lt != null ? lt : []).map(function (e) {
                var t =
                  e.type === "contact_header" ||
                  e.type === "group_header" ||
                  e.type === "non_participant_separator" ||
                  (e.type === "contact" &&
                    o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id));
                return {
                  renderFn: function (n) {
                    return le(e, n);
                  },
                  onSelect: function () {
                    return re(e);
                  },
                  width: 360,
                  height: r("nullthrows")(e.height),
                  skipKeyboardNav: t,
                  disabled: t,
                };
              })),
          (ut = st.findIndex(k)),
          (a[60] = lt),
          (a[61] = le),
          (a[62] = re),
          (a[63] = A),
          (a[64] = st),
          (a[65] = ut))
        : ((st = a[64]), (ut = a[65]));
      var ct = ut,
        dt;
      return (
        a[66] !== ct || a[67] !== ae || a[68] !== st || a[69] !== G
          ? ((dt = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: G,
              items: st,
              onCancel: ae,
              startingIndex: ct,
            })),
            (a[66] = ct),
            (a[67] = ae),
            (a[68] = st),
            (a[69] = G),
            (a[70] = dt))
          : (dt = a[70]),
        dt
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
    function N(e, t) {
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
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
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
