__d(
  "WAWebMediaStateControls.react",
  [
    "WAWebClickable.react",
    "WAWebL10nFilesize",
    "WAWebMediaCancelIcon.react",
    "WAWebMediaGifIcon.react",
    "WAWebMediaPlayIcon.react",
    "WAWebMediaUploadIcon.react",
    "WAWebSpinner.react",
    "WDSIconIcDownload.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef,
      m = {
        iconMeta: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          marginInlineEnd: "xf6vk7d",
          $$css: !0,
        },
        play: { marginInlineStart: "xwklpps", $$css: !0 },
      };
    function p(e) {
      var t = e.cancelable,
        n = e.ref,
        r = !!t,
        a = d();
      return (
        c(n, function () {
          return {
            getElement: function () {
              return a.current;
            },
          };
        }),
        s.jsx("div", {
          ref: a,
          className:
            "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
          "data-testid": void 0,
          children: s.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x1rg5ohu x10wjd1d x1n2onr6 x1pju0fl" },
                1: {
                  className: "x1rg5ohu x10wjd1d x1n2onr6 x1pju0fl x1ypdohk",
                },
              }[!!r << 0],
              {
                children: [
                  s.jsx("div", {
                    className: "x1o0tod x10l6tqk x13vifvy",
                    children: s.jsx(o("WAWebSpinner.react").Spinner, {
                      size: 50,
                      stroke: 3,
                      color: "white",
                    }),
                  }),
                  r
                    ? s.jsx("div", {
                        className:
                          "x1jeu2jp x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x12k1wp2 x1k847yn x1j67448 xzkvk7n x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14obwa1 xn3w4p2 xccywas x7phf20 x7r5mf7 x10l6tqk x1pdr0v7 x187nhsf xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg x180ha0m x147fd2z xlogyij xq2yz4j xn4w8fp x17issv1 xxslzl9 xwjlxly x10tli2e xf8oath xdz3mh0 x1hmns74 x1r60q8r x1y59no3",
                        children: s.jsx(
                          o("WAWebMediaCancelIcon.react").MediaCancelIcon,
                          {},
                        ),
                      })
                    : null,
                ],
              },
            ),
          ),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.filesize,
        n = t === void 0 ? 0 : t,
        a = e.onClick,
        i = e.ref,
        l = e.tabIndex,
        u = l === void 0 ? 0 : l,
        p = d();
      return (
        c(i, function () {
          return {
            getElement: function () {
              return p.current;
            },
          };
        }),
        n > 0
          ? s.jsx("div", {
              ref: p,
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
              "data-testid": void 0,
              children: s.jsxs("button", {
                tabIndex: u,
                className:
                  "x6s0dn4 x191g5wg x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x17t9dm2 x3nfvp2 x1nxh6w3 x10wjd1d xexx8yu x1x5flf6 x18d9i69 xbmws1g x1n2onr6 x16dsc37 x1ypdohk",
                onClick: a,
                children: [
                  s.jsx(r("WDSIconIcDownload.react"), { xstyle: m.iconMeta }),
                  s.jsx("span", {
                    children: o("WAWebL10nFilesize").getL10nFilesize(n),
                  }),
                ],
              }),
            })
          : s.jsx("div", {
              ref: p,
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
              "data-testid": void 0,
              children: s.jsx("button", {
                tabIndex: u,
                className:
                  "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl x1ypdohk",
                onClick: a,
                children: s.jsx(r("WDSIconIcDownload.react"), {}),
              }),
            })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.filesize,
        n = t === void 0 ? 0 : t,
        r = e.ref,
        a = d();
      return (
        c(r, function () {
          return {
            getElement: function () {
              return a.current;
            },
          };
        }),
        n > 0
          ? s.jsx("div", {
              ref: a,
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
              "data-testid": void 0,
              children: s.jsxs("button", {
                className:
                  "x6s0dn4 x191g5wg x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x17t9dm2 x3nfvp2 x1nxh6w3 x10wjd1d xexx8yu x1x5flf6 x18d9i69 xbmws1g x1n2onr6 x16dsc37 x1ypdohk",
                children: [
                  s.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, {
                    xstyle: m.iconMeta,
                  }),
                  s.jsx("span", {
                    children: o("WAWebL10nFilesize").getL10nFilesize(n),
                  }),
                ],
              }),
            })
          : s.jsx("div", {
              ref: a,
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
              "data-testid": void 0,
              children: s.jsx("div", {
                className:
                  "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl",
                children: s.jsx(
                  o("WAWebMediaUploadIcon.react").MediaUploadIcon,
                  {},
                ),
              }),
            })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.ref,
        n = d();
      return (
        c(t, function () {
          return {
            getElement: function () {
              return n.current;
            },
          };
        }),
        s.jsx("div", {
          ref: n,
          className:
            "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
          children: s.jsx("div", {
            className:
              "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl",
            children: s.jsx(o("WAWebMediaPlayIcon.react").MediaPlayIcon, {
              xstyle: m.play,
            }),
          }),
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.onClick;
      return s.jsx(o("WAWebClickable.react").Clickable, {
        className:
          "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
        onClick: t,
        dataTestId: "media-state-gif-icon",
        children: s.jsx("div", {
          className:
            "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl",
          children: s.jsx(o("WAWebMediaGifIcon.react").MediaGifIcon, {}),
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.Pending = p),
      (l.Download = _),
      (l.Upload = f),
      (l.Play = g),
      (l.GifIcon = h));
  },
  98,
);
