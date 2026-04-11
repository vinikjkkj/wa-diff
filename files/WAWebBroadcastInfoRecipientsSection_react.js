__d(
  "WAWebBroadcastInfoRecipientsSection.react",
  [
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsCreationStrings",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(10),
        i = e.chat,
        l = (t = i.broadcastMetadata) == null ? void 0 : t.recipients,
        u = (n = l == null ? void 0 : l.length) != null ? n : 0,
        d;
      a[0] !== u
        ? ((d = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceRecipientCountLabel(u)),
          (a[0] = u),
          (a[1] = d))
        : (d = a[1]);
      var m = d,
        p;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "xdx6fka xvtqlqk" }), (a[2] = p))
        : (p = a[2]);
      var _;
      a[3] !== m
        ? ((_ = s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "accentEmphasized",
            children: m,
          })),
          (a[3] = m),
          (a[4] = _))
        : (_ = a[4]);
      var f;
      a[5] !== l
        ? ((f = l == null ? void 0 : l.map(c)), (a[5] = l), (a[6] = f))
        : (f = a[6]);
      var g;
      return (
        a[7] !== _ || a[8] !== f
          ? ((g = s.jsxs(
              "div",
              babelHelpers.extends({}, p, { children: [_, f] }),
            )),
            (a[7] = _),
            (a[8] = f),
            (a[9] = g))
          : (g = a[9]),
        g
      );
    }
    function c(e, t) {
      return s.jsx(
        "div",
        {
          className: "x1tiyuxx",
          children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
            contact: e.contact,
            index: t,
          }),
        },
        t,
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
