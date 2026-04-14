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
      var t = e.chatId,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        a = n[0],
        i = o("useWAWebLexicalTypeAhead").useTypeAhead(a, d, {
          enabled: !0,
          maxQueryLength: 50,
        }),
        l = i.leadOffset,
        s = i.omitQuery,
        f = i.query,
        g = i.replaceQuery,
        C = c(
          function () {
            if (f == null) return null;
            if (l === 0) return f;
            var e = "";
            return (
              a.getEditorState().read(function () {
                var t = o("Lexical").$getRoot();
                e = t.getTextContent().slice(0, l);
              }),
              e.trim() === "" ? f : null
            );
          },
          [f, l, a],
        ),
        b = c(
          function () {
            if (C == null) return null;
            var e = o("WAWebHatchCommandCache").getHatchCommands(t.toJid());
            if (e == null) return null;
            if (C === "") return e;
            var n = C.toLowerCase();
            return e.filter(function (e) {
              var t = e.name.startsWith("/") ? e.name.slice(1) : e.name;
              return t.toLowerCase().startsWith(n);
            });
          },
          [C, t],
        ),
        v = c(
          function () {
            if (b == null || b.length === 0) return [];
            var e = {
                renderFn: function () {
                  return u.jsx(h, {});
                },
                onSelect: r("WAWebNoop"),
                width: _,
                height: m,
                skipKeyboardNav: !0,
              },
              t = b.map(function (e) {
                return {
                  renderFn: function (n) {
                    return u.jsx(y, { command: e, selected: n });
                  },
                  onSelect: function () {
                    g(function () {
                      return new (o("Lexical").TextNode)(e.name + " ");
                    }, {});
                  },
                  width: _,
                  height: p,
                  skipKeyboardNav: !1,
                };
              });
            return [e].concat(t);
          },
          [b, g],
        );
      return u.jsx(r("WAWebLexicalTypeAheadList.react"), {
        leadOffset: l,
        items: v,
        onCancel: s,
        startingIndex: 1,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return u.jsx("div", {
        className: "x78zum5 x1q0g3np x1cy8zhl x17rw0jw",
        children: u.jsx(r("WDSText.react"), {
          type: "Body2Emphasized",
          colorName: "contentDeemphasized",
          xstyle: f.headerText,
          children: s._(/*BTDS*/ "Commands"),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.command,
        n = e.selected;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1iw51ew x1vqgdyp x1ypdohk",
            },
            1: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1iw51ew x1vqgdyp x1ypdohk x4wrhlh",
            },
          }[!!n << 0],
          {
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                xstyle: f.commandName,
                children: t.name.startsWith("/") ? t.name : "/" + t.name,
              }),
              u.jsx("div", {
                className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft xeuugli",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: t.description,
                }),
              }),
            ],
          },
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
