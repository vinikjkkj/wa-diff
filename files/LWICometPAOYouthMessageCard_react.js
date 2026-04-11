__d(
  "LWICometPAOYouthMessageCard.react",
  [
    "fbt",
    "$InternalEnum",
    "FDSContextualMessage.react",
    "FDSLink.react",
    "LWIOmniText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored([
        "MIXED_AUDIENCE",
        "YOUTH_CONTENT",
        "YOUTH_ONLY",
      ]),
      m = s._(/*BTDS*/ "Learn more");
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(r("FDSLink.react"), {
              href: "/business/help/229435355723442",
              target: "_blank",
              children: c.jsx(r("LWIOmniText.react"), {
                color: "blueLink",
                display: "inline",
                type: "body3",
                children: m,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var _ = s._(
        /*BTDS*/ "Get access to advanced features like showing ads to teens and more. {Learn More link}",
        [s._param("Learn More link", c.jsx(p, {}))],
      ),
      f = s._(
        /*BTDS*/ "Your ads will only deliver to adults because you don\u2019t currently have access to advertising to teens. You\u2019ll need to complete certain steps to advertise to people under 18. {Learn More link}",
        [s._param("Learn More link", c.jsx(p, {}))],
      ),
      g = s._(
        /*BTDS*/ "Update your age settings to 18 or older globally (or older in some countries). You\u2019ll need to complete certain steps to advertise to people under 18. {Learn More link}",
        [s._param("Learn More link", c.jsx(p, {}))],
      ),
      h =
        ((e = {}),
        (e[d.MIXED_AUDIENCE] = f),
        (e[d.YOUTH_CONTENT] = _),
        (e[d.YOUTH_ONLY] = g),
        e);
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.variant,
        a = h[n],
        i;
      return (
        t[0] !== a
          ? ((i = c.jsx(r("FDSContextualMessage.react"), {
              body: a,
              type: "secondary",
            })),
            (t[0] = a),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    ((l.PAOYouthMessageVariant = d), (l.LWICometPAOYouthMessageCard = y));
  },
  226,
);
