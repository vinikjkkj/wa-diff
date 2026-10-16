__d(
  "WAWebHatchShareStatusDecoder",
  ["WAWebHatchJsonReaders", "WAWebHatchUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      /(?:[\0- \x7F-\xA0\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u1680\u180E\u2000-\u200F\u2028-\u202F\u205F-\u2064\u2066-\u206F\u3000\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/;
    function s(e) {
      var t = o("WAWebHatchJsonReaders").readBool(e, "ok");
      if (t == null) return null;
      var n = o("WAWebHatchJsonReaders").readString(e, "url");
      return {
        ok: t,
        publishedUrl: t && n != null && n !== "" ? n : null,
        shareType: o("WAWebHatchJsonReaders").readString(e, "share_type"),
      };
    }
    function u(t) {
      if (e.test(t)) return null;
      var n = o("WAWebHatchUrl").toHttpsUrl(t);
      return n != null && c(n) ? n : null;
    }
    function c(e) {
      var t = e.slice(e.indexOf("//") + 2).split(/[/?#]/, 1)[0];
      return t.replace(/:\d*$/, "").toLowerCase() === new URL(e).hostname;
    }
    ((l.decodeHatchShareStatus = s), (l.toHatchShareableUrl = u));
  },
  98,
);
