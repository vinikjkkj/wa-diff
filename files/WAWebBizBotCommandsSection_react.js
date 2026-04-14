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
        a = t.businessProfile,
        i =
          (n = o("useWAWebModelValues").useModelValues(a, [
            "commands",
            "commandsDescription",
          ])) != null
            ? n
            : {},
        l = i.commands,
        u = i.commandsDescription;
      return l == null || !l.length
        ? null
        : c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-commands",
            title: s._(/*BTDS*/ "Commands"),
            children: [
              !!u &&
                c.jsx(o("WAWebText.react").WAWebTextTitle, {
                  as: "span",
                  children: u,
                }),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.commands,
                    o("WAWebUISpacing").uiMargin.top8,
                  ),
                  {
                    children: l.map(function (e) {
                      var t,
                        n = e.description,
                        r = e.name,
                        a = "/" + r + " ",
                        i = function () {
                          o("WAWebComposeBoxActions").ComposeBoxActions.paste(
                            null,
                            a,
                            { insertLeadingSpace: !0 },
                          );
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
                    }),
                  },
                ),
              ),
            ],
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
