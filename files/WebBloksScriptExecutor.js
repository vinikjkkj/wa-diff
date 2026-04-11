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
              var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              o[a - 1] = arguments[a];
            return (
              e.callArgsStack.push(o),
              e.splicesStack.push(r),
              m(e, n[0])
            );
          } finally {
            (e.callArgsStack.pop(), e.splicesStack.pop());
          }
        };
      },
      "bk.action.core.Coalesce": function (t, n) {
        for (var e of n) {
          var r = m(t, e);
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
        var e = m(t, n[0]);
        return e ? m(t, n[1]) : n.length === 3 ? m(t, n[2]) : null;
      },
      "bk.action.core.Pattern": function (t, n) {
        if (n.length !== 2)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "Pattern supports only two args",
            t,
          );
        var e = m(t, n[0]),
          r = function (t) {
            return m(t, p(t, n[1]));
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
          return m(e, p(e, n[0]));
        };
      },
      "bk.action.core.While": function (t, n) {
        if (n.length !== 2)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "While supports only two arg",
            t,
          );
        var e = function () {
            return m(t, p(t, n[0]));
          },
          a = function () {
            return m(t, p(t, n[1]));
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
          i = m(t, n[1]);
        return ((r[a] = i), null);
      },
      "bk.action.splice.Apply": function (t, n) {
        t.splicesStack.push(n.slice(1));
        try {
          return _(t, m(t, n[0]), []);
        } finally {
          t.splicesStack.pop();
        }
      },
      "bk.action.splice.Get": function (t, n) {
        var e = n[0].value,
          r = o("WebBloksUtils").nullthrows(t.splicesStack.at(-1))[e];
        return m(t, r);
      },
    };
    function c(e, t) {
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
        i = u[a];
      if (i) return i(e, r);
      if (a[0] === "@")
        return u["bk.action.splice.Apply"](
          e,
          [
            [
              new (o("WebBloksScriptTokens").WebBloksIdentifierToken)(
                "bk.action.bloks.GetScript",
              ),
              new (o("WebBloksScriptTokens").WebBloksStringToken)(a.slice(1)),
            ],
          ].concat(r),
        );
      var l = s(e, a),
        c = d(e, r),
        m = l.apply(void 0, [e].concat(c));
      return m;
    }
    function d(e, t) {
      return t.map(function (t) {
        return m(e, t);
      });
    }
    function m(e, t) {
      if (Array.isArray(t)) return c(e, t);
      if (t instanceof o("WebBloksScriptTokens").WebBloksIdentifierToken) {
        var n = t.value;
        if (n === "null") return null;
        if (n[0] === "&")
          return u["bk.action.splice.Get"](e, [
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
    function p(e, t) {
      var n = t[0],
        r = t[1];
      if (n.value !== "bk.action.core.FuncConst")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Expected FuncConst",
          e,
        );
      return r;
    }
    function _(e, t, n) {
      if (typeof t == "function") return t.apply(void 0, [e].concat(n));
      var r =
        typeof t == "string"
          ? o("WebBloksScriptParser").parse(t)
          : o("WebBloksUtils").cast(t);
      try {
        return (e.callArgsStack.push(n), c(e, r));
      } finally {
        e.callArgsStack.pop();
      }
    }
    function f(e, t, n) {
      var r = n.slice();
      return _(e, t, r);
    }
    l.execute = f;
  },
  98,
);
