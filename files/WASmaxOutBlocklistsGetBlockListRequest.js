__d(
  "WASmaxOutBlocklistsGetBlockListRequest",
  ["WASmaxChildren", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.itemDhash,
        n = o("WASmaxJsx").smax("item", { dhash: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t) {
      var n = t.itemArgs,
        r = o("WASmaxJsx").smax(
          "iq",
          {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "blocklist",
            type: "get",
            id: o("WAWap").generateId(),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(e, n),
        );
      return r;
    }
    ((l.makeGetBlockListRequestItem = e), (l.makeGetBlockListRequest = s));
  },
  98,
);
