__d(
  "WAWebSharePhoneNumberModal.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebLogRequestPhoneNumber",
    "WAWebModalManager",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebPhoneUtils",
    "WAWebSendSharePhoneNumberChatAction",
    "WAWebStateUtils",
    "WAWebUnblockLidUserModal.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhMessageChatParty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = function (t) {
        var e = o("WAWebChatCollection").ChatCollection.getActive();
        (e &&
          (t != null &&
            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                .CONSUMER,
              o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_NUMBER,
              t,
            ),
          o("WAWebSendSharePhoneNumberChatAction").sendSharePhoneNumber(
            o("WAWebStateUtils").unproxy(e),
          )),
          o("WAWebModalManager").ModalManager.close());
      },
      m = function (t) {
        var e = o("WAWebChatCollection").ChatCollection.getActive();
        e &&
          (t != null &&
            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                .CONSUMER,
              o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.DISMISS,
              t,
            ),
          o("WAWebModalManager").ModalManager.close());
      },
      p = function () {
        var e = o("WAWebFaqUrl").getPhoneNumberHidingFaqUrl();
        o("WAWebExternalLink.react").openExternalLink(e);
      },
      _ = u.jsx(r("WAWebClickableLink.react"), {
        onClick: p,
        children: s._(/*BTDS*/ "Learn more"),
      });
    function f(e) {
      var t = e.entryPoint;
      c(
        function () {
          t &&
            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                .CONSUMER,
              o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                .SHARE_PN_SHEET_APPEAR,
              t,
            );
        },
        [t],
      );
      var n = o("WAWebChatCollection").ChatCollection.getActive();
      if ((n == null ? void 0 : n.contact.isContactBlocked) === !0)
        return u.jsx(r("WAWebUnblockLidUserModal.react"), {
          contact: n.contact,
        });
      var a = s._(/*BTDS*/ "Your phone number is not shared in this chat"),
        i = s._(
          /*BTDS*/ "Businesses that have your phone number saved in their contacts will be able to see it on WhatsApp. {learnMoreLink}",
          [s._param("learnMoreLink", _)],
        ),
        l = s._(/*BTDS*/ "Share number"),
        p = s._(/*BTDS*/ "Not now");
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        onOK: function () {
          d(t);
        },
        okText: l,
        onCancel: function () {
          m(t);
        },
        title: a,
        subTitle: i,
        cancelText: p,
        displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        okButtonType: "secondary",
        testid: void 0,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.entryPoint,
        n = o("WAWebChatCollection").ChatCollection.getActive();
      (n &&
        n.contact.isContactBlocked &&
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebUnblockLidUserModal.react"), { contact: n.contact }),
        ),
        c(
          function () {
            t &&
              o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
                o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                  .CONSUMER,
                o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                  .SHARE_PN_SHEET_APPEAR,
                t,
              );
          },
          [t],
        ));
      var a = s._(/*BTDS*/ "Share phone number?"),
        i = s._(
          /*BTDS*/ "This business will be able to see your number and add you to their contacts. {learnMoreLink}",
          [s._param("learnMoreLink", _)],
        ),
        l = s._(/*BTDS*/ "Share number"),
        p = s._(/*BTDS*/ "Not now");
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        onOK: function () {
          d(t);
        },
        okText: l,
        onCancel: function () {
          m(t);
        },
        title: a,
        subTitle: i,
        cancelText: p,
        displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        okButtonType: "secondary",
        testid: void 0,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.entryPoint,
        n = e.mePnUser,
        a = s._(/*BTDS*/ "Your phone number is shared in this chat"),
        i = s._(/*BTDS*/ "This business can see your phone number."),
        l = r("WAWebFbtCommon")("OK"),
        c = s._(/*BTDS*/ "Learn more");
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        onOK: m,
        okText: l,
        onCancel: function () {
          (p(), m());
        },
        title: a,
        subTitle: i,
        cancelText: c,
        displayName: o("WAWebPhoneUtils").formatPhone(n.user),
        testid: void 0,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.SharePhoneNumberModal = f),
      (l.SharePhoneNumberRestrictedActionModal = g),
      (l.PostSharePhoneNumberModal = h));
  },
  226,
);
