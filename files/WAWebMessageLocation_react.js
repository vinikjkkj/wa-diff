__d(
  "WAWebMessageLocation.react",
  [
    "WALogger",
    "WAWebBizCtwaContext.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMap.react",
    "WAWebMapUtils",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = 150,
      m = 270,
      p = 330,
      _ = 250,
      f = 474,
      g = ["foursquare.com", "facebook.com", "maps.google.com"],
      h = {
        container: { position: "x1n2onr6", maxWidth: "xz9dduz", $$css: !0 },
        containerAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        title: {
          display: "x1lliihq",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1f6kntn",
          fontWeight: "xo1l8bm",
          textOverflow: "xlyipyv",
          width: "xeq5yr9",
          whiteSpace: "xuxw1ft",
          textDecoration:
            "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
          color: "x1ph7ams x17f7hit",
          backgroundColor: "xn69kzl",
          textUnderlineOffset: "xrys4gj xhmieyt",
          $$css: !0,
        },
        text: {
          boxSizing: "x9f619",
          maxWidth: "xz9dduz",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        thumbBody: {
          zIndex: "x1vjfegm",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          WebkitTransition: "xtzlr6k",
          $$css: !0,
        },
        caption: { boxSizing: "x9f619", maxWidth: "x18vua2f", $$css: !0 },
        ctwaContainerWidth: { maxWidth: "xdduh5l", $$css: !0 },
      };
    function y(t) {
      var n,
        a,
        i = t.msg,
        l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (n = o("WAWebMsgGetters")).getCaption,
          n.getClientUrl,
          (a = o("WAWebFrontendMsgGetters")).getDir,
          n.getFooter,
          n.getId,
          n.getIsGroupMsg,
          n.getIsSentByMe,
          n.getLat,
          n.getLng,
          a.getRtl,
          a.getSenderObj,
          n.getType,
          n.getCtwaContext,
          n.getSupportsMessageFooter,
          n.getIsDynamicReplyButtonsMsg,
          a.getHasBodyOrFooter,
        ]),
        u = l[0],
        y = l[1],
        b = l[2],
        v = l[3],
        S = l[4],
        R = l[5],
        L = l[6],
        E = l[7],
        k = l[8],
        I = l[9],
        T = l[10],
        D = l[11],
        x = l[12],
        $ = l[13],
        P = l[14],
        N = l[15],
        M = a.getChat(t.msg.unsafe()),
        w = function () {
          var e = i.get("loc");
          if (i.get("loc"))
            return (
              (e = e.split("\n")),
              e.length === 2 ? { name: e[0], addr: e[1] } : { name: e }
            );
        },
        A = w(),
        F = A == null ? void 0 : A.name,
        O = o("WAWebMapUtils").getMapUrl(E, k, F),
        B = y || O,
        W = r("WAWebURLUtils").isHttps(B),
        q = r("WAWebURLUtils").hostname(B),
        U = !g.some(function (e) {
          return q.includes(e);
        }),
        V = !P && (U || !!(W && A && !B.includes("javascript")));
      !W &&
        B.toLowerCase().startsWith("javascript:") &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(["Bad url: ", ""])),
            B,
          )
          .sendLogs("URL error");
      var H = V
          ? c.jsx(C, { pageUrl: B, msg: i, loc: A, isUntrusted: U })
          : null,
        G =
          H != null || ($ && N)
            ? null
            : c.jsx(r("WAWebMessageThumbShadeBottom.react"), {}),
        z = o("WAWebMsgSelectors").showForwarded(i),
        j = o("WAWebDisplayType").isWideDisplay(t.displayType),
        K = (s || (s = r("stylex")))(
          o("WAWebUISpacing").uiPadding.top3,
          o("WAWebUISpacing").uiPadding.start6,
          z
            ? o("WAWebUISpacing").uiPadding.bottom0
            : o("WAWebUISpacing").uiPadding.bottom5,
          o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(M) &&
            o("WAWebUISpacing").uiPadding.end4,
        ),
        Q = t.displayAuthor
          ? c.jsx("div", {
              className: K,
              children: c.jsx(r("WAWebMessageAuthor.react"), {
                msg: i,
                contact: T,
                displayType: t.displayType,
              }),
            })
          : null,
        X = z
          ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: i.unsafe(),
              className: (s || (s = r("stylex")))(
                o("WAWebUISpacing").uiPadding.top3,
                o("WAWebUISpacing").uiPadding.end0,
                o("WAWebUISpacing").uiPadding.start6,
                t.displayAuthor
                  ? o("WAWebUISpacing").uiPadding.top0
                  : o("WAWebUISpacing").uiPadding.top3,
              ),
            })
          : null,
        Y = s(
          h.container,
          o("WAWebUISpacing").uiPadding.all3,
          x != null && h.ctwaContainerWidth,
          j && h.containerAnnouncement,
        ),
        J = m;
      x ? (J = p) : j && (J = f);
      var Z = j ? _ : d,
        ee = { height: Z },
        te = t.quotedMsg
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.bottom3,
                ),
                { children: t.quotedMsg },
              ),
            )
          : null,
        ne,
        re;
      return (
        $ &&
          ((ne = u
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    h.caption,
                    o("WAWebUISpacing").uiPadding.top7,
                    o("WAWebUISpacing").uiPadding.end4,
                    o("WAWebUISpacing").uiPadding.start6,
                    o("WAWebUISpacing").uiPadding.bottom5,
                  ),
                  {
                    children: c.jsx(r("WAWebMessageCaption.react"), {
                      msg: i.unsafe(),
                      spacer: !v,
                      trusted: t.trusted,
                    }),
                  },
                ),
              )
            : null),
          (re = c.jsx(r("WAWebBizTemplateMessageFooter.react"), {
            dir: b,
            footer: v,
            isShown: $,
            msg: i.unsafe(),
            rtl: I,
            type: D,
            trusted: t.trusted,
          }))),
        c.jsx("div", {
          children: c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            className: Y,
            contact: T,
            msg: i.unsafe(),
            children: [
              Q,
              X,
              te,
              c.jsx(r("WAWebBizCtwaContext.react"), {
                msg: i.unsafe(),
                wrapperClass: s(
                  o("WAWebUISpacing").uiMargin.top0,
                  o("WAWebUISpacing").uiMargin.end0,
                  o("WAWebUISpacing").uiMargin.bottom3,
                  o("WAWebUISpacing").uiMargin.start0,
                ),
              }),
              c.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                className:
                  "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xaejkm2 x1uuy6ko x1gfim23 xqfj769",
                onClick: o("WAWebStopEvent").stopPropagation,
                plainText: O,
                selectable: !0,
                style: ee,
                children: [
                  c.jsx(r("WAWebMap.react"), {
                    lat: E,
                    lng: k,
                    width: J,
                    height: Z,
                    name: F,
                    xstyle: h.thumbBody,
                  }),
                  G,
                ],
              }),
              H,
              ne,
              re,
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "x10l6tqk x11dcrhx xrb244j xhtitgo" },
                    1: { className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs" },
                  }[!!H << 0],
                  {
                    children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                      msg: i,
                    }),
                  },
                ),
              ),
            ],
          }),
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.isUntrusted,
        n = e.loc,
        a = e.msg,
        i = e.pageUrl,
        l,
        u,
        d = r("WAWebURLUtils").hostname(i),
        m = t
          ? c.jsx("span", {
              className: "x1ncwhqj x1d3mw78 xthy82k",
              children: d,
            })
          : null;
      if (
        (!t &&
          n &&
          !i.includes("javascript") &&
          (l = n.name
            ? c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                xstyle: h.title,
                href: i,
                children: n.name,
              })
            : null),
        n)
      ) {
        var p,
          _ = { 0: "x1pg5gke", 1: "x1pg5gke x1lliihq" }[!!m << 0];
        u =
          ((p = n.addr) != null ? p : "") !== ""
            ? c.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                className: _,
                selectable: !0,
                title: n.addr,
                children: n.addr,
              })
            : null;
      }
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            h.text,
            o("WAWebUISpacing").uiPadding.top7,
            o("WAWebUISpacing").uiPadding.end4,
            o("WAWebUISpacing").uiPadding.bottom4,
            o("WAWebUISpacing").uiPadding.start6,
          ),
          {
            children: c.jsxs(r("WAWebMessageSpacerText.react"), {
              msg: a.unsafe(),
              "data-id": a.id,
              children: [l, u, m],
            }),
          },
        ),
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.PREVIEW_HEIGHT = d),
      (l.Location = y));
  },
  98,
);
