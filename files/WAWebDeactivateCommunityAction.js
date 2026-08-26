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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!r("WAWebNetworkStatus").online) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ "Community was not deactivated. Check your connection and try again.",
                ),
              }),
            );
            return;
          }
          var a = t.id,
            i = o("WAWebGroupCommunityJob").sendDeactivateCommunity({
              parentGroupId: a,
            }),
            l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                return (
                  yield i,
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ '"{community-name}" was deactivated', [
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
            u = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Deactivating community ..."),
            );
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: u,
              pendingAction: l,
            }),
          );
          try {
            (yield i, r("WAWebOpenCommunityTabAction")());
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
                        children: s._(
                          /*BTDS*/ "Community could not be deactivated. You did not create this community, so you cannot deactivate it.",
                        ),
                      }),
                    )
                  : e.status === 404
                    ? (r("WAWebOpenCommunityTabAction")(),
                      o("WAWebToastManager").ToastManager.open(
                        c.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "This community no longer exists"),
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
                          children: s._(
                            /*BTDS*/ "Something went wrong. Please try again.",
                          ),
                        }),
                      );
              },
            )(e);
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  226,
);
