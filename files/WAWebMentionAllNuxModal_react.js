__d(
  "WAWebMentionAllNuxModal.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.chat,
        i = r("useWAWebFocusOnMount")(),
        l = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        c = function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "info_flow",
                    chat: a,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.Notifications,
                  }
                : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: a,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.Notifications,
                  }),
              {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ));
        },
        d = o("WAWebABProps").getABPropConfigValue(
          "admin_only_mention_everyone_group_size",
        ),
        m =
          (t =
            (n = a.groupMetadata) == null || (n = n.participants) == null
              ? void 0
              : n.length) != null
            ? t
            : 0,
        p = m >= d;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "mention-all-nux" },
        ref: i,
        onOK: l,
        okText: r("WAWebFbtCommon")("Close"),
        onOverlayClick: l,
        testid: void 0,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "start",
              alignSelf: "stretch",
              justify: "start",
              paddingBottom: 8,
              children: u.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Mention all"),
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: p
                  ? s._(
                      /*BTDS*/ "In this chat, only admins can notify all members of an important message. You can mute \u0040all in {notification_settings_link}.",
                      [
                        s._param(
                          "notification_settings_link",
                          u.jsx(r("WDSTextualLink.react"), {
                            onClick: c,
                            children: s._(/*BTDS*/ "notification settings"),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "Notify all members of an important message. You can mute \u0040all in {notification_settings_link}.",
                      [
                        s._param(
                          "notification_settings_link",
                          u.jsx(r("WDSTextualLink.react"), {
                            onClick: c,
                            children: s._(/*BTDS*/ "notification settings"),
                          }),
                        ),
                      ],
                    ),
              }),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
