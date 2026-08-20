__d(
  "I64",
  ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_int64", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return function () {
        var t = e.apply(void 0, arguments);
        return (t._tag || (t._tag = "i64"), t);
      };
    }
    function c(e) {
      return function () {
        var t = e.apply(void 0, arguments);
        return (t != null && !t._tag && (t._tag = "i64"), t);
      };
    }
    var d = u((e || (e = r("bs_caml_int64"))).mk),
      m = u(e.succ),
      p = u(function () {
        return (e || (e = r("bs_caml_int64"))).min_int;
      })(),
      _ = u(function () {
        return (e || (e = r("bs_caml_int64"))).max_int;
      })(),
      f = u(function () {
        return (e || (e = r("bs_caml_int64"))).one;
      })(),
      g = u(function () {
        return (e || (e = r("bs_caml_int64"))).zero;
      })(),
      h = u(function () {
        return (e || (e = r("bs_caml_int64"))).neg_one;
      })(),
      y = u(e.of_int32),
      C = u(e.add),
      b = u(e.neg),
      v = u(e.sub),
      S = u(e.lsl_),
      R = u(e.lsr_),
      L = u(e.asr_),
      E = u(e.mul),
      k = u(e.xor),
      I = u(e.or_),
      T = u(e.and_),
      D = u(e.of_float),
      x = u(e.div),
      $ = u(e.mod_),
      P = u(function () {
        return r("bs_int64").minus_one;
      })(),
      N = u(r("bs_int64").abs),
      M = u(r("bs_int64").lognot),
      w = c(r("bs_int64").of_string_opt),
      A,
      F;
    if (typeof BigInt == "function") {
      var O = BigInt(32),
        B = BigInt(4294967295);
      ((A = function (t) {
        return BigInt.asIntN(64, (BigInt(t[0]) << O) + BigInt(t[1])).toString();
      }),
        (F = function (t) {
          var e = BigInt.asIntN(64, BigInt(t)),
            n = [Number(e >> O), Number(e & B)];
          return ((n._tag = "i64"), n);
        }));
    } else
      ((A = (e || (e = r("bs_caml_int64"))).to_string),
        (F = u(r("bs_caml_format").caml_int64_of_string)));
    var W = A,
      q = F,
      U = u((s || (s = r("bs_caml"))).i64_max),
      V = u(s.i64_min);
    function H(e) {
      if (Array.isArray(e) && e.length === 2) {
        var t = e[0],
          n = e[1];
        if (
          typeof t == "number" &&
          Number.isInteger(t) &&
          typeof n == "number" &&
          Number.isInteger(n)
        ) {
          var r = [t, n];
          return ((r._tag = "i64"), r);
        }
      }
    }
    function G(e) {
      return r("nullthrows")(H(e));
    }
    function z(e) {
      return (e == null ? void 0 : e._tag) === "i64";
    }
    ((l.mk = d),
      (l.succ = m),
      (l.min_int = p),
      (l.max_int = _),
      (l.one = f),
      (l.zero = g),
      (l.neg_one = h),
      (l.of_int32 = y),
      (l.to_int32 = e.to_int32),
      (l.add = C),
      (l.neg = b),
      (l.sub = v),
      (l.lsl_ = S),
      (l.lsr_ = R),
      (l.asr_ = L),
      (l.is_zero = e.is_zero),
      (l.mul = E),
      (l.xor = k),
      (l.or_ = I),
      (l.and_ = T),
      (l.to_float = e.to_float),
      (l.of_float = D),
      (l.div = x),
      (l.mod_ = $),
      (l.compare = e.compare),
      (l.minus_one = P),
      (l.abs = N),
      (l.lognot = M),
      (l.of_string_opt = w),
      (l.equal = r("bs_int64").equal),
      (l.to_string = W),
      (l.of_string = q),
      (l.gt = s.i64_gt),
      (l.ge = s.i64_ge),
      (l.lt = s.i64_lt),
      (l.le = s.i64_le),
      (l.max = U),
      (l.min = V),
      (l.cast = H),
      (l.castExn = G),
      (l.isI64 = z));
  },
  98,
);
