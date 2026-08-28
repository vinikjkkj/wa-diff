__d(
  "AdsBaseBootloadedStore",
  [
    "AdsBootloadedStoreModuleLoadedDataAction",
    "AdsBootloadedStoreModuleLoadedDataActionFlux",
    "AdsDataAtom",
    "FluxStore",
    "LoadObject",
    "abstractMethod",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n(n) {
          var o;
          ((o = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (o.$AdsBaseBootloadedStore$p_1 = r("LoadObject").empty({
              creatorModuleID: i.id,
            })),
            (o.$AdsBaseBootloadedStore$p_2 = n));
          var a = n.getModuleIfRequired();
          return (
            a != null &&
              (o.$AdsBaseBootloadedStore$p_1 = r("LoadObject").withValue(a, {
                creatorModuleID: i.id,
              })),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getModule = function () {
            return this.$AdsBaseBootloadedStore$p_1;
          }),
          (a.__setModule_FOR_TEST = function (t) {
            this.$AdsBaseBootloadedStore$p_1 = t;
          }),
          (a.getResourceName_FOR_TEST = function () {
            return this.$AdsBaseBootloadedStore$p_2.getModuleId();
          }),
          (a.__onLoadedModule = function (t, n) {
            var e = this;
            return this.$AdsBaseBootloadedStore$p_3()
              ? t(this.$AdsBaseBootloadedStore$p_1.getValueEnforcing())
              : (this.$AdsBaseBootloadedStore$p_1.isLoading() ||
                  ((this.$AdsBaseBootloadedStore$p_1 = r("LoadObject").loading({
                    creatorModuleID: i.id,
                  })),
                  r("promiseDone")(
                    this.$AdsBaseBootloadedStore$p_2.load(),
                    function (t) {
                      return e.__loadModulePostDispatch(t);
                    },
                  )),
                n);
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            if (this.$AdsBaseBootloadedStore$p_3()) {
              this.__reduce({ action: e });
              return;
            }
            if (
              e.type ===
                o("AdsBootloadedStoreModuleLoadedDataActionFlux").actionType &&
              e.moduleID === this.$AdsBaseBootloadedStore$p_2.getModuleId()
            ) {
              ((this.$AdsBaseBootloadedStore$p_1 = r("LoadObject").withValue(
                e.module,
                { creatorModuleID: i.id },
              )),
                this.__emitChange());
              return;
            }
          }),
          (a.__reduce = function (t) {
            var e = t.$AdsBaseBootloadedStore4;
            r("abstractMethod")("AdsBaseBootloadedStore", "__reduce");
          }),
          (a.__loadModulePostDispatch = function (n) {
            var t = this;
            this.$AdsBaseBootloadedStore$p_3() ||
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  return r("AdsBootloadedStoreModuleLoadedDataAction").dispatch(
                    {
                      moduleID: t.$AdsBaseBootloadedStore$p_2.getModuleId(),
                      module: n,
                    },
                    {
                      line: "94",
                      module: "AdsBaseBootloadedStore.js",
                      moduleID: n.id,
                    },
                  );
                },
              );
          }),
          (a.$AdsBaseBootloadedStore$p_3 = function () {
            return !!(
              this.$AdsBaseBootloadedStore$p_1 &&
              this.$AdsBaseBootloadedStore$p_1.hasValue()
            );
          }),
          n
        );
      })(r("FluxStore"));
    ((s.__moduleID = i.id), (l.default = s));
  },
  98,
);
