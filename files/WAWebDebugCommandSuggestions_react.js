__d(
  "WAWebDebugCommandSuggestions.react",
  [
    "WAWebClientFeatureFlags",
    "WAWebDebugCommandCollection",
    "WAWebDebugCommandsPluginResult.react",
    "WAWebDeveloperMenuUtils",
    "WAWebListSuggestionsPanel.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebLexicalTypeAhead",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 52,
      d = "\\",
      m = 50;
    function p(e) {
      "use no forget";
      var t = e.editor,
        n = e.kind,
        a = o("useWAWebLexicalTypeAhead").useTypeAhead(t, d, {
          enabled: o("WAWebClientFeatureFlags").isFeatureEnabled(
            "debug_commands",
          ),
          maxQueryLength: m,
          boundary: !0,
        }),
        i = a.clearQuery,
        l = a.omitQuery,
        p = a.query,
        _ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        r("WAWebDebugCommandCollection"),
        "add remove",
        _,
      );
      var f = function (t, n) {
          return s.jsx(
            r("WAWebDebugCommandsPluginResult.react"),
            { debugCommand: t.debugCommand, query: t.query, selected: n },
            t.debugCommand.id,
          );
        },
        g = function (n) {
          var e = n.debugCommand;
          (i(), r("WAWebDeveloperMenuUtils").executeDebugCommand(e, t));
        },
        h = u(
          function () {
            if (p == null) return null;
            var e = r("WAWebDebugCommandCollection").query(p);
            return e.length === 0
              ? null
              : e.map(function (e, t) {
                  return {
                    height: c,
                    itemKey: e.id,
                    contentKey: p,
                    index: t,
                    debugCommand: e,
                    query: p,
                    selectable: !0,
                  };
                });
          },
          [p],
        );
      return s.jsx(r("WAWebListSuggestionsPanel.react"), {
        kind: n,
        editor: t,
        items: h,
        renderItem: f,
        onSelect: g,
        onDismiss: l,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
