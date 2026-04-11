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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            if (e.current != null) {
              var t = function (n) {
                  var t = e.current;
                  if (
                    t != null &&
                    (n.buttons === 1 || n.buttons === 3) &&
                    t.style.pointerEvents !== "none"
                  ) {
                    var r = document.elementFromPoint(n.clientX, n.clientY);
                    t.contains(r) || (t.style.pointerEvents = "none");
                  }
                },
                n = function () {
                  var t = e.current;
                  t != null &&
                    t.style.pointerEvents !== "auto" &&
                    (t.style.pointerEvents = "auto");
                };
              return (
                document.addEventListener("mousemove", t),
                document.addEventListener("mouseup", n),
                function () {
                  (document.removeEventListener("mousemove", t),
                    document.removeEventListener("mouseup", n));
                }
              );
            }
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        _(n, r));
    }
    function S(e) {
      var n = o("react-compiler-runtime").c(37),
        a = e.anchorElem,
        i = e.blockQuoteAction,
        l = e.boldAction,
        u = e.bulletedListAction,
        c = e.codeAction,
        m = e.editor,
        p = e.inlineCodeAction,
        g = e.italicAction,
        h = e.numberedListAction,
        y = e.strikethroughAction,
        S = f(null),
        L = f(!0),
        E;
      n[0] !== m
        ? ((E = m.getRootElement()), (n[0] = m), (n[1] = E))
        : (E = n[1]);
      var k = E;
      v(S);
      var I;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function (t) {
            var e,
              n = o("WAWebKeyboardShortcut.react").expandRawShortcut(
                r("WANullthrows")(
                  o("WAWebKeyboardShortcuts").getShortcutKey(t),
                ),
              ),
              a =
                (e = o("WAWebKeyboardShortcuts").getShortcutDisplayModifiers(
                  t,
                )) != null
                  ? e
                  : [];
            return [].concat(a, [n]).join("+");
          }),
          (n[2] = I))
        : (I = n[2]);
      var T = I,
        D;
      n[3] !== a || n[4] !== k
        ? ((D = function () {
            var e = o("Lexical").$getSelection(),
              t = S.current,
              n = window.getSelection();
            if (
              t != null &&
              e != null &&
              n != null &&
              !n.isCollapsed &&
              k != null &&
              k.contains(n.anchorNode)
            ) {
              var r = C(n, k);
              b(r, t, a, k);
            }
          }),
          (n[3] = a),
          (n[4] = k),
          (n[5] = D))
        : (D = n[5]);
      var x = D,
        $;
      n[6] !== x || n[7] !== a.parentElement || n[8] !== m || n[9] !== k
        ? (($ = function () {
            var e = a.parentElement,
              t = function () {
                m.update(function () {
                  x();
                });
              };
            return (
              window.addEventListener("resize", t),
              e == null || e.addEventListener("scroll", t),
              k == null || k.addEventListener("scroll", t),
              function () {
                (window.removeEventListener("resize", t),
                  e == null || e.removeEventListener("scroll", t),
                  k == null || k.removeEventListener("scroll", t));
              }
            );
          }),
          (n[6] = x),
          (n[7] = a.parentElement),
          (n[8] = m),
          (n[9] = k),
          (n[10] = $))
        : ($ = n[10]);
      var P;
      (n[11] !== x || n[12] !== a || n[13] !== m || n[14] !== k
        ? ((P = [m, x, a, k]),
          (n[11] = x),
          (n[12] = a),
          (n[13] = m),
          (n[14] = k),
          (n[15] = P))
        : (P = n[15]),
        _($, P));
      var N, M;
      (n[16] !== x || n[17] !== m
        ? ((N = function () {
            return (
              m.getEditorState().read(function () {
                x();
              }),
              m.registerCommand(
                o("Lexical").SELECTION_CHANGE_COMMAND,
                function () {
                  return (L.current && x(), !1);
                },
                o("Lexical").COMMAND_PRIORITY_LOW,
              )
            );
          }),
          (M = [m, x]),
          (n[16] = x),
          (n[17] = m),
          (n[18] = N),
          (n[19] = M))
        : ((N = n[18]), (M = n[19])),
        _(N, M));
      var w;
      n[20] !== m
        ? ((w = function (n) {
            m.update(function () {
              ((L.current = !1),
                o("WAWebTextFormatUtils").$toggleTextFormat(n),
                t.setTimeout(function () {
                  L.current = !0;
                }, 50));
            });
          }),
          (n[20] = m),
          (n[21] = w))
        : (w = n[21]);
      var A = w,
        F =
          p == null ||
          (p === o("WAWebTextFormatUtils").TextFormatActionType.Skip &&
            c !== o("WAWebTextFormatUtils").TextFormatActionType.Skip),
        O = o("useLexicalEditable").useLexicalEditable(),
        B;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = {
            className:
              "x78zum5 x1311tq3 x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz x10l6tqk x13vifvy x1o0tod xg01cxk xvh3i5d x6nvzda x4i4b9w xhl9efl xj65ea0 x19991ni x1wsgiic x1so62im x1oy9qf3",
          }),
          (n[22] = B))
        : (B = n[22]);
      var W;
      n[23] !== i ||
      n[24] !== l ||
      n[25] !== u ||
      n[26] !== c ||
      n[27] !== A ||
      n[28] !== p ||
      n[29] !== O ||
      n[30] !== g ||
      n[31] !== h ||
      n[32] !== F ||
      n[33] !== y
        ? ((W =
            O &&
            d.jsxs(d.Fragment, {
              children: [
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Bold ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      T(o("WAWebActions").Action.TOGGLE_BOLD),
                    ),
                  ]),
                  action: l,
                  icon: d.jsx(r("WDSIconIcFormatBold.react"), { width: 20 }),
                  onClick: function () {
                    return A(o("WAWebTextFormatUtils").TextFormatType.Bold);
                  },
                }),
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Italic ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      T(o("WAWebActions").Action.TOGGLE_ITALIC),
                    ),
                  ]),
                  action: g,
                  icon: d.jsx(r("WDSIconIcFormatItalic.react"), { width: 20 }),
                  onClick: function () {
                    return A(o("WAWebTextFormatUtils").TextFormatType.Italic);
                  },
                }),
                d.jsx(R, {
                  title: s._(/*BTDS*/ "Strikethrough ({keyboard shortcut})", [
                    s._param(
                      "keyboard shortcut",
                      T(o("WAWebActions").Action.TOGGLE_STRIKETHROUGH),
                    ),
                  ]),
                  action: y,
                  icon: d.jsx(r("WDSIconIcFormatStrikethrough.react"), {
                    width: 20,
                  }),
                  onClick: function () {
                    return A(
                      o("WAWebTextFormatUtils").TextFormatType.Strikethrough,
                    );
                  },
                }),
                F &&
                  d.jsx(R, {
                    title: s._(/*BTDS*/ "Monospace ({keyboard shortcut})", [
                      s._param(
                        "keyboard shortcut",
                        T(o("WAWebActions").Action.TOGGLE_CODE),
                      ),
                    ]),
                    action: c,
                    icon: d.jsx(r("WDSIconIcCode.react"), { width: 20 }),
                    onClick: function () {
                      return A(o("WAWebTextFormatUtils").TextFormatType.Code);
                    },
                  }),
                p &&
                  !F &&
                  d.jsx(R, {
                    title: s._(/*BTDS*/ "Inline code ({keyboard shortcut})", [
                      s._param(
                        "keyboard shortcut",
                        T(o("WAWebActions").Action.TOGGLE_INLINE_CODE),
                      ),
                    ]),
                    action: p,
                    icon: d.jsx(r("WDSIconIcCode.react"), { width: 20 }),
                    onClick: function () {
                      return A(
                        o("WAWebTextFormatUtils").TextFormatType.InlineCode,
                      );
                    },
                  }),
                h &&
                  d.jsx(R, {
                    title: s._(/*BTDS*/ "Numbered list ({keyboard shortcut})", [
                      s._param(
                        "keyboard shortcut",
                        T(o("WAWebActions").Action.TOGGLE_NUMBERED_LIST),
                      ),
                    ]),
                    action: h,
                    icon: d.jsx(r("WDSIconIcFormatListNumbered.react"), {
                      width: 20,
                    }),
                    onClick: function () {
                      return A(
                        o("WAWebTextFormatUtils").TextFormatType.NumberedList,
                      );
                    },
                  }),
                u &&
                  d.jsx(R, {
                    title: s._(/*BTDS*/ "Bulleted list ({keyboard shortcut})", [
                      s._param(
                        "keyboard shortcut",
                        T(o("WAWebActions").Action.TOGGLE_BULLETED_LIST),
                      ),
                    ]),
                    action: u,
                    icon: d.jsx(r("WDSIconIcFormatListBulleted.react"), {
                      width: 20,
                    }),
                    onClick: function () {
                      return A(
                        o("WAWebTextFormatUtils").TextFormatType.BulletedList,
                      );
                    },
                  }),
                i &&
                  d.jsx(R, {
                    title: s._(/*BTDS*/ "Quote ({keyboard shortcut})", [
                      s._param(
                        "keyboard shortcut",
                        T(o("WAWebActions").Action.TOGGLE_QUOTE),
                      ),
                    ]),
                    action: i,
                    icon: d.jsx(r("WDSIconIcFormatQuote.react"), { width: 20 }),
                    onClick: function () {
                      return A(o("WAWebTextFormatUtils").TextFormatType.Quote);
                    },
                  }),
              ],
            })),
          (n[23] = i),
          (n[24] = l),
          (n[25] = u),
          (n[26] = c),
          (n[27] = A),
          (n[28] = p),
          (n[29] = O),
          (n[30] = g),
          (n[31] = h),
          (n[32] = F),
          (n[33] = y),
          (n[34] = W))
        : (W = n[34]);
      var q;
      return (
        n[35] !== W
          ? ((q = d.jsx(
              "div",
              babelHelpers.extends({ ref: S }, B, { children: W }),
            )),
            (n[35] = W),
            (n[36] = q))
          : (q = n[36]),
        q
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.action,
        a = e.icon,
        i = e.onClick,
        l = e.title,
        s = r("useHoverState")(),
        u = s.isHovered,
        c = s.onMouseEnter,
        m = s.onMouseLeave,
        p = n === o("WAWebTextFormatUtils").TextFormatActionType.Remove,
        _ = n === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        f;
      t[0] !== p || t[1] !== _ || t[2] !== u
        ? ((f = {
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
          }[(!!p << 2) | (!!_ << 1) | (!!(u && !_) << 0)]),
          (t[0] = p),
          (t[1] = _),
          (t[2] = u),
          (t[3] = f))
        : (f = t[3]);
      var g;
      return (
        t[4] !== a ||
        t[5] !== i ||
        t[6] !== c ||
        t[7] !== m ||
        t[8] !== f ||
        t[9] !== l
          ? ((g = d.jsx(
              "button",
              babelHelpers.extends({ type: "button", title: l }, f, {
                onClick: i,
                onMouseEnter: c,
                onMouseLeave: m,
                children: a,
              }),
            )),
            (t[4] = a),
            (t[5] = i),
            (t[6] = c),
            (t[7] = m),
            (t[8] = f),
            (t[9] = l),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    function L(e) {
      var n = o("react-compiler-runtime").c(36),
        a = e.anchorElem,
        i = e.blockQuoteAction,
        l = e.boldAction,
        u = e.bulletedListAction,
        c = e.codeAction,
        m = e.editor,
        p = e.inlineCodeAction,
        g = e.italicAction,
        h = e.numberedListAction,
        y = e.strikethroughAction,
        S = f(null),
        R = f(!0),
        L;
      n[0] !== m
        ? ((L = m.getRootElement()), (n[0] = m), (n[1] = L))
        : (L = n[1]);
      var E = L;
      v(S);
      var k;
      n[2] !== a || n[3] !== E
        ? ((k = function () {
            var e = o("Lexical").$getSelection(),
              t = S.current,
              n = window.getSelection();
            if (
              t != null &&
              e != null &&
              n != null &&
              !n.isCollapsed &&
              E != null &&
              E.contains(n.anchorNode)
            ) {
              var r = C(n, E);
              b(r, t, a, E);
            }
          }),
          (n[2] = a),
          (n[3] = E),
          (n[4] = k))
        : (k = n[4]);
      var I = k,
        T;
      n[5] !== I || n[6] !== a.parentElement || n[7] !== m || n[8] !== E
        ? ((T = function () {
            var e = a.parentElement,
              t = function () {
                m.update(function () {
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
          }),
          (n[5] = I),
          (n[6] = a.parentElement),
          (n[7] = m),
          (n[8] = E),
          (n[9] = T))
        : (T = n[9]);
      var D;
      (n[10] !== I || n[11] !== a || n[12] !== m || n[13] !== E
        ? ((D = [m, I, a, E]),
          (n[10] = I),
          (n[11] = a),
          (n[12] = m),
          (n[13] = E),
          (n[14] = D))
        : (D = n[14]),
        _(T, D));
      var x, $;
      (n[15] !== I || n[16] !== m
        ? ((x = function () {
            return (
              m.getEditorState().read(function () {
                I();
              }),
              m.registerCommand(
                o("Lexical").SELECTION_CHANGE_COMMAND,
                function () {
                  return (R.current && I(), !1);
                },
                o("Lexical").COMMAND_PRIORITY_LOW,
              )
            );
          }),
          ($ = [m, I]),
          (n[15] = I),
          (n[16] = m),
          (n[17] = x),
          (n[18] = $))
        : ((x = n[17]), ($ = n[18])),
        _(x, $));
      var P;
      n[19] !== m
        ? ((P = function (n) {
            m.update(function () {
              ((R.current = !1),
                o("WAWebTextFormatUtils").$toggleTextFormat(n),
                t.setTimeout(function () {
                  R.current = !0;
                }, 50));
            });
          }),
          (n[19] = m),
          (n[20] = P))
        : (P = n[20]);
      var N = P,
        M =
          p == null ||
          (p === o("WAWebTextFormatUtils").TextFormatActionType.Skip &&
            c !== o("WAWebTextFormatUtils").TextFormatActionType.Skip),
        w = o("useLexicalEditable").useLexicalEditable(),
        A;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = {
            className:
              "x10l6tqk x13vifvy x1o0tod xg01cxk x19991ni x1wsgiic x1so62im x1oy9qf3",
          }),
          (n[21] = A))
        : (A = n[21]);
      var F;
      n[22] !== i ||
      n[23] !== l ||
      n[24] !== u ||
      n[25] !== c ||
      n[26] !== N ||
      n[27] !== p ||
      n[28] !== w ||
      n[29] !== g ||
      n[30] !== h ||
      n[31] !== M ||
      n[32] !== y
        ? ((F =
            w &&
            d.jsx(r("WDSMenu.react"), {
              isHorizontalMenu: !0,
              children: d.jsxs("div", {
                className: "x78zum5 x1q0g3np x6s0dn4 x46w9ns",
                children: [
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcFormatBold.react"),
                    disabled:
                      l === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      l ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return N(o("WAWebTextFormatUtils").TextFormatType.Bold);
                    },
                    title: s._(/*BTDS*/ "Bold"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_BOLD,
                  }),
                  d.jsx(r("WDSMenuBarItem.react"), {
                    icon: r("WDSIconIcFormatItalic.react"),
                    disabled:
                      g === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    buttonVariant:
                      g ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return N(o("WAWebTextFormatUtils").TextFormatType.Italic);
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
                      y ===
                      o("WAWebTextFormatUtils").TextFormatActionType.Remove
                        ? "tonal"
                        : "borderless",
                    buttonSize: "small",
                    onClick: function () {
                      return N(
                        o("WAWebTextFormatUtils").TextFormatType.Strikethrough,
                      );
                    },
                    title: s._(/*BTDS*/ "Strikethrough"),
                    keyboardShortcutAction:
                      o("WAWebActions").Action.TOGGLE_STRIKETHROUGH,
                  }),
                  M &&
                    d.jsx(r("WDSMenuBarItem.react"), {
                      icon: r("WDSIconIcCode.react"),
                      disabled:
                        c ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                      buttonVariant:
                        c ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Remove
                          ? "tonal"
                          : "borderless",
                      buttonSize: "small",
                      onClick: function () {
                        return N(o("WAWebTextFormatUtils").TextFormatType.Code);
                      },
                      title: s._(/*BTDS*/ "Monospace"),
                      keyboardShortcutAction:
                        o("WAWebActions").Action.TOGGLE_CODE,
                    }),
                  p != null &&
                    !M &&
                    d.jsx(r("WDSMenuBarItem.react"), {
                      icon: r("WDSIconIcCode.react"),
                      disabled:
                        p ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                      buttonVariant:
                        p ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Remove
                          ? "tonal"
                          : "borderless",
                      buttonSize: "small",
                      onClick: function () {
                        return N(
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
                        h ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                      buttonVariant:
                        h ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Remove
                          ? "tonal"
                          : "borderless",
                      buttonSize: "small",
                      onClick: function () {
                        return N(
                          o("WAWebTextFormatUtils").TextFormatType.NumberedList,
                        );
                      },
                      title: s._(/*BTDS*/ "Numbered list"),
                      keyboardShortcutAction:
                        o("WAWebActions").Action.TOGGLE_NUMBERED_LIST,
                    }),
                  u != null &&
                    d.jsx(r("WDSMenuBarItem.react"), {
                      icon: r("WDSIconIcFormatListBulleted.react"),
                      disabled:
                        u ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                      buttonVariant:
                        u ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Remove
                          ? "tonal"
                          : "borderless",
                      buttonSize: "small",
                      onClick: function () {
                        return N(
                          o("WAWebTextFormatUtils").TextFormatType.BulletedList,
                        );
                      },
                      title: s._(/*BTDS*/ "Bulleted list"),
                      keyboardShortcutAction:
                        o("WAWebActions").Action.TOGGLE_BULLETED_LIST,
                    }),
                  i != null &&
                    d.jsx(r("WDSMenuBarItem.react"), {
                      icon: r("WDSIconIcFormatQuote.react"),
                      disabled:
                        i ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                      buttonVariant:
                        i ===
                        o("WAWebTextFormatUtils").TextFormatActionType.Remove
                          ? "tonal"
                          : "borderless",
                      buttonSize: "small",
                      onClick: function () {
                        return N(
                          o("WAWebTextFormatUtils").TextFormatType.Quote,
                        );
                      },
                      title: s._(/*BTDS*/ "Quote"),
                      keyboardShortcutAction:
                        o("WAWebActions").Action.TOGGLE_QUOTE,
                    }),
                ],
              }),
            })),
          (n[22] = i),
          (n[23] = l),
          (n[24] = u),
          (n[25] = c),
          (n[26] = N),
          (n[27] = p),
          (n[28] = w),
          (n[29] = g),
          (n[30] = h),
          (n[31] = M),
          (n[32] = y),
          (n[33] = F))
        : (F = n[33]);
      var O;
      return (
        n[34] !== F
          ? ((O = d.jsx(
              "div",
              babelHelpers.extends({ ref: S }, A, { children: F }),
            )),
            (n[34] = F),
            (n[35] = O))
          : (O = n[35]),
        O
      );
    }
    function E(e, n) {
      var r,
        a = o("react-compiler-runtime").c(27),
        i = n.blockQuoteEnabled,
        l = n.bulletPointsEnabled,
        s = n.inlineCodeEnabled,
        u = n.numberedListEnabled,
        c = g(!1),
        d = c[0],
        m = c[1],
        p = g((r = o("WAWebTextFormatUtils")).TextFormatActionType.Skip),
        f = p[0],
        h = p[1],
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
        B;
      a[0] !== i || a[1] !== l || a[2] !== e || a[3] !== s || a[4] !== u
        ? ((B = function () {
            e &&
              e.getEditorState().read(function () {
                if (e.isComposing()) {
                  m(!1);
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
                  m(!1);
                  return;
                }
                if (!o("Lexical").$isRangeSelection(t)) {
                  m(!1);
                  return;
                }
                m(!0);
                var a = o("WAWebTextFormatUtils").$normalizeTextSelection();
                [
                  [o("WAWebTextFormatUtils").TextFormatType.Bold, h],
                  [o("WAWebTextFormatUtils").TextFormatType.Italic, b],
                  [o("WAWebTextFormatUtils").TextFormatType.Strikethrough, R],
                  [o("WAWebTextFormatUtils").TextFormatType.Code, k],
                  s
                    ? [o("WAWebTextFormatUtils").TextFormatType.InlineCode, D]
                    : null,
                  u
                    ? [o("WAWebTextFormatUtils").TextFormatType.NumberedList, P]
                    : null,
                  l
                    ? [o("WAWebTextFormatUtils").TextFormatType.BulletedList, w]
                    : null,
                  i
                    ? [o("WAWebTextFormatUtils").TextFormatType.Quote, O]
                    : null,
                ]
                  .filter(Boolean)
                  .forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    n(
                      a
                        ? o("WAWebTextFormatUtils").$getTextFormatAction(a, t)
                        : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
                    );
                  });
              });
          }),
          (a[0] = i),
          (a[1] = l),
          (a[2] = e),
          (a[3] = s),
          (a[4] = u),
          (a[5] = B))
        : (B = a[5]);
      var W = B,
        q,
        U;
      (a[6] !== W
        ? ((q = function () {
            return (
              document.addEventListener("selectionchange", W),
              function () {
                document.removeEventListener("selectionchange", W);
              }
            );
          }),
          (U = [W]),
          (a[6] = W),
          (a[7] = q),
          (a[8] = U))
        : ((q = a[7]), (U = a[8])),
        _(q, U));
      var V, H;
      (a[9] !== e || a[10] !== W
        ? ((V = function () {
            if (e)
              return o("LexicalUtils").mergeRegister(
                e.registerRootListener(function () {
                  e.getRootElement() == null && m(!1);
                }),
                e.registerUpdateListener(function () {
                  t.setTimeout(W, 0);
                }),
              );
          }),
          (H = [e, W]),
          (a[9] = e),
          (a[10] = W),
          (a[11] = V),
          (a[12] = H))
        : ((V = a[11]), (H = a[12])),
        _(V, H));
      var G = d ? f : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        z = d ? C : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        j = d ? S : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        K = d ? E : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        Q;
      return (
        a[13] !== F ||
        a[14] !== i ||
        a[15] !== l ||
        a[16] !== M ||
        a[17] !== T ||
        a[18] !== s ||
        a[19] !== d ||
        a[20] !== $ ||
        a[21] !== u ||
        a[22] !== G ||
        a[23] !== z ||
        a[24] !== j ||
        a[25] !== K
          ? ((Q = {
              isText: d,
              boldAction: G,
              italicAction: z,
              strikethroughAction: j,
              codeAction: K,
              inlineCodeAction: null,
              numberedListAction: null,
              bulletedListAction: null,
              blockQuoteAction: null,
            }),
            s &&
              (Q.inlineCodeAction = d
                ? T
                : o("WAWebTextFormatUtils").TextFormatActionType.Skip),
            u && (Q.numberedListAction = $),
            l && (Q.bulletedListAction = M),
            i && (Q.blockQuoteAction = F),
            (a[13] = F),
            (a[14] = i),
            (a[15] = l),
            (a[16] = M),
            (a[17] = T),
            (a[18] = s),
            (a[19] = d),
            (a[20] = $),
            (a[21] = u),
            (a[22] = G),
            (a[23] = z),
            (a[24] = j),
            (a[25] = K),
            (a[26] = Q))
          : (Q = a[26]),
        Q
      );
    }
    function k(t) {
      var n = o("react-compiler-runtime").c(12),
        r = t.blockQuoteEnabled,
        a = t.bulletPointsEnabled,
        i = t.inlineCodeEnabled,
        l = t.numberedListEnabled,
        s = o("LexicalComposerContext").useLexicalComposerContext(),
        c = s[0],
        m;
      n[0] !== r || n[1] !== a || n[2] !== i || n[3] !== l
        ? ((m = {
            bulletPointsEnabled: a,
            numberedListEnabled: l,
            inlineCodeEnabled: i,
            blockQuoteEnabled: r,
          }),
          (n[0] = r),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = m))
        : (m = n[4]);
      var p = E(c, m),
        _,
        f;
      n[5] !== p
        ? ((f = p.isText),
          (_ = babelHelpers.objectWithoutPropertiesLoose(p, u)),
          (n[5] = p),
          (n[6] = _),
          (n[7] = f))
        : ((_ = n[6]), (f = n[7]));
      var g;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = document.getElementById(
            o("WAWebPopover.react").ANCHOR_PORTAL_ID,
          )),
          (n[8] = g))
        : (g = n[8]);
      var h = g;
      if (h == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[FloatingToolbarPlugin] anchor elem not found",
              ])),
          ),
          null
        );
      if (!f) return null;
      var y = o("WAWebABProps").getABPropConfigValue(
          "wds_web_composer_toolbar_v2",
        )
          ? L
          : S,
        C;
      return (
        n[9] !== _ || n[10] !== c
          ? ((C = o("ReactDOM").createPortal(
              d.jsx(y, babelHelpers.extends({ editor: c, anchorElem: h }, _)),
              h,
            )),
            (n[9] = _),
            (n[10] = c),
            (n[11] = C))
          : (C = n[11]),
        C
      );
    }
    ((l.useTextFormatActions = E), (l.FloatingToolbarPlugin = k));
  },
  226,
);
