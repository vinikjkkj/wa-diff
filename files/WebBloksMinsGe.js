__d(
  "WebBloksMinsGe",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (
        (typeof t == "bigint" && typeof n == "bigint") ||
        (typeof t == "string" && typeof n == "string")
      )
        return t >= n;
      if (
        (typeof t == "number" || typeof t == "bigint") &&
        (typeof n == "number" || typeof n == "bigint")
      ) {
        if (typeof t == "bigint" && typeof n == "number" && Number.isInteger(n))
          return t >= BigInt(n);
        if (typeof t == "number" && typeof n == "bigint" && Number.isInteger(t))
          return BigInt(t) >= n;
        var r = typeof t == "bigint" ? Number(t) : t,
          a = typeof n == "bigint" ? Number(n) : n;
        return r >= a;
      }
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "Incompatible operand types of >=",
        e,
      );
    }
    l.default = e;
  },
  98,
);
