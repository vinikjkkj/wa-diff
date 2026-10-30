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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          (r === void 0 && (r = o("WAWebActionToast.react").genId()),
            a === void 0 && (a = !1));
          var i = t.trim();
          if (!i)
            return (u || (u = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var l = o("WAWebContactStatusBridge").setMyStatus(i),
            c = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Changing About\u2026"),
            ),
            m = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            p = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
              m,
            ).status,
            f = l
              .then(function (e) {
                if (e.status === 200) {
                  var t = a
                    ? void 0
                    : {
                        actionText: s._(/*BTDS*/ "Undo"),
                        actionHandler: function () {
                          return _(p, r, !0);
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
                        return _(t, r);
                      },
                    },
                  )
                );
              });
          o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebActionToast.react").ActionToast, {
              id: r,
              initialAction: c,
              pendingAction: f,
            }),
          );
          var g = yield l;
          g.status === 200 &&
            (o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
              m,
            ).status = t);
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getStatus = m), (l.setMyStatus = _));
  },
  226,
);
