__d(
  "BDCometLoginSignalCollectionTrigger",
  ["FBLogger", "asyncToGeneratorRuntime", "getErrorSafe", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("BDClientSignalCollectionTrigger").__setRef(
        "BDCometLoginSignalCollectionTrigger",
      ),
      s = {
        getSignalsAsJSONString: function () {
          if (e == null) return null;
          var t = e.getModuleIfRequireable();
          return t == null ? null : t.getSignalsAsJSONString();
        },
        startLoginTimeSignalCollection: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if (e != null)
              try {
                var n = yield e.load();
                yield n.startLoginTimeSignalCollection(t);
              } catch (e) {
                r("FBLogger")("shared_pref_data")
                  .event("comet_signal_error")
                  .catching(r("getErrorSafe")(e))
                  .warn("Failed to start login time signal collection");
              }
          });
          function o(e) {
            return t.apply(this, arguments);
          }
          return o;
        })(),
      },
      u = s;
    l.default = u;
  },
  98,
);
