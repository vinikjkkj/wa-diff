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
        return s._(/*BTDS*/ "", [s._param("member", t)]);
      },
      m = function (t) {
        return s._(/*BTDS*/ "", [s._param("member", t)]);
      },
      p = function (t) {
        return s._(/*BTDS*/ "", [s._param("member", t)]);
      },
      _ = function (t) {
        return s._(/*BTDS*/ "", [s._param("member", t)]);
      },
      f = function (t) {
        return s._(/*BTDS*/ "", [s._param("member", t)]);
      },
      g = function (t) {
        return s._(/*BTDS*/ "", [s._param("member", t)]);
      },
      h = function () {
        return s._(/*BTDS*/ "");
      };
    function y(t) {
      var n = t.action,
        a = t.block,
        i = t.contact,
        l = t.itemCategory,
        s = t.itemEntryPoint,
        u = t.toastId,
        y = u === void 0 ? o("WAWebActionToast.react").genId() : u,
        C = o("WAWebFrontendContactGetters").getFormattedName(i),
        b = a
          ? new (o("WAWebActionToast.react").ActionType)(d(C))
          : new (o("WAWebActionToast.react").ActionType)(m(C)),
        v = async function () {
          a
            ? await o("WAWebOptOutBizAction").optInContact({
                contact: i,
                itemCategory: l,
                itemEntryPoint: s,
                toastId: y,
              })
            : await o("WAWebOptOutBizAction").optOutContact(i, l, s, y);
        },
        S = n
          .then(function () {
            var e = a ? p(C) : _(C);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: r("WAWebFbtCommon")("Undo"),
              actionHandler: v,
            });
          })
          .catch(function (t) {
            var n = a ? f(C) : g(C);
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
                  actionHandler: v,
                }));
          });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: y,
          initialAction: b,
          pendingAction: S,
        }),
      );
    }
    l.optOutBizToast = y;
  },
  226,
);
