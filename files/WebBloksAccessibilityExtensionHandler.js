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
          var t = n.getValues(),
            r = t.disabled,
            a = t.enabled,
            i = t.label,
            l = t.role,
            s = {};
          return (
            o("WebBloksBooleanUtils").isFalse(a) ||
              (l && (s.role = e[l]), i != null && (s["aria-label"] = i)),
            (s = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(s.role),
              s,
            )),
            o("WebBloksBooleanUtils").isTrue(r) &&
              ((s.disabled = !0), (s["aria-disabled"] = !0)),
            s
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
