__d(
  "bs_js_json",
  ["bs_caml_option"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = typeof e;
      return t === "string"
        ? { TAG: 0, _0: e }
        : t === "number"
          ? { TAG: 1, _0: e }
          : t === "boolean"
            ? e === !0
              ? 1
              : 0
            : e === null
              ? 2
              : Array.isArray(e)
                ? { TAG: 3, _0: e }
                : { TAG: 2, _0: e };
    }
    function l(e, t) {
      switch (t) {
        case 0:
          return typeof e == "string";
        case 1:
          return typeof e == "number";
        case 2:
          return e !== null && typeof e == "object" ? !Array.isArray(e) : !1;
        case 3:
          return Array.isArray(e);
        case 4:
          return typeof e == "boolean";
        case 5:
          return e === null;
      }
    }
    function s(e) {
      if (typeof e == "string") return e;
    }
    function u(e) {
      if (typeof e == "number") return e;
    }
    function c(e) {
      if (typeof e == "object" && !Array.isArray(e) && e !== null)
        return n("bs_caml_option").some(e);
    }
    function d(e) {
      if (Array.isArray(e)) return e;
    }
    function m(e) {
      if (typeof e == "boolean") return e;
    }
    function p(e) {
      if (e === null) return null;
    }
    var _ = function (t) {
      for (var e = [t], n = [{ kind: 0, i: 0, parent: e }]; n.length !== 0; ) {
        var r = n[n.length - 1];
        r.kind === 0
          ? ((r.val = r.parent[r.i]), ++r.i === r.parent.length && n.pop())
          : n.pop();
        var o = r.val;
        if (typeof o == "object")
          if (Array.isArray(o) && o.length !== 0)
            n.push({ kind: 0, i: 0, parent: o, val: void 0 });
          else
            for (var a in o) {
              if (a === "RE_PRIVATE_NONE") {
                r.kind === 0
                  ? (r.parent[r.i - 1] = void 0)
                  : (r.parent[r.i] = void 0);
                continue;
              }
              n.push({ kind: 1, i: a, parent: o, val: o[a] });
            }
      }
      return e[0];
    };
    function f(e) {
      return (function (e) {
        var t = JSON.stringify(e, function (e, t) {
          return t === void 0 ? { RE_PRIVATE_NONE: !0 } : t;
        });
        if (t === void 0) throw new TypeError("output is undefined");
        return t;
      })(e);
    }
    function g(e) {
      return _(JSON.parse(e));
    }
    ((i.classify = e),
      (i.test = l),
      (i.decodeString = s),
      (i.decodeNumber = u),
      (i.decodeObject = c),
      (i.decodeArray = d),
      (i.decodeBoolean = m),
      (i.decodeNull = p),
      (i.deserializeUnsafe = g),
      (i.serializeExn = f));
  },
  null,
);
