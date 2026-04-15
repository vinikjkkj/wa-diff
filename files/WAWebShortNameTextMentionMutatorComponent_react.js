__d(
  "WAWebShortNameTextMentionMutatorComponent.react",
  [
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebMiscGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.contact,
        a = e.lastMessage,
        i = e.onClick,
        l = e.selectable,
        u = e.theme,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getDisplayName,
            o("WAWebContactGetters").getShortName,
            o("WAWebFrontendContactGetters").getIsMyContact,
          ]),
          (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebContactValues").useContactValues(e.contact.id, c),
        m = d[0],
        p = d[1],
        _ = d[2],
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["uniqueShortNameMap"]), (t[1] = f))
        : (f = t[1]);
      var g = o("useWAWebModelValues").useModelValues(e.groupMetadata, f),
        h;
      if (t[2] !== n || t[3] !== p || t[4] !== g || t[5] !== _) {
        var y = function () {
          return o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
            g &&
            g.hasUniqueShortNameMention(n)
            ? _
            : p;
        };
        ((h = y()), (t[2] = n), (t[3] = p), (t[4] = g), (t[5] = _), (t[6] = h));
      } else h = t[6];
      var C = h,
        b;
      t[7] !== m ? ((b = m.toString()), (t[7] = m), (t[8] = b)) : (b = t[8]);
      var v;
      return (
        t[9] !== C ||
        t[10] !== a ||
        t[11] !== i ||
        t[12] !== l ||
        t[13] !== b ||
        t[14] !== u
          ? ((v = s.jsx(r("WAWebMentionMutatorComponentBase.react"), {
              text: C,
              jid: b,
              theme: u,
              selectable: l,
              onClick: i,
              lastMessage: a,
            })),
            (t[9] = C),
            (t[10] = a),
            (t[11] = i),
            (t[12] = l),
            (t[13] = b),
            (t[14] = u),
            (t[15] = v))
          : (v = t[15]),
        v
      );
    }
    l.default = u;
  },
  98,
);
