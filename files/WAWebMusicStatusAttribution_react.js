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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(27),
        n = e.msg,
        a = e.musicMetadata,
        i = e.playing,
        l = e.xstyle,
        s = o("useWAWebCanPlaybackAudio").useCanDisplayMusicAttribution(n),
        u = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(n);
      if (!s) {
        var d;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              children: c.jsx(g, {}),
            })),
            (t[0] = d))
          : (d = t[0]);
        var p;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = c.jsx(o("WAWebFlex.react").FlexItem, {
              className: "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2",
              children: y.songUnavailable(),
            })),
            (t[1] = p))
          : (p = t[1]);
        var _;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              children: c.jsx(h, {}),
            })),
            (t[2] = _))
          : (_ = t[2]);
        var f;
        return (
          t[3] !== l
            ? ((f = c.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 4,
                testid: void 0,
                xstyle: l,
                children: [d, p, _],
              })),
              (t[3] = l),
              (t[4] = f))
            : (f = t[4]),
          f
        );
      }
      var C;
      t[5] !== a.isExplicit
        ? ((C = a.isExplicit
            ? c.jsx(o("WAWebExplicitIcon.react").ExplicitIcon, {
                height: 12,
                width: 12,
                "aria-label": y.explicitContent(),
                iconXstyle: m.explicitIcon,
              })
            : null),
          (t[5] = a.isExplicit),
          (t[6] = C))
        : (C = t[6]);
      var b = C,
        v;
      t[7] !== a.author
        ? ((v = c.jsx("strong", { children: a.author }, "author")),
          (t[7] = a.author),
          (t[8] = v))
        : (v = t[8]);
      var S = v,
        R;
      t[9] !== S || t[10] !== a.title
        ? ((R = r("WAWebL10N").isRTL() ? [a.title, S] : [S, a.title]),
          (t[9] = S),
          (t[10] = a.title),
          (t[11] = R))
        : (R = t[11]);
      var L = R,
        E = L[0],
        k = L[1],
        I;
      t[12] !== u || t[13] !== i
        ? ((I = u
            ? c.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                xstyle: m.animationWrapper,
                children: c.jsx(r("WAWebMusicSoundAnimation.react"), {
                  play: i,
                }),
              })
            : c.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                children: c.jsx(g, {}),
              })),
          (t[12] = u),
          (t[13] = i),
          (t[14] = I))
        : (I = t[14]);
      var T;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2"),
          (t[15] = T))
        : (T = t[15]);
      var D;
      t[16] !== E || t[17] !== k
        ? ((D = c.jsxs(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            className: T,
            children: [E, " ", k],
          })),
          (t[16] = E),
          (t[17] = k),
          (t[18] = D))
        : (D = t[18]);
      var x;
      t[19] !== b
        ? ((x = c.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            children: b,
          })),
          (t[19] = b),
          (t[20] = x))
        : (x = t[20]);
      var $;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = c.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            children: c.jsx(h, {}),
          })),
          (t[21] = $))
        : ($ = t[21]);
      var P;
      return (
        t[22] !== I || t[23] !== D || t[24] !== x || t[25] !== l
          ? ((P = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 4,
              xstyle: l,
              children: [I, D, x, $],
            })),
            (t[22] = I),
            (t[23] = D),
            (t[24] = x),
            (t[25] = l),
            (t[26] = P))
          : (P = t[26]),
        P
      );
    }
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
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(r("WDSIconIcMusicNote.react"), {
              iconXstyle: m.noteIcon,
              height: 18,
              viewBox: { x: 6, y: 0, height: 24, width: 14 },
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(r("WDSIconIcChevronRight.react"), {
              iconXstyle: m.chevronIcon,
              height: 20,
              width: 24,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
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
