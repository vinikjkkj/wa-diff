__d(
  "WAWebContactManagerContactName",
  ["WAWebWamEnumOppositeVisibleIdentificationType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WAWebWamEnumOppositeVisibleIdentificationType"))
          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER,
      ]);
    function u(e) {
      var t = e.displayName,
        n = e.notifyName,
        r = e.type;
      return t != null && t !== "" && !(r != null && s.has(r))
        ? t
        : n != null && n !== ""
          ? n
          : null;
    }
    l.resolveContactManagerName = u;
  },
  98,
);
