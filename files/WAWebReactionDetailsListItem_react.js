__d(
  "WAWebReactionDetailsListItem.react",
  [
    "fbt",
    "WALogger",
    "WAWebBusinessProfileTypes",
    "WAWebCellFrame.react",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatParticipantColor",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebReactionCellDetailThumb.react",
    "WAWebReactionEmoji.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "WAWebUnstyledButton.react",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebChatValues",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebModelValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useRef,
      f = m.useState,
      g = {
        tilded: { "::before_content": "xxayilr", $$css: !0 },
        reactionAndMediaThumbContainer: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          marginInlineEnd: "xf6vk7d",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.isAggregated,
        a = n === void 0 ? !1 : n,
        i = t.onCloseDetailsPane,
        l = t.onItemBlur,
        c = t.onItemFocus,
        m = t.parentMsg,
        h = t.reaction,
        y = t.ref,
        C = _(null),
        b = f(!1),
        v = b[0],
        S = b[1],
        R = function () {
          (r("WAWebFocusTracer").focus(C.current), S(!0));
        },
        L = h.reactionText,
        E = h.senderObj,
        k = o("WAWebFrontendMsgGetters").getChat(m),
        I = o("useWAWebChatValues").useChatValues(k.id, [
          o("WAWebFrontendChatGetters").getGroupMetadata,
          o("WAWebChatGetters").getIsGroup,
        ]),
        T = I[0],
        D = I[1],
        x = !o("WAWebReactionsUtils").isReactionsEnabledInCAG(k),
        $ = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_reactions_2",
        );
      p(y, function () {
        return { focus: R };
      });
      var P = o("useWAWebModelValues").useModelValues(E, ["id", "phoneNumber"]),
        N = E;
      if (P.id.isLid() && P.phoneNumber) {
        var M = o("WAWebContactCollection").ContactCollection.get(
          P.phoneNumber,
        );
        M && (N = M);
      }
      var w = o("useWAWebContactValues").useContactValues(N.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          o("WAWebContactGetters").getName,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebFrontendContactGetters").getIsNonVerified,
          o("WAWebContactGetters").getIsBusiness,
          o("WAWebContactGetters").getVerifiedLevel,
        ]),
        A = w[0],
        F = w[1],
        O = w[2],
        B = w[3],
        W = w[4],
        q = w[5],
        U = w[6],
        V = w[7],
        H = o("WAWebChatParticipantColor").getAssignedColor(k, N.id),
        G = r("useWAWebContactFormattedUsernameOrPhoneByChat")(k, E),
        z = G.formattedUsernameOrPhone,
        j = r("useWAWebUIM")(),
        K = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            F &&
              (o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionUnselect(),
              o("WAWebSendReactionMsgAction")
                .sendReactionToMsg(
                  m,
                  o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT,
                )
                .then($ ? r("WAWebNoop") : i)
                .catch(function (e) {
                  j && j.requestDismiss();
                })));
        },
        Q = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(k),
        X = z != null && !q,
        Y;
      o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(N) && (Q || X)
        ? (Y = z)
        : (Y = W != null ? "~" + W : null);
      var J = null;
      !O &&
        !r("isStringNullOrEmpty")(W) &&
        (J = d.jsx(o("WAWebEmojiText.react").EmojiText, {
          className: (u || (u = r("stylex")))(!Q && !g.tilded),
          direction: "auto",
          text: Y,
        }));
      var Z =
          o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(N) && Q
            ? o("WAWebChatContactUtils").getAccessibleNotifyName(W).toString()
            : B,
        ee = o("WAWebReactionsUtils").reactionBubbleAriaLabelOneReaction(Z, L);
      F &&
        (ee = ee.toString() + " " + s._(/*BTDS*/ "Click to remove").toString());
      var te = a && o("WAWebMsgGetters").getIsMedia(m),
        ne = te
          ? d.jsx(r("WAWebFlexItem.react"), {
              xstyle: g.reactionAndMediaThumbContainer,
              testid: void 0,
              children: d.jsx(
                o("WAWebReactionCellDetailThumb.react").ReactionCellDetailThumb,
                { msg: m, reactionText: L, onCloseDetailsPane: i },
              ),
            })
          : null,
        re = x
          ? function (t) {
              if ((t.preventDefault(), t.stopPropagation(), !F)) {
                i();
                var n = A;
                (m.from.isGroup() &&
                  (n = o(
                    "WAWebChatGroupUtils",
                  ).getOneToOneContactFromGroupContact(A, "info_panel")),
                  n != null &&
                    o("WAWebFindChatAction")
                      .findOrCreateLatestChat(n, "reactionDetailsPane")
                      .then(function (e) {
                        var t = e.chat;
                        (o("WAWebCmd").Cmd.chatInfoDrawer(t),
                          o(
                            "WAWebReactionUserJourneyLogger",
                          ).ReactionUserJourneyLogger.selectProfile());
                      })
                      .catch(function () {
                        return o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[reactions details] failed to find or create latest chat",
                              ])),
                          )
                          .sendLogs(
                            "reactions-failed-to-find-or-create-latest-chat",
                          );
                      }));
              }
            }
          : null,
        oe;
      o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(N) &&
      (Q ||
        (X && (!U || V === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)))
        ? (oe = o("WAWebChatContactUtils").getFormattedNotifyName(W))
        : (oe = B);
      var ae = F
          ? B
          : d.jsx(r("WAWebUnstyledButton.react"), {
              disabled: !x,
              onClick: re,
              title: s._(/*BTDS*/ "Contact info"),
              "aria-label": s._(/*BTDS*/ "Click to open profile details"),
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: oe,
              }),
            }),
        ie = d.jsx(r("WAWebUnstyledButton.react"), {
          onClick: K,
          children: s._(/*BTDS*/ "Click to remove"),
        }),
        le = function () {
          (S(!1), l == null || l());
        },
        se = function () {
          (F && S(!0), c == null || c());
        },
        ue = { enter: K, space: K };
      return d.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
        children: d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          role: F ? "button" : "listitem",
          "aria-label": ee,
          handlers: F ? ue : {},
          ref: C,
          onBlur: le,
          onFocus: se,
          children: d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: d.jsx(r("WAWebFlexItem.react"), {
              grow: 2,
              children: d.jsx(r("WAWebCellFrame.react"), {
                idle: F ? !1 : !v,
                testid: void 0,
                image: d.jsx(o("WAWebDetailImage.react").DetailImage, {
                  onClick: re,
                  id: A,
                  size: 40,
                  loadAnimation: !1,
                  theme: "reaction_details",
                  authorColor: H,
                }),
                primary: ae,
                onClick: K,
                secondary: F ? ie : J,
                detail: te
                  ? ne
                  : d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                      scale: "list",
                      size: "large",
                      reaction: L,
                    }),
                theme: F ? "reaction-by-me" : "reaction-by-others",
                active: v,
              }),
            }),
          }),
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
