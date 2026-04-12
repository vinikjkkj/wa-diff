__d(
  "WAWebMediaVideoLinkPreview.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClientFeatureFlags",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaStateControls.react",
    "WAWebMsgGetters",
    "WAWebPipConst",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebStateUtils",
    "WAWebURLUtils",
    "WAWebUnstyledButton.react",
    "WAWebUtilsYoutubeUrlParser",
    "WAWebVideoPipLargeIcon.react",
    "err",
    "isStringNullOrEmpty",
    "lodash",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e,
      m = d.useRef,
      p = d.useState,
      _ = {
        thumbnailWrapper: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          maxHeight: "x6aax8c",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          boxSizing: "x9f619",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1v8p93f x1878o1q",
          borderInlineEndColor: "x1o3jo1z xf2y0h5",
          borderBottomColor: "x16stqrj xnv9r3m",
          borderInlineStartColor: "xv5lvn5 xo81p9n",
          $$css: !0,
        },
      },
      f = { PREVIEW: "PREVIEW", FLOATER: "FLOATER" },
      g = [
        o("WAWebPipConst").HOSTNAME.YOUTUBE,
        o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE,
        o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED,
      ];
    function h(e) {
      return g.includes(e);
    }
    function y(e) {
      var t = e.msg,
        n = m(null),
        a = p(function () {
          return r("WAWebPipController").isOpened(
            o("WAWebStateUtils").unproxy(t),
          )
            ? f.FLOATER
            : f.PREVIEW;
        }),
        i = a[0],
        l = a[1],
        s = function () {
          i !== f.FLOATER && l(f.FLOATER);
        },
        d = function () {
          i !== f.PREVIEW && l(f.PREVIEW);
        };
      (o("useWAWebListener").useListener(
        r("WAWebPipController"),
        t.id.toString() + "_pip_did_open",
        s,
      ),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          t.id.toString() + "_pip_did_close",
          d,
        ));
      var g = function () {
          return n.current ? n.current.getBoundingClientRect() : null;
        },
        y = function (t) {
          var e = t.split("?");
          if (e.length !== 2) return 0;
          var n = e[1],
            a = new (r("WAWebPonyfillsUrlSearchParams"))(n).get(
              o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_NAME,
            );
          if (r("isStringNullOrEmpty")(a)) return 0;
          var i = a.match(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_PATTERN),
            l = 0;
          if (i != null && i.length)
            for (var s = 1; s < i.length; s++) {
              var u = i[s];
              if (u) {
                var c = parseInt(u, 10);
                if (Number.isNaN(c)) return 0;
                (u.endsWith("h") && (l += c * 3600),
                  u.endsWith("m") && (l += c * 60),
                  u.endsWith("s") && (l += c),
                  /^\d+$/.test(u) && (l += c));
              }
            }
          return l;
        },
        C = r("isStringNullOrEmpty")(t.description)
          ? null
          : c.jsx("div", {
              className:
                "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
              title: t.description,
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: t.description,
              }),
            }),
        b = r("WAWebURLUtils").hostname(e.msg.matchedText);
      ((b = r("WAWebURLUtils").withoutWww(b)),
        b === o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED &&
          (b = o("WAWebPipConst").HOSTNAME.YOUTUBE));
      var v = c.jsx("div", {
          className: "x4p5aij x1pg5gke xhslqc4",
          children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: b }),
        }),
        S = {
          0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
          1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w",
        }[!e.msg.thumbnail << 0],
        R = o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(t.t),
        L = !R && e.msg.thumbnailHQ ? e.msg.thumbnailHQ : e.msg.thumbnail,
        E;
      if (i === f.PREVIEW)
        switch (b) {
          case o("WAWebPipConst").HOSTNAME.YOUTUBE:
          case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE: {
            var k = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(
              e.msg.matchedText,
            );
            if (!r("isStringNullOrEmpty")(k)) {
              var I = y(e.msg.matchedText);
              E = function (n) {
                (n && n.stopPropagation(),
                  r("WAWebPipController").openYoutubePiP(k, e.msg, I, g()));
              };
            }
            break;
          }
          case o("WAWebPipConst").HOSTNAME.INSTAGRAM:
          case o("WAWebPipConst").HOSTNAME.STREAMABLE:
          case o("WAWebPipConst").HOSTNAME.FACEBOOK:
          case o("WAWebPipConst").HOSTNAME.FBWATCH:
          case o("WAWebPipConst").HOSTNAME.FBWATCH_ALT:
          case o("WAWebPipConst").HOSTNAME.SHARECHAT:
            E = function (n) {
              throw (
                r("WAWebPipController").openOgVideoPiP("", L, e.msg, 0, g()),
                r("err")("This call is not supported")
              );
            };
            break;
          default:
            return null;
        }
      var T = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          {
            0: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
            1: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
          }[!!o("WAWebMsgGetters").getIsSentByMe(e.msg) << 0],
          "_ah-7",
        ),
        D =
          i === f.PREVIEW
            ? c.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
                children: c.jsx(o("WAWebMediaStateControls.react").Play, {}),
              })
            : null,
        x =
          i === f.FLOATER
            ? c.jsx(r("WAWebPipOverlay.react"), {
                icon: c.jsx(
                  o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon,
                  {},
                ),
                children: u._(
                  /*BTDS*/ "This video is playing in picture in picture.",
                ),
              })
            : null,
        $,
        P;
      if (L && r("lodash").values(o("WAWebPipConst").HOSTNAME).includes(b)) {
        var N = h(b);
        $ = c.jsx(
          "img",
          babelHelpers.extends(
            { alt: "" },
            {
              0: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk x14tgpju",
              },
              2: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk x14tgpju x1a842fp xl1xv1r",
              },
              1: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk xkcp37y",
              },
              3: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk x1a842fp xl1xv1r xkcp37y",
              },
            }[
              (!!N << 1) |
                (!!(
                  (N &&
                    o("WAWebClientFeatureFlags").isFeatureEnabled(
                      "youtube_video_preview_without_blur",
                    )) ||
                  (!R && e.msg.thumbnailHQ)
                ) <<
                  0)
            ],
            { src: "data:image/jpeg;base64," + L },
          ),
        );
        var M = o("WAWebPipConst").getAttributionIcon(b);
        M &&
          (P = c.jsx("div", {
            className: "x10l6tqk x1bv8kjd x1jn9clo x1vjfegm",
            children: c.jsx(M, {}),
          }));
      } else
        $ = c.jsx("div", { className: "x1n2onr6 xh8yej3 xmi39wt x8du59y" });
      return c.jsxs("div", {
        className: T,
        children: [
          c.jsxs(r("WAWebUnstyledButton.react"), {
            tabIndex: 0,
            ref: n,
            xstyle: _.thumbnailWrapper,
            onClick: E,
            "aria-label": u._(/*BTDS*/ "Open video player"),
            children: [P, $, D, x],
          }),
          c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
            className: S,
            href: e.msg.matchedText,
            tabIndex: -1,
            children: [
              c.jsx("div", {
                className:
                  "x104kibb x1c4vz4f xs83m0k xdl72j9 x13m54ha x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
                title: e.msg.title,
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: e.msg.title,
                }),
              }),
              C,
              v,
            ],
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
