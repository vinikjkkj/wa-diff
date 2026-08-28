__d(
  "AdsBootloadedStore",
  ["AdsBaseBootloadedStore", "AdsDataAtom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.onLoadedStore = function (t, n) {
            return this.__onLoadedModule(t, n);
          }),
          (o.loadStorePostDispatch = function (t) {
            this.__loadModulePostDispatch(t);
          }),
          (o.__reduce = function (n) {
            var t = n.$AdsBootloadedStore1,
              o = this.__getModule().getValueEnforcing();
            ((e || (e = r("AdsDataAtom"))).waitFor([o.getDispatchToken()]),
              o.hasChanged() && this.__emitChange());
          }),
          (n.create = function (t) {
            var e = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (babelHelpers.inheritsLoose(t, e), t);
            })(n);
            return ((e.__moduleID = t.getModuleId()), new e(t));
          }),
          n
        );
      })(r("AdsBaseBootloadedStore"));
    l.default = s;
  },
  98,
);
