__d(
  "WAWebContactsAndGroupsContactRowActions",
  [
    "fbt",
    "WAWebContactsAndGroupsContactActions",
    "WAWebContactsAndGroupsMessageAction",
    "WAWebContactsAndGroupsStatusActions",
    "WAWebShouldShowCallButtons",
    "WDSIconIcCall.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcStatus.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var a = {
        Icon: r("WDSIconWdsIcChat.react"),
        buttonTestid: "contacts-and-groups-contact-message-button",
        disabled: !1,
        label: c(),
        menuTestid: "contacts-and-groups-contact-message-item",
        onPress: function () {
          return o(
            "WAWebContactsAndGroupsMessageAction",
          ).openContactsAndGroupsMessage(e);
        },
      };
      if (!t || !o("WAWebShouldShowCallButtons").canCallContact(e)) return [a];
      var i = {
        Icon: r("WDSIconIcCall.react"),
        buttonTestid: "contacts-and-groups-contact-voice-call",
        disabled: n,
        label: s._(/*BTDS*/ ""),
        menuTestid: "contacts-and-groups-contact-voice-call-item",
        onPress: function () {
          return o(
            "WAWebContactsAndGroupsContactActions",
          ).startVoiceCallFromContactsAndGroups(e);
        },
      };
      return [a, i];
    }
    function u(e, t) {
      return {
        Icon: r("WDSIconWdsIcStatus.react"),
        buttonTestid: "contacts-and-groups-contact-view-status",
        disabled: !1,
        label: s._(/*BTDS*/ ""),
        menuTestid: "contacts-and-groups-contact-view-status-item",
        onPress: function () {
          return o(
            "WAWebContactsAndGroupsStatusActions",
          ).viewContactsAndGroupsStatus(e, t);
        },
      };
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    ((l.getContactRowActions = e), (l.getContactViewStatusAction = u));
  },
  226,
);
