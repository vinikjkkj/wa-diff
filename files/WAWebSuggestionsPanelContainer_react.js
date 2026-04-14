__d(
  "WAWebSuggestionsPanelContainer.react",
  [
    "$InternalEnum",
    "WAWebDropdown.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "useWAWebLexicalFocusState",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef,
      m = u.useState,
      p = {
        container: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          $$css: !0,
        },
      },
      _ = n("$InternalEnum").Mirrored([
        "ComposeBox",
        "MediaEditorCaption",
        "MessageEditModal",
        "Menu",
      ]);
    function f(e) {
      var t = e.children,
        n = e.editor,
        a = e.kind,
        i = e.onDismiss,
        l = e.onHide,
        u = e.onToggleVisibility,
        c = m(!0),
        d = c[0],
        f = c[1],
        h = r("useWAWebStableCallback")(function (e) {
          if (e) {
            if ((u == null ? void 0 : u(!0)) === !1) return;
            self.setTimeout(function () {
              return f(!0);
            });
          } else {
            if ((u == null ? void 0 : u(!1)) === !1) return;
            (f(!1), l == null || l());
          }
        });
      o("useWAWebLexicalFocusState").useLexicalFocusStateListener(n, h);
      var y = r("useWAWebStableCallback")(function () {
          n.focus();
        }),
        C = function () {
          (i(), l == null || l());
        };
      return a === _.Menu
        ? s.jsx(g, { requestDismiss: i, requestFocus: y, children: t })
        : s.jsx(r("WAWebVelocityTransitionGroup"), {
            component: "div",
            xstyle: p.container,
            transitionName: "slide-up",
            children:
              d && t != null
                ? s.jsx(o("WAWebUimUie.react").UIE, {
                    displayName: "RichTextInputSuggestions",
                    escapable: !0,
                    requestDismiss: C,
                    requestFocus: y,
                    requestRecentFocusOnUnmount: !1,
                    children: s.jsxs(
                      "div",
                      babelHelpers.extends(
                        {},
                        {
                          0: {
                            className:
                              "x10l6tqk x1ey2m1c x1o0tod x9f619 xh8yej3 xhjsbib x188jz7k x4py3vj",
                          },
                          1: {
                            className:
                              "x10l6tqk x1ey2m1c x1o0tod x9f619 xh8yej3 xhjsbib x188jz7k x67bb7w xrlxcrs x7g1fbw x1sr759z",
                          },
                        }[(a === _.MediaEditorCaption) << 0],
                        {
                          children: [
                            t,
                            s.jsx("div", {
                              className:
                                "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xhtitgo x47corl x14obwa1 xcj5v2p",
                            }),
                          ],
                        },
                      ),
                    ),
                  })
                : null,
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n = e.children,
        a = e.requestDismiss,
        i = e.requestFocus,
        l = d(),
        u = m(null),
        c = u[0],
        p = u[1],
        _ =
          c == null || n == null
            ? null
            : s.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "RichTextInputSuggestions",
                escapable: !0,
                requestDismiss: a,
                requestFocus: i,
                children: s.jsx(r("WAWebUimUieMenu.react"), {
                  contextMenu: {
                    menu: s.jsx(h, { ref: l, initialChildren: n }),
                    type: o("WAWebDropdown.react").MenuType.Suggestions,
                    anchor: c,
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                  },
                }),
              });
      return (
        (t = l.current) == null || t.setChildren(n),
        s.jsx("div", {
          className: "x10l6tqk x13vifvy xh8yej3",
          ref: p,
          children: _,
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.initialChildren,
        n = e.ref,
        r = m(t),
        o = r[0],
        a = r[1];
      return (
        c(n, function () {
          return {
            setChildren: function (t) {
              t !== o && a(t);
            },
          };
        }),
        s.jsx(s.Fragment, { children: o })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.SuggestionsPanelKind = _),
      (l.SuggestionsPanelContainer = f));
  },
  98,
);
