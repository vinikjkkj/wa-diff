__d(
  "WAWebStatusContactAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatCollection",
    "WAWebContactStatusBridge",
    "WAWebMiscErrors",
    "WAWebTextStatusCollection",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r =
              (t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                e,
              )) == null
                ? void 0
                : t.tcToken,
            a = { wid: e, tcToken: r },
            i = yield o("WAWebContactStatusBridge").getStatus(a);
          if (i.stale === !0) {
            var l = o("WAWebTextStatusCollection").TextStatusCollection.get(e);
            if (l) return { id: e, status: l.status };
          }
          var s =
            (n = i.status) != null
              ? n
              : o("WAWebTextStatusCollection").getDefaultTextStatus();
          return { id: e, status: s };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            (a === void 0 && (a = o("WAWebActionToast.react").genId()),
              i === void 0 && (i = !1));
            var l = t.trim();
            if (!l)
              return (u || (u = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              );
            var c = o("WAWebContactStatusBridge").setMyStatus(l),
              m = new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Changing About\u2026"),
              ),
              p = o("WAWebUserPrefsMeUser").getMeUser(),
              f = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
                p,
              ).status,
              g = c
                .then(function (e) {
                  if (e.status === 200) {
                    var t = i
                      ? void 0
                      : {
                          actionText: s._(/*BTDS*/ "Undo"),
                          actionHandler: function () {
                            return _(f, r, a, !0);
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
                .catch(function (n) {
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
                          return _(t, r, a);
                        },
                      },
                    )
                  );
                });
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: a,
                initialAction: m,
                pendingAction: g,
                onDismiss: r,
              }),
            );
            var h = yield c;
            h.status === 200 &&
              (o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
                p,
              ).status = t);
          },
        )),
        f.apply(this, arguments)
      );
    }
    ((l.getStatus = m), (l.setMyStatus = _));
  },
  226,
);
