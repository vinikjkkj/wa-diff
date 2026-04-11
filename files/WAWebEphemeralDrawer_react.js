__d(
  "WAWebEphemeralDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAfterReadNux.react",
    "WAWebAfterReadUtils",
    "WAWebButton.react",
    "WAWebChangeEphemeralDurationChatAction",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebClickableLink.react",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEphemeralNux.react",
    "WAWebEphemeralOptionsSection.react",
    "WAWebEphemeralityDurations",
    "WAWebEphemeralityTypes",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNux",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWdsIllDisappearingMessagesIcon.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebNux",
    "useWAWebOnUnmount",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        icon: {
          marginTop: "x1nmyh1g",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xdqhqc9",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        title: { marginBottom: "xefnzgg", marginTop: "x98l61r", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.onClick,
        a;
      return (
        t[0] !== n
          ? ((a = s._(/*BTDS*/ "Update your {=m1} in Settings", [
              s._implicitParam(
                "=m1",
                c.jsx(r("WAWebClickableLink.react"), {
                  onClick: n,
                  tabIndex: 0,
                  children: s._(/*BTDS*/ "default message timer"),
                }),
              ),
            ])),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1ubxc9n" }), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [16, 0]), (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== n
          ? ((i = c.jsx(
              "div",
              babelHelpers.extends({}, r, {
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  margin: a,
                  children: c.jsx(f, { onClick: n }),
                }),
              }),
            )),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function h(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        u = i.entryPoint,
        d = i.onClose,
        f = i.onDDMSettingsClick,
        h = i.showNux,
        y = r("useWAWebUIM")(),
        C = function (t) {
          return (
            o("WAWebChatEphemerality").calculateEphemeralDurationForChat(t) || 0
          );
        },
        b = p(function () {
          var e;
          return (e = i.pendingDuration) != null ? e : C(l);
        }),
        v = b[0],
        S = b[1],
        R =
          o("WAWebABProps").getABPropConfigValue("ddm_reversed_options") ||
          o("WAWebAfterReadUtils").isAfterReadOptionAvailable(),
        L = m(
          function () {
            return o(
              "WAWebEphemeralityDurations",
            ).getDefaultEphemeralityDurations(R);
          },
          [R],
        ),
        E = m(
          function () {
            return o(
              "WAWebEphemeralityDurations",
            ).getAfterReadEphemeralityDurations(R ? "desc" : "asc");
          },
          [R],
        ),
        k = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "You can't change this setting because you're not connected to the internet. Check your internet and try again.",
              ),
            }),
          );
        },
        I = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Failed to update disappearing message timer settings. Please try again.",
              ),
            }),
          );
        },
        T = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = C(l);
            if (v !== e) {
              if (!r("WAWebNetworkStatus").online) {
                k();
                return;
              }
              yield o("WAWebChangeEphemeralDurationChatAction")
                .changeEphemeralDuration(
                  l,
                  v,
                  u,
                  o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .ChatSettings,
                )
                .catch(I);
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        D = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL),
        x = D[0],
        $ = D[1],
        P = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        N = P[0];
      r("useWAWebOnUnmount")(function () {
        x && $();
      });
      var M = function () {
          ((!h || !x) && T(),
            d ? d() : y == null || y.requestDismiss(),
            h && x && $());
        },
        w = function () {
          f(v);
        },
        A = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        F;
      return (
        o("WAWebContactGetters").getIsMe(l.contact)
          ? (F = s._(
              /*BTDS*/ "For more privacy and storage, all new messages will disappear from this chat after the selected duration, except when kept. You can change this setting at any time.",
            ))
          : o("WAWebChatGetters").getIsGroup(l)
            ? (F = s._(
                /*BTDS*/ "For more privacy and storage, all new messages will disappear from this chat for everyone after the selected duration, except when kept. Group admins control who can change this setting.",
              ))
            : (F = s._(
                /*BTDS*/ "For more privacy and storage, all new messages will disappear from this chat for everyone after the selected duration, except when kept. Anyone in the chat can change this setting.",
              )),
        c.jsxs(r("WAWebDrawer.react"), {
          theme: "gallery",
          ref: a,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "ephemeral-settings",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Disappearing messages"),
              onBack: M,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children:
                i.showNux && x
                  ? c.jsxs(r("WAWebDrawerSection.react"), {
                      animation: !1,
                      children: [
                        c.jsx("div", {
                          className:
                            "xevwqry xarfp6d x1bo0p19 x1w9lr8p x1f6kntn x37zpob",
                          children: c.jsx(r("WAWebEphemeralNux.react"), {
                            fromMe: !1,
                          }),
                        }),
                        c.jsx("div", {
                          className:
                            "xdqhqc9 x16ovd2e x5s3kwk x12xbjc7 xdylf7x x2b8uid",
                          children: c.jsx(o("WAWebButton.react").Button, {
                            type: "primary",
                            onClick: $,
                            testid: void 0,
                            children: r("WAWebFbtCommon")("OK"),
                          }),
                        }),
                      ],
                    })
                  : c.jsxs(r("WAWebDrawerSection.react"), {
                      animation: !1,
                      theme: "padding-no-vertical",
                      children: [
                        c.jsxs("div", {
                          children: [
                            c.jsx(o("WAWebFlex.react").FlexRow, {
                              align: "center",
                              justify: "center",
                              children: c.jsx(
                                o("WAWebWdsIllDisappearingMessagesIcon.react")
                                  .WdsIllDisappearingMessagesIcon,
                                { xstyle: _.icon },
                              ),
                            }),
                            c.jsx(r("WDSText.react"), {
                              colorName: "contentDeemphasized",
                              type: "Body2Emphasized",
                              xstyle: _.title,
                              children: s._(
                                /*BTDS*/ "Make messages in this chat disappear",
                              ),
                            }),
                            c.jsxs(o("WAWebText.react").WAWebTextMuted, {
                              margin: [0, 0],
                              children: [
                                F,
                                " ",
                                c.jsx(
                                  o("WAWebExternalLink.react").ExternalLink,
                                  {
                                    href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
                                    children: s._(/*BTDS*/ "Learn more"),
                                  },
                                ),
                              ],
                            }),
                          ],
                        }),
                        c.jsx("div", {
                          className: "x1ua1l7f x98l61r",
                          children: c.jsx(
                            r("WAWebEphemeralOptionsSection.react"),
                            {
                              initialDuration: v,
                              options: L,
                              onChange: S,
                              reverse: R,
                            },
                          ),
                        }),
                        o("WAWebAfterReadUtils").isAfterReadOptionAvailable() &&
                          c.jsxs("div", {
                            children: [
                              c.jsx(r("WDSText.react"), {
                                colorName: "contentDeemphasized",
                                type: "Body2Emphasized",
                                xstyle: _.title,
                                children: s._(/*BTDS*/ "After reading"),
                              }),
                              c.jsxs(o("WAWebText.react").WAWebTextMuted, {
                                margin: [0, 0],
                                children: [
                                  s._(
                                    /*BTDS*/ "New messages in this chat will disappear after they're sent or read.",
                                  ),
                                  " ",
                                  c.jsx(
                                    o("WAWebExternalLink.react").ExternalLink,
                                    {
                                      href: o(
                                        "WAWebFaqUrl",
                                      ).getEphemeralFaqUrl(),
                                      children: s._(/*BTDS*/ "Learn more"),
                                    },
                                  ),
                                ],
                              }),
                              c.jsx("div", {
                                className: "x1ua1l7f x98l61r",
                                children: c.jsx(
                                  r("WAWebEphemeralOptionsSection.react"),
                                  {
                                    initialDuration: v,
                                    options: E,
                                    onChange: function (t) {
                                      (S(t),
                                        N &&
                                          o(
                                            "WAWebAfterReadUtils",
                                          ).isAfterReadDuration(t) &&
                                          o(
                                            "WAWebModalManager",
                                          ).ModalManager.open(
                                            c.jsx(
                                              r("WAWebAfterReadNux.react"),
                                              { duration: t },
                                            ),
                                          ));
                                    },
                                    reverse: R,
                                  },
                                ),
                              }),
                            ],
                          }),
                        A && c.jsx(g, { onClick: w }),
                      ],
                    }),
            }),
          ],
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
