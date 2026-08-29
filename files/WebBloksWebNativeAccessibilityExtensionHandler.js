__d(
  "WebBloksWebNativeAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        getProps: function (t) {
          var e = t.get("aria-controls"),
            n = t.get("aria-describedby"),
            r = t.get("aria-expanded"),
            a = t.get("aria-hidden"),
            i = t.get("aria-pressed"),
            l = t.get("aria-selected"),
            s = t.get("checked"),
            u = t.get("enabled"),
            c = t.get("heading_level"),
            d = t.get("label"),
            m = t.get("lang"),
            p = t.get("role"),
            _ = {},
            f = o("WebBloksAccessibilityUtils")
              .WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING[p];
          return (
            f != null && (_.role = f),
            (_ = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(_.role),
              _,
            )),
            o("WebBloksBooleanUtils").isTrue(s) && (_["aria-checked"] = !0),
            o("WebBloksBooleanUtils").isFalse(s) && (_["aria-checked"] = !1),
            o("WebBloksBooleanUtils").isFalse(u) &&
              ((_.disabled = !0), (_["aria-disabled"] = !0)),
            r != null &&
              (_["aria-expanded"] = o("WebBloksBooleanUtils").isTrue(r)),
            e != null && e.length > 0 && (_["aria-controls"] = e.join(" ")),
            n != null && n.length > 0 && (_["aria-describedby"] = n.join(" ")),
            a != null &&
              (_["aria-hidden"] = o("WebBloksBooleanUtils").isTrue(a)),
            i != null && (_["aria-pressed"] = i),
            l != null &&
              (_["aria-selected"] = o("WebBloksBooleanUtils").isTrue(l)),
            d != null && (_["aria-label"] = d),
            c != null && (_["aria-label"] = void 0),
            m != null && (_.lang = m),
            _
          );
        },
        wrap: function (t, n) {
          var e = t.get("heading_level"),
            r = t.get("label");
          return e != null
            ? o("WebBloksAccessibilityUtils").getHeading(e, r, n)
            : n;
        },
        reduce: function (t, n) {
          return t ? t.makeCopy(n.getValues_DO_NOT_USE()) : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
