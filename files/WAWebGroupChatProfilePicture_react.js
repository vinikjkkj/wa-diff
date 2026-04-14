__d(
  "WAWebGroupChatProfilePicture.react",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebChatParticipantColor",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFindChatAction",
    "WAWebMessageUiUtils",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebStylexVars.stylex",
    "WDSVars.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = {
        height: "x16ye13r",
        position: "x10l6tqk",
        insetInlineStart: "x1wnpwf8",
        left: "",
        right: "",
        zIndex: "x1vjfegm",
        $$css: !0,
      },
      p = {
        groupProfilePictureSticky: function (t) {
          return [
            m,
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(
                t.lastMessageHasReaction
                  ? "calc(100% - " +
                      o("WAWebStylexVars.stylex").reactionBubbleVariables
                        .height +
                      " - " +
                      o("WDSVars.stylex").WDSVars.spacingSinglePlus +
                      ")"
                  : "calc(100% - " +
                      o("WDSVars.stylex").WDSVars.spacingSinglePlus +
                      ")",
              ),
            },
          ];
        },
        metaAiBotBackground: { backgroundColor: "x1ew7x2d", $$css: !0 },
      };
    function _(e) {
      var t,
        n = e.chatWid,
        a = e.disableClick,
        i = a === void 0 ? !1 : a,
        l = e.lastMessageHasReaction,
        u = l === void 0 ? !1 : l,
        m = e.sticky,
        _ = m === void 0 ? !1 : m,
        g = e.usePicInBubbleLayout,
        h = g === void 0 ? !1 : g,
        y = e.userContact,
        C = o("WAWebChatCollection").ChatCollection.get(n),
        b =
          o("WAWebBotUtils").isMetaAiBot(y.id) ||
          o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(y.id),
        v = C
          ? o("WAWebChatParticipantColor").getAssignedColor(
              C,
              y.id,
              "WAWebGroupChatProfilePicture-" +
                ((t = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                  C.id,
                )) != null
                  ? t
                  : ""),
            )
          : 1,
        S = function (t) {
          var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
            y.id,
            "handle_click_group_chat_profile_picture",
          );
          e != null &&
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(e, "groupChatProfilePicture")
              .then(function (e) {
                var t = e.chat;
                t != null &&
                  o("WAWebCmd").Cmd.chatInfoDrawer(
                    t,
                    C != null ? { sourceGroupChatOrNewsletter: C } : void 0,
                  );
              });
        },
        R = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(C),
        L = o("WAWebMessageUiUtils").getAuthorName(y.id, y, R),
        E = s._(/*BTDS*/ "Open chat details for {author-name}", [
          s._param("author-name", L),
        ]),
        k = d(null);
      return c.jsx(f, {
        lastMessageHasReaction: u,
        sticky: _,
        children: c.jsx(r("WAWebPrivacyBlurWrapper.react"), {
          containerRef: k,
          children: c.jsx("div", {
            ref: k,
            children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
              testId: "group-chat-profile-picture",
              id: y.id,
              size: o("WAWebDetailImage.react").DetailImageSize.None,
              theme: h
                ? "group_profile_picture_in_bubble"
                : "group_profile_picture",
              loadAnimation: !1,
              onClick: i ? null : S,
              authorColor: v,
              tabIndex: 0,
              ariaLabel: E,
              groupProfilePictureSticky: _,
              xstyle: b && p.metaAiBotBackground,
            }),
          }),
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n = t.children,
        o = t.lastMessageHasReaction,
        a = t.sticky;
      return a
        ? c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                p.groupProfilePictureSticky({ lastMessageHasReaction: o }),
              ),
              { children: n },
            ),
          )
        : n;
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
