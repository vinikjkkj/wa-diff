__d(
  "DOMQuery",
  [
    "CSS",
    "FBLogger",
    "containsNode",
    "createArrayFromMixed",
    "createObjectFrom",
    "ge",
    "ifRequired",
    "isElementNode",
    "isNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = /^\.-?[_a-zA-Z]+[\w-]*$/;
    function s(e, t) {
      return e.hasAttribute ? e.hasAttribute(t) : e.getAttribute(t) !== null;
    }
    function u(e, t) {
      var n = d(e, t);
      return n[0];
    }
    function c(e, t, n) {
      var r = d(e, t),
        o = d(e, n),
        a;
      return (
        r.length === 1 && o.length === 1 && r[0] === o[0]
          ? (a = r)
          : (a = r.concat(o)),
        a[0]
      );
    }
    function d(t, n) {
      if (!t || !t.getElementsByTagName) return [];
      for (
        var a = n.split(" "), i = [t], l = 0;
        l < a.length && i.length !== 0;
        l++
      )
        if (a[l] !== "") {
          var u = a[l],
            c = a[l],
            d = [],
            m = !1;
          if (u.charAt(0) === "^")
            if (l === 0) ((m = !0), (u = u.slice(1)));
            else return [];
          u = u.replace(
            /\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g,
            " $&",
          );
          var p = u.split(" "),
            _ = p[0] || "*",
            f = _ == "*",
            g = p[1] && p[1].charAt(0) === "#";
          if (g) {
            var h = r("ge")(p[1].slice(1), t, _);
            if (h && (f || h.tagName.toLowerCase() == _)) {
              for (var y = 0; y < i.length; y++)
                if (m && r("containsNode")(h, i[y])) {
                  d = [h];
                  break;
                } else if (
                  document == i[y] ||
                  (r("containsNode")(i[y], h) && i[y] !== h)
                ) {
                  d = [h];
                  break;
                }
            }
          } else {
            for (
              var C = [],
                b = i.length,
                v,
                S = !m && c.indexOf("[") < 0 && document.querySelectorAll,
                R = 0;
              R < b;
              R++
            ) {
              if (m) {
                v = [];
                for (var L = i[R].parentNode; r("isElementNode")(L); )
                  ((f || L.tagName.toLowerCase() == _) && v.push(L),
                    (L = L.parentNode));
              } else
                S
                  ? e.test(c)
                    ? (v = i[R].getElementsByClassName(c.substring(1)))
                    : (v = i[R].querySelectorAll(c))
                  : (v = i[R].getElementsByTagName(_));
              for (var E = v.length, k = 0; k < E; k++) C.push(v[k]);
            }
            if (!S)
              for (var I = 1; I < p.length; I++) {
                var T = p[I],
                  D = T.charAt(0) === ".",
                  x = T.substring(1);
                for (R = 0; R < C.length; R++) {
                  var $ = C[R];
                  if (!(!$ || $.nodeType !== 1))
                    if (D) {
                      o("CSS").hasClass($, x) || delete C[R];
                      continue;
                    } else {
                      var P = T.slice(1, T.length - 1),
                        N = P.indexOf("=");
                      if (N < 0) {
                        if (!s($, P)) {
                          delete C[R];
                          continue;
                        }
                      } else {
                        var M = P.substr(0, N),
                          w = P.substr(N + 1);
                        if (
                          ((w = w.slice(1, w.length - 1)),
                          $.getAttribute(M) != w)
                        ) {
                          delete C[R];
                          continue;
                        }
                      }
                    }
                }
              }
            for (R = 0; R < C.length && !(C[R] && (d.push(C[R]), m)); R++);
          }
          i = d;
        }
      return i;
    }
    function m() {
      var e = window.getSelection;
      if (e != null) return e() + "";
      var t = document.selection;
      return t != null ? t.createRange().text : null;
    }
    function p(e, t) {
      return (
        (typeof e == "string" || typeof t == "string") &&
          r("FBLogger")("dom_query").info(
            "Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead",
          ),
        r("containsNode")(r("ge")(e), r("ge")(t))
      );
    }
    function _() {
      var e = r("ifRequired")("Quickling", function (e) {
        return e.isActive() ? r("ge")("content") : null;
      });
      return e || document.body;
    }
    function f(e, t) {
      var n = r("createArrayFromMixed")(t).join("|").toUpperCase().split("|"),
        o = r("createObjectFrom")(n);
      return r("isNode")(e) && e.nodeName in o;
    }
    function g(e) {
      return f(e, ["input", "textarea"]) || e.contentEditable === "true";
    }
    ((l.find = u),
      (l.findPushSafe = c),
      (l.scry = d),
      (l.getSelection = m),
      (l.contains = p),
      (l.getRootElement = _),
      (l.isNodeOfType = f),
      (l.isInputNode = g));
  },
  98,
);
