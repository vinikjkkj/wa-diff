__d(
  "WAWebInternFormatMutator",
  [
    "WAWebCreateRegexMutator",
    "WAWebInternFormatRegex",
    "WAWebInternMutatorComponent.react",
    "WAWebLinkFormatMutator",
    "WAWebMentionFormatMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebCreateRegexMutator")(r("WAWebInternFormatRegex"), 2, d),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.selectable,
              a = e === void 0 ? !1 : e,
              i = p(n);
            return s.jsx(r("WAWebInternMutatorComponent.react"), {
              href: i,
              selectable: a,
              children: t,
            });
          }),
          t
        );
      })(u);
    ((c.format = !1),
      (c.compatibility = !0),
      (c.nestable = function (e) {
        return (
          e !== r("WAWebLinkFormatMutator") &&
          e !== r("WAWebMentionFormatMutator")
        );
      }));
    function d(e, t) {
      var n = e[1];
      return (n && ((e.index += n.length), (e[0] = e[0].slice(n.length))), e);
    }
    var m = "https://www.internalfb.com/intern/bunny/?q=";
    function p(e) {
      var t,
        n,
        r,
        o = e[0],
        a = e[1],
        i = e[2],
        l = e[3],
        s = e[4],
        u = e[5],
        c = e[6],
        d = e[7];
      return (
        "" +
        m +
        ((t = (n = (r = l != null ? l : s) != null ? r : u) != null ? n : c) !=
        null
          ? t
          : d)
      );
    }
    l.default = c;
  },
  98,
);
