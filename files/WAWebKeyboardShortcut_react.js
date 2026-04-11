__d(
  "WAWebKeyboardShortcut.react",
  [
    "WAWebActions",
    "WAWebFlex.react",
    "WAWebKeyboardShortcuts",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(3),
        n = e.value,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [4, 8]), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = u.jsx(o("WAWebFlex.react").FlexItem, {
              inline: !0,
              xstyle: d.key,
              padding: r,
              children: n,
            })),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(6),
        r,
        a;
      n[0] !== t
        ? ((r = t.children),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i;
      return (
        n[3] !== r || n[4] !== a
          ? ((i = u.jsx(
              o("WAWebFlex.react").FlexRow,
              babelHelpers.extends({ inline: !0, align: "center", gap: 4 }, a, {
                children: r,
              }),
            )),
            (n[3] = r),
            (n[4] = a),
            (n[5] = i))
          : (i = n[5]),
        i
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.action,
        r = e.addModifiers,
        a = r === void 0 ? !0 : r;
      if (n === o("WAWebActions").Action.OPEN_NTH_CHAT) {
        var i;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = u.jsxs(p, {
                children: [
                  u.jsx(m, { value: "Ctrl" }),
                  u.jsx(m, { value: "1..9" }),
                ],
              })),
              (t[0] = i))
            : (i = t[0]),
          i
        );
      }
      var l, s;
      if (t[1] !== n) {
        s = Symbol.for("react.early_return_sentinel");
        e: {
          var d = o("WAWebKeyboardShortcuts").getShortcutKey(n);
          if (!d) {
            s = null;
            break e;
          }
          var _ = g(d, !0),
            h = _.indexOf(c);
          if (h === -1) l = u.jsx(m, { value: _ });
          else {
            var y;
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = u.jsx(m, { value: "Shift" })), (t[4] = y))
              : (y = t[4]);
            var C = u.jsx(m, { value: _.substr(c.length) }),
              b;
            (t[5] !== C
              ? ((b = u.jsxs(u.Fragment, { children: [y, C] })),
                (t[5] = C),
                (t[6] = b))
              : (b = t[6]),
              (l = b));
          }
        }
        ((t[1] = n), (t[2] = l), (t[3] = s));
      } else ((l = t[2]), (s = t[3]));
      if (s !== Symbol.for("react.early_return_sentinel")) return s;
      var v;
      t[7] !== n || t[8] !== a
        ? ((v = a ? f(n) : null), (t[7] = n), (t[8] = a), (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      return (
        t[10] !== S || t[11] !== l
          ? ((R = u.jsxs(p, { children: [S, l] })),
            (t[10] = S),
            (t[11] = l),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
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
