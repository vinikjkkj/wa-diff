__d(
  "WAWebLinkFormatMutator",
  [
    "WAWebBoldFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkMutatorComponent.react",
    "WAWebStrikethroughFormatMutator",
    "WAWebSuspiciousLinkMutatorComponent.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(n, t),
          (n.jsx = function (n, o, a) {
            var t = a.dataTab,
              i = a.linkXstyle,
              l = a.onLinkClick,
              s = a.selectable,
              c = s === void 0 ? !1 : s,
              d = o.href,
              m = o.suspiciousCharacters;
            return m != null && m.size
              ? u.jsx(r("WAWebSuspiciousLinkMutatorComponent.react"), {
                  onClick: l,
                  className: (e || (e = r("stylex")))(i),
                  link: o,
                  selectable: c,
                  dataTab: t,
                  children: n,
                })
              : u.jsx(r("WAWebLinkMutatorComponent.react"), {
                  className: (e || (e = r("stylex")))(i),
                  onClick: l,
                  href: d,
                  selectable: c,
                  dataTab: t,
                  children: n,
                });
          }),
          n
        );
      })(r("WAWebFormatMutator"));
    ((c.format = !1),
      (c.compatibility = !0),
      (c.match = function (e, t, n) {
        if (!t) return [];
        var r = t.links,
          o = r === void 0 ? [] : r;
        return o.map(d);
      }),
      (c.conflictResolvers = new Map([
        [r("WAWebBoldFormatMutator"), m],
        [r("WAWebItalicFormatMutator"), m],
        [r("WAWebStrikethroughFormatMutator"), m],
        [r("WAWebInlineCodeFormatMutator"), m],
        [o("WAWebCodeFormatMutator").Code, m],
      ])));
    function d(e) {
      var t = e.index,
        n = e.url,
        r = t + n.length - 1;
      return [t, t, r, r, e];
    }
    function m(e, t) {
      for (var n = 0, r = 0; n < e.length && r < t.length; ) {
        var o = t[r][3] - e[n][3];
        if (o > 0) n++;
        else if (o < 0) r++;
        else {
          var a = t[r][3] - t[r][2];
          ((e[n][2] -= a), (e[n][3] -= a));
          var i = e[n][5];
          ((i.href = i.href.slice(0, -a)),
            (i.path = i.path && i.path.slice(0, -a)),
            (i.url = i.url.slice(0, -a)),
            r++,
            n++);
        }
      }
    }
    l.default = c;
  },
  98,
);
