__d(
  "WAWebEventInfoDrawer.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebApiParse",
    "WAWebBoolFunc",
    "WAWebBox.react",
    "WAWebChatCell.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebCmd",
    "WAWebColumnChangeDispatch",
    "WAWebCopyToClipboard",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebEventParticipantCell.react",
    "WAWebEventResponseGetters",
    "WAWebEventUtils",
    "WAWebEventsCreateEventModalFlow.react",
    "WAWebEventsMessageComponent.react",
    "WAWebEventsRSVPPopup.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfiguration",
    "WAWebFormatEventDateString",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgInfoCollection",
    "WAWebName.react",
    "WAWebProtobufsE2E.pb",
    "WAWebSendEventResponseMsgAction",
    "WAWebStateUtils",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWid",
    "WDSButton.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCall.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcLocationOn.react",
    "WDSIconIcVideocam.react",
    "WDSIconIcVideocamFilled.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebCallLinkWaitingRoomState",
    "useWAWebEventResponses",
    "useWAWebIAmCommunityAdmin",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.createRef,
      f = p.useEffect,
      g = p.useState,
      h = 9,
      y = {
        eventName: {
          fontSize: "x1c3i2sq",
          display: "x1lliihq",
          color: "x14ug900",
          $$css: !0,
        },
        striked: { textDecoration: "xmqliwb", $$css: !0 },
        eventDescription: {
          fontSize: "x1jchvi3",
          display: "x1lliihq",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        iconxstyle: { color: "xhslqc4", $$css: !0 },
        iconContainer: {
          display: "x78zum5",
          width: "xgd8bvy",
          alignItems: "x7a106z",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        eventDetailsContainer: {
          rowGap: "x1rpttp",
          columnGap: "x9bxmr9",
          $$css: !0,
        },
        eventDetails: { flexGrow: "x1iyjqo2", $$css: !0 },
        participantListHeader: {
          display: "x78zum5",
          justifyContent: "x1qughib",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        rsvpButton: {
          width: "xh8yej3",
          height: "xng8ra",
          color: "x1ph7ams",
          $$css: !0,
        },
        rsvpButtonDisabled: { color: "xhslqc4", $$css: !0 },
        maybeOverflow: { flexWrap: "x1a02dak", $$css: !0 },
        inline: { display: "x1rg5ohu", lineHeight: "x1hkbg2g", $$css: !0 },
        nameTextContainer: {
          display: "x78zum5",
          columnGap: "x1ihrfj4",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        nameText: { maxWidth: "x1ikd3h5", $$css: !0 },
        nameButton: { display: "x78zum5", $$css: !0 },
        groupNameChevronIcon: { fill: "xvt3oi1", $$css: !0 },
      };
    function C(t) {
      var a,
        i,
        l,
        d,
        p,
        C,
        b = t.chat,
        v = t.msg,
        S = t.onBack,
        R = t.onEnd,
        L = t.onParticipantClick,
        E = t.ref,
        k = o("useWAWebMsgValues").useMsgValues(v.id, [
          (C = o("WAWebMsgGetters")).getEventName,
          C.getEventDescription,
          C.getEventStartTime,
          C.getEventEndTime,
          C.getEventLocation,
          C.getEventInvalidated,
          C.getEventJoinLink,
          C.getIsSentByMe,
          C.getIsEventCanceled,
          C.getEventIsScheduledCall,
        ]),
        I = k[0],
        T = k[1],
        D = k[2],
        x = k[3],
        $ = k[4],
        P = k[5],
        N = k[6],
        M = k[7],
        w = k[8],
        A = k[9],
        F = o("useWAWebEventResponses").useEventResponses(v),
        O = g(!1),
        B = O[0],
        W = O[1],
        q = g(!1),
        U = q[0],
        V = q[1],
        H = g(!1),
        G = H[0],
        z = H[1],
        j = g(!1),
        K = j[0],
        Q = j[1],
        X = g(void 0),
        Y = X[0],
        J = X[1],
        Z = g(!!b.msgs.get(v.id)),
        ee = Z[0],
        te = Z[1];
      (o("useWAWebListener").useListener(b.msgs, "change:msgs", function () {
        var e = b.msgs.get(v.id);
        e && te(!0);
      }),
        o("useWAWebListener").useListener(b.msgs, "remove_msgs", function (e) {
          e.some(function (e) {
            return e == null ? void 0 : e.id.equals(v.id);
          }) === !0 && R();
        }),
        f(function () {
          o("WAWebMsgInfoCollection")
            .MsgInfoCollection.find(v.id)
            .then(function (e) {
              J(e);
            });
        }, []));
      var ne =
          Y == null
            ? void 0
            : Y.delivery
                .toArray()
                .concat(Y == null ? void 0 : Y.read.toArray()),
        re = F.find(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
        }),
        oe = _(),
        ae = _(),
        ie = o("WAWebEventUtils").shouldDisableInteractionForEvent({
          isSentByMe: M,
          isEventCanceled: w,
          eventInvalidated: P,
          isEventPassed: o("WAWebEventUtils").shouldShowEventAsPassed(D, x),
          showJoinCall: !1,
        }),
        le =
          N != null &&
          !w &&
          ((re == null ? void 0 : re.eventResponse) ===
            o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.GOING ||
            (re == null ? void 0 : re.eventResponse) ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.MAYBE) &&
          o("WAWebEventUtils").eventIsJoinable(D) &&
          o("WAWebVoipGatingUtils").isGroupCallingEnabled(),
        se = r("useWAWebCallLinkWaitingRoomState")(M ? N : null);
      function ue(e) {
        if (M) {
          var t, n;
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
              preselectedChat: b,
              prefilledData: {
                eventName: I,
                eventDescription: T != null ? T : void 0,
                eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(D),
                eventEndTime:
                  x != null
                    ? o("WAWebEventUtils").eventTimeToUnixTime(x)
                    : void 0,
                eventLocationName:
                  (t = $ == null ? void 0 : $.name) != null
                    ? t
                    : $ == null
                      ? void 0
                      : $.address,
                eventCallType: o("WAWebEventUtils").getEventCallLinkType(N),
                requireApproval:
                  (n = se.isWaitingRoomEnabled) != null ? n : void 0,
              },
              existingEventMsg: v,
              onWaitingRoomToggled: se.refetch,
              showLocationField: !A,
            }),
          );
        } else {
          var a;
          (a = ae.current) == null || a.open(e);
        }
      }
      function ce(e) {
        return de.apply(this, arguments);
      }
      function de() {
        return (
          (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, v);
          })),
          de.apply(this, arguments)
        );
      }
      function me() {
        N != null
          ? (o("WAWebCopyToClipboard").copyTextToClipboard(N),
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Call link copied to clipboard"),
                id: o("WAWebToast.react").genId(),
              }),
            ))
          : o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[INTERN] Event has no join link but copy link was clicked",
                ])),
            );
      }
      function pe() {
        return _e.apply(this, arguments);
      }
      function _e() {
        return (
          (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (le) {
              if (N != null) {
                var e = o("WAWebApiParse").parseCallLink(N);
                if (e != null) {
                  var t = e.data,
                    n = t.callType,
                    r = t.token,
                    a = n === "video",
                    i = o("WAWebChatGetters").getIsGroup(b),
                    l = i
                      ? o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.EVENT_GROUP_CHAT
                      : o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.EVENT_INDIVIDUAL_CHAT,
                    s = o("WAWebFrontendContactGetters").getMyUsername(),
                    c = yield o(
                      "WAWebVoipStackInterface",
                    ).getVoipStackInterface();
                  yield c == null ? void 0 : c.previewCallLink(r, a, l, s);
                }
              }
            } else
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[INTERN] Event has no join link but join button was clicked",
                  ])),
              );
          })),
          _e.apply(this, arguments)
        );
      }
      function fe() {
        (o("WAWebColumnChangeDispatch").Column.column === 2 &&
          o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
          o("WAWebCmd").Cmd.openChatAt({
            chat: b,
            msgContext: {
              collection: b.msgs,
              msg: b.msgs.assertGet(v.id),
              key: v.id,
              enableAnimation: !0,
              highlightMsg: !0,
            },
          }));
      }
      var ge = o("useWAWebModelValues").useOptionalModelValues(
          b == null ? void 0 : b.groupMetadata,
          ["participants", "size", "id", "parentGroup"],
        ),
        he =
          ge != null && ge.parentGroup
            ? r("WAWebGroupMetadataCollection").get(ge.parentGroup.toString())
            : null,
        ye = r("useWAWebIAmCommunityAdmin")(he);
      function Ce(e) {
        var t,
          n = (t = o("WAWebLidMigrationUtils").toPn(e)) != null ? t : e;
        return (
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(b) ||
          !!(ye || (n.isUser() && he != null && he.participants.userIsAdmin(n)))
        );
      }
      var be = function (t, n) {
          var e = o("WAWebMsgGetters").getSender(v);
          return e != null && e.equals(n.sender)
            ? 1
            : e != null && e.equals(t.sender)
              ? -1
              : n.senderTimestampMs - t.senderTimestampMs;
        },
        ve = F.reduce(
          function (e, t) {
            var n = e[0],
              r = e[1],
              a = e[2];
            return (
              t.eventResponse ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING
                ? n.push(t)
                : t.eventResponse ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventResponseMessage$EventResponseType.MAYBE
                  ? r.push(t)
                  : t.eventResponse ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$EventResponseMessage$EventResponseType
                        .NOT_GOING && a.push(t),
              [n, r, a]
            );
          },
          [[], [], []],
        ),
        Se = ve[0],
        Re = ve[1],
        Le = ve[2],
        Ee =
          (a =
            (i = $ == null ? void 0 : $.address) != null
              ? i
              : $ == null
                ? void 0
                : $.name) != null
            ? a
            : "",
        ke =
          (l = $ == null ? void 0 : $.name) != null
            ? l
            : $ == null
              ? void 0
              : $.address,
        Ie = "https://www.google.com/maps/search/?api=1&query=" + Ee,
        Te = new Date(D * 1e3).toISOString().replace(/-|:|\.\d+/g, ""),
        De =
          x != null
            ? new Date(x * 1e3).toISOString().replace(/-|:|\.\d+/g, "")
            : new Date(D * 1e3 + 3600 * 1e3)
                .toISOString()
                .replace(/-|:|\.\d+/g, ""),
        xe =
          "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
          I +
          "&details=" +
          (T != null ? T : "") +
          "&location=" +
          Ee +
          "&dates=" +
          Te +
          "/" +
          De,
        $e = Se.slice(0, B ? Se.length : h)
          .sort(be)
          .map(function (e) {
            return m.jsx(
              r("WAWebEventParticipantCell.react"),
              {
                chat: b,
                sender: o("WAWebEventResponseGetters").getSender(e),
                senderTimestampMs: o(
                  "WAWebEventResponseGetters",
                ).getSenderTimestampMs(e),
                eventCreator: r("WANullthrows")(
                  o("WAWebMsgGetters").getSender(v),
                ).equals(e.sender),
                onParticipantClick: L,
                isInteractive: Ce(o("WAWebEventResponseGetters").getSender(e)),
              },
              e.id.toString(),
            );
          }),
        Pe = Re.slice(0, G ? Re.length : h)
          .sort(be)
          .map(function (e) {
            return m.jsx(
              r("WAWebEventParticipantCell.react"),
              {
                chat: b,
                sender: o("WAWebEventResponseGetters").getSender(e),
                senderTimestampMs: o(
                  "WAWebEventResponseGetters",
                ).getSenderTimestampMs(e),
                eventCreator: !1,
                onParticipantClick: L,
                isInteractive: Ce(o("WAWebEventResponseGetters").getSender(e)),
              },
              e.id.toString(),
            );
          }),
        Ne = Le.slice(0, U ? Le.length : h)
          .sort(be)
          .map(function (e) {
            return m.jsx(
              r("WAWebEventParticipantCell.react"),
              {
                chat: b,
                sender: o("WAWebEventResponseGetters").getSender(e),
                senderTimestampMs: o(
                  "WAWebEventResponseGetters",
                ).getSenderTimestampMs(e),
                eventCreator: !1,
                onParticipantClick: L,
                isInteractive: Ce(o("WAWebEventResponseGetters").getSender(e)),
              },
              e.id.toString(),
            );
          }),
        Me = (
          M && ne != null
            ? (d = ne.filter(function (e) {
                return !F.some(function (t) {
                  var n = t.sender;
                  return r("WAWebWid").equals.apply(
                    r("WAWebWid"),
                    o("WAWebLidMigrationUtils").toCommonAddressingMode(
                      n,
                      e == null ? void 0 : e.id,
                    ),
                  );
                });
              })) != null
              ? d
              : []
            : []
        ).filter(Boolean),
        we = Me.slice(0, K ? Me.length : h).map(function (e) {
          return m.jsx(
            r("WAWebEventParticipantCell.react"),
            {
              chat: b,
              sender: e.id,
              eventCreator: !1,
              onParticipantClick: L,
              isInteractive: Ce(e.id),
            },
            e.id.toString(),
          );
        }),
        Ae =
          Se.length > h && !B
            ? m.jsx(r("WAWebChatCell.react"), {
                "data-testid": void 0,
                onClick: function () {
                  return W(!0);
                },
                contextEnabled: o("WAWebBoolFunc").returnFalse,
                primary: s._(/*BTDS*/ "View all"),
                theme: "view-all",
              })
            : null,
        Fe =
          Re.length > h && !G
            ? m.jsx(r("WAWebChatCell.react"), {
                "data-testid": void 0,
                onClick: function () {
                  return z(!0);
                },
                contextEnabled: o("WAWebBoolFunc").returnFalse,
                primary: s._(/*BTDS*/ "View all"),
                theme: "view-all",
              })
            : null,
        Oe =
          Le.length > h && !U
            ? m.jsx(r("WAWebChatCell.react"), {
                "data-testid": void 0,
                onClick: function () {
                  return V(!0);
                },
                contextEnabled: o("WAWebBoolFunc").returnFalse,
                primary: s._(/*BTDS*/ "View all"),
                theme: "view-all",
              })
            : null,
        Be =
          Me.length > h && !K
            ? m.jsx(r("WAWebChatCell.react"), {
                "data-testid": void 0,
                onClick: function () {
                  return Q(!0);
                },
                contextEnabled: o("WAWebBoolFunc").returnFalse,
                primary: s._(/*BTDS*/ "View all"),
                theme: "view-all",
              })
            : null,
        We = function (t) {
          return s._(/*BTDS*/ '_j{"*":"{number} people","_1":"1 person"}', [
            s._plural(t, "number"),
          ]);
        },
        qe = Se.length
          ? m.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: [
                o("WAWebUISpacing").uiPadding.top20,
                o("WAWebUISpacing").uiPadding.bottom10,
              ],
              children: [
                m.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      y.participantListHeader,
                      o("WAWebUISpacing").uiPadding.bottom15,
                      o("WAWebUISpacing").uiPadding.horiz20,
                    ),
                    {
                      children: [
                        s._(/*BTDS*/ '_j{"*":"Going"}', [s._plural(Se.length)]),
                        m.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: We(Se.length),
                        }),
                      ],
                    },
                  ),
                ),
                $e,
                Ae,
              ],
            })
          : null,
        Ue = Re.length
          ? m.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: [
                o("WAWebUISpacing").uiPadding.top20,
                o("WAWebUISpacing").uiPadding.bottom10,
              ],
              children: [
                m.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      y.participantListHeader,
                      o("WAWebUISpacing").uiPadding.bottom15,
                      o("WAWebUISpacing").uiPadding.horiz20,
                    ),
                    {
                      children: [
                        s._(/*BTDS*/ '_j{"*":"Maybe"}', [s._plural(Re.length)]),
                        m.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: We(Re.length),
                        }),
                      ],
                    },
                  ),
                ),
                Pe,
                Fe,
              ],
            })
          : null,
        Ve = Le.length
          ? m.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: [
                o("WAWebUISpacing").uiPadding.top20,
                o("WAWebUISpacing").uiPadding.bottom10,
              ],
              children: [
                m.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      y.participantListHeader,
                      o("WAWebUISpacing").uiPadding.bottom15,
                      o("WAWebUISpacing").uiPadding.horiz20,
                    ),
                    {
                      children: [
                        s._(/*BTDS*/ '_j{"*":"Not going"}', [
                          s._plural(Le.length),
                        ]),
                        m.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: We(Le.length),
                        }),
                      ],
                    },
                  ),
                ),
                Ne,
                Oe,
              ],
            })
          : null,
        He = we.length
          ? m.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: [
                o("WAWebUISpacing").uiPadding.top20,
                o("WAWebUISpacing").uiPadding.bottom10,
              ],
              children: [
                m.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      y.participantListHeader,
                      o("WAWebUISpacing").uiPadding.bottom15,
                      o("WAWebUISpacing").uiPadding.horiz20,
                    ),
                    {
                      children: [
                        s._(/*BTDS*/ '_j{"*":"Not responded"}', [
                          s._plural(we.length),
                        ]),
                        m.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: We(Me.length),
                        }),
                      ],
                    },
                  ),
                ),
                we,
                Be,
              ],
            })
          : null,
        Ge = o("WAWebEventsMessageComponent.react").getEventRespondButtonText({
          eventResponse:
            (p = re == null ? void 0 : re.eventResponse) != null
              ? p
              : o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.UNKNOWN,
          isSentByMe: M,
          showJoinCall: !1,
          isEventCanceled: w,
        }),
        ze = m.jsxs("span", {
          className: "x3nfvp2 x6s0dn4",
          children: [
            Ge,
            !M &&
              m.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
                height: 18,
                "aria-hidden": !0,
              }),
          ],
        }),
        je;
      w
        ? (je = m.jsx(o("WAWebTag.react").Tag, {
            theme: o("WAWebTag.react").TagTheme.Error,
            testid: void 0,
            xstyle: [y.inline, o("WAWebUISpacing").uiMargin.bottom6],
            children: Ge,
          }))
        : P &&
          (je = m.jsx(o("WAWebTag.react").Tag, {
            theme: o("WAWebTag.react").TagTheme.Error,
            xstyle: [y.inline, o("WAWebUISpacing").uiMargin.bottom6],
            testid: void 0,
            children: s._(
              /*BTDS*/ "Event details may be inaccurate since you left the group.",
            ),
          }));
      var Ke = b.isTrusted()
          ? o("WAWebFormatConfiguration").TrustedGroupDesc
          : o("WAWebFormatConfiguration").UntrustedGroupDesc,
        Qe =
          ge != null
            ? o("WAWebGroupType").groupTypeToWamEnum(
                o("WAWebGroupType").getGroupTypeFromGroupMetadata(
                  o("WAWebStateUtils").unproxy(ge),
                ),
              )
            : void 0,
        Xe = s._(/*BTDS*/ "Add to calendar");
      return m.jsxs(r("WAWebDrawer.react"), {
        theme: "striped",
        ref: E,
        tsNavigationData: {
          surface: "event-info",
          extras: { typeOfGroup: Qe },
        },
        children: [
          m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Event details"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: S,
            onCancel: S ? void 0 : R,
          }),
          m.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              m.jsxs(r("WAWebDrawerSection.react"), {
                xstyle: o("WAWebUISpacing").uiPadding.all20,
                children: [
                  je,
                  m.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    inferLinesDirection: !0,
                    xstyle: [
                      y.eventName,
                      w && y.striked,
                      o("WAWebUISpacing").uiMargin.bottom6,
                    ],
                    text: I,
                    selectable: !0,
                  }),
                  T != null
                    ? m.jsx(o("WAWebExpandableText.react").ExpandableText, {
                        text: T,
                        textLimit: 100,
                        children: function (t) {
                          var e = t.textLimit;
                          return m.jsx(o("WAWebEmojiText.react").EmojiText, {
                            xstyle: [
                              y.eventDescription,
                              o("WAWebUISpacing").uiMargin.bottom8,
                            ],
                            text: T,
                            textLimit: e,
                            formatters: Ke({
                              links: o("WAWebLinkify").findLinks(T),
                              bulletPointsEnabled: !0,
                              expandedFormattingEnabled: !1,
                            }),
                            direction: "auto",
                            inferLinesDirection: !0,
                            multiline: !0,
                            selectable: !0,
                            ellipsify: !0,
                          });
                        },
                      })
                    : null,
                  ge != null
                    ? m.jsxs(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: y.nameTextContainer,
                        children: [
                          s._(/*BTDS*/ "Created for:"),
                          m.jsx(o("WAWebDetailImage.react").DetailImage, {
                            size: 18,
                            id: b.id,
                          }),
                          m.jsxs(r("WAWebUnstyledButton.react"), {
                            onClick: fe,
                            disabled: !ee,
                            "aria-label": s._(
                              /*BTDS*/ 'Click to open group "{groupName}" where the event was created',
                              [s._param("groupName", b.formattedTitle)],
                            ),
                            xstyle: y.nameButton,
                            children: [
                              m.jsx(o("WAWebName.react").GroupName, {
                                chat: b,
                                groupMetadata: ge,
                                ellipsify: !0,
                                xstyle: y.nameText,
                              }),
                              ee
                                ? m.jsx(
                                    o("WAWebChevronIcon.react").ChevronIcon,
                                    {
                                      height: 18,
                                      xstyle: y.groupNameChevronIcon,
                                      "aria-hidden": !0,
                                      directional: !0,
                                    },
                                  )
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  m.jsxs(r("WAWebBox.react"), {
                    xstyle: [
                      o("WAWebUISpacing").uiPadding.vert14,
                      y.eventDetailsContainer,
                    ],
                    flex: !0,
                    children: [
                      m.jsx(r("WAWebBox.react"), {
                        xstyle: [
                          y.iconContainer,
                          o("WAWebUISpacing").uiPadding.top4,
                          y.iconxstyle,
                        ],
                        children: m.jsx(r("WDSIconIcCalendarMonth.react"), {}),
                      }),
                      m.jsxs("div", {
                        className: "x1iyjqo2",
                        children: [
                          m.jsx(o("WAWebText.react").WAWebTextTitle, {
                            marginBottom: 2,
                            children: o(
                              "WAWebFormatEventDateString",
                            ).getEventDateStringFor(D, x),
                          }),
                          w
                            ? m.jsx(o("WAWebText.react").WAWebTextMuted, {
                                children: Xe,
                              })
                            : m.jsx(r("WDSTextualLink.react"), {
                                href: xe,
                                children: Xe,
                              }),
                        ],
                      }),
                    ],
                  }),
                  ke != null
                    ? m.jsxs(r("WAWebBox.react"), {
                        xstyle: [
                          o("WAWebUISpacing").uiPadding.vert16,
                          y.eventDetailsContainer,
                        ],
                        flex: !0,
                        children: [
                          m.jsx(r("WAWebBox.react"), {
                            xstyle: [
                              y.iconContainer,
                              o("WAWebUISpacing").uiPadding.top4,
                              y.iconxstyle,
                            ],
                            children: m.jsx(r("WDSIconIcLocationOn.react"), {}),
                          }),
                          m.jsxs("div", {
                            className: "x1iyjqo2",
                            children: [
                              m.jsx(o("WAWebText.react").WAWebTextTitle, {
                                marginBottom: 2,
                                children: m.jsx(
                                  o("WAWebExpandableText.react").ExpandableText,
                                  {
                                    text: ke,
                                    textLimit: 65,
                                    children: function (t) {
                                      var e = t.textLimit;
                                      return m.jsx(
                                        o("WAWebEmojiText.react").EmojiText,
                                        {
                                          xstyle: y.eventDescription,
                                          text: ke,
                                          textLimit: e,
                                          direction: "auto",
                                          inferLinesDirection: !0,
                                          multiline: !0,
                                          selectable: !0,
                                          ellipsify: !0,
                                        },
                                      );
                                    },
                                  },
                                ),
                              }),
                              m.jsx(r("WDSTextualLink.react"), {
                                href: Ie,
                                children: s._(/*BTDS*/ "View on maps"),
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  N != null
                    ? m.jsxs(r("WAWebBox.react"), {
                        xstyle: [
                          o("WAWebUISpacing").uiPadding.vert16,
                          y.eventDetailsContainer,
                          y.maybeOverflow,
                        ],
                        flex: !0,
                        children: [
                          m.jsx(r("WAWebBox.react"), {
                            xstyle: [
                              y.iconContainer,
                              o("WAWebUISpacing").uiPadding.top4,
                              y.iconxstyle,
                            ],
                            children: o("WAWebEventUtils").isEventVideoCallLink(
                              N,
                            )
                              ? m.jsx(r("WDSIconIcVideocam.react"), {})
                              : m.jsx(r("WDSIconIcCall.react"), {}),
                          }),
                          m.jsxs(
                            "div",
                            babelHelpers.extends(
                              {},
                              (c || (c = r("stylex"))).props(
                                y.eventDetails,
                                o("WAWebUISpacing").uiMargin.endAuto,
                              ),
                              {
                                children: [
                                  m.jsx(o("WAWebText.react").WAWebTextTitle, {
                                    marginBottom: 2,
                                    children: o(
                                      "WAWebEventsMessageComponent.react",
                                    ).getEventCallString(N),
                                  }),
                                  m.jsx(r("WDSTextualLink.react"), {
                                    onClick: me,
                                    "aria-label": s._(
                                      /*BTDS*/ "Click to copy call link for the event",
                                    ),
                                    children: s._(/*BTDS*/ "Copy link"),
                                  }),
                                ],
                              },
                            ),
                          ),
                          le
                            ? m.jsx(r("WDSButton.react"), {
                                label: s._(/*BTDS*/ "Join"),
                                Icon: o("WAWebEventUtils").isEventVideoCallLink(
                                  N,
                                )
                                  ? r("WDSIconIcVideocamFilled.react")
                                  : r("WDSIconIcCallFilled.react"),
                                variant: "filled",
                                onPress: function () {
                                  pe();
                                },
                              })
                            : null,
                        ],
                      })
                    : null,
                  m.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: o("WAWebUISpacing").uiPadding.top8,
                    children: s._(
                      /*BTDS*/ '_j{"*":"{number} people responded","_1":"1 person responded"}',
                      [s._plural(Se.length + Le.length, "number")],
                    ),
                  }),
                ],
              }),
              m.jsx(r("WAWebDrawerSection.react"), {
                children: w
                  ? null
                  : m.jsxs(r("WAWebUnstyledButton.react"), {
                      ref: oe,
                      disabled: ie,
                      xstyle: [y.rsvpButton].concat(
                        ie ? [y.rsvpButtonDisabled] : [],
                      ),
                      testid: void 0,
                      onClick: ue,
                      children: [
                        ze,
                        m.jsx(r("WAWebEventsRSVPPopup.react"), {
                          currentResponse:
                            re == null ? void 0 : re.eventResponse,
                          onClick: ce,
                          controlPopupRef: ae,
                          onClose: function () {
                            var e;
                            (e = oe.current) == null || e.focus();
                          },
                        }),
                      ],
                    }),
              }),
              qe,
              Ue,
              Ve,
              He,
            ],
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
