__d(
  "WAWebGroupCallDropdownWithTrigger.react",
  [
    "WAWebDropdownV2.react",
    "WAWebGroupCallParticipantSelector.react",
    "WAWebPopoverContext.react",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCall.react",
    "WDSIconIcVideocam.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = { callDropdownShadow: { boxShadow: "xvktan5", $$css: !0 } };
    function p(e) {
      var t = e.chat,
        n = e.initialSubtext,
        a = e.isMissedCall,
        i = e.isVideo,
        l = e.logger,
        u = e.onDropdownClose,
        p = e.onDropdownOpen,
        _ = e.trigger,
        f = d(null),
        g = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        h = d(!1),
        y = i
          ? s.jsx(r("WDSIconIcVideocam.react"), {})
          : s.jsx(r("WDSIconIcCall.react"), {}),
        C = function (n) {
          o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
            t,
            n,
            a
              ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_MISSED
              : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED,
            o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .NOT_OPENED,
          );
        },
        b = c(function (e) {
          f.current = e;
        }, []);
      return s.jsxs(s.Fragment, {
        children: [
          _(b),
          s.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            xstyle: m.callDropdownShadow,
            controllerRef: g,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            target: f,
            maxHeight: 488,
            onOpen: function () {
              p == null || p();
            },
            onClose: function () {
              (h.current ||
                l.dismissChatThread(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE
                    .ADD_PARTICIPANT_PICKER,
                ),
                (h.current = !1),
                u == null || u());
            },
            children: s.jsx(
              r("WAWebGroupCallParticipantSelector.react"),
              {
                chat: t,
                icon: y,
                initialSubtext: n,
                isCallingDisabled: !1,
                isVideo: i,
                logger: l,
                onActionTaken: function () {
                  h.current = !0;
                },
                onCallStart: C,
              },
              t.id.toString(),
            ),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
