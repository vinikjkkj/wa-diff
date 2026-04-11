__d(
  "WAWebMentionsPluginResult.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatContactUtils",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebDefaultGroupRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUsernameGatingUtils",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
    "useWAWebTextStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useState,
      f = {
        emojiScale: {
          transform: "x1nrvvgt",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        mentionsResult: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          fontSize: "x1nxh6w3",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        mentionsResultSelected: {
          color: "x14ug900",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        resultImage: { flex: "x17pgkn5", $$css: !0 },
        disabledImage: { opacity: "xvpkmg4", $$css: !0 },
        disabledCTA: { lineHeight: "xo5v014", $$css: !0 },
        circleIconRefreshed: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1od0jb8",
          $$css: !0,
        },
        profilePictureOutlineRefreshed: {
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
      },
      g = 45;
    function h(e) {
      var t = e.contact,
        n = e.disabled,
        a = n === void 0 ? !1 : n,
        i = e.disabledCTA,
        l = i === void 0 ? null : i,
        c = e.elevatedPushNamesEnabled,
        m = c === void 0 ? !1 : c,
        p = e.selected,
        _ = e.term,
        h = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getIsMyContact,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
          o("WAWebFrontendContactGetters").getTextStatusString,
          o("WAWebFrontendContactGetters").getTextStatusEmoji,
          o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
          o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
          o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
          o("WAWebFrontendContactGetters").getUsername,
          o("WAWebContactGetters").getPushname,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k = h[8],
        I = h[9],
        T = h[10],
        D = h[11],
        x = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        $ = !r("isStringNullOrEmpty")(T) && x,
        P = $ && !b,
        N = o("WAWebTextStatusUtils").shouldDisplayTextStatus(R, L, E, k, I);
      r("useWAWebTextStatus")({ contact: t });
      var M = o("WAWebFormatConfiguration").SearchName({ terms: _ ? [_] : [] }),
        w = null,
        A;
      if (L != null) {
        var F = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(L);
        F != null &&
          (A = d.jsx(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end2,
              ),
              {
                children: d.jsx(
                  r("WAWebEmoji.react"),
                  { xstyle: f.emojiScale, emoji: F, size: "small" },
                  "low-res",
                ),
              },
            ),
          ));
      }
      var O =
          N &&
          d.jsx(o("WAWebFlex.react").FlexColumn, {
            children: d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                A,
                !!R &&
                  d.jsx("div", {
                    children: d.jsx(o("WAWebText.react").WAWebTextSmall, {
                      as: "div",
                      color: "secondaryEmphasized",
                      paddingEnd: 2,
                      children: R,
                    }),
                  }),
              ],
            }),
          }),
        B = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "xc8qplx xp4054r xhslqc4" },
              1: { className: "x78zum5 xeuugli" },
            }[!!P << 0],
            {
              "data-testid": void 0,
              dir: "auto",
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                formatters: M,
                text: D != null ? D : S,
              }),
            },
          ),
        ),
        W = d.jsxs(d.Fragment, {
          children: [
            d.jsx("div", {
              className: "x78zum5 xeuugli",
              "data-testid": void 0,
              dir: "auto",
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                ariaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(
                  v,
                ),
                formatters: M,
                text: o("WAWebChatContactUtils").getFormattedNotifyName(v),
              }),
            }),
            "\xA0",
            B,
          ],
        }),
        q = C.length > g ? C.slice(0, g) + "..." : C,
        U = function () {
          return a
            ? s._(/*BTDS*/ "{formatted_name} not available in this chat.", [
                s._param("formatted_name", q),
              ])
            : q;
        },
        V = d.jsxs(d.Fragment, {
          children: [
            d.jsx("div", {
              className: "x78zum5 xeuugli",
              "data-testid": void 0,
              dir: "auto",
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                formatters: M,
                text: U(),
              }),
            }),
            d.jsx("div", {
              className: "xc8qplx x10co9cg xp4054r",
              "data-testid": void 0,
              dir: "auto",
              children:
                !b && C === S && v != null
                  ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
                      ellipsify: !0,
                      formatters: M,
                      text: "~" + v,
                    })
                  : null,
            }),
          ],
        }),
        H = !b && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(t) && m,
        G = H ? W : V;
      P && (G = B);
      var z = d.jsxs(d.Fragment, {
          children: [
            G,
            a &&
              l != null &&
              d.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: f.disabledCTA,
                children: l,
              }),
            w,
          ],
        }),
        j = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                d.jsx(o("WAWebFlex.react").FlexItem, {
                  children: d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props(
                        f.resultImage,
                        o("WAWebUISpacing").uiMargin.end10,
                        a && f.disabledImage,
                      ),
                      {
                        children: d.jsx(
                          o("WAWebDetailImage.react").DetailImage,
                          { id: y, size: 32 },
                        ),
                      },
                    ),
                  ),
                }),
                d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexRow, { children: z }),
                    O != null &&
                      O !== !1 &&
                      d.jsx(o("WAWebFlex.react").FlexItem, { children: O }),
                  ],
                }),
              ],
            })
          : d.jsxs(d.Fragment, {
              children: [
                d.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (u || (u = r("stylex"))).props(
                      f.resultImage,
                      o("WAWebUISpacing").uiMargin.end10,
                      a && f.disabledImage,
                    ),
                    {
                      children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: y,
                        size: 32,
                      }),
                    },
                  ),
                ),
                d.jsx("div", { children: z }),
              ],
            });
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            f.mentionsResult,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz8,
            p === !0 && f.mentionsResultSelected,
          ),
          { "data-testid": void 0, children: j },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.groupMetadata,
        n = e.selected,
        a = e.term,
        i = o("useWAWebModelValues").useModelValues(t, ["id", "subject"]),
        l = i.id,
        s = i.subject,
        c = o("WAWebFormatConfiguration").Search({
          terms: a ? [a] : [],
          boundary: !0,
        });
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            f.mentionsResult,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz8,
            n === !0 && f.mentionsResultSelected,
          ),
          {
            "data-testid": void 0,
            children: [
              d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  u.props(f.resultImage, o("WAWebUISpacing").uiMargin.end10),
                  {
                    children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: l,
                      size: 32,
                    }),
                  },
                ),
              ),
              d.jsx("div", {
                className: "x78zum5 xeuugli",
                dir: "auto",
                children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  ellipsify: !0,
                  formatters: c,
                  text: s,
                }),
              }),
            ],
          },
        ),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.selected,
        a;
      t[0] !== n
        ? ((a = (u || (u = r("stylex"))).props(
            f.mentionsResult,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz8,
            n === !0 && f.mentionsResultSelected,
          )),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (u || (u = r("stylex"))).props(
            f.resultImage,
            o("WAWebUISpacing").uiMargin.end10,
          )),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(
            "div",
            babelHelpers.extends({}, i, {
              children: d.jsx(
                o("WAWebDefaultGroupRefreshedIcon.react")
                  .DefaultGroupRefreshedIcon,
                {
                  "aria-hidden": !0,
                  iconXstyle: [
                    f.circleIconRefreshed,
                    f.profilePictureOutlineRefreshed,
                  ],
                  width: 32,
                },
              ),
            }),
          )),
          (t[3] = l))
        : (l = t[3]);
      var c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body2",
            children: s._(/*BTDS*/ "all"),
          })),
          (t[4] = c))
        : (c = t[4]);
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = d.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 0,
            children: [
              c,
              d.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body3",
                children: s._(/*BTDS*/ "Mention all members in this chat"),
              }),
            ],
          })),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== a
          ? ((p = d.jsxs(
              "div",
              babelHelpers.extends({}, a, {
                "data-testid": void 0,
                children: [l, m],
              }),
            )),
            (t[6] = a),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function b(t) {
      var a = t.chat,
        i = t.contact,
        l = t.elevatedPushNamesEnabled,
        c = l === void 0 ? !1 : l,
        m = t.onAddCancelled,
        h = t.onAddConfirmed,
        y = t.onAddDialogShown,
        C = t.selected,
        b = t.term,
        v = _(!1),
        S = v[0],
        R = v[1],
        L = _(!1),
        E = L[0],
        k = L[1],
        I = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getIsMyContact,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
          o("WAWebFrontendContactGetters").getUsername,
          o("WAWebContactGetters").getPushname,
        ]),
        T = I[0],
        D = I[1],
        x = I[2],
        $ = I[3],
        P = I[4],
        N = I[5],
        M = I[6],
        w = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        A = !r("isStringNullOrEmpty")(N) && w,
        F = A && !x,
        O = o("WAWebFormatConfiguration").SearchName({ terms: b ? [b] : [] }),
        B = p(
          function (t) {
            (t.stopPropagation(),
              !(S || E) &&
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  y == null || y();
                  var t = a.contact.name,
                    n = d.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: s._(
                        /*BTDS*/ 'Add {participant} to "{subject}" group?',
                        [s._param("participant", D), s._param("subject", t)],
                      ),
                    }),
                    r = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                      children: n,
                      okText: s._(/*BTDS*/ "Add member"),
                      cancelText: s._(/*BTDS*/ "Cancel"),
                    });
                  r
                    ? (R(!0),
                      o("WAWebModifyParticipantsGroupAction")
                        .addParticipants(a, [i])
                        .then(function (e) {
                          var t = e.participants.some(function (e) {
                            return e.code === "403";
                          });
                          if (t) {
                            var n = function () {
                              o("WAWebModalManager")
                                .ModalManager.existsAsync()
                                .then(function (e) {
                                  e || m == null || m();
                                });
                            };
                            o("WAWebModalManager").ModalManager.once(
                              "close_modal",
                              n,
                            );
                            return;
                          }
                          (k(!0), h == null || h(i));
                        })
                        .catch(function (t) {
                          (o("WALogger").ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to add participant to group: ",
                                "",
                              ])),
                            t,
                          ),
                            o("WAWebToastManager").ToastManager.open(
                              d.jsx(o("WAWebToast.react").Toast, {
                                msg: s._(
                                  /*BTDS*/ "Couldn't add contact to the group",
                                ),
                              }),
                            ),
                            m == null || m());
                        })
                        .finally(function () {
                          R(!1);
                        }))
                    : m == null || m();
                })());
          },
          [a, i, D, S, E, m, h, y],
        ),
        W = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "xc8qplx xp4054r xhslqc4" },
              1: { className: "x78zum5 xeuugli" },
            }[!!F << 0],
            {
              dir: "auto",
              "data-testid": void 0,
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: M != null ? M : P,
                formatters: O,
              }),
            },
          ),
        ),
        q = d.jsxs(d.Fragment, {
          children: [
            d.jsx("div", {
              className: "x78zum5 xeuugli",
              dir: "auto",
              "data-testid": void 0,
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o("WAWebChatContactUtils").getFormattedNotifyName($),
                ariaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(
                  $,
                ),
                formatters: O,
              }),
            }),
            "\xA0",
            W,
          ],
        }),
        U = D.length > g ? D.slice(0, g) + "..." : D,
        V = d.jsxs(d.Fragment, {
          children: [
            d.jsx("div", {
              className: "x78zum5 xeuugli",
              dir: "auto",
              "data-testid": void 0,
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: U,
                formatters: O,
              }),
            }),
            d.jsx("div", {
              className: "xc8qplx x10co9cg xp4054r",
              dir: "auto",
              "data-testid": void 0,
              children:
                !x && D === P && $ != null
                  ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: "~" + $,
                      formatters: O,
                      ellipsify: !0,
                    })
                  : null,
            }),
          ],
        }),
        H = !x && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(i) && c,
        G = H ? q : V;
      F && (G = W);
      var z = d.jsx(d.Fragment, { children: G }),
        j = d.jsx(r("WDSText.react"), {
          colorName: "contentDeemphasized",
          type: "Body3",
          children: s._(/*BTDS*/ "Not in group"),
        }),
        K = o(
          "WAWebTextStatusGatingUtils",
        ).receiveTextStatusForNewSurfacesEnabled()
          ? d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                d.jsx(o("WAWebFlex.react").FlexItem, {
                  children: d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (u || (u = r("stylex"))).props(
                        f.resultImage,
                        o("WAWebUISpacing").uiMargin.end10,
                      ),
                      {
                        children: d.jsx(
                          o("WAWebDetailImage.react").DetailImage,
                          { id: T, size: 32 },
                        ),
                      },
                    ),
                  ),
                }),
                d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexRow, { children: z }),
                    d.jsx(o("WAWebFlex.react").FlexItem, { children: j }),
                  ],
                }),
              ],
            })
          : d.jsxs(d.Fragment, {
              children: [
                d.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (u || (u = r("stylex"))).props(
                      f.resultImage,
                      o("WAWebUISpacing").uiMargin.end10,
                    ),
                    {
                      children: d.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: T,
                        size: 32,
                      }),
                    },
                  ),
                ),
                d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [d.jsx("div", { children: z }), j],
                }),
              ],
            }),
        Q = E ? s._(/*BTDS*/ "Added") : s._(/*BTDS*/ "Add");
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            f.mentionsResult,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz8,
            C === !0 && f.mentionsResultSelected,
          ),
          {
            role: "button",
            tabIndex: 0,
            onClick: B,
            onKeyDown: function (t) {
              (t.key === "Enter" || t.key === " ") && B(t);
            },
            "data-testid": void 0,
            children: [
              K,
              d.jsx("div", {
                className: "xvc5jky x78zum5 x6s0dn4 x1j8ymqv",
                children: d.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  type: "default",
                  size: "small",
                  label: Q,
                  onPress: B,
                  loading: S,
                  disabled: E,
                }),
              }),
            ],
          },
        ),
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.UserResult = h),
      (l.GroupResult = y),
      (l.MentionAllResult = C),
      (l.NonParticipantUserResult = b));
  },
  226,
);
