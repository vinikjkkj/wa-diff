__d(
  "WAWebKeyboardShortcut.react",
  ["WAWebActions", "WAWebFlex.react", "WAWebKeyboardShortcuts", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["children"],
      s,
      u = s || (s = o("react")),
      c = "Shift+",
      d = {
        key: {
          backgroundColor: "xmhyiyy",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1cienrf",
          borderInlineEndColor: "x1eproq3",
          borderBottomColor: "x1ntcio7",
          borderInlineStartColor: "x1dd54ck",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          boxShadow: "xx8lszd",
          color: "x14ug900",
          fontSize: "x1pg5gke",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.value;
      return u.jsx(o("WAWebFlex.react").FlexItem, {
        inline: !0,
        xstyle: d.key,
        padding: [4, 8],
        children: t,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.children,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return u.jsx(
        o("WAWebFlex.react").FlexRow,
        babelHelpers.extends({ inline: !0, align: "center", gap: 4 }, r, {
          children: n,
        }),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.action,
        n = e.addModifiers,
        r = n === void 0 ? !0 : n;
      if (t === o("WAWebActions").Action.OPEN_NTH_CHAT)
        return u.jsxs(p, {
          children: [u.jsx(m, { value: "Ctrl" }), u.jsx(m, { value: "1..9" })],
        });
      var a = o("WAWebKeyboardShortcuts").getShortcutKey(t);
      if (!a) return null;
      var i = g(a, !0),
        l = i.indexOf(c),
        s;
      l === -1
        ? (s = u.jsx(m, { value: i }))
        : (s = u.jsxs(u.Fragment, {
            children: [
              u.jsx(m, { value: "Shift" }),
              u.jsx(m, { value: i.substr(c.length) }),
            ],
          }));
      var d = r ? f(t) : null;
      return u.jsxs(p, { children: [d, s] });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("WAWebKeyboardShortcuts").getShortcutDisplayModifiers(e);
      return t
        ? t.map(function (e) {
            return u.jsx(m, { value: e }, e);
          })
        : [];
    }
    function g(e, t) {
      if ((t === void 0 && (t = !1), e.length !== 1 && e !== "DELETE"))
        return e;
      switch (e) {
        case ">":
          return c + ".";
        case "<":
          return c + ",";
        case "7":
          return c + "7";
        case "8":
          return t ? "8" : c + "8";
        case "DELETE":
          return c + "Delete";
      }
      return e.toLowerCase() !== e ? "" + c + e : e.toUpperCase();
    }
    ((l.KeyboardKey = m),
      (l.KeyboardKeyGroup = p),
      (l.KeyboardShortcut = _),
      (l.expandRawShortcut = g));
  },
  98,
);
