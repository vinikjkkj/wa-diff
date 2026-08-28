__d(
  "MWXSvgIcon",
  ["SVGIcon", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = function (n) {
        return s.jsx(
          e,
          babelHelpers.extends({}, n, {
            overflow: "visible",
            viewBox: "6 6 24 24",
          }),
        );
      };
      return ((t._isSVG = !0), o("SVGIcon").svgIcon(t));
    }
    var c = (function () {
        function e(e, t) {
          ((this.$1 = t),
            (this.originalComponent = e),
            (this.component = t ? u(e.component) : e));
        }
        var t = e.prototype;
        return (
          (t.asMenuItemIcon_ESCAPE_HATCH = function () {
            return new d(this.originalComponent, this.$1);
          }),
          e
        );
      })(),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c);
    function m(e, t) {
      return new c(e, t);
    }
    function p(e, t) {
      return new d(e, t);
    }
    ((l.MWXSvgIcon = c),
      (l.MWXSvgMenuItemIcon = d),
      (l.mwxSvgIcon = m),
      (l.mwxSvgMenuItemIcon = p));
  },
  98,
);
