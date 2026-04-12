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
      var t = e.channelName,
        n = e.initialLoading,
        a = e.loadingRef,
        i = e.onClose,
        l = e.thumbnailUrl,
        s = m(n),
        c = s[0],
        g = s[1],
        b = m(null),
        v = b[0],
        S = b[1];
      d(
        function () {
          return (
            (a.current = {
              setLoading: g,
              setOnSuccess: function (t) {
                S(function () {
                  return t;
                });
              },
            }),
            function () {
              a.current = null;
            }
          );
        },
        [a],
      );
      var R = m(null),
        L = R[0],
        E = R[1],
        k = m(!1),
        I = k[0],
        T = k[1];
      (d(function () {
        var e = !1;
        return (
          r("JSResourceForInteraction")("WAWebConfettiTallGreenAnimationData")
            .__setRef("WAWebNewsletterCreationLoadingModal.react")
            .load()
            .then(function (t) {
              e || E(t);
            })
            .catch(r("WAWebNoop")),
          function () {
            e = !0;
          }
        );
      }, []),
        o("useWAWebTimeout").useTimeout(
          function () {
            (i(), v == null || v());
          },
          p,
          { immediate: !c },
        ));
      var D = !c && L != null && !I,
        x = function () {
          T(!0);
        };
      return u.jsxs(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.ChannelCreation,
        onOverlayClick: r("WAWebNoop"),
        children: [
          D && u.jsx(h, { animationData: L, onComplete: x }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c
              ? u.jsx(y, {})
              : u.jsx(C, { channelName: t, thumbnailUrl: l }),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: f.statusText,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: c ? _.creatingChannel() : _.channelCreated(),
            }),
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.animationData,
        n = e.onComplete;
      return u.jsx("div", {
        className:
          "x10l6tqk xhcmq3u x1o0tod xtijo5x x78zum5 xl56j7k x47corl x1vjfegm",
        children: u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
          autoplay: !0,
          loop: !1,
          data: t,
          onComplete: n,
          xstyle: f.confettiAnimation,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: f.spinnerContainer,
        children: u.jsx(r("WDSSpinner.react"), {
          size: 20,
          stroke: 3,
          xstyle: f.spinnerAccent,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.channelName,
        n = e.thumbnailUrl;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: [
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: f.imageContainer,
            children: u.jsx(b, { thumbnailUrl: n }),
          }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              textAlign: "center",
              maxLines: 2,
              children: t,
            }),
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.thumbnailUrl;
      return t != null
        ? u.jsx(r("WAWebImg.react"), {
            src: t,
            alt: "",
            style: {
              width: 88,
              height: 88,
              borderRadius: "50%",
              objectFit: "cover",
            },
          })
        : u.jsx("div", {
            className:
              "x29ncy0 x14nwjz3 x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6egj2d",
            children: u.jsx(
              o("WAWebWdsPictoSuccessTickIcon.react").WdsPictoSuccessTickIcon,
              { height: 88, width: 88 },
            ),
          });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
