__d(
  "WASuspiciousLinks",
  ["WAIdn", "WAJids", "WAPhoneFindCC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^(?:https?:\/\/)?([^/?#]+)(?:[/?#]|$)/i,
      s = "ZZ";
    function u(t, n, r, a) {
      var i = t.match(e),
        l = i && i[1];
      if (l == null) return null;
      var u = o("WAPhoneFindCC").phoneCC(r),
        c;
      if (n === "whatsapp") c = "";
      else {
        var d = o("WAJids").interpretAndValidateJid(n.toString());
        c =
          d.jidType !== "lidUser"
            ? o("WAPhoneFindCC").phoneCC(o("WAJids").toPhoneUserJid(n))
            : s;
      }
      var m = a.map(function (e) {
        return e.toLowerCase();
      });
      return o("WAIdn").findSuspiciousCharacters(l, c, u, m);
    }
    l.findSuspiciousCharacters = u;
  },
  98,
);
