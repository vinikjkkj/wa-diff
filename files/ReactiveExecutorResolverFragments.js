__d(
  "ReactiveExecutorResolverFragments",
  [
    "ReactiveExecutorExecTimeResolverTransformer",
    "nullthrows",
    "relay-runtime",
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/ResolverFragments",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    function s(t, n) {
      e.push(t);
      try {
        return n();
      } finally {
        e.pop();
      }
    }
    function u(t, n) {
      if (Array.isArray(n)) {
        var a = o("relay-runtime/store/RelayReader").read(
          n[1],
          r("nullthrows")(
            o("relay-runtime").getSingularSelector(
              o("relay-runtime").getFragment(
                o(
                  "ReactiveExecutorExecTimeResolverTransformer",
                ).getTransformedFragmentForExecTimeMode(t),
              ),
              n[0],
            ),
          ),
        );
        return a.data;
      }
      if (e.length === 0)
        return o("relay-runtime/store/ResolverFragments").readFragment(t, n);
      var i = r("nullthrows")(e[e.length - 1]),
        l = o("relay-runtime/store/RelayReader").read(
          o("relay-runtime").RecordSource.create(i),
          r("nullthrows")(
            o("relay-runtime").getSingularSelector(
              o("relay-runtime").getFragment(
                o(
                  "ReactiveExecutorExecTimeResolverTransformer",
                ).getTransformedFragmentForExecTimeMode(t),
              ),
              n,
            ),
          ),
        );
      return l.data;
    }
    ((l.readFragment = u), (l.withResolverFragmentContext = s));
  },
  98,
);
