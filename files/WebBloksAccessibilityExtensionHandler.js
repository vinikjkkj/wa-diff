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
    };
    function s(e, t) {
      return e !== "Text" || t == null
        ? !1
        : t.styleId === "bk.components.Text" ||
            t.styleId === "bk.components.TextSpan" ||
            t.styleId === "bk.components.RichText";
    }
    var u = {
        getProps: function (n, r) {
          var t = n.get("disabled"),
            a = n.get("enabled"),
            i = n.get("label"),
            l = n.get("role"),
            u = {};
          return (
            o("WebBloksBooleanUtils").isFalse(a) ||
              (l && (u.role = e[l]),
              i != null && !s(l, r) && (u["aria-label"] = i)),
            (u = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(u.role),
              u,
            )),
            o("WebBloksBooleanUtils").isTrue(t) &&
              ((u.disabled = !0), (u["aria-disabled"] = !0)),
            u
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
