__d(
  "WAWebFloatingToolbarPlugin.react",
  [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "ReactDOM",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebActions",
    "WAWebKeyboardShortcut.react",
    "WAWebKeyboardShortcuts",
    "WAWebL10N",
    "WAWebLexicalUtils",
    "WAWebPopover.react",
    "WAWebTextFormatUtils",
    "WDSIconIcCode.react",
    "WDSIconIcFormatBold.react",
    "WDSIconIcFormatItalic.react",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcFormatListNumbered.react",
    "WDSIconIcFormatQuote.react",
    "WDSIconIcFormatStrikethrough.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "clamp",
    "react",
    "useHoverState",
    "useLexicalEditable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["isText"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = 8,
      y = 10;
    function C(e, t) {
      var n = e.getRangeAt(0),
        r;
      if (e.anchorNode === t) {
        for (var o = t; o.firstElementChild instanceof HTMLElement; )
          o = o.firstElementChild;
        r = o.getBoundingClientRect();
      } else r = n.getBoundingClientRect();
      return r;
    }
    function b(e, t, n, o) {
      var a = n.parentElement;
      if (e == null || !a) {
        ((t.style.opacity = "0"),
          (t.style.transform = "translate(-10000px, -10000px)"));
        return;
      }
      var i = t.getBoundingClientRect(),
        l = n.getBoundingClientRect(),
        s = o.getBoundingClientRect(),
        u = a.getBoundingClientRect(),
        c = e.top - i.height - y;
      c -= l.top;
      var d = s.top - i.height - y,
        m = s.bottom - i.height;
      c = r("clamp")(c, d, m);
      var p = 0;
      if (r("WAWebL10N").isRTL()) {
        var f = -(window.innerWidth - i.width - h * 2),
          g = 0;
        ((p = -(window.innerWidth - e.right - h * 2)),
          (p = r("clamp")(p, f, g)));
      } else {
        p = e.left - h;
        var _ = u.right - i.width - h;
        ((p = Math.min(_, p)), (p -= l.left));
      }
      ((t.style.opacity = "1"),
        (t.style.transform = "translate(" + p + "px, " + c + "px)"));
    }
    function v(e) {
      _(
        function () {
          if (e.current == null) return;
          function t(t) {
            var n = e.current;
            if (
              n != null &&
              (t.buttons === 1 || t.buttons === 3) &&
              n.style.pointerEvents !== "none"
            ) {
              var r = document.elementFromPoint(t.clientX, t.clientY);
              n.contains(r) || (n.style.pointerEvents = "none");
            }
          }
          function n() {
            var t = e.current;
            t != null &&
              t.style.pointerEvents !== "auto" &&
              (t.style.pointerEvents = "auto");
          }
          return (
            document.addEventListener("mousemove", t),
            document.addEventListener("mouseup", n),
            function () {
              (document.removeEventListener("mousemove", t),
                document.removeEventListener("mouseup", n));
            }
          );
        },
        [e],
      );
    }
    function S(e) {
      var n = e.anchorElem,
        a = e.blockQuoteAction,
        i = e.boldAction,
        l = e.bulletedListAction,
        u = e.codeAction,
        c = e.editor,
        m = e.inlineCodeAction,
        g = e.italicAction,
        h = e.numberedListAction,
        y = e.strikethroughAction,
        S = f(null),
        L = f(!0),
        E = c.getRootElement();
      v(S);
      function k(e) {
        var t,
          n = o("WAWebKeyboardShortcut.react").expandRawShortcut(
            r("WANullthrows")(o("WAWebKeyboardShortcuts").getShortcutKey(e)),
          ),
          a =
            (t = o("WAWebKeyboardShortcuts").getShortcutDisplayModifiers(e)) !=
            null
              ? t
              : [];
        return [].concat(a, [n]).join("+");
      }
      var I = p(
        function () {
          var e = o("Lexical").$getSelection(),
            t = S.current,
            r = window.getSelection();
          if (
            t != null &&
            e != null &&
            r != null &&
            !r.isCollapsed &&
            E != null &&
            E.contains(r.anchorNode)
          ) {
            var a = C(r, E);
            b(a, t, n, E);
          }
        },
        [n, E],
      );
      (_(
        function () {
          var e = n.parentElement,
            t = function () {
              c.update(function () {
                I();
              });
            };
          return (
            window.addEventListener("resize", t),
            e == null || e.addEventListener("scroll", t),
            E == null || E.addEventListener("scroll", t),
            function () {
              (window.removeEventListener("resize", t),
                e == null || e.removeEventListener("scroll", t),
                E == null || E.removeEventListener("scroll", t));
            }
          );
        },
        [c, I, n, E],
      ),
        _(
          function () {
            return (
              c.getEditorState().read(function () {
                I();
              }),
              c.registerCommand(
                o("Lexical").SELECTION_CHANGE_COMMAND,
                function () {
                  return (L.current && I(), !1);
                },
                o("Lexical").COMMAND_PRIORITY_LOW,
              )
            );
          },
          [c, I],
        ));
      var T = function (n) {
          c.update(function () {
            ((L.current = !1),
              o("WAWebTextFormatUtils").$toggleTextFormat(n),
              t.setTimeout(function () {
                L.current = !0;
              }, 50));
          });
        },
        D =
          m == null ||
          (m === o("WAWebTextFormatUtils").TextFormatActionType.Skip &&
            u !== o("WAWebTextFormatUtils").TextFormatActionType.Skip),
        x = o("useLexicalEditable").useLexicalEditable();
      return d.jsx("div", {
        ref: S,
        className:
          "x78zum5 x1311tq3 x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz x10l6tqk x13vifvy x1o0tod xg01cxk xvh3i5d x6nvzda x4i4b9w xhl9efl xj65ea0 x19991ni x1wsgiic x1so62im x1oy9qf3",
        children:
          x &&
          d.jsxs(d.Fragment, {
            children: [
              d.jsx(R, {
                title: s._(/*BTDS*/ "Bold ({keyboard shortcut})", [
                  s._param(
                    "keyboard shortcut",
                    k(o("WAWebActions").Action.TOGGLE_BOLD),
                  ),
                ]),
                action: i,
                icon: d.jsx(r("WDSIconIcFormatBold.react"), { width: 20 }),
                onClick: function () {
                  return T(o("WAWebTextFormatUtils").TextFormatType.Bold);
                },
              }),
              d.jsx(R, {
                title: s._(/*BTDS*/ "Italic ({keyboard shortcut})", [
                  s._param(
                    "keyboard shortcut",
                    k(o("WAWebActions").Action.TOGGLE_ITALIC),
                  ),
                ]),
                action: g,
                icon: d.jsx(r("WDSIconIcFormatItalic.react"), { width: 20 }),
                onClick: function () {
                  return T(o("WAWebTextFormatUtils").TextFormatType.Italic);
                },
              }),
              d.jsx(R, {
                title: s._(/*BTDS*/ "Strikethrough ({keyboard shortcut})", [
                  s._param(
                    "keyboard shortcut",
                    k(o("WAWebActions").Action.TOGGLE_STRIKETHROUGH),
                  ),
                ]),
                action: y,
                icon: d.jsx(r("WDSIconIcFormatStrikethrough.react"), {
                  width: 20,
                }),
                onClick: function () {
                  return T(
                    o("WAWebTextFormatUtils").TextFormatType.Strikethrough,
                  );
                },
              }),
              D &&
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Monospace ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      k(o("WAWebActions").Action.TOGGLE_CODE),
                    ),
                  ]),
                  action: u,
                  icon: d.jsx(r("WDSIconIcCode.react"), { width: 20 }),
                  onClick: function () {
                    return T(o("WAWebTextFormatUtils").TextFormatType.Code);
                  },
                }),
              m &&
                !D &&
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Inline code ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      k(o("WAWebActions").Action.TOGGLE_INLINE_CODE),
                    ),
                  ]),
                  action: m,
                  icon: d.jsx(r("WDSIconIcCode.react"), { width: 20 }),
                  onClick: function () {
                    return T(
                      o("WAWebTextFormatUtils").TextFormatType.InlineCode,
                    );
                  },
                }),
              h &&
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Numbered list ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      k(o("WAWebActions").Action.TOGGLE_NUMBERED_LIST),
                    ),
                  ]),
                  action: h,
                  icon: d.jsx(r("WDSIconIcFormatListNumbered.react"), {
                    width: 20,
                  }),
                  onClick: function () {
                    return T(
                      o("WAWebTextFormatUtils").TextFormatType.NumberedList,
                    );
                  },
                }),
              l &&
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Bulleted list ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      k(o("WAWebActions").Action.TOGGLE_BULLETED_LIST),
                    ),
                  ]),
                  action: l,
                  icon: d.jsx(r("WDSIconIcFormatListBulleted.react"), {
                    width: 20,
                  }),
                  onClick: function () {
                    return T(
                      o("WAWebTextFormatUtils").TextFormatType.BulletedList,
                    );
                  },
                }),
              a &&
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Quote ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      k(o("WAWebActions").Action.TOGGLE_QUOTE),
                    ),
                  ]),
                  action: a,
                  icon: d.jsx(r("WDSIconIcFormatQuote.react"), { width: 20 }),
                  onClick: function () {
                    return T(o("WAWebTextFormatUtils").TextFormatType.Quote);
                  },
                }),
            ],
          }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.action,
        n = e.icon,
        a = e.onClick,
        i = e.title,
        l = r("useHoverState")(),
        s = l.isHovered,
        u = l.onMouseEnter,
        c = l.onMouseLeave,
        m = t === o("WAWebTextFormatUtils").TextFormatActionType.Remove,
        p = t === o("WAWebTextFormatUtils").TextFormatActionType.Skip;
      return d.jsx(
        "button",
        babelHelpers.extends(
          { type: "button", title: i },
          {
            0: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf xhslqc4",
            },
            4: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x14ug900 x4wrhlh x1hc1fzr",
            },
            2: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x1h6gzvc x18cpw0e",
            },
            6: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x4wrhlh x1hc1fzr x1h6gzvc x18cpw0e",
            },
            1: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf xhslqc4 xluxjuk",
            },
            5: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x14ug900 x1hc1fzr xluxjuk",
            },
            3: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x1h6gzvc x18cpw0e xluxjuk",
            },
            7: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x1hc1fzr x1h6gzvc x18cpw0e xluxjuk",
            },
          }[(!!m << 2) | (!!p << 1) | (!!(s && !p) << 0)],
          { onClick: a, onMouseEnter: u, onMouseLeave: c, children: n },
        ),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var n = e.anchorElem,
        a = e.blockQuoteAction,
        i = e.boldAction,
        l = e.bulletedListAction,
        u = e.codeAction,
        c = e.editor,
        m = e.inlineCodeAction,
        g = e.italicAction,
        h = e.numberedListAction,
        y = e.strikethroughAction,
        S = f(null),
        R = f(!0),
        L = c.getRootElement();
      v(S);
      var E = p(
        function () {
          var e = o("Lexical").$getSelection(),
            t = S.current,
            r = window.getSelection();
          if (
            t != null &&
            e != null &&
            r != null &&
            !r.isCollapsed &&
            L != null &&
            L.contains(r.anchorNode)
          ) {
            var a = C(r, L);
            b(a, t, n, L);
          }
        },
        [n, L],
      );
      (_(
        function () {
          var e = n.parentElement,
            t = function () {
              c.update(function () {
                E();
              });
            };
          return (
            window.addEventListener("resize", t),
            e == null || e.addEventListener("scroll", t),
            L == null || L.addEventListener("scroll", t),
            function () {
              (window.removeEventListener("resize", t),
                e == null || e.removeEventListener("scroll", t),
                L == null || L.removeEventListener("scroll", t));
            }
          );
        },
        [c, E, n, L],
      ),
        _(
          function () {
            return (
              c.getEditorState().read(function () {
                E();
              }),
              c.registerCommand(
                o("Lexical").SELECTION_CHANGE_COMMAND,
                function () {
                  return (R.current && E(), !1);
                },
                o("Lexical").COMMAND_PRIORITY_LOW,
              )
            );
          },
          [c, E],
        ));
      var k = function (n) {
          c.update(function () {
            ((R.current = !1),
              o("WAWebTextFormatUtils").$toggleTextFormat(n),
              t.setTimeout(function () {
                R.current = !0;
              }, 50));
          });
        },
        I =
          m == null ||
          (m === o("WAWebTextFormatUtils").TextFormatActionType.Skip &&
            u !== o("WAWebTextFormatUtils").TextFormatActionType.Skip),
        T = o("useLexicalEditable").useLexicalEditable();
      return d.jsx("div", {
        ref: S,
        className:
          "x10l6tqk x13vifvy x1o0tod xg01cxk x19991ni x1wsgiic x1so62im x1oy9qf3",
        children:
          T &&
          d.jsx(r("WDSMenu.react"), {
            isHorizontalMenu: !0,
            children: d.jsxs("div", {
              className: "x78zum5 x1q0g3np x6s0dn4 x46w9ns",
              children: [
                d.jsx(r("WDSMenuBarItem.react"), {
                  icon: r("WDSIconIcFormatBold.react"),
                  disabled:
                    i === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                  buttonVariant:
                    i === o("WAWebTextFormatUtils").TextFormatActionType.Remove
                      ? "tonal"
                      : "borderless",
                  buttonSize: "small",
                  onClick: function () {
                    return k(o("WAWebTextFormatUtils").TextFormatType.Bold);
                  },
                  title: s._(/*BTDS*/ "Bold"),
                  keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_BOLD,
                }),
                d.jsx(r("WDSMenuBarItem.react"), {
                  icon: r("WDSIconIcFormatItalic.react"),
                  disabled:
                    g === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                  buttonVariant:
                    g === o("WAWebTextFormatUtils").TextFormatActionType.Remove
                      ? "tonal"
                      : "borderless",
                  buttonSize: "small",
                  onClick: function () {
                    return k(o("WAWebTextFormatUtils").TextFormatType.Italic);
                  },
                  title: s._(/*BTDS*/ "Italic"),
                  keyboardShortcutAction:
                    o("WAWebActions").Action.TOGGLE_ITALIC,
                }),
                d.jsx(r("WDSMenuBarItem.react"), {
                  icon: r("WDSIconIcFormatStrikethrough.react"),
                  disabled:
                    y === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                  buttonVariant:
                    y === o("WAWebTextFormatUtils").TextFormatActionType.Remove
                      ? "tonal"
                      : "borderless",
                  buttonSize: "small",
                  onClick: function () {
                    return k(
                      o("WAWebTextFormatUtils").TextFormatType.Strikethrough,
                    );
                  },
                  title: s._(/*BTDS*/ "Strikethrough"),
                  keyboardShortcutAction:
                    o("WAWebActions").Action.TOGGLE_STRIKETHROUGH,
                }),
                I &&
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcCode.react"),
                    disabled:
                      u === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      u ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return k(o("WAWebTextFormatUtils").TextFormatType.Code);
                    },
                    title: s._(/*BTDS*/ "Monospace"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_CODE,
                  }),
                m != null &&
                  !I &&
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcCode.react"),
                    disabled:
                      m === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      m ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return k(
                        o("WAWebTextFormatUtils").TextFormatType.InlineCode,
                      );
                    },
                    title: s._(/*BTDS*/ "Inline code"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_INLINE_CODE,
                  }),
                h != null &&
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcFormatListNumbered.react"),
                    disabled:
                      h === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      h ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return k(
                        o("WAWebTextFormatUtils").TextFormatType.NumberedList,
                      );
                    },
                    title: s._(/*BTDS*/ "Numbered list"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_NUMBERED_LIST,
                  }),
                l != null &&
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcFormatListBulleted.react"),
                    disabled:
                      l === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      l ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return k(
                        o("WAWebTextFormatUtils").TextFormatType.BulletedList,
                      );
                    },
                    title: s._(/*BTDS*/ "Bulleted list"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_BULLETED_LIST,
                  }),
                a != null &&
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcFormatQuote.react"),
                    disabled:
                      a === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      a ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return k(o("WAWebTextFormatUtils").TextFormatType.Quote);
                    },
                    title: s._(/*BTDS*/ "Quote"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_QUOTE,
                  }),
              ],
            }),
          }),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, n) {
      var r,
        a = n.blockQuoteEnabled,
        i = n.bulletPointsEnabled,
        l = n.inlineCodeEnabled,
        s = n.numberedListEnabled,
        u = g(!1),
        c = u[0],
        d = u[1],
        m = g((r = o("WAWebTextFormatUtils")).TextFormatActionType.Skip),
        f = m[0],
        h = m[1],
        y = g(r.TextFormatActionType.Skip),
        C = y[0],
        b = y[1],
        v = g(r.TextFormatActionType.Skip),
        S = v[0],
        R = v[1],
        L = g(r.TextFormatActionType.Skip),
        E = L[0],
        k = L[1],
        I = g(r.TextFormatActionType.Skip),
        T = I[0],
        D = I[1],
        x = g(r.TextFormatActionType.Skip),
        $ = x[0],
        P = x[1],
        N = g(r.TextFormatActionType.Skip),
        M = N[0],
        w = N[1],
        A = g(r.TextFormatActionType.Skip),
        F = A[0],
        O = A[1],
        B = p(
          function () {
            e &&
              e.getEditorState().read(function () {
                if (e.isComposing()) {
                  d(!1);
                  return;
                }
                var t = o("WAWebLexicalUtils").$getRangeSelection(),
                  n = window.getSelection(),
                  r = e.getRootElement();
                if (
                  n != null &&
                  (!t ||
                    t.isCollapsed() ||
                    r == null ||
                    !r.contains(n.anchorNode) ||
                    t.getTextContent() === "\n")
                ) {
                  d(!1);
                  return;
                }
                if (!o("Lexical").$isRangeSelection(t)) {
                  d(!1);
                  return;
                }
                d(!0);
                var u = o("WAWebTextFormatUtils").$normalizeTextSelection();
                [
                  [o("WAWebTextFormatUtils").TextFormatType.Bold, h],
                  [o("WAWebTextFormatUtils").TextFormatType.Italic, b],
                  [o("WAWebTextFormatUtils").TextFormatType.Strikethrough, R],
                  [o("WAWebTextFormatUtils").TextFormatType.Code, k],
                  l
                    ? [o("WAWebTextFormatUtils").TextFormatType.InlineCode, D]
                    : null,
                  s
                    ? [o("WAWebTextFormatUtils").TextFormatType.NumberedList, P]
                    : null,
                  i
                    ? [o("WAWebTextFormatUtils").TextFormatType.BulletedList, w]
                    : null,
                  a
                    ? [o("WAWebTextFormatUtils").TextFormatType.Quote, O]
                    : null,
                ]
                  .filter(Boolean)
                  .forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    n(
                      u
                        ? o("WAWebTextFormatUtils").$getTextFormatAction(u, t)
                        : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    );
                  });
              });
          },
          [a, i, e, l, s],
        );
      (_(
        function () {
          return (
            document.addEventListener("selectionchange", B),
            function () {
              document.removeEventListener("selectionchange", B);
            }
          );
        },
        [B],
      ),
        _(
          function () {
            if (e)
              return o("LexicalUtils").mergeRegister(
                e.registerRootListener(function () {
                  e.getRootElement() == null && d(!1);
                }),
                e.registerUpdateListener(function () {
                  t.setTimeout(B, 0);
                }),
              );
          },
          [e, B],
        ));
      var W = {
        isText: c,
        boldAction: c ? f : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        italicAction: c
          ? C
          : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        strikethroughAction: c
          ? S
          : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        codeAction: c ? E : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        inlineCodeAction: null,
        numberedListAction: null,
        bulletedListAction: null,
        blockQuoteAction: null,
      };
      return (
        l &&
          (W.inlineCodeAction = c
            ? T
            : o("WAWebTextFormatUtils").TextFormatActionType.Skip),
        s && (W.numberedListAction = $),
        i && (W.bulletedListAction = M),
        a && (W.blockQuoteAction = F),
        W
      );
    }
    function k(t) {
      var n = t.blockQuoteEnabled,
        r = t.bulletPointsEnabled,
        a = t.inlineCodeEnabled,
        i = t.numberedListEnabled,
        l = o("LexicalComposerContext").useLexicalComposerContext(),
        s = l[0],
        c = E(s, {
          bulletPointsEnabled: r,
          numberedListEnabled: i,
          inlineCodeEnabled: a,
          blockQuoteEnabled: n,
        }),
        m = c.isText,
        p = babelHelpers.objectWithoutPropertiesLoose(c, u),
        _ = document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID);
      if (_ == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[FloatingToolbarPlugin] anchor elem not found",
              ])),
          ),
          null
        );
      if (!m) return null;
      var f = o("WAWebABProps").getABPropConfigValue(
        "wds_web_composer_toolbar_v2",
      )
        ? L
        : S;
      return o("ReactDOM").createPortal(
        d.jsx(f, babelHelpers.extends({ editor: s, anchorElem: _ }, p)),
        _,
      );
    }
    ((k.displayName = k.name + " [from " + i.id + "]"),
      (l.useTextFormatActions = E),
      (l.FloatingToolbarPlugin = k));
  },
  226,
);
