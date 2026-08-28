__d(
  "json-bigint-1.0.0",
  ["bignumber-js-9.0.1"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("bignumber-js-9.0.1")),
      s = {},
      u = { exports: s };
    function c() {
      var e = l(),
        t = u.exports;
      (function () {
        var n =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          r,
          o,
          a = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          },
          i;
        function l(e) {
          return (
            (n.lastIndex = 0),
            n.test(e)
              ? '"' +
                e.replace(n, function (e) {
                  var t = a[e];
                  return typeof t == "string"
                    ? t
                    : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function s(t, n) {
          var a,
            u,
            c,
            d,
            m = r,
            p,
            _ = n[t],
            f = _ != null && (_ instanceof e || e.isBigNumber(_));
          switch (
            (_ &&
              typeof _ == "object" &&
              typeof _.toJSON == "function" &&
              (_ = _.toJSON(t)),
            typeof i == "function" && (_ = i.call(n, t, _)),
            typeof _)
          ) {
            case "string":
              return f ? _ : l(_);
            case "number":
              return isFinite(_) ? String(_) : "null";
            case "boolean":
            case "null":
            case "bigint":
              return String(_);
            case "object":
              if (!_) return "null";
              if (
                ((r += o),
                (p = []),
                Object.prototype.toString.apply(_) === "[object Array]")
              ) {
                for (d = _.length, a = 0; a < d; a += 1)
                  p[a] = s(a, _) || "null";
                return (
                  (c =
                    p.length === 0
                      ? "[]"
                      : r
                        ? "[\n" + r + p.join(",\n" + r) + "\n" + m + "]"
                        : "[" + p.join(",") + "]"),
                  (r = m),
                  c
                );
              }
              if (i && typeof i == "object")
                for (d = i.length, a = 0; a < d; a += 1)
                  typeof i[a] == "string" &&
                    ((u = i[a]),
                    (c = s(u, _)),
                    c && p.push(l(u) + (r ? ": " : ":") + c));
              else
                Object.keys(_).forEach(function (e) {
                  var t = s(e, _);
                  t && p.push(l(e) + (r ? ": " : ":") + t);
                });
              return (
                (c =
                  p.length === 0
                    ? "{}"
                    : r
                      ? "{\n" + r + p.join(",\n" + r) + "\n" + m + "}"
                      : "{" + p.join(",") + "}"),
                (r = m),
                c
              );
          }
        }
        typeof t.stringify != "function" &&
          (t.stringify = function (e, t, n) {
            var a;
            if (((r = ""), (o = ""), typeof n == "number"))
              for (a = 0; a < n; a += 1) o += " ";
            else typeof n == "string" && (o = n);
            if (
              ((i = t),
              t &&
                typeof t != "function" &&
                (typeof t != "object" || typeof t.length != "number"))
            )
              throw new Error("JSON.stringify");
            return s("", { "": e });
          });
      })();
    }
    var d = !1;
    function m() {
      return (d || ((d = !0), c()), u.exports);
    }
    var p = {},
      _ = { exports: p };
    function f() {
      var e = null,
        t =
          /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
        n =
          /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,
        r = function (r) {
          var o = {
            strict: !1,
            storeAsString: !1,
            alwaysParseAsBig: !1,
            useNativeBigInt: !1,
            protoAction: "error",
            constructorAction: "error",
          };
          if (r != null) {
            if (
              (r.strict === !0 && (o.strict = !0),
              r.storeAsString === !0 && (o.storeAsString = !0),
              (o.alwaysParseAsBig =
                r.alwaysParseAsBig === !0 ? r.alwaysParseAsBig : !1),
              (o.useNativeBigInt =
                r.useNativeBigInt === !0 ? r.useNativeBigInt : !1),
              typeof r.constructorAction != "undefined")
            )
              if (
                r.constructorAction === "error" ||
                r.constructorAction === "ignore" ||
                r.constructorAction === "preserve"
              )
                o.constructorAction = r.constructorAction;
              else
                throw new Error(
                  'Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ' +
                    r.constructorAction,
                );
            if (typeof r.protoAction != "undefined")
              if (
                r.protoAction === "error" ||
                r.protoAction === "ignore" ||
                r.protoAction === "preserve"
              )
                o.protoAction = r.protoAction;
              else
                throw new Error(
                  'Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ' +
                    r.protoAction,
                );
          }
          var a,
            i,
            s = {
              '"': '"',
              "\\": "\\",
              "/": "/",
              b: "\b",
              f: "\f",
              n: "\n",
              r: "\r",
              t: "	",
            },
            u,
            c = function (e) {
              throw { name: "SyntaxError", message: e, at: a, text: u };
            },
            d = function (e) {
              return (
                e &&
                  e !== i &&
                  c("Expected '" + e + "' instead of '" + i + "'"),
                (i = u.charAt(a)),
                (a += 1),
                i
              );
            },
            m = function () {
              var t,
                n = "";
              for (i === "-" && ((n = "-"), d("-")); i >= "0" && i <= "9"; )
                ((n += i), d());
              if (i === ".")
                for (n += "."; d() && i >= "0" && i <= "9"; ) n += i;
              if (i === "e" || i === "E")
                for (
                  n += i, d(), (i === "-" || i === "+") && ((n += i), d());
                  i >= "0" && i <= "9";
                )
                  ((n += i), d());
              if (((t = +n), !isFinite(t))) c("Bad number");
              else
                return (
                  e == null && (e = l()),
                  Number.isSafeInteger(t)
                    ? o.alwaysParseAsBig
                      ? o.useNativeBigInt
                        ? BigInt(t)
                        : new e(t)
                      : t
                    : o.storeAsString
                      ? n
                      : /[\.eE]/.test(n)
                        ? t
                        : o.useNativeBigInt
                          ? BigInt(n)
                          : new e(n)
                );
            },
            p = function () {
              var e,
                t,
                n = "",
                r;
              if (i === '"')
                for (var o = a; d(); ) {
                  if (i === '"')
                    return (a - 1 > o && (n += u.substring(o, a - 1)), d(), n);
                  if (i === "\\") {
                    if (
                      (a - 1 > o && (n += u.substring(o, a - 1)),
                      d(),
                      i === "u")
                    ) {
                      for (
                        r = 0, t = 0;
                        t < 4 && ((e = parseInt(d(), 16)), !!isFinite(e));
                        t += 1
                      )
                        r = r * 16 + e;
                      n += String.fromCharCode(r);
                    } else if (typeof s[i] == "string") n += s[i];
                    else break;
                    o = a;
                  }
                }
              c("Bad string");
            },
            _ = function () {
              for (; i && i <= " "; ) d();
            },
            f = function () {
              switch (i) {
                case "t":
                  return (d("t"), d("r"), d("u"), d("e"), !0);
                case "f":
                  return (d("f"), d("a"), d("l"), d("s"), d("e"), !1);
                case "n":
                  return (d("n"), d("u"), d("l"), d("l"), null);
              }
              c("Unexpected '" + i + "'");
            },
            g,
            h = function () {
              var e = [];
              if (i === "[") {
                if ((d("["), _(), i === "]")) return (d("]"), e);
                for (; i; ) {
                  if ((e.push(g()), _(), i === "]")) return (d("]"), e);
                  (d(","), _());
                }
              }
              c("Bad array");
            },
            y = function () {
              var e,
                r = Object.create(null);
              if (i === "{") {
                if ((d("{"), _(), i === "}")) return (d("}"), r);
                for (; i; ) {
                  if (
                    ((e = p()),
                    _(),
                    d(":"),
                    o.strict === !0 &&
                      Object.hasOwnProperty.call(r, e) &&
                      c('Duplicate key "' + e + '"'),
                    t.test(e) === !0
                      ? o.protoAction === "error"
                        ? c("Object contains forbidden prototype property")
                        : o.protoAction === "ignore"
                          ? g()
                          : (r[e] = g())
                      : n.test(e) === !0
                        ? o.constructorAction === "error"
                          ? c("Object contains forbidden constructor property")
                          : o.constructorAction === "ignore"
                            ? g()
                            : (r[e] = g())
                        : (r[e] = g()),
                    _(),
                    i === "}")
                  )
                    return (d("}"), r);
                  (d(","), _());
                }
              }
              c("Bad object");
            };
          return (
            (g = function () {
              switch ((_(), i)) {
                case "{":
                  return y();
                case "[":
                  return h();
                case '"':
                  return p();
                case "-":
                  return m();
                default:
                  return i >= "0" && i <= "9" ? m() : f();
              }
            }),
            function (e, t) {
              var n;
              return (
                (u = e + ""),
                (a = 0),
                (i = " "),
                (n = g()),
                _(),
                i && c("Syntax error"),
                typeof t == "function"
                  ? (function e(n, r) {
                      var o,
                        a = n[r];
                      return (
                        a &&
                          typeof a == "object" &&
                          Object.keys(a).forEach(function (t) {
                            ((o = e(a, t)),
                              o !== void 0 ? (a[t] = o) : delete a[t]);
                          }),
                        t.call(n, r, a)
                      );
                    })({ "": n }, "")
                  : n
              );
            }
          );
        };
      _.exports = r;
    }
    var g = !1;
    function h() {
      return (g || ((g = !0), f()), _.exports);
    }
    var y = {},
      C = { exports: y };
    function b() {
      var e = m().stringify,
        t = h();
      ((C.exports = function (n) {
        return { parse: t(n), stringify: e };
      }),
        (C.exports.parse = t()),
        (C.exports.stringify = e));
    }
    var v = !1;
    function S() {
      return (v || ((v = !0), b()), C.exports);
    }
    function R(e) {
      switch (e) {
        case void 0:
          return S();
      }
    }
    a.exports = R;
  },
  null,
);
