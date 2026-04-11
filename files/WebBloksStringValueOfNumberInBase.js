__d(
  "WebBloksStringValueOfNumberInBase",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (n < 2 || n > 36)
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "radix parameter of string.ValueOfNumberInBase must be between 2 and 36",
          e,
        );
      return Math.floor(t).toString(n);
    }
    l.default = e;
  },
  98,
);
