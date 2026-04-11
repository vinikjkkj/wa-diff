__d(
  "getCometKey",
  ["CometKeys", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        8: "Backspace",
        13: "Enter",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        46: "Delete",
        107: "=",
        109: "-",
        187: "=",
        189: "-",
      },
      s = new Set(Object.values(r("CometKeys")));
    function u(t) {
      var n = t.key,
        o = t.which || t.keyCode;
      return (
        ((o >= 48 && o <= 57) || (o >= 65 && o <= 90)) &&
          (n = String.fromCharCode(o)),
        o >= 96 && o <= 105 && (n = String.fromCharCode(o - 48)),
        (!r("isStringNullOrEmpty")(n) && ((n = n.toLowerCase()), s.has(n))) ||
        (Object.prototype.hasOwnProperty.call(e, o) &&
          ((n = e[o].toLowerCase()), s.has(n)))
          ? n
          : null
      );
    }
    l.default = u;
  },
  98,
);
