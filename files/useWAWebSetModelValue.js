__d(
  "useWAWebSetModelValue",
  ["WAWebStateUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = (function (e) {
        function t(t, n) {
          var r,
            o =
              'The model "' +
              t +
              '" has no property/sessions "' +
              n +
              '" defined';
          return (
            (r = e.call(this, o) || this),
            (r.name = "SetStateHookMissingModelPropertyError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c = {};
    function d(e, t) {
      var n = o("WAWebStateUtils").unproxy(e),
        r = n.proxyName;
      if (
        (c[r] == null && (c[r] = new Set([].concat(n.__props, n.__session))),
        !c[r].has(t))
      )
        throw new u(e.proxyName, t);
      var a = s(
        function (e) {
          if (typeof e == "function") {
            var r = n.get(t);
            n.set(t, e(r));
          } else n.set(t, e);
        },
        [t, n],
      );
      return a;
    }
    ((l.SetStateHookMissingModelPropertyError = u), (l.useSetModelValue = d));
  },
  98,
);
