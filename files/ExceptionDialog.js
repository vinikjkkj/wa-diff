__d(
  "ExceptionDialog",
  [
    "cx",
    "fbt",
    "invariant",
    "DialogX",
    "FbtResultBase",
    "LayerDestroyOnHide",
    "LayerHideOnEscape",
    "ServerHTML.react",
    "XUIDialogBody.react",
    "XUIDialogCloseButton.react",
    "XUIDialogFooter.react",
    "XUIDialogTitle.react",
    "XUIGrayText.react",
    "getViewportDimensions",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d = e || (e = o("react")),
      m = 900,
      p = 40,
      _ = {},
      f = u._(
        /*BTDS*/ "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.",
      ),
      g = { width: "100%", height: window.innerHeight * 0.7 + "px" };
    function h(e) {
      return (e instanceof r("FbtResultBase") && (e = { __html: e }), e);
    }
    var y = {
        showAsyncError: function (t, n) {
          n === void 0 && (n = "dev");
          try {
            var e = t.getErrorSummary(),
              r = t.getErrorDescription(),
              o = t.error;
            if ((t.silentError && r === "" && (r = f), o)) {
              if (_[o]) return;
              _[o] = !0;
            }
            var a = ["always"],
              i = null;
            return (
              a.includes(n) &&
                t.payload instanceof XMLHttpRequest &&
                t.payload.responseText &&
                ((i = d.jsx("iframe", {
                  style: g,
                  srcDoc: t.payload.responseText,
                })),
                (r = null)),
              y.show(e, r, i, o)
            );
          } catch (e) {
            alert(JSON.stringify(t));
          }
        },
        showError: function (t, n) {
          n === void 0 && (n = "dev");
          try {
            var e = JSON.parse(JSON.stringify(t)),
              r = e.summary,
              o = e.description,
              a = e.code;
            if ((e.source.exception.is_silent && o === "" && (o = f), a)) {
              if (_[a]) return;
              _[a] = !0;
            }
            var i = ["always"],
              l = null;
            return (
              i.includes(n) &&
                e.source.exception.stack_trace &&
                ((l = d.jsx("iframe", {
                  style: g,
                  srcDoc: e.source.exception.stack_trace,
                })),
                (o = null)),
              y.show(r, o, l, a)
            );
          } catch (t) {
            alert(JSON.stringify(e));
          }
        },
        show: function (t, n, o, a) {
          ((n = h(n)), !n || !o || c(0, 3624));
          var e = r("getViewportDimensions").withoutScrollbars().width,
            i = e > 0 ? Math.min(e - p, m) : m,
            l = new (r("DialogX"))(
              {
                width: i,
                addedBehaviors: [
                  r("LayerDestroyOnHide"),
                  r("LayerHideOnEscape"),
                ],
              },
              d.jsxs("div", {
                "data-testid": void 0,
                className: "_9l19",
                children: [
                  d.jsx(r("XUIDialogTitle.react"), {
                    showCloseButton: !0,
                    children: t,
                  }),
                  d.jsx(r("XUIDialogBody.react"), {
                    style: { maxHeight: "80vh", overflow: "auto" },
                    children: d.jsxs(r("XUIGrayText.react"), {
                      shade: "medium",
                      size: "body1",
                      className: "_9l1a",
                      children: [
                        n != null && d.jsx(r("ServerHTML.react"), { blob: n }),
                        o,
                      ],
                    }),
                  }),
                  d.jsx(r("XUIDialogFooter.react"), {
                    children: d.jsx(r("XUIDialogCloseButton.react"), {
                      use: "confirm",
                      className: r("joinClasses")("autofocus", "_9l2h"),
                    }),
                  }),
                ],
              }),
            );
          l.subscribe(["hide"], function (e) {
            a && delete _[a];
          });
          try {
            return (l.show(), l);
          } catch (e) {
            throw (a && delete _[a], e);
          }
        },
      },
      C = y.show,
      b = y.showAsyncError,
      v = y.showError;
    ((l.show = C), (l.showAsyncError = b), (l.showError = v));
  },
  226,
);
