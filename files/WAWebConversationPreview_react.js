__d(
  "WAWebConversationPreview.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebConversationBackground.react",
    "WAWebMsgCheckIcon.react",
    "WAWebMsgDblcheckIcon.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = {
        previewMessages: {
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          flexBasis: "x1r8uery",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x14hj8or",
          paddingInlineEnd: "xfwifpm",
          paddingLeft: null,
          paddingRight: null,
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        previewBubble: {
          maxWidth: "xggofmx",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        previewBubbleIncoming: {
          backgroundColor: "x1ew7x2d",
          borderStartStartRadius: "x1bczwif",
          $$css: !0,
        },
        previewBubbleOutgoing: {
          backgroundColor: "x1g5lz36",
          borderEndEndRadius: "x1e7945m",
          $$css: !0,
        },
        spacerCheckIcon: { width: "xn6xy2s", $$css: !0 },
        previewMeta: {
          position: "x1n2onr6",
          zIndex: "x1n327nk",
          float: "xtrg13t",
          marginTop: "xhsvlbd",
          marginBottom: "xz62fqu",
          marginInlineStart: "x1lziwak",
          marginInlineEnd: "x7g7pl8",
          color: "x1bvqhpb",
          fontSize: "x1ncwhqj",
          height: "xx3o462",
          lineHeight: "x152skdk",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        ackBlue: { color: "x1rv0e52", $$css: !0 },
      };
    function p(e, t) {
      var n = new Date();
      return (
        n.setHours(e, t, 0, 0),
        o("WAWebClock").Clock.timestampStr(Math.floor(n.getTime() / 1e3))
      );
    }
    function _(t) {
      var n = t.direction,
        a = t.icon,
        i = t.message,
        l = t.time;
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            n === "incoming"
              ? o("WDSFlex.stylex").wdsFlex.selfStart
              : o("WDSFlex.stylex").wdsFlex.selfEnd,
            m.previewBubble,
            n === "incoming"
              ? m.previewBubbleIncoming
              : m.previewBubbleOutgoing,
          ),
          {
            children: [
              d.jsx("div", {
                className: "xt0psk2",
                children: d.jsxs(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  children: [
                    i,
                    d.jsxs("span", {
                      className:
                        "x1ncwhqj x3nfvp2 xxymvpz xlshs6z xqtp20y xexx8yu x18d9i69 x181vq82 x1uc92m",
                      "aria-hidden": !0,
                      children: [
                        d.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            e.props(
                              o("WDSFlex.stylex").wdsFlex.flexGrow0,
                              o("WDSFlex.stylex").wdsFlex.flexShrink0,
                            ),
                            { children: l },
                          ),
                        ),
                        a != null &&
                          d.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                o("WDSFlex.stylex").wdsFlex.flexGrow0,
                                o("WDSFlex.stylex").wdsFlex.flexShrink0,
                                m.spacerCheckIcon,
                              ),
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              }),
              d.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WDSFlex.stylex").wdsFlex.flex,
                    o("WDSFlex.stylex").wdsFlex.alignCenter,
                    o("WDSFlex.stylex").wdsFlex.columnGapQuarter,
                    m.previewMeta,
                  ),
                  { children: [d.jsx("span", { children: l }), a] },
                ),
              ),
            ],
          },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.justifyEnd,
            o("WDSFlex.stylex").wdsFlex.rowGapSingle,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.flexShrink1,
            m.previewMessages,
          ),
          {
            "data-testid": void 0,
            children: [
              d.jsx(_, {
                direction: "incoming",
                message: u._(
                  /*BTDS*/ "Try out themes! Hover over one to preview it \ud83c\udfa8\u2728",
                ),
                time: p(11, 30),
              }),
              d.jsx(_, {
                direction: "outgoing",
                message: u._(
                  /*BTDS*/ "This is what your chats will look like with this theme",
                ),
                time: p(11, 31),
                icon: d.jsx(o("WAWebMsgCheckIcon.react").MsgCheckIcon, {
                  height: 11,
                  width: 16,
                }),
              }),
              d.jsx(_, {
                direction: "incoming",
                message: u._(
                  /*BTDS*/ "Selecting a theme replaces your default chat theme",
                ),
                time: p(11, 32),
              }),
              d.jsx(_, {
                direction: "outgoing",
                message: u._(/*BTDS*/ "Only you see your chat themes"),
                time: p(11, 33),
                icon: d.jsx(o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon, {
                  height: 11,
                  width: 16,
                  xstyle: m.ackBlue,
                }),
              }),
            ],
          },
        ),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.previewType,
        n = e.showDoodle,
        a = e.title,
        i = e.wallpaper;
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx("header", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_amid",
              "_aqy6",
              "_ajy1",
            ),
            children: d.jsx("span", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ajy2",
                "_amig",
              ),
              children: a,
            }),
          }),
          d.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: i,
            showDoodle: n,
          }),
          t === "theme" && d.jsx(f, {}),
          d.jsx("footer", { className: "_amm5" }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
