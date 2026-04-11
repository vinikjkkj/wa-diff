__d(
  "WASmaxOutBlocklistsGetOptOutListRequest",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.itemDhash,
        n = o("WASmaxJsx").smax("item", { dhash: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t) {
      var n = t.itemArgs,
        r = t.iqCategory,
        a = o("WASmaxJsx").smax(
          "iq",
          {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "optoutlist",
            type: "get",
            category: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
            id: o("WAWap").generateId(),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(e, n),
        );
      return a;
    }
    ((l.makeGetOptOutListRequestItem = e), (l.makeGetOptOutListRequest = s));
  },
  98,
);
