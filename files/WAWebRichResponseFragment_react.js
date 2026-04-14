__d(
  "WAWebRichResponseFragment.react",
  [
    "WAWebRichResponse.flow",
    "WAWebRichResponseContentItemsCarouselFragment.react",
    "WAWebRichResponseTableFragment.react",
    "WAWebRichResponseTextFragment.react",
    "WAWebRichResponseUnknownFragment.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.fragment,
        n = e.msg;
      switch (t.type) {
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
          return s.jsx(r("WAWebRichResponseTextFragment.react"), {
            fragment: t,
            msg: n,
          });
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
          return s.jsx(r("WAWebRichResponseUnknownFragment.react"), {
            fragment: t,
            parseState: n.richResponse.parseState,
          });
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Table:
          return s.jsx(r("WAWebRichResponseTableFragment.react"), {
            fragment: t,
          });
        case o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems:
          return s.jsx(
            r("WAWebRichResponseContentItemsCarouselFragment.react"),
            { fragment: t, msg: n },
          );
      }
      return null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
