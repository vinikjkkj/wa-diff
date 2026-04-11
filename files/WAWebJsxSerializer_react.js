__d(
  "WAWebJsxSerializer.react",
  [
    "WAWebBulletedListMutatorComponent.react",
    "WAWebFormatSerializer",
    "WAWebJsxTextSerializer",
    "WAWebNumberedListMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).cloneElement,
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebFormatSerializer"));
    ((u.onText = r("WAWebJsxTextSerializer")),
      (u.onDelimiter = function (e) {}),
      (u.onRoot = function (e) {
        return (d(e), c(e));
      }),
      (u.onMutator = function (e, t, n, r) {
        return e.jsx(c(t), n, r);
      }));
    function c(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        if (r !== void 0) {
          if (typeof r == "string") {
            t.push(r);
            continue;
          }
          var o = "jsx-child-" + n;
          t.push(s(r, { key: o }));
        }
      }
      return t;
    }
    function d(e) {
      var t = -1;
      for (var n of e) {
        var o;
        if (
          (n == null ? void 0 : n.type) ===
          r("WAWebNumberedListMutatorComponent.react")
        ) {
          var a = n == null || (o = n.props) == null ? void 0 : o.children;
          if (Array.isArray(a))
            for (var i of a) {
              var l,
                u = i == null || (l = i.props) == null ? void 0 : l.numbering;
              u != null && (t = Math.max(t, parseInt(u, 10)));
            }
        }
      }
      if (t >= 10)
        for (var c = 0; c < e.length; c++) {
          var d = e[c];
          ((d == null ? void 0 : d.type) !==
            r("WAWebNumberedListMutatorComponent.react") &&
            (d == null ? void 0 : d.type) !==
              r("WAWebBulletedListMutatorComponent.react")) ||
            (e[c] = s(d, { largerIndentation: !0 }));
        }
    }
    l.default = u;
  },
  98,
);
