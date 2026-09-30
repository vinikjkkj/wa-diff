__d(
  "WebBloksMinsUtils",
  ["WebBloksActionContainerUtils", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = 1,
      u = 2,
      c = 3,
      d = 4,
      m = 5,
      p = 6,
      _ = 7,
      f = 8,
      g = 100;
    function h(t) {
      return t == null
        ? e
        : Array.isArray(t)
          ? p
          : (function (e) {
              return e === "boolean"
                ? s
                : e === "string"
                  ? u
                  : e === "bigint"
                    ? c
                    : e === "number"
                      ? d
                      : e === "function"
                        ? f
                        : e === "object"
                          ? o(
                              "WebBloksActionContainerUtils",
                            ).isWebBloksPlainMap(t)
                            ? _
                            : m
                          : -1;
            })(typeof t);
    }
    function y(e, t, n) {
      if (typeof e == "bigint") return e;
      if (typeof e == "number") return BigInt(Math.trunc(e));
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "Incompatible operand types of " + n,
        t,
      );
    }
    function C(e, t, n) {
      if (typeof e != "number")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Incompatible operand types of " + n,
          t,
        );
      return e | 0;
    }
    function b(e) {
      return typeof e != "number" ||
        !Number.isInteger(e) ||
        e < 0 ||
        e > 4294967295
        ? null
        : e;
    }
    ((l.K_TYPEOF_UNDEFINED_OR_NULL = e),
      (l.K_TYPEOF_BOOLEAN = s),
      (l.K_TYPEOF_STRING = u),
      (l.K_TYPEOF_INT64 = c),
      (l.K_TYPEOF_DOUBLE = d),
      (l.K_TYPEOF_HOST_REFERENCE = m),
      (l.K_TYPEOF_ARRAY = p),
      (l.K_TYPEOF_OBJECT = _),
      (l.K_TYPEOF_FUNCTION = f),
      (l.K_TYPEOF_DOUBLE_OR_INT64 = g),
      (l.typeofNumber = h),
      (l.toBigIntOperand = y),
      (l.toInt32 = C),
      (l.toVectorIndex = b));
  },
  98,
);
