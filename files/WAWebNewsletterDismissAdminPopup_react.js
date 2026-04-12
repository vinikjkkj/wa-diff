__d(
  "WAWebNewsletterDismissAdminPopup.react",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebDemoteNewsletterAdminAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterUnsubscribeAction",
    "WAWebParticipantListUtils",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contact,
            r = e.isMe,
            a = e.newsletter,
            i = e.shouldUnfollowNewsletter,
            l = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (o("WAWebModalManager").closeModalManager(),
                    yield m({
                      newsletter: a,
                      contact: t,
                      isMe: r,
                      shouldUnfollowNewsletter: i,
                    }));
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            s =
              r && i
                ? o(
                    "WAWebNewsletterUnsubscribeAction",
                  ).unsubscribeFromNewsletterAction(a, {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_PROFILE,
                  })
                : o(
                    "WAWebDemoteNewsletterAdminAction",
                  ).demoteNewsletterAdminAction(a, t);
          try {
            yield s;
            var u = o("WAWebFrontendContactGetters").getIsMyContact(t)
              ? o("WAWebParticipantListUtils").getFirstNameForContact(t)
              : o("WAWebContactGetters").getPushname(t);
            (o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: r
                  ? o(
                      "WAWebCommonNewsletterStrings",
                    ).getYouAreNoLongerAnAdminText()
                  : o(
                      "WAWebCommonNewsletterStrings",
                    ).getSomeoneIsNoLongerAnAdminText(
                      u === ""
                        ? o("WAWebFrontendContactGetters").getFormattedUser(t)
                        : u,
                    ),
              }),
            ),
              o("WAWebModalManager").closeModalManager());
          } catch (e) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebNewsletterErrorPopups.react")
                  .NewsletterCouldNotDismissAdminPopup,
                { onOK: l, contact: t },
              ),
              { transition: "modal-flow" },
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      var a = t.contact,
        i = t.isMe,
        l = t.newsletter,
        u = r("useWAWebToggle")(!1),
        p = u[0],
        _ = u[1],
        f = i
          ? s._(/*BTDS*/ "Dismiss yourself as channel admin?")
          : s._(
              /*BTDS*/ "Dismiss {admin-dismissal-contact-first-name} as admin?",
              [
                s._param(
                  "admin-dismissal-contact-first-name",
                  o("WAWebParticipantListUtils").getFirstNameForContact(a),
                ),
              ],
            ),
        g = i
          ? s._(
              /*BTDS*/ "You won't be able to send updates or change the channel's profile and settings.",
            )
          : s._(
              /*BTDS*/ "They won't be able to send updates or change the channel's profile and settings. They will remain a follower.",
            ),
        h = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield m({
              isMe: i,
              newsletter: l,
              contact: a,
              shouldUnfollowNewsletter: p,
            });
          }),
          [l, a, i, p],
        ),
        y = i
          ? c.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 8,
              paddingTop: 16,
              paddingBottom: 16,
              xstyle: o("WAWebUISpacing").uiMargin.start3,
              alignSelf: "start",
              align: "center",
              children: [
                c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  id: "admin-dismissal-unfollow-checkbox",
                  testid: void 0,
                  checked: p,
                  onChange: _,
                }),
                c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                  htmlFor: "admin-dismissal-unfollow-checkbox",
                  size: "16",
                  className: (e || (e = r("stylex")))(
                    o("WAWebUISpacing").uiMargin.horiz10,
                  ),
                  children: o(
                    "WAWebCommonNewsletterStrings",
                  ).getUnfollowNewsletterText(),
                }),
              ],
            })
          : null;
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: f,
        onOK: h,
        onCancel: o("WAWebModalManager").closeModalManager,
        children: [
          c.jsx(o("WAWebText.react").WAWebTextTitle, {
            color: "secondary",
            children: g,
          }),
          y,
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
