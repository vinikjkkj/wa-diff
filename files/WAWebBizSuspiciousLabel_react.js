__d(
  "WAWebBizSuspiciousLabel.react",
  [
    "fbt",
    "WAWebAlertIcon.react",
    "WAWebDisplayType",
    "WAWebMsgLinks",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: { color: "x17t9dm2", $$css: !0 },
        container: {
          display: "x1rg5ohu",
          height: "xhvdbge",
          marginInlineStart: "xw01apr",
          backgroundColor: "x1936wsd",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
      };
    function m(e) {
      var t,
        n = e.displayType,
        r = e.link,
        a = e.msg;
      if (!(!a && !r)) {
        var i;
        if (
          (a == null || (t = a.ctwaContext) == null
            ? void 0
            : t.isSuspiciousLink) === !0
        )
          i = s._(/*BTDS*/ "Suspicious link");
        else if (r) {
          var l;
          (l = r.suspiciousCharacters) != null &&
            l.size &&
            (i = s._(/*BTDS*/ "Suspicious link"));
        } else if (a) {
          var u = o("WAWebMsgLinks").getSuspiciousLinks(a).length;
          if (u) {
            var c = o("WAWebMsgLinks").getLinksFromMsg(a).length;
            c === 1 || n === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY
              ? (i = s._(/*BTDS*/ "Suspicious link"))
              : (i = s._(
                  /*BTDS*/ '_j{"*":"{count} suspicious links","_1":"1 suspicious link"}',
                  [s._plural(u, "count")],
                ));
          }
        }
        return i;
      }
    }
    function p(t) {
      var n,
        a = m(t);
      return a == null
        ? null
        : c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.container,
                o("WAWebUISpacing").uiPadding.horiz8,
                o("WAWebUISpacing").uiMargin.end6,
                o("WAWebUISpacing").uiMargin.bottom2,
                ((n = t.msg) == null ? void 0 : n.ctwaContext) != null &&
                  o("WAWebUISpacing").uiMargin.bottom3,
                t.link && o("WAWebUISpacing").uiMargin.top3,
                t.link && o("WAWebUISpacing").uiMargin.bottom5,
              ),
              {
                children: [
                  c.jsx(o("WAWebAlertIcon.react").AlertIcon, {
                    displayInline: !0,
                    xstyle: [
                      d.icon,
                      o("WAWebUISpacing").uiMargin.top4,
                      o("WAWebUISpacing").uiMargin.end4,
                    ],
                  }),
                  c.jsx("span", {
                    className:
                      "x1n2onr6 x1c7jfne x190qgfh x1fcty0u x17t9dm2 xtvhhri",
                    children: a,
                  }),
                ],
              },
            ),
          );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.getSuspiciousLabel = m),
      (l.SuspiciousLabel = p));
  },
  226,
);
