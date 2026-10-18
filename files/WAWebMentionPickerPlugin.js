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
    "useWAWebOrgMentionNames",
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
      var a = o("react-compiler-runtime").c(72),
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
        X = r("useWAWebOrgMentionNames")(E, K != null && W),
        Y;
      a[6] !== Q
        ? ((Y = function (t) {
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
          (a[7] = Y))
        : (Y = a[7]);
      var J = Y,
        Z;
      a[8] !== i || a[9] !== Q || a[10] !== u
        ? ((Z = (function () {
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
          (a[11] = Z))
        : (Z = a[11]);
      var ee = Z,
        te = $,
        ne;
      a[12] !== i || a[13] !== J || a[14] !== ee
        ? ((ne = function (t) {
            if (t.type === "mention_all") {
              ee();
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
                J(t.id);
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
          (a[13] = J),
          (a[14] = ee),
          (a[15] = ne))
        : (ne = a[15]);
      var re = ne,
        oe;
      a[16] !== i || a[17] !== E || a[18] !== re
        ? ((oe = function (t) {
            if (
              !(
                t.type === "contact" &&
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
              ) &&
              te(t)
            ) {
              if (t.type === "mention_all") {
                re(t);
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
                      re(e);
                    })
                    .catch(r("WAWebNoop"))
                : re(e);
            }
          }),
          (a[16] = i),
          (a[17] = E),
          (a[18] = re),
          (a[19] = oe))
        : (oe = a[19]);
      var ae = oe,
        ie;
      a[20] !== j
        ? ((ie = function () {
            j();
          }),
          (a[20] = j),
          (a[21] = ie))
        : (ie = a[21]);
      var le = ie,
        se;
      a[22] !== i || a[23] !== m || a[24] !== l || a[25] !== J
        ? ((se = function (n, a) {
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
                        J(t.id),
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
          (a[25] = J),
          (a[26] = se))
        : (se = a[26]);
      var ue = se,
        ce;
      e: {
        var de = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? h
          : g;
        if (K == null) {
          ce = null;
          break e;
        }
        if (E == null) {
          ce = null;
          break e;
        }
        var me = m.getEditorState().read(x);
        if (me) {
          ce = null;
          break e;
        }
        var pe;
        if (
          a[27] !== X ||
          a[28] !== U ||
          a[29] !== E ||
          a[30] !== K ||
          a[31] !== u ||
          a[32] !== W
        ) {
          pe = [];
          var _e = W && U;
          if (
            (E == null ? void 0 : E.id) != null &&
            w({ groupMetadata: E, query: K, source: u })
          ) {
            var fe;
            (a[34] !== E.id || a[35] !== pe.length || a[36] !== K
              ? ((fe = {
                  type: "mention_all",
                  selectable: !0,
                  index: pe.length,
                  itemKey: "mention-all",
                  height: de,
                  contentKey: K,
                  id: E.id,
                  query: K,
                }),
                (a[34] = E.id),
                (a[35] = pe.length),
                (a[36] = K),
                (a[37] = fe))
              : (fe = a[37]),
              pe.push(fe));
          }
          var ge = [];
          W &&
            ((ge = o("WAWebMentionsPluginUtil").getUserResults(K, E, X)),
            u === "forward-append-message" && (ge = ge.filter(D)));
          var he = [];
          U &&
            E != null &&
            (he = o("WAWebMentionsPluginUtil").getSubgroupResults(K, E));
          var ye = Math.min(he.length, S),
            Ce = _e && ye !== 0 ? 1 : 0,
            be = v - pe.length - ye - Ce,
            ve = _e && ge.length !== 0 && be > 1 ? 1 : 0,
            Se = Math.max(0, be - ve),
            Re = ge.slice(0, Se);
          if (Re.length !== 0) {
            var Le;
            if (ve !== 0) {
              var Ee;
              (a[38] !== pe.length
                ? ((Ee = {
                    index: pe.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[38] = pe.length),
                  (a[39] = Ee))
                : (Ee = a[39]),
                pe.push(Ee));
            }
            var ke = pe.length,
              Ie;
            (a[40] !== ke || a[41] !== K
              ? ((Ie = function (t, n) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: de,
                    itemKey: t.id.toString(),
                    contentKey: K,
                    index: ke + n,
                    query: K,
                  };
                }),
                (a[40] = ke),
                (a[41] = K),
                (a[42] = Ie))
              : (Ie = a[42]),
              (Le = pe).push.apply(Le, Re.map(Ie)));
          }
          var Te = Math.max(0, v - pe.length - Ce),
            De = he.slice(0, Te);
          if (De.length !== 0) {
            var xe;
            if (Ce !== 0) {
              var $e;
              (a[43] !== pe.length
                ? (($e = {
                    index: pe.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: f,
                  }),
                  (a[43] = pe.length),
                  (a[44] = $e))
                : ($e = a[44]),
                pe.push($e));
            }
            var Pe = pe.length,
              Ne;
            (a[45] !== K || a[46] !== Pe
              ? ((Ne = function (t, n) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: de,
                    itemKey: t.id.toString(),
                    contentKey: K,
                    index: Pe + n,
                    query: K,
                  };
                }),
                (a[45] = K),
                (a[46] = Pe),
                (a[47] = Ne))
              : (Ne = a[47]),
              (xe = pe).push.apply(xe, De.map(Ne)));
          }
          ((a[27] = X),
            (a[28] = U),
            (a[29] = E),
            (a[30] = K),
            (a[31] = u),
            (a[32] = W),
            (a[33] = pe));
        } else pe = a[33];
        ce = pe.length ? pe : null;
      }
      var Me = ce,
        we;
      e: {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_suggestions_non_group_members_enabled",
          )
        ) {
          we = !1;
          break e;
        }
        if (E == null) {
          we = !1;
          break e;
        }
        if (u !== "chat-composer") {
          we = !1;
          break e;
        }
        if (
          o("WAWebGroupMetadataGetters").getGroupType(E) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          we = !1;
          break e;
        }
        if (!E.participants.canAdd()) {
          we = !1;
          break e;
        }
        var Ae = E.parentGroup;
        if (Ae != null && !E.participants.iAmAdmin()) {
          var Fe = r("WAWebGroupMetadataCollection").get(Ae),
            Oe = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(Fe);
          if (
            Oe != null &&
            Oe.memberAddMode !==
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
          ) {
            we = !1;
            break e;
          }
        }
        we = !0;
      }
      var Be = we,
        We;
      e: {
        if (K == null || !Be) {
          We = !1;
          break e;
        }
        var qe = r("countWhere")(Me != null ? Me : [], T);
        if (qe > 0) {
          We = !1;
          break e;
        }
        var Ue = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_limit",
        );
        if (Ue <= 0) {
          We = !1;
          break e;
        }
        var Ve = o("WAWebABProps").getABPropConfigValue(
          "enhanced_mention_suggestions_min_mention_char_count",
        );
        if (Ve > 0 && K.length < Ve) {
          We = !1;
          break e;
        }
        We = !0;
      }
      var He = We,
        Ge;
      e: {
        if (!He || E == null) {
          Ge = null;
          break e;
        }
        var ze;
        (a[48] !== E
          ? ((ze = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(E)),
            (a[48] = E),
            (a[49] = ze))
          : (ze = a[49]),
          (Ge = ze));
      }
      var je = Ge,
        Ke;
      if (a[50] !== je || a[51] !== K) {
        e: {
          if (K == null || je == null) {
            Ke = null;
            break e;
          }
          var Qe = o("WAWebABProps").getABPropConfigValue(
            "enhanced_mention_limit",
          );
          if (Qe <= 0) {
            Ke = null;
            break e;
          }
          var Xe = o("WAWebMentionsPluginUtil").filterContactsByQuery(K, je);
          if (Xe.length === 0) {
            Ke = null;
            break e;
          }
          var Ye = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? h
              : g,
            Je = [],
            Ze;
          (a[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ze = {
                index: 0,
                itemKey: "section-non-participants-separator",
                type: "non_participant_separator",
                selectable: !1,
                height: y,
              }),
              (a[53] = Ze))
            : (Ze = a[53]),
            Je.push(Ze));
          var et;
          a[54] !== K
            ? ((et = function (t, n) {
                return {
                  type: "non_participant_contact",
                  selectable: !0,
                  contact: t,
                  id: t.id,
                  height: Ye,
                  itemKey: "non-participant-" + t.id.toString(),
                  contentKey: K,
                  index: n + 1,
                  query: K,
                };
              }),
              (a[54] = K),
              (a[55] = et))
            : (et = a[55]);
          var tt = Xe.slice(0, Qe).map(et);
          (Je.push.apply(Je, tt), (Ke = Je));
        }
        ((a[50] = je), (a[51] = K), (a[52] = Ke));
      } else Ke = a[52];
      var nt = Ke,
        rt;
      e: {
        if (Me == null && nt == null) {
          rt = null;
          break e;
        }
        var ot;
        if (a[56] !== nt || a[57] !== Me) {
          if (((ot = []), Me != null)) {
            var at;
            (at = ot).push.apply(at, Me);
          }
          if (nt != null) {
            var it, lt;
            a[59] !== nt
              ? ((lt = nt.filter(I)), (a[59] = nt), (a[60] = lt))
              : (lt = a[60]);
            var st = lt;
            (it = ot).push.apply(it, st);
          }
          ((a[56] = nt), (a[57] = Me), (a[58] = ot));
        } else ot = a[58];
        rt = ot.length > 0 ? ot : null;
      }
      var ut = rt,
        ct,
        dt;
      a[61] !== ut || a[62] !== ue || a[63] !== ae || a[64] !== F
        ? ((ct = F
            ? []
            : (ut != null ? ut : []).map(function (e) {
                var t =
                  e.type === "contact_header" ||
                  e.type === "group_header" ||
                  e.type === "non_participant_separator" ||
                  (e.type === "contact" &&
                    o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id));
                return {
                  renderFn: function (n) {
                    return ue(e, n);
                  },
                  onSelect: function () {
                    return ae(e);
                  },
                  width: 360,
                  height: r("nullthrows")(e.height),
                  skipKeyboardNav: t,
                  disabled: t,
                };
              })),
          (dt = ct.findIndex(k)),
          (a[61] = ut),
          (a[62] = ue),
          (a[63] = ae),
          (a[64] = F),
          (a[65] = ct),
          (a[66] = dt))
        : ((ct = a[65]), (dt = a[66]));
      var mt = dt,
        pt;
      return (
        a[67] !== mt || a[68] !== le || a[69] !== ct || a[70] !== z
          ? ((pt = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: z,
              items: ct,
              onCancel: le,
              startingIndex: mt,
            })),
            (a[67] = mt),
            (a[68] = le),
            (a[69] = ct),
            (a[70] = z),
            (a[71] = pt))
          : (pt = a[71]),
        pt
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
