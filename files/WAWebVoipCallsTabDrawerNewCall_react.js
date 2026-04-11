__d(
  "WAWebVoipCallsTabDrawerNewCall.react",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebNoop",
    "WAWebSelectGroupParticipantsDrawer.react",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSButton.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        cancelBtnContainer: { display: "x1jfb8zj x1eww196", $$css: !0 },
        callButtonsContainer: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
        buttonRow: { rowGap: "x1qvou4u", columnGap: "x1s70e7g", $$css: !0 },
      };
    function m(e) {
      var t = e.onBack,
        a = e.ref,
        i =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "group_call_max_participants",
          ) - 1,
        l = c([]),
        m = l[0],
        p = l[1],
        _ = u.jsxs(o("WAWebFlex.react").FlexRow, {
          wrap: "wrap",
          justify: "center",
          xstyle: d.buttonRow,
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: d.cancelBtnContainer,
              children: u.jsx(r("WDSButton.react"), {
                label: r("WAWebFbtCommon")("Cancel"),
                variant: "borderless",
                onPress: t,
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.buttonRow,
              children: [
                u.jsx(r("WAWebFlexItem.react"), {
                  children: u.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcCallFilled.react"),
                    label: s._(/*BTDS*/ "Audio"),
                    variant: "filled",
                    onPress: function () {
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          (yield o(
                            "WAWebVoipStartCall",
                          ).startWAWebVoipGroupCallFromContacts(
                            m,
                            !1,
                            o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                              .CALLS_TAB_NEW_CALL,
                            o("WAWebWamEnumLobbyEntryPointType")
                              .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                          ),
                            t == null || t());
                        },
                      )();
                    },
                  }),
                }),
                u.jsx(r("WAWebFlexItem.react"), {
                  children: u.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcVideocamFilled.react"),
                    label: s._(/*BTDS*/ "Video"),
                    variant: "filled",
                    onPress: function () {
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          (yield o(
                            "WAWebVoipStartCall",
                          ).startWAWebVoipGroupCallFromContacts(
                            m,
                            !0,
                            o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                              .CALLS_TAB_NEW_CALL,
                            o("WAWebWamEnumLobbyEntryPointType")
                              .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                          ),
                            t == null || t());
                        },
                      )();
                    },
                  }),
                }),
              ],
            }),
          ],
        });
      return u.jsx(r("WAWebSelectGroupParticipantsDrawer.react"), {
        ref: a,
        testid: void 0,
        header: s._(/*BTDS*/ "New call"),
        selectionSizeLimit: i,
        participants: m,
        errorToastOnAddParticipantLimit: s._(
          /*BTDS*/ '_j{"*":"Can\'t add more than {max-participants-in-call}"}',
          [s._param("max-participants-in-call", i, [0, i])],
        ),
        nextBtn: _,
        nextBtnContainerXstyle: d.callButtonsContainer,
        onChange: p,
        onKeyboardEnter: r("WAWebNoop"),
        onBack: t,
        onCancel: t,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
