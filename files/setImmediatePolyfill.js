__d(
  "setImmediatePolyfill",
  ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"],
  function (t, n, r, o, a, i, l, s) {
    var e = t.setImmediate;
    (r("PromiseUsePolyfillSetImmediateGK")
      .www_always_use_polyfill_setimmediate ||
      !e) &&
      (e = r("ImmediateImplementation").setImmediate);
    function u(t) {
      typeof t == "function" || s(0, 5912);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return e.apply(void 0, [t].concat(r));
    }
    l.default = u;
  },
  98,
);
