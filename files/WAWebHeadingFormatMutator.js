__d(
  "WAWebHeadingFormatMutator",
  [
    "$InternalEnum",
    "WAWebCreateRegexMutator",
    "WAWebRichTextHeading.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum")({
        LEVEL_1: 1,
        LEVEL_2: 2,
        LEVEL_3: 3,
        LEVEL_4: 4,
      }),
      c = /^(#{1,4})\s([^\n]+)(?:$)(?:\n|$)/gm,
      d = r("WAWebCreateRegexMutator")(c, 2);
    function m(e) {
      switch (e) {
        case "#":
          return u.LEVEL_1;
        case "##":
          return u.LEVEL_2;
        case "###":
          return u.LEVEL_3;
        case "####":
          return u.LEVEL_4;
        default:
          return u.LEVEL_4;
      }
    }
    var p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n) {
            var e = n[2],
              o = n[1];
            return s.jsx(r("WAWebRichTextHeading.react"), {
              level: m(o),
              text: e,
            });
          }),
          t
        );
      })(d),
      _ = new Set([u.LEVEL_1, u.LEVEL_2]),
      f = new Set([u.LEVEL_3, u.LEVEL_4]),
      g = function (t) {
        return _.has(t);
      },
      h = function (t) {
        return f.has(t);
      },
      y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n) {
            var e = n[2],
              o = m(n[1]);
            return g(o)
              ? s.jsx(r("WAWebRichTextHeading.react"), { level: o, text: e })
              : h(o)
                ? s.jsx(r("WAWebRichTextHeading.react"), { level: o, text: e })
                : s.jsx("span", { children: n[0] });
          }),
          t
        );
      })(d),
      C = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n) {
            var e = n[2];
            return s.jsx("span", { children: e });
          }),
          t
        );
      })(d);
    ((C.unformatDecorations = { post: " " }),
      (l.HeadingLevel = u),
      (l.RegexMutator = d),
      (l.Heading = p),
      (l.AIRichResponseHeading = y),
      (l.HeadlessHeading = C));
  },
  98,
);
