__d(
  "WAWebContactMsgInfoFlow.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebContactMsgInfoDrawer.react",
    "WAWebFrontendMsgGetters",
    "WAWebProductDetailsFlowLoadable",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored(["MessageInfo", "ProductDetails"]);
    function d(e) {
      var t = e.msg,
        n = o("useWAWebFlow").useFlow(c.MessageInfo, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        a = n[0],
        i = n[1],
        l = u(),
        d = l[0],
        m = l[1];
      if (i.step == null) return null;
      var p;
      switch (i.step) {
        case c.MessageInfo: {
          var _ = function (t) {
            (m(t), i.push(c.ProductDetails));
          };
          p = s.jsx(r("WAWebContactMsgInfoDrawer.react"), {
            msg: t,
            onProductClick: _,
          });
          break;
        }
        case c.ProductDetails: {
          p = s.jsx(
            o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
            {
              refreshCarousel: !0,
              chat: o("WAWebFrontendMsgGetters").getChat(t),
              product: r("WANullthrows")(d),
              onEnd: function () {
                return i.pop();
              },
            },
          );
          break;
        }
      }
      return s.jsx(a, { flow: i, children: p });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
