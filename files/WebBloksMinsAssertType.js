__d(
  "WebBloksMinsAssertType",
  ["WebBloksErrors", "WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (typeof n != "number")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Type must be a number",
          e,
        );
      var r = o("WebBloksMinsUtils").typeofNumber(t),
        a =
          n === o("WebBloksMinsUtils").K_TYPEOF_DOUBLE_OR_INT64
            ? r === o("WebBloksMinsUtils").K_TYPEOF_DOUBLE ||
              r === o("WebBloksMinsUtils").K_TYPEOF_INT64
            : n === r;
      if (!a)
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Type assertion failed. Expected " + n + ", got " + typeof t,
          e,
        );
      return t;
    }
    l.default = e;
  },
  98,
);
