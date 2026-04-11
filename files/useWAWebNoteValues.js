__d(
  "useWAWebNoteValues",
  [
    "Promise",
    "WALogger",
    "WAWebNoteAction",
    "WAWebNoteCollection",
    "react",
    "useWAWebAsync",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState;
    function _(t) {
      var a = p(null),
        i = a[0],
        l = a[1],
        u = p({ error: null, loading: !0, value: null }),
        c = u[0],
        _ = u[1],
        f = r("useWAWebAsync")(
          function () {
            return t != null
              ? o("WAWebNoteAction").retrieveOnlyNoteForChatJid(t)
              : (s || (s = n("Promise"))).resolve(null);
          },
          [t],
        ),
        g = d(
          function () {
            if (t != null) {
              var e = o(
                "WAWebNoteCollection",
              ).NoteCollection.maybeGetNoteByChatJid(t);
              (l(e),
                _({
                  error: null,
                  loading: !1,
                  value:
                    e == null
                      ? null
                      : {
                          content: e.content,
                          createdAt: e.createdAt,
                          id: e.id,
                          modifiedAt: e.modifiedAt,
                        },
                }));
            }
          },
          [t],
        );
      return (
        m(
          function () {
            if (
              (f.error != null &&
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[useWAWebNoteValues] Error fetching note for chat ",
                      "",
                    ])),
                  t,
                ),
              f.loading || f.error != null)
            ) {
              _(f);
              return;
            }
            g();
          },
          [t, f.loading, f.error, f.value, g],
        ),
        o("useWAWebListener").useListener(
          o("WAWebNoteCollection").NoteCollection,
          "add remove",
          g,
        ),
        o("useWAWebListener").useListener(i, "change", g),
        c
      );
    }
    l.default = _;
  },
  98,
);
