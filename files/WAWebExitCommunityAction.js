__d(
  "WAWebExitCommunityAction",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatGetters",
    "WAWebCommunityLeaveErrorModals.react",
    "WAWebDeleteChatAction",
    "WAWebGroupExitJob",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return p(o("WAWebStateUtils").unproxy(e));
    }
    async function m(e) {
      var t = e.map(function (e) {
        return o("WAWebDeleteChatAction").sendDelete(e, !1);
      });
      await Promise.all(t);
    }
    async function p(t) {
      var n = t.promises;
      if (!o("WAWebChatGetters").getIsGroup(t))
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      if (n.sendExit) return n.sendExit;
      var r = (n.sendExit = o("WAWebGroupExitJob").leaveCommunity(t.id)),
        a = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        i = t.formattedTitle,
        l = r
          .then(function (e) {
            var n =
                i != null && i !== ""
                  ? s._(/*BTDS*/ "", [s._param("community", i)])
                  : s._(/*BTDS*/ ""),
              r = function () {
                (o("WAWebModalManager").ModalManager.close(), p(t));
              };
            if (e.code === 200)
              return new (o("WAWebActionToast.react").ActionType)(n);
            e.code === 500
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    o("WAWebCommunityLeaveErrorModals.react")
                      .CommunityLeaveRetryError,
                    { onOK: r },
                  ),
                )
              : o("WAWebModalManager").ModalManager.open(
                  c.jsx(
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
                    c.jsx(
                      o("WAWebCommunityLeaveErrorModals.react")
                        .CommunityLeaveTryAgainLaterError,
                      {},
                    ),
                  )
                : o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      o("WAWebCommunityLeaveErrorModals.react")
                        .CommunityLeaveStandardError,
                      {},
                    ),
                  ));
          })
          .finally(function () {
            n.sendExit = null;
          });
      (o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: a,
          pendingAction: l,
        }),
      ),
        await r);
    }
    ((l.sendExitCommunity = d), (l.deleteCommunityAndSubgroups = m));
  },
  226,
);
