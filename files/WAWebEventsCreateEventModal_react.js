__d(
  "WAWebEventsCreateEventModal.react",
  [
    "fbt",
    "WALogger",
    "WASmaxVoipWaitingRoomToggleCallLinkRPC",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebApiParse",
    "WAWebButton.react",
    "WAWebConfirmPopup.react",
    "WAWebDateInput.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEventUtils",
    "WAWebEventsCreateEventModalInputs.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSendEventEditMsgAction",
    "WAWebText.react",
    "WAWebTimeInput.react",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUISpacing",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSButton.react",
    "WDSSwitch.react",
    "asyncToGeneratorRuntime",
    "fbs",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useState,
      h = o("WAWebEventUtils").getInitialEventStartTime(),
      y = o("WAWebEventUtils").getInitialEventEndTime(h),
      C = {
        drawer: {
          backgroundColor: "x1280gxy",
          position: "x1n2onr6",
          $$css: !0,
        },
        drawerBody: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexBasis: "xdl72j9",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        createEventButtonContainerWds: {
          transform: "xvjzkt9",
          width: "xh8yej3",
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          height: "xwvwv9b",
          $$css: !0,
        },
        createEventWdsButton: {
          transitionProperty: "xs2xxs2",
          transitionDuration: "x1d8287x",
          $$css: !0,
        },
        alignStart: { textAlign: "x1yc453h", $$css: !0 },
        alignEnd: { textAlign: "xp4054r", $$css: !0 },
      };
    function b(e) {
      var t,
        n,
        o = e.endDate,
        a = e.endTime,
        i = e.hasCall,
        l = e.hasFormChanged,
        s = e.name,
        u = e.startDate,
        c = e.startTime;
      if (!l) return !1;
      var d = r("WAWeb-moment")(u + "T" + c),
        m = o != null && a != null ? r("WAWeb-moment")(o + "T" + a) : null,
        p = s.trim().length > 0,
        _ = d.isValid(),
        f = d.isAfter(r("WAWeb-moment")()),
        g = d.isAfter(r("WAWeb-moment")().add({ years: 1 })),
        h = (t = m == null ? void 0 : m.isValid()) != null ? t : !0,
        y = (n = m == null ? void 0 : m.isAfter(d)) != null ? n : !0;
      return p && _ && f && (i ? !g : !0) && h && y;
    }
    function v(e) {
      return r("WAWeb-moment").unix(e).format("HH:mm");
    }
    function S(e) {
      return r("WAWeb-moment").unix(e).format("YYYY-MM-DD");
    }
    function R(t) {
      var a,
        i,
        l = t.callLinkRequired,
        c = l === void 0 ? !1 : l,
        m = t.existingEventMsg,
        R = t.nameInputPlaceholder,
        L = t.nameInputTitle,
        E = t.onCancel,
        k = t.onConfirm,
        I = t.onWaitingRoomToggled,
        T = t.prefilledData,
        D = t.ref,
        x = t.showLocationField,
        $ = x === void 0 ? !0 : x,
        P = t.showRemoveEndTimeButton,
        N = P === void 0 ? !0 : P,
        M = t.title,
        w = c ? "video" : null,
        A = f(
          function () {
            var e, t, n, r, o, a;
            return {
              initialEventName:
                (e = T == null ? void 0 : T.eventName) != null ? e : "",
              initialEventDescription:
                (t = T == null ? void 0 : T.eventDescription) != null ? t : "",
              initialEventStartTime:
                (n = T == null ? void 0 : T.eventStartTime) != null ? n : h,
              initialEventEndTime:
                (r = T == null ? void 0 : T.eventEndTime) != null ? r : y,
              initialEventLocationName:
                (o = T == null ? void 0 : T.eventLocationName) != null ? o : "",
              initialEventCallType:
                (a = T == null ? void 0 : T.eventCallType) != null ? a : w,
            };
          },
          [T, w],
        ),
        F = A.initialEventCallType,
        O = A.initialEventDescription,
        B = A.initialEventEndTime,
        W = A.initialEventLocationName,
        q = A.initialEventName,
        U = A.initialEventStartTime,
        V =
          (T == null ? void 0 : T.eventStartTime) != null &&
          (T == null ? void 0 : T.eventEndTime) != null,
        H = g(V),
        G = H[0],
        z = H[1],
        j = g(q),
        K = j[0],
        Q = j[1],
        X = g(O != null ? O : ""),
        Y = X[0],
        J = X[1],
        Z = S(U),
        ee = g(Z),
        te = ee[0],
        ne = ee[1],
        re = v(U),
        oe = g(re),
        ae = oe[0],
        ie = oe[1],
        le = S(B),
        se = g(le),
        ue = se[0],
        ce = se[1],
        de = v(B),
        me = g(de),
        pe = me[0],
        _e = me[1],
        fe = g(!1),
        ge = fe[0],
        he = fe[1],
        ye = g(W),
        Ce = ye[0],
        be = ye[1],
        ve = g(F),
        Se = ve[0],
        Re = ve[1],
        Le = !!Se,
        Ee = p(
          function () {
            return o("WAWebEventUtils").getEventDateBoundaries(Le);
          },
          [Le],
        ),
        ke = g((a = T == null ? void 0 : T.requireApproval) != null ? a : !1),
        Ie = ke[0],
        Te = ke[1],
        De = g((i = T == null ? void 0 : T.requireApproval) != null ? i : !1),
        xe = De[0],
        $e = function (t) {
          Te(t);
        },
        Pe = g(!1),
        Ne = Pe[0],
        Me = Pe[1];
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
        surface: "create-event",
      });
      var we = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_waiting_room_admin_ui",
        ),
        Ae = Se != null && Ie !== xe,
        Fe =
          K !== q ||
          Y !== O ||
          Ce !== W ||
          Se !== F ||
          te !== Z ||
          ae !== re ||
          ue !== le ||
          pe !== de ||
          V !== G,
        Oe = (T != null && m == null) || Fe || Ae,
        Be = Ae && !Fe,
        We = function () {
          Oe || qe();
        };
      function qe() {
        E();
      }
      function Ue() {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (
          (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = r("WAWeb-moment")(te + "T" + ae).unix(),
              n = G ? r("WAWeb-moment")(ue + "T" + pe).unix() : void 0;
            (Me(!0),
              He(
                o("WATimeUtils").castToUnixTime(t),
                n != null ? o("WATimeUtils").castToUnixTime(n) : void 0,
              )
                .catch(function (t) {
                  t instanceof Error &&
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[Events] Failed to send event creation message",
                          ])),
                      )
                      .catching(t);
                })
                .finally(function () {
                  return Me(!1);
                }));
          })),
          Ve.apply(this, arguments)
        );
      }
      function He(e, t) {
        return Ge.apply(this, arguments);
      }
      function Ge() {
        return (
          (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
            if (Be && (m == null ? void 0 : m.eventJoinLink) != null) {
              var n = o("WAWebApiParse").parseCallLink(m.eventJoinLink);
              if (n != null) {
                var r = n.data,
                  a = r.callType,
                  i = r.token,
                  l = a === "video";
                (yield o(
                  "WASmaxVoipWaitingRoomToggleCallLinkRPC",
                ).sendWaitingRoomToggleCallLinkRPC({
                  waitingRoomToggleEnabled: Ie ? "1" : "0",
                  waitingRoomToggleLinkToken: i,
                  waitingRoomToggleMedia: l ? "video" : "audio",
                }),
                  I == null || I());
              }
              E();
              return;
            }
            yield k({
              eventName: K,
              eventStartTime: e,
              eventEndTime: t,
              eventDescription: Y,
              eventLocationName: Ce,
              eventCallType: Se != null ? Se : void 0,
              requireApproval: Se != null ? Ie : void 0,
              hasRequireApprovalChanged: Se != null ? Ae : void 0,
            });
          })),
          Ge.apply(this, arguments)
        );
      }
      function ze() {
        var e;
        o("WAWebModalManager").ModalManager.open(
          d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            title: s._(/*BTDS*/ 'Cancel "{event-name}" event?', [
              s._param(
                "event-name",
                (e = T == null ? void 0 : T.eventName) != null ? e : K,
              ),
            ]),
            onOK: function () {
              var e;
              (o("WAWebSendEventEditMsgAction").sendEventEditMessage(
                {
                  name: r("nullthrows")(T == null ? void 0 : T.eventName),
                  startTime: r("nullthrows")(
                    T == null ? void 0 : T.eventStartTime,
                  ),
                  endTime: T == null ? void 0 : T.eventEndTime,
                  isEventCanceled: !0,
                  description: T == null ? void 0 : T.eventDescription,
                  location: T == null ? void 0 : T.eventLocationName,
                  callType:
                    (e = T == null ? void 0 : T.eventCallType) != null
                      ? e
                      : void 0,
                },
                r("nullthrows")(m),
              ),
                o("WAWebModalManager").ModalManager.close());
            },
            okText: s._(/*BTDS*/ "Cancel event"),
            okButtonType: "solid-warning",
            cancelText: r("WAWebFbtCommon")("Close"),
            onCancel: o("WAWebModalManager").closeModalManager,
            children: d.jsx(o("WAWebText.react").WAWebTextSmall, {
              color: "secondary",
              xstyle: o("WAWebUISpacing").uiMargin.vert12,
              children: s._(/*BTDS*/ "Canceled events cannot be restored"),
            }),
          }),
        );
      }
      (_(
        function () {
          var e = ae !== re || te !== Z;
          if (e && ge === !1) {
            var t = r("WAWeb-moment")(te + "T" + ae).unix(),
              n = o("WAWebEventUtils").eventTimeToUnixTime(t),
              a = o("WAWebEventUtils").getInitialEventEndTime(n);
            (ce(S(a)), _e(v(a)));
          }
        },
        [te, ae],
      ),
        _(
          function () {
            if (G) {
              var e = r("WAWeb-moment")(te + "T" + ae).unix(),
                t = r("WAWeb-moment")(ue + "T" + pe).unix();
              if (e >= t) {
                var n = 7200,
                  a = o("WATimeUtils").castToUnixTime(e + n);
                (ce(S(a)), _e(v(a)));
              }
            }
          },
          [te, ae],
        ),
        _(
          function () {
            if (G) {
              var e = r("WAWeb-moment")(te + "T" + ae).unix(),
                t = r("WAWeb-moment")(ue + "T" + pe).unix();
              if (t <= e) {
                var n = 7200,
                  a = o("WATimeUtils").castToUnixTime(t - n);
                (ne(S(a)), ie(v(a)));
              }
            }
          },
          [ue, pe],
        ));
      var je = function (t) {
          (ce(t), he(!0));
        },
        Ke = function (t) {
          (_e(t), he(!0));
        },
        Qe = d.jsx(
          o("WAWebEventsCreateEventModalInputs.react").EndDateTimePicker,
          {
            dateValue: ue,
            onDateChange: je,
            timeValue: pe,
            onTimeChange: Ke,
            isEndDateTimeEnabled: G,
            setIsEndDateTimeEnabled: z,
            showRemoveEndTimeButton: N,
          },
        ),
        Xe = !!(T && m),
        Ye =
          Be && (m == null ? void 0 : m.eventJoinLink) != null
            ? Ne
            : !b({
                name: K,
                startDate: te,
                startTime: ae,
                endDate: G ? ue : void 0,
                endTime: G ? pe : void 0,
                hasCall: !!Se,
                hasFormChanged: Oe,
              }) || Ne,
        Je =
          M != null
            ? M
            : Xe
              ? s._(/*BTDS*/ "Edit event")
              : s._(/*BTDS*/ "Create event"),
        Ze = d.jsx(r("WDSButton.react"), {
          size: "large",
          variant: "filled",
          Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
          xstyle: C.createEventWdsButton,
          disabled: Ye,
          "aria-label": s._(/*BTDS*/ "Create event"),
          testid: void 0,
          onPress: function () {
            Ue();
          },
        }),
        et = r("WAWebL10N").isRTL() ? C.alignEnd : C.alignStart;
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), We());
          },
        },
        children: d.jsx(o("WAWebModal.react").Modal, {
          contentRef: D,
          type: o("WAWebModal.react").ModalTheme.EventCreation,
          onOverlayClick: We,
          ariaLabel: s._(/*BTDS*/ "Event creation"),
          children: d.jsxs(r("WAWebDrawer.react"), {
            xstyle: C.drawer,
            testid: void 0,
            children: [
              d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: Je,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                onCancel: qe,
              }),
              d.jsxs(r("WAWebDrawerBody.react"), {
                xstyle: [
                  C.drawerBody,
                  o("WAWebUISpacing").uiPadding.all16,
                  o("WAWebUISpacing").uiPadding.top0,
                ],
                ariaRole: "form",
                ariaLabel: s._(/*BTDS*/ "Event Creation"),
                children: [
                  d.jsx(
                    o("WAWebEventsCreateEventModalInputs.react").NameInput,
                    { title: L, placeholder: R, value: K, onChange: Q },
                  ),
                  d.jsx(
                    o("WAWebEventsCreateEventModalInputs.react")
                      .DescriptionInput,
                    { value: Y, onChange: J },
                  ),
                  d.jsx(o("WAWebText.react").WAWebTextMuted, {
                    marginTop: 12,
                    children: s._(/*BTDS*/ "Start date and time"),
                  }),
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: [o("WAWebUISpacing").uiMargin.start4, et],
                    dir: "ltr",
                    as: "section",
                    columnGap: 16,
                    children: [
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        basis: 0,
                        children: d.jsx(o("WAWebDateInput.react").DateInput, {
                          theme: "event",
                          onChange: ne,
                          value: te,
                          name: "event-date",
                          getDateBoundaries: Ee,
                        }),
                      }),
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        basis: 0,
                        children: d.jsx(o("WAWebTimeInput.react").TimeInput, {
                          theme: "event",
                          name: "event-time",
                          value: ae,
                          onChange: ie,
                        }),
                      }),
                    ],
                  }),
                  Qe,
                  $
                    ? d.jsx(
                        o("WAWebEventsCreateEventModalInputs.react")
                          .LocationInput,
                        { value: Ce, onChange: be },
                      )
                    : null,
                  Se != null
                    ? d.jsx(o("WAWebText.react").WAWebTextSmall, {
                        color: "secondary",
                        xstyle: o("WAWebUISpacing").uiMargin.bottom8,
                        children: s._(
                          /*BTDS*/ "Events with call links can't be more than one year in the future",
                        ),
                      })
                    : null,
                  d.jsx(
                    o("WAWebEventsCreateEventModalInputs.react").CallTypeInput,
                    {
                      value: Se,
                      required: c,
                      onChange: Re,
                      hideToggle: m != null && m.eventIsScheduledCall === !0,
                    },
                  ),
                  we &&
                    Se != null &&
                    d.jsxs(o("WAWebFlex.react").FlexRow, {
                      xstyle: o("WAWebUISpacing").uiPadding.vert10,
                      align: "center",
                      justify: "all",
                      children: [
                        d.jsx(o("WAWebFlex.react").FlexColumn, {
                          align: "stretch",
                          children: d.jsx(o("WAWebText.react").WAWebTextSmall, {
                            children: s._(/*BTDS*/ "Require approval to join"),
                          }),
                        }),
                        d.jsx(o("WAWebFlex.react").FlexItem, {
                          shrink: 0,
                          children: d.jsx(r("WDSSwitch.react"), {
                            "aria-label": r("fbs")._(
                              /*BTDS*/ "Require approval to join",
                            ),
                            value: Ie,
                            onChange: $e,
                            testid: void 0,
                          }),
                        }),
                      ],
                    }),
                  Xe
                    ? d.jsxs(o("WAWebFlex.react").FlexItem, {
                        xstyle: o("WAWebUISpacing").uiMargin.vert5,
                        children: [
                          d.jsx(
                            o("WAWebButton.react")
                              .WAWebButtonSecondaryDestructive,
                            {
                              alignSelf: "start",
                              onClick: ze,
                              children: s._(/*BTDS*/ "Cancel event"),
                            },
                          ),
                          d.jsx(o("WAWebText.react").WAWebTextSmall, {
                            color: "secondary",
                            xstyle: o("WAWebUISpacing").uiMargin.top8,
                            children: s._(
                              /*BTDS*/ "Attendees will be notified of your event update",
                            ),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    C.createEventButtonContainerWds,
                    o("WAWebUISpacing").uiMargin.top30,
                  ),
                  { children: Ze },
                ),
              ),
            ],
          }),
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
