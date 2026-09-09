__d(
  "WAWebTextStatusCollection",
  [
    "fbt",
    "WAWebFrontendTextStatusGetters",
    "WAWebStaleBaseCollection",
    "WAWebStatusContactAction",
    "WAWebTextStatusGetters",
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
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.remove = function (n, r) {
          var t = e.prototype.remove.call(this, n, r);
          return (
            t.forEach(function (e) {
              e != null &&
                (o("WAWebTextStatusGetters").clearTextStatusGetterCacheFor(e),
                o(
                  "WAWebFrontendTextStatusGetters",
                ).clearFrontendTextStatusGetterCacheFor(e));
            }),
            t
          );
        }),
        (n.reset = function () {
          (this.forEach(function (e) {
            (o("WAWebTextStatusGetters").clearTextStatusGetterCacheFor(e),
              o(
                "WAWebFrontendTextStatusGetters",
              ).clearFrontendTextStatusGetterCacheFor(e));
          }),
            e.prototype.reset.call(this));
        }),
        t
      );
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
