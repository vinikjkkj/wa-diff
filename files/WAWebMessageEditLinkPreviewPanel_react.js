__d(
  "WAWebMessageEditLinkPreviewPanel.react",
  [
    "WAWebFlex.react",
    "WAWebMediaLinkPreview.react",
    "WAWebUimUie.react",
    "WAWebXIcon.react",
    "react",
    "useLazyRef",
    "useWAWebDebouncedCallback",
    "useWAWebLinkPreview",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useImperativeHandle,
      m = u.useRef,
      p = u.useState,
      _ = 83,
      f = 16,
      g = _ + f,
      h = {
        container: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "x64bnmy",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x13jy36j",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        linkPreview: { flexGrow: "x1iyjqo2", flexShrink: "xs83m0k", $$css: !0 },
      };
    function y(e) {
      var t = e.linkPreview,
        n = e.onOmit,
        a = e.ref,
        i = m(),
        l = r("useWAWebStaticButtonA11y")(n),
        u = l[0],
        c = l[1];
      d(a, function () {
        return {
          getElement: function () {
            return i.current;
          },
        };
      });
      var p = t.description,
        _ = t.inviteGrpType,
        f = t.matchedText,
        g = t.thumbnail,
        y = t.title;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        ref: i,
        xstyle: h.container,
        align: "center",
        children: [
          s.jsx(r("WAWebMediaLinkPreview.react"), {
            title: y,
            matchedText: f,
            description: p,
            thumbnailJpeg: g,
            inviteGrpType: _,
            containerXstyle: h.linkPreview,
            compose: !0,
            isLoading: !1,
          }),
          s.jsx(
            "div",
            babelHelpers.extends(
              {
                ref: u,
                className:
                  "x78zum5 x6s0dn4 xl56j7k x1guw455 x16wdlz0 xefazk8 x2lah0s",
              },
              c,
              { children: s.jsx(o("WAWebXIcon.react").XIcon, {}) },
            ),
          ),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = "x1pf78ng-B",
      b = "x15cgrjh-B";
    function v(e) {
      var t,
        n,
        a,
        i = e.chat,
        l = e.initialLinkPreview,
        u = e.onChange,
        d = e.text,
        m = r("useLazyRef")(function () {
          return o("useWAWebLinkPreview").findFirstWebLink(d);
        }),
        _ = r("useLazyRef")(function () {
          var e;
          return l ? null : (e = m.current) == null ? void 0 : e.href;
        }),
        f = p(m.current),
        g = f[0],
        h = f[1],
        C = o("useWAWebLinkPreview").useLinkPreview(g, i),
        b = C.linkPreview,
        v =
          ((t = m.current) == null ? void 0 : t.href) !==
          (g == null ? void 0 : g.href),
        S = p(),
        R = S[0],
        L = S[1],
        E =
          ((n = m.current) == null ? void 0 : n.href) ===
            (g == null ? void 0 : g.href) && l
            ? l
            : b;
      (_.current === ((a = E) == null ? void 0 : a.matchedText) && (E = null),
        E && E !== R && L(E));
      var k = r("useWAWebDebouncedCallback")(function (e) {
        var t = o("useWAWebLinkPreview").findFirstWebLink(e);
        (t == null ? void 0 : t.href) !== _.current &&
          ((_.current = null), h(t));
      }, 200);
      (c(
        function () {
          k(d);
        },
        [d, k],
      ),
        c(
          function () {
            u(E);
          },
          [v, E, u],
        ));
      var I = function () {
          ((_.current = g == null ? void 0 : g.href), h(null));
        },
        T = !!E,
        D = !g || g.url !== (R == null ? void 0 : R.matchedText),
        x = function () {
          L(null);
        };
      return s.jsx("div", {
        className: "x10l6tqk x1o0tod xtijo5x x13vifvy",
        children: s.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "xw8ag78 x10e4vud" },
              2: { className: "xw8ag78 x10e4vud x1rteybo" },
              1: { className: "xw8ag78 x10e4vud x1im1gyf" },
              3: { className: "xw8ag78 x10e4vud x1im1gyf" },
            }[(!!T << 1) | (!!D << 0)],
            {
              onAnimationEnd: D ? x : null,
              children:
                R &&
                s.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "ComposeBoxLinkPreview",
                  escapable: !0,
                  requestDismiss: I,
                  children: s.jsx(y, { linkPreview: R, onOmit: I }),
                }),
            },
          ),
        ),
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
