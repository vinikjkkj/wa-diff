__d(
  "WAWebBusinessOpenHours.react",
  [
    "fbt",
    "WAWebBusinessProfileUtils",
    "WAWebL10N",
    "WAWebUISpacing",
    "dompurify",
    "react",
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
      var n = t.hours,
        a = o("WAWebBusinessProfileUtils").getBusinessOpenState(n),
        i = _(a);
      if (i == null) return null;
      var l = r("dompurify").sanitize(i.toString());
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            d.openStatus,
            o("WAWebUISpacing").uiMargin.bottom5,
          ]),
          { dangerouslySetInnerHTML: { __html: l } },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
