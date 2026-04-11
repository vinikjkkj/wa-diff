__d(
  "WAWebStickersPackDetailsDrawerModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlatListController",
    "WAWebFlexBox.react",
    "WAWebForwardMessageFlowLoadable",
    "WAWebFrontendStickerPackModelMdGetters",
    "WAWebLinkPreviewChatAction",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebRoundPlayIcon.react",
    "WAWebSendTextMsgChatAction",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerPackDrawerButton.react",
    "WAWebStickerPackInfoDetailsDrawerModal.react",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebText.react",
    "WDSFlex.stylex",
    "WDSIconWdsIcAuraFill.react",
    "asyncToGeneratorRuntime",
    "bx",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useWAWebEventTargetValue",
    "useWAWebStickerPackValues",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d.useEffect,
      _ = r("bx").getURL(r("bx")("9560")),
      f = {
        auraIcon: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        titleContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          marginBottom: "x1e56ztr",
          $$css: !0,
        },
        title: { flexGrow: "x1c4vz4f", $$css: !0 },
        spinner: { minHeight: "xvv2zd5", $$css: !0 },
        animatedIcon: {
          marginInlineStart: "xdzw4kq",
          color: "xct68jv",
          $$css: !0,
        },
        emptyText: { textAlign: "x2b8uid", marginBottom: "x14ler8", $$css: !0 },
      };
    function g(e, t) {
      var n = o("react-compiler-runtime").c(3),
        a;
      n[0] !== e || n[1] !== t
        ? ((a = function () {
            return (
              e ||
              (t
                ? o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.get(
                    t,
                  )
                : null)
            );
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = a))
        : (a = n[2]);
      var i = r("useWAWebEventTargetValue")(
        o("WAWebStickerPackCollectionMd").StickerPackCollectionMd,
        "add remove reset",
        a,
      );
      if (i) return i;
      if (t == null) return null;
      o(
        "WAWebStickerPackCollectionMd",
      ).StickerPackCollectionMd.fetchStickerPack(t);
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] !== e
        ? ((n = function () {
            var t;
            return (t = e == null ? void 0 : e.toArray()) != null ? t : [];
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = r("useWAWebEventTargetValue")(e, "add remove reset", n),
        i = r("useWAWebUiIdle")(),
        l,
        s;
      return (
        t[2] !== e || t[3] !== i
          ? ((l = function () {
              i(function () {
                e == null || e.fetch();
              });
            }),
            (s = [e, i]),
            (t[2] = e),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s))
          : ((l = t[4]), (s = t[5])),
        p(l, s),
        a
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      t[0] !== e
        ? ((n = function () {
            return r("isStringNullOrEmpty")(e)
              ? null
              : o(
                  "WAWebStickerPackCollectionMd",
                ).StickerPackCollectionMd.packFetchState.get(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = r("useWAWebEventTargetValue")(
        o("WAWebStickerPackCollectionMd").StickerPackCollectionMd,
        "change:packFetchState",
        n,
      );
      return a;
    }
    function C(e) {
      return "https://wa.me/stickerpack/" + e;
    }
    function b(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, u),
        d = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        p = l.msg,
        b = l.onBack,
        v = l.onClose,
        S = l.onStickerClick,
        R = l.onStickerEnter,
        L = l.stickerPack,
        E = l.stickerPackId,
        k = g(L, E),
        I =
          (a = o("useWAWebStickerPackValues").useOptionalStickerPackValues(
            k == null ? void 0 : k.id,
            [o("WAWebFrontendStickerPackModelMdGetters").getStickers],
          )) != null
            ? a
            : [],
        T = I[0],
        D = h(T),
        x = y(E),
        $ = function (t, n) {
          k && S(t, k, n);
        },
        P = function (t, n) {
          k && R(t, k, n);
        },
        N = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r) {
              var a = yield o("WAWebLinkPreviewChatAction").getLinkPreview(
                  t,
                  n,
                ),
                i = a == null ? void 0 : a.data;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendTextMsgToChat inside WAWebStickersPackDetailsDrawerModal",
                  ])),
              ),
                o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, r, {
                  linkPreview: i,
                }));
            },
          );
          return function (n, r, o) {
            return t.apply(this, arguments);
          };
        })(),
        M = function () {
          if (p != null) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(
                o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable,
                {
                  msgs: [o("WAWebStateUtils").unproxy(p)],
                  onClose: o("WAWebModalManager").closeModalManager,
                },
              ),
            );
            return;
          }
          var e = o("WAWebChatCollection").ChatCollection.getActive(),
            t = "";
          if (k != null) t = C(k.id);
          else if (E != null) t = C(E);
          else return;
          if (e != null && t != null) {
            var n = o("WAWebLinkify").findLink(t);
            n != null &&
              N(n, e, t).then(o("WAWebDrawerManager").closeDrawerRight);
          }
        },
        w;
      return (
        ((E && x === o("WAWebStickerPackCollectionMd").FetchState.PENDING) ||
          (D == null ? void 0 : D.length) === 0) &&
          (w = m.jsx(o("WAWebFlexBox.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: f.spinner,
            children: m.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
            }),
          })),
        m.jsxs(
          r("WAWebDrawer.react"),
          {
            theme: "sticker-store",
            ref: i,
            testid: void 0,
            children: [
              m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "Sticker details"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onBack: b,
                onCancel: v,
                focusBackOrCancel: !0,
              }),
              m.jsx(r("WAWebDrawerBody.react"), {
                flatListControllers: [d.current],
                children: m.jsxs(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  theme: "padding-no-margin",
                  children: [
                    k
                      ? m.jsxs(m.Fragment, {
                          children: [
                            m.jsx(o("WAWebText.react").WAWebTextTitle, {
                              xstyle: f.titleContainer,
                              children: m.jsxs(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  (c || (c = r("stylex"))).props(
                                    o("WDSFlex.stylex").wdsFlex.flexAlignCenter,
                                  ),
                                  {
                                    children: [
                                      k.premium > 0 &&
                                        m.jsx(
                                          "div",
                                          babelHelpers.extends(
                                            {},
                                            (c || (c = r("stylex"))).props(
                                              o("WDSFlex.stylex").wdsFlex
                                                .flexAlignCenter,
                                              f.auraIcon,
                                            ),
                                            {
                                              children: m.jsx(
                                                r("WDSIconWdsIcAuraFill.react"),
                                                { height: 16, width: 16 },
                                              ),
                                            },
                                          ),
                                        ),
                                      m.jsx(
                                        o("WAWebEmojiText.react").EmojiText,
                                        {
                                          xstyle: f.title,
                                          text: k.name,
                                          ellipsify: !0,
                                          titlify: !0,
                                        },
                                      ),
                                      k.animated
                                        ? m.jsx(
                                            o("WAWebRoundPlayIcon.react")
                                              .RoundPlayIcon,
                                            {
                                              xstyle: f.animatedIcon,
                                              width: 16,
                                              height: 16,
                                            },
                                          )
                                        : null,
                                    ],
                                  },
                                ),
                              ),
                            }),
                            k.publisher &&
                              m.jsxs(o("WAWebText.react").WAWebTextMuted, {
                                marginBottom: 16,
                                children: [
                                  m.jsx(o("WAWebEmojiText.react").EmojiText, {
                                    text: s._(/*BTDS*/ "Created by {name}", [
                                      s._param("name", k.publisher),
                                    ]),
                                  }),
                                  " \u2219 ",
                                  s._(/*BTDS*/ "{size}", [
                                    s._param(
                                      "size",
                                      o(
                                        "WAWebStickerPackInfoDetailsDrawerModal.react",
                                      ).displayStickerPackSize(k.fileSize),
                                    ),
                                  ]),
                                ],
                              }),
                            k.description &&
                              m.jsx(o("WAWebText.react").WAWebTextMuted, {
                                marginBottom: 16,
                                children: m.jsx(
                                  o("WAWebEmojiText.react").EmojiText,
                                  { text: k.description },
                                ),
                              }),
                            w,
                            m.jsx("div", {
                              className:
                                "xrvj5dj xvfmyfb x40hh3e xi32cqo x1qughib xh8yej3 x5yr21d",
                              children:
                                D == null
                                  ? void 0
                                  : D.map(function (e) {
                                      return m.jsx(
                                        r(
                                          "WAWebStickerPanelContentStickerItem.react",
                                        ),
                                        {
                                          sticker: e,
                                          theme: "stickerStore",
                                          onClick: $,
                                          onEnter: P,
                                          dontShowViewPack: !0,
                                        },
                                        e.id,
                                      );
                                    }),
                            }),
                          ],
                        })
                      : null,
                    !k &&
                    E &&
                    x === o("WAWebStickerPackCollectionMd").FetchState.PENDING
                      ? w
                      : null,
                    !k &&
                    (!E ||
                      x !==
                        o("WAWebStickerPackCollectionMd").FetchState.PENDING)
                      ? m.jsxs(m.Fragment, {
                          children: [
                            m.jsx("div", {
                              className:
                                "x78zum5 xl56j7k xya0cws x1c436fg xh8yej3",
                              children: m.jsx("div", {
                                className:
                                  "xnsdq5i x6hsnkj x1yztbdb xiy17q3 x1tbiz1a",
                                style: { backgroundImage: "url(" + _ + ")" },
                              }),
                            }),
                            m.jsx(o("WAWebText.react").WAWebTextMuted, {
                              marginBottom: 16,
                              xstyle: f.emptyText,
                              children: m.jsx(
                                o("WAWebEmojiText.react").EmojiText,
                                {
                                  text: s._(
                                    /*BTDS*/ "Unable to find sticker pack",
                                  ),
                                },
                              ),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
              m.jsx("div", {
                className: "x1jn9clo x7wzq59 xamitd3",
                children: m.jsx(r("WAWebStickerPackDrawerButton.react"), {
                  handleClick: M,
                }),
              }),
            ],
          },
          "sticker-pack-details-modal",
        )
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
