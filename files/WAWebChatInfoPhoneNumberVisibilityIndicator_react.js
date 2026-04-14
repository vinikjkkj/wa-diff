__d(
  "WAWebChatInfoPhoneNumberVisibilityIndicator.react",
  [
    "fbt",
    "WAWebCagPhoneNumberPrivacyNux.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebModalManager",
    "WAWebPnhCagDailyUtils",
    "WAWebSharePhoneNumberModal.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPnhEntryPointType",
    "WDSIconIcDialpad.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.handleClick,
        n = e.phoneNumberIsShared,
        a = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          as: "span",
          children: s._(/*BTDS*/ "Phone number privacy"),
        }),
        i = s._(
          /*BTDS*/ "Your phone number is shared in this chat. Click to learn more.",
        ),
        l = s._(
          /*BTDS*/ "This chat has added privacy for your phone number. Click to learn more.",
        ),
        c = "phone_number_visibility_indicator",
        d = n ? i : l,
        m = {
          icon: u.jsx(r("WDSIconIcDialpad.react"), {}),
          title: a,
          testid: c,
          secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: d,
          }),
          onClick: t,
        };
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        babelHelpers.extends({}, m),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.chat,
        n = t.contact.shareOwnPn === !0,
        r = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        a = function () {
          if (n && r) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal,
                {
                  entryPoint: o("WAWebWamEnumPnhEntryPointType")
                    .PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY,
                  mePnUser: r,
                },
              ),
            );
            return;
          }
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal, {
              entryPoint: o("WAWebWamEnumPnhEntryPointType")
                .PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY,
            }),
          );
        };
      return u.jsx(c, { phoneNumberIsShared: n, handleClick: a });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.chat,
        r = !!((t = n.groupMetadata) != null && t.participants.iAmAdmin()),
        a = function () {
          var e,
            t = (e = n.groupMetadata) == null ? void 0 : e.parentGroup;
          (t &&
            o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(
              t,
              o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType
                .PNH_INDICATOR_CLICKS_INFO_SCREEN,
            ),
            o("WAWebModalManager").ModalManager.open(
              r
                ? u.jsx(
                    o("WAWebCagPhoneNumberPrivacyNux.react")
                      .CagPhoneNumberSharedNux,
                    {},
                  )
                : u.jsx(
                    o("WAWebCagPhoneNumberPrivacyNux.react")
                      .CagPhoneNumberHiddenNux,
                    {},
                  ),
            ));
        };
      return u.jsx(c, { phoneNumberIsShared: r, handleClick: a });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PhoneNumberVisibilityIndicator1On1 = d),
      (l.PhoneNumberVisibilityIndicatorCag = m));
  },
  226,
);
