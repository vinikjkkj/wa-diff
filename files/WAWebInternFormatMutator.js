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
        r = e[0],
        o = e[1],
        a = e[2],
        i = e[3],
        l = e[4],
        s = e[5],
        u = e[6];
      return (
        "" + m + ((t = (n = i != null ? i : l) != null ? n : s) != null ? t : u)
      );
    }
    l.default = c;
  },
  98,
);
