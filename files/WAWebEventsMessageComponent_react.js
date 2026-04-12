__d(
  "WAWebEventsMessageComponent.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebApiParse",
    "WAWebCastToEventCreationMsg",
    "WAWebChatGetters",
    "WAWebChevronCustomIcons",
    "WAWebContactCollection",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEventInfoFlowLoadable",
    "WAWebEventUtils",
    "WAWebEventsCreateEventModalFlow.react",
    "WAWebEventsGatingUtils",
    "WAWebEventsRSVPPopup.react",
    "WAWebExpandableText.react",
    "WAWebFacePile.react",
    "WAWebFbtIntlList",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebSendEventResponseMsgAction",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWarningIcon.react",
    "WDSIconIcCalendarMonth.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "stylex",
    "useWAWebEventResponses",
    "useWAWebMsgValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.createRef,
      m = {
        unstyledButton: { width: "xh8yej3", textAlign: "x1yc453h", $$css: !0 },
        deepContainer: {
          cursor: "xmper1u",
          width: "x10rsq8x",
          position: "x1n2onr6",
          display: "x78zum5",
          $$css: !0,
        },
        icon: { color: "x1v5yvga", $$css: !0 },
        iconDisabled: { color: "xpteuj8", $$css: !0 },
        iconContainer: {
          width: "x14qfxbe",
          height: "xc9qbxq",
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        eventNameText: {
          fontWeight: "x1s688f",
          fontSize: "x1jchvi3",
          $$css: !0,
        },
        eventDetailText: { color: "xhslqc4", $$css: !0 },
        facepileBorderIncoming: {
          borderTopColor: "x1dla3ec",
          borderInlineEndColor: "x1b76cva",
          borderBottomColor: "xoht4n3",
          borderInlineStartColor: "xd1k3aj",
          $$css: !0,
        },
        facepileBorderOutgoing: {
          borderTopColor: "x1dla3ec",
          borderInlineEndColor: "x1b76cva",
          borderBottomColor: "xoht4n3",
          borderInlineStartColor: "xd1k3aj",
          $$css: !0,
        },
        invalidEventWarning: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        invalidEventWarningBorderReceiver: {
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        invalidEventWarningBorderSender: {
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        outOfDate: { fontSize: "x1pg5gke", lineHeight: "x1d3mw78", $$css: !0 },
        warningIcon: { color: "x1kt8ij1", $$css: !0 },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        flex: { display: "x78zum5", $$css: !0 },
      };
    function p(e) {
      if (e != null && e.includes("/video/"))
        return s._(/*BTDS*/ "WhatsApp video call");
      if (e != null && e.includes("/voice/"))
        return s._(/*BTDS*/ "WhatsApp voice call");
    }
    function _(e) {
      var t = e.eventResponse,
        n = e.isEventCanceled,
        r = e.isSentByMe,
        a = e.showJoinCall,
        i;
      return (
        n
          ? (i = s._(/*BTDS*/ "Event canceled"))
          : a
            ? (i = s._(/*BTDS*/ "Join call"))
            : r
              ? (i = s._(/*BTDS*/ "Edit event"))
              : t ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$EventResponseMessage$EventResponseType.GOING
                ? (i = s._(/*BTDS*/ "Going"))
                : t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventResponseMessage$EventResponseType.MAYBE
                  ? (i = s._(/*BTDS*/ "Maybe"))
                  : t ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$EventResponseMessage$EventResponseType
                        .NOT_GOING
                    ? (i = s._(/*BTDS*/ "Not going"))
                    : (i = s._(/*BTDS*/ "Respond")),
        i
      );
    }
    function f(e, t) {
      var n = e.eventDescription,
        a = e.eventEndTime,
        i = e.eventLocation,
        l = e.eventName,
        u = e.eventStartTime,
        c;
      if (
        (i == null ? void 0 : i.name) != null ||
        (i == null ? void 0 : i.address) != null
      ) {
        var d;
        c = (d = i.name) != null ? d : i.address;
      }
      var m = r("WAWebFbtIntlList")(
          r("compactMap")(t, function (e) {
            var t = o("WAWebContactCollection").ContactCollection.get(e.sender);
            if (t != null)
              return o("WAWebFrontendContactGetters").getFormattedName(t);
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ),
        p;
      t.length > 0 &&
        (p = s._(
          /*BTDS*/ '_j{"*":"{number} attendees {event-attendees-names-readout}","_1":"1 attendee {event-attendees-names-readout}"}',
          [
            s._plural(t.length, "number"),
            s._param("event-attendees-names-readout", m),
          ],
        ));
      var _ = o("WAWebFormatEventDateString").getEventDateStringFor(u, a);
      return s._(
        /*BTDS*/ "Event: {event-name} Description: {event-description}{event-time}. {event-location}{event-attendees}",
        [
          s._param("event-name", l),
          s._param("event-description", n != null ? n + "." : ""),
          s._param("event-time", _),
          s._param("event-location", c != null ? c + "." : ""),
          s._param("event-attendees", p),
        ],
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var a,
        i,
        l,
        u,
        g = t.chat,
        h = t.msg,
        y = t.quotedMsg,
        C = o("useWAWebMsgValues").useMsgValues(
          h.id,
          r("WAWebCastToEventCreationMsg"),
          [
            (u = o("WAWebMsgGetters")).getEventName,
            u.getEventStartTime,
            u.getEventEndTime,
            u.getEventLocation,
            u.getEventJoinLink,
            u.getEventInvalidated,
            u.getIsEventCanceled,
            u.getEventIsScheduledCall,
            u.getIsSentByMe,
          ],
        ),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = C[4],
        E = C[5],
        k = C[6],
        I = C[7],
        T = C[8],
        D = r("useWAWebUIM")(),
        x = o("useWAWebEventResponses").useEventResponses(h),
        $ =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollQuestionTextSize,
        P = b.slice(
          0,
          (a = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null
            ? a
            : 100,
        ),
        N = o("WAWebEventUtils").shouldShowEventAsPassed(v, S),
        M = k || N,
        w = c.jsx(r("WDSIconIcCalendarMonth.react"), {
          xstyle: E || M ? m.iconDisabled : m.icon,
        }),
        A = d();
      if (b == null) return null;
      function F() {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "event_info", chat: g, msg: h }
            : c.jsx(
                o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
                {
                  chat: g,
                  msg: h,
                  onEnd: o("WAWebDrawerManager").closeDrawerRight,
                },
                "event-info-drawer-" + h.id.toString(),
              ),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE, uim: D },
        );
      }
      function O(e) {
        return B.apply(this, arguments);
      }
      function B() {
        return (
          (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (Y) {
              if (L != null) {
                var t = o("WAWebApiParse").parseCallLink(L);
                if (t != null) {
                  var n = t.data,
                    a = n.callType,
                    i = n.token,
                    l = a === "video",
                    s = o("WAWebChatGetters").getIsGroup(g),
                    u = s
                      ? o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.EVENT_GROUP_CHAT
                      : o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.EVENT_INDIVIDUAL_CHAT,
                    d = o("WAWebFrontendContactGetters").getMyUsername(),
                    m = yield o(
                      "WAWebVoipStackInterface",
                    ).getVoipStackInterface();
                  yield m == null ? void 0 : m.previewCallLink(i, l, u, d);
                }
              }
            } else if (T) {
              var p;
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
                  preselectedChat: g,
                  prefilledData: {
                    eventName: b,
                    eventDescription: h.eventDescription,
                    eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(v),
                    eventEndTime:
                      S != null
                        ? o("WAWebEventUtils").eventTimeToUnixTime(S)
                        : void 0,
                    eventLocationName:
                      (p = R == null ? void 0 : R.name) != null
                        ? p
                        : R == null
                          ? void 0
                          : R.address,
                    eventCallType: o("WAWebEventUtils").getEventCallLinkType(L),
                  },
                  existingEventMsg: h,
                  showLocationField: !I,
                }),
              );
            } else {
              var _;
              (_ = A.current) == null || _.open(e);
            }
          })),
          B.apply(this, arguments)
        );
      }
      function W(e) {
        return q.apply(this, arguments);
      }
      function q() {
        return (
          (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, h);
          })),
          q.apply(this, arguments)
        );
      }
      var U = c.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: [o("WAWebUISpacing").uiPadding.vert2, m.fullWidth],
          children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
            text: P,
            textLimit: o("WAWebMsgGetters").getInitialPageSize(h),
            children: function (t) {
              var e = t.textLimit;
              return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: P,
                dirMismatch:
                  o("WAWebFrontendMsgGetters").getRtl(h) !==
                  r("WAWebL10N").isRTL(),
                direction: "auto",
                selectable: !0,
                textLimit: e,
                xstyle: [m.eventNameText, m.flex, $],
              });
            },
          }),
        }),
        V = o("WAWebFormatEventDateString").getEventDateStringFor(v, S),
        H =
          v != null
            ? c.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: [m.eventDetailText, o("WAWebUISpacing").uiMargin.vert1],
                children: s._(/*BTDS*/ "{Event-starttime-string}", [
                  s._param("Event-starttime-string", V),
                ]),
              })
            : null,
        G,
        z =
          (i = R == null ? void 0 : R.name) != null
            ? i
            : R == null
              ? void 0
              : R.address;
      z != null &&
        (G = c.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: [
            m.eventDetailText,
            m.fullWidth,
            o("WAWebUISpacing").uiMargin.vert1,
          ],
          children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: z,
            direction: "auto",
            selectable: !0,
            xstyle: [m.fullWidth, m.flex],
          }),
        }));
      var j,
        K = p(L);
      K != null &&
        (j = c.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: [m.eventDetailText, o("WAWebUISpacing").uiMargin.vert1],
          children: K,
        }));
      var Q = x.find(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
        }),
        X =
          I ||
          (!k &&
            (Q == null ? void 0 : Q.eventResponse) ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING &&
            o("WAWebEventUtils").eventIsJoinable(v)),
        Y = L != null && X && o("WAWebVoipGatingUtils").isGroupCallingEnabled(),
        J = o("WAWebEventUtils").shouldDisableInteractionForEvent({
          isSentByMe: T,
          isEventCanceled: k,
          eventInvalidated: E,
          isEventPassed: N,
          showJoinCall: Y,
        }),
        Z = x.filter(function (e) {
          return (
            e.eventResponse ===
            o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.GOING
          );
        }),
        ee = null;
      if (Z.length > 0) {
        var te = Z.sort(function (e, t) {
            return t.senderTimestampMs - e.senderTimestampMs;
          })
            .map(function (e) {
              return e.sender;
            })
            .slice(0, 3),
          ne = T ? m.facepileBorderOutgoing : m.facepileBorderIncoming;
        ee = c.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: [
            m.eventDetailText,
            m.fullWidth,
            o("WAWebUISpacing").uiMargin.vert1,
          ],
          children: [
            c.jsx(r("WAWebFacePile.react"), {
              keyName: h.id.toString(),
              idsOrUrls: te,
              borderColor: ne,
              faceSize: 18,
            }),
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.start4,
                ),
                {
                  children: s._(
                    /*BTDS*/ '_j{"*":"{number-of-participants-going} going"}',
                    [
                      s._param("number-of-participants-going", Z.length, [
                        0,
                        Z.length,
                      ]),
                    ],
                  ),
                },
              ),
            ),
          ],
        });
      }
      var re = _({
          eventResponse:
            (l = Q == null ? void 0 : Q.eventResponse) != null
              ? l
              : o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.UNKNOWN,
          isSentByMe: T,
          showJoinCall: Y,
          isEventCanceled: k,
        }),
        oe = c.jsxs("span", {
          className: "x3nfvp2 x6s0dn4",
          children: [
            re,
            c.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
              height: 18,
            }),
          ],
        }),
        ae = y
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.bottom3,
                ),
                { children: y },
              ),
            )
          : null;
      return c.jsxs(r("WAWebMessageTextBubble.react"), {
        testid: void 0,
        msg: h,
        displayType: t.displayType,
        displayAuthor: t.displayAuthor,
        hideMeta: !0,
        useFixedWidth: !o("WAWebDisplayType").isWideDisplay(t.displayType),
        ariaLabel: f(h, x),
        children: [
          ae,
          c.jsxs(r("WAWebUnstyledButton.react"), {
            onClick: F,
            xstyle: m.unstyledButton,
            children: [
              c.jsxs(r("WAWebMessageDeeperContainer.react"), {
                xstyle: [
                  m.deepContainer,
                  o("WAWebUISpacing").uiPadding.all8,
                  o("WAWebUISpacing").uiPadding.bottom12,
                ],
                outgoingMsg: T,
                children: [
                  c.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: m.iconContainer,
                    shrink: 0,
                    align: "center",
                    justify: "center",
                    padding: 2,
                    children: w,
                  }),
                  c.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: [o("WAWebUISpacing").uiPadding.start8, m.fullWidth],
                    padding: 2,
                    children: [
                      U,
                      H,
                      G,
                      j,
                      ee,
                      c.jsx("div", {
                        className: "x10l6tqk x9q68il xy1j3rs",
                        children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                          msg: h,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              E &&
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    m.invalidEventWarning,
                    T
                      ? m.invalidEventWarningBorderSender
                      : m.invalidEventWarningBorderReceiver,
                    o("WAWebUISpacing").uiMargin.top4,
                    o("WAWebUISpacing").uiPadding.vert8,
                    o("WAWebUISpacing").uiPadding.start14,
                    o("WAWebUISpacing").uiPadding.end12,
                  ],
                  children: [
                    c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
                      width: 19,
                      height: 17,
                      iconXstyle: m.warningIcon,
                    }),
                    c.jsx(
                      "span",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          m.outOfDate,
                          o("WAWebUISpacing").uiMargin.start8,
                        ),
                        {
                          "data-testid": void 0,
                          children: s._(
                            /*BTDS*/ "You can only see event changes made before you left.",
                          ),
                        },
                      ),
                    ),
                  ],
                }),
            ],
          }),
          c.jsx(r("WAWebEventsRSVPPopup.react"), {
            currentResponse: Q == null ? void 0 : Q.eventResponse,
            onClick: W,
            controlPopupRef: A,
          }),
          c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
              .EVENT_CREATION,
            items: [
              {
                label: Y || T || k ? re : oe,
                title: re,
                onClick: function (t) {
                  O(t);
                },
                disabled: !Y && J,
                testid: "event-rsvp-respond",
              },
            ],
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.getEventCallString = p),
      (l.getEventRespondButtonText = _),
      (l.Event = g));
  },
  226,
);
