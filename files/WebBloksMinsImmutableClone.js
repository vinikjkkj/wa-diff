__d(
  "WebBloksMinsImmutableClone",
  ["WebBloksActionContainerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (Array.isArray(t)) return Object.freeze([].concat(t));
      if (t == null || typeof t != "object") return t;
      var n = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
        e,
        t,
        "argument of immutable_clone cannot be a host ref",
      );
      return Object.freeze(babelHelpers.extends({}, n));
    }
    l.default = e;
  },
  98,
);
