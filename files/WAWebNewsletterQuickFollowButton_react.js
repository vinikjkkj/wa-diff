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
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.confirmUnfollow,
        a = e.following,
        i = e.hasBorder,
        l = e.loggingOptions,
        d = e.newsletter,
        p = e.onFollowAction,
        _ = e.onFollowSuccess,
        f = e.onUnfollowAction,
        g = e.ref,
        h = c(!1),
        y = h[0],
        C = h[1],
        b = r("useWAWebUnmountSignal")(),
        v;
      t[0] !== b.aborted
        ? ((v = function () {
            !b.aborted && C(!1);
          }),
          (t[0] = b.aborted),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R = m,
        L;
      t[2] !== n ||
      t[3] !== a ||
      t[4] !== l ||
      t[5] !== d ||
      t[6] !== p ||
      t[7] !== _ ||
      t[8] !== f ||
      t[9] !== S
        ? ((L = function (t) {
            if ((t.preventDefault(), t.stopPropagation(), C(!0), !a)) {
              (p == null || p(),
                o("WAWebFollowNewsletter")
                  .followDirectoryNewsletter(d, l)
                  .then(function () {
                    (_ == null || _(),
                      R(
                        s._(/*BTDS*/ "Following {channelName}", [
                          s._param("channelName", d.name),
                        ]),
                      ));
                  })
                  .finally(S));
              return;
            }
            if ((f == null || f(), n)) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebUnfollowNewsletterConfirmationModal.react")
                    .UnfollowNewsletterConfirmationModal,
                  { chat: d, loggingOptions: l, onClose: S },
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
                R(
                  o(
                    "WAWebUnfollowNewsletterConfirmationModal.react",
                  ).getUnfollowNewsletterAnnouncement(d),
                );
              })
              .finally(S);
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = l),
          (t[5] = d),
          (t[6] = p),
          (t[7] = _),
          (t[8] = f),
          (t[9] = S),
          (t[10] = L))
        : (L = t[10]);
      var E = L,
        k;
      t[11] !== a
        ? ((k = a ? s._(/*BTDS*/ "Following") : s._(/*BTDS*/ "Follow")),
          (t[11] = a),
          (t[12] = k))
        : (k = t[12]);
      var I = k,
        T = a ? "outline" : "tonal",
        D;
      return (
        t[13] !== E || t[14] !== y || t[15] !== g || t[16] !== I || t[17] !== T
          ? ((D = u.jsx(r("WDSButton.react"), {
              onPress: E,
              ref: g,
              testid: void 0,
              loading: y,
              label: I,
              type: "default",
              variant: T,
              size: "small",
            })),
            (t[13] = E),
            (t[14] = y),
            (t[15] = g),
            (t[16] = I),
            (t[17] = T),
            (t[18] = D))
          : (D = t[18]),
        D
      );
    }
    function m(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e, visibile: !1 }),
      );
    }
    l.default = d;
  },
  226,
);
