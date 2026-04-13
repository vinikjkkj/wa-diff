__d(
  "WAWebMentionSuggestions.react",
  [
    "fbt",
    "Lexical",
    "WAWebBotDisclaimerManager",
    "WAWebBotInvokeUpsellRow.react",
    "WAWebBotLogging",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebConstantsDeprecated",
    "WAWebFbtCommon",
    "WAWebGroupType",
    "WAWebLexicalUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebListSuggestionsPanel.react",
    "WAWebMentionNode",
    "WAWebMentionSuggestionsUtils",
    "WAWebMentionsPluginResult.react",
    "WAWebMentionsPluginUtil",
    "WAWebNoop",
    "WAWebRichTextInputConst",
    "WAWebTextStatusGatingUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = 42,
      p = 52,
      _ = 60,
      f = r("WAWebConstantsDeprecated").MAX_PUSHNAME_LENGTH * 2,
      g = {
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
      };
    function h(e, t) {
      return !(
        (e == null && !t) ||
        (e == null ? void 0 : e.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function y(e) {
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
    function C(t) {
      var n = o("react-compiler-runtime").c(37),
        a = t.botInvokeEnabled,
        i = t.chat,
        l = t.editor,
        u = t.elevatedPushNamesEnabled,
        d = t.groupMetadata,
        C = t.kind,
        S = a === void 0 ? !1 : a,
        R;
      n[0] !== S || n[1] !== d
        ? ((R = h(d, S)), (n[0] = S), (n[1] = d), (n[2] = R))
        : (R = n[2]);
      var L = R,
        E;
      n[3] !== d ? ((E = y(d)), (n[3] = d), (n[4] = E)) : (E = n[4]);
      var k = E,
        I = L || k,
        T;
      n[5] !== I
        ? ((T = { enabled: I, maxQueryLength: f, boundary: !0 }),
          (n[5] = I),
          (n[6] = T))
        : (T = n[6]);
      var D = o("useWAWebLexicalTypeAhead").useTypeAhead(
          l,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          T,
        ),
        x = D.omitQuery,
        $ = D.query,
        P = D.replaceQuery,
        N;
      n[7] !== P
        ? ((N = function (t) {
            P(
              function () {
                return new (o("Lexical").TextNode)(
                  o("WAWebMentionSuggestionsUtils").formatMention(t),
                );
              },
              { trailingSpace: !0 },
            );
          }),
          (n[7] = P),
          (n[8] = N))
        : (N = n[8]);
      var M = N,
        w,
        A;
      n[9] !== i || n[10] !== M
        ? ((A = function (t) {
            w(t) &&
              (o(
                "WAWebLimitSharingUIUtils",
              ).isLimitSharingReceiverEnabledForUsers(i, [t.id])
                ? o(
                    "WAWebLimitSharingUIUtils",
                  ).showLimitSharingInvokeBlockedPopup(i)
                : M(t.id));
          }),
          (w = v),
          (n[9] = i),
          (n[10] = M),
          (n[11] = w),
          (n[12] = A))
        : ((w = n[11]), (A = n[12]));
      var F;
      n[13] !== w || n[14] !== i || n[15] !== A
        ? ((F = function (t) {
            w(t) &&
              (t.id.isBot()
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
                    })
                    .then(function () {
                      A(t);
                    })
                    .catch(r("WAWebNoop"))
                : A(t));
          }),
          (n[13] = w),
          (n[14] = i),
          (n[15] = A),
          (n[16] = F))
        : (F = n[16]);
      var O = F,
        B;
      n[17] !== i || n[18] !== u
        ? ((B = function (n, a) {
            switch (n.type) {
              case "contact": {
                var t = o(
                  "WAWebLimitSharingUIUtils",
                ).isLimitSharingReceiverEnabledForUsers(i, [n.id]);
                return n.id.isBot() &&
                  !o("WAWebBotTos").hasSeenMasterBotTos() &&
                  !o("WAWebBotTos").hasSeenInvokeTos() &&
                  !t
                  ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: a })
                  : c.jsx(
                      o("WAWebMentionsPluginResult.react").UserResult,
                      {
                        contact: n.contact,
                        term: n.query,
                        theme: null,
                        selected: a,
                        elevatedPushNamesEnabled: u,
                        disabled: t,
                        disabledCTA:
                          t &&
                          c.jsx("div", {
                            className: "xo1mcw5",
                            children: r("WAWebFbtCommon")("Learn more"),
                          }),
                      },
                      n.contact.id.toString(),
                    );
              }
              case "group":
                return c.jsx(
                  o("WAWebMentionsPluginResult.react").GroupResult,
                  {
                    groupMetadata: n.groupMetadata,
                    term: n.query,
                    theme: null,
                    selected: a,
                  },
                  n.groupMetadata.id.toString(),
                );
              case "contact_header":
                return c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      g.sectionHeader,
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
                      g.sectionHeader,
                      o("WAWebUISpacing").uiPadding.start14,
                    ),
                    { children: s._(/*BTDS*/ "Groups") },
                  ),
                );
            }
          }),
          (n[17] = i),
          (n[18] = u),
          (n[19] = B))
        : (B = n[19]);
      var W = B,
        q;
      e: {
        var U = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? _
          : p;
        if ($ == null) {
          q = null;
          break e;
        }
        if (d == null && !S) {
          q = null;
          break e;
        }
        var V = l.getEditorState().read(b);
        if (V) {
          q = null;
          break e;
        }
        var H;
        if (
          n[20] !== S ||
          n[21] !== k ||
          n[22] !== d ||
          n[23] !== $ ||
          n[24] !== L
        ) {
          H = [];
          var G = L && k;
          if (L) {
            var z = o("WAWebMentionsPluginUtil").getUserResults($, d, S);
            if (z.length !== 0) {
              var j;
              if (G) {
                var K;
                (n[26] !== H.length
                  ? ((K = {
                      index: H.length,
                      itemKey: "section-contacts",
                      type: "contact_header",
                      selectable: !1,
                      height: m,
                    }),
                    (n[26] = H.length),
                    (n[27] = K))
                  : (K = n[27]),
                  H.push(K));
              }
              var Q = z.map(function (e, t) {
                return {
                  type: "contact",
                  selectable: !0,
                  contact: e,
                  id: e.id,
                  height: U,
                  itemKey: e.id.toString(),
                  contentKey: $,
                  index: t + H.length,
                  query: $,
                };
              });
              (j = H).push.apply(j, Q);
            }
          }
          if (k && d != null) {
            var X = o("WAWebMentionsPluginUtil").getSubgroupResults($, d);
            if (X.length !== 0) {
              var Y;
              if (G) {
                var J;
                (n[28] !== H.length
                  ? ((J = {
                      index: H.length,
                      itemKey: "section-groups",
                      type: "group_header",
                      selectable: !1,
                      height: m,
                    }),
                    (n[28] = H.length),
                    (n[29] = J))
                  : (J = n[29]),
                  H.push(J));
              }
              var Z = X.map(function (e, t) {
                return {
                  type: "group",
                  selectable: !0,
                  groupMetadata: e,
                  id: e.id,
                  height: U,
                  itemKey: e.id.toString(),
                  contentKey: $,
                  index: t + H.length,
                  query: $,
                };
              });
              (Y = H).push.apply(Y, Z);
            }
          }
          ((n[20] = S),
            (n[21] = k),
            (n[22] = d),
            (n[23] = $),
            (n[24] = L),
            (n[25] = H));
        } else H = n[25];
        q = H.length ? H : null;
      }
      var ee = q,
        te;
      return (
        n[30] !== l ||
        n[31] !== W ||
        n[32] !== O ||
        n[33] !== C ||
        n[34] !== x ||
        n[35] !== ee
          ? ((te = c.jsx(r("WAWebListSuggestionsPanel.react"), {
              kind: C,
              editor: l,
              items: ee,
              renderItem: W,
              onSelect: O,
              onDismiss: x,
            })),
            (n[30] = l),
            (n[31] = W),
            (n[32] = O),
            (n[33] = C),
            (n[34] = x),
            (n[35] = ee),
            (n[36] = te))
          : (te = n[36]),
        te
      );
    }
    function b() {
      var e = o("WAWebLexicalUtils").$getRangeSelection();
      if (!e) return !1;
      var t = e.anchor.getNode();
      return t instanceof o("WAWebMentionNode").MentionNode;
    }
    function v(e) {
      return e.type === "group" || e.type === "contact";
    }
    ((l.shouldEnableGroupMentions = y), (l.MentionSuggestions = C));
  },
  226,
);
