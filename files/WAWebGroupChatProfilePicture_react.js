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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        n = e.chatWid,
        a = e.disableClick,
        i = e.lastMessageHasReaction,
        l = e.sticky,
        u = e.usePicInBubbleLayout,
        m = e.userContact,
        _ = a === void 0 ? !1 : a,
        g = i === void 0 ? !1 : i,
        h = l === void 0 ? !1 : l,
        y = u === void 0 ? !1 : u,
        C,
        b,
        v,
        S;
      if (t[0] !== n || t[1] !== m) {
        var R,
          L = o("WAWebChatCollection").ChatCollection.get(n),
          E;
        (t[6] !== m.id
          ? ((E =
              o("WAWebBotUtils").isMetaAiBot(m.id) ||
              o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(m.id)),
            (t[6] = m.id),
            (t[7] = E))
          : (E = t[7]),
          (v = E),
          (C = L
            ? o("WAWebChatParticipantColor").getAssignedColor(
                L,
                m.id,
                "WAWebGroupChatProfilePicture-" +
                  ((R = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                    L.id,
                  )) != null
                    ? R
                    : ""),
              )
            : 1),
          (b = function (t) {
            var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
              m.id,
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
                      L != null ? { sourceGroupChatOrNewsletter: L } : void 0,
                    );
                });
          }));
        var k = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(L);
        ((S = o("WAWebMessageUiUtils").getAuthorName(m.id, m, k)),
          (t[0] = n),
          (t[1] = m),
          (t[2] = C),
          (t[3] = b),
          (t[4] = v),
          (t[5] = S));
      } else ((C = t[2]), (b = t[3]), (v = t[4]), (S = t[5]));
      var I = S,
        T;
      t[8] !== I
        ? ((T = s._(/*BTDS*/ "Open chat details for {author-name}", [
            s._param("author-name", I),
          ])),
          (t[8] = I),
          (t[9] = T))
        : (T = t[9]);
      var D = T,
        x = d(null),
        $ = y ? "group_profile_picture_in_bubble" : "group_profile_picture",
        P = _ ? null : b,
        N = v && p.metaAiBotBackground,
        M;
      t[10] !== D ||
      t[11] !== C ||
      t[12] !== h ||
      t[13] !== $ ||
      t[14] !== P ||
      t[15] !== N ||
      t[16] !== m.id
        ? ((M = c.jsx(r("WAWebPrivacyBlurWrapper.react"), {
            containerRef: x,
            children: c.jsx("div", {
              ref: x,
              children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                testId: "group-chat-profile-picture",
                id: m.id,
                size: o("WAWebDetailImage.react").DetailImageSize.None,
                theme: $,
                loadAnimation: !1,
                onClick: P,
                authorColor: C,
                tabIndex: 0,
                ariaLabel: D,
                groupProfilePictureSticky: h,
                xstyle: N,
              }),
            }),
          })),
          (t[10] = D),
          (t[11] = C),
          (t[12] = h),
          (t[13] = $),
          (t[14] = P),
          (t[15] = N),
          (t[16] = m.id),
          (t[17] = M))
        : (M = t[17]);
      var w;
      return (
        t[18] !== g || t[19] !== h || t[20] !== M
          ? ((w = c.jsx(f, {
              lastMessageHasReaction: g,
              sticky: h,
              children: M,
            })),
            (t[18] = g),
            (t[19] = h),
            (t[20] = M),
            (t[21] = w))
          : (w = t[21]),
        w
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.children,
        i = t.lastMessageHasReaction,
        l = t.sticky,
        s;
      return (
        n[0] !== a || n[1] !== i || n[2] !== l
          ? ((s = l
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      p.groupProfilePictureSticky({
                        lastMessageHasReaction: i,
                      }),
                    ),
                    { children: a },
                  ),
                )
              : a),
            (n[0] = a),
            (n[1] = i),
            (n[2] = l),
            (n[3] = s))
          : (s = n[3]),
        s
      );
    }
    l.default = _;
  },
  226,
);
