__d(
  "WAWebStatusContactAction",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatCollection",
    "WAWebContactStatusBridge",
    "WAWebMiscErrors",
    "WAWebTextStatusCollection",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    async function d(e) {
      var t,
        n,
        r =
          (t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            e,
          )) == null
            ? void 0
            : t.tcToken,
        a = { wid: e, tcToken: r },
        i = await o("WAWebContactStatusBridge").getStatus(a);
      if (i.stale === !0) {
        var l = o("WAWebTextStatusCollection").TextStatusCollection.get(e);
        if (l) return { id: e, status: l.status };
      }
      var s =
        (n = i.status) != null
          ? n
          : o("WAWebTextStatusCollection").getDefaultTextStatus();
      return { id: e, status: s };
    }
    async function m(t, n, r, a) {
      (r === void 0 && (r = o("WAWebActionToast.react").genId()),
        a === void 0 && (a = !1));
      var i = t.trim();
      if (!i) return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var l = o("WAWebContactStatusBridge").setMyStatus(i),
        u = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Changing About\u2026"),
        ),
        d = o("WAWebUserPrefsMeUser").getMeUser(),
        p = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
          d,
        ).status,
        _ = l
          .then(function (e) {
            if (e.status === 200) {
              var t = a
                ? void 0
                : {
                    actionText: s._(/*BTDS*/ "Undo"),
                    actionHandler: function () {
                      return m(p, n, r, !0);
                    },
                  };
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "About changed"),
                t,
              );
            } else if (e.status >= 400)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't change About."),
              );
          })
          .catch(function (a) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:statusCollection:setMyStatus dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't change About."),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return m(t, n, r);
                  },
                },
              )
            );
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: r,
          initialAction: u,
          pendingAction: _,
          onDismiss: n,
        }),
      );
      var f = await l;
      f.status === 200 &&
        (o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
          d,
        ).status = t);
    }
    ((l.getStatus = d), (l.setMyStatus = m));
  },
  226,
);
