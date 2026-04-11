__d(
  "relay-runtime/util/getFragmentIdentifier",
  [
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/StringInterner",
    "relay-runtime/util/isEmptyObject",
    "relay-runtime/util/stableCopy",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("relay-runtime/store/RelayModernSelector").getDataIDsFromFragment,
      s = n("relay-runtime/store/RelayModernSelector").getSelector,
      u = n("relay-runtime/store/RelayModernSelector").getVariablesFromFragment,
      c = (e || (e = n("relay-runtime/util/stableCopy"))).stableCopy,
      d = n("relay-runtime/util/StringInterner").intern;
    function m(e, t) {
      var r = s(e, t),
        o =
          r == null
            ? "null"
            : r.kind === "SingularReaderSelector"
              ? r.owner.identifier
              : "[" +
                r.selectors
                  .map(function (e) {
                    return e.owner.identifier;
                  })
                  .join(",") +
                "]",
        a = u(e, t),
        i = l(e, t);
      if (
        n("relay-runtime/util/RelayFeatureFlags")
          .ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION
      ) {
        var m =
          typeof i == "undefined"
            ? "missing"
            : i == null
              ? "null"
              : Array.isArray(i)
                ? "[" + i.join(",") + "]"
                : i;
        return (
          (m =
            n("relay-runtime/util/RelayFeatureFlags").STRING_INTERN_LEVEL <= 1
              ? m
              : d(
                  m,
                  n("relay-runtime/util/RelayFeatureFlags").MAX_DATA_ID_LENGTH,
                )),
          o +
            "/" +
            e.name +
            "/" +
            (a == null || n("relay-runtime/util/isEmptyObject")(a)
              ? "{}"
              : JSON.stringify(c(a))) +
            "/" +
            m
        );
      } else {
        var p,
          _ = (p = JSON.stringify(i)) != null ? p : "missing";
        return (
          (_ =
            n("relay-runtime/util/RelayFeatureFlags").STRING_INTERN_LEVEL <= 1
              ? _
              : d(
                  _,
                  n("relay-runtime/util/RelayFeatureFlags").MAX_DATA_ID_LENGTH,
                )),
          o + "/" + e.name + "/" + JSON.stringify(c(a)) + "/" + _
        );
      }
    }
    a.exports = m;
  },
  null,
);
