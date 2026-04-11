__d(
  "WAXmlNode",
  ["WAHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = (function () {
        function t(t, n, r) {
          (n === void 0 && (n = e),
            r === void 0 && (r = null),
            (this.tag = t),
            (this.attrs = n),
            (this.content = r));
        }
        var n = t.prototype;
        return (
          (n.toString = function () {
            var e = "<" + this.tag;
            e += u(this.attrs);
            var t = this.content;
            return (
              Array.isArray(t)
                ? (e += ">" + t.map(String).join("") + "</" + this.tag + ">")
                : t instanceof Uint8Array
                  ? (e += ">" + c(t) + "</" + this.tag + ">")
                  : t != null
                    ? (e += ">" + String(t) + "</" + this.tag + ">")
                    : (e += " />"),
              e
            );
          }),
          t
        );
      })();
    function u(e) {
      for (var t = Object.keys(e), n = "", r = 0; r < t.length; r++) {
        var o = t[r];
        n += " " + o + '="' + e[o].toString() + '"';
      }
      return n;
    }
    function c(e) {
      var t = "";
      return (
        e.length === 0
          ? (t = "<!-- empty binary -->")
          : e.length < 50
            ? (t = o("WAHex").bytesToDebugString(e))
            : (t = "<!-- " + e.length + " bytes -->"),
        t
      );
    }
    ((l.XmlNode = s), (l.attrsToString = u), (l.uint8ArrayToDebugString = c));
  },
  98,
);
