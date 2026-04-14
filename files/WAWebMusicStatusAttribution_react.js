__d(
  "WAWebMusicStatusAttribution.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebExplicitIcon.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebMediaDownloadMmsMusicArtwork",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMusicArtwork.react",
    "WAWebMusicSoundAnimation.react",
    "WAWebText.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcMusicNote.react",
    "react",
    "useWAWebCanPlaybackAudio",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        explicitIcon: { color: "x17t9dm2", $$css: !0 },
        noteIcon: { color: "x17t9dm2", $$css: !0 },
        chevronIcon: {
          color: "x17t9dm2",
          marginInlineStart: "x1qfufaz",
          $$css: !0,
        },
        animationWrapper: { width: "x1kky2od", height: "xlup9mm", $$css: !0 },
      };
    function p(e) {
      var t = e.msg,
        n = e.musicMetadata,
        a = e.playing,
        i = e.xstyle,
        l = o("useWAWebCanPlaybackAudio").useCanDisplayMusicAttribution(t),
        s = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(t);
      if (!l)
        return c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          gap: 4,
          testid: void 0,
          xstyle: i,
          children: [
            c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              children: c.jsx(g, {}),
            }),
            c.jsx(o("WAWebFlex.react").FlexItem, {
              className: "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2",
              children: y.songUnavailable(),
            }),
            c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              children: c.jsx(h, {}),
            }),
          ],
        });
      var u = n.isExplicit
          ? c.jsx(o("WAWebExplicitIcon.react").ExplicitIcon, {
              height: 12,
              width: 12,
              "aria-label": y.explicitContent(),
              iconXstyle: m.explicitIcon,
            })
          : null,
        d = c.jsx("strong", { children: n.author }, "author"),
        p = r("WAWebL10N").isRTL() ? [n.title, d] : [d, n.title],
        _ = p[0],
        f = p[1];
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 4,
        xstyle: i,
        children: [
          s
            ? c.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                xstyle: m.animationWrapper,
                children: c.jsx(r("WAWebMusicSoundAnimation.react"), {
                  play: a,
                }),
              })
            : c.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                children: c.jsx(g, {}),
              }),
          c.jsxs(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            className: "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2",
            children: [_, " ", f],
          }),
          c.jsx(o("WAWebFlex.react").FlexItem, { shrink: 0, children: u }),
          c.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            children: c.jsx(h, {}),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.mediaController,
        a = t.msg,
        i = t.musicMetadata,
        l = t.onClose,
        s = i.artistAttribution,
        u = o("useWAWebCanPlaybackAudio").useCanDisplayMusicAttribution(a);
      d(
        function () {
          u &&
            o("WAWebMediaDownloadMmsMusicArtwork")
              .downloadMusicArtwork({ musicMetadata: i, msg: a })
              .catch(function () {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "music: failed to download music artwork",
                    ])),
                );
              });
        },
        [i, a, u],
      );
      var m = u
          ? c.jsxs(c.Fragment, {
              children: [
                c.jsx(r("WAWebMusicArtwork.react"), {
                  msg: a,
                  musicMetadata: i,
                }),
                c.jsx(o("WAWebText.react").WAWebTextLarge, {
                  marginBottom: 12,
                  marginTop: 16,
                  children: i.title,
                }),
                c.jsx(o("WAWebText.react").WAWebTextTitle, {
                  marginBottom: 12,
                  children: i.author,
                }),
                s != null &&
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: s,
                    children: y.artistLinkText(),
                  }),
              ],
            })
          : c.jsx("span", { children: y.songUnavailableModal() }),
        p = function () {
          (l(), n == null || n.play());
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.MusicAttribution,
        tsNavigationData: {
          surface: "unknown",
          viewName: "music-status-attribution",
        },
        onCancel: p,
        cancelText: u
          ? r("WAWebFbtCommon")("Close")
          : r("WAWebFbtCommon")("OK"),
        children: c.jsx(o("WAWebFlex.react").FlexColumn, {
          align: u ? "center" : "start",
          justify: "center",
          paddingTop: 20,
          children: m,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n, r, a, i) {
      if ((n == null || n.pause(), r === !0 && a != null && i != null)) {
        a(
          c.jsx(_, {
            msg: t,
            musicMetadata: e,
            mediaController: n,
            onClose: i,
          }),
        );
        return;
      }
      return o("WAWebModalManager").ModalManager.open(
        c.jsx(_, {
          msg: t,
          musicMetadata: e,
          mediaController: n,
          onClose: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    function g() {
      return c.jsx(r("WDSIconIcMusicNote.react"), {
        iconXstyle: m.noteIcon,
        height: 18,
        viewBox: { x: 6, y: 0, height: 24, width: 14 },
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return c.jsx(r("WDSIconIcChevronRight.react"), {
        iconXstyle: m.chevronIcon,
        height: 20,
        width: 24,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
      songUnavailable: function () {
        return s._(/*BTDS*/ "The song is unavailable");
      },
      songUnavailableModal: function () {
        return s._(/*BTDS*/ "The song is not available in your region");
      },
      artistLinkText: function () {
        return s._(/*BTDS*/ "View artist");
      },
      explicitContent: function () {
        return s._(/*BTDS*/ "Contains explicit content");
      },
    };
    ((l.MusicAttribution = p), (l.showMusicStatusAttributionModal = f));
  },
  226,
);
