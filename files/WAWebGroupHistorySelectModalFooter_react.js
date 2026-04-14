__d(
  "WAWebGroupHistorySelectModalFooter.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSSwitch.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.use,
      m = c.useCallback,
      p = c.useEffect,
      _ = c.useEffectEvent,
      f = 25,
      g = { disclaimer: { paddingTop: "x1p57kb1", $$css: !0 } };
    function h(e) {
      var t = e.actionLabel,
        n = e.disclaimer,
        a = e.memberCount,
        i = e.onActionPress,
        l = e.ref,
        s = e.selectedContacts,
        c = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")),
        m = c.canShareGroupHistory,
        p = c.setShouldSendGroupHistory,
        _ = c.shouldSendGroupHistory,
        f =
          m &&
          o("WAWebGroupHistoryRestrictionHelper").hasUnrestrictedParticipants(
            s,
          );
      return u.jsxs("div", {
        ref: l,
        className:
          "x1n2onr6 x78zum5 xdt5ytf x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1ccr1t9 xpx74rz",
        children: [
          f &&
            u.jsx(r("CometPlaceholder.react"), {
              name: "group-history-message-count",
              fallback: null,
              children: u.jsx(y, { memberCount: a, onChange: p, value: _ }),
            }),
          u.jsx(r("WDSButton.react"), {
            testid: void 0,
            onPress: i,
            label: t,
            widthMode: "flexible",
          }),
          u.jsx(r("WDSText.react"), {
            xstyle: g.disclaimer,
            colorName: "contentDeemphasized",
            type: "Body3",
            children: n,
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.memberCount,
        a = e.onChange,
        i = e.value,
        l = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")),
        c = l.groupWid,
        g = l.messageCountPromise,
        h = l.selectedMessageCount,
        y = l.setSelectedMessageCount,
        C = _(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield g;
            e != null &&
              o(
                "WAWebGroupMemberAddingUserJourneyLogger",
              ).GroupMemberAddingUserJourneyLogger.footerDisplayed({
                groupHistoryMessagesCount: e,
                isGroupHistoryToggledOn: i,
              });
          }),
        );
      p(function () {
        C();
      }, []);
      var b = m(
          function (e, t) {
            (a(e),
              e
                ? o(
                    "WAWebGroupMemberAddingUserJourneyLogger",
                  ).GroupMemberAddingUserJourneyLogger.groupHistoryToggleOn({
                    groupHistoryMessagesCount: t,
                  })
                : o(
                    "WAWebGroupMemberAddingUserJourneyLogger",
                  ).GroupMemberAddingUserJourneyLogger.groupHistoryToggleOff({
                    groupHistoryMessagesCount: t,
                  }));
          },
          [a],
        ),
        v = m(
          function (e) {
            var t = h != null ? h : e;
            (o(
              "WAWebGroupMemberAddingUserJourneyLogger",
            ).GroupMemberAddingUserJourneyLogger.countChangeEntryPointClicked({
              groupHistoryMessagesCount: t,
            }),
              o("WAWebModalManager").ModalManager.openSupportModal(
                u.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
                  currentMessageCount: e,
                  groupWid: c,
                  selectedMessageCount: t,
                  onDone: function (t) {
                    (y(t),
                      b(!0, t),
                      o("WAWebModalManager").ModalManager.closeSupportModal());
                  },
                  onCancel: function () {
                    o("WAWebModalManager").ModalManager.closeSupportModal();
                  },
                }),
              ));
          },
          [c, b, h, y],
        );
      if (g == null) return null;
      var S = d(g);
      if (S === 0) return null;
      var R = o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(c),
        L = h != null ? h : S,
        E = R || S > f,
        k = R
          ? s._(/*BTDS*/ "recent messages")
          : s._(
              /*BTDS*/ '_j{"*":"{display_message_count} messages","_1":"1 message"}',
              [s._plural(L, "display_message_count")],
            ),
        I = E
          ? u.jsx(r("WDSTextualLink.react"), {
              onClick: function () {
                return v(S);
              },
              testid: void 0,
              textConfig: "Body2",
              children: k,
            })
          : k,
        T = R
          ? s._(
              /*BTDS*/ '_j{"*":"{message_history_label} Send {message_count_link} to the selected members.","_1":"{message_history_label} Send {message_count_link} to the selected member."}',
              [
                s._plural(t),
                s._param(
                  "message_history_label",
                  u.jsx(r("WDSText.react"), {
                    colorName: "contentDefault",
                    type: "Body2Emphasized",
                    children: s._(/*BTDS*/ "Message history:"),
                  }),
                ),
                s._param("message_count_link", I),
              ],
            )
          : s._(
              /*BTDS*/ '_j{"*":"{message_history_label} Send the last {message_count_link} to the selected members.","_1":"{message_history_label} Send the last {message_count_link} to the selected member."}',
              [
                s._plural(t),
                s._param(
                  "message_history_label",
                  u.jsx(r("WDSText.react"), {
                    colorName: "contentDefault",
                    type: "Body2Emphasized",
                    children: s._(/*BTDS*/ "Message history:"),
                  }),
                ),
                s._param("message_count_link", I),
              ],
            );
      return u.jsxs("div", {
        className: "x78zum5 x1qughib x6s0dn4 xvpt6g3",
        children: [
          u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body2",
            children: T,
          }),
          u.jsx(r("WDSSwitch.react"), {
            testid: void 0,
            value: i,
            onChange: function (t) {
              b(t, L);
            },
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
