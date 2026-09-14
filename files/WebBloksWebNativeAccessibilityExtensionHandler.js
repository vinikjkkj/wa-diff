__d(
  "WebBloksWebNativeAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WebBloksModel")).defineWebBloksAttributeKey("3"),
      u = e.defineWebBloksAttributeKey("6"),
      c = e.defineWebBloksAttributeKey("2"),
      d = e.defineWebBloksAttributeKey("8"),
      m = e.defineWebBloksAttributeKey("4"),
      p = e.defineWebBloksAttributeKey("5"),
      _ = e.defineWebBloksAttributeKey(","),
      f = e.defineWebBloksAttributeKey("1"),
      g = e.defineWebBloksAttributeKey("+"),
      h = e.defineWebBloksAttributeKey("0"),
      y = e.defineWebBloksAttributeKey("7"),
      C = e.defineWebBloksAttributeKey("-"),
      b = {
        getProps: function (t) {
          var e = t.get(s),
            n = t.get(u),
            r = t.get(c),
            a = t.get(d),
            i = t.get(m),
            l = t.get(p),
            b = t.get(_),
            v = t.get(f),
            S = t.get(g),
            R = t.get(h),
            L = t.get(y),
            E = t.get(C),
            k = {},
            I = o("WebBloksAccessibilityUtils")
              .WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING[E];
          return (
            I != null && (k.role = I),
            (k = babelHelpers.extends(
              {},
              o("WebBloksAccessibilityUtils").getFocusPropsForRole(k.role),
              k,
            )),
            o("WebBloksBooleanUtils").isTrue(b) && (k["aria-checked"] = !0),
            o("WebBloksBooleanUtils").isFalse(b) && (k["aria-checked"] = !1),
            o("WebBloksBooleanUtils").isFalse(v) &&
              ((k.disabled = !0), (k["aria-disabled"] = !0)),
            r != null &&
              (k["aria-expanded"] = o("WebBloksBooleanUtils").isTrue(r)),
            e != null && e.length > 0 && (k["aria-controls"] = e.join(" ")),
            n != null && n.length > 0 && (k["aria-describedby"] = n.join(" ")),
            a != null &&
              (k["aria-hidden"] = o("WebBloksBooleanUtils").isTrue(a)),
            i != null && (k["aria-pressed"] = i),
            l != null &&
              (k["aria-selected"] = o("WebBloksBooleanUtils").isTrue(l)),
            R != null && (k["aria-label"] = R),
            S != null && (k["aria-label"] = void 0),
            L != null && (k.lang = L),
            k
          );
        },
        wrap: function (t, n) {
          var e = t.get(g),
            r = t.get(h);
          return e != null
            ? o("WebBloksAccessibilityUtils").getHeading(e, r, n)
            : n;
        },
        reduce: function (t, n) {
          return t ? t.makeCopy(n.getValues()) : n;
        },
      },
      v = b;
    l.default = v;
  },
  98,
);
