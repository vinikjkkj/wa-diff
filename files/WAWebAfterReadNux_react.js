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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.duration,
        a = e.onOk,
        i = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        l = i[1],
        d;
      t[0] !== a || t[1] !== l
        ? ((d = function () {
            (l(),
              o("WAWebModalManager").ModalManager.closeSupportOrModal(),
              a && a());
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = d))
        : (d = t[2]);
      var p = d,
        _;
      t[3] !== l
        ? ((_ = function () {
            (l(),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebFaqUrl").getEphemeralFaqUrl(),
              ));
          }),
          (t[3] = l),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Learn more")), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(
                o("WAWebWdsPictoDisappearingMessagesIcon.react")
                  .WdsPictoDisappearingMessagesIcon,
                { height: 88 },
              ),
            }),
          })),
          (t[6] = h))
        : (h = t[6]);
      var y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: c.header,
            children: s._(/*BTDS*/ "After reading timer"),
          })),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
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
          })),
          (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] !== n
        ? ((b = u.jsx(m, {
            Icon: o("WAWebTimerIcon.react").TimerIcon,
            size: 18,
            children: s._(
              /*BTDS*/ "Messages you send will disappear from your chat {duration} after you send them.",
              [
                s._param(
                  "duration",
                  o("WAWebEphemeralL10N").getDisappearingMessageDurationString(
                    n,
                  ),
                ),
              ],
            ),
          })),
          (t[9] = n),
          (t[10] = b))
        : (b = t[10]);
      var v;
      if (t[11] !== n) {
        var S;
        (t[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = o("WAWebEphemeralL10N").getDisappearingMessageDurationString(
              o("WAWebAfterReadUtils").getAfterReadFallbackDuration(),
            )),
            (t[13] = S))
          : (S = t[13]),
          (v = u.jsx(m, {
            Icon: o("WAWebTimerIcon.react").TimerIcon,
            size: 18,
            children: s._(
              /*BTDS*/ "Messages you receive will disappear from your chat {duration} after you read them, or after {fallbackDuration} if they're not read.",
              [
                s._param(
                  "duration",
                  o("WAWebEphemeralL10N").getDisappearingMessageDurationString(
                    n,
                  ),
                ),
                s._param("fallbackDuration", S),
              ],
            ),
          })),
          (t[11] = n),
          (t[12] = v));
      } else v = t[12];
      var R;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(m, {
            Icon: o("WAWebHandIcon.react").HandIcon,
            children: s._(
              /*BTDS*/ "People may find other ways to save messages.",
            ),
          })),
          (t[14] = R))
        : (R = t[14]);
      var L;
      return (
        t[15] !== f || t[16] !== p || t[17] !== b || t[18] !== v
          ? ((L = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              onOK: p,
              onCancel: f,
              cancelText: g,
              children: [h, y, C, b, v, R],
            })),
            (t[15] = f),
            (t[16] = p),
            (t[17] = b),
            (t[18] = v),
            (t[19] = L))
          : (L = t[19]),
        L
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.Icon,
        r = e.children,
        a = e.size,
        i = a != null ? a : 24,
        l = a != null ? a : 24,
        s;
      t[0] !== n || t[1] !== i || t[2] !== l
        ? ((s = u.jsx(n, {
            "aria-hidden": !0,
            displayInline: !0,
            width: i,
            height: l,
            xstyle: c.icon,
          })),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = s))
        : (s = t[3]);
      var d;
      t[4] !== r
        ? ((d = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: c.body,
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              children: r,
            }),
          })),
          (t[4] = r),
          (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== s || t[7] !== d
          ? ((m = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              xstyle: c.container,
              children: [s, d],
            })),
            (t[6] = s),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = d;
  },
  226,
);
