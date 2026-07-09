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
    function y(t) {
      var a = t.action,
        i = t.block,
        l = t.contact,
        s = t.itemCategory,
        u = t.itemEntryPoint,
        y = t.toastId,
        C = y === void 0 ? o("WAWebActionToast.react").genId() : y,
        b = o("WAWebFrontendContactGetters").getFormattedName(l),
        v = i
          ? new (o("WAWebActionToast.react").ActionType)(d(b))
          : new (o("WAWebActionToast.react").ActionType)(m(b)),
        S = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            i
              ? yield o("WAWebOptOutBizAction").optInContact({
                  contact: l,
                  itemCategory: s,
                  itemEntryPoint: u,
                  toastId: C,
                })
              : yield o("WAWebOptOutBizAction").optOutContact(l, s, u, C);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        R = a
          .then(function () {
            var e = i ? p(b) : _(b);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: r("WAWebFbtCommon")("Undo"),
              actionHandler: S,
            });
          })
          .catch(function (t) {
            var n = i ? f(b) : g(b);
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
                  actionHandler: S,
                }));
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: C,
          initialAction: v,
          pendingAction: R,
        }),
      );
    }
    l.optOutBizToast = y;
  },
  226,
);
