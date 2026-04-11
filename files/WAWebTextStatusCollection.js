__d(
  "WAWebTextStatusCollection",
  [
    "fbt",
    "WAWebStaleBaseCollection",
    "WAWebStatusContactAction",
    "WAWebTextStatusModel",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.findImpl = function (e) {
            var t =
              e instanceof r("WAWebWid")
                ? o("WAWebWidFactory").asUserWidOrThrow(e)
                : o("WAWebWidFactory").createUserWidOrThrow(e);
            return o("WAWebStatusContactAction").getStatus(t);
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((e.model = r("WAWebTextStatusModel")), (e.idClass = r("WAWebWid")));
    function u() {
      return s._(/*BTDS*/ "Hey there! I am using WhatsApp.").toString();
    }
    var c = new e();
    ((l.getDefaultTextStatus = u), (l.TextStatusCollection = c));
  },
  226,
);
