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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(10),
        n = e.cancelable,
        r = e.ref,
        a = !!n,
        i = d(),
        l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return {
              getElement: function () {
                return i.current;
              },
            };
          }),
          (t[0] = l))
        : (l = t[0]),
        c(r, l));
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            className:
              "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
          }),
          (t[1] = u))
        : (u = t[1]);
      var m;
      t[2] !== a
        ? ((m = {
            0: { className: "x1rg5ohu x10wjd1d x1n2onr6 x1pju0fl" },
            1: { className: "x1rg5ohu x10wjd1d x1n2onr6 x1pju0fl x1ypdohk" },
          }[!!a << 0]),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s.jsx("div", {
            className: "x1o0tod x10l6tqk x13vifvy",
            children: s.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 3,
              color: "white",
            }),
          })),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== a
        ? ((_ = a
            ? s.jsx("div", {
                className:
                  "x1jeu2jp x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x12k1wp2 x1k847yn x1j67448 xzkvk7n x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14obwa1 xn3w4p2 xccywas x7phf20 x7r5mf7 x10l6tqk x1pdr0v7 x187nhsf xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg x180ha0m x147fd2z xlogyij xq2yz4j xn4w8fp x17issv1 xxslzl9 xwjlxly x10tli2e xf8oath xdz3mh0 x1hmns74 x1r60q8r x1y59no3",
                children: s.jsx(
                  o("WAWebMediaCancelIcon.react").MediaCancelIcon,
                  {},
                ),
              })
            : null),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== m || t[8] !== _
          ? ((f = s.jsx(
              "div",
              babelHelpers.extends({ ref: i }, u, {
                "data-testid": void 0,
                children: s.jsxs(
                  "div",
                  babelHelpers.extends({}, m, { children: [p, _] }),
                ),
              }),
            )),
            (t[7] = m),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.filesize,
        a = e.onClick,
        i = e.ref,
        l = e.tabIndex,
        u = n === void 0 ? 0 : n,
        p = l === void 0 ? 0 : l,
        _ = d(),
        f;
      if (
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = function () {
              return {
                getElement: function () {
                  return _.current;
                },
              };
            }),
            (t[0] = f))
          : (f = t[0]),
        c(i, f),
        u > 0)
      ) {
        var g;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = {
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
            }),
            (t[1] = g))
          : (g = t[1]);
        var h;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              className:
                "x6s0dn4 x191g5wg x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x17t9dm2 x3nfvp2 x1nxh6w3 x10wjd1d xexx8yu x1x5flf6 x18d9i69 xbmws1g x1n2onr6 x16dsc37 x1ypdohk",
            }),
            (t[2] = h))
          : (h = t[2]);
        var y;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = s.jsx(r("WDSIconIcDownload.react"), { xstyle: m.iconMeta })),
            (t[3] = y))
          : (y = t[3]);
        var C;
        t[4] !== u
          ? ((C = o("WAWebL10nFilesize").getL10nFilesize(u)),
            (t[4] = u),
            (t[5] = C))
          : (C = t[5]);
        var b;
        t[6] !== C
          ? ((b = s.jsx("span", { children: C })), (t[6] = C), (t[7] = b))
          : (b = t[7]);
        var v;
        return (
          t[8] !== a || t[9] !== b || t[10] !== p
            ? ((v = s.jsx(
                "div",
                babelHelpers.extends({ ref: _ }, g, {
                  "data-testid": void 0,
                  children: s.jsxs(
                    "button",
                    babelHelpers.extends({ tabIndex: p }, h, {
                      onClick: a,
                      children: [y, b],
                    }),
                  ),
                }),
              )),
              (t[8] = a),
              (t[9] = b),
              (t[10] = p),
              (t[11] = v))
            : (v = t[11]),
          v
        );
      }
      var S;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {
            className:
              "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
          }),
          (t[12] = S))
        : (S = t[12]);
      var R;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = {
            className:
              "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl x1ypdohk",
          }),
          (t[13] = R))
        : (R = t[13]);
      var L;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s.jsx(r("WDSIconIcDownload.react"), {})), (t[14] = L))
        : (L = t[14]);
      var E;
      return (
        t[15] !== a || t[16] !== p
          ? ((E = s.jsx(
              "div",
              babelHelpers.extends({ ref: _ }, S, {
                "data-testid": void 0,
                children: s.jsx(
                  "button",
                  babelHelpers.extends({ tabIndex: p }, R, {
                    onClick: a,
                    children: L,
                  }),
                ),
              }),
            )),
            (t[15] = a),
            (t[16] = p),
            (t[17] = E))
          : (E = t[17]),
        E
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.filesize,
        r = e.ref,
        a = n === void 0 ? 0 : n,
        i = d(),
        l;
      if (
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function () {
              return {
                getElement: function () {
                  return i.current;
                },
              };
            }),
            (t[0] = l))
          : (l = t[0]),
        c(r, l),
        a > 0)
      ) {
        var u;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = {
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
            }),
            (t[1] = u))
          : (u = t[1]);
        var p, _;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = {
              className:
                "x6s0dn4 x191g5wg x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x17t9dm2 x3nfvp2 x1nxh6w3 x10wjd1d xexx8yu x1x5flf6 x18d9i69 xbmws1g x1n2onr6 x16dsc37 x1ypdohk",
            }),
            (_ = s.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, {
              xstyle: m.iconMeta,
            })),
            (t[2] = p),
            (t[3] = _))
          : ((p = t[2]), (_ = t[3]));
        var f;
        t[4] !== a
          ? ((f = o("WAWebL10nFilesize").getL10nFilesize(a)),
            (t[4] = a),
            (t[5] = f))
          : (f = t[5]);
        var g;
        return (
          t[6] !== f
            ? ((g = s.jsx(
                "div",
                babelHelpers.extends({ ref: i }, u, {
                  "data-testid": void 0,
                  children: s.jsxs(
                    "button",
                    babelHelpers.extends({}, p, {
                      children: [_, s.jsx("span", { children: f })],
                    }),
                  ),
                }),
              )),
              (t[6] = f),
              (t[7] = g))
            : (g = t[7]),
          g
        );
      }
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className:
              "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
          }),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = s.jsx(
              "div",
              babelHelpers.extends({ ref: i }, h, {
                "data-testid": void 0,
                children: s.jsx("div", {
                  className:
                    "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl",
                  children: s.jsx(
                    o("WAWebMediaUploadIcon.react").MediaUploadIcon,
                    {},
                  ),
                }),
              }),
            )),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.ref,
        r = d(),
        a;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            return {
              getElement: function () {
                return r.current;
              },
            };
          }),
          (t[0] = a))
        : (a = t[0]),
        c(n, a));
      var i;
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = s.jsx("div", {
              ref: r,
              className:
                "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h",
              children: s.jsx("div", {
                className:
                  "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl",
                children: s.jsx(o("WAWebMediaPlayIcon.react").MediaPlayIcon, {
                  xstyle: m.play,
                }),
              }),
            })),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r =
            "x6s0dn4 x17t9dm2 x78zum5 x5yr21d xl56j7k x1o0tod x10l6tqk x13vifvy xh8yej3 x11uqc5h"),
          (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s.jsx("div", {
            className:
              "x6s0dn4 x191g5wg x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 x10wjd1d xl56j7k x1n2onr6 x1pju0fl",
            children: s.jsx(o("WAWebMediaGifIcon.react").MediaGifIcon, {}),
          })),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== n
          ? ((i = s.jsx(o("WAWebClickable.react").Clickable, {
              className: r,
              onClick: n,
              dataTestId: "media-state-gif-icon",
              children: a,
            })),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    ((l.Pending = p),
      (l.Download = _),
      (l.Upload = f),
      (l.Play = g),
      (l.GifIcon = h));
  },
  98,
);
