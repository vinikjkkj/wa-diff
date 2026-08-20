__d(
  "WebBloksAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        Button: "button",
        Header: "heading",
        "Image Button": "button",
        Image: "img",
        "Selected Button": "button",
        Text: "",
        Link: "link",
      },
      s = {
        getProps: function (n) {
          var t = n.get("disabled"),
            r = n.get("enabled"),
            a = n.get("label"),
            i = n.get("role"),
            l = {};
          return (
            o("WebBloksBooleanUtils").isFalse(r) ||
              (i && (l.role = e[i]), a != null && (l["aria-label"] = a)),
            (l = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(l.role),
              l,
            )),
            o("WebBloksBooleanUtils").isTrue(t) &&
              ((l.disabled = !0), (l["aria-disabled"] = !0)),
            l
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
