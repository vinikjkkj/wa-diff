__d(
  "FluxStore",
  [
    "invariant",
    "EventEmitter",
    "FluxStoreInstrumentation",
    "FluxStoreOnDispatchInstrumentation",
    "__debug",
    "concatArrays",
    "distinctArray",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = (function () {
        function t(e) {
          ((this.__className = this.constructor.name),
            (this.__moduleID = this.constructor.__moduleID),
            (this.__changed = !1),
            (this.__changeEvent = "change"),
            (this.__dispatcher = e),
            (this.__emitter = new (r("EventEmitter"))()),
            (this.$3 = !1),
            this.__registerDispatcherCallback(e));
        }
        var n = t.prototype;
        return (
          (n.__registerDispatcherCallback = function (t) {
            var e = this;
            this.$2 = t.register(
              function (t) {
                return e.__invokeOnDispatch(t);
              },
              this.__getIDForDispatcher(),
              this,
              this.__moduleID,
            );
          }),
          (n.addListener = function (t) {
            return this.__emitter.addListener(this.__changeEvent, t);
          }),
          (n.getActionTypes = function () {
            if (!this.$1) {
              var t = this.__getActionTypes();
              if (t != null) {
                var n = this.getDependencyStores();
                if (n.length > 0) {
                  var o = !1,
                    a = r("concatArrays")(
                      n
                        .map(function (e) {
                          var t =
                            e && e.getActionTypes ? e.getActionTypes() : null;
                          return (t == null && (o = !0), t);
                        })
                        .filter(Boolean),
                    );
                  o
                    ? (t = null)
                    : (t = (e || (e = r("distinctArray")))(t.concat(a)));
                }
              }
              this.$1 = t;
            }
            return this.$1;
          }),
          (n.getDispatcher = function () {
            return this.__dispatcher;
          }),
          (n.getDispatchToken = function () {
            return this.$2;
          }),
          (n.getDependencyDispatchTokens = function () {
            return (
              this.$5 ||
                (this.$5 = this.getDependencyStores().map(function (e) {
                  return e && e.getDispatchToken && e.getDispatchToken();
                })),
              this.$5
            );
          }),
          (n.getDependencyStores = function () {
            return (
              this.$4 ||
                (this.$4 = (e || (e = r("distinctArray")))(
                  this.__getDependencyStores(),
                )),
              this.$4
            );
          }),
          (n.addStoreDependency = function (t) {
            var e = this.__dispatcher.registerDependency;
            e && e(this.getDispatchToken(), t.getDispatchToken());
          }),
          (n.hasChanged = function () {
            return (
              this.__dispatcher.isDispatching() || s(0, 1147, this.__className),
              this.__changed
            );
          }),
          (n.__setAsUnchanged = function () {
            this.__changed = !1;
          }),
          (n.__emitChange = function () {
            (this.__dispatcher.isDispatching() || s(0, 1148, this.__className),
              !this.__changed &&
                (o("FluxStoreInstrumentation").onEmitChange(
                  this.__moduleID != null ? this.__moduleID : "unknown",
                ),
                (this.__changed = !0)));
          }),
          (n.__invokeOnDispatch = function (t) {
            this.__changed = !1;
            var e = r("FluxStoreOnDispatchInstrumentation").hasCallback()
              ? (u || (u = r("performanceAbsoluteNow")))()
              : null;
            if ((this.__onDispatch(t), e != null)) {
              var n;
              r("FluxStoreOnDispatchInstrumentation").call(
                (n = this.__moduleID) != null ? n : "unknown",
                (u || (u = r("performanceAbsoluteNow")))() - e,
              );
            }
            this.__inform();
          }),
          (n.__inform = function (t) {
            this.$3 = this.__changed || this.$3;
            var e = this.__dispatcher,
              n = e.shouldAllowInforms == null || e.shouldAllowInforms();
            n &&
              this.$3 &&
              ((this.$3 = !1),
              this.__emitter.emit(
                t != null && t !== "" ? t : this.__changeEvent,
              ));
          }),
          (n.__onDispatch = function (t) {
            s(0, 1149, this.__className);
          }),
          (n.__getActionTypes = function () {
            return null;
          }),
          (n.__getDependencyStores = function () {
            return [];
          }),
          (n.__getIDForDispatcher = function () {
            return this.__className;
          }),
          t
        );
      })(),
      m = d,
      p = d;
    l.default = p;
  },
  98,
);
