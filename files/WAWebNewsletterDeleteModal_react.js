__d(
  "WAWebNewsletterDeleteModal.react",
  [
    "fbt",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebModalManager",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterDeleteAction",
    "WAWebUserConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumInteractionSurface",
    "WAWebWamEnumThreadType",
    "react",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = function () {
        return s._(
          /*BTDS*/ "To delete, confirm your country code and enter your phone number.",
        );
      },
      _ = function () {
        return s._(/*BTDS*/ "To delete, confirm your email.");
      },
      f = function () {
        return s._(/*BTDS*/ "Delete");
      };
    function g(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, ["name"]);
      (m(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .DELETE_CHANNEL_PHONE_NUMBER_CONFIRM,
        );
      }, []),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          function () {
            r("WAWebEnforcementActionLogging").logDismissModalClick();
          },
        ));
      var a = d(
          function () {
            (o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.log({
              channelCoreEventType: o("WAWebWamEnumChannelEventType")
                .CHANNEL_EVENT_TYPE.DELETE,
              cid: t.id,
              eventSurface: o("WAWebWamEnumChannelEventSurface")
                .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
            }),
              o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
              o("WAWebModalManager").ModalManager.close());
          },
          [t.id],
        ),
        i = [
          {
            action: function () {
              return (
                r(
                  "WAWebEnforcementActionLogging",
                ).logChannelDeletePhoneNumberConfirmClick(),
                o("WAWebNewsletterDeleteAction").deleteNewsletterAction(t)
              );
            },
            errorMessage: s._(
              /*BTDS*/ "The channel couldn't be deleted. Please try again.",
            ),
          },
        ],
        l = s._(/*BTDS*/ 'You deleted your channel "{channel-name}"', [
          s._param(
            "channel-name",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.name }),
          ),
        ]),
        c = {
          surface: "channel-delete-page",
          extras: {
            channelWid: t.id,
            threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
          },
        };
      return u.jsx(r("WAWebUserConfirmationModal.react"), {
        actions: i,
        actionType: "solid-warning",
        actionText: f(),
        emailContentText: _(),
        phoneContentText: p(),
        successText: l,
        onCompletion: a,
        tsNavigationData: c,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
