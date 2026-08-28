__d(
  "CDSExternalLinkedEntityRenderer",
  ["XMDSInlinePressableText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t, n) {
        return n.url == null
          ? t
          : s.jsx(r("XMDSInlinePressableText.react"), {
              linkProps: { target: "_blank", url: n.url },
              children: t,
            });
      };
    l.default = u;
  },
  98,
);
