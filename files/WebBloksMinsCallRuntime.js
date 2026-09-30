__d(
  "WebBloksMinsCallRuntime",
  ["WebBloksActionContainerUtils", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      throw new (o("WebBloksErrors").WebBloksScriptError)(t, e);
    }
    function s(e) {
      return e == null
        ? null
        : typeof e == "bigint"
          ? Number(e)
          : typeof e == "number"
            ? e
            : typeof e == "string"
              ? parseFloat(e)
              : Number(e);
    }
    function u(e, t, n) {
      if (e == null) return null;
      if (typeof e == "bigint") return e;
      if (typeof e == "number") return BigInt(Math.trunc(e));
      if (typeof e == "string")
        try {
          return BigInt(e);
        } catch (e) {
          if (t) return BigInt(0);
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "parseInt64 received an unparseable string",
            n,
          );
        }
      var r = Number(e);
      if (!Number.isFinite(r)) {
        if (t) return BigInt(0);
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "parseInt64 received an unparseable value",
          n,
        );
      }
      return BigInt(Math.trunc(r));
    }
    function c(t, n, r, a) {
      if (t.length % 2 !== 0)
        return e(n, r + " requires an even number of arguments");
      var i = {};
      if (a)
        for (var l = 0; l < t.length; l += 2) {
          var s = t[l];
          o("WebBloksActionContainerUtils").writeWebBloksPlainMapValue(
            i,
            typeof s == "string" ? s : String(s),
            t[l + 1],
          );
        }
      else
        for (var u = t.length / 2, c = 0; c < u; c++) {
          var d = t[c];
          o("WebBloksActionContainerUtils").writeWebBloksPlainMapValue(
            i,
            typeof d == "string" ? d : String(d),
            t[c + u],
          );
        }
      return i;
    }
    function d(t, n) {
      var r = t[0],
        o = t[1],
        a = t[2];
      if (typeof r != "string")
        return e(n, "Substring 1st arg must be a string");
      if (typeof o != "number" || Math.trunc(o) !== o)
        return e(n, "Substring 2nd arg must be an integer");
      if (a != null && (typeof a != "number" || Math.trunc(a) !== a))
        return e(n, "Substring 3rd arg must be an integer or null");
      var i = r.length,
        l = o;
      if ((l < 0 && (l = i + l), l < 0 || l > i))
        return e(n, "Substring offset out of range");
      var s = a == null ? i - l : a;
      return s < 0 || l + s > i
        ? e(n, "Substring length out of range")
        : r.substring(l, l + s);
    }
    function m(e, t) {
      if (typeof t != "number")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Runtime function selector must be a number",
          e,
        );
      e: {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        if (t === 2) return s(r[0]);
        if (t === 6) return c(r, e, "MakeSmallMap", !1);
        if (t === 8) return u(r[0], r[1], e);
        if (t === 10) return d(r, e);
        if (t === 17) return c(r, e, "MakeSmallMapKV", !0);
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "invalid runtime function index " + t,
          e,
        );
      }
    }
    l.default = m;
  },
  98,
);
