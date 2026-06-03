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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!r("WAWebNetworkStatus").online) {
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ "This member was not removed from the community. Check your connection and try again.",
                ),
              }),
            );
            return;
          }
          var a = e.id,
            i = t.id,
            l = o("WAWebGroupCommunityJob").sendRemoveFromCommunity({
              parentGroupId: a,
              contactId: i,
            }),
            d = s._(
              /*BTDS*/ "An error occurred while removing this member from the community.",
            ),
            m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var n = yield l;
                if (n.errorCode)
                  throw new (o("WAWebActionToast.react").ActionType)(d, {
                    actionText: "Retry",
                    actionHandler: function () {
                      return c(e, t);
                    },
                  });
                return new (o("WAWebActionToast.react").ActionType)(
                  s._(
                    /*BTDS*/ '{contact-name} was removed from the community "{community-name}"',
                    [
                      s._param(
                        "contact-name",
                        o("WAWebFrontendContactGetters").getFormattedName(t),
                      ),
                      s._param("community-name", e.formattedTitle),
                    ],
                  ),
                );
              } catch (e) {
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function () {
                    throw new (o("WAWebActionToast.react").ActionType)(d);
                  },
                )(e);
              }
            })(),
            p = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Removing from community ..."),
            );
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: p,
              pendingAction: m,
            }),
          );
          try {
            yield l;
          } catch (e) {
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              r("WAWebNoop"),
            )(e);
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  226,
);
