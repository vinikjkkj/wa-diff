__d(
  "WAWebRemoveFromCommunityAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebFrontendContactGetters",
    "WAWebGroupCommunityJob",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    async function c(e, t) {
      if (!r("WAWebNetworkStatus").online) {
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
        );
        return;
      }
      var n = e.id,
        a = t.id,
        i = o("WAWebGroupCommunityJob").sendRemoveFromCommunity({
          parentGroupId: n,
          contactId: a,
        }),
        l = s._(/*BTDS*/ ""),
        d = (async function () {
          try {
            var n = await i;
            if (n.errorCode)
              throw new (o("WAWebActionToast.react").ActionType)(l, {
                actionText: "Retry",
                actionHandler: function () {
                  return c(e, t);
                },
              });
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "", [
                s._param(
                  "contact-name",
                  o("WAWebFrontendContactGetters").getFormattedName(t),
                ),
                s._param("community-name", e.formattedTitle),
              ]),
            );
          } catch (e) {
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function () {
                throw new (o("WAWebActionToast.react").ActionType)(l);
              },
            )(e);
          }
        })(),
        m = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""));
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: m,
          pendingAction: d,
        }),
      );
      try {
        await i;
      } catch (e) {
        o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          r("WAWebNoop"),
        )(e);
      }
    }
    l.default = c;
  },
  226,
);
