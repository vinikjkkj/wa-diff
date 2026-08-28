__d(
  "JSXDOM",
  ["FbtResultBase", "cr:6114", "flattenArray"],
  function (t, n, r, o, a, i) {
    var e = [
        "a",
        "blockquote",
        "br",
        "button",
        "canvas",
        "checkbox",
        "dd",
        "div",
        "dl",
        "dt",
        "em",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hr",
        "i",
        "iframe",
        "img",
        "input",
        "label",
        "li",
        "option",
        "p",
        "pre",
        "select",
        "span",
        "strong",
        "table",
        "tbody",
        "thead",
        "td",
        "textarea",
        "th",
        "tr",
        "ul",
        "video",
      ],
      l = {};
    (e.forEach(function (e) {
      var t = function (r, o) {
        return (
          arguments.length > 2 &&
            (o = Array.prototype.slice.call(arguments, 1)),
          !o && r && ((o = r.children), delete r.children),
          o &&
            ((o = Array.isArray(o) ? o : [o]),
            (o = o.map(function (e) {
              return e instanceof n("FbtResultBase") ? e.flattenToArray() : e;
            })),
            (o = n("flattenArray")(o))),
          n("cr:6114").create(e, r, o)
        );
      };
      l[e] = t;
    }),
      (a.exports = l));
  },
  null,
);
