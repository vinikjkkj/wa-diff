__d(
  "WebBloksAccessibilityUtils",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = r("react")),
      u = {
        Button: "button",
        Header: null,
        "Image Button": "button",
        Image: "img",
        "Selected Button": "button",
        Text: null,
        Link: "link",
        Radio: "radio",
        Checkbox: "checkbox",
        "Radio Group": "radiogroup",
        Region: "region",
        Status: "status",
        "Tab Panel": "tabpanel",
        List: "list",
        "List Item": "listitem",
        Alert: "alert",
      },
      c = ["button", "link", "checkbox", "radio"],
      d = function (t) {
        return c.includes(t) ? { tabIndex: 0 } : {};
      };
    function m(e, t, n) {
      var r = {};
      switch ((t != null && (r["aria-label"] = t), e)) {
        case 1:
          return s.jsx("h1", babelHelpers.extends({}, r, { children: n }));
        case 2:
          return s.jsx("h2", babelHelpers.extends({}, r, { children: n }));
        case 3:
          return s.jsx("h3", babelHelpers.extends({}, r, { children: n }));
        case 4:
          return s.jsx("h4", babelHelpers.extends({}, r, { children: n }));
        case 5:
          return s.jsx("h5", babelHelpers.extends({}, r, { children: n }));
        case 6:
          return s.jsx("h6", babelHelpers.extends({}, r, { children: n }));
      }
      return n;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING = u),
      (l.WEBBLOKS_ACCESSIBILITY_FOCUSABLE_ROLES = c),
      (l.getFocusPropsForRole = d),
      (l.getHeading = m));
  },
  98,
);
