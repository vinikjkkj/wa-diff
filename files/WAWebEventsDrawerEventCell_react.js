__d(
  "WAWebEventsDrawerEventCell.react",
  [
    "fbt",
    "WAWebCastToEventCreationMsg",
    "WAWebCellV2.react",
    "WAWebEmojiText.react",
    "WAWebEventDateBlock.react",
    "WAWebEventsGatingUtils",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebEventResponses",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        eventDetailText: {
          display: "x1rg5ohu",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        statusTag: { fontSize: "x1nxh6w3", $$css: !0 },
      };
    function d(e) {
      var t,
        n,
        a = e.chat,
        i = e.msg,
        l = e.onClick,
        d = e.passed,
        m = d === void 0 ? !1 : d,
        p = o("useWAWebMsgValues").useMsgValues(
          i.id,
          r("WAWebCastToEventCreationMsg"),
          [
            o("WAWebMsgGetters").getEventName,
            o("WAWebMsgGetters").getEventStartTime,
            o("WAWebMsgGetters").getEventEndTime,
            o("WAWebMsgGetters").getEventLocation,
            o("WAWebMsgGetters").getIsEventCanceled,
            o("WAWebMsgGetters").getIsSentByMe,
          ],
        ),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C = p[5],
        b = o("useWAWebEventResponses").useEventResponses(i),
        v = b.find(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
        }),
        S = u.jsx("div", {
          className: "x2b8uid xamitd3",
          children: u.jsx(r("WAWebEventDateBlock.react"), {
            eventStartTime: f,
            passed: m,
          }),
        }),
        R = _.slice(
          0,
          (t = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null
            ? t
            : 100,
        ),
        L = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          xstyle: c.eventDetailText,
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: R,
            dirMismatch:
              o("WAWebFrontendMsgGetters").getRtl(i) !== r("WAWebL10N").isRTL(),
            direction: o("WAWebFrontendMsgGetters").getDir(i),
            inferLinesDirection: !0,
            selectable: !0,
            ellipsify: !0,
          }),
        }),
        E = null,
        k = null;
      y === !0
        ? ((E = s._(/*BTDS*/ "Canceled")),
          (k = o("WAWebTag.react").TagTheme.Secondary))
        : C
          ? ((E = s._(/*BTDS*/ "Creator")),
            (k = o("WAWebTag.react").TagTheme.Primary))
          : (v == null ? void 0 : v.eventResponse) ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING
            ? ((E = s._(/*BTDS*/ "Going")),
              (k = o("WAWebTag.react").TagTheme.Primary))
            : (v == null ? void 0 : v.eventResponse) ===
                o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.MAYBE
              ? ((E = s._(/*BTDS*/ "Maybe")),
                (k = o("WAWebTag.react").TagTheme.Secondary))
              : (v == null ? void 0 : v.eventResponse) ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$EventResponseMessage$EventResponseType.NOT_GOING
                ? ((E = s._(/*BTDS*/ "Not going")),
                  (k = o("WAWebTag.react").TagTheme.Error))
                : ((v == null ? void 0 : v.eventResponse) == null ||
                    (v == null ? void 0 : v.eventResponse) ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$EventResponseMessage$EventResponseType
                        .UNKNOWN) &&
                  ((E = s._(/*BTDS*/ "Not responded")),
                  (k = o("WAWebTag.react").TagTheme.Secondary));
      var I =
          E && k
            ? u.jsx(o("WAWebTag.react").Tag, {
                theme: k,
                testid: void 0,
                xstyle: [
                  c.statusTag,
                  o("WAWebUISpacing").uiPadding.vert4,
                  o("WAWebUISpacing").uiPadding.horiz8,
                ],
                children: s._(/*BTDS*/ "{eventStatusText}", [
                  s._param("eventStatusText", E),
                ]),
              })
            : null,
        T = o("WAWebFormatEventDateString").getEventDateStringFor(f, g),
        D =
          f != null
            ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: c.eventDetailText,
                children: s._(/*BTDS*/ "{Event-datetime-string}", [
                  s._param("Event-datetime-string", T),
                ]),
              })
            : null,
        x =
          (n = h == null ? void 0 : h.name) != null
            ? n
            : h == null
              ? void 0
              : h.address,
        $ =
          x != null
            ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: c.eventDetailText,
                children: s._(/*BTDS*/ "{event-location}", [
                  s._param("event-location", x),
                ]),
              })
            : null;
      return u.jsx(r("WAWebCellV2.react"), {
        containerXStyle: [
          o("WAWebUISpacing").uiMargin.vert6,
          o("WAWebUISpacing").uiMargin.horiz4,
        ],
        detailLeft: S,
        detailTop: L,
        primary: D,
        detailRight: I,
        secondary: $,
        alignPrimary: "start",
        size: "medium",
        onClick: function () {
          return l(i, a);
        },
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
