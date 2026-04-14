__d(
  "WAWebGifPanelGifPreview.react",
  [
    "WAAbortError",
    "WAWebChatPreferenceCollection",
    "WAWebNoop",
    "WAWebStarIcon.react",
    "WAWebUA",
    "WAWebUnstyledButton.react",
    "isStringNullOrEmpty",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = {
        preview: {
          position: "x1n2onr6",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          alignItems: "xuk3077",
          justifyContent: "xl56j7k",
          height: "x129qt2x",
          marginInlineEnd: "x1bz82a1 x1j53mea",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          cursor: "x1ypdohk",
          backgroundColor: "x1280gxy",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          ":focus-visible_borderTopColor": "x1878o1q",
          ":focus-visible_borderInlineEndColor": "xf2y0h5",
          ":focus-visible_borderBottomColor": "xnv9r3m",
          ":focus-visible_borderInlineStartColor": "xo81p9n",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.gif,
        l = a.onSend,
        s = p(null),
        c = p(null),
        g = _(!1),
        h = g[0],
        y = g[1],
        C = _(!1),
        b = C[0],
        v = C[1],
        S = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["autoplayAnimatedImages"],
        );
      d(
        function () {
          s.current != null &&
            (S.autoplayAnimatedImages === !1
              ? s.current.pause()
              : h
                ? s.current.paused &&
                  s.current
                    .play()
                    .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                : s.current.paused ||
                  (s.current.pause(),
                  s.current && (s.current.currentTime = 0)));
        },
        [h, S.autoplayAnimatedImages],
      );
      var R = function (t) {
          if (S.autoplayAnimatedImages === !1) {
            (y(!1), v(!0));
            return;
          }
          (h !== t || !b) && (y(t), v(!0));
        },
        L = function () {
          l(i);
        },
        E = function (t) {
          c.current = t;
        },
        k = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            a.onRowActivate == null || a.onRowActivate());
        },
        I = function () {
          a.onRowActivate == null || a.onRowActivate();
        },
        T = function (t) {
          (t.preventDefault(), t.stopPropagation());
        },
        D = function () {
          return c.current;
        };
      m(n, function () {
        return { setShouldAnimate: R, getElement: D };
      });
      var x = null;
      b &&
        (o("WAWebUA").UA.troublesWithLotsOfVideos &&
        !r("isStringNullOrEmpty")(i.nonVideoUrl)
          ? (x = u.jsx("img", {
              className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
              onClick: L,
              src: i.nonVideoUrl,
            }))
          : (x = u.jsx("video", {
              className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
              onClick: L,
              controls: !1,
              autoPlay: h,
              loop: !0,
              muted: !0,
              ref: s,
              src: i.previewUrl,
            })));
      var $;
      a.isStarred === !0 &&
        a.onUnstarMsg &&
        ($ = u.jsx("button", {
          className: "x10l6tqk x1ro0b6g xy1j3rs x1rozsjd x17t9dm2",
          onClick: a.onUnstarMsg,
          children: u.jsx(o("WAWebStarIcon.react").StarIcon, {}),
        }));
      var P =
        i.accessibilityLabel != null
          ? { "aria-label": i.accessibilityLabel }
          : {};
      return u.jsxs(
        r("WAWebUnstyledButton.react"),
        babelHelpers.extends(
          {
            ref: E,
            testid: void 0,
            xstyle: f.preview,
            tabIndex: -1,
            onFocus: k,
            onBlur: T,
            onMouseEnter: I,
          },
          P,
          {
            children: [
              u.jsx("div", {
                style: { width: i.widthStr },
                className: "x1iyjqo2 x2lah0s",
                children: u.jsx("div", {
                  style: { paddingBottom: i.ratioStr },
                  className: "x1n2onr6 xh8yej3",
                  children: x,
                }),
              }),
              $,
            ],
          },
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = g;
    l.GifPreview = h;
  },
  98,
);
