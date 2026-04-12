__d(
  "WAWebMessageLiveLocation.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMap.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        container: {
          position: "x1n2onr6",
          maxWidth: "xz9dduz",
          cursor: "xt0e3qv",
          $$css: !0,
        },
        containerAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        clickable: { cursor: "x1ypdohk", $$css: !0 },
        caption: { boxSizing: "x9f619", maxWidth: "xz9dduz", $$css: !0 },
        captionAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        author: { paddingInlineStart: "x25sj25", $$css: !0 },
        authorElevatedPushNames: { paddingInlineEnd: "x1uc92m", $$css: !0 },
        avatar: {
          position: "x10l6tqk",
          top: "x13vifvy",
          right: "x3m8u43",
          bottom: "x1ey2m1c",
          left: "xu96u03",
          width: "x187nhsf",
          height: "xn3w4p2",
          filter: "xkozzs",
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
        hidden: { visibility: "xlshs6z", $$css: !0 },
        metaWithCaption: {
          bottom: "xy1j3rs",
          position: "x10l6tqk",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          zIndex: "xhtitgo",
          $$css: !0,
        },
      },
      p = 150,
      _ = 270,
      f = 30,
      g = 40,
      h = 250,
      y = 474,
      C = p + f + g;
    function b(t) {
      var n,
        a,
        i = t.displayAuthor,
        l = t.msg,
        u = t.quotedMsg,
        f = t.trusted,
        g = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (n = o("WAWebMsgGetters")).getComment,
          (a = o("WAWebFrontendMsgGetters")).getDir,
          n.getFinalLat,
          n.getFinalLng,
          n.getIsGroupMsg,
          n.getIsPSA,
          n.getIsSentByMe,
          n.getLat,
          n.getLng,
          a.getRtl,
          a.getSenderObj,
          n.getSender,
          n.getShareDuration,
          n.getT,
        ]),
        C = g[0],
        b = g[1],
        v = g[2],
        S = g[3],
        R = g[4],
        L = g[5],
        E = g[6],
        k = g[7],
        I = g[8],
        T = g[9],
        D = g[10],
        x = g[11],
        $ = g[12],
        P = g[13],
        N = a.getChat(t.msg.unsafe()),
        M = d(!1),
        w = M[0],
        A = M[1],
        F = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "live-location",
              },
              okText: r("WAWebFbtCommon")("OK"),
              onOK: o("WAWebModalManager").closeModalManager,
              children: s._(
                /*BTDS*/ "Live location is not available on this device. View location on your phone.",
              ),
            }),
          );
        },
        O = function () {
          A(!0);
        },
        B = function () {
          return $ == null ? P : P + $;
        },
        W = !!C,
        q = o("WAWebDisplayType").isWideDisplay(t.displayType),
        U = i
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.author,
                  o("WAWebUISpacing").uiPadding.top3,
                  o("WAWebUISpacing").uiPadding.bottom5,
                  o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(N) &&
                    m.authorElevatedPushNames,
                ),
                {
                  children: c.jsx(r("WAWebMessageAuthor.react"), {
                    msg: l,
                    contact: D,
                    displayType: t.displayType,
                  }),
                },
              ),
            )
          : null,
        V = u ? c.jsx("div", { className: "xahult9", children: u }) : null,
        H = o("WATimeUtils").unixTime() >= B(),
        G = H && v !== void 0 && S !== void 0,
        z = k,
        j = I;
      G && ((z = v), (j = S));
      var K = F,
        Q = q ? y : _,
        X = q ? h : p,
        Y = { height: X },
        J = c.jsxs("div", {
          className:
            "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xaejkm2 x1uuy6ko",
          onClick: K,
          style: Y,
          children: [
            c.jsx("div", {
              className: "x1n2onr6",
              children: c.jsx(r("WAWebMap.react"), {
                lat: z,
                lng: j,
                width: Q,
                height: X,
                xstyle: m.thumbBody,
                linkify: !1,
                showMarker: !1,
                onLoad: O,
              }),
            }),
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.avatar,
                  o("WAWebUISpacing").uiMargin.allAuto,
                  !w && m.hidden,
                ),
                {
                  children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: x,
                    size: 40,
                    border: !0,
                  }),
                },
              ),
            ),
            H &&
              c.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x1ey2m1c xu96u03 xh8yej3 x5yr21d x1lliihq x143bgyd",
              }),
          ],
        }),
        Z = s._(/*BTDS*/ "Live location not available"),
        ee = c.jsx("div", {
          className:
            "x1n2onr6 x1ey2m1c xu96u03 x1gnnpzl xexx8yu x1im30kd x18d9i69 x1djpfga x1cmjdxs xqfj769 x1gfim23 xdpxx8g",
          onClick: K,
          children: c.jsx("span", {
            className: "x1n2onr6 xndqk7f x1pg5gke xhslqc4 xxymvpz",
            children: Z,
          }),
        }),
        te = W
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.caption,
                  o("WAWebUISpacing").uiPadding.top7,
                  o("WAWebUISpacing").uiPadding.end4,
                  o("WAWebUISpacing").uiPadding.bottom5,
                  o("WAWebUISpacing").uiPadding.start6,
                  q && m.captionAnnouncement,
                ),
                {
                  children: c.jsx(r("WAWebMessageCaption.react"), {
                    msg: l.unsafe(),
                    trusted: f,
                  }),
                },
              ),
            )
          : null,
        ne = c.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "end",
          xstyle: [
            W && m.metaWithCaption,
            !W && [
              o("WAWebUISpacing").uiPadding.horiz3,
              o("WAWebUISpacing").uiPadding.top3,
            ],
          ],
          children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l }),
        });
      return c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
        className: e(
          m.container,
          o("WAWebUISpacing").uiPadding.all3,
          q && m.containerAnnouncement,
          !!K && m.clickable,
        ),
        contact: D,
        msg: l.unsafe(),
        children: [U, V, J, ee, te, ne],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.MSG_HEIGHT = C),
      (l.LiveLocation = b));
  },
  226,
);
