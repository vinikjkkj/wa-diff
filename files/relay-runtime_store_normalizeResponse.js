__d(
  "relay-runtime/store/normalizeResponse",
  [
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/RelayResponseNormalizer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o, a, i) {
      var l,
        s = t.data,
        u = t.errors,
        c = r("relay-runtime/store/RelayRecordSource").create(),
        d = (e || (e = r("relay-runtime/store/RelayModernRecord"))).create(
          n.dataID,
          o,
        );
      c.set(n.dataID, d);
      var m = r("relay-runtime/store/RelayResponseNormalizer").normalize(
        c,
        n,
        s,
        a,
        u,
        i,
      );
      return babelHelpers.extends({}, m, {
        isFinal: ((l = t.extensions) == null ? void 0 : l.is_final) === !0,
      });
    }
    i.exports = s;
  },
  34,
);
