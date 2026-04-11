__d(
  "WAWebBizBotCommandsSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebClickable.react",
    "WAWebComposeBoxActions",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        command: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "x16ar8wu",
          $$css: !0,
        },
        commands: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexWrap: "x1a02dak",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(11),
        i = t.businessProfile,
        l =
          (n = o("useWAWebModelValues").useModelValues(i, [
            "commands",
            "commandsDescription",
          ])) != null
            ? n
            : {},
        u = l.commands,
        m = l.commandsDescription;
      if (u == null || !u.length) return null;
      var _;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Commands")), (a[0] = _))
        : (_ = a[0]);
      var f;
      a[1] !== m
        ? ((f =
            !!m &&
            c.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "span",
              children: m,
            })),
          (a[1] = m),
          (a[2] = f))
        : (f = a[2]);
      var g;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex"))).props(
            d.commands,
            o("WAWebUISpacing").uiMargin.top8,
          )),
          (a[3] = g))
        : (g = a[3]);
      var h;
      a[4] !== u ? ((h = u.map(p)), (a[4] = u), (a[5] = h)) : (h = a[5]);
      var y;
      a[6] !== h
        ? ((y = c.jsx("div", babelHelpers.extends({}, g, { children: h }))),
          (a[6] = h),
          (a[7] = y))
        : (y = a[7]);
      var C;
      return (
        a[8] !== f || a[9] !== y
          ? ((C = c.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              { titleTestId: "section-commands", title: _, children: [f, y] },
            )),
            (a[8] = f),
            (a[9] = y),
            (a[10] = C))
          : (C = a[10]),
        C
      );
    }
    function p(e) {
      var t,
        n = e.description,
        r = e.name,
        a = "/" + r + " ",
        i = function () {
          o("WAWebComposeBoxActions").ComposeBoxActions.paste(null, a, {
            insertLeadingSpace: !0,
          });
        };
      return c.jsx(
        o("WAWebClickable.react").Clickable,
        {
          title: n,
          onClick: i,
          xstyle: [
            d.command,
            (t = o("WAWebUISpacing")).uiPadding.vert4,
            t.uiPadding.horiz10,
            t.uiMargin.end8,
            t.uiMargin.vert4,
          ],
          children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            color: "primary",
            children: a,
          }),
        },
        r,
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
