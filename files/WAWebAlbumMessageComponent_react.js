__d(
  "WAWebAlbumMessageComponent.react",
  [
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaAlbumGrid.react",
    "WAWebMediaAlbumGridConstants",
    "WAWebMessageAuthor.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageListAlbums",
    "WAWebMessageMeta.react",
    "WAWebMsgModelPropUtils",
    "WAWebMsgSelectors",
    "WAWebTypesMedia",
    "WAWebUISpacing",
    "compactMap",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        albumBubbleContainer: { width: "x1equxi", $$css: !0 },
        albumAnnouncementBubbleContainer: { width: "x14ty1w6", $$css: !0 },
        caption: { boxSizing: "x9f619", maxWidth: "x1d8l2j3", $$css: !0 },
        captionAnnouncement: { maxWidth: "xno0opx", $$css: !0 },
        metaWithCaption: {
          bottom: "xy1j3rs",
          position: "x10l6tqk",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          zIndex: "xhtitgo",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.associatedMessages,
        a = t.chat,
        i = t.displayAuthor,
        l = t.displayType,
        s = t.isMsgVisible,
        m = t.msg,
        p = t.quotedMsg,
        _ = t.trusted,
        f = o("useWAWebMsgValues").useMsgValues(m.id, [
          o("WAWebFrontendMsgGetters").getSenderObj,
        ]),
        g = f[0],
        h = o("WAWebMsgSelectors").showForwarded(m),
        y = i
          ? u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.top3,
                  o("WAWebUISpacing").uiPadding.bottom5,
                  o("WAWebUISpacing").uiPadding.start6,
                  h && o("WAWebUISpacing").uiPadding.bottom0,
                  o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(a) &&
                    o("WAWebUISpacing").uiPadding.end4,
                ),
                {
                  children: u.jsx(r("WAWebMessageAuthor.react"), {
                    msg: m,
                    contact: g,
                    displayType: l,
                  }),
                },
              ),
            )
          : null,
        C = h
          ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: m.unsafe(),
              xstyle: [
                o("WAWebUISpacing").uiPadding.vert3,
                o("WAWebUISpacing").uiPadding.end0,
                o("WAWebUISpacing").uiPadding.start6,
                i && o("WAWebUISpacing").uiPadding.top0,
              ],
            })
          : null,
        b = o("WAWebDisplayType").isWideDisplay(l),
        v = c(
          function () {
            return r("compactMap")(n, function (e) {
              return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
            });
          },
          [n],
        ),
        S = v.find(function (e) {
          var t = e.caption;
          return t != null;
        }),
        R =
          S != null
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.caption,
                    o("WAWebUISpacing").uiPadding.top7,
                    o("WAWebUISpacing").uiPadding.end6,
                    o("WAWebUISpacing").uiPadding.bottom5,
                    o("WAWebUISpacing").uiPadding.start6,
                    b && d.captionAnnouncement,
                  ),
                  {
                    children: u.jsx(r("WAWebMessageCaption.react"), {
                      msg: S.unsafe(),
                      trusted:
                        _ && o("WAWebMsgModelPropUtils").isTrusted(S.unsafe()),
                      spacer: !0,
                      testId: "album-caption",
                    }),
                  },
                ),
              )
            : null,
        L =
          v.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE
            ? v.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1
            : null,
        E = v.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? v[0] : null,
        k = p
          ? u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.bottom3,
                ),
                { children: p },
              ),
            )
          : null;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.all3,
            d.albumBubbleContainer,
            b && d.albumAnnouncementBubbleContainer,
          ),
          {
            "data-testid": void 0,
            children: [
              y,
              C,
              k,
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x1equxi x1jjtzf3 x6ikm8r x10wlt62 xrvj5dj xn2kgx5",
                    },
                    1: {
                      className:
                        "x6ikm8r x10wlt62 xrvj5dj xn2kgx5 x14ty1w6 xr710yv",
                    },
                  }[!!b << 0],
                  {
                    children: v
                      .slice(
                        0,
                        o("WAWebMediaAlbumGridConstants")
                          .ALBUM_GRID_MAX_THUMBNAIL,
                      )
                      .map(function (e, t) {
                        var n =
                          t ===
                          o("WAWebMediaAlbumGridConstants")
                            .ALBUM_GRID_MAX_THUMBNAIL -
                            1
                            ? { numAdditionalMedia: L, zoomMsg: E }
                            : null;
                        return u.jsx(
                          r("WAWebMediaAlbumGrid.react"),
                          babelHelpers.extends(
                            {
                              msg: e,
                              albumMsgs: v,
                              currentAlbumMessageIndex: t,
                              albumPosition: o("WAWebMediaAlbumGridConstants")
                                .ALBUM_GRID_POSITIONS[
                                t %
                                  o("WAWebMediaAlbumGridConstants")
                                    .ALBUM_GRID_MAX_THUMBNAIL
                              ],
                              isMsgVisible: s,
                              displayType: l,
                              albumTheme:
                                o("WAWebTypesMedia").DisplayTheme.AlbumV2,
                            },
                            n,
                          ),
                          e.id.toString(),
                        );
                      }),
                  },
                ),
              ),
              R,
              u.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "end",
                xstyle: [
                  R && d.metaWithCaption,
                  !R && [
                    o("WAWebUISpacing").uiPadding.horiz3,
                    o("WAWebUISpacing").uiPadding.top3,
                  ],
                ],
                children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                  msg: m,
                  associatedMessages: n,
                }),
              }),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
