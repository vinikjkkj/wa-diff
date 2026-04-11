__d(
  "WebBloksScriptParser",
  [
    "WebBloksErrors",
    "WebBloksScriptDebuggingUtils",
    "WebBloksScriptString",
    "WebBloksScriptTokens",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WebBloksScriptTokens").WebBloksBooleanToken)(!0),
      s = new (o("WebBloksScriptTokens").WebBloksBooleanToken)(!1),
      u = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function c(e) {
      switch (e) {
        case " ":
        case "\n":
        case "\r":
        case "	":
        case ",":
          return !0;
        default:
          return !1;
      }
    }
    function d(e) {
      var t = o("WebBloksScriptString").castWebBloksScriptStringToString(e),
        n = [],
        r = [n],
        a = 0;
      function i() {
        for (; c(t[a]); ) a++;
      }
      for (; a < t.length; ) {
        i();
        var l = t[a];
        switch (l) {
          case "(":
            ((n = []), r.push(n), a++);
            break;
          case ")": {
            var s = r.pop();
            if (((n = r[r.length - 1]), !n))
              throw new (o("WebBloksErrors").WebBloksScriptParseError)(
                a,
                "Unexpected ')'",
              );
            (n.push(s), a++);
            break;
          }
          case '"': {
            for (var u = ++a, d = !1; ; ) {
              var _ = t.indexOf('"', a);
              if (_ === -1)
                throw new (o("WebBloksErrors").WebBloksScriptParseError)(
                  u,
                  "Unterminated string",
                );
              var f = t.indexOf("\\", a);
              if (_ < f || f === -1) {
                a = _;
                break;
              }
              ((a = f + 2), (d = !0));
            }
            var g = t.substring(u, a);
            (n.push(
              new (o("WebBloksScriptTokens").WebBloksStringToken)(
                d ? m(u, g) : g,
              ),
            ),
              a++);
            break;
          }
          default:
            for (var h = a; ; ) {
              var y = t[++a];
              if (c(y) || y === ")" || y === "(" || y === void 0) {
                n.push(p(t.substring(h, a)));
                break;
              }
            }
        }
        if (r.length === 1) break;
      }
      var C = n[0];
      return (
        (C = o(
          "WebBloksScriptDebuggingUtils",
        ).attachLispyOffsetsForWebBloksScriptNode(C)),
        C
      );
    }
    function m(e, t) {
      return JSON.parse('"' + t + '"');
    }
    function p(t) {
      if (t === "true") return e;
      if (t === "false") return s;
      if (u.test(t)) {
        var n = parseFloat(t);
        return t.indexOf(".") === -1 &&
          (n >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER)
          ? new (o("WebBloksScriptTokens").WebBloksStringToken)(t)
          : new (o("WebBloksScriptTokens").WebBloksNumberToken)(n);
      }
      return new (o("WebBloksScriptTokens").WebBloksIdentifierToken)(t);
    }
    l.parse = d;
  },
  98,
);
