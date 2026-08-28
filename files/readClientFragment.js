__d(
  "readClientFragment",
  [
    "FBLogger",
    "LoadObject",
    "getErrorSafe",
    "justknobx",
    "memoizeWithArgsByKey",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return t
        ? r("LoadObject").loading({ creatorModuleID: i.id })
        : r("LoadObject").withValue(n, { creatorModuleID: i.id });
    }
    var s = r("memoizeWithArgsByKey")(e);
    function u(e, t, n, a, l, u, c) {
      d(u);
      var m = o("relay-runtime").createOperationDescriptor(
          o("relay-runtime").getRequest(t),
          a,
        ),
        p = o("relay-runtime").createReaderSelector(n, u, l, m.request),
        _ = e.lookup(p);
      try {
        o("relay-runtime").handlePotentialSnapshotErrors(e, _.fieldErrors);
      } catch (e) {
        return r("LoadObject").withError(r("getErrorSafe")(e), {
          creatorModuleID: i.id,
        });
      }
      return s(u, e, _.isMissingData, c(_.data));
    }
    var c = u;
    function d(e) {
      (e === null || typeof e == "number" || e === "0" || e === "") &&
        r("justknobx")._("3886") &&
        r("FBLogger")("relay_ads_manager").warn("Invalid id value, got %s", e);
    }
    l.default = c;
  },
  98,
);
