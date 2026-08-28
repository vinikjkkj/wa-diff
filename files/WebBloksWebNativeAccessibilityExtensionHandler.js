__d(
  "WebBloksWebNativeAccessibilityExtensionHandler",
  ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "3",
      s = "6",
      u = "2",
      c = "8",
      d = "4",
      m = "5",
      p = ",",
      _ = "1",
      f = "+",
      g = "0",
      h = "7",
      y = "-",
      C = {
        getProps: function (n) {
          var t = n.get(e),
            r = n.get(s),
            a = n.get(u),
            i = n.get(c),
            l = n.get(d),
            C = n.get(m),
            b = n.get(p),
            v = n.get(_),
            S = n.get(f),
            R = n.get(g),
            L = n.get(h),
            E = n.get(y),
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
            a != null &&
              (k["aria-expanded"] = o("WebBloksBooleanUtils").isTrue(a)),
            t != null && t.length > 0 && (k["aria-controls"] = t.join(" ")),
            r != null && r.length > 0 && (k["aria-describedby"] = r.join(" ")),
            i != null &&
              (k["aria-hidden"] = o("WebBloksBooleanUtils").isTrue(i)),
            l != null && (k["aria-pressed"] = l),
            C != null &&
              (k["aria-selected"] = o("WebBloksBooleanUtils").isTrue(C)),
            R != null && (k["aria-label"] = R),
            S != null && (k["aria-label"] = void 0),
            L != null && (k.lang = L),
            k
          );
        },
        wrap: function (t, n) {
          var e = t.get(f),
            r = t.get(g);
          return e != null
            ? o("WebBloksAccessibilityUtils").getHeading(e, r, n)
            : n;
        },
        reduce: function (t, n) {
          return t ? t.makeCopy(n.getValues_DO_NOT_USE()) : n;
        },
      },
      b = C;
    l.default = b;
  },
  98,
);
