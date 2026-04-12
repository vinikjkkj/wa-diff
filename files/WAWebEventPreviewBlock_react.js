__d(
  "WAWebEventPreviewBlock.react",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebEventDateBlock.react",
    "WAWebEventsGatingUtils",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebTag.react",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "stylex",
    "useWAWebEventMyRSVPStatus",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        eventPreviewBlock: { display: "x1rg5ohu", $$css: !0 },
        container: {
          boxSizing: "x9f619",
          height: "xlo07zb",
          width: "xtlo18s",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          fontSize: "x1f6kntn",
          fontWeight: "x1iikomf",
          $$css: !0,
        },
        containerFullWidth: { width: "xh8yej3", $$css: !0 },
        eventDetailColumn: { textAlign: "x1yc453h", $$css: !0 },
        eventNameContainer: { maxWidth: "x193iq5w", $$css: !0 },
        eventDetailText: {
          display: "x1rg5ohu",
          maxWidth: "x193iq5w",
          color: "xhslqc4",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        eventNameText: {
          fontWeight: "x1s688f",
          fontSize: "x1jchvi3",
          $$css: !0,
        },
        tag: { alignSelf: "xamitd3", $$css: !0 },
      };
    function m(t) {
      var n,
        a,
        i = t.eventMsg,
        l = t.fullWidth,
        u = l === void 0 ? !1 : l,
        m = t.onClick,
        p = o("useWAWebMsgValues").useMsgValues(i.id, [
          o("WAWebMsgGetters").getEventName,
          o("WAWebMsgGetters").getEventStartTime,
          o("WAWebMsgGetters").getEventEndTime,
          o("WAWebMsgGetters").getEventLocation,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C = o("useWAWebEventMyRSVPStatus").useEventMyRSVPStatus(i),
        b =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollQuestionTextSize,
        v = _.slice(
          0,
          (n = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null
            ? n
            : 100,
        ),
        S = c.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: [d.eventNameContainer, o("WAWebUISpacing").uiPadding.vert2],
          grow: 0,
          children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: v,
            dirMismatch:
              o("WAWebFrontendMsgGetters").getRtl(i) !== r("WAWebL10N").isRTL(),
            direction: o("WAWebFrontendMsgGetters").getDir(i),
            inferLinesDirection: !0,
            selectable: !0,
            xstyle: [d.eventNameText, b],
            ellipsify: !0,
          }),
        }),
        R = o("WAWebFormatEventDateString").getEventDateStringFor(f, g),
        L =
          f != null
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    d.eventDetailText,
                    o("WAWebUISpacing").uiMargin.vert1,
                  ]),
                  {
                    children: s._(/*BTDS*/ "{Event-starttime-string}", [
                      s._param("Event-starttime-string", R),
                    ]),
                  },
                ),
              )
            : null,
        E,
        k =
          (a = h == null ? void 0 : h.name) != null
            ? a
            : h == null
              ? void 0
              : h.address;
      k != null &&
        (E = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              d.eventDetailText,
              o("WAWebUISpacing").uiMargin.vert1,
            ]),
            {
              children: s._(/*BTDS*/ "{event-location}", [
                s._param("event-location", k),
              ]),
            },
          ),
        ));
      var I = null;
      return (
        y
          ? (I = c.jsx(o("WAWebTag.react").Tag, {
              theme: o("WAWebTag.react").TagTheme.Primary,
              xstyle: [d.tag, o("WAWebUISpacing").uiMargin.startAuto],
              testid: void 0,
              children: s._(/*BTDS*/ "Creator"),
            }))
          : C ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING
            ? (I = c.jsx(o("WAWebTag.react").Tag, {
                theme: o("WAWebTag.react").TagTheme.Primary,
                xstyle: [d.tag, o("WAWebUISpacing").uiMargin.startAuto],
                testid: void 0,
                children: s._(/*BTDS*/ "Going"),
              }))
            : C ===
                o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.MAYBE &&
              (I = c.jsx(o("WAWebTag.react").Tag, {
                theme: o("WAWebTag.react").TagTheme.Secondary,
                xstyle: [d.tag, o("WAWebUISpacing").uiMargin.startAuto],
                testid: void 0,
                children: s._(/*BTDS*/ "Maybe"),
              })),
        c.jsx(r("WAWebUnstyledButton.react"), {
          xstyle: [d.eventPreviewBlock].concat(
            u
              ? [d.containerFullWidth]
              : [
                  o("WAWebUISpacing").uiMargin.all2,
                  o("WAWebUISpacing").uiMargin.end12,
                ],
          ),
          onClick: m,
          tabIndex: 0,
          children: c.jsxs(o("WAWebFlex.react").FlexContainer, {
            xstyle: [d.container].concat(u ? [d.containerFullWidth] : []),
            direction: "horizontal",
            padding: 12,
            children: [
              c.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                padding: 2,
                shrink: 0,
                children: c.jsx(r("WAWebEventDateBlock.react"), {
                  eventStartTime: f,
                }),
              }),
              c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: [
                  d.eventDetailColumn,
                  o("WAWebUISpacing").uiPadding.start8,
                ],
                padding: 2,
                children: [S, L, E],
              }),
              I,
            ],
          }),
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
