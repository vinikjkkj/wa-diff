__d(
  "MAIBAComposedTextV2CustomNodeRelay",
  [
    "CometComposedTextV2Relay",
    "MAIBAComposedTextV2CustomNodeRelayRef.react",
    "MAIBAComposedTextV2CustomNodeRelay_data.graphql",
    "MAIBAComposedTextV2CustomNodeRelay_node.graphql",
    "MAIBACustomNode",
    "MAIBACustomNodeRenderer.react",
    "RelayHooks",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 || (e = n("MAIBAComposedTextV2CustomNodeRelay_node.graphql"));
    var u = o("CometComposedTextV2Relay").composedTextV2CreateRelayNode(
        r("MAIBAComposedTextV2CustomNodeRelayRef.react"),
        function (e) {
          var t,
            a,
            i,
            l,
            u,
            c,
            d = e.nodeKey,
            m = o("RelayHooks").readInlineData(
              s !== void 0
                ? s
                : (s = n("MAIBAComposedTextV2CustomNodeRelay_data.graphql")),
              d,
            );
          return new (o("MAIBACustomNode").MAIBACustomNode)(
            {
              custom_type:
                (t =
                  m == null || (a = m.node) == null ? void 0 : a.custom_type) !=
                null
                  ? t
                  : "",
              key:
                (i = m == null || (l = m.node) == null ? void 0 : l.key) != null
                  ? i
                  : r("cometComposedTextV2NodeKey")(),
              state:
                (u = m == null || (c = m.node) == null ? void 0 : c.state) !=
                null
                  ? u
                  : "{}",
            },
            r("MAIBACustomNodeRenderer.react"),
          );
        },
      ),
      c = u;
    l.default = c;
  },
  98,
);
