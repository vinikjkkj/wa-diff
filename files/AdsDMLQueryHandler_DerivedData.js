__d(
  "AdsDMLQueryHandler_DerivedData",
  [
    "AdsDMLQueryHandler",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDMLQueryHandler_DerivedDataGetters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("AdsDMLQueryHandler_DerivedDataGetters").TDerived)();
    function s(t) {
      var n = Object.create(e);
      return ((n.handler = t), n);
    }
    var u = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$DerivedQueryHandler$p_1 = s(
            babelHelpers.assertThisInitialized(t),
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.load = function (t, n) {
          o("AdsDMLQueryHandler_DerivedDataBase").currentStoreHandlers.push(
            this,
          );
          var e = this.__getQueryParts(t, this.$DerivedQueryHandler$p_1);
          try {
            t.data = this.dataGetter(e);
          } catch (e) {
            if (
              e ===
              o("AdsDMLQueryHandler_DerivedDataBase")
                .DATA_IS_STILL_LOADING_EXCEPTION
            )
              ((t.isLoading = !0), (t.data = null));
            else throw e;
          } finally {
            (o("AdsDMLQueryHandler_DerivedDataBase").currentStoreHandlers.pop(
              this,
            ),
              this.__addOnUpdateCb(n));
          }
        }),
        t
      );
    })(o("AdsDMLQueryHandler").StoreQueryHandler);
    l.DerivedQueryHandler = u;
  },
  98,
);
