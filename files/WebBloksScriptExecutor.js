__d(
  "WebBloksScriptExecutor",
  [
    "Promise",
    "WebBloksErrors",
    "WebBloksScriptParser",
    "WebBloksScriptTokens",
    "WebBloksUtils",
    "WebBloksWhile",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = e.actions.get(t);
      if (n == null)
        throw new (o("WebBloksErrors").WebBloksUnknownActionError)(t);
      return n;
    }
    var u = {
        "bk.action.core.FuncConst": function (t, n) {
          var e;
          if (n.length !== 1)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "FuncConst supports only single args",
              t,
            );
          var r = (e = t.splicesStack.at(-1)) != null ? e : [];
          return function (e) {
            try {
              for (
                var t = arguments.length,
                  o = new Array(t > 1 ? t - 1 : 0),
                  a = 1;
                a < t;
                a++
              )
                o[a - 1] = arguments[a];
              return (
                e.callArgsStack.push(o),
                e.splicesStack.push(r),
                _(e, n[0])
              );
            } finally {
              (e.callArgsStack.pop(), e.splicesStack.pop());
            }
          };
        },
        "bk.action.core.Coalesce": function (t, n) {
          for (var e of n) {
            var r = _(t, e);
            if (r != null) return r;
          }
          return null;
        },
        "bk.action.core.If": function (t, n) {
          if (n.length !== 2 && n.length !== 3)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "If supports 2 or 3 args",
              t,
            );
          var e = _(t, n[0]);
          return e ? _(t, n[1]) : n.length === 3 ? _(t, n[2]) : null;
        },
        "bk.action.core.Pattern": function (t, n) {
          if (n.length !== 2)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "Pattern supports only two args",
              t,
            );
          var e = _(t, n[0]),
            r = function (t) {
              return _(t, f(t, n[1]));
            };
          return { case: e, expression: r };
        },
        "bk.action.core.Default": function (t, n) {
          if (n.length !== 1)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "Default supports only one arg",
              t,
            );
          return function (e) {
            return _(e, f(e, n[0]));
          };
        },
        "bk.action.core.While": function (t, n) {
          if (n.length !== 2)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "While supports only two arg",
              t,
            );
          var e = function () {
              return _(t, f(t, n[0]));
            },
            a = function () {
              return _(t, f(t, n[1]));
            };
          return r("WebBloksWhile")(t, e, a);
        },
        "bk.action.core.GetArg": function (t, n) {
          var e = t.callArgsStack;
          if (n.length !== 1)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "GetArg supports only single args",
              t,
            );
          if (e.length === 0)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "GetArg received no callArgs",
              t,
            );
          var r = o("WebBloksUtils").peek(e),
            a = Number(n[0].value);
          return a >= r.length ? null : r[a];
        },
        "bk.action.core.SetArg": function (t, n) {
          var e = t.callArgsStack;
          if (n.length !== 2)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "SetArg supports only two args",
              t,
            );
          if (e.length === 0)
            throw new (o("WebBloksErrors").WebBloksScriptError)(
              "SetArg received no callArgs",
              t,
            );
          var r = o("WebBloksUtils").peek(e),
            a = Number(n[0].value),
            i = _(t, n[1]);
          return ((r[a] = i), null);
        },
        "bk.action.splice.Apply": function (t, n) {
          t.splicesStack.push(n.slice(1));
          try {
            return g(t, _(t, n[0]), []);
          } finally {
            t.splicesStack.pop();
          }
        },
        "bk.action.splice.Get": function (t, n) {
          var e = n[0].value,
            r = o("WebBloksUtils").nullthrows(t.splicesStack.at(-1))[e];
          return _(t, r);
        },
      },
      c = {
        e1z: "bk.action.core.Coalesce",
        e22: "bk.action.core.Default",
        e24: "bk.action.core.FuncConst",
        e25: "bk.action.core.GetArg",
        e2a: "bk.action.core.If",
        e2c: "bk.action.core.Pattern",
        e2e: "bk.action.core.SetArg",
        e2i: "bk.action.core.While",
        fl4: "bk.action.splice.Apply",
        fl5: "bk.action.splice.Get",
      };
    function d(e) {
      var t;
      return (t = u[e]) != null ? t : u[c[e]];
    }
    function m(e, t) {
      var n = t[0],
        r = babelHelpers.arrayLikeToArray(t).slice(1);
      if (
        Array.isArray(n) ||
        !(n instanceof o("WebBloksScriptTokens").WebBloksIdentifierToken)
      )
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "First arg of calls must be a token",
          e,
        );
      var a = n.value,
        i = d(a);
      if (i) return i(e, r);
      if (a[0] === "@")
        return o("WebBloksUtils").nullthrows(d("fl4"))(
          e,
          [
            [
              new (o("WebBloksScriptTokens").WebBloksIdentifierToken)(
                e.actions.has("dnk") ? "dnk" : "bk.action.bloks.GetScript",
              ),
              new (o("WebBloksScriptTokens").WebBloksStringToken)(a.slice(1)),
            ],
          ].concat(r),
        );
      var l = s(e, a),
        u = p(e, r),
        c = l.apply(void 0, [e].concat(u));
      return c;
    }
    function p(e, t) {
      return t.map(function (t) {
        return _(e, t);
      });
    }
    function _(e, t) {
      if (Array.isArray(t)) return m(e, t);
      if (t instanceof o("WebBloksScriptTokens").WebBloksIdentifierToken) {
        var n = t.value;
        if (n === "null") return null;
        if (n[0] === "&")
          return o("WebBloksUtils").nullthrows(d("fl5"))(e, [
            new (o("WebBloksScriptTokens").WebBloksNumberToken)(
              parseInt(n.slice(1), 10),
            ),
          ]);
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          'Unexpected identifier "' + n + '" in argument list',
        );
      }
      return t.value;
    }
    function f(e, t) {
      var n = t[0],
        r = t[1];
      if (n.value !== "bk.action.core.FuncConst" && n.value !== "e24")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Expected FuncConst",
          e,
        );
      return r;
    }
    function g(e, t, n) {
      if (typeof t == "function") return t.apply(void 0, [e].concat(n));
      var r =
        typeof t == "string"
          ? o("WebBloksScriptParser").parse(t)
          : o("WebBloksUtils").cast(t);
      try {
        return (e.callArgsStack.push(n), m(e, r));
      } finally {
        e.callArgsStack.pop();
      }
    }
    function h(e, t, n) {
      var r = n.slice();
      return g(e, t, r);
    }
    l.execute = h;
  },
  98,
);
