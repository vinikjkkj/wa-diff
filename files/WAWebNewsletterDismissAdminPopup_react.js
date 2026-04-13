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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(21),
        i = t.contact,
        l = t.isMe,
        u = t.newsletter,
        d = r("useWAWebToggle")(!1),
        p = d[0],
        _ = d[1],
        f;
      a[0] !== i || a[1] !== l
        ? ((f = l
            ? s._(/*BTDS*/ "Dismiss yourself as channel admin?")
            : s._(
                /*BTDS*/ "Dismiss {admin-dismissal-contact-first-name} as admin?",
                [
                  s._param(
                    "admin-dismissal-contact-first-name",
                    o("WAWebParticipantListUtils").getFirstNameForContact(i),
                  ),
                ],
              )),
          (a[0] = i),
          (a[1] = l),
          (a[2] = f))
        : (f = a[2]);
      var g = f,
        h;
      a[3] !== l
        ? ((h = l
            ? s._(
                /*BTDS*/ "You won't be able to send updates or change the channel's profile and settings.",
              )
            : s._(
                /*BTDS*/ "They won't be able to send updates or change the channel's profile and settings. They will remain a follower.",
              )),
          (a[3] = l),
          (a[4] = h))
        : (h = a[4]);
      var y = h,
        C;
      a[5] !== i || a[6] !== l || a[7] !== u || a[8] !== p
        ? ((C = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield m({
                isMe: l,
                newsletter: u,
                contact: i,
                shouldUnfollowNewsletter: p,
              });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[5] = i),
          (a[6] = l),
          (a[7] = u),
          (a[8] = p),
          (a[9] = C))
        : (C = a[9]);
      var b = C,
        v;
      a[10] !== l || a[11] !== p || a[12] !== _
        ? ((v = l
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
            : null),
          (a[10] = l),
          (a[11] = p),
          (a[12] = _),
          (a[13] = v))
        : (v = a[13]);
      var S = v,
        R;
      a[14] !== y
        ? ((R = c.jsx(o("WAWebText.react").WAWebTextTitle, {
            color: "secondary",
            children: y,
          })),
          (a[14] = y),
          (a[15] = R))
        : (R = a[15]);
      var L;
      return (
        a[16] !== b || a[17] !== R || a[18] !== g || a[19] !== S
          ? ((L = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: g,
              onOK: b,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: [R, S],
            })),
            (a[16] = b),
            (a[17] = R),
            (a[18] = g),
            (a[19] = S),
            (a[20] = L))
          : (L = a[20]),
        L
      );
    }
    l.default = _;
  },
  226,
);
