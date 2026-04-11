__d(
  "WAWebMmSignalSharingDisclosureModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUIUtils",
    "WAWebModalManager",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebWdsPictoMetaDataChevronIcon.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIconWdsIcCampaignMegaphoneSlash.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = {
        wrapper: {
          marginTop: "x1anpbxc",
          marginInlineEnd: "x1wcu8vx",
          marginBottom: "xyorhqc",
          marginInlineStart: "x1ult018",
          paddingTop: "x1cnzs8",
          paddingInlineEnd: "x1xnnf8n",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
        headerIcon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "xwzfr38",
          marginTop: "x1xmf6yo",
          marginBottom: "x1hq5gj4",
          $$css: !0,
        },
        description: {
          marginTop: "xqui205",
          marginBottom: "x1hq5gj4",
          $$css: !0,
        },
        feature: {
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          lineHeight: "x1o2sk6j",
          ":first-child_paddingTop": "x10zg81t",
          ":last-child_paddingBottom": "xup0pd7",
          $$css: !0,
        },
        featureImg: {
          paddingInlineEnd: "x64bnmy",
          color: "xhslqc4",
          $$css: !0,
        },
        spaceBefore: {
          "::before_content": "xjuopq5",
          "::before_whiteSpace": "xulcptl",
          $$css: !0,
        },
      },
      f = { as: "li", align: "center", xstyle: _.feature },
      g = { width: 24, height: 24, xstyle: _.featureImg },
      h = n("$InternalEnum").Mirrored(["LOADING", "DISMISSED", "VISIBLE"]);
    function y(e) {
      var t = e.action,
        n = t === void 0 ? "navigate" : t,
        a = e.chat,
        i = e.eventType,
        l = e.onCancel,
        c = e.onDismissed,
        y = e.onLearnMore,
        C = e.onOk,
        b = m(function () {
          return o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted();
        }, []),
        v = p(b ? h.VISIBLE : h.LOADING),
        S = v[0],
        R = v[1];
      (d(
        function () {
          b ||
            o("WAWebMmSignalSharingTos")
              .refreshTos()
              .then(function () {
                o(
                  "WAWebMmSignalSharingTos",
                ).isMmSignalSharingDisclosureTosAccepted()
                  ? (R(h.DISMISSED),
                    o("WAWebModalManager").ModalManager.close(),
                    c == null || c())
                  : R(h.VISIBLE);
              });
        },
        [b, c],
      ),
        d(
          function () {
            S === h.VISIBLE &&
              n === "navigate" &&
              i != null &&
              a != null &&
              !o(
                "WAWebMmSignalSharingGatingUtils",
              ).getMmSignalSharingTosFiltering() &&
              o("WAWebMmSignalSharingTos").acceptMmSignalSharingDisclosureTos(
                a.id,
              );
          },
          [S, n, i, a],
        ));
      var L = m(function () {
          return [
            {
              icon: u.jsx(
                r("WDSIconIcVisibilityOff.react"),
                babelHelpers.extends({}, g),
              ),
              text: s._(
                /*BTDS*/ "WhatsApp never shares your message content or calls.",
              ),
            },
            {
              icon: u.jsx(
                o("WAWebSingleChevronInCircleIcon.react")
                  .SingleChevronInCircleIcon,
                babelHelpers.extends({}, g),
              ),
              text: s._(
                /*BTDS*/ "This icon means Meta receives limited info, like if you visit a website from a chat or submit feedback about a business.",
              ),
            },
            {
              icon: u.jsx(
                r("WDSIconWdsIcCampaignMegaphoneSlash.react"),
                babelHelpers.extends({}, g),
              ),
              text: o(
                "WAWebMmSignalSharingGatingUtils",
              ).isCCIComplianceEnabled()
                ? s._(
                    /*BTDS*/ "Businesses need your permission to send these messages. You can always stop chatting with a business or block them. After you block a business, Meta will no longer receive limited info.",
                  )
                : s._(
                    /*BTDS*/ "Businesses need your permission to send these messages, and you can always stop chatting with a business or block them.",
                  ),
            },
          ];
        }, []),
        E = function () {
          (i != null &&
            a != null &&
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).getMmSignalSharingTosFiltering() &&
            o("WAWebMmSignalSharingTos").acceptMmSignalSharingDisclosureTos(
              a.id,
            ),
            o("WAWebModalManager").ModalManager.close(),
            C == null || C());
        },
        k = {
          navigate: {
            okText: s._(/*BTDS*/ "Continue"),
            onOK: E,
            cancelText: s._(/*BTDS*/ "Go back"),
            onCancel: function () {
              (o("WAWebModalManager").ModalManager.close(), l == null || l(!0));
            },
            onOverlayClick: function () {
              (o("WAWebModalManager").ModalManager.close(), l == null || l(!1));
            },
          },
          learnMore: {
            okText: s._(/*BTDS*/ "Learn more"),
            onOK: function () {
              (o("WAWebExternalLink.react").openExternalLink(
                o(
                  "WAWebMmSignalSharingUIUtils",
                ).getMmSignalSharingLearnMoreHCAURL(),
              ),
                y == null || y());
            },
            cancelText: void 0,
            onCancel: void 0,
          },
        };
      return S === h.LOADING
        ? u.jsx("div", {
            className:
              "x10l6tqk x16uhe5s x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x2b8uid x1ypdohk",
            children: u.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
            }),
          })
        : S === h.DISMISSED
          ? null
          : u.jsx(
              o("WAWebConfirmPopup.react").ConfirmPopup,
              babelHelpers.extends(
                {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "mm-signal-sharing-disclosure",
                  },
                },
                k[n],
                {
                  children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: _.wrapper,
                    justify: "center",
                    align: "stretch",
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        justify: "center",
                        children: u.jsx(
                          o("WAWebWdsPictoMetaDataChevronIcon.react")
                            .WdsPictoMetaDataChevronIcon,
                          { xstyle: _.headerIcon },
                        ),
                      }),
                      u.jsx(o("WAWebText.react").WAWebTextLarge, {
                        as: "header",
                        textAlign: "center",
                        children: s._(
                          /*BTDS*/ "About interactions with offers and announcements",
                        ),
                      }),
                      u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: _.description,
                        children: [
                          s._(
                            /*BTDS*/ "When you interact with a business's offers and announcements, WhatsApp's parent company Meta receives limited limited info that may reduce spam, help businesses send you relevant messages and improve Meta ads.",
                          ),
                          n !== "learnMore" &&
                            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                              href: o(
                                "WAWebMmSignalSharingUIUtils",
                              ).getMmSignalSharingLearnMoreHCAURL(),
                              xstyle: _.spaceBefore,
                              children: r("WAWebFbtCommon")("Learn more"),
                            }),
                        ],
                      }),
                      u.jsx("ul", {
                        children: L.map(function (e, t) {
                          var n = e.icon,
                            r = e.text;
                          return u.createElement(
                            o("WAWebFlex.react").FlexRow,
                            babelHelpers.extends({}, f, { key: t }),
                            n,
                            r,
                          );
                        }),
                      }),
                    ],
                  }),
                },
              ),
            );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
