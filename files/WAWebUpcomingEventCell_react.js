__d(
  "WAWebUpcomingEventCell.react",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiParse",
    "WAWebBoolFunc",
    "WAWebCallLogEntryChatImage.react",
    "WAWebChatCell.react",
    "WAWebEmojiText.react",
    "WAWebEventResponseCollection",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSButton.react",
    "WDSFontTokenStyles",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "cr:17104",
    "cr:9382",
    "react",
    "useWAWebActiveSelection",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = (e = n("cr:17104")) != null ? e : {},
      _ = p.handleClickCallLink;
    function f(e) {
      var t,
        a,
        i,
        l = e.eventMessage,
        d = e.lobbyEntryPointType,
        p = e.onClick,
        f = r("useWAWebActiveSelection")(e.active, l.id.toString()),
        g = f[0],
        h = f[1],
        y = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        C = o("WAWebFrontendMsgGetters").getChat(l),
        b = o("useWAWebMsgValues").useMsgValues(l.id, [
          (i = o("WAWebMsgGetters")).getId,
          i.getEventName,
          i.getEventStartTime,
          i.getEventEndTime,
          i.getEventJoinLink,
          i.getEventIsScheduledCall,
        ]),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = b[4],
        k = b[5],
        I = o("WAWebFormatEventDateString").getEventDateStringFor(R, L),
        T = function (t) {
          try {
            var e,
              n = o(
                "WAWebEventResponseCollection",
              ).EventResponseCollection.getModelsArray(),
              r = n.filter(function (e) {
                var n;
                return (n = e.parentMsgKey) == null ? void 0 : n.equals(t.id);
              }),
              a = r.find(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
              });
            return (e = a == null ? void 0 : a.eventResponse) != null
              ? e
              : o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.UNKNOWN;
          } catch (e) {
            return o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.UNKNOWN;
          }
        },
        D = function () {
          var e = o("WAWebMsgGetters").getIsSentByMe(l);
          if (e)
            return {
              text: s._(/*BTDS*/ "Creator"),
              theme: o("WAWebTag.react").TagTheme.Primary,
            };
          var t = T(l);
          return t ===
            o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.GOING
            ? {
                text: s._(/*BTDS*/ "Going"),
                theme: o("WAWebTag.react").TagTheme.Primary,
              }
            : t ===
                o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.MAYBE
              ? {
                  text: s._(/*BTDS*/ "Maybe"),
                  theme: o("WAWebTag.react").TagTheme.Secondary,
                }
              : t ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$EventResponseMessage$EventResponseType.NOT_GOING
                ? {
                    text: s._(/*BTDS*/ "Not going"),
                    theme: o("WAWebTag.react").TagTheme.Error,
                  }
                : {
                    text: s._(/*BTDS*/ "Not responded"),
                    theme: o("WAWebTag.react").TagTheme.Secondary,
                  };
        },
        x = o("WATimeUtils").unixTime(),
        $ =
          (t = o("WAWebABProps").getABPropConfigValue(
            "schedule_call_show_join_button_time_interval_mins",
          )) != null
            ? t
            : 15,
        P = R != null && x >= R - $ * 60,
        N = L != null && x > L,
        M = T(l),
        w =
          M ===
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.NOT_GOING,
        A = P && !N && !w && (E != null || k),
        F = function (t) {
          if ((t.stopPropagation(), t.preventDefault(), !!A && E != null))
            try {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "UpcomingEventCell: handleJoinEvent: joining call link ",
                    "",
                  ])),
                E,
              );
              var e = o("WAWebApiParse").parseAPICmd(E);
              if (e.resultType === "CALL_LINK") {
                var r = _;
                (r == null &&
                  n("cr:9382") != null &&
                  o("WAWebVoipGatingUtils").callLinksEnabled() &&
                  (r = n("cr:9382").handleClickCallLink),
                  r == null ||
                    r(
                      e,
                      d != null
                        ? d
                        : o("WAWebWamEnumLobbyEntryPointType")
                            .LOBBY_ENTRY_POINT_TYPE.UPCOMING_SCHEDULE_CALL,
                    ));
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: UpcomingEventCell: Failed to join event via call link",
                    ])),
                )
                .sendLogs("voip-upcoming-event-cell-join-call-link-error");
            }
        },
        O = m.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: S,
          direction: "auto",
          ellipsify: !0,
          xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized,
        }),
        B = D(),
        W = m.jsxs(o("WAWebFlex.react").FlexColumn, {
          rowGap: 4,
          children: [
            m.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: C.formattedTitle,
                direction: "auto",
                ellipsify: !0,
              }),
            }),
            m.jsx(o("WAWebText.react").WAWebTextSmall, { children: I }),
          ],
        }),
        q = (a = E == null ? void 0 : E.includes("/video/")) != null ? a : !1,
        U = A
          ? m.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Join"),
              Icon: r(
                q
                  ? "WDSIconIcVideocamFilled.react"
                  : "WDSIconIcCallFilled.react",
              ),
              variant: "filled",
              onPress: F,
            })
          : m.jsx(o("WAWebTag.react").Tag, {
              theme: B.theme,
              testid: void 0,
              children: B.text,
            });
      return m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { enter: p, space: p },
        onFocus: y,
        ref: g,
        children: m.jsx(r("WAWebChatCell.react"), {
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          active: h,
          image: m.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: l }),
          primary: O,
          secondary: W,
          detail: U,
          onClick: p,
          testid: void 0,
          className: "xdmi676 x1qafhyn x16ovd2e x12xbjc7",
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
