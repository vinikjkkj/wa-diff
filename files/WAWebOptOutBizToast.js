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
    "asyncToGeneratorRuntime",
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
    function y(t, a, i, l, s, u) {
      u === void 0 && (u = o("WAWebActionToast.react").genId());
      var y = o("WAWebFrontendContactGetters").getFormattedName(t),
        C = i
          ? new (o("WAWebActionToast.react").ActionType)(d(y))
          : new (o("WAWebActionToast.react").ActionType)(m(y)),
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            i
              ? yield o("WAWebOptOutBizAction").optInContact(t, l, s, u)
              : yield o("WAWebOptOutBizAction").optOutContact(t, l, s, u);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        v = a
          .then(function () {
            var e = i ? p(y) : _(y);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: r("WAWebFbtCommon")("Undo"),
              actionHandler: b,
            });
          })
          .catch(function (t) {
            var n = i ? f(y) : g(y);
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
                  actionHandler: b,
                }));
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: u,
          initialAction: C,
          pendingAction: v,
        }),
      );
    }
    l.optOutBizToast = y;
  },
  226,
);
