__d(
  "WAWebButterbar.react",
  [
    "WALogger",
    "WAWebAlertBatteryIcon.react",
    "WAWebAlertComputerIcon.react",
    "WAWebAlertIcon.react",
    "WAWebAlertNoticeIcon.react",
    "WAWebAlertNotificationIcon.react",
    "WAWebAlertPhoneIcon.react",
    "WAWebAlertUpdateIcon.react",
    "WAWebAlertUpdatePrimaryIcon.react",
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebBanner.react",
    "WAWebBusinessAdvertiseIcon.react",
    "WAWebCheckboxRoundCheckedIcon.react",
    "WAWebCollectionsFolderIcon.react",
    "WAWebInfoFilledGreenCircleIcon.react",
    "WAWebOfflineMessageLoadIcon.react",
    "WAWebReceiptIcon.react",
    "WAWebStorefrontFilledIcon.react",
    "WAWebThemeContext",
    "WAWebWarningIcon.react",
    "WAWebWarningOutlineIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState,
      p = {
        computer: o("WAWebAlertComputerIcon.react").AlertComputerIcon,
        phone: o("WAWebAlertPhoneIcon.react").AlertPhoneIcon,
        notification: o("WAWebAlertNotificationIcon.react")
          .AlertNotificationIcon,
        announcement: o("WAWebAlertIcon.react").AlertIcon,
        updateNotification: o("WAWebAlertUpdateIcon.react").AlertUpdateIcon,
        updateWarning: o("WAWebAlertUpdateIcon.react").AlertUpdateIcon,
        battery: o("WAWebAlertBatteryIcon.react").AlertBatteryIcon,
        update: o("WAWebAlertUpdateIcon.react").AlertUpdateIcon,
        notice: o("WAWebAlertNoticeIcon.react").AlertNoticeIcon,
        fatal: o("WAWebAlertIcon.react").AlertIcon,
        generalAlert: o("WAWebAlertIcon.react").AlertIcon,
        nuxGreen: o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
        nuxBlue: o("WAWebCollectionsFolderIcon.react").CollectionsFolderIcon,
        updatePrimaryDevice: o("WAWebAlertUpdatePrimaryIcon.react")
          .AlertUpdatePrimaryIcon,
        featureAlert: o("WAWebInfoFilledGreenCircleIcon.react")
          .InfoFilledGreenCircleIcon,
        resumeProgress: o("WAWebOfflineMessageLoadIcon.react")
          .OfflineMessageLoadIcon,
        invalidPoll: o("WAWebWarningIcon.react").WarningIcon,
        adActionInfo: o("WAWebAnnouncementSpeakerIcon.react")
          .AnnouncementSpeakerIcon,
        adActionWarning: o("WAWebWarningIcon.react").WarningIcon,
        orderExpansion: o("WAWebReceiptIcon.react").ReceiptIcon,
        quickPromotion: o("WAWebBusinessAdvertiseIcon.react")
          .BusinessAdvertiseIcon,
        brigadingWarning: o("WAWebWarningIcon.react").WarningIcon,
        brigadingNotification: o("WAWebCheckboxRoundCheckedIcon.react")
          .CheckboxRoundCheckedIcon,
        reachoutTimelockedWarning: o("WAWebWarningOutlineIcon.react")
          .WarningOutlineIcon,
      };
    function _(e) {
      switch (e) {
        case "phone":
        case "invalidPoll":
        case "fatal":
        case "generalAlert":
        case "brigadingWarning":
        case "reachoutTimelockedWarning":
          return "warning";
        default:
          return "default";
      }
    }
    function f(e) {
      return p[e];
    }
    function g(t) {
      var n,
        r = o("WAWebThemeContext").useIsDarkTheme(),
        a = m(null),
        i = a[0],
        l = a[1],
        s = t.action,
        c = t.customIcons,
        p = t.testid,
        g = t.textTestid;
      return (
        d(
          function () {
            if (c == null) {
              l(null);
              return;
            }
            var t = r ? c.iconDark : c.iconLight;
            if (t == null) {
              l(null);
              return;
            }
            var n = c.description,
              a;
            try {
              var i = new Blob([t]);
              ((a = window.URL.createObjectURL(i)), l({ src: a, altText: n }));
            } catch (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ButterBar: Could not create a blob URL",
                  ])),
              );
            }
            return function () {
              a != null && window.URL.revokeObjectURL(a);
            };
          },
          [r, l, c],
        ),
        u.jsx(o("WAWebBanner.react").WAWebBanner, {
          type: _(t.type),
          title: t.title,
          text: (n = t.subtitleText) != null ? n : t.text,
          actionText: t.actionText,
          icon: i ? { type: "custom", customIcon: i } : { icon: f(t.type) },
          onClick: s,
          onDismiss: t.onDismiss,
          textTestid: g,
          testid: void 0,
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
