__d(
  "GeoTextUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      truncate: {
        whiteSpace: "xuxw1ft",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        textOverflow: "xlyipyv",
        $$css: !0,
      },
    };
    function s() {
      return e.truncate;
    }
    function u(e) {
      switch (e) {
        case "header1":
          return 1;
        case "header2":
          return 2;
        case "header3":
          return 3;
        case "header4":
          return 4;
        default:
          return;
      }
    }
    function c(e) {
      switch (e) {
        case "value":
        case "header4":
          return "valueDescription";
        case "data":
          return "header2";
        default:
          return "value";
      }
    }
    function d(e) {
      var t = e.display,
        n = t === void 0 ? "block" : t,
        r = e.size,
        o = { color: "heading", display: n, size: "value", weight: "normal" };
      return (
        (o.size = c(r)),
        r === "data" && (o.weight = "bold"),
        r === "value" && (o.color = "valueDescription"),
        o
      );
    }
    function m(e) {
      switch (e) {
        case "header1":
        case "header2":
        case "header3":
        case "header4":
          return !0;
        default:
          return !1;
      }
    }
    function p(e) {
      switch (e) {
        case "header2":
          return 2;
        case "header3":
          return 3;
        case "header4":
          return 4;
        default:
          return 1;
      }
    }
    function _(e) {
      switch (e) {
        case 2:
          return "header2";
        case 3:
          return "header3";
        case 4:
          return "header4";
        default:
          return "header1";
      }
    }
    ((l.getTextTruncateStyle = s),
      (l.getAriaLevelForSize = u),
      (l.getPairingTextSize = c),
      (l.getPairingTextProps = d),
      (l.isHeader = m),
      (l.mapHeadingSizeToLevel = p),
      (l.mapHeadingLevelToSize = _));
  },
  98,
);
