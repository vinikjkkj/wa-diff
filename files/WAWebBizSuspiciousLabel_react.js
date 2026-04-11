__d(
  "WAWebBizSuspiciousLabel.react",
  [
    "fbt",
    "WAWebAlertIcon.react",
    "WAWebDisplayType",
    "WAWebMsgLinks",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(12),
        i;
      a[0] !== t ? ((i = m(t)), (a[0] = t), (a[1] = i)) : (i = a[1]);
      var l = i;
      if (l == null) return null;
      var s;
      if (
        a[2] !== t.link ||
        a[3] !== ((n = t.msg) == null ? void 0 : n.ctwaContext)
      ) {
        var u, p;
        ((s = (e || (e = r("stylex"))).props(
          d.container,
          o("WAWebUISpacing").uiPadding.horiz8,
          o("WAWebUISpacing").uiMargin.end6,
          o("WAWebUISpacing").uiMargin.bottom2,
          ((u = t.msg) == null ? void 0 : u.ctwaContext) != null &&
            o("WAWebUISpacing").uiMargin.bottom3,
          t.link && o("WAWebUISpacing").uiMargin.top3,
          t.link && o("WAWebUISpacing").uiMargin.bottom5,
        )),
          (a[2] = t.link),
          (a[3] = (p = t.msg) == null ? void 0 : p.ctwaContext),
          (a[4] = s));
      } else s = a[4];
      var _, f;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = c.jsx(o("WAWebAlertIcon.react").AlertIcon, {
            displayInline: !0,
            xstyle: [
              d.icon,
              o("WAWebUISpacing").uiMargin.top4,
              o("WAWebUISpacing").uiMargin.end4,
            ],
          })),
          (f = {
            className: "x1n2onr6 x1c7jfne x190qgfh x1fcty0u x17t9dm2 xtvhhri",
          }),
          (a[5] = _),
          (a[6] = f))
        : ((_ = a[5]), (f = a[6]));
      var g;
      a[7] !== l
        ? ((g = c.jsx("span", babelHelpers.extends({}, f, { children: l }))),
          (a[7] = l),
          (a[8] = g))
        : (g = a[8]);
      var h;
      return (
        a[9] !== s || a[10] !== g
          ? ((h = c.jsxs(
              "div",
              babelHelpers.extends({}, s, { children: [_, g] }),
            )),
            (a[9] = s),
            (a[10] = g),
            (a[11] = h))
          : (h = a[11]),
        h
      );
    }
    ((l.getSuspiciousLabel = m), (l.SuspiciousLabel = p));
  },
  226,
);
