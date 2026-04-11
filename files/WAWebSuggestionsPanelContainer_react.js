__d(
  "WAWebSuggestionsPanelContainer.react",
  [
    "$InternalEnum",
    "WAWebDropdown.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.children,
        a = e.editor,
        i = e.kind,
        l = e.onDismiss,
        u = e.onHide,
        c = e.onToggleVisibility,
        d = m(!0),
        f = d[0],
        h = d[1],
        y;
      t[0] !== u || t[1] !== c
        ? ((y = function (t) {
            if (t) {
              if ((c == null ? void 0 : c(!0)) === !1) return;
              self.setTimeout(function () {
                return h(!0);
              });
            } else {
              if ((c == null ? void 0 : c(!1)) === !1) return;
              (h(!1), u == null || u());
            }
          }),
          (t[0] = u),
          (t[1] = c),
          (t[2] = y))
        : (y = t[2]);
      var C = r("useWAWebStableCallback")(y);
      o("useWAWebLexicalFocusState").useLexicalFocusStateListener(a, C);
      var b;
      t[3] !== a
        ? ((b = function () {
            a.focus();
          }),
          (t[3] = a),
          (t[4] = b))
        : (b = t[4]);
      var v = r("useWAWebStableCallback")(b),
        S;
      t[5] !== l || t[6] !== u
        ? ((S = function () {
            (l(), u == null || u());
          }),
          (t[5] = l),
          (t[6] = u),
          (t[7] = S))
        : (S = t[7]);
      var R = S;
      if (i === _.Menu) {
        var L;
        return (
          t[8] !== n || t[9] !== v || t[10] !== l
            ? ((L = s.jsx(g, {
                requestDismiss: l,
                requestFocus: v,
                children: n,
              })),
              (t[8] = n),
              (t[9] = v),
              (t[10] = l),
              (t[11] = L))
            : (L = t[11]),
          L
        );
      }
      var E;
      t[12] !== n || t[13] !== R || t[14] !== v || t[15] !== i || t[16] !== f
        ? ((E =
            f && n != null
              ? s.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "RichTextInputSuggestions",
                  escapable: !0,
                  requestDismiss: R,
                  requestFocus: v,
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
                      }[(i === _.MediaEditorCaption) << 0],
                      {
                        children: [
                          n,
                          s.jsx("div", {
                            className:
                              "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xhtitgo x47corl x14obwa1 xcj5v2p",
                          }),
                        ],
                      },
                    ),
                  ),
                })
              : null),
          (t[12] = n),
          (t[13] = R),
          (t[14] = v),
          (t[15] = i),
          (t[16] = f),
          (t[17] = E))
        : (E = t[17]);
      var k;
      return (
        t[18] !== E
          ? ((k = s.jsx(r("WAWebVelocityTransitionGroup"), {
              component: "div",
              xstyle: p.container,
              transitionName: "slide-up",
              children: E,
            })),
            (t[18] = E),
            (t[19] = k))
          : (k = t[19]),
        k
      );
    }
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
      var t = o("react-compiler-runtime").c(4),
        n = e.initialChildren,
        r = e.ref,
        a = m(n),
        i = a[0],
        l = a[1],
        u;
      (t[0] !== i
        ? ((u = function () {
            return {
              setChildren: function (t) {
                t !== i && l(t);
              },
            };
          }),
          (t[0] = i),
          (t[1] = u))
        : (u = t[1]),
        c(r, u));
      var d;
      return (
        t[2] !== i
          ? ((d = s.jsx(s.Fragment, { children: i })), (t[2] = i), (t[3] = d))
          : (d = t[3]),
        d
      );
    }
    ((l.SuggestionsPanelKind = _), (l.SuggestionsPanelContainer = f));
  },
  98,
);
