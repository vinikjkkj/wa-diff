__d(
  "WebBloksWebNativeAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        getProps: function (t) {
          var e = t.getValues(),
            n = e["aria-controls"],
            r = e["aria-describedby"],
            a = e["aria-expanded"],
            i = e["aria-hidden"],
            l = e["aria-pressed"],
            s = e["aria-selected"],
            u = e.checked,
            c = e.enabled,
            d = e.heading_level,
            m = e.label,
            p = e.lang,
            _ = e.role,
            f = {},
            g = o("WebBloksAccessibilityUtils")
              .WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING[_];
          return (
            g != null && (f.role = g),
            (f = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(f.role),
              f,
            )),
            o("WebBloksBooleanUtils").isTrue(u) && (f["aria-checked"] = !0),
            o("WebBloksBooleanUtils").isFalse(u) && (f["aria-checked"] = !1),
            o("WebBloksBooleanUtils").isFalse(c) &&
              ((f.disabled = !0), (f["aria-disabled"] = !0)),
            a != null &&
              (f["aria-expanded"] = o("WebBloksBooleanUtils").isTrue(a)),
            n != null && n.length > 0 && (f["aria-controls"] = n.join(" ")),
            r != null && r.length > 0 && (f["aria-describedby"] = r.join(" ")),
            i != null &&
              (f["aria-hidden"] = o("WebBloksBooleanUtils").isTrue(i)),
            l != null && (f["aria-pressed"] = l),
            s != null &&
              (f["aria-selected"] = o("WebBloksBooleanUtils").isTrue(s)),
            m != null && (f["aria-label"] = m),
            d != null && (f["aria-label"] = void 0),
            p != null && (f.lang = p),
            f
          );
        },
        wrap: function (t, n) {
          var e = t.getValues(),
            r = e.heading_level,
            a = e.label;
          return r != null
            ? o("WebBloksAccessibilityUtils").getHeading(r, a, n)
            : n;
        },
        reduce: function (t, n) {
          return t ? t.makeCopy(n.getValues()) : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
