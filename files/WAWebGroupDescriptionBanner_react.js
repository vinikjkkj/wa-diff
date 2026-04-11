__d(
  "WAWebGroupDescriptionBanner.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebConversationBanner.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebLinkify",
    "WAWebNonEmptyString",
    "WAWebResizeObserver.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = p.useState;
    function h(e, t) {
      var n = e == null ? void 0 : e.split("\n");
      return n == null ? void 0 : n.slice(0, t).join("\n");
    }
    function y(e) {
      var t,
        n = (t = e == null ? void 0 : e.split("\n")) != null ? t : [];
      return n.length;
    }
    function C(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        s = i.onClose,
        d = o("useWAWebModelValues").useOptionalModelValues(i.groupMetadata, [
          "displayedDesc",
        ]),
        p = f(null),
        C = f(null),
        v = b(d),
        S = g(function () {
          return o("WAWebNonEmptyString").asMaybeNonEmptyString(v);
        }),
        R = S[0],
        L = S[1],
        E = h(R, 1),
        k = g(!1),
        I = k[0],
        T = k[1],
        D = g(!0),
        x = D[0],
        $ = D[1],
        P = function () {
          o("WAWebCmd").Cmd.chatInfoDrawer(l, { showFullGroupDescription: !0 });
        },
        N = function (t) {
          var e,
            n,
            r = t.height,
            o =
              (e =
                (n = C.current) == null || (n = n.getElement()) == null
                  ? void 0
                  : n.offsetHeight) != null
                ? e
                : 0;
          T(y(R) > 1 || r < o);
        };
      if (
        (_(
          function () {
            var e, t, n, r;
            if (!(!p.current || !C.current)) {
              var o =
                  (e = (t = p.current) == null ? void 0 : t.clientHeight) !=
                  null
                    ? e
                    : 0,
                a =
                  (n =
                    (r = C.current) == null || (r = r.getElement()) == null
                      ? void 0
                      : r.offsetHeight) != null
                    ? n
                    : 0;
              (T(y(R) > 1 || o < a), $(!1));
            }
          },
          [R],
        ),
        R !== v &&
          (L(o("WAWebNonEmptyString").asMaybeNonEmptyString(v)), T(!1), $(!0)),
        R == null)
      )
        return null;
      var M = i.chat.isTrusted()
          ? o("WAWebFormatConfiguration").TrustedGroupDesc({
              links: o("WAWebLinkify").findLinks(R),
              bulletPointsEnabled: !0,
              expandedFormattingEnabled: !1,
            })
          : o("WAWebFormatConfiguration").UntrustedGroupDesc({
              bulletPointsEnabled: !0,
              expandedFormattingEnabled: !1,
            }),
        w = m.jsx("div", {
          className: "_ajvu",
          role: "button",
          onClick: P,
          children: u._(/*BTDS*/ "Read more"),
        });
      return m.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "GroupDesc",
        escapable: !0,
        requestDismiss: s,
        children: m.jsxs(r("WAWebConversationBanner.react"), {
          ref: a,
          onClose: s,
          children: [
            m.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: u._(/*BTDS*/ "Group description"),
            }),
            m.jsx(r("WAWebResizeObserver.react"), {
              ref: p,
              onResize: N,
              className: "_ajvq",
              children: m.jsx(o("WAWebText.react").WAWebTextSmall, {
                as: "span",
                children: m.jsxs("span", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    ((n = {}), (n._ajvs = x), (n._ajvr = !0), n),
                  ),
                  children: [
                    m.jsx(o("WAWebEmojiText.react").EmojiText, {
                      ref: C,
                      text: E,
                      selectable: !0,
                      formatters: M,
                      className: "_ajvt",
                      multiline: !0,
                    }),
                    I &&
                      m.jsxs(m.Fragment, {
                        children: [
                          m.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (c || (c = r("stylex"))).props(
                                o("WAWebUISpacing").uiMargin.top1,
                              ),
                              { children: "..." },
                            ),
                          ),
                          w,
                        ],
                      }),
                  ],
                }),
              }),
            }),
          ],
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return e == null ? void 0 : e.displayedDesc;
    }
    l.default = C;
  },
  226,
);
