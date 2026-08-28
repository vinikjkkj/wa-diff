__d(
  "WebBloksAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "+",
      s = "#",
      u = "$",
      c = "&",
      d = "\u3411",
      m = "\u3417",
      p = "\u341B",
      _ = {
        Button: "button",
        Header: "heading",
        "Image Button": "button",
        Image: "img",
        "Selected Button": "button",
        Text: "",
        Link: "link",
      };
    function f(e, t) {
      return e !== "Text" || t == null
        ? !1
        : t.styleId === m ||
            t.styleId === p ||
            t.styleId === d ||
            t.styleId === "bk.components.Text" ||
            t.styleId === "bk.components.TextSpan" ||
            t.styleId === "bk.components.RichText";
    }
    var g = {
        getProps: function (n, r) {
          var t = n.get(e),
            a = n.get(s),
            i = n.get(u),
            l = n.get(c),
            d = {};
          return (
            o("WebBloksBooleanUtils").isFalse(a) ||
              (l && (d.role = _[l]),
              i != null && !f(l, r) && (d["aria-label"] = i)),
            (d = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(d.role),
              d,
            )),
            o("WebBloksBooleanUtils").isTrue(t) &&
              ((d.disabled = !0), (d["aria-disabled"] = !0)),
            d
          );
        },
      },
      h = g;
    l.default = h;
  },
  98,
);
