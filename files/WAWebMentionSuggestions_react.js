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
      var n = t.botInvokeEnabled,
        a = n === void 0 ? !1 : n,
        i = t.chat,
        l = t.editor,
        u = t.elevatedPushNamesEnabled,
        C = t.groupMetadata,
        b = t.kind,
        v = h(C, a),
        S = y(C),
        R = o("useWAWebLexicalTypeAhead").useTypeAhead(
          l,
          o("WAWebRichTextInputConst").AT_SYMBOL,
          { enabled: v || S, maxQueryLength: f, boundary: !0 },
        ),
        L = R.omitQuery,
        E = R.query,
        k = R.replaceQuery,
        I = function (t) {
          k(
            function () {
              return new (o("Lexical").TextNode)(
                o("WAWebMentionSuggestionsUtils").formatMention(t),
              );
            },
            { trailingSpace: !0 },
          );
        },
        T = function (t) {
          D(t) &&
            (o(
              "WAWebLimitSharingUIUtils",
            ).isLimitSharingReceiverEnabledForUsers(i, [t.id])
              ? o(
                  "WAWebLimitSharingUIUtils",
                ).showLimitSharingInvokeBlockedPopup(i)
              : I(t.id));
        },
        D = function (t) {
          return t.type === "group" || t.type === "contact";
        },
        x = function (t) {
          D(t) &&
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
                    T(t);
                  })
                  .catch(r("WAWebNoop"))
              : T(t));
        },
        $ = function (n, a) {
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
        },
        P = d(
          function () {
            var e = o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled()
              ? _
              : p;
            if (E == null || (C == null && !a)) return null;
            var t = l.getEditorState().read(function () {
              var e = o("WAWebLexicalUtils").$getRangeSelection();
              if (!e) return !1;
              var t = e.anchor.getNode();
              return t instanceof o("WAWebMentionNode").MentionNode;
            });
            if (t) return null;
            var n = [],
              r = v && S;
            if (v) {
              var i = o("WAWebMentionsPluginUtil").getUserResults(E, C, a);
              if (i.length !== 0) {
                r &&
                  n.push({
                    index: n.length,
                    itemKey: "section-contacts",
                    type: "contact_header",
                    selectable: !1,
                    height: m,
                  });
                var s = i.map(function (t, r) {
                  return {
                    type: "contact",
                    selectable: !0,
                    contact: t,
                    id: t.id,
                    height: e,
                    itemKey: t.id.toString(),
                    contentKey: E,
                    index: r + n.length,
                    query: E,
                  };
                });
                n.push.apply(n, s);
              }
            }
            if (S && C != null) {
              var u = o("WAWebMentionsPluginUtil").getSubgroupResults(E, C);
              if (u.length !== 0) {
                r &&
                  n.push({
                    index: n.length,
                    itemKey: "section-groups",
                    type: "group_header",
                    selectable: !1,
                    height: m,
                  });
                var c = u.map(function (t, r) {
                  return {
                    type: "group",
                    selectable: !0,
                    groupMetadata: t,
                    id: t.id,
                    height: e,
                    itemKey: t.id.toString(),
                    contentKey: E,
                    index: r + n.length,
                    query: E,
                  };
                });
                n.push.apply(n, c);
              }
            }
            return n.length ? n : null;
          },
          [E, C, l, v, S, a],
        );
      return c.jsx(r("WAWebListSuggestionsPanel.react"), {
        kind: b,
        editor: l,
        items: P,
        renderItem: $,
        onSelect: x,
        onDismiss: L,
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.shouldEnableGroupMentions = y),
      (l.MentionSuggestions = C));
  },
  226,
);
