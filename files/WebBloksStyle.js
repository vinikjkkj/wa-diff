__d(
  "WebBloksStyle",
  ["WebBloksCSSUtils", "WebBloksLayout", "WebBloksWrapper", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e, t, n) {
      n === void 0 && (n = !1);
      var o = e.getValues(),
        a = u(null);
      e.uiMutableContainer.domNode = a;
      var i =
          n === !0
            ? {
                pointerEvents: "auto",
                cursor: "pointer",
                WebkitTapHighlightColor: "transparent",
              }
            : void 0,
        l = babelHelpers.extends({}, r("WebBloksLayout")(o), i, t),
        s = r("WebBloksWrapper")(e, l, a),
        c = s.hasWrapper,
        m = s.stylesFromExtensions,
        p = s.wrapper,
        _ = s.wrapperProps;
      return (
        m && Object.assign(l, m),
        { ref: a, style: c ? d : l, wrapper: p, wrapperProps: _ }
      );
    }
    var d = { height: "100%", width: "100%", pointerEvents: "inherit" };
    function m(e) {
      return { className: v.container, style: e };
    }
    var p;
    typeof p != "number" && (p = 0);
    function _() {
      return (typeof p != "number" && (p = 0), ++p);
    }
    function f(e, t) {
      return typeof t == "object"
        ? [["." + e, o("WebBloksCSSUtils").styleObjectToCSS(t)]]
        : Object.entries(t("." + e)).map(function (e) {
            var t = e[0],
              n = e[1];
            return [t, o("WebBloksCSSUtils").styleObjectToCSS(n)];
          });
    }
    function g(e) {
      return Object.fromEntries(
        Object.entries(e).map(function (e) {
          var t = e[0],
            n = e[1],
            r = "wbloks_" + _();
          return (
            f(r, n).forEach(function (e) {
              var t = e[0],
                n = e[1];
              return o("WebBloksCSSUtils").insertCssRule(
                t + " {\n" + n + "\n}",
              );
            }),
            [t, r]
          );
        }),
      );
    }
    function h(e) {
      var t = "wbloks_" + _() + " ";
      return (
        o("WebBloksCSSUtils").insertCssRule(
          "@keyframes " +
            t +
            " {\n" +
            Object.entries(e)
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return (
                  t +
                  " {\n" +
                  o("WebBloksCSSUtils").styleObjectToCSS(n) +
                  "\n }"
                );
              })
              .join("\n") +
            "\n}",
        ),
        t
      );
    }
    function y(e, t) {
      var n = {};
      return (
        o("WebBloksCSSUtils").insertCssRule(
          "@supports " +
            C(e) +
            " {\n" +
            Object.entries(t)
              .map(function (e) {
                var t = e[0],
                  r = e[1],
                  o = "wbloks_" + _();
                return (
                  (n[t] = o),
                  f(o, r)
                    .map(function (e) {
                      var t = e[0],
                        n = e[1];
                      return t + " {\n" + n + "\n}";
                    })
                    .join("\n")
                );
              })
              .join("\n") +
            "}",
        ),
        n
      );
    }
    function C(e) {
      var t = e.negate === !0 ? "not " : "";
      return e.type === "selector"
        ? t + ("selector(" + e.selector + ")")
        : t + ("(" + e.key + ": " + e.value + ")");
    }
    function b() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.filter(Boolean).join(" ");
    }
    var v = g({
      container: {
        boxSizing: "border-box",
        display: "flex",
        flex: "0 1 auto",
        flexDirection: "row",
        pointerEvents: "auto",
        position: "relative",
        minHeight: 0,
        minWidth: 0,
      },
    });
    ((l.useStyle = c),
      (l.getStyleProps = m),
      (l.createStyles = g),
      (l.keyframes = h),
      (l.createStylesIfSupported = y),
      (l.classNames = b),
      (l.WebBloksStyles = v));
  },
  98,
);
