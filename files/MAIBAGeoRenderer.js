__d(
  "MAIBAGeoRenderer",
  ["BaseMAIBARenderer", "GeoBaseText.react", "GeoTextUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, o, a) {
      if ((a === void 0 && (a = "break-word"), typeof e != "function"))
        return null;
      var i = e;
      return s.jsx(i, {
        children: function (i) {
          return s.jsx(r("GeoBaseText.react"), {
            color: t,
            display: "inline",
            overflowWrap: a,
            size: n,
            weight: o,
            whiteSpace: "pre-wrap",
            children: i,
          });
        },
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      if (typeof e == "string") return e;
      if (typeof e == "number") return String(e);
      if (typeof e == "function") {
        var t = e.plainText;
        if (t != null) return String(t);
      }
      return null;
    }
    function d(e) {
      return u(e, "value", "value");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      return u(e, "value", "value", void 0, "inherit");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return u(e, "value", "value", "bold");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      return u(e, "value", o("GeoTextUtils").mapHeadingLevelToSize(t));
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.getString = o("BaseMAIBARenderer").getString),
      (l.getInt = o("BaseMAIBARenderer").getInt),
      (l.getBool = o("BaseMAIBARenderer").getBool),
      (l.getPlainText = c),
      (l.getText = d),
      (l.getCellText = m),
      (l.getBoldText = p),
      (l.getHeadingText = _));
  },
  98,
);
