__d(
  "WAWebHatchCommandPickerPlugin.react",
  [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "WAWebHatchCommandCache",
    "WAWebLexicalTypeAheadList.react",
    "WAWebNoop",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = "/",
      m = 22,
      p = 40,
      _ = 400,
      f = {
        commandName: { flexShrink: "x2lah0s", $$css: !0 },
        headerText: { paddingInlineStart: "x12w63v0", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chatId,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { enabled: !0, maxQueryLength: 50 }), (t[0] = l))
        : (l = t[0]);
      var s = o("useWAWebLexicalTypeAhead").useTypeAhead(i, d, l),
        c = s.leadOffset,
        f = s.omitQuery,
        g = s.query,
        y = s.replaceQuery,
        b;
      e: {
        if (g == null) {
          b = null;
          break e;
        }
        if (c === 0) {
          b = g;
          break e;
        }
        var v;
        if (t[1] !== i || t[2] !== c || t[3] !== g) {
          var S = "";
          (i.getEditorState().read(function () {
            var e = o("Lexical").$getRoot();
            S = e.getTextContent().slice(0, c);
          }),
            (v = S.trim() === "" ? g : null),
            (t[1] = i),
            (t[2] = c),
            (t[3] = g),
            (t[4] = v));
        } else v = t[4];
        b = v;
      }
      var R = b,
        L;
      if (t[5] !== R || t[6] !== n) {
        e: {
          if (R == null) {
            L = null;
            break e;
          }
          var E = o("WAWebHatchCommandCache").getHatchCommands(n.toJid());
          if (E == null) {
            L = null;
            break e;
          }
          if (R === "") {
            L = E;
            break e;
          }
          var k = R.toLowerCase();
          L = E.filter(function (e) {
            var t = e.name.startsWith("/") ? e.name.slice(1) : e.name;
            return t.toLowerCase().startsWith(k);
          });
        }
        ((t[5] = R), (t[6] = n), (t[7] = L));
      } else L = t[7];
      var I = L,
        T;
      e: {
        if (I == null || I.length === 0) {
          var D;
          (t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = []), (t[8] = D))
            : (D = t[8]),
            (T = D));
          break e;
        }
        var x;
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = {
              renderFn: h,
              onSelect: r("WAWebNoop"),
              width: _,
              height: m,
              skipKeyboardNav: !0,
            }),
            (t[9] = x))
          : (x = t[9]);
        var $ = x,
          P;
        if (t[10] !== I || t[11] !== y) {
          var N;
          t[13] !== y
            ? ((N = function (t) {
                return {
                  renderFn: function (n) {
                    return u.jsx(C, { command: t, selected: n });
                  },
                  onSelect: function () {
                    y(function () {
                      return new (o("Lexical").TextNode)(t.name + " ");
                    }, {});
                  },
                  width: _,
                  height: p,
                  skipKeyboardNav: !1,
                };
              }),
              (t[13] = y),
              (t[14] = N))
            : (N = t[14]);
          var M = I.map(N);
          ((P = [$].concat(M)), (t[10] = I), (t[11] = y), (t[12] = P));
        } else P = t[12];
        T = P;
      }
      var w = T,
        A;
      return (
        t[15] !== w || t[16] !== c || t[17] !== f
          ? ((A = u.jsx(r("WAWebLexicalTypeAheadList.react"), {
              leadOffset: c,
              items: w,
              onCancel: f,
              startingIndex: 1,
            })),
            (t[15] = w),
            (t[16] = c),
            (t[17] = f),
            (t[18] = A))
          : (A = t[18]),
        A
      );
    }
    function h() {
      return u.jsx(y, {});
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "x78zum5 x1q0g3np x1cy8zhl x17rw0jw" }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "contentDeemphasized",
                  xstyle: f.headerText,
                  children: s._(/*BTDS*/ "Commands"),
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.command,
        a = e.selected,
        i;
      t[0] !== a
        ? ((i = {
            0: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1iw51ew x1vqgdyp x1ypdohk",
            },
            1: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1iw51ew x1vqgdyp x1ypdohk x4wrhlh",
            },
          }[!!a << 0]),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = n.name.startsWith("/") ? n.name : "/" + n.name,
        s;
      t[2] !== l
        ? ((s = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            xstyle: f.commandName,
            children: l,
          })),
          (t[2] = l),
          (t[3] = s))
        : (s = t[3]);
      var c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft xeuugli" }),
          (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] !== n.description
        ? ((d = u.jsx(
            "div",
            babelHelpers.extends({}, c, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: n.description,
              }),
            }),
          )),
          (t[5] = n.description),
          (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== i || t[8] !== s || t[9] !== d
          ? ((m = u.jsxs(
              "div",
              babelHelpers.extends({}, i, { children: [s, d] }),
            )),
            (t[7] = i),
            (t[8] = s),
            (t[9] = d),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    l.default = g;
  },
  226,
);
