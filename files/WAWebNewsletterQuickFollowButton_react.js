__d(
  "WAWebNewsletterQuickFollowButton.react",
  [
    "fbt",
    "WAWebFollowNewsletter",
    "WAWebModalManager",
    "WAWebNewsletterUnsubscribeAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WDSButton.react",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.confirmUnfollow,
        n = e.following,
        a = e.hasBorder,
        i = a === void 0 ? !1 : a,
        l = e.loggingOptions,
        d = e.newsletter,
        m = e.onFollowAction,
        p = e.onFollowSuccess,
        _ = e.onUnfollowAction,
        f = e.ref,
        g = c(!1),
        h = g[0],
        y = g[1],
        C = r("useWAWebUnmountSignal")(),
        b = function () {
          !C.aborted && y(!1);
        },
        v = function (t) {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: t, visibile: !1 }),
          );
        },
        S = function (r) {
          if ((r.preventDefault(), r.stopPropagation(), y(!0), !n)) {
            (m == null || m(),
              o("WAWebFollowNewsletter")
                .followDirectoryNewsletter(d, l)
                .then(function () {
                  (p == null || p(),
                    v(
                      s._(/*BTDS*/ "Following {channelName}", [
                        s._param("channelName", d.name),
                      ]),
                    ));
                })
                .finally(b));
            return;
          }
          if ((_ == null || _(), t)) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                { chat: d, loggingOptions: l, onClose: b },
              ),
            );
            return;
          }
          o("WAWebNewsletterUnsubscribeAction")
            .unsubscribeFromNewsletterAction(
              d,
              babelHelpers.extends({ deleteLocalModels: !1 }, l),
            )
            .then(function () {
              v(
                o(
                  "WAWebUnfollowNewsletterConfirmationModal.react",
                ).getUnfollowNewsletterAnnouncement(d),
              );
            })
            .finally(b);
        },
        R = n ? s._(/*BTDS*/ "Following") : s._(/*BTDS*/ "Follow"),
        L = n ? "outline" : "tonal";
      return u.jsx(r("WDSButton.react"), {
        onPress: S,
        ref: f,
        testid: void 0,
        loading: h,
        label: R,
        type: "default",
        variant: L,
        size: "small",
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
