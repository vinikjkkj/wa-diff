__d(
  "WAWebExitCommunityAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatGetters",
    "WAWebCommunityLeaveErrorModals.react",
    "WAWebDeleteChatAction",
    "WAWebGroupExitJob",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebStateUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return f(o("WAWebStateUtils").unproxy(e));
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return o("WAWebDeleteChatAction").sendDelete(e, !1);
          });
          yield (u || (u = n("Promise"))).all(t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.promises;
          if (!o("WAWebChatGetters").getIsGroup(t))
            return (u || (u = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (r.sendExit) return r.sendExit;
          var a = (r.sendExit = o("WAWebGroupExitJob").leaveCommunity(t.id)),
            i = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Exiting community"),
            ),
            l = a
              .then(function (e) {
                var n =
                    t.formattedTitle != null
                      ? s._(/*BTDS*/ 'You left the community "{community}"', [
                          s._param(
                            "community",
                            d.jsx(o("WAWebName.react").Name, { chat: t }),
                          ),
                        ])
                      : s._(/*BTDS*/ "You left the community"),
                  r = function () {
                    (o("WAWebModalManager").ModalManager.close(), f(t));
                  };
                if (e.code === 200)
                  return new (o("WAWebActionToast.react").ActionType)(n);
                e.code === 500
                  ? o("WAWebModalManager").ModalManager.open(
                      d.jsx(
                        o("WAWebCommunityLeaveErrorModals.react")
                          .CommunityLeaveRetryError,
                        { onOK: r },
                      ),
                    )
                  : o("WAWebModalManager").ModalManager.open(
                      d.jsx(
                        o("WAWebCommunityLeaveErrorModals.react")
                          .CommunityLeaveStandardError,
                        {},
                      ),
                    );
              })
              .catch(function (t) {
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[exitCommunity] dropped",
                    ])),
                ),
                  t.statusCode === 429 || t.statusCode === 500
                    ? o("WAWebModalManager").ModalManager.open(
                        d.jsx(
                          o("WAWebCommunityLeaveErrorModals.react")
                            .CommunityLeaveTryAgainLaterError,
                          {},
                        ),
                      )
                    : o("WAWebModalManager").ModalManager.open(
                        d.jsx(
                          o("WAWebCommunityLeaveErrorModals.react")
                            .CommunityLeaveStandardError,
                          {},
                        ),
                      ));
              })
              .finally(function () {
                r.sendExit = null;
              });
          (o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: i,
              pendingAction: l,
            }),
          ),
            yield a);
        })),
        g.apply(this, arguments)
      );
    }
    ((l.sendExitCommunity = m), (l.deleteCommunityAndSubgroups = p));
  },
  226,
);
