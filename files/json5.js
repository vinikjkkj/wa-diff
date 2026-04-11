__d(
  "json5",
  [],
  function (t, n, r, o, a, i) {
    var e = typeof i == "object" ? i : {};
    ((e.parse = (function () {
      "use strict";
      var e,
        t,
        n = {
          "'": "'",
          '"': '"',
          "\\": "\\",
          "/": "/",
          "\n": "",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "	",
        },
        r = [" ", "	", "\r", "\n", "\v", "\f", "\xA0", "\uFEFF"],
        o,
        a = function (t) {
          var n = new SyntaxError();
          throw ((n.message = t), (n.at = e), (n.text = o), n);
        },
        i = function (n) {
          return (
            n && n !== t && a("Expected '" + n + "' instead of '" + t + "'"),
            (t = o.charAt(e)),
            (e += 1),
            t
          );
        },
        l = function () {
          return o.charAt(e);
        },
        s = function () {
          var e = t;
          for (
            t !== "_" &&
            t !== "$" &&
            (t < "a" || t > "z") &&
            (t < "A" || t > "Z") &&
            a("Bad identifier");
            i() &&
            (t === "_" ||
              t === "$" ||
              (t >= "a" && t <= "z") ||
              (t >= "A" && t <= "Z") ||
              (t >= "0" && t <= "9"));
          )
            e += t;
          return e;
        },
        u = function () {
          var e,
            n = "",
            r = "",
            o = 10;
          if (((t === "-" || t === "+") && ((n = t), i(t)), t === "I"))
            return (
              (e = f()),
              (typeof e != "number" || isNaN(e)) &&
                a("Unexpected word for number"),
              n === "-" ? -e : e
            );
          if (t === "N")
            return ((e = f()), isNaN(e) || a("expected word to be NaN"), e);
          switch (
            (t === "0" &&
              ((r += t),
              i(),
              t === "x" || t === "X"
                ? ((r += t), i(), (o = 16))
                : t >= "0" && t <= "9" && a("Octal literal")),
            o)
          ) {
            case 10:
              for (; t >= "0" && t <= "9"; ) ((r += t), i());
              if (t === ".")
                for (r += "."; i() && t >= "0" && t <= "9"; ) r += t;
              if (t === "e" || t === "E")
                for (
                  r += t, i(), (t === "-" || t === "+") && ((r += t), i());
                  t >= "0" && t <= "9";
                )
                  ((r += t), i());
              break;
            case 16:
              for (
                ;
                (t >= "0" && t <= "9") ||
                (t >= "A" && t <= "F") ||
                (t >= "a" && t <= "f");
              )
                ((r += t), i());
              break;
          }
          if ((n === "-" ? (e = -r) : (e = +r), !isFinite(e))) a("Bad number");
          else return e;
        },
        c = function () {
          var e,
            r,
            o = "",
            s,
            u;
          if (t === '"' || t === "'")
            for (s = t; i(); ) {
              if (t === s) return (i(), o);
              if (t === "\\")
                if ((i(), t === "u")) {
                  for (
                    u = 0, r = 0;
                    r < 4 && ((e = parseInt(i(), 16)), !!isFinite(e));
                    r += 1
                  )
                    u = u * 16 + e;
                  o += String.fromCharCode(u);
                } else if (t === "\r") l() === "\n" && i();
                else if (typeof n[t] == "string") o += n[t];
                else break;
              else {
                if (t === "\n") break;
                o += t;
              }
            }
          a("Bad string");
        },
        d = function () {
          t !== "/" && a("Not an inline comment");
          do
            if ((i(), t === "\n" || t === "\r")) {
              i();
              return;
            }
          while (t);
        },
        m = function () {
          t !== "*" && a("Not a block comment");
          do
            for (i(); t === "*"; )
              if ((i("*"), t === "/")) {
                i("/");
                return;
              }
          while (t);
          a("Unterminated block comment");
        },
        p = function () {
          (t !== "/" && a("Not a comment"),
            i("/"),
            t === "/" ? d() : t === "*" ? m() : a("Unrecognized comment"));
        },
        _ = function () {
          for (; t; )
            if (t === "/") p();
            else if (r.indexOf(t) >= 0) i();
            else return;
        },
        f = function () {
          switch (t) {
            case "t":
              return (i("t"), i("r"), i("u"), i("e"), !0);
            case "f":
              return (i("f"), i("a"), i("l"), i("s"), i("e"), !1);
            case "n":
              return (i("n"), i("u"), i("l"), i("l"), null);
            case "I":
              return (
                i("I"),
                i("n"),
                i("f"),
                i("i"),
                i("n"),
                i("i"),
                i("t"),
                i("y"),
                1 / 0
              );
            case "N":
              return (i("N"), i("a"), i("N"), NaN);
          }
          a("Unexpected '" + t + "'");
        },
        g,
        h = function () {
          var e = [];
          if (t === "[")
            for (i("["), _(); t; ) {
              if (
                t === "]" ||
                (t === "," ? a("Missing array element") : e.push(g()),
                _(),
                t !== ",")
              )
                return (i("]"), e);
              (i(","), _());
            }
          a("Bad array");
        },
        y = function () {
          var e,
            n = {};
          if (t === "{")
            for (i("{"), _(); t; ) {
              if (
                t === "}" ||
                (t === '"' || t === "'" ? (e = c()) : (e = s()),
                _(),
                i(":"),
                (n[e] = g()),
                _(),
                t !== ",")
              )
                return (i("}"), n);
              (i(","), _());
            }
          a("Bad object");
        };
      return (
        (g = function () {
          switch ((_(), t)) {
            case "{":
              return y();
            case "[":
              return h();
            case '"':
            case "'":
              return c();
            case "-":
            case "+":
            case ".":
              return u();
            default:
              return t >= "0" && t <= "9" ? u() : f();
          }
        }),
        function (n, r) {
          var i;
          return (
            (o = String(n)),
            (e = 0),
            (t = " "),
            (i = g()),
            _(),
            t && a("Syntax error"),
            typeof r == "function"
              ? (function e(t, n) {
                  var o,
                    a,
                    i = t[n];
                  if (i && typeof i == "object")
                    for (o in i)
                      Object.prototype.hasOwnProperty.call(i, o) &&
                        ((a = e(i, o)),
                        a !== void 0 ? (i[o] = a) : delete i[o]);
                  return r.call(t, n, i);
                })({ "": i }, "")
              : i
          );
        }
      );
    })()),
      (e.stringify = function (t, n, r) {
        if (n && typeof n != "function" && !s(n))
          throw new Error("Replacer must be a function or an array");
        var o = function (e, t, r) {
          var o = e[t];
          return (
            o && o.toJSON && typeof o.toJSON == "function" && (o = o.toJSON()),
            typeof n == "function"
              ? n.call(e, t, o)
              : n
                ? r || s(e) || n.indexOf(t) >= 0
                  ? o
                  : void 0
                : o
          );
        };
        function a(e) {
          return (
            (e >= "a" && e <= "z") ||
            (e >= "A" && e <= "Z") ||
            (e >= "0" && e <= "9") ||
            e === "_" ||
            e === "$"
          );
        }
        function i(e) {
          return (
            (e >= "a" && e <= "z") ||
            (e >= "A" && e <= "Z") ||
            e === "_" ||
            e === "$"
          );
        }
        function l(e) {
          if (typeof e != "string" || !i(e[0])) return !1;
          for (var t = 1, n = e.length; t < n; ) {
            if (!a(e[t])) return !1;
            t++;
          }
          return !0;
        }
        e.isWord = l;
        function s(e) {
          return Array.isArray
            ? Array.isArray(e)
            : Object.prototype.toString.call(e) === "[object Array]";
        }
        function u(e) {
          return Object.prototype.toString.call(e) === "[object Date]";
        }
        isNaN =
          isNaN ||
          function (e) {
            return typeof e == "number" && e !== e;
          };
        var c = [];
        function d(e) {
          for (var t = 0; t < c.length; t++)
            if (c[t] === e)
              throw new TypeError("Converting circular structure to JSON");
        }
        function m(e, t, n) {
          if (!e) return "";
          e.length > 10 && (e = e.substring(0, 10));
          for (var r = n ? "" : "\n", o = 0; o < t; o++) r += e;
          return r;
        }
        var p;
        r &&
          (typeof r == "string"
            ? (p = r)
            : typeof r == "number" && r >= 0 && (p = m(" ", r, !0)));
        var _ =
            /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          f =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          g = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          };
        function h(e) {
          return (
            (f.lastIndex = 0),
            f.test(e)
              ? '"' +
                e.replace(f, function (e) {
                  var t = g[e];
                  return typeof t == "string"
                    ? t
                    : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function y(e, t, n) {
          var r,
            a,
            i = o(e, t, n);
          switch ((i && !u(i) && (i = i.valueOf()), typeof i)) {
            case "boolean":
              return i.toString();
            case "number":
              return isNaN(i) || !isFinite(i) ? "null" : i.toString();
            case "string":
              return h(i.toString());
            case "object":
              if (i === null) return "null";
              if (s(i)) {
                (d(i), (r = "["), c.push(i));
                for (var _ = 0; _ < i.length; _++)
                  ((a = y(i, _, !1)),
                    (r += m(p, c.length)),
                    a === null || typeof a == "undefined"
                      ? (r += "null")
                      : (r += a),
                    _ < i.length - 1 ? (r += ",") : p && (r += "\n"));
                (c.pop(), (r += m(p, c.length, !0) + "]"));
              } else {
                (d(i), (r = "{"));
                var f = !1;
                c.push(i);
                for (var g in i)
                  if (i.hasOwnProperty(g)) {
                    var C = y(i, g, !1);
                    if (((n = !1), typeof C != "undefined" && C !== null)) {
                      ((r += m(p, c.length)), (f = !0));
                      var t = l(g) ? g : h(g);
                      r += t + ":" + (p ? " " : "") + C + ",";
                    }
                  }
                (c.pop(),
                  f
                    ? (r = r.substring(0, r.length - 1) + m(p, c.length) + "}")
                    : (r = "{}"));
              }
              return r;
            default:
              return;
          }
        }
        var C = { "": t };
        return t === void 0 ? o(C, "", !0) : y(C, "", !0);
      }));
  },
  null,
);
