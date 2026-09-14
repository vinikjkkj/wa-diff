__d(
  "WebBloksAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WebBloksModel")).defineWebBloksAttributeKey("+"),
      u = e.defineWebBloksAttributeKey("#"),
      c = e.defineWebBloksAttributeKey("$"),
      d = e.defineWebBloksAttributeKey("&"),
      m = "\u3411",
      p = "\u3417",
      _ = "\u341B",
      f = {
        Button: "button",
        Header: "heading",
        "Image Button": "button",
        Image: "img",
        "Selected Button": "button",
        Text: "",
        Link: "link",
      };
    function g(e, t) {
      return e !== "Text" || t == null
        ? !1
        : t.styleId === p ||
            t.styleId === _ ||
            t.styleId === m ||
            t.styleId === "bk.components.Text" ||
            t.styleId === "bk.components.TextSpan" ||
            t.styleId === "bk.components.RichText";
    }
    var h = {
        getProps: function (t, n) {
          var e = t.get(s),
            r = t.get(u),
            a = t.get(c),
            i = t.get(d),
            l = {};
          return (
            o("WebBloksBooleanUtils").isFalse(r) ||
              (i && (l.role = f[i]),
              a != null && !g(i, n) && (l["aria-label"] = a)),
            (l = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(l.role),
              l,
            )),
            o("WebBloksBooleanUtils").isTrue(e) &&
              ((l.disabled = !0), (l["aria-disabled"] = !0)),
            l
          );
        },
      },
      y = h;
    l.default = y;
  },
  98,
);
