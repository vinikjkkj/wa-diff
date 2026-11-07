__d(
  "WAWebLinkFormatMutator",
  [
    "WAWebBoldFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkMutatorComponent.react",
    "WAWebLinkify",
    "WAWebSpoilerFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "WAWebSuspiciousLinkChecksState",
    "WAWebSuspiciousLinkMutatorComponent.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCollectionValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, r) {
            return n.suspiciousHostChecksPending === !0
              ? u.jsx(p, { link: n, opts: r, children: t })
              : _(t, n, r);
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    ((d.format = !1),
      (d.compatibility = !0),
      (d.useWAWebReclassifiedLink = m),
      (d.match = function (e, t, n) {
        if (!t) return [];
        var r = t.links,
          o = r === void 0 ? [] : r;
        return o.map(f);
      }),
      (d.conflictResolvers = new Map([
        [r("WAWebBoldFormatMutator"), g],
        [r("WAWebItalicFormatMutator"), g],
        [r("WAWebStrikethroughFormatMutator"), g],
        [r("WAWebInlineCodeFormatMutator"), g],
        [o("WAWebCodeFormatMutator").Code, g],
        [r("WAWebSpoilerFormatMutator"), g],
      ])));
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebSuspiciousLinkChecksState")
              .getSuspiciousLinkChecksInitialized,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebCollectionValues").useModelGetterValues(
          o("WAWebSuspiciousLinkChecksState").SuspiciousLinkChecksState,
          n,
        ),
        a = r[0],
        i;
      return (
        t[1] !== a || t[2] !== e
          ? ((i = a ? o("WAWebLinkify").reclassifySuspiciousLink(e) : e),
            (t[1] = a),
            (t[2] = e),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        r = e.link,
        a = e.opts,
        i = m(r),
        l;
      return (
        t[0] !== n || t[1] !== i || t[2] !== a
          ? ((l = _(n, i, a)), (t[0] = n), (t[1] = i), (t[2] = a), (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function _(t, n, o) {
      var a,
        i = o.dataTab,
        l = o.linkXstyle,
        s = o.onLinkClick,
        c = o.selectable,
        d = c === void 0 ? !1 : c;
      return (a = n.suspiciousCharacters) != null && a.size
        ? u.jsx(r("WAWebSuspiciousLinkMutatorComponent.react"), {
            onClick: s,
            className: (e || (e = r("stylex")))(l),
            link: n,
            selectable: d,
            dataTab: i,
            children: t,
          })
        : u.jsx(r("WAWebLinkMutatorComponent.react"), {
            xstyle: l,
            onClick: s,
            href: n.href,
            selectable: d,
            dataTab: i,
            children: t,
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.index,
        n = e.url,
        r = t + n.length - 1;
      return [t, t, r, r, e];
    }
    function g(e, t) {
      for (var n = 0, r = 0; n < e.length && r < t.length; ) {
        var o = t[r][3] - e[n][3];
        if (o > 0) n++;
        else if (o < 0) r++;
        else {
          var a = t[r][3] - t[r][2];
          ((e[n][2] -= a), (e[n][3] -= a));
          var i = e[n][5];
          ((i.href = i.href.slice(0, -a)),
            (i.path = i.path == null ? i.path : i.path.slice(0, -a)),
            (i.url = i.url.slice(0, -a)),
            r++,
            n++);
        }
      }
    }
    l.default = d;
  },
  98,
);
