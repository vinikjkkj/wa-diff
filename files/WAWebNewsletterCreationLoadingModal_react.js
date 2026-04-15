__d(
  "WAWebNewsletterCreationLoadingModal.react",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebLottieAnimationLoadable",
    "WAWebModal.react",
    "WAWebNoop",
    "WAWebWdsPictoSuccessTickIcon.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = 1500,
      _ = {
        creatingChannel: function () {
          return s._(/*BTDS*/ "Creating channel");
        },
        channelCreated: function () {
          return s._(/*BTDS*/ "Channel created");
        },
      },
      f = {
        imageContainer: {
          paddingTop: "x1p5oq8j",
          paddingBottom: "x1l90r2v",
          $$css: !0,
        },
        spinnerAccent: { color: "x1v5yvga", $$css: !0 },
        spinnerContainer: { paddingTop: "x1h8t67q", $$css: !0 },
        statusText: {
          position: "x10l6tqk",
          bottom: "xbfrwjf",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          $$css: !0,
        },
        confettiAnimation: { width: "x1fwfoet", height: "xj7ipzj", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.channelName,
        a = e.initialLoading,
        i = e.loadingRef,
        l = e.onClose,
        s = e.thumbnailUrl,
        c = m(a),
        g = c[0],
        b = c[1],
        v = m(null),
        S = v[0],
        R = v[1],
        L,
        E;
      (t[0] !== i
        ? ((L = function () {
            return (
              (i.current = {
                setLoading: b,
                setOnSuccess: function (t) {
                  R(function () {
                    return t;
                  });
                },
              }),
              function () {
                i.current = null;
              }
            );
          }),
          (E = [i]),
          (t[0] = i),
          (t[1] = L),
          (t[2] = E))
        : ((L = t[1]), (E = t[2])),
        d(L, E));
      var k = m(null),
        I = k[0],
        T = k[1],
        D = m(!1),
        x = D[0],
        $ = D[1],
        P,
        N;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            var e = !1;
            return (
              r("JSResourceForInteraction")(
                "WAWebConfettiTallGreenAnimationData",
              )
                .__setRef("WAWebNewsletterCreationLoadingModal.react")
                .load()
                .then(function (t) {
                  e || T(t);
                })
                .catch(r("WAWebNoop")),
              function () {
                e = !0;
              }
            );
          }),
          (N = []),
          (t[3] = P),
          (t[4] = N))
        : ((P = t[3]), (N = t[4])),
        d(P, N));
      var M;
      t[5] !== l || t[6] !== S
        ? ((M = function () {
            (l(), S == null || S());
          }),
          (t[5] = l),
          (t[6] = S),
          (t[7] = M))
        : (M = t[7]);
      var w = !g,
        A;
      (t[8] !== w
        ? ((A = { immediate: w }), (t[8] = w), (t[9] = A))
        : (A = t[9]),
        o("useWAWebTimeout").useTimeout(M, p, A));
      var F = !g && I != null && !x,
        O;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            $(!0);
          }),
          (t[10] = O))
        : (O = t[10]);
      var B = O,
        W;
      t[11] !== I || t[12] !== F
        ? ((W = F && u.jsx(h, { animationData: I, onComplete: B })),
          (t[11] = I),
          (t[12] = F),
          (t[13] = W))
        : (W = t[13]);
      var q;
      t[14] !== n || t[15] !== g || t[16] !== s
        ? ((q = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: g
              ? u.jsx(y, {})
              : u.jsx(C, { channelName: n, thumbnailUrl: s }),
          })),
          (t[14] = n),
          (t[15] = g),
          (t[16] = s),
          (t[17] = q))
        : (q = t[17]);
      var U;
      t[18] !== g
        ? ((U = g ? _.creatingChannel() : _.channelCreated()),
          (t[18] = g),
          (t[19] = U))
        : (U = t[19]);
      var V;
      t[20] !== U
        ? ((V = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: f.statusText,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: U,
            }),
          })),
          (t[20] = U),
          (t[21] = V))
        : (V = t[21]);
      var H;
      return (
        t[22] !== q || t[23] !== V || t[24] !== W
          ? ((H = u.jsxs(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.ChannelCreation,
              onOverlayClick: r("WAWebNoop"),
              children: [W, q, V],
            })),
            (t[22] = q),
            (t[23] = V),
            (t[24] = W),
            (t[25] = H))
          : (H = t[25]),
        H
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.animationData,
        r = e.onComplete,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x10l6tqk xhcmq3u x1o0tod xtijo5x x78zum5 xl56j7k x47corl x1vjfegm",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n || t[2] !== r
          ? ((i = u.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: u.jsx(
                  o("WAWebLottieAnimationLoadable").LottieAnimation,
                  {
                    autoplay: !0,
                    loop: !1,
                    data: n,
                    onComplete: r,
                    xstyle: f.confettiAnimation,
                  },
                ),
              }),
            )),
            (t[1] = n),
            (t[2] = r),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: f.spinnerContainer,
              children: u.jsx(r("WDSSpinner.react"), {
                size: 20,
                stroke: 3,
                xstyle: f.spinnerAccent,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.channelName,
        a = e.thumbnailUrl,
        i;
      t[0] !== a
        ? ((i = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: f.imageContainer,
            children: u.jsx(b, { thumbnailUrl: a }),
          })),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== n
        ? ((l = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              textAlign: "center",
              maxLines: 2,
              children: n,
            }),
          })),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var s;
      return (
        t[4] !== i || t[5] !== l
          ? ((s = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [i, l],
            })),
            (t[4] = i),
            (t[5] = l),
            (t[6] = s))
          : (s = t[6]),
        s
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.thumbnailUrl;
      if (n != null) {
        var a;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = {
              width: 88,
              height: 88,
              borderRadius: "50%",
              objectFit: "cover",
            }),
            (t[0] = a))
          : (a = t[0]);
        var i;
        return (
          t[1] !== n
            ? ((i = u.jsx(r("WAWebImg.react"), { src: n, alt: "", style: a })),
              (t[1] = n),
              (t[2] = i))
            : (i = t[2]),
          i
        );
      }
      var l;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx("div", {
              className:
                "x29ncy0 x14nwjz3 x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6egj2d",
              children: u.jsx(
                o("WAWebWdsPictoSuccessTickIcon.react").WdsPictoSuccessTickIcon,
                { height: 88, width: 88 },
              ),
            })),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = g;
  },
  226,
);
