__d(
  "WAWebBotCommandSuggestions.react",
  [
    "Lexical",
    "WAWebBotCommandSuggestionResult.react",
    "WAWebBotProfileGetters",
    "WAWebLexicalUtils",
    "WAWebListSuggestionsPanel.react",
    "react",
    "useWAWebLexicalTypeAhead",
    "useWAWebModelValues",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useState,
      p = "/",
      _ = 52,
      f = 25;
    function g(e) {
      var t,
        n = e.editor,
        a = e.kind,
        i = e.metaBotId,
        l = o("useWAWebModelValues").useOptionalModelValues(e.businessProfile, [
          "id",
          "commands",
        ]),
        u = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          i,
          [o("WAWebBotProfileGetters").getCommands],
        ),
        g = u[0],
        y = (t = l == null ? void 0 : l.commands) != null ? t : g,
        C = i != null ? i : l == null ? void 0 : l.id,
        b = o("useWAWebLexicalTypeAhead").useTypeAhead(n, p, {
          boundary: !0,
          maxQueryLength: f,
        }),
        v = b.omitQuery,
        S = b.query,
        R = b.replaceQuery,
        L = m(function () {
          return h(n);
        }),
        E = L[0],
        k = L[1];
      c(
        function () {
          return n.registerUpdateListener(function () {
            k(h(n));
          });
        },
        [n],
      );
      var I = function (t, n) {
          return s.jsx(
            r("WAWebBotCommandSuggestionResult.react"),
            { command: t.command, query: t.query, selected: n, imageWid: C },
            t.itemKey,
          );
        },
        T = function (t) {
          var e = t.command;
          R("" + p + e.name + " ");
        },
        D = function () {
          v();
        },
        x = d(
          function () {
            return S == null || !y || E
              ? null
              : y
                  .filter(function (e) {
                    return e.name.toLowerCase().startsWith(S.toLowerCase());
                  })
                  .map(function (e, t) {
                    return {
                      height: _,
                      itemKey: e.name,
                      contentKey: S,
                      index: t,
                      command: e,
                      query: S,
                      selectable: !0,
                    };
                  });
          },
          [S, y, E],
        );
      return s.jsx(r("WAWebListSuggestionsPanel.react"), {
        kind: a,
        editor: n,
        items: x,
        renderItem: I,
        onSelect: T,
        onDismiss: D,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return e.getEditorState().read(function () {
        for (var e of o("WAWebLexicalUtils").textNodesIterator(
          o("Lexical").$getRoot(),
        )) {
          var t;
          if ((t = e.getStyle()) != null && t.includes("bot-command-text"))
            return !0;
        }
        return !1;
      });
    }
    ((l.QUERY_TRIGGER = p), (l.BotCommandSuggestions = g));
  },
  98,
);
