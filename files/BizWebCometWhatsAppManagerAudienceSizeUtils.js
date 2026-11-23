__d(
  "BizWebCometWhatsAppManagerAudienceSizeUtils",
  ["fbt", "NumberFormat", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ ""),
      u = s._(/*BTDS*/ ""),
      c = 1e3,
      d = s._(/*BTDS*/ "", [
        s._param(
          "audience size threshold",
          o("intlNumUtils").formatNumberWithThousandDelimiters(c, 0),
        ),
      ]);
    function m(e) {
      return e != null && e <= c;
    }
    function p(e, t) {
      return (
        isNaN(Number(e)) || Number(e) <= 0 || isNaN(Number(t)) || Number(t) <= 0
      );
    }
    var _ = 1e9,
      f = 1e6;
    function g(e) {
      if (e >= _) {
        var t = e / _;
        return [
          o("intlNumUtils").formatNumberWithThousandDelimiters(t, 1),
          "billion",
        ];
      } else if (e >= f) {
        var n = e / f;
        return [
          o("intlNumUtils").formatNumberWithThousandDelimiters(n, 1),
          "million",
        ];
      }
      return [o("NumberFormat").formatInteger(e), ""];
    }
    function h(e, t, n) {
      var r;
      return p(t, n)
        ? "NOT_AVAILABLE"
        : m((r = e != null ? e : n) != null ? r : t)
          ? "BELOW_THRESHOLD"
          : "RANGE";
    }
    function y(t, n, r, o) {
      o === void 0 && (o = !1);
      var a = h(t, n, r);
      if (a === "NOT_AVAILABLE") return String(e);
      if (a === "BELOW_THRESHOLD") return String(o ? d : u);
      var i = g(Number(n)),
        l = i[0],
        s = i[1],
        c = g(Number(r)),
        m = c[0],
        p = c[1];
      if (s === p && s !== "") return l + " - " + m + " " + p;
      var _ = s !== "" ? l + " " + s : l,
        f = p !== "" ? m + " " + p : m;
      return _ + " - " + f;
    }
    ((l.getAudienceSizeLabelKind = h), (l.getFormattedAudienceSizeRange = y));
  },
  226,
);
