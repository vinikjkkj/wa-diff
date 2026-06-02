__d(
  "WAWebOptOutBizToast",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebOptOutBizAction",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = function (t) {
        return s._(/*BTDS*/ "Stopping offers and announcements for {member}", [
          s._param("member", t),
        ]);
      },
      m = function (t) {
        return s._(/*BTDS*/ "Resuming offers and announcements for {member}", [
          s._param("member", t),
        ]);
      },
      p = function (t) {
        return s._(/*BTDS*/ "Offers and announcements stopped for {member}", [
          s._param("member", t),
        ]);
      },
      _ = function (t) {
        return s._(/*BTDS*/ "Offers and announcements resumed for {member}", [
          s._param("member", t),
        ]);
      },
      f = function (t) {
        return s._(
          /*BTDS*/ "Couldn't stop offers and announcements for {member}",
          [s._param("member", t)],
        );
      },
      g = function (t) {
        return s._(
          /*BTDS*/ "Couldn't resume offers and announcements for {member}",
          [s._param("member", t)],
        );
      },
      h = function () {
        return s._(/*BTDS*/ "Try again.");
      };
    function y(t, n, a, i, l, s) {
      s === void 0 && (s = o("WAWebActionToast.react").genId());
      var u = o("WAWebFrontendContactGetters").getFormattedName(t),
        y = a
          ? new (o("WAWebActionToast.react").ActionType)(d(u))
          : new (o("WAWebActionToast.react").ActionType)(m(u)),
        C = async function () {
          a
            ? await o("WAWebOptOutBizAction").optInContact(t, i, l, s)
            : await o("WAWebOptOutBizAction").optOutContact(t, i, l, s);
        },
        b = n
          .then(function () {
            var e = a ? p(u) : _(u);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: r("WAWebFbtCommon")("Undo"),
              actionHandler: C,
            });
          })
          .catch(function (t) {
            var n = a ? f(u) : g(u);
            throw t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              t.statusCode >= 400
              ? new (o("WAWebActionToast.react").ActionType)(n)
              : (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "action:setOptOut dropped",
                    ])),
                ),
                new (o("WAWebActionToast.react").ActionType)(n, {
                  actionText: h(),
                  actionHandler: C,
                }));
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: s,
          initialAction: y,
          pendingAction: b,
        }),
      );
    }
    l.optOutBizToast = y;
  },
  226,
);
