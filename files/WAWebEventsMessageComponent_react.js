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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(142),
        l = t.chat,
        u = t.msg,
        g = t.quotedMsg,
        v;
      if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        var S;
        ((v = [
          (S = o("WAWebMsgGetters")).getEventName,
          S.getEventStartTime,
          S.getEventEndTime,
          S.getEventLocation,
          S.getEventJoinLink,
          S.getEventInvalidated,
          S.getIsEventCanceled,
          S.getEventIsScheduledCall,
          S.getIsSentByMe,
        ]),
          (i[0] = v));
      } else v = i[0];
      var R = o("useWAWebMsgValues").useMsgValues(
          u.id,
          r("WAWebCastToEventCreationMsg"),
          v,
        ),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = R[5],
        x = R[6],
        $ = R[7],
        P = R[8],
        N = r("useWAWebUIM")(),
        M = o("useWAWebEventResponses").useEventResponses(u),
        w;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (i[1] = w))
        : (w = i[1]);
      var A = w.pollQuestionTextSize,
        F;
      if (i[2] !== L) {
        var O;
        ((F = L.slice(
          0,
          (O = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null
            ? O
            : 100,
        )),
          (i[2] = L),
          (i[3] = F));
      } else F = i[3];
      var B = F,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee;
      if (
        i[4] !== l ||
        i[5] !== k ||
        i[6] !== D ||
        i[7] !== $ ||
        i[8] !== T ||
        i[9] !== (I == null ? void 0 : I.address) ||
        i[10] !== (I == null ? void 0 : I.name) ||
        i[11] !== L ||
        i[12] !== M ||
        i[13] !== E ||
        i[14] !== x ||
        i[15] !== P ||
        i[16] !== u ||
        i[17] !== B ||
        i[18] !== N
      ) {
        Z = Symbol.for("react.early_return_sentinel");
        e: {
          var te,
            ne,
            re,
            oe,
            ae = o("WAWebEventUtils").shouldShowEventAsPassed(E, k),
            ie = x || ae,
            le = D || ie ? m.iconDisabled : m.icon,
            se;
          (i[34] !== le
            ? ((se = c.jsx(r("WDSIconIcCalendarMonth.react"), { xstyle: le })),
              (i[34] = le),
              (i[35] = se))
            : (se = i[35]),
            (z = se));
          var ue;
          if (
            (i[36] === Symbol.for("react.memo_cache_sentinel")
              ? ((ue = d()), (i[36] = ue))
              : (ue = i[36]),
            (q = ue),
            L == null)
          ) {
            Z = null;
            break e;
          }
          var ce;
          (i[37] !== l || i[38] !== u || i[39] !== N
            ? ((ce = function () {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? { descriptorType: "event_info", chat: l, msg: u }
                    : c.jsx(
                        o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
                        {
                          chat: l,
                          msg: u,
                          onEnd: o("WAWebDrawerManager").closeDrawerRight,
                        },
                        "event-info-drawer-" + u.id.toString(),
                      ),
                  {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    uim: N,
                  },
                );
              }),
              (i[37] = l),
              (i[38] = u),
              (i[39] = N),
              (i[40] = ce))
            : (ce = i[40]),
            (H = ce),
            (V = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (Y) {
                    if (T != null) {
                      var t = o("WAWebApiParse").parseCallLink(T);
                      if (t != null) {
                        var n = t.data,
                          a = n.callType,
                          i = n.token,
                          s = a === "video",
                          d = o("WAWebChatGetters").getIsGroup(l),
                          m = d
                            ? o("WAWebWamEnumLobbyEntryPointType")
                                .LOBBY_ENTRY_POINT_TYPE.EVENT_GROUP_CHAT
                            : o("WAWebWamEnumLobbyEntryPointType")
                                .LOBBY_ENTRY_POINT_TYPE.EVENT_INDIVIDUAL_CHAT,
                          p = o("WAWebFrontendContactGetters").getMyUsername(),
                          _ = yield o(
                            "WAWebVoipStackInterface",
                          ).getVoipStackInterface();
                        yield _ == null
                          ? void 0
                          : _.previewCallLink(i, s, m, p);
                      }
                    }
                  } else if (P) {
                    var f;
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
                        preselectedChat: l,
                        prefilledData: {
                          eventName: L,
                          eventDescription: u.eventDescription,
                          eventStartTime:
                            o("WAWebEventUtils").eventTimeToUnixTime(E),
                          eventEndTime:
                            k != null
                              ? o("WAWebEventUtils").eventTimeToUnixTime(k)
                              : void 0,
                          eventLocationName:
                            (f = I == null ? void 0 : I.name) != null
                              ? f
                              : I == null
                                ? void 0
                                : I.address,
                          eventCallType:
                            o("WAWebEventUtils").getEventCallLinkType(T),
                        },
                        existingEventMsg: u,
                        showLocationField: !$,
                      }),
                    );
                  } else {
                    var g;
                    (g = q.current) == null || g.open(e);
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })()));
          var de;
          (i[41] !== u
            ? ((de = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(
                      e,
                      u,
                    );
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (i[41] = u),
              (i[42] = de))
            : (de = i[42]),
            (G = de));
          var me;
          i[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((me = [o("WAWebUISpacing").uiPadding.vert2, m.fullWidth]),
              (i[43] = me))
            : (me = i[43]);
          var pe;
          i[44] !== u
            ? ((pe = o("WAWebMsgGetters").getInitialPageSize(u)),
              (i[44] = u),
              (i[45] = pe))
            : (pe = i[45]);
          var _e;
          i[46] !== u || i[47] !== B
            ? ((_e = function (t) {
                var e = t.textLimit;
                return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: B,
                  dirMismatch:
                    o("WAWebFrontendMsgGetters").getRtl(u) !==
                    r("WAWebL10N").isRTL(),
                  direction: "auto",
                  selectable: !0,
                  textLimit: e,
                  xstyle: [m.eventNameText, m.flex, A],
                });
              }),
              (i[46] = u),
              (i[47] = B),
              (i[48] = _e))
            : (_e = i[48]);
          var fe;
          (i[49] !== pe || i[50] !== _e || i[51] !== B
            ? ((fe = c.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: me,
                children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
                  text: B,
                  textLimit: pe,
                  children: _e,
                }),
              })),
              (i[49] = pe),
              (i[50] = _e),
              (i[51] = B),
              (i[52] = fe))
            : (fe = i[52]),
            (Q = fe));
          var ge;
          i[53] !== k || i[54] !== E
            ? ((ge = o("WAWebFormatEventDateString").getEventDateStringFor(
                E,
                k,
              )),
              (i[53] = k),
              (i[54] = E),
              (i[55] = ge))
            : (ge = i[55]);
          var he = ge,
            ye;
          (i[56] !== he || i[57] !== E
            ? ((ye =
                E != null
                  ? c.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: [
                        m.eventDetailText,
                        o("WAWebUISpacing").uiMargin.vert1,
                      ],
                      children: s._(/*BTDS*/ "{Event-starttime-string}", [
                        s._param("Event-starttime-string", he),
                      ]),
                    })
                  : null),
              (i[56] = he),
              (i[57] = E),
              (i[58] = ye))
            : (ye = i[58]),
            (ee = ye));
          var Ce =
            (te = I == null ? void 0 : I.name) != null
              ? te
              : I == null
                ? void 0
                : I.address;
          if (Ce != null) {
            var be;
            i[59] === Symbol.for("react.memo_cache_sentinel")
              ? ((be = [
                  m.eventDetailText,
                  m.fullWidth,
                  o("WAWebUISpacing").uiMargin.vert1,
                ]),
                (i[59] = be))
              : (be = i[59]);
            var ve;
            i[60] === Symbol.for("react.memo_cache_sentinel")
              ? ((ve = [m.fullWidth, m.flex]), (i[60] = ve))
              : (ve = i[60]);
            var Se;
            (i[61] !== Ce
              ? ((Se = c.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: be,
                  children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: Ce,
                    direction: "auto",
                    selectable: !0,
                    xstyle: ve,
                  }),
                })),
                (i[61] = Ce),
                (i[62] = Se))
              : (Se = i[62]),
              (j = Se));
          }
          var Re;
          i[63] !== T ? ((Re = p(T)), (i[63] = T), (i[64] = Re)) : (Re = i[64]);
          var Le = Re;
          if (Le != null) {
            var Ee;
            i[65] === Symbol.for("react.memo_cache_sentinel")
              ? ((Ee = [m.eventDetailText, o("WAWebUISpacing").uiMargin.vert1]),
                (i[65] = Ee))
              : (Ee = i[65]);
            var ke;
            (i[66] !== Le
              ? ((ke = c.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: Ee,
                  children: Le,
                })),
                (i[66] = Le),
                (i[67] = ke))
              : (ke = i[67]),
              (W = ke));
          }
          K = M.find(b);
          var Ie =
            $ ||
            (!x &&
              ((ne = K) == null ? void 0 : ne.eventResponse) ===
                o("WAWebProtobufsE2E.pb")
                  .Message$EventResponseMessage$EventResponseType.GOING &&
              o("WAWebEventUtils").eventIsJoinable(E));
          if (
            ((Y =
              T != null &&
              Ie &&
              o("WAWebVoipGatingUtils").isGroupCallingEnabled()),
            (X = o("WAWebEventUtils").shouldDisableInteractionForEvent({
              isSentByMe: P,
              isEventCanceled: x,
              eventInvalidated: D,
              isEventPassed: ae,
              showJoinCall: Y,
            })),
            i[68] !== M || i[69] !== P || i[70] !== u.id)
          ) {
            var Te = M.filter(C);
            if (((U = null), Te.length > 0)) {
              var De = Te.sort(y).map(h).slice(0, 3),
                xe = P ? m.facepileBorderOutgoing : m.facepileBorderIncoming,
                $e;
              i[72] === Symbol.for("react.memo_cache_sentinel")
                ? (($e = [
                    m.eventDetailText,
                    m.fullWidth,
                    o("WAWebUISpacing").uiMargin.vert1,
                  ]),
                  (i[72] = $e))
                : ($e = i[72]);
              var Pe;
              i[73] !== u.id
                ? ((Pe = u.id.toString()), (i[73] = u.id), (i[74] = Pe))
                : (Pe = i[74]);
              var Ne;
              i[75] !== xe || i[76] !== De || i[77] !== Pe
                ? ((Ne = c.jsx(r("WAWebFacePile.react"), {
                    keyName: Pe,
                    idsOrUrls: De,
                    borderColor: xe,
                    faceSize: 18,
                  })),
                  (i[75] = xe),
                  (i[76] = De),
                  (i[77] = Pe),
                  (i[78] = Ne))
                : (Ne = i[78]);
              var Me;
              i[79] === Symbol.for("react.memo_cache_sentinel")
                ? ((Me = (e || (e = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.start4,
                  )),
                  (i[79] = Me))
                : (Me = i[79]);
              var we = s._(
                  /*BTDS*/ '_j{"*":"{number-of-participants-going} going"}',
                  [
                    s._param("number-of-participants-going", Te.length, [
                      0,
                      Te.length,
                    ]),
                  ],
                ),
                Ae;
              i[80] !== we
                ? ((Ae = c.jsx(
                    "div",
                    babelHelpers.extends({}, Me, { children: we }),
                  )),
                  (i[80] = we),
                  (i[81] = Ae))
                : (Ae = i[81]);
              var Fe;
              (i[82] !== Ne || i[83] !== Ae
                ? ((Fe = c.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: $e,
                    children: [Ne, Ae],
                  })),
                  (i[82] = Ne),
                  (i[83] = Ae),
                  (i[84] = Fe))
                : (Fe = i[84]),
                (U = Fe));
            }
            ((i[68] = M), (i[69] = P), (i[70] = u.id), (i[71] = U));
          } else U = i[71];
          J = _({
            eventResponse:
              (re = (oe = K) == null ? void 0 : oe.eventResponse) != null
                ? re
                : o("WAWebProtobufsE2E.pb")
                    .Message$EventResponseMessage$EventResponseType.UNKNOWN,
            isSentByMe: P,
            showJoinCall: Y,
            isEventCanceled: x,
          });
        }
        ((i[4] = l),
          (i[5] = k),
          (i[6] = D),
          (i[7] = $),
          (i[8] = T),
          (i[9] = I == null ? void 0 : I.address),
          (i[10] = I == null ? void 0 : I.name),
          (i[11] = L),
          (i[12] = M),
          (i[13] = E),
          (i[14] = x),
          (i[15] = P),
          (i[16] = u),
          (i[17] = B),
          (i[18] = N),
          (i[19] = W),
          (i[20] = q),
          (i[21] = U),
          (i[22] = V),
          (i[23] = H),
          (i[24] = G),
          (i[25] = z),
          (i[26] = j),
          (i[27] = K),
          (i[28] = Q),
          (i[29] = X),
          (i[30] = Y),
          (i[31] = J),
          (i[32] = Z),
          (i[33] = ee));
      } else
        ((W = i[19]),
          (q = i[20]),
          (U = i[21]),
          (V = i[22]),
          (H = i[23]),
          (G = i[24]),
          (z = i[25]),
          (j = i[26]),
          (K = i[27]),
          (Q = i[28]),
          (X = i[29]),
          (Y = i[30]),
          (J = i[31]),
          (Z = i[32]),
          (ee = i[33]));
      if (Z !== Symbol.for("react.early_return_sentinel")) return Z;
      var Oe = J,
        Be;
      i[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((Be = { className: "x3nfvp2 x6s0dn4" }), (i[85] = Be))
        : (Be = i[85]);
      var We;
      i[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = c.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
            height: 18,
          })),
          (i[86] = We))
        : (We = i[86]);
      var qe;
      i[87] !== Oe
        ? ((qe = c.jsxs(
            "span",
            babelHelpers.extends({}, Be, { children: [Oe, We] }),
          )),
          (i[87] = Oe),
          (i[88] = qe))
        : (qe = i[88]);
      var Ue = qe,
        Ve;
      i[89] !== g
        ? ((Ve = g
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.bottom3,
                  ),
                  { children: g },
                ),
              )
            : null),
          (i[89] = g),
          (i[90] = Ve))
        : (Ve = i[90]);
      var He = Ve,
        Ge = t.displayType,
        ze = t.displayAuthor,
        je;
      i[91] !== t.displayType
        ? ((je = o("WAWebDisplayType").isWideDisplay(t.displayType)),
          (i[91] = t.displayType),
          (i[92] = je))
        : (je = i[92]);
      var Ke = !je,
        Qe;
      i[93] !== M || i[94] !== u
        ? ((Qe = f(u, M)), (i[93] = M), (i[94] = u), (i[95] = Qe))
        : (Qe = i[95]);
      var Xe;
      i[96] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = [
            m.deepContainer,
            o("WAWebUISpacing").uiPadding.all8,
            o("WAWebUISpacing").uiPadding.bottom12,
          ]),
          (i[96] = Xe))
        : (Xe = i[96]);
      var Ye;
      i[97] !== z
        ? ((Ye = c.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: m.iconContainer,
            shrink: 0,
            align: "center",
            justify: "center",
            padding: 2,
            children: z,
          })),
          (i[97] = z),
          (i[98] = Ye))
        : (Ye = i[98]);
      var Je;
      i[99] === Symbol.for("react.memo_cache_sentinel")
        ? ((Je = [o("WAWebUISpacing").uiPadding.start8, m.fullWidth]),
          (i[99] = Je))
        : (Je = i[99]);
      var Ze = j,
        et = W,
        tt = U,
        nt;
      i[100] === Symbol.for("react.memo_cache_sentinel")
        ? ((nt = { className: "x10l6tqk x9q68il xy1j3rs" }), (i[100] = nt))
        : (nt = i[100]);
      var rt;
      i[101] !== u
        ? ((rt = c.jsx(
            "div",
            babelHelpers.extends({}, nt, {
              children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u }),
            }),
          )),
          (i[101] = u),
          (i[102] = rt))
        : (rt = i[102]);
      var ot;
      i[103] !== W ||
      i[104] !== U ||
      i[105] !== j ||
      i[106] !== Q ||
      i[107] !== rt ||
      i[108] !== ee
        ? ((ot = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: Je,
            padding: 2,
            children: [Q, ee, Ze, et, tt, rt],
          })),
          (i[103] = W),
          (i[104] = U),
          (i[105] = j),
          (i[106] = Q),
          (i[107] = rt),
          (i[108] = ee),
          (i[109] = ot))
        : (ot = i[109]);
      var at;
      i[110] !== P || i[111] !== Ye || i[112] !== ot
        ? ((at = c.jsxs(r("WAWebMessageDeeperContainer.react"), {
            xstyle: Xe,
            outgoingMsg: P,
            children: [Ye, ot],
          })),
          (i[110] = P),
          (i[111] = Ye),
          (i[112] = ot),
          (i[113] = at))
        : (at = i[113]);
      var it;
      i[114] !== D || i[115] !== P
        ? ((it =
            D &&
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                m.invalidEventWarning,
                P
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
            })),
          (i[114] = D),
          (i[115] = P),
          (i[116] = it))
        : (it = i[116]);
      var lt;
      i[117] !== H || i[118] !== at || i[119] !== it
        ? ((lt = c.jsxs(r("WAWebUnstyledButton.react"), {
            onClick: H,
            xstyle: m.unstyledButton,
            children: [at, it],
          })),
          (i[117] = H),
          (i[118] = at),
          (i[119] = it),
          (i[120] = lt))
        : (lt = i[120]);
      var st = (a = K) == null ? void 0 : a.eventResponse,
        ut;
      i[121] !== q || i[122] !== G || i[123] !== st
        ? ((ut = c.jsx(r("WAWebEventsRSVPPopup.react"), {
            currentResponse: st,
            onClick: G,
            controlPopupRef: q,
          })),
          (i[121] = q),
          (i[122] = G),
          (i[123] = st),
          (i[124] = ut))
        : (ut = i[124]);
      var ct = Y || P || x ? Oe : Ue,
        dt;
      i[125] !== V
        ? ((dt = function (t) {
            V(t);
          }),
          (i[125] = V),
          (i[126] = dt))
        : (dt = i[126]);
      var mt = !Y && X,
        pt;
      i[127] !== Oe || i[128] !== ct || i[129] !== dt || i[130] !== mt
        ? ((pt = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
              .EVENT_CREATION,
            items: [
              {
                label: ct,
                title: Oe,
                onClick: dt,
                disabled: mt,
                testid: "event-rsvp-respond",
              },
            ],
          })),
          (i[127] = Oe),
          (i[128] = ct),
          (i[129] = dt),
          (i[130] = mt),
          (i[131] = pt))
        : (pt = i[131]);
      var _t;
      return (
        i[132] !== u ||
        i[133] !== t.displayAuthor ||
        i[134] !== t.displayType ||
        i[135] !== He ||
        i[136] !== Ke ||
        i[137] !== Qe ||
        i[138] !== lt ||
        i[139] !== ut ||
        i[140] !== pt
          ? ((_t = c.jsxs(r("WAWebMessageTextBubble.react"), {
              testid: void 0,
              msg: u,
              displayType: Ge,
              displayAuthor: ze,
              hideMeta: !0,
              useFixedWidth: Ke,
              ariaLabel: Qe,
              children: [He, lt, ut, pt],
            })),
            (i[132] = u),
            (i[133] = t.displayAuthor),
            (i[134] = t.displayType),
            (i[135] = He),
            (i[136] = Ke),
            (i[137] = Qe),
            (i[138] = lt),
            (i[139] = ut),
            (i[140] = pt),
            (i[141] = _t))
          : (_t = i[141]),
        _t
      );
    }
    function h(e) {
      return e.sender;
    }
    function y(e, t) {
      return t.senderTimestampMs - e.senderTimestampMs;
    }
    function C(e) {
      return (
        e.eventResponse ===
        o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType
          .GOING
      );
    }
    function b(e) {
      return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
    }
    ((l.getEventCallString = p),
      (l.getEventRespondButtonText = _),
      (l.Event = g));
  },
  226,
);
