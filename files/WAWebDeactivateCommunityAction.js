__d(
  "WAWebDeactivateCommunityAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebGroupCommunityJob",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebOpenCommunityTabAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t) {
      if (!r("WAWebNetworkStatus").online) {
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
        );
        return;
      }
      var n = t.id,
        a = o("WAWebGroupCommunityJob").sendDeactivateCommunity({
          parentGroupId: n,
        }),
        i = (async function () {
          try {
            return (
              await a,
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "", [
                  s._param("community-name", t.formattedTitle),
                ]),
              )
            );
          } catch (t) {
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Community deactivation failed",
                      ])),
                  )
                  .sendLogs("community-deactivation-failed");
              },
            )(t);
          }
        })(),
        l = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""));
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: l,
          pendingAction: i,
        }),
      );
      try {
        (await a, r("WAWebOpenCommunityTabAction")());
      } catch (e) {
        o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          function (e) {
            e.status === 401
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "deactivate-community",
                    },
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: s._(/*BTDS*/ ""),
                  }),
                )
              : e.status === 404
                ? (r("WAWebOpenCommunityTabAction")(),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ ""),
                    }),
                  ))
                : e.status === 500 &&
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      tsNavigationData: {
                        surface: "unknown",
                        viewName: "deactivate-community",
                      },
                      okText: r("WAWebFbtCommon")("Try again"),
                      onOK: function () {
                        (o("WAWebModalManager").ModalManager.close(), d(t));
                      },
                      onCancel: o("WAWebModalManager").closeModalManager,
                      children: s._(/*BTDS*/ ""),
                    }),
                  );
          },
        )(e);
      }
    }
    l.default = d;
  },
  226,
);
