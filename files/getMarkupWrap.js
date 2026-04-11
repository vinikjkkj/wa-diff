__d(
  "getMarkupWrap",
  ["invariant", "ExecutionEnvironment", "TrustedTypesLinkTagHTMLPolicy"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.createElement("div")
        : null,
      c = {},
      d = [1, '<select multiple="true">', "</select>"],
      m = [1, "<table>", "</table>"],
      p = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _ = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
      f = {
        "*": [1, "?<div>", "</div>"],
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        param: [1, "<object>", "</object>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        optgroup: d,
        option: d,
        caption: m,
        colgroup: m,
        tbody: m,
        tfoot: m,
        thead: m,
        td: p,
        th: p,
      },
      g = [
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "text",
        "tspan",
      ];
    g.forEach(function (e) {
      ((f[e] = _), (c[e] = !0));
    });
    function h(e) {
      var t = e;
      return (
        u || s(0, 144),
        Object.prototype.hasOwnProperty.call(f, t) || (t = "*"),
        Object.prototype.hasOwnProperty.call(c, t) ||
          (t === "*"
            ? (u.innerHTML = r("TrustedTypesLinkTagHTMLPolicy").createHTML(
                "<link />",
              ))
            : (u.innerHTML = "<" + t + "></" + t + ">"),
          (c[t] = !u.firstChild)),
        c[t] ? f[t] : null
      );
    }
    l.default = h;
  },
  98,
);
