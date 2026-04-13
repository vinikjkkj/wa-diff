__d(
  "WAWebBotCommandSuggestions.react",
  [
    "Lexical",
    "WAWebBotCommandSuggestionResult.react",
    "WAWebBotProfileGetters",
    "WAWebLexicalUtils",
    "WAWebListSuggestionsPanel.react",
    "react",
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(28),
        a = e.editor,
        i = e.kind,
        l = e.metaBotId,
        u;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["id", "commands"]), (n[0] = u))
        : (u = n[0]);
      var d = o("useWAWebModelValues").useOptionalModelValues(
          e.businessProfile,
          u,
        ),
        g;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebBotProfileGetters").getCommands]), (n[1] = g))
        : (g = n[1]);
      var y = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          l,
          g,
        ),
        C = y[0],
        b = (t = d == null ? void 0 : d.commands) != null ? t : C,
        v = l != null ? l : d == null ? void 0 : d.id,
        S;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { boundary: !0, maxQueryLength: f }), (n[2] = S))
        : (S = n[2]);
      var R = o("useWAWebLexicalTypeAhead").useTypeAhead(a, p, S),
        L = R.omitQuery,
        E = R.query,
        k = R.replaceQuery,
        I;
      n[3] !== a
        ? ((I = function () {
            return h(a);
          }),
          (n[3] = a),
          (n[4] = I))
        : (I = n[4]);
      var T = m(I),
        D = T[0],
        x = T[1],
        $,
        P;
      (n[5] !== a
        ? (($ = function () {
            return a.registerUpdateListener(function () {
              x(h(a));
            });
          }),
          (P = [a]),
          (n[5] = a),
          (n[6] = $),
          (n[7] = P))
        : (($ = n[6]), (P = n[7])),
        c($, P));
      var N;
      n[8] !== v
        ? ((N = function (t, n) {
            return s.jsx(
              r("WAWebBotCommandSuggestionResult.react"),
              { command: t.command, query: t.query, selected: n, imageWid: v },
              t.itemKey,
            );
          }),
          (n[8] = v),
          (n[9] = N))
        : (N = n[9]);
      var M = N,
        w;
      n[10] !== k
        ? ((w = function (t) {
            var e = t.command;
            k("" + p + e.name + " ");
          }),
          (n[10] = k),
          (n[11] = w))
        : (w = n[11]);
      var A = w,
        F;
      n[12] !== L
        ? ((F = function () {
            L();
          }),
          (n[12] = L),
          (n[13] = F))
        : (F = n[13]);
      var O = F,
        B;
      e: {
        if (E == null || !b || D) {
          B = null;
          break e;
        }
        var W;
        if (n[14] !== b || n[15] !== E) {
          var q;
          n[17] !== E
            ? ((q = function (t) {
                return t.name.toLowerCase().startsWith(E.toLowerCase());
              }),
              (n[17] = E),
              (n[18] = q))
            : (q = n[18]);
          var U;
          (n[19] !== E
            ? ((U = function (t, n) {
                return {
                  height: _,
                  itemKey: t.name,
                  contentKey: E,
                  index: n,
                  command: t,
                  query: E,
                  selectable: !0,
                };
              }),
              (n[19] = E),
              (n[20] = U))
            : (U = n[20]),
            (W = b.filter(q).map(U)),
            (n[14] = b),
            (n[15] = E),
            (n[16] = W));
        } else W = n[16];
        B = W;
      }
      var V = B,
        H;
      return (
        n[21] !== a ||
        n[22] !== O ||
        n[23] !== M ||
        n[24] !== A ||
        n[25] !== i ||
        n[26] !== V
          ? ((H = s.jsx(r("WAWebListSuggestionsPanel.react"), {
              kind: i,
              editor: a,
              items: V,
              renderItem: M,
              onSelect: A,
              onDismiss: O,
            })),
            (n[21] = a),
            (n[22] = O),
            (n[23] = M),
            (n[24] = A),
            (n[25] = i),
            (n[26] = V),
            (n[27] = H))
          : (H = n[27]),
        H
      );
    }
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
