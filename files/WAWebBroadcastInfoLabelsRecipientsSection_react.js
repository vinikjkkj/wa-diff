__d(
  "WAWebBroadcastInfoLabelsRecipientsSection.react",
  [
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebContactCollection",
    "WAWebListItemParentType",
    "WAWebWidFactory",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.label,
        a = n.chatCount,
        i;
      t[0] !== a
        ? ((i = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceRecipientCountLabel(a)),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      if (t[2] !== n.labelItemCollection || t[3] !== l) {
        var p = n.labelItemCollection.filter(m).map(d),
          _;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = { className: "xdx6fka xvtqlqk" }), (t[5] = _))
          : (_ = t[5]);
        var f;
        (t[6] !== l
          ? ((f = s.jsx(r("WDSText.react"), {
              type: "Body1Emphasized",
              colorName: "accentEmphasized",
              children: l,
            })),
            (t[6] = l),
            (t[7] = f))
          : (f = t[7]),
          (u = s.jsxs(
            "div",
            babelHelpers.extends({}, _, { children: [f, p.map(c)] }),
          )),
          (t[2] = n.labelItemCollection),
          (t[3] = l),
          (t[4] = u));
      } else u = t[4];
      return u;
    }
    function c(e, t) {
      var n = o("WAWebWidFactory").createWid(e),
        a = o("WAWebContactCollection").ContactCollection.gadd(n);
      return s.jsx(
        "div",
        {
          className: "x1tiyuxx",
          children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
            contact: a,
            index: t,
          }),
        },
        e,
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return e.parentId;
    }
    function m(e) {
      return (
        e.parentType === o("WAWebListItemParentType").LabelItemParentType.Chat
      );
    }
    l.default = u;
  },
  98,
);
