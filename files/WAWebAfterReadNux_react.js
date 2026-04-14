__d(
  "WAWebAfterReadNux.react",
  [
    "fbt",
    "WAWebAfterReadUtils",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralL10N",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebHandIcon.react",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebText_DONOTUSE.react",
    "WAWebTimerIcon.react",
    "WAWebWdsPictoDisappearingMessagesIcon.react",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        bold: { fontWeight: "xjs9k72", $$css: !0 },
        header: {
          fontSize: "x1603h9y",
          fontWeight: "x117nqv4",
          lineHeight: "x1u7k74",
          marginTop: "x9u28bd",
          textAlign: "x2b8uid",
          color: "x14ug900",
          $$css: !0,
        },
        subtitle: {
          marginTop: "x98l61r",
          fontSize: "x1f6kntn",
          textAlign: "x2b8uid",
          marginBottom: "xg6s713",
          $$css: !0,
        },
        icon: { marginInlineEnd: "xviac27", color: "xhslqc4", $$css: !0 },
        container: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          marginTop: "x1nmyh1g",
          color: "xhslqc4",
          fontSize: "x1nxh6w3",
          $$css: !0,
        },
        body: {
          marginTop: "x1rdy4ex",
          fontSize: "x1nxh6w3",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.duration,
        n = e.onOk,
        a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        i = a[1],
        l = function () {
          (i(),
            o("WAWebModalManager").ModalManager.closeSupportOrModal(),
            n && n());
        },
        d = function () {
          (i(),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getEphemeralFaqUrl(),
            ));
        };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        onOK: l,
        onCancel: d,
        cancelText: s._(/*BTDS*/ "Learn more"),
        children: [
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(
                o("WAWebWdsPictoDisappearingMessagesIcon.react")
                  .WdsPictoDisappearingMessagesIcon,
                { height: 88 },
              ),
            }),
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: c.header,
            children: s._(/*BTDS*/ "After reading timer"),
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: c.subtitle,
            children: s._(
              /*BTDS*/ "Protect your privacy and your device storage with the {afterReading} timer.",
              [
                s._param(
                  "afterReading",
                  u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                    xstyle: c.bold,
                    children: s._(/*BTDS*/ "After reading"),
                  }),
                ),
              ],
            ),
          }),
          u.jsx(m, {
            Icon: o("WAWebTimerIcon.react").TimerIcon,
            size: 18,
            children: s._(
              /*BTDS*/ "Messages you send will disappear from your chat {duration} after you send them.",
              [
                s._param(
                  "duration",
                  o("WAWebEphemeralL10N").getDisappearingMessageDurationString(
                    t,
                  ),
                ),
              ],
            ),
          }),
          u.jsx(m, {
            Icon: o("WAWebTimerIcon.react").TimerIcon,
            size: 18,
            children: s._(
              /*BTDS*/ "Messages you receive will disappear from your chat {duration} after you read them, or after {fallbackDuration} if they're not read.",
              [
                s._param(
                  "duration",
                  o("WAWebEphemeralL10N").getDisappearingMessageDurationString(
                    t,
                  ),
                ),
                s._param(
                  "fallbackDuration",
                  o("WAWebEphemeralL10N").getDisappearingMessageDurationString(
                    o("WAWebAfterReadUtils").getAfterReadFallbackDuration(),
                  ),
                ),
              ],
            ),
          }),
          u.jsx(m, {
            Icon: o("WAWebHandIcon.react").HandIcon,
            children: s._(
              /*BTDS*/ "People may find other ways to save messages.",
            ),
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.Icon,
        n = e.children,
        r = e.size;
      return u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
        xstyle: c.container,
        children: [
          u.jsx(t, {
            "aria-hidden": !0,
            displayInline: !0,
            width: r != null ? r : 24,
            height: r != null ? r : 24,
            xstyle: c.icon,
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: c.body,
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              children: n,
            }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
