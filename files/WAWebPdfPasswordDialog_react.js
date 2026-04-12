__d(
  "WAWebPdfPasswordDialog.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebKeyboardTabUtils",
    "WAWebPdfViewerEventEmitter",
    "WAWebPdfViewerTestIds",
    "WAWebStopEvent",
    "WAWebUsePasswordDialog",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        subtitle: { marginTop: "x1xmf6yo", $$css: !0 },
        error: { marginTop: "x1gslohp", $$css: !0 },
      };
    function f(e, t) {
      d(
        function () {
          if (t) {
            var n = function () {
                var t = e.current;
                if (t != null) {
                  var n,
                    r = o("WAWebKeyboardTabUtils").getTabbableElements(
                      t,
                      o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    );
                  (n = r[0]) == null || n.focus();
                }
              },
              r = function () {
                var t = e.current;
                if (t != null) {
                  var n,
                    r = o("WAWebKeyboardTabUtils").getTabbableElements(
                      t,
                      o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    );
                  (n = r[r.length - 1]) == null || n.focus();
                }
              };
            return (
              o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
                "focus:firstInViewer",
                n,
              ),
              o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
                "focus:lastInViewer",
                r,
              ),
              function () {
                (o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                  "focus:firstInViewer",
                  n,
                ),
                  o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                    "focus:lastInViewer",
                    r,
                  ));
              }
            );
          }
        },
        [e, t],
      );
    }
    function g(e) {
      var t = e.onHide,
        n = e.onShow,
        a = e.viewer,
        i = p(""),
        l = i[0],
        c = i[1],
        d = m(null),
        g = o("WAWebUsePasswordDialog").usePasswordDialog(a, n, t),
        h = g.state,
        y = g.submitPassword;
      f(d, h.isVisible);
      var C = function (t) {
          c(t.target.value);
        },
        b = l.trim() !== "" && !h.isSubmitting,
        v = function () {
          b && y(l);
        },
        S = function (t) {
          t.key === "Enter" && b && y(l);
        };
      return h.isVisible
        ? u.jsx("div", {
            ref: d,
            className:
              "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x78zum5 x6s0dn4 xl56j7k x1h3rtpe",
            onClick: o("WAWebStopEvent").stopPropagation,
            "data-testid": void 0,
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Headline2",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "This file is password protected"),
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: _.subtitle,
                  children: s._(/*BTDS*/ "Enter the password to open it"),
                }),
                u.jsx("input", {
                  className:
                    "xqui205 xwklpps xnnr8r x13m54ha x1l2rt3b x5kalc8 xuqqiot x1lkg3h2 x17mbzc4 xcouhex x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xojvex2 xaatb59 x1qgsegg x9f619 xyc5z6t x103yw6p x1280gxy xf7dkkf xv54qhq x1f6kntn x1fc57z9 x14ug900 x18aymmy",
                  type: "password",
                  "data-testid": void 0,
                  placeholder: s._(/*BTDS*/ "Type password"),
                  value: l,
                  onChange: C,
                  onKeyDown: S,
                }),
                h.error != null &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "secondaryNegative",
                    testid: void 0,
                    xstyle: _.error,
                    children: s._(/*BTDS*/ "Incorrect password. Try again."),
                  }),
                u.jsx("div", {
                  className: "xqui205",
                  children: u.jsx(r("WDSButton.react"), {
                    label: s._(/*BTDS*/ "Open"),
                    onPress: v,
                    size: "medium",
                    variant: "filled",
                    testid: void 0,
                    disabled: !b,
                  }),
                }),
              ],
            }),
          })
        : null;
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
