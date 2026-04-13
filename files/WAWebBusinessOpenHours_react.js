__d(
  "WAWebBusinessOpenHours.react",
  [
    "fbt",
    "WAWebBusinessProfileUtils",
    "WAWebL10N",
    "WAWebUISpacing",
    "dompurify",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        openStatus: { color: "x1anpt5t", fontSize: "x1f6kntn", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.hours,
        i,
        l;
      if (n[0] !== a) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
          var s = o("WAWebBusinessProfileUtils").getBusinessOpenState(a),
            u = _(s);
          if (u == null) {
            l = null;
            break e;
          }
          i = r("dompurify").sanitize(u.toString());
        }
        ((n[0] = a), (n[1] = i), (n[2] = l));
      } else ((i = n[1]), (l = n[2]));
      if (l !== Symbol.for("react.early_return_sentinel")) return l;
      var m = i,
        p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e || (e = r("stylex"))).props([
            d.openStatus,
            o("WAWebUISpacing").uiMargin.bottom5,
          ])),
          (n[3] = p))
        : (p = n[3]);
      var f;
      n[4] !== m ? ((f = { __html: m }), (n[4] = m), (n[5] = f)) : (f = n[5]);
      var g;
      return (
        n[6] !== p || n[7] !== f
          ? ((g = c.jsx(
              "div",
              babelHelpers.extends({}, p, { dangerouslySetInnerHTML: f }),
            )),
            (n[6] = p),
            (n[7] = f),
            (n[8] = g))
          : (g = n[8]),
        g
      );
    }
    function p(e) {
      return e == null
        ? ""
        : e.toLocaleTimeString(r("WAWebL10N").getNormalizedLocale(), {
            hour: "numeric",
            minute: "2-digit",
          });
    }
    function _(e) {
      switch (e.status) {
        case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_24H:
          return s._(/*BTDS*/ "{open} 24 hours", [
            s._param(
              "open",
              '<span class="x1du590y">' +
                s._(/*BTDS*/ "Open").toString() +
                "</span>",
            ),
          ]);
        case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
          .OPEN_APPOINTMENT:
          return s._(/*BTDS*/ "{open} by appointment only", [
            s._param(
              "open",
              '<span class="x1du590y">' +
                s._(/*BTDS*/ "Open").toString() +
                "</span>",
            ),
          ]);
        case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN:
          if (e.openUntil && e.additionalOpen && e.additionalClose)
            return s._(
              /*BTDS*/ "{open} until {time}, {additionalOpenTime} - {additionalCloseTime}",
              [
                s._param(
                  "open",
                  '<span class="x1du590y">' +
                    s._(/*BTDS*/ "Open").toString() +
                    "</span>",
                ),
                s._param("time", p(e.openUntil)),
                s._param("additionalOpenTime", p(e.additionalOpen)),
                s._param("additionalCloseTime", p(e.additionalClose)),
              ],
            );
          if (e.openUntil)
            return s._(/*BTDS*/ "{open} until {time}", [
              s._param(
                "open",
                '<span class="x1du590y">' +
                  s._(/*BTDS*/ "Open").toString() +
                  "</span>",
              ),
              s._param("time", p(e.openUntil)),
            ]);
          break;
        case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED:
          return e.opensAt
            ? s._(/*BTDS*/ "{closed}, opens at {time}", [
                s._param(
                  "closed",
                  '<span class="x30a034">' +
                    s._(/*BTDS*/ "Closed now").toString() +
                    "</span>",
                ),
                s._param("time", p(e.opensAt)),
              ])
            : '<span class="x30a034">' +
                s._(/*BTDS*/ "Closed now").toString() +
                "</span>";
        case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED_TODAY:
          return (
            '<span class="x30a034">' +
            s._(/*BTDS*/ "Closed today").toString() +
            "</span>"
          );
      }
      return null;
    }
    l.default = m;
  },
  226,
);
