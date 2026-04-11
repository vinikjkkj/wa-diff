__d(
  "WebBloksCSSUtils",
  ["WebBloksIsUnitTest", "WebBloksSSRUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "";
    function u(e, t) {
      switch (e) {
        case "start":
          return t ? "right" : "left";
        case "end":
          return t ? "left" : "right";
        case "marginStart":
          return t ? "marginRight" : "marginLeft";
        case "marginEnd":
          return t ? "marginLeft" : "marginRight";
        case "paddingStart":
          return t ? "paddingRight" : "paddingLeft";
        case "paddingEnd":
          return t ? "paddingLeft" : "paddingRight";
      }
      return e;
    }
    function c() {
      return s;
    }
    function d(t) {
      var n;
      if (!(r("WebBloksIsUnitTest")() || t == null)) {
        if (!o("WebBloksSSRUtils").canUseDOM) {
          s += t;
          return;
        }
        e || (e = m());
        var a = o("WebBloksUtils").nullthrows(
          (n = e) == null ? void 0 : n.sheet,
        );
        try {
          a.insertRule(o("WebBloksUtils").nullthrows(t), a.cssRules.length);
        } catch (e) {}
      }
    }
    function m() {
      var e = document.createElement("style");
      (e.setAttribute("type", "text/css"),
        e.setAttribute("data-styled", "true"));
      var t = document.head || document.getElementsByTagName("head")[0];
      return (
        o("WebBloksUtils").nullthrows(t, "Unexpected null: head"),
        t.appendChild(e),
        e
      );
    }
    function p(e) {
      return Object.entries(e)
        .map(function (e) {
          var t = e[0],
            n = e[1],
            r = n == null || typeof n == "boolean" || n === "";
          return r
            ? ""
            : (typeof n == "number" && n !== 0 && !_[t] && (n += "px"),
              C(t) + ": " + String(n).trim() + ";");
        })
        .join("\n	");
    }
    var _ = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    };
    function f(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var g = ["Webkit", "ms", "Moz", "O"];
    Object.keys(_).forEach(function (e) {
      g.forEach(function (t) {
        _[f(t, e)] = _[e];
      });
    });
    var h = /([A-Z])/g,
      y = /^ms-/;
    function C(e) {
      return e.replace(h, "-$1").toLowerCase().replace(y, "-ms-");
    }
    ((l.getRtlAwareCssAttr = u),
      (l.getSSRStyles = c),
      (l.insertCssRule = d),
      (l.styleObjectToCSS = p));
  },
  98,
);
