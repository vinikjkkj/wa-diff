__d(
  "WAWebRichResponseFragment.react",
  [
    "WAWebRichResponse.flow",
    "WAWebRichResponseContentItemsCarouselFragment.react",
    "WAWebRichResponseTableFragment.react",
    "WAWebRichResponseTextFragment.react",
    "WAWebRichResponseUnknownFragment.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.fragment,
        a = e.msg;
      switch (n.type) {
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Text: {
          var i;
          return (
            t[0] !== n || t[1] !== a
              ? ((i = s.jsx(r("WAWebRichResponseTextFragment.react"), {
                  fragment: n,
                  msg: a,
                })),
                (t[0] = n),
                (t[1] = a),
                (t[2] = i))
              : (i = t[2]),
            i
          );
        }
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown: {
          var l;
          return (
            t[3] !== n || t[4] !== a.richResponse.parseState
              ? ((l = s.jsx(r("WAWebRichResponseUnknownFragment.react"), {
                  fragment: n,
                  parseState: a.richResponse.parseState,
                })),
                (t[3] = n),
                (t[4] = a.richResponse.parseState),
                (t[5] = l))
              : (l = t[5]),
            l
          );
        }
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Table: {
          var u;
          return (
            t[6] !== n
              ? ((u = s.jsx(r("WAWebRichResponseTableFragment.react"), {
                  fragment: n,
                })),
                (t[6] = n),
                (t[7] = u))
              : (u = t[7]),
            u
          );
        }
        case o("WAWebRichResponse.flow").RichResponseFragmentType
          .ContentItems: {
          var c;
          return (
            t[8] !== n || t[9] !== a
              ? ((c = s.jsx(
                  r("WAWebRichResponseContentItemsCarouselFragment.react"),
                  { fragment: n, msg: a },
                )),
                (t[8] = n),
                (t[9] = a),
                (t[10] = c))
              : (c = t[10]),
            c
          );
        }
      }
      return null;
    }
    l.default = u;
  },
  98,
);
