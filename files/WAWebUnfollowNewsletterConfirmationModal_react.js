__d(
  "WAWebUnfollowNewsletterConfirmationModal.react",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterUnsubscribeAction",
    "WAWebNewsletterWamoSubUtils",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "cr:1343",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p =
        n("cr:1343") == null
          ? void 0
          : n("cr:1343").WamoSubManagementWarningPopup;
    function _(e) {
      return s._(/*BTDS*/ "Unfollowing {newsletterName}", [
        s._param("newsletterName", e.name),
      ]);
    }
    function f(e) {
      var t = e.chat,
        n = e.loggingOptions,
        a = e.onClose,
        i = m(!1),
        l = i[0],
        c = i[1],
        f = d(
          function () {
            (o("WAWebModalManager").ModalManager.close(), a == null || a());
          },
          [a],
        ),
        h = d(function () {
          var e = o("WAWebActionToast.react").genId();
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Failed to unfollow channel"),
              id: e,
            }),
          );
        }, []),
        y = d(
          function () {
            (c(!0),
              o("WAWebNewsletterUnsubscribeAction")
                .unsubscribeFromNewsletterAction(
                  t,
                  babelHelpers.extends({ deleteLocalModels: !1 }, n),
                )
                .catch(function () {
                  h();
                })
                .finally(function () {
                  (o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: _(t),
                      visibile: !1,
                    }),
                  ),
                    f(),
                    c(!1));
                }));
          },
          [t, n, h, f],
        ),
        C =
          o("WAWebNewsletterWamoSubUtils").iHavePaidSubscription(
            t.newsletterMetadata,
          ) &&
          o("WAWebNewsletterGatingUtils").isWamoSubConsumerExperienceEnabled();
      return C && p
        ? u.jsx(p, {})
        : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            ariaLabel: g(!1, t),
            onOK: y,
            okText: r("WAWebFbtCommon")("Unfollow"),
            okDisabled: l,
            cancelDisabled: l,
            okSpinner: l,
            onCancel: f,
            onOverlayClick: f,
            children: u.jsxs(o("WAWebText.react").WAWebTextTitle, {
              children: [" ", g(!0, t)],
            }),
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      var n = e
        ? u.jsx(o("WAWebName.react").Name, { chat: t, titlify: !0 })
        : t.name;
      return s._(
        /*BTDS*/ 'Are you sure you want to unfollow "{channel_name}"?',
        [s._param("channel_name", n)],
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.getUnfollowNewsletterAnnouncement = _),
      (l.UnfollowNewsletterConfirmationModal = f));
  },
  226,
);
