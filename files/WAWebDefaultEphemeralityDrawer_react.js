__d(
  "WAWebDefaultEphemeralityDrawer.react",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAfterReadNux.react",
    "WAWebAfterReadUtils",
    "WAWebClickableLink.react",
    "WAWebContactCollection",
    "WAWebDisappearingMessageChatPickerWamEvent",
    "WAWebDisappearingModeSettingChangeWamEvent",
    "WAWebDisappearingModeSettingEventsWamEvent",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEphemeralityDurations",
    "WAWebEphemeralityResolver",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebMultiSelectDdm.react",
    "WAWebNux",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebSetDisappearingModePrivacyAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumDisappearingModeSettingEventNameType",
    "WAWebWamEnumDmChatPickerEntryPointType",
    "WAWebWamEnumDmChatPickerEventNameType",
    "WAWebWamEnumPreviousEphemeralityType",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useState,
      g = {
        learnMoreLink: {
          display: "x1rg5ohu",
          marginTop: "x1e1m7ul",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.entryPoint,
        a = t.onClose,
        i = t.ref;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[DM] DDM drawer opened",
          ])),
      );
      var l =
          o("WAWebABProps").getABPropConfigValue("ddm_reversed_options") ||
          o("WAWebAfterReadUtils").isAfterReadOptionAvailable(),
        c = _(function () {
          var e,
            t,
            n = o(
              "WAWebEphemeralityResolver",
            ).getDisappearingModeSettingForUser(
              o("WAWebContactCollection").ContactCollection.getMeContact(),
            );
          return {
            duration: (e = n == null ? void 0 : n.duration) != null ? e : 0,
            settingTimestamp:
              (t = n == null ? void 0 : n.settingTimestamp) != null ? t : 0,
          };
        }, []),
        m = f({ duration: c.duration, settingTimestamp: c.settingTimestamp }),
        h = m[0],
        y = m[1],
        C = h.duration > 0;
      (p(function () {
        new (o(
          "WAWebDisappearingModeSettingEventsWamEvent",
        ).DisappearingModeSettingEventsWamEvent)({
          disappearingModeSettingEventName: o(
            "WAWebWamEnumDisappearingModeSettingEventNameType",
          ).DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE
            .DEFAULT_MESSAGE_TIMER_OPEN,
          disappearingModeEntryPoint: n,
          isAfterRead: o("WAWebAfterReadUtils").isAfterReadDuration(c.duration),
        }).commit();
      }, []),
        p(
          function () {
            C &&
              new (o(
                "WAWebDisappearingMessageChatPickerWamEvent",
              ).DisappearingMessageChatPickerWamEvent)({
                dmChatPickerEntryPoint: o(
                  "WAWebWamEnumDmChatPickerEntryPointType",
                ).DM_CHAT_PICKER_ENTRY_POINT_TYPE.DEFAULT_MODE_SETTING,
                dmChatPickerEventName: o(
                  "WAWebWamEnumDmChatPickerEventNameType",
                ).DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_LINK_IMPRESSION,
                ephemeralityDuration: h.duration,
              }).commit();
          },
          [C],
        ));
      var b = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        v = b[0];
      function S(e) {
        y({ duration: e, settingTimestamp: o("WATimeUtils").unixTime() });
      }
      function R() {
        var e = c.duration,
          t = c.settingTimestamp,
          r = h.duration,
          a = o("WAWebAfterReadUtils").isAfterReadDuration(r),
          i;
        (e > 0 &&
          (i = o("WAWebAfterReadUtils").isAfterReadDuration(e)
            ? o("WAWebWamEnumPreviousEphemeralityType")
                .PREVIOUS_EPHEMERALITY_TYPE.AFTER_READ
            : o("WAWebWamEnumPreviousEphemeralityType")
                .PREVIOUS_EPHEMERALITY_TYPE.DISAPPEARING_MESSAGE),
          o("WAWebSetDisappearingModePrivacyAction")
            .setDisappearingMode(r)
            .then(function () {
              new (o(
                "WAWebDisappearingModeSettingChangeWamEvent",
              ).DisappearingModeSettingChangeWamEvent)({
                disappearingModeEntryPoint: n,
                lastToggleTimestamp: t,
                newEphemeralityDuration: a ? void 0 : r,
                previousEphemeralityDuration: e,
                isAfterRead: a,
                afterReadDuration: a ? r : void 0,
                previousEphemeralityType: i,
                isSuccess: !0,
              }).commit();
            })
            .catch(function () {
              (new (o(
                "WAWebDisappearingModeSettingChangeWamEvent",
              ).DisappearingModeSettingChangeWamEvent)({
                disappearingModeEntryPoint: n,
                lastToggleTimestamp: t,
                newEphemeralityDuration: a ? void 0 : r,
                previousEphemeralityDuration: e,
                isAfterRead: a,
                afterReadDuration: a ? r : void 0,
                previousEphemeralityType: i,
                isSuccess: !1,
              }).commit(),
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "DDM duration change failed. Entry: ",
                        " Previous: ",
                        " New: ",
                        "",
                      ])),
                    n,
                    e,
                    r,
                  )
                  .sendLogs("DDM-change-fail"),
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Failed to change disappearing messages duration",
                    ),
                  }),
                ));
            }));
      }
      function L() {
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebMultiSelectDdm.react"), {
            initialDuration: h.duration,
            entryPoint: o("WAWebWamEnumDmChatPickerEntryPointType")
              .DM_CHAT_PICKER_ENTRY_POINT_TYPE.DEFAULT_MODE_SETTING,
          }),
        );
      }
      function E() {
        new (o(
          "WAWebDisappearingModeSettingEventsWamEvent",
        ).DisappearingModeSettingEventsWamEvent)({
          disappearingModeSettingEventName: o(
            "WAWebWamEnumDisappearingModeSettingEventNameType",
          ).DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.LEARN_MORE_CLICK,
          disappearingModeEntryPoint: n,
          isAfterRead: o("WAWebAfterReadUtils").isAfterReadDuration(h.duration),
        }).commit();
      }
      function k(e) {
        (R(),
          new (o(
            "WAWebDisappearingModeSettingEventsWamEvent",
          ).DisappearingModeSettingEventsWamEvent)({
            disappearingModeSettingEventName: o(
              "WAWebWamEnumDisappearingModeSettingEventNameType",
            ).DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE
              .DEFAULT_MESSAGE_TIMER_EXIT,
            disappearingModeEntryPoint: n,
            isAfterRead: o("WAWebAfterReadUtils").isAfterReadDuration(
              h.duration,
            ),
          }).commit(),
          a(e));
      }
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "default-ephemerality",
        },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: s._(/*BTDS*/ "Default message timer"),
            onBack: k,
            focusBackOrCancel: !0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: [
                d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  margin: [32, 0, 16, 0],
                  children: s._(
                    /*BTDS*/ "Start new chats with disappearing messages",
                  ),
                }),
                d.jsx("div", {
                  role: "radiogroup",
                  "aria-label": s._(/*BTDS*/ "Default message timer"),
                  children: o("WAWebEphemeralityDurations")
                    .getDefaultEphemeralityDurations(l)
                    .map(function (e) {
                      var t = e.label,
                        n = e.value;
                      return d.jsx(
                        r("WAWebPrivacyVisibilityOption.react"),
                        {
                          text: t,
                          selected: h.duration === n,
                          testid: void 0,
                          onClick: function () {
                            return S(n);
                          },
                        },
                        n,
                      );
                    }),
                }),
                o("WAWebAfterReadUtils").isAfterReadOptionAvailable() &&
                  d.jsxs(d.Fragment, {
                    children: [
                      d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                        margin: [24, 0, 16, 0],
                        children: s._(/*BTDS*/ "After reading"),
                      }),
                      d.jsx(o("WAWebText.react").WAWebTextMuted, {
                        margin: [0, 0, 8, 0],
                        children: s._(
                          /*BTDS*/ "New messages in new chats will disappear after they're sent or read.",
                        ),
                      }),
                      d.jsx("div", {
                        role: "radiogroup",
                        "aria-label": s._(/*BTDS*/ "After reading timer"),
                        children: o("WAWebEphemeralityDurations")
                          .getAfterReadEphemeralityDurations(l ? "desc" : "asc")
                          .map(function (e) {
                            var t = e.label,
                              n = e.value;
                            return d.jsx(
                              r("WAWebPrivacyVisibilityOption.react"),
                              {
                                text: t,
                                selected: h.duration === n,
                                testid: void 0,
                                onClick: function () {
                                  (S(n),
                                    v &&
                                      o(
                                        "WAWebAfterReadUtils",
                                      ).isAfterReadDuration(n) &&
                                      o("WAWebModalManager").ModalManager.open(
                                        d.jsx(r("WAWebAfterReadNux.react"), {
                                          duration: n,
                                        }),
                                      ));
                                },
                              },
                              n,
                            );
                          }),
                      }),
                    ],
                  }),
                d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  margin: [16, 0],
                  children: [
                    C
                      ? d.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(
                            /*BTDS*/ "This does not affect your existing chats. Apply this message timer to existing chats {=m1}.",
                            [
                              s._implicitParam(
                                "=m1",
                                d.jsx(r("WAWebClickableLink.react"), {
                                  onClick: L,
                                  tabIndex: 0,
                                  children: s._(/*BTDS*/ "by selecting them"),
                                }),
                              ),
                            ],
                          ),
                        })
                      : d.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(
                            /*BTDS*/ "When turned on, all new individual chats will start with disappearing messages set to the duration you select. This setting will not affect your existing chats.",
                          ),
                        }),
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
                      xstyle: g.learnMoreLink,
                      onClick: E,
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
