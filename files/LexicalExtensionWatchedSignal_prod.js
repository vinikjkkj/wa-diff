__d(
  "LexicalExtensionWatchedSignal.prod",
  ["LexicalExtensionSignals"],
  function $module_LexicalExtensionWatchedSignal_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    exports.watchedSignal = function (t, i) {
      var a;
      return require("LexicalExtensionSignals").signal(t(), {
        unwatched: function unwatched() {
          a && (a(), (a = void 0));
        },
        watched: function watched() {
          ((this.value = t()), (a = i(this)));
        },
      });
    };
  },
  null,
);
